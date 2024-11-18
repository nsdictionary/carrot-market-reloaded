export default function Home() {
  return (
    <main className="bg-yellow-300 p-8 pt-64 rounded-[32px] max-w-sm">
      <h2 className="text-black font-bold text-xl mb-4 border-b border-black pb-2">
        Select Destination
      </h2>
      <ul className="space-y-1">
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            v
          </span>
          <span className="text-black text-2xl font-bold">Vancouver</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            s
          </span>
          <span className="text-black text-2xl font-bold">Seattle</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            p
          </span>
          <span className="text-black text-2xl font-bold">Portland</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            s
          </span>
          <span className="text-black text-2xl font-bold">Seattle</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-white text-yellow-200 rounded-full flex items-center justify-center text-base font-semibold">
            s
          </span>
          <span className="text-white text-2xl font-bold">San Francisco</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            l
          </span>
          <span className="text-black text-2xl font-bold">Los Angeles</span>
        </li>
        <li className="flex items-center space-x-4 hover:bg-yellow-200 p-2 rounded-lg cursor-pointer">
          <span className="w-7 h-7 bg-black text-yellow-300 rounded-full flex items-center justify-center text-base font-semibold">
            s
          </span>
          <span className="text-black text-2xl font-bold">San Diego</span>
        </li>
      </ul>
    </main>
  );
}
