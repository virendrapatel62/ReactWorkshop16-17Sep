import { useEffect, useState } from "react";
import axios from "axios";

const Users = (props) => {
  useEffect(() => {
    console.log("Users Mounted....", props);
  }, []);
  useEffect(() => {
    console.log("Users Updated....", props);
  }, [props]);

  useEffect(() => {
    return () => {
      console.log("Users Unmounted");
      ///
    };
  }, []);

  return (
    <table>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export function UserApp() {
  const [users, setUsers] = useState([]);

  const [showList, setShowList] = useState(true);

  console.log("1 & 6 . Called UserApp", users);

  useEffect(() => {
    console.log("2. App Created.");
    console.log("3. Api Called");

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("5. Got the response");
      setUsers(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("4 & 6. end use effect");
  }, [users]);

  function handleToggle() {
    setShowList(!showList);
  }

  return (
    <div>
      <hr />
      <button onClick={handleToggle}>Show And Hide</button>
      <hr />
      {showList && <Users users={users} />}
    </div>
  );
}
