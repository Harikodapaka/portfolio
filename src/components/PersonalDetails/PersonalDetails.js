import './PersonalDetails.css';
import { SiHey } from "react-icons/si";
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function PersonalDetails() {
    return (
        <section className="section-padding text-center text-white">
            <div className="container-md bg-shade p-3">
                <h1 className="font-italic">Hello <SiHey />,</h1>
                <div>
                    I'm Hari, a Web & MEAN stack Developer based in Toronto, Canada.
                    That was an Ice Breaker! Cool, You are still reading. I can tell you more about me then.
                    I love travelling, hiking, watching TV shows and ... I forgot.
                    Did you just ask about my passion? I can define it in two words,"Web Development".
                    Still curious, scroll down to know more about my experience and skills.
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}
export default PersonalDetails;
