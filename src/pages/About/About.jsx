import Logo from "../../components/Logo/Logo";
import Underlink from "../../components/Underlink/Underlink";
import star from "../../assets/star-face.svg";

import "./about.css";

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <Logo />
                <p className="fs-normal fm-monse-light">
                    Is brought to you{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            name: "_by_me",
                            href: "https://github.com/kxrn0/",
                            target: "_blank",
                        }}
                    />{" "}
                    in collaboration with{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            name: "waifu.pics",
                            href: "https://waifu.pics",
                            target: "_blank",
                        }}
                    />{" "}
                    and{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            name: "waifu.im",
                            href: "https:waifu.im",
                            target: "_blank",
                        }}
                    />
                </p>
                <p className="fs-normal fm-monse-light disclaimer">
                    Please notice that the servers over at{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            name: "waifu.im",
                            href: "https://waifu.im",
                            target: "_blank",
                        }}
                    />{" "}
                    are running on extraordinarily ancient hardware predating
                    the Finno-Korean Hyperwar, so it is advised to limit the
                    number of requests made to it. Our partners over at{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            name: "waifu.pics",
                            href: "https://waifu.pics",
                            target: "_blank",
                        }}
                    />{" "}
                    have considerably more modern hardware, thus it's possible
                    to get up to one hundred responses at a time. Products
                    provided by them are marked with a{" "}
                    <img src={star} className="seal" alt="seal of approval" />{" "}
                    symbol.
                </p>
            </div>
        </div>
    );
}
