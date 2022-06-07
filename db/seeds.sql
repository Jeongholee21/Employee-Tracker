INSERT INTO department (name)
VALUES ("Marketing"),
       ("Account"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 900000, 5),
       ("Salesperson", 70000, 5),
       ("Account Manager", 120000, 2),
       ("Accountant", 170000, 2),
       ("Marketing Manager", 160000, 1),
       ("Marketing Assistant", 70000, 1),
       ("Lawyer", 250000, 4),
       ("CFO", 330000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lee", "JH", 8, NULL),
       ("Kim", "KL", 1, NULL),
       ("Park", "DF", 2, 1),
       ("Choi", "RA", 3, NULL),
       ("Bae", "TR", 4, 3),
       ("Son", "DW", 5, NULL),
       ("Oh", "SH", 5, 5),
       ("Pi", "DJ", 7, NULL);