
import React from 'react';

const UserGrid = (props) => {
    const { user } = props;

    if (!user) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="col s12 m4 l3">
            <div className="card">
                <div className="card-image">
                    <img src={user.image} />
                    <span className="card-title">Bit People</span>

                    <div className="card-content">
                        <p>{user.firstName}</p>
                        <p>{user.email}</p>
                        <p>{user.dateOfBirth}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { UserGrid }

