import BuyButton from "@/components/BuyButton";
import Image from "next/image";

const allFeatured = [
  {
    name: "COSORI Pro LE 5-Qt Air Fryer",
    image: "/fryer.jpg",
    url: "https://www.amazon.com/dp/B0936FGLQS?tag=kitchenease35-20",
    price: "$99.99",
  },
  {
    name: "Lodge 10.25-Inch Cast Iron Skillet",
    image: "/skillet2.jpg",
    url: "https://www.amazon.com/dp/B00006JSUA?tag=kitchenease35-20",
    price: "$24.90",
  },
  {
    name: "NutriBullet Pro 900",
    image: "/blender4.jpg",
    url: "https://www.amazon.com/dp/B0BZK4TZJ2?tag=kitchenease35-20",
    price: "$85.57",
  },
  {
    name: "COSORI Electric Gooseneck Kettle",
    image: "/kettle2.jpg",
    url: "https://www.amazon.com/dp/B07T1CH2HH?tag=kitchenease35-20",
    price: "$62.99",
  },
];

export default function FeaturedPage() {
  return (
    <main className="bg-gradient-to-br from-orange-50 via-white to-brand-light min-h-screen rounded-2xl">
      {/* Banner Header */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-orange-100 via-white to-brand-light border-b border-stone-300 shadow-sm rounded-2xl">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            KitchenEase Featured Picks
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            Our handpicked, tested tools for smarter, faster, and more enjoyable cooking.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 py-16 space-y-12 text-black">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {allFeatured.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="relative w-full h-52 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-stone-600">{item.price}</p>
              <BuyButton url={item.url} />
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="inline-block bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
