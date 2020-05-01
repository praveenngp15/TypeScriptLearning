"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAllCourses_1 = require("./queries/findAllCourses");
var express = require("express");
var app = express();
app.route('/api/courses').get(function (req, res) {
    findAllCourses_1.findAllCourses().then(function (results) { return res.status(200).json(results); });
});
app.listen(8090, function () {
    console.log('The server is running');
});
//CourseModel.findAll().then(results => console.log(JSON.stringify(results)));
//findAllCourses().then(results => console.log(JSON.stringify(results)));
//# sourceMappingURL=server.js.map