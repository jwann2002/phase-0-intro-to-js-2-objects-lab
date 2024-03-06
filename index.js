let employee = {
    name: "Jwan",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  console.log("Initial employee object:", employee);
  
  // Non-destructively update employee
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jwan");
  console.log("Updated employee object (non-destructive):", updatedEmployee);
  
  // Destructively update employee
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated employee object (destructive):", employee);
  
  // Delete property non-destructively
  let employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee object after deleting 'name' key (non-destructive):", employeeWithoutName);
  
  // Destructively delete property
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee object after deleting 'streetAddress' key (destructive):", employee);
  
