import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import ProductList from '../components/ProductList';
import { Product } from "../types/Product";
import bannerHome  from "../assets/banner-home.png";


export const Home = () =>{

    const API_URL = "https://funstart-backend.onrender.com"

    const { data: products } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: async () => axios.get(`${API_URL}/products`).then(res => res.data)
    });

    return(
        <>
            <div className="home-banner">
                <img src={bannerHome} alt="" />
            </div>
            {products && (
                <>
                    <section className="container flex-column">
                        <h2 className="title-section">Em destaque</h2>
                        <ProductList products={products.filter(product => product.section === 'em_destaque')} />
                    </section>
                    <section className="container flex-column">
                        <h2 className="title-section">Mais vendidos</h2>
                        <ProductList products={products.filter(product => product.section === 'mais_vendidos')} />
                    </section>
                    <section className="container flex-column">
                        <h2 className="title-section">Em promoção</h2>
                        <ProductList products={products.filter(product => product.section === 'em_promocao')} />
                    </section>
                </>
            )}
        </>
    );
}