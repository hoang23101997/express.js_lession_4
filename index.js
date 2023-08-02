const express = require("express");
const studentRouter = require("./src/router/studentsRouter");
const teacherRouter = require("./src/router/teacherRouter");
const subjectRouter = require("./src/router/subjectRouter");
const logs = require("./src/data/logs");
const users = require("./src/data/user.data");
const app = express();
app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teacher", teacherRouter);
app.use("/api/v1/subject", subjectRouter);
//API Container
app.get("/system/statistic", (req, res) => {
  const data = [];
  users.forEach((item) => {
    let countStudent = logs.filter(
      (element) => element.apiKey === item.apiKey && element.api === "student"
    );
    let countTeacher = logs.filter(
      (element) => element.apiKey === item.apiKey && element.api === "teacher"
    );
    let subject = logs.filter(
      (element) => element.apiKey === item.apiKey && element.api === "subject"
    );
    data.push({
      user: item.apiKey,
      student: countStudent.length,
      teacher: countTeacher.length,
      subject: subject.length,
    });
  });
  res.json(data);
});
app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = 3001;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App is running at http://localhost:${PORT}`);
  } else {
    console.log(err);
  }
});
