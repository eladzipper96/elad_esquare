import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>Elad Zipper Book Search</span>
            <div className={styles.image_container}>
                <img src={logo} alt='logo'/>
            </div>
        </div>
    )
}

export default Header