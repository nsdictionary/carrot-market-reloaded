export default function Home() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <div className="mb-6">
        <div className="mb-3">
          <div className="flex items-center">
            <h2 className="text-sm font-semibold text-black">March 2021</h2>
            <span className="ml-1 text-gray-600">∨</span>
          </div>
          <div className="mt-2 border-b border-gray-400"></div>
        </div>

        <div className="text-center">
          <p className="text-xl font-medium">Hello, Bruno!</p>
          <p className="text-xl font-medium text-gray-900">
            Your medicines for today
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between">
          <div className="text-center">
            <div className="text-lg font-bold mb-1">16</div>
            <div className="text-sm text-gray-500 font-medium">Mon</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold mb-1">17</div>
            <div className="text-sm text-gray-500 font-medium">Tue</div>
          </div>
          <div className="text-center -mt-2">
            <div className="bg-blue-400 rounded-2xl px-1 py-2">
              <div className="text-lg font-bold mb-1 text-black">18</div>
              <div className="text-sm font-medium text-black">Wed</div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold mb-1">19</div>
            <div className="text-sm text-gray-500 font-medium">Thu</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold mb-1">20</div>
            <div className="text-sm text-gray-500 font-medium">Fri</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold mb-1">21</div>
            <div className="text-sm text-gray-500 font-medium">Sat</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <div className="flex-1 bg-yellow-100 rounded-lg z-10 p-4">
            <div className="font-bold text-xl">Nora - BE</div>
            <p className="text-sm text-gray-700 font-medium">
              Norenthindrone - 0.35mg
            </p>
            <p className="text-sm text-gray-700 font-medium mt-10">7h30AM</p>
          </div>

          <div className="w-16 bg-blue-400 rounded-lg flex items-center justify-center -ml-3">
            <span className="text-2xl text-black font-bold">✓</span>
          </div>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold text-xl">Feosol</h3>
          <p className="text-sm text-gray-700 font-medium mb-16">
            Ferrous Sulfate - 600mg
          </p>
        </div>
      </div>
    </div>
  );
}
