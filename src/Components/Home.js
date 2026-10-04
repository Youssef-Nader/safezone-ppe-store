import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home (){
    useEffect(()=>{
            document.title = `SafeZone PPE Store`;
        }, []);
    return (
        <section className="home">
            <div className="container">
                <span className="eyebrow">Built for safer workdays</span>
                <h1>Your Trusted Partner for Safety & <span>PPE</span> Equipment</h1>
                <p>At <span>SafeZone</span>, we provide high-quality safety and personal protective equipment <span>(PPE)</span> for businesses worldwide. 
                    From helmets and gloves to reflective vests and first-aid kits, our mission is to keep your team safe 
                    while you focus on growing your business.
                </p>
                <Link to = "/products">
                    <button>Browse our products <span aria-hidden="true">→</span></button>
                </Link>
            </div>
        </section>
    );
}
export default Home;
