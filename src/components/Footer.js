import { Link } from "react-router-dom";


const Footer = () => {


    return(
        <div className="bg-black text-white w-full flex justify-around p-14  mt-10"> 
        <div>
          <h1 className="font-serif text-2xl font-bold cursor-pointer hover:text-cyan-600">Jumba Foods</h1>
          <p className="mt-1">© 2024-All Right Reserved</p>
        </div>
        <div>
           <h2 className="text-xl font-serif font-extrabold cursor-pointer hover:text-cyan-600">Company</h2>
           <ul className="mt-3 font-mono ">
          <Link to="/about"><li className="mb-2 cursor-pointer hover:text-cyan-400">About</li></Link>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Carriers</li>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Grocery</li>
           </ul>
        </div>
        <div>
           <h2 className="text-xl font-serif font-extrabold cursor-pointer hover:text-cyan-600">Contact us</h2>
           <ul className="mt-3 font-mono list-none">
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Help & Support</li>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Partner with Us</li>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Ride With Us</li>
           </ul>
        </div>
        <div>
           <h2 className="text-xl font-serif font-extrabold cursor-pointer hover:text-cyan-600">Legal</h2>
           <ul className="mt-3 font-mono">
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Terms and condition</li>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Cookie policy</li>
            <li className="mb-2 cursor-pointer hover:text-cyan-400">Privacy Policy</li>
           </ul>
        </div>
        </div>
    )
}

export default Footer;