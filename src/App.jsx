import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import Purchased from "./pages/Purchased/Purchased";

import cartEmpty from "./assets/cart-empty.svg";
import cartHeart from "./assets/cart-heart.svg";

import "./style.css";
import make_request from "./utilities/request";        const sources = [];


import { items } from "./data";

function App() {
    const [itemsInCart, setItemsInCart] = useState(false);
    const links = [
        {
            tag: "Link",
            type: "text",
            options: {
                path: "/Shopping-cart",
                name: "Home",
                classes: ["fs-normal", "fm-monse-medium"],
            },
        },
        {
            tag: "Link",
            type: "text",
            options: {
                path: "market",
                name: "Market",
                classes: ["fs-normal", "fm-monse-medium"],
            },
        },
        {
            tag: "Link",
            type: "text",
            options: {
                path: "about",
                name: "About",
                classes: ["fs-normal", "fm-monse-medium"],
            },
        },
        {
            tag: "Link",
            type: "image",
            options: {
                path: "checkout",
                name: "Checkout",
                img: {
                    active: itemsInCart,
                    activeSrc: cartHeart,
                    inactiveSrc: cartEmpty,
                    alt: "cart",
                },
                classes: ["fs-normal", "fm-monse-medium"],
            },
        },
    ];
    const [purchased, setPurchased] = useState([]);
    const [inBag, setInBag] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function update_bag(id, amount) {
        const index = inBag.findIndex((item) => item.id === id);
        const item = inBag[index];

        if (index === -1) {
            const product = items.find((item) => item.id === id);

            setInBag((prevBag) => [...prevBag, { ...product, amount: 1 }]);
            setItemsInCart(true);
        } else {
            if (amount > 0) {
                setInBag((prevBag) =>
                    prevBag
                        .slice(0, index)
                        .concat({ ...item, amount: item.amount + amount })
                        .concat(prevBag.slice(index + 1))
                );
                setItemsInCart(true);
            } else {
                if (item.amount + amount <= 0)
                    setInBag((prevBag) => {
                        const newBag = prevBag.filter(
                            (other) => other.id !== id
                        );

                        if (newBag.length) setItemsInCart(true);
                        else setItemsInCart(false);
                        return newBag;
                    });
                else {
                    setInBag((prevBag) =>
                        prevBag
                            .slice(0, index)
                            .concat({
                                ...item,
                                amount: item.amount + amount,
                            })
                            .concat(prevBag.slice(index + 1))
                    );
                    setItemsInCart(true);
                }
            }
        }
    }

    function set_bag(id, value) {
        if (value === 0)
            setInBag((prevBag) => {
                const newBag = prevBag.filter((item) => item.id !== id);

                if (newBag.length) setItemsInCart(true);
                else setItemsInCart(false);
                return newBag;
            });
        else {
            const index = inBag.findIndex((item) => item.id === id);
            const item = inBag[index];

            setInBag((prevBag) =>
                prevBag
                    .slice(0, index)
                    .concat({ ...item, amount: value })
                    .concat(prevBag.slice(index + 1))
            );
            setItemsInCart(true);
        }
    }

    async function set_purchased() {
        const links = [];

        setLoading(true);
        setError(false);

        for (let item of inBag) {
            for (let i = 0; i < item.amount; i++)
                links.push(make_request(item.link));
        }

        Promise.all(links)
            .then((responses) => {
                responses = responses.map((res) => {
                    if ("url" in res) return res.url;
                    return res.images[0].url;
                });
                setPurchased(responses);
                setLoading(false);
            })
            .catch((error) => {
                console.log(`Error : ${error}`);
                setError(true);
                setLoading(false);
            });
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar links={links} />
                <Routes>
                    <Route path="/Shopping-cart" element={<Home />}></Route>
                    <Route
                        path="/market"
                        element={
                            <Market
                                products={items}
                                inBag={inBag}
                                set_bag={set_bag}
                                update_bag={update_bag}
                            />
                        }
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/checkout"
                        element={
                            <Checkout
                                items={inBag}
                                set_bag={set_bag}
                                update_bag={update_bag}
                                set_purchased={set_purchased}
                            />
                        }
                    ></Route>
                    <Route
                        path="purchased"
                        element={
                            <Purchased
                                links={purchased}
                                loading={loading}
                                error={error}
                            />
                        }
                    ></Route>
                </Routes>
                <footer className="footer">
                    <p className="fm-monse-light">
                        a project by{" "}
                        <a
                            href="https://old.reddit.com/user/_by_me/"
                            target="_blank"
                        >
                            u/_by_me
                        </a>
                        , 2022
                    </p>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
