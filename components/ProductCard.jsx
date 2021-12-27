import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = () => {

    const [products, setProducts] = useState([])
    const [value, setValue] = useState('')
    
    const getProductData = () => {
        axios.get('https://61b4436caf5ff70017ca2150.mockapi.io/earphones')
        .then(resp => setProducts(resp.data))
        
    }

    

    useEffect(()=> {
        getProductData()
    }, [])

    const newArrProducts = products.filter(prod => {
        return prod.name.toLowerCase().includes(value.toLowerCase())
    })
    
    return (
        <div className={styles.container}>
            <div>
                <input className={styles.inp} value={value} onChange={e=> setValue(e.target.value)} type="text"/>
            </div>
            {newArrProducts.map(item => (
                <div key={item.sale} className={styles.div}>
                    <img src={item.web} width={200} />
                    <h3 className={styles.title}>Наушники {item.name}</h3>
                    <p className={styles.price}>{item.Price} сом</p>
                    <p className={styles.desc}>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductCard

{/* <Image src="/img/avtomat.jpg" alt="foto" width={500} height={400}/>
<h1 className={styles.title}>earphones</h1>
<span className={styles.price}>$190.99</span>
<p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing.
</p> */}