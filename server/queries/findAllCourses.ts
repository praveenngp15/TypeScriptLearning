import {CourseModel} from "../modal/modal";

export function findAllCourses() {

    return CourseModel.findAll({
        order: ['seqNo']
    })

}