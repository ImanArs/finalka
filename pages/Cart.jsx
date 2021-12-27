import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import {getProductData} from "../components/ProductCard"
import Link from "next"

const Cart = () => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/avtomat.jpg" 
                                    layout='fill' 
                                    objectFit='cover' 
                                    alt='avtomat'  
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Colorado</span>
                        </td>
                        <td>
                            <span className={styles.price}>$190.99</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$381</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image 
                                    src="/img/avtomat.jpg" 
                                    layout='fill' 
                                    objectFit='cover' 
                                    alt='avtomat'  
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Colorado</span>
                        </td>
                        <td>
                            <span className={styles.price}>$190.99</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$381</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$00.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <Link href="/orders/id">
                    <button className={styles.button}>
                        
                        CHECKOUT NOW
                        
                        </button>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart

