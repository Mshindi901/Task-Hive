import Welcome from "../Components/Welcome.jsx";
import Workings from "../Components/How-it-Works.jsx";
import Services from "../Components/Services.jsx";

export default function Home(){
    return(
        <>
            <div className="home">
                <Welcome/>
                <Workings/>
                <Services/>
            </div>
        </>
    )
}