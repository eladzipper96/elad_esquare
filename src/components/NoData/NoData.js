import styles from './NoData.module.scss'
import bookworm from '../../assets/bookworm.png'
const NoData = () => {

    const paragraph_1 = 'Welcome to my Kingdom,'
    const paragraph_2 = 'I hope you will have great time and read many books.'

    return (
        <div className={styles.container}>
            <h2>Hello There fellow BookWorm!</h2>
            <p>{paragraph_1}<br/>{paragraph_2}</p>
            <div className={styles.image_container}>
                <img src={bookworm} alt='bookworm'/>
            </div>
        </div>
    )
}

export default NoData;