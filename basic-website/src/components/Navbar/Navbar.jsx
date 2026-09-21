function Navbar(){

    return(
        <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0"> 
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <a href="#" className="font-semibold hover:text-blue-600 font-mono">
                        <i className="fa-solid fa-umbrella-beach pr-3"></i>
                        Ege Travel
                    </a>
                </div>
                <ul className="space-x-8 text-gray-700 flex">
                    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#home" className="hover:text-blue-600">About</a></li>
                    <li><a href="#home" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </div>
            
        
        </nav>

    );
}

export default Navbar