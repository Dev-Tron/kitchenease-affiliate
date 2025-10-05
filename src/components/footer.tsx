export default function Footer() {
    return (
      <footer className="bg-stone-100 border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-stone-600">
          <p>© {new Date().getFullYear()} KitchenEase. All rights reserved.</p>
          <p className="mt-2">
            We may earn a small commission when you buy through our links. Affiliate links coming soon.
          </p>
        </div>
      </footer>
    )
  }
  