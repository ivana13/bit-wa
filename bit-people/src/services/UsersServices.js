import {User} from '../entities/User';
import { BASE_URL } from '../shared/constants';

class UsersServices {
    
    fetchUsers() {
        return fetch(BASE_URL)
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