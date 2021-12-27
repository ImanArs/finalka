import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/ProdCard.module.css'
import Link from 'next/link'

// import styles from '../styles/ProductCard.module.css'

const ProdCard = () => {

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
        <>
        <div className={styles.con}>
        <div className={styles.container}>
            <div className={styles.inp}>
                <input  value={value} onChange={e=> setValue(e.target.value)} type="text"/>
            </div>
            
            {newArrProducts.map(item => (
                <div key={item.id} className={styles.div}>
                    <img className={styles.img} src={item.web} />
                    <h3 className={styles.title}>Наушники {item.name}</h3>
                    <p className={styles.price}>{item.Price} сом</p>
                    {/* <p className={styles.desc}>{item.description}</p> */}
                    <Link href="/Product/id">
                    <a>подробнее</a>
                    </Link>
                    
                    <button>в корзину</button>
                    <button>Купить</button>
                </div>
            ))}
            </div>
        </div>
        </>
    )
}

export default ProdCard

{/* <Image src="/img/avtomat.jpg" alt="foto" width={500} height={400}/>
<h1 className={styles.title}>earphones</h1>
<span className={styles.price}>$190.99</span>
<p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing.
</p> */}