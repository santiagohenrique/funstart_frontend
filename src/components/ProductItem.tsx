import { Product } from "../types/Product";

export const ProductItem = ({ product }: { product: Product }) => {

    return(
        <div className="list-item" key={product.id}>
            <div className="card-item">
                <div className="image-product">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="info-product">
                    <div className="product-name">
                        <p>{product.name}</p>
                    </div>
                    <div className="product-price">
                        <p>R$ {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};