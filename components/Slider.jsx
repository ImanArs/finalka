import React, { useState } from 'react'
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Slider = () => {
    const [index, setIndex] = useState(0)

    const images = [
        "/img/earSlide.jpg",
        "/img/earSlide2.jpg",
        "/img/earSlide3.jpg",
        "/img/earSlide4.jpg",
        "/img/earSlide5.jpg",
        "/img/earSlide6.jpg",
        "/img/earSlide4.jpg",
        "/img/earSlide.jpg",
        "/img/earSlide4.jpg",
        "/img/earSlide2.jpg",
        "/img/earSlide4.jpg",
        "/img/earSlide5.jpg",
        
        
    ];

    const handleArrow =(direction) => {
        if(direction === "l") {
            setIndex(index !==0 ? index-1 : 1)
        }
        if(direction === "r") {
            setIndex(index !==1 ? index+1 : 0)
        }
    }

    
    return (
        <>
        <div className={styles.bgmain}></div>
        <div className={styles.container}>
            <div className={styles.arrowcontainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/img/arrowl.svg" alt="left arrow" layout='fill' objectFit='contain'/>
            </div>
                <Link href="/ProdList">
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw`}} >
                    { images.map((img, i)=>(
                    <div className={styles.imgcontainer} key={i}>
                        <Image src={img} alt="img"  layout='fill' objectFit='contain'/>
                    </div>
                    ))}
            </div>
                </Link>
            <div className={styles.arrowcontainer} style={{right:0}} onClick={()=>handleArrow("r")} >
                <Image src="/img/arrowr.svg" alt="right arrow" layout='fill' fill="#fff" objectFit='contain'/>
            </div>
            
        </div>
        </>
    )
}

export default Slider
