CREATE DATABASE customer;

CREATE TABLE data(
    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    age INT,
    phone VARCHAR(15),
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
        /*//const {description}=req.body;
        //const newtodo=pool.query("INSERT INTO todo (description) VALUES($1)",[description])
        //res.json(newtodo)*/



INSERT INTO data (customer_name, age, phone, location) VALUES
  ('John Doe', 28, '123-456-7890', 'New York'),
  ('Alice Smith', 35, '987-654-3210', 'Los Angeles'),
  ('Bob Johnson', 42, '555-123-4567', 'Chicago'),
  ('Eva Davis', 29, '777-888-9999', 'San Francisco'),
  ('Charlie Brown', 31, '111-222-3333', 'Houston'),
  ('Grace Miller', 40, '444-555-6666', 'Miami'),
  ('David Wilson', 26, '999-888-7777', 'Atlanta'),
  ('Sophia Taylor', 38, '333-222-1111', 'Seattle'),
  ('Oliver White', 33, '666-777-8888', 'Denver'),
  ('Emma Harris', 27, '222-333-4444', 'Boston'),
  ('Liam Johnson', 29, '123-456-7890', 'Dallas'),
  ('Ava Brown', 34, '987-654-3210', 'San Diego'),
  ('Mia Davis', 41, '555-123-4567', 'Philadelphia'),
  ('Noah Smith', 28, '777-888-9999', 'Phoenix'),
  ('Lucas Wilson', 30, '111-222-3333', 'Detroit'),
  ('Isabella Jones', 39, '444-555-6666', 'Portland'),
  ('Jackson Moore', 25, '999-888-7777', 'Minneapolis'),
  ('Aiden Harris', 37, '333-222-1111', 'San Antonio'),
  ('Sophie White', 32, '666-777-8888', 'Orlando'),
  ('Ethan Miller', 28, '222-333-4444', 'Austin'),
  ('Harper Taylor', 36, '123-456-7890', 'Raleigh'),
  ('Mason Davis', 29, '987-654-3210', 'Nashville'),
  ('Lily Moore', 43, '555-123-4567', 'Columbus'),
  ('Elijah Harris', 27, '777-888-9999', 'Indianapolis'),
  ('Amelia Smith', 30, '111-222-3333', 'Charlotte'),
  ('Liam Thomas', 39, '444-555-6666', 'Kansas City'),
  ('Ava Jackson', 26, '999-888-7777', 'Memphis'),
  ('Ethan Hall', 35, '333-222-1111', 'Salt Lake City'),
  ('Olivia Davis', 31, '666-777-8888', 'Las Vegas'),
  ('Noah Anderson', 28, '222-333-4444', 'New Orleans'),
  ('Emma Brown', 34, '555-111-2222', 'Dallas'),
  ('William Taylor', 26, '999-888-7777', 'San Diego'),
  ('Ava Robinson', 38, '111-222-3333', 'Philadelphia'),
  ('Ethan Lewis', 29, '777-888-9999', 'Phoenix'),
  ('Olivia Garcia', 31, '444-555-6666', 'Detroit'),
  ('Liam Moore', 36, '222-333-4444', 'Portland'),
  ('Sophia Turner', 33, '666-777-8888', 'Minneapolis'),
  ('Jackson Harris', 27, '333-222-1111', 'San Antonio'),
  ('Amelia Brown', 40, '111-222-3333', 'Orlando'),
  ('Lucas Turner', 32, '777-888-9999', 'Austin'),
  ('Harper Robinson', 28, '555-111-2222', 'Raleigh'),
  ('Mason Turner', 34, '999-888-7777', 'Nashville'),
  ('Lily Garcia', 43, '111-222-3333', 'Columbus'),
  ('Elijah Turner', 27, '777-888-9999', 'Indianapolis'),
  ('Amelia Robinson', 30, '444-555-6666', 'Charlotte'),
  ('Liam Turner', 39, '999-888-7777', 'Kansas City'),
  ('Ava Taylor', 26, '555-111-2222', 'Memphis'),
  ('Ethan Robinson', 35, '333-222-1111', 'Salt Lake City'),
  ('Olivia Harris', 31, '666-777-8888', 'Las Vegas'),
  ('Noah Robinson', 28, '222-333-4444', 'New Orleans');

//update only date
UPDATE data SET created_at = '2024-03-02' WHERE sno = 1;


UPDATE data
SET created_at = created_at::date + '22:17:49.971784'::time
WHERE sno = 1;

//update only time not date in creatted_at
UPDATE data SET created_at = created_at::date + '22:17:49.971784'::time WHERE sno = 1

// select orderby only time not date
SELECT * FROM data ORDER BY EXTRACT(HOUR FROM created_at), EXTRACT(MINUTE FROM created_at), EXTRACT(SECOND FROM created_at);



//select orderby only date not time
SELECT * FROM data ORDER BY DATE(created_at);
