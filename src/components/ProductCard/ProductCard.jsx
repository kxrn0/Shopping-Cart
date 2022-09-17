import "./product_card.css";

import Image from "../Image/Image";
import star from "../../assets/star-face.svg";

export default function ProductCard({
    firstType,
    update_bag,
    product,
    inBagNumber,
    set_bag,
}) {
    let input;

    function handle_input(id, value) {
        if (value < 0) return;
        else set_bag(id, value);
    }

    if (firstType)
        input = (
            <button
                className="fs-medium fm-monse-light add-button hovertone"
                onClick={() => update_bag(product.id, 0)}
            >
                Add to cart
            </button>
        );
    else
        input = (
            <div className="number-input">
                <button
                    className="hovertone fm-monse-medium fs-medium"
                    onClick={() => update_bag(product.id, 1)}
                >
                    +
                </button>
                <input
                    className="fm-monse-medium fs-normal"
                    type="number"
                    onChange={(event) =>
                        handle_input(product.id, Number(event.target.value))
                    }
                    value={inBagNumber}
                />
                <button
                    className="hovertone fm-monse-medium fs-medium"
                    onClick={() => update_bag(product.id, -1)}
                >
                    -
                </button>
            </div>
        );

    return (
        <div className="product">
            {product.site === "pics" ? (
                <img src={star} className="seal" alt="seal of approval" />
            ) : null}
            <Image src={product.src} alt={product.name} />
            <p className="fs-medium fm-monse-medium">{product.name}</p>
            {input}
        </div>
    );
}
