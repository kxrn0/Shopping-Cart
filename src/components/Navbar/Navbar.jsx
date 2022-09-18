import { useState } from "react";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Underlink from "../Underlink/Underlink";
import "./navbar.css";

export default function Navbar({ links }) {
    const [checked, setChecked] = useState(false);

    function handle_check(newState) {
        setChecked(newState);
    }

    return (
        <nav className="navbar">
            <Logo />
            <Burger checked={checked} handle_input={handle_check} />
            <div className={`links ${checked ? "checked" : "unchecked"}`}>
                {links.map((link) => (
                    <Underlink
                        key={link.options.name}
                        type={link.type}
                        tag={link.tag}
                        options={link.options}
                    />
                ))}
            </div>
        </nav>
    );
}
