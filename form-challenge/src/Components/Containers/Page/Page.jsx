import Card from "../../Card/Card"
import Header from "../Header/Header"
import Navbar from "../../Navbar/Navbar";



export const Page = () => {
    
    return( 
        <>
        <Header/>
        <Card nav={<Navbar/>}/>
        </>
    )
};

export default Page;