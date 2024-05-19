import { ProductItem } from './ProductItem';
import { Product } from "../types/Product";


export const ProductList = ({ products }: { products: Product[] }) => (
    <div className="showcase">
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
    </div>
);

export default ProductList;