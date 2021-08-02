import AddUser from './components/Users/AddUser'
import UserList from "./components/Users/UserList";
import {useState} from "react";

function App() {
   const [usersList, setUsersList] = useState([])
    const addUserHandler = (user) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, user]
        })
    }
  return (
    <div className='App'>
        <AddUser onAddUser={addUserHandler}/>
        <UserList users={usersList}/>
    </div>
  )
}

export default App
