query test {
    test
    hello
    students {
        id
        firstName
        lastName
        fullName
    }
    byId: student(id: "S1001") {
        id
    }
    byName: student(firstName: "Mohtashim") {
        id
        firstName
        lastName
    }
}