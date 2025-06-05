function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    return (typeof name !== "string" || typeof age !== "number" || age <= 5 || !Number.isInteger(age) || typeof grade !== "string")
    ? "Invalid input"
    : { name, age, grade };
}

console.log(createStudentProfile("John", 12, "10th"));
