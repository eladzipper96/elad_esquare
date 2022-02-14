import styles from './SearchBar.module.scss'

import {useState} from 'react'
const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('')

    const spinnerHandler = async () => {
        props.setShowSpinner(true)
    }

    const onSubmitHandler = async () => {
        await spinnerHandler()
        let query = userInput.replaceAll(' ','+')
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&printType=books`)
        let data = await response.json()
        setUserInput('')
        props.setShowSpinner(false)
        props.setData(data['items'])

    }

    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <input value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
            </div>
            <div className={styles.submit} onClick={onSubmitHandler}>
                Submit
            </div>
        </div>
    )

}

export default SearchBar;