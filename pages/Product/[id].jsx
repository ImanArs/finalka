import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react'

import axios from 'axios'

const Product = () => {

    // const getProductData = () => {
    //     axios.get('https://61b4436caf5ff70017ca2150.mockapi.io/earphones')
    //     .then(resp => setProducts(resp.data))
        
    // }

    // useEffect(()=> {
    //     getProductData()
    // }, [])


    const avtomat = {
        id: 1,
        img: "/img/ak.jpg",
        name: "avtomat Kalashnikova",
        price: 190.99,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sunt."
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={avtomat.img} objectFit='contain' layout='fill' alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>
                    {avtomat.name}
                </h1>
                <span className={styles.price}>${avtomat.price}</span>
                <p className={styles.desc}>{avtomat.desc}</p>
                <h3 className={styles.choose}>Choose color</h3>
                <div className={styles.colors}>
                    <div className={styles.color}>
                        <div className={styles.green}></div>
                        <span className={styles.number}>Green</span>
                    </div>
                    <div className={styles.color}>
                        <div className={styles.red}></div>
                        <span className={styles.number}>Red</span>
                    </div>
                    <div className={styles.color}>
                        <div className={styles.blue}></div>
                        <span className={styles.number}>Blue</span>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
