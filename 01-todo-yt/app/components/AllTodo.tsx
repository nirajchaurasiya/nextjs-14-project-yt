export default function AllTodo() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 md:py-6 py-24 mx-auto">
        <p className="mb-3 text-gray-300 text-lg font-extrabold">All Todos</p>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full border border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {/* Title */}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-400">
                  {/* Description */}
                </p>
                <p className="border-t border-t-gray-900 mb-3"></p>
                <p className="leading-relaxed text-gray-400 mb-3">
                  Created At:
                </p>
                <p className="border-t border-t-gray-900 mb-3"></p>

                <div className="flex items-center justify-between flex-wrap ">
                  <button className="text-white bg-orange-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0">
                    Delete
                  </button>
                  <button className="text-white pr-4 pl-4 text-center bg-blue-700 p-1 rounded inline-flex items-center md:mb-2 lg:mb-0">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
