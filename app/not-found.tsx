import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">Not Found</h2>
                <p className="text-gray-600 mb-8">Could not find the requested resource</p>
                <Link href="/" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
                    Return Home
                </Link>
            </div>
        </div>
    );
}
