import styles from './AddUser.module.css'

import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import {useState} from 'react'
import ErrorModal from "../UI/Error/ErrorModal";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const userNameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(undefined)
    }

    const addUserHandler = event => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({title:"Invalid input", message:"Please enter name and age (non-empty values)"})
            return
        }
        if (+enteredAge < 1) {
            setError({title:"Invalid age", message:"Please enter a valid age (> 0)"})
            return
        }
        props.onAddUser({name: enteredUsername, age: enteredAge, id: Math.random().toString()})
        setEnteredUsername('')
        setEnteredAge('')
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler}></ErrorModal>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={enteredUsername}
                        onChange={userNameChangeHandler}
                    ></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        type='number'
                        id='age'
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    ></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser
