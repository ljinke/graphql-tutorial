mutation {
  addStudent_returns_object(collegeId: "col-101", firstName: "Susan", lastName: "George") {
    id
    firstName
    college {
      id
      name
    }
  }
}
  