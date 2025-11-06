import axios from "axios";
import { useEffect } from "react";

export const UsersPage = () => {
  useEffect(() => {
    // To use axios; write 'npm i zustand' in the terminal

    axios
      .get("https://reqres.in/api/users?page=2", {
        headers: {
          // Check the Reqres documentation for the actual key and header name.
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      })
      .then((resp) => console.log(resp.data))
      .catch((error) =>
        console.error("Axios Error:", error.response.status, error.message)
      );

    //   fetch("https://reqres.in/api/users?page=2", {
    //     method: "GET",
    //     headers: {
    //       // Check the Reqres documentation for the actual key and header name.
    //       // 'reqres-free-v1' is a common placeholder/example value.
    //       "x-api-key": "reqres-free-v1",
    //       "Content-Type": "application/json", // Often good practice
    //     },
    //   })
    //     .then((resp) => {
    //       if (!resp.ok) {
    //         // Throw an error for 4xx or 5xx status codes
    //         throw new Error(`HTTP error! status: ${resp.status}`);
    //       }
    //       return resp.json();
    //     })
    //     .then((data) => console.log(data))
    //     .catch((error) => console.error("Fetch Error:", error));
  }, []);

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>avatar</td>
            <td>nombre</td>
            <td>email</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
