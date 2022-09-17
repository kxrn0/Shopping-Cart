import { Link } from "react-router-dom";

import "./underlink.css";

export default function Underlink({ type, tag, options }) {
    let link;

    if (tag === "Link")
        link = (
            <Link to={options.path} className={options.classes.join(" ")}>
                {type === "text" ? (
                    options.name
                ) : (
                    <img
                        src={
                            options.img.active
                                ? options.img.activeSrc
                                : options.img.inactiveSrc
                        }
                        alt={options.img.alt}
                    />
                )}
            </Link>
        );
    else
        link = (
            <a href={options.href} target={options.target}>
                {type === "text" ? (
                    options.name
                ) : (
                    <img
                        src={
                            options.img.active
                                ? options.img.activeSrc
                                : options.img.inactiveSrc
                        }
                        alt={options.img.alt}
                    />
                )}
            </a>
        );
    return (
        <span className="underlink">
            {link}
            <span></span>
        </span>
    );
}
