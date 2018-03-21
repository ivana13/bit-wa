import React from 'react';
import { UserList } from '../users/UserList';


const Main = (props) => {
    const {users, isListView} = props;

    return (
        <div className="container">
            <UserList users={users} isListView={isListView} />
        </div>
    )
}

export { Main }