import { useContext } from "react";
import Button from "../custom/Button"
import { AuthContext } from "../../context/AuthContextProvider";
import Avatar from "../custom/Avatar";

const Navbar = () => {

    const { user, handleLogout } = useContext(AuthContext);
    
    return (
        <div className="home-nav border-b flex justify-between items-center h-15">
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
                        <button onClick={handleLogout} className="bg-blue-500 text-sm font-semibold text-white p-2 rounded-md hover:bg-blue-600 ">Logout</button>
                    </div>
                </div>
    )
}
export default Navbar;