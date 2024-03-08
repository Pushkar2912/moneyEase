import { useContext } from "react";
import Button from "../custom/Button"
import { AuthContext } from "../../context/AuthContextProvider";
import Avatar from "../custom/Avatar";

const Navbar = () => {

    const { user, handleLogout } = useContext(AuthContext);
    
    return (
        <div className="home-nav border-b flex justify-between items-center h-[60px]">
                    <div className="nav-left flex items-center border-r gap-2 w-[240px] p-2">
                        <Avatar name={user.name} />
                        <div className="nav-name">
                            {user.name}
                        </div>
                    </div>
                    {/* <div className="nav-middle">
                        middle
                    </div> */}
                    <div className="nav-right p-2">
                        <button onClick={handleLogout} className="font-semibold bg-red-200 text-red-500 text-sm p-2 px-4 rounded-md hover:bg-red-300 ">Logout</button>
                    </div>
                </div>
    )
}
export default Navbar;