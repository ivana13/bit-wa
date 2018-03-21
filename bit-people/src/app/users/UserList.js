import React from 'react'
import PropTypes from 'prop-types'
import { UserItem } from './UserItem';
import { UserGrid } from './UserGrid';

const UserList = (props) => {

    const { users, isListView } = props

    // const renderGrid = (users) => {
    //     return users.map((user, index) => {
    //         return <UserGrid key={index} user={user} />
    //     })
    // }

    const renderList = (users) => {
        return users.map((user, index) => {
            return <UserItem key={index} user={user} />
        })
    }

    return (
        <ul className="collection">
            {renderList(users)}
        </ul>


        // <div className="row">
        // {renderGrid(users)}
        // </div>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export { UserList }