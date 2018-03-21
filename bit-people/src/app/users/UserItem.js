import React from 'react'

const UserItem = (props) => {
    const { user } = props;

    if(!user) {
        return <h3>no</h3>
    }

    return (
        <li className="collection-item avatar">
            <img src={user.image} alt="" className="circle" />
            <span className="title">{user.firstName}</span>
            <p>{user.email}</p>
            <p>{user.dateOfBirth}</p>
        </li>
    )
}

export {UserItem}