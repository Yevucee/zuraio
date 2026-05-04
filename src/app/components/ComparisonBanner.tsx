interface ComparisonBannerProps {
  currentVersion: 'original' | 'revised' | 'product-led';
}

export function ComparisonBanner({ currentVersion }: ComparisonBannerProps) {
  void currentVersion;
  return null;
}
