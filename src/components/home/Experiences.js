import React from "react";
import { Image } from "react-bootstrap";
const Experiences = () => {
    return (
        <React.Fragment>
            <div className="overflow-hidden container-fluid" style={{ height: '573px' }}>
                <div className=" position-relative">
                    <Image className=" " style={{ height: '630px', width: '100%' }} src="assets/images/exp-bg.png" />
                </div>
                <div className=" text-center">
                    <p className="text-wrap exp-top text-white ">Olvera Guides</p>
                </div>
                <div className=" text-center">
                    <p className="text-wrap paragraph-exp text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Experiences;