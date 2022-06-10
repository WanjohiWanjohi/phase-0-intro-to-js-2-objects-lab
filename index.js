// Write your solution in this file!
const employee = {};
employee.name = "MyName"
employee.streetAddress = "345- 0987"

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let p1 = {...employee};
    delete p1[key];
    return p1;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
