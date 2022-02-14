import styles from './Main.module.scss'
import BookList from "../BookList/BookList"
import NoData from '../NoData/NoData'
import Spinner from '../Spinner/Spinner'
const Main = (props) => {
    return (
        <div className={styles.container}>
            {(!props.data && !props.showSpinner) && <NoData />}
            {props.showSpinner && <Spinner/>}
            {(props.data && !props.showSpinner) &&  <BookList data={props.data}/>}
        </div>
    )
}

export default Main