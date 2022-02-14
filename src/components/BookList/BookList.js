import styles from './BookList.module.scss'
import BookCard from "../BookCard/BookCard"

const BookList = (props) => {

    return (
        <div className={styles.container}>
            {props.data.map((book) => {
                return <BookCard data={book}/>
            })}
        </div>
    )
}

export default BookList