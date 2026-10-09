/**
 * Shared JPG validation for OG share assets (build check + tests).
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import {
  OG_SHARE_HEIGHT,
  OG_SHARE_MAX_BYTES,
  OG_SHARE_MIN_BYTES,
  OG_SHARE_RIGHT_MIN_STDDEV,
  OG_SHARE_WIDTH,
} from './og-share-meta.mjs';

export async function validateOgShareJpg(filePath) {
  const offenders = [];
  const rel = path.basename(filePath);
  if (!fs.existsSync(filePath)) {
    return [`${rel}: file missing`];
  }
  const stat = fs.statSync(filePath);
  if (stat.size < OG_SHARE_MIN_BYTES) {
    offenders.push(`${rel}: ${stat.size} bytes (min ${OG_SHARE_MIN_BYTES})`);
  }
  if (stat.size > OG_SHARE_MAX_BYTES) {
    offenders.push(`${rel}: ${stat.size} bytes (max ${OG_SHARE_MAX_BYTES})`);
  }
  const meta = await sharp(filePath).metadata();
  if (meta.width !== OG_SHARE_WIDTH || meta.height !== OG_SHARE_HEIGHT) {
    offenders.push(`${rel}: ${meta.width}×${meta.height} (expected ${OG_SHARE_WIDTH}×${OG_SHARE_HEIGHT})`);
  }
  const halfW = Math.floor(OG_SHARE_WIDTH / 2);
  const stats = await sharp(filePath)
    .extract({ left: halfW, top: 0, width: halfW, height: OG_SHARE_HEIGHT })
    .stats();
  const stdDev = Math.max(...stats.channels.map((c) => c.stdev));
  if (stdDev < OG_SHARE_RIGHT_MIN_STDDEV) {
    offenders.push(`${rel}: right-half stdev ${stdDev.toFixed(2)} (min ${OG_SHARE_RIGHT_MIN_STDDEV})`);
  }
  return offenders;
}
