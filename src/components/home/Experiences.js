import React from "react";
import { Image } from "react-bootstrap";
const Experiences = () => {
    return (
        <React.Fragment>
            <div className="overflow-hidden container-fluid" style={{ height: '573px' }}>
                <div className=" position-relative">
                    <Image className="exp-image " style={{ height: '630px', }} src="/assets/Images/exp-bg.png" />
                </div>
                <div className=" text-center">
                    <p className="text-wrap exp-top  ">Olvera Guides</p>
                </div>
                <div className=" text-center">
                    <p className="text-wrap paragraph-exp text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="right-button">
                    <span className="me-5 text-view">View More</span>
                    <svg className=" " style={{ width: '120px' }} viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff" stroke-width="0.576"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#ffffff"> </path> <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#ffffff"> </path> </g></svg>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Experiences;