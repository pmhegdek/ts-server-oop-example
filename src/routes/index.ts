import * as express from 'express'
import Teacher from './../models/Teacher'
import Student from './../models/Student'
import User from '../models/User';
import JSONResponse from '../libs/JSONResponse'
const router = express.Router()

router.post('/register', (req, res) => {
    try {
        let user: User;
        if (req.body.role === 'student') {
            user = new Student(req.body.name, req.body.email, req.body.pwd)
        } else {
            user = new Teacher(req.body.name, req.body.email, req.body.pwd)
        }
        user.register();
        JSONResponse.success(req, res, 'user registered', user.getJsonObject())
    } catch (error) {
        console.log(error.message, error.stack)
        JSONResponse.serverError(req, res, null, null)
    }
})

router.get('/teachers/:email/students', (req, res) => {
    try {
        let teacher: Teacher = new Teacher(req.params.email);
        let students: Array<Student> = teacher.getStudents();
        let serializedData = [];
        for (let student of students) {
            serializedData.push(student.getJsonObject())
        }
        JSONResponse.success(req, res, null, serializedData)
    } catch (error) {
        console.log(error.message, error.stack)
        JSONResponse.serverError(req, res, null, null)
    }
})

router.get('/students/:email/assignments', (req, res) => {
    try {
        let student: Student = new Student(req.params.email)
        let assignments = student.getAssignments()
        JSONResponse.success(req, res, null, assignments)
    } catch (error) {
        console.log(error.message, error.stack)
        JSONResponse.serverError(req, res, null, null)
    }
})

export default router;
