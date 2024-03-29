export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-20 h-20 border-t-4 rounded-full animate-spin border-cyan-500"></div>
            <div className="mt-4 font-bold text-cyan-500">Loading...</div>
        </div>
    );
}
