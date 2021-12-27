import Image from "next/image"; 
import styles from "../styles/Footer.module.css"; 
 
const Footer = () => { 
  return ( 
    <div className={styles.container}> 
      <div className={styles.item}> 
        <Image src="/img/muj.jpg" objectFit="cover" layout="fill" alt="" /> 
      </div> 
      <div className={styles.item}> 
        <div className={styles.card}> 
          <h2 className={styles.motto}> 
          SKULLCANDY – ЗНАЧИТ ПОЛУЧИТЬ НЕЧТО ОСОБЕННОЕ !  
          </h2> 
        </div> 
        <div className={styles.card}> 
          <h1 className={styles.title}>О КОМПАНИИ</h1> 
          <p className={styles.text}> 
          О нас  
          <br/>Отзывы 
          <br /> Товары 
          <br />Контакты 
          </p> 
          <p className={styles.text}> 
          <h1 className={styles.title}>НАУШНИКИ</h1> 
          Беспроводные наушники 
          Проводные наушники 
          Вакуумные наушники 
          <br /> Полноразмерные наушники 
            <br /> По-настоящему беспроводные 
          </p> 
          <p className={styles.text}>            
          </p> 
          <p className={styles.text}> 
           
          </p> 
        </div> 
        <div className={styles.card}> 
          <h1 className={styles.title}>График работы </h1> 
          <p className={styles.text}> 
            Понедельник-Воскресение  
            <br /> 9:00 – 22:00 
          </p> 
          <p className={styles.text}> 
            Контакты  
            <br /> 0709 328292 
            <br /> 0995 569595 
            <br /> 0772 162416 
            <br /> skullcandykg@gmail.com 
          </p> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default Footer;