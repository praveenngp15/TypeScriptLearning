import {default as ORM, Sequelize} from "sequelize";
import {initCourseModal} from "./initCourseModal";


const dbUrl = 'postgres://postgres:admin@localhost:5432/complete-typescript-course';

const sequelize:Sequelize = new ORM(dbUrl);
export const CourseModel =   initCourseModal(sequelize)