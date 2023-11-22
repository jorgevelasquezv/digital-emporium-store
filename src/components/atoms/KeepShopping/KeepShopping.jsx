import Link from 'next/link'

export const KeepShopping = () => {
  return (
      <Link
          href="/"
          className="bg-blue-600 text-white text-lg font-semibold text-center w-full px-6 py-4 rounded-md mt-4 transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-900"
      >
          Keep Shopping
      </Link>
  );
}