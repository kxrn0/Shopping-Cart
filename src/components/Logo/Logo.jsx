import "./logo.css";
import heart from "../../assets/heart.svg";

export default function Logo() {
    return (
        <div className="logo fm-nanum">
            <p className="before">Waifu</p>
            <img src={heart} alt="company logo" /> 
            <p className="after">Market</p>
        </div>
    );
}
