class User {
    constructor(user) {
        this.firstName = user.name.first
        this.secondName = user.name.last
        this.email = user.email
        this.dateOfBirth = user.dob
        this.image = user.picture.medium
    }
}



export {User};