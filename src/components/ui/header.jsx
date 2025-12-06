import { Link } from "react-router-dom";
import { Button } from "./button"
const Header = () => {
    return (
        <>
        <nav className="py-4 flex justify-between items-center ">
            <Link>
                <img src="Screenshot 2025-12-07 004638.png" className="h-6 rounded-md"/>    
            </Link>

            <Button variant="outline">login</Button>
        </nav>
        </>
    )
};

export default Header;