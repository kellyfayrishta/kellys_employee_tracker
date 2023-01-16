use employees;

INSERT INTO department
    (department_name)
VALUES 
    ('Account Manager'),
    ('Engineering'),
    ('Data Science'),
    ('SEO'),
    ('HR');

INSERT INTO role_id
    (title, salary, department_id)
VALUES
    ('Project Manager', 80000, 1),
    ('Software Engineer', 102000, 2),
    ('Data Analyst', 98000, 3),
    ('SEO Strategist', 69000, 4),
    ('HRBP', 65000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Anna', 'Griffith', 1, NULL),
    ('Brent', 'Wallace', 2, NULL),
    ('Jake', 'Peterson', 3, 3),
    ('Pierce', 'Gorman', 4, NULL),
    ('Heather', 'Duty', 5, 5),
    ('RJ', 'Williams', 1, NULL);