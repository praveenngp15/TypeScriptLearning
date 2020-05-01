import {CourseModel} from "./modal/modal";
import {findAllCourses} from "./queries/findAllCourses";

import * as express from 'express';
import {Application} from "express";

const app:Application = express();

app.route('/api/courses').get( (req,res)=>{
    findAllCourses().then(results => res.status(200).json(results));

})

app.listen(8090,()=>{
    console.log('The server is running')
})
//CourseModel.findAll().then(results => console.log(JSON.stringify(results)));

//findAllCourses().then(results => console.log(JSON.stringify(results)));



