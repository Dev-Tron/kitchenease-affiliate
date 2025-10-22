"use client";

import BuyButtonWrapper from "@/components/BuyButtonWrapper";

export default function PostClientSection({ affiliateLink }: { affiliateLink?: string }) {
  if (!affiliateLink) return null;

  return (
    <div className="mt-8">
      <BuyButtonWrapper url={affiliateLink} />
    </div>
  );
}
