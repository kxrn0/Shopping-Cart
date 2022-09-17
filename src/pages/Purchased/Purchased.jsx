import { useState } from "react";
import "./purchased.css";
import Loading from "../../components/Loading/Loading";

import Image from "../../components/Image/Image";

export default function Purchased({ links, loading, error }) {
    const [currentImage, setCurrentImage] = useState("");
    const [shown, setShown] = useState(false);
    let element;

    if (error) {
        element = (
            <div className="error">
                <p className="fs-extra-large emoji">{"\\(>.<)/"}</p>
                <p className="message fs-medium fm-monse-light">
                    An error occurred, the server may have been overwhelmed by
                    requests, in which case, you need to lower the amount. It
                    could also be that your internet is disconnected.
                </p>
            </div>
        );
    } else
        element = (
            <div className="container">
                <div className={`display ${shown ? "shown" : "hidden"}`}>
                    <button className="close" onClick={close}></button>
                    <img src={currentImage} alt="image" />
                </div>
                {links.map((link) => (
                    <div className="wrapper" key={Math.random()}>
                        <Image src={link} alt="image" />
                        <button
                            className="expand"
                            onClick={() => display_image(link)}
                        ></button>
                    </div>
                ))}
            </div>
        );

    function display_image(src) {
        setCurrentImage(src);
        setShown(true);
    }

    function close() {
        setShown(false);
    }

    return (
        <div className="purchased">
            {loading && <Loading />}
            {element}
        </div>
    );
}
