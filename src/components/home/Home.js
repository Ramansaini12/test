import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <React.Fragment>
            <div className="overflow-hidden container-fluid">
                <img className="img-fluid  position-relative" src="%PUBLIC_URL%/assets/images/agent.jpg" />
                <div className="position-absolute top-left"> <p className="text-wrap heading text-white "  >Start Your Story with Olvera</p>
                    <Button className="contact-btn rounded-pill px-4 py-2 " style={{ background: "#c2278e", border: "#c2278e" }} size="sm" ><Link to="/contact-us" className="text-decoration-none text-light">CONTACT US</Link></Button>
                </div>
            </div>
        </React.Fragment >
    )
};
export default Home;