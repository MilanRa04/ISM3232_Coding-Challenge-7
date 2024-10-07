// Task 1: Create a department structure with departmenents and each employees information in an object named company.
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};


// Task 2: Calculate department total salary using a recursive function
function calculateDepartmentSalary(departmentName) {
   const department = company.departments.find(dept => dept.departmentName === departmentName);

   if (!department) {
    console.log(`Department ${departmentName} does not exist`)
   }
   
    let totalSalary = 0;

    department.employees.forEach(employee => {
        totalSalary += calculateEmployeeSalary(employee);
    });
    return totalSalary;
}

//Helper function to get individual employees salaries
function calculateEmployeeSalary(employee) {
    let total = employee.salary;

  // Recursively add salaries of all subordinates
  employee.subordinates.forEach(subordinate => {
    total += calculateEmployeeSalary(subordinate);
});

return total;
}

console.log(`The total sales Department Salary is ${calculateDepartmentSalary('Sales')}`)
console.log(`The total Enginering Department Salary is ${calculateDepartmentSalary('Engineering')}`)

// Task 3: Calculate the total Company Salary using a recursive function
function calculateCompanySalary(company) {
    let totalSalary = 0;

    company.departments.forEach(department => {
        totalSalary += calculateDepartmentSalary(department.departmentName);
    });
    return totalSalary;
}

console.log(`The total company salary is ${calculateCompanySalary(company)}.`)