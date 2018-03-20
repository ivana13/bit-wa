import {
    User
} from '../entities/User';

class UsersServices {
    constructor() {

    }
    fetchUsers() {
        return fetch("https://randomuser.me/api/?results=15")
        .then((response) => {
                return response.json()
            })
            
            .then((response) => {
                const userData = response.results
                const myUsers = userData.map((user) => {
                    return new User(user)
                })

                return myUsers
            })
    }
}

export const userService = new UsersServices();