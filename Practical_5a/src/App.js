import { useState } from 'react';
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [entries, setNewEntry] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    const newLogin = {username: username, password: password};
    setNewEntry([newLogin]);
    console.log(entries)
  }

  return (
    <>
      <div className="App text-center">

        <h1 className="my-5"><u>Login</u></h1>

        <form action="" onSubmit={submitForm}>
          <label>Username:</label>
          <input type="text" name="username" id="username" onChange={(e) => { setUsername(e.target.value) }}></input>

          <br />
          <label>Password: </label>
          <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }}></input>

          <br />
          <button type="submit" className="submit px-3 py-1 mt-3 mb-5 rounded-1">Submit</button>
        </form>
      </div>

      <div className="display">
        {
          entries.map((entry) => {
            return (
              <div className="showData pt-2">
                <p><b>Username: </b>{entry.username}</p>
                <p><b>Password: </b>{entry.password}</p>
              </div>
            )
          })
        }
      </div>

      <div className='footer' style={{ 'text-align':'right', 'padding-right':'50px', 'margin-top':'70px'}}>
        <label style={{'font-weight':'500', 'font-size':'18px'}}>20CS010 - Meet Butani</label>
      </div>
    </>
  );
}

export default App;
