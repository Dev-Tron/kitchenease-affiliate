export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow font-semibold"
      >
        Back to Home
      </a>
    </div>
  );
}
