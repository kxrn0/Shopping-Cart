import "./checkout.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";

export default function Checkout({
    items,
    update_bag,
    set_bag,
    set_purchased,
}) {
    const empty = items.length === 0;
    let content;

    if (empty)
        content = (
            <div className="empty">
                <p className="emoji fs-extra-large">{"\\(>w<)/"}</p>
                <p className="message fs-medium fm-monse-light">
                    Cart is empty!
                </p>
            </div>
        );
    else
        content = (
            <div className="content">
                <div className="container">
                    {items.map((item) => (
                        <ProductCard
                            key={item.id}
                            firstType={false}
                            product={item}
                            inBagNumber={item.amount}
                            update_bag={update_bag}
                            set_bag={set_bag}
                        />
                    ))}
                </div>
                <Link to="/purchased">
                    <button
                        className="proceed hovertone fs-medium fm-monse-medium"
                        onClick={set_purchased}
                    >
                        Proceed
                    </button>
                </Link>
            </div>
        );

    return <div className="checkout">{content}</div>;
}
