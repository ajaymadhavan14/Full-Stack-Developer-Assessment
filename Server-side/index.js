import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "newtable",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }

  console.log("Connected to MySQL database!");
});

// const insertDataQuery = `CREATE TABLE header_table (
//     vr_no numeric(18) PRIMARY KEY,
//     vr_date datetime DEFAULT CURRENT_TIMESTAMP,
//     ac_name varchar(200),
//     ac_amt numeric(18,2),
//     status char(1)
//   )
//   `;

// const insertDataQuery = `CREATE TABLE item_master (
//     item_code varchar(20),
//     item_name varchar(200)
//   )
//   `;

//   const insertDataQuery = `INSERT INTO item_master (item_code, item_name)
//   VALUES ('001', 'Item 1'), ('002', 'Item 2'), ('003', 'Item 3')
//   `;

// const insertDataQuery = `CREATE TABLE detail_table (
//     vr_no numeric(18),
//     sr_no numeric(18),
//     item_code varchar(20),
//     item_name varchar(200),
//     description varchar(3000),
//     qty numeric(18,3),
//     rate numeric(18,2),
//     PRIMARY KEY (vr_no, sr_no),
//     FOREIGN KEY (item_code) REFERENCES item_master(item_code)
//   )
//   `;

//   const insertDataQuery = `ALTER TABLE item_master ADD INDEX idx_item_code (item_code)
//   `;

// const insertDataQuery = `INSERT INTO header_table (vr_no, ac_name, ac_amt, status)
// VALUES (1, 'Ajay', 100, 'A')`;

// const insertDataQuery = `INSERT INTO detail_table (vr_no, sr_no, item_code, item_name, description, qty, rate)
// VALUES (123, 1, '001', 'Item 1', 'Description 1', 10.5, 5.99),
//        (123, 2, '002', 'Item 2', 'Description 2', 5.25, 8.49),
//        (124, 1, '003', 'Item 3', 'Description 3', 8.75, 12.99)
// `;

// connection.query(insertDataQuery, (err) => {
//   if (err) {
//     console.error('Error inserting data:', err);
//     return;
//   }

//   console.log('Data inserted successfully!');
// });

const selectDataQuery = "SELECT * FROM detail_table";

connection.query(selectDataQuery, (err, results) => {
  if (err) {
    console.error("Error retrieving data:", err);
    return;
  }

  console.log("Data retrieved:", results);
});
