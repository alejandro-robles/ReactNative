import axios from "axios";
import { useEffect } from "react";
import type { ReqResUserListResponse } from "../interfaces";

const loadUsers = async () => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users?page=2",
      {
        headers: {
          // Check the Reqres documentation for the actual key and header name.
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  useEffect(() => {
    loadUsers().then((users) => console.log(users));
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
