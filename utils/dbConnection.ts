import mysql from 'mysql2';
// , { Connection, Pool }
export const db_pool = mysql.createPool({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  host: 'localhost',
  user:'root',
  password:'',
  database:'lessons',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,


}); 
// const db: Connection = mysql.createConnection({
//   host: process.env.DB_PASS,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// export default db;
