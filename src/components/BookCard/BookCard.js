import styles from './BookCard.module.scss'

const BookCard = (props) => {

    let {data} = props

    let image = 'https://books.google.co.il/googlebooks/images/no_cover_thumb.gif'
    let description = 'No Description'
    const name = data.volumeInfo.title

    if(data.volumeInfo.imageLinks) {
        let temp = data.volumeInfo.imageLinks

        if(temp.smallThumbnail) image = temp.smallThumbnail
        if(temp.thumbnail) image = temp.thumbnail // overwrite in case better image exist
    }

    if(data.volumeInfo.description) description = data.volumeInfo.description
    

    return (
        <div className={styles.container}>
            <img className={styles.book_image} src={image} alt='book'/>
            <div className={styles.book_info}>
                <div className={styles.book_name}>{name}</div>
                <div className={styles.book_description}>{description}</div>
            </div>
        </div>
    )

}

export default BookCard;