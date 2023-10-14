export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto bg-inherit">
          <div className="flex flex-wrap justify-between bg-inherit">
            <div className="w-full md:w-1/4 mb-12 bg-inherit">
              <h5 className="text-xl font-bold bg-inherit">T-Planner</h5>
              <p className="text-gray-400 bg-inherit">
                Enjoy Your Planning 
              </p>
            </div>
            
            <div className="w-full md:w-1/4 mb-12 pr-64 bg-inherit">
              <h5 className="font-semibold bg-inherit">Links</h5>
              <ul className="mt-4 text-gray-400 bg-inherit">
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">Home</li>
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">About</li>
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">Contact</li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/4 mb-12 pr-64 bg-inherit">
              <h5 className="font-semibold bg-inherit">Help</h5>
              <ul className="mt-4 text-gray-400 bg-inherit">
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">FAQ</li>
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">Shipping</li>
                <li className="py-2 cursor-pointer bg-inherit hover:text-sky-400">Returns</li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/4 bg-inherit">
              <div className="flex items-center justify-between bg-inherit">
                <span className="text-gray-500 bg-inherit">&copy; 2023 Company</span>
                
            
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }