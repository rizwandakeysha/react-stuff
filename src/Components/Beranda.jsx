import React from "react";


class Beranda extends React.Component {
    render () {
        return(
            <div>
                <video width="100%" muted="muted" height="100%" autoplay="" loop="">
                    <source src="./images/pexels-maksim-goncharenok-5642523.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    };
}

export default Beranda;