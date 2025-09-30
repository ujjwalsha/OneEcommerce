import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () =>{


    const [query, setquery] = ("");

    const handleChange = (e)=>{
        const newquery = e.target.value;
        setquery(newquery);
    }


    return(
        <>
        <div className="bg-black text-white flex gap-12 w-6xl justify-between p-5 h-14 rounded-xl border-gray-600 border-1">

            <div className="logo-section flex gap-10 items-center">
                <p className="font-bold text-white text-2xl">OneEcommerce</p>
                <a 
                href="/"
                className="text-md"
                >Home</a>

                <div className="search-bar flex  justify-center items-center">
                    <input 
                    type="text"
                    className="w-xl p-2 border-1 border-gray-600"
                    placeholder="Search products......."
                    value={query}
                    onChange={handleChange}
                    />

                    <button className="flex justify-center cursor-pointer font-bold text-3xl border-2 border-gray-600 h-full p-2"><SearchIcon></SearchIcon></button>

                </div>

                


            </div>

            <div className="profile-section flex gap-10 items-center">
               <MyLocationIcon></MyLocationIcon>
                <ShoppingCartIcon></ShoppingCartIcon>
                <AccountCircleIcon></AccountCircleIcon>
            </div> 
        </div>
        </>
    )
}


export default Navbar;