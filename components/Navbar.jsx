import Image from 'next/image'
import React from 'react'
import {useState} from 'react'
import Link from 'next/link'


import styles from '../styles/Navbar.module.css'

const Navbar = () => {

    


    return ( 
            <div className={styles.container}> 
              <div className={styles.item}> 
                <div className={styles.callButton}> 
               
                </div> 
                <div className={styles.texts}> 
                 
                </div> 
              </div> 
              <div className={styles.item}> 
                <ul className={styles.list}> 
                  <li className={styles.listItem}><Link href="/">Homepage</Link></li> 
                  <li className={styles.listItem}><Link href="/ProdList">Catalog</Link></li> 
                  <li>
                      <Link href="/">
                      <Image src="/img/logo.png" alt="" width="360px" height="69px" /> 
                      </Link>
                  </li>
                  <li className={styles.listItem}><Link href="/orders/id">Events</Link></li> 
                   
                  <li className={styles.listItem}><Link href="/Contact">Contact</Link></li> 
                </ul> 
              </div> 
              <div className={styles.item}> 
                <div className={styles.cart}> 
                  <Image src="/img/bascet.svg" alt="" width="30px" height="30px" /> 
                  <div className={styles.counter}>2</div> 
                </div> 
              </div> 
            </div> 
    ); 
}

export default Navbar
