import "./market.css";

import ProductCard from "../../components/ProductCard/ProductCard";

export default function Market({ products, inBag, set_bag, update_bag }) {
    return (
        <div className="market">
            {products.map((product) => {
                const index = inBag.findIndex((item) => item.id === product.id);
                let firstType, inBagNumber;

                if (index === -1) {
                    firstType = true;
                    inBagNumber = 0;
                } else {
                    firstType = false;
                    inBagNumber = inBag[index].amount;
                }

                return (
                    <ProductCard
                        key={product.id}
                        firstType={firstType}
                        update_bag={update_bag}
                        product={product}
                        inBagNumber={inBagNumber}
                        set_bag={set_bag}
                    />
                );
            })}
        </div>
    );
}
