import "./home.css";

import Logo from "../../components/Logo/Logo";
import Image from "../../components/Image/Image";
import Underlink from "../../components/Underlink/Underlink";

export default function Home() {
    return (
        <div className="home">
            <div className="logo-wrapper">
                <Logo />
                <p className="fm-monse-medium fs-normal lnh-medium">
                    The number one Waifu Market place on the internet. Following
                    the Abelson crisis, the demand for waifus increased
                    dramatically, something that the supply chains at the time
                    couldn't handle, which caused a complete collapse, not only
                    in the distribution of waifus, but on virtually every other
                    supply chain as well. After that catastrophe, we at KEY-X
                    tech partnered with{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            href: "https://waifu.pics",
                            target: "_blank",
                            name: "waifu.pics",
                        }}
                    />{" "}
                    and{" "}
                    <Underlink
                        tag="a"
                        type="text"
                        options={{
                            href: "https:waifu.im",
                            target: "_blank",
                            name: "waifu.im",
                        }}
                    />{" "}
                    to streamline the producing and distribution of waifus; We
                    are now the number one market place for the invaluable
                    commodity, you can trust that our services have no pair
                    anywhere else in the world.
                </p>
            </div>
            <Image
                src={"https://i.waifu.pics/xJuOKC8.jpg"}
                alt="promotional image"
            />
        </div>
    );
}
