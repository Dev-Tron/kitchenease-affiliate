interface Props {
    url?: string
  }
  
  export default function BuyButton({ url }: Props) {
    return (
      <a 
        href={url || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow"
      >
        Buy on Amazon
      </a>
    )
  }
  