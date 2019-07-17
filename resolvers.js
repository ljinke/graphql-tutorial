const db = require("./db");

const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  hello: () => "World",
  students: () => db.students.list(),
  student: (root, args, context, info) => {
    const students = db.students.list();

    console.log(students);

    if (args.id) {
      return db.students.get(args.id);
    }

    if (args.firstName) {
      console.log(args.firstName);
      return students.find(s => s.firstName === args.firstName);
    }

    if (args.lastName) {
      return students.find(s => s.lastName === args.lastName);
    }

    return students;
  }
};

const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + " " + root.lastName;
  }
};

module.exports = { Query, Student };
