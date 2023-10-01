import React from "react";
import { Button, Image } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid"
                style={{ background: 'black', overflow: 'hidden', }}>
                <p className="footer-heading mx-auto text-center text-white mb-3">We are open and accepting to all. Come work with me</p>
                <p className="text-center text-white mt-5 footer-subheading mx-auto">Experts teach you everything from the comfort of your own home. Improve your career today by enrolling in excellent courses at affordable prices.</p>
                <div className="text-center mx-auto"> <Button className=" rounded-pill my-5 text-black  " style={{
                    background: "#c2278e", border: "#c2278e", width: '201.42px',
                    height: '54.62px'
                }} size="sm" >Get Started</Button></div>
                <div class="d-flex flex-row mb-3 flex-wrap ">
                    <div class="flex-item1" >
                        <div>
                            <Image className="mb-4 footer-logo" src="/assets/images/first-logo.png" />
                        </div>
                        <div>
                            <Image className="mb-4" src="/assets/images/first-capital.png" />
                        </div>
                        <p className="  text-white" style={{
                            fontWeight: '400',
                            fontFamily: 'Plus Jakarta Sans'
                        }}>Turning Uncertainty Into Your Advantage</p>
                    </div>
                    <div class="p-2 text-center flex-items">Flex item 1</div>

                </div>
            </div>

        </React.Fragment >
    )
}
export default Footer;