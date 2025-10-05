export const amazonTag = process.env.NEXT_PUBLIC_AMZ_TAG || "";

// Automatically append the tag to URLs if missing
export function withTag(url?: string) {
  if (!url || !amazonTag) return url;
  return url.includes("?")
    ? `${url}&tag=${amazonTag}`
    : `${url}?tag=${amazonTag}`;
}
