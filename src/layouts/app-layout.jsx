import { Outlet } from "react-router-dom"
import Header from "@/components/ui/header"

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className="min-h-screen p-10 container ">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with love by Sachin Kumar Sah

            </div>
        </div>
        
    );
};

export default AppLayout