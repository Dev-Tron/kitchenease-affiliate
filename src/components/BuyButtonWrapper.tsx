"use client";

import BuyButton from "./BuyButton";

export default function BuyButtonWrapper({ url }: { url?: string }) {
  return <BuyButton url={url} />;
}
