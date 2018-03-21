import React from 'react';
import { UserList } from '../users/UserList';


const Main = (props) => {
    const {users} = props;
    
    return (
        <div className="container">
            <UserList users={users} />
        </div>
    )
}

export { Main }