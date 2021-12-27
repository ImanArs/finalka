import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Order.module.css'


const Order = () => {

    const status = 0;

    const statusClass = (index) => {
        if(index-status < 1 ) return styles.done
        if(index-status === 1 ) return styles.inProgress
        if(index-status > 1 ) return styles.undone
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                    
                        <td>
                            <span className={styles.id}>1232412432</span>
                        </td>
                        <td>
                            <span className={styles.name}>John Wick</span>
                        </td>
                        <td>
                            <span className={styles.address}>Elton st 212</span>
                        </td>
                        <td>
                            <span className={styles.total}>$381</span>
                        </td>
                    </tr>
                </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/done.png" width={30} height={30} alt="done" />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/done.png" width={20} height={20} alt="checked" />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/done.png" width={30} height={30} alt="done" />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/done.png" width={20} height={20} alt="checked" />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/done.png" width={30} height={30} alt="done" />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/done.png" width={20} height={20} alt="checked" />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/done.png" width={30} height={30} alt="done" />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                        <Image src="/img/done.png" width={20} height={20} alt="checked" />
                        </div>
                    </div>
                </div>
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
                    <button disabled className={styles.button}>Paid</button>
                </div>
            </div>
        </div>
    )
}

export default Order
