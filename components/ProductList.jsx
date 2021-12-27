import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard';

const ProductList = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> BUY GUN NOW!! </h1>
            <p className={styles.desc}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam autem sed, suscipit veritatis, ea blanditiis libero nostrum unde consequatur quos molestiae perspiciatis veniam reprehenderit officiis ducimus pariatur vitae accusantium.
            </p>
            <div className={styles.wrapper}>
            
                <ProductCard />
                
            </div>
        </div>
    );
};

export default ProductList;
