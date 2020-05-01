"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modal_1 = require("../modal/modal");
function findAllCourses() {
    return modal_1.CourseModel.findAll({
        order: ['seqNo']
    });
}
exports.findAllCourses = findAllCourses;
//# sourceMappingURL=findAllCourses.js.map