import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'


const Footer = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.item}>
                <Image src="/img/devSPist.jpg" alt="bg" height={400} width={600} />
            </div> */}
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        YES WE HAVE WHAT YOU WANT
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR PLACE</h1>
                    <p className={styles.text}>
                        1945 R. Down Road #304,
                        <br/> New York
                        <br/> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1945 R. Down Road #304,
                        <br/> New York
                        <br/> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1945 R. Down Road #304,
                        <br/> New York
                        <br/> (602) 867-1010
                    </p>
                    <p className={styles.text}>
                        1945 R. Down Road #304,
                        <br/> New York
                        <br/> (602) 867-1010
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS
                    </h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br/> 12:00 - 20:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
