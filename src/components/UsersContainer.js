import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";
import Table from "react-bootstrap/Table";

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List using Redux API</h2>

      <Table striped bordered hover className="redux-table"  style={{ textAlign:'center'}}>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Avathar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.users &&
            userData.users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="text-center"><img  src={user.avatar}  alt="" className="img-avatar img-fluid rounded mx-auto" />  </td>
                <td>{user.first_name} </td>
                <td>{user.last_name} </td> 
                <td>{user.email} </td> 
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
