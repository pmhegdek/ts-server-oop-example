import User from './User'
import Student from './Student'
class Teacher extends User {

    constructor()
    constructor(email: String)
    constructor(name: String, email: String)
    constructor(name: String, email: String, pwd: String)
    constructor(name?: String, email?: String, pwd?: String) {
        super(name, email, pwd, 'teacher')
    }

    getStudents(): Array<Student> {
        return [new Student('Sam', 'sam@example.com'), new Student('Ram', 'ram@example.com')]
    }
}

export default Teacher