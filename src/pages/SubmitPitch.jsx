// src/pages/SubmitPitch.jsx
export default function SubmitPitch() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Submit Pitch</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Pitch Title</label>
          <input
            type="text"
            className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Pitch Description</label>
          <textarea className="w-full bg-gray-800 text-white p-2 rounded focus:outline-none focus:ring focus:ring-green-500"></textarea>
        </div>
        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}
