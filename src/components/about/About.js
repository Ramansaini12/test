import React from "react";
import { Image } from "react-bootstrap";

const About = () => {
    return (
        <React.Fragment>
            <div className="overflow-hidden container-fluid" style={{ backgroundColor: '#C2278E', height: '573px' }}>
                <div className=" position-relative">
                    <Image className="img-vector  px-5 mr-5 " style={{ backgroundColor: '#C2278E' }} src="assets/images/vector-48.png" />
                </div>
                <div className=" text-center">
                    <p className="text-wrap heading-top text-white ">About Olvera</p>
                </div>
                <div className="text-center " style={{
                }}>
                    <p className="text-wrap heading-right text-white "  > Change is the one <br></br>true constant in business</p>
                </div>
                <div className="text-center " style={{
                }}>
                    <p className="text-wrap paragraph-about text-white "  > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="d-flex flex-row img-about mb-3 flex-wrap">
                    <div className="image-fluid position-image">
                        <Image className="img-1 " src="assets/images/about-1.png" />
                        <Image className="img-2 " src="assets/images/about-2.png" />

                    </div>
                    <div className="image-fluid position-image position-image2">
                        <Image className="img-3 " src="assets/images/about-3.png" />
                        <Image className="img-4" src="assets/images/about-4.png" />
                    </div>


                </div>
            </div>

        </React.Fragment>
    )
}
export default About;