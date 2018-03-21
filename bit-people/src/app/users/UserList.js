import React from 'react'
import PropTypes from 'prop-types'
import { UserItem } from './UserItem';

const UserList = (props) => {

    const { users } = props
    
    const renderUsers = (users) => {
        return users.map((user, index) => {
            return <UserItem key={index} user={user} />
        })
    }

    return (
        <ul className="collection">
            {renderUsers(users)}
        </ul>
    )
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export { UserList }