const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    return this[type].find((e) => e.id === id);
  },
  assignStudent: function (subject, id) {
    const teacherIndex = this.teachers.findIndex((teacher) => {
      return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
    });
    if (!teacherIndex) {
      return console.log("Sorry, no available teachers left.");
    }
    const student = this.students.find((student) => student.id === id);
    this.teachers[teacherIndex].students.push(student.name);
    this.teachers[teacherIndex].capacityLeft -= 1;
  },
};

school.findPerson("teachers", 1);
school.assignStudent("history", 12);

console.log(school.teachers);
