import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from an API or local data
        const fetchData = async () => {
            // Example data (replace with API call)
            const data = [
                { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99 },
                { id: 2, name: 'Product 2', description: 'Description 2', price: 39.99 },
            ];
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to My Store</h1>
            <ProductList products={products} />
        </div>
    );
};

export default Home;
