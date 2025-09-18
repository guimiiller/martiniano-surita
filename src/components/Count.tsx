"use client";

import styles from '../styles/Count.module.css';

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function Count() {
    const [ref1, inView1] = useInView({ triggerOnce: true });
    const [ref2, inView2] = useInView({ triggerOnce: true });
    const [ref3, inView3] = useInView({ triggerOnce: true });

    return (
        <section className={styles.countSection} data-section="blue">
            <div className={styles.countContainer}>
                
                <div className={styles.countItem} ref={ref1}>
                    {inView1 && <CountUp end={200} duration={2} suffix=" +" className={styles.countNumber}  style={{marginLeft:"17px"}}/>}
                    <p className={styles.countText}>Clientes atendidos</p>
                </div>

                <div className={styles.countItem} ref={ref2}>
                    {inView2 && <CountUp end={8} duration={2} className={styles.countNumber} />}
                    <p className={styles.countText}>Anos de experiência</p>
                </div>

                <div className={styles.countItem} ref={ref3}>
                    {inView3 && <CountUp end={15} duration={2} suffix=" +" className={styles.countNumber} />}
                    <p className={styles.countText}>Certificações e reconhecimentos</p>
                </div>

            </div>
        </section>
    );
}