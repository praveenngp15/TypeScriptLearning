"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var initCourseModal_1 = require("./initCourseModal");
var dbUrl = 'postgres://postgres:admin@localhost:5432/complete-typescript-course';
var sequelize = new sequelize_1.default(dbUrl);
exports.CourseModel = initCourseModal_1.initCourseModal(sequelize);
//# sourceMappingURL=modal.js.map