import User from './User'
class Student extends User {

    constructor()
    constructor(email: String)
    constructor(name: String, email: String)
    constructor(name: String, email: String, pwd: String)
    constructor(name?: String, email?: String, pwd?: String) {
        super(name, email, pwd, 'student')
    }

    getAssignments(): Object {
        return {
            "Question - 1": "Which is the national bird of country India?", 
            "Question - 2": "Which is the biggest animal?"
        };
    }
}

export default Student