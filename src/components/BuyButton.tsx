import { withTag } from "@/lib/afiliate";

interface Props {
  url?: string;
}

export default function BuyButton({ url }: Props) {
  const taggedUrl = withTag(url);

  return (
    <a
      href={taggedUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 bg-[#5A8F60] hover:bg-brand-dark text-white px-4 py-2 rounded-lg shadow"
    >
      Buy on Amazon
    </a>
  );
}
