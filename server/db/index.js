const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql@123",
  database: "testdb",
  connectionLimit: 10,
});
let rootdb = {};

// rootdb.login = (username, password) => {
//   return new Promise((resolve, reject) => {
//     pool.query(
//       `select * from user where username = ? and password =?`,
//       [username, password],
//       (err, results) => {
//         if (err) {
//           return reject(err);
//         } else if (!results.length) {
//           console.log("else if", results);
//           return resolve({ status: 0, data: [] });
//         } else {
//           console.log("hey", results);
//           let token = jwt.sign({ data: results }, "secret");
//           const user = { status: 1, data: results, token: token };
//           return resolve(user);
//         }
//       }
//     );
//   });
// };

rootdb.login = (username,password) => {
  return new Promise((resolve, reject) => {
  console.log(username,password);
  pool.query(
    `select * from user where username=? and password=?`,
    [username,password],
    (err, result) => {
      if (err) {
        return reject(err);
        console.log(err);
      }else if(!result.length){
  // console.log("your data does not match",result);
    pool.query(
      `select * from user where username=? `,
      [username],
      (err, result) => {
        if (err) {

          return reject({status:0,data:[""]});
        } 
         console.log("password does not match");
          return resolve({status:0,data:"Incorrect_password"})
        }
   ); 
   return resolve({status:0,data:"Not_register"})
  }
  else{
    let token = jwt.sign({ data: result }, "secret");
    return resolve({ status: 1, data: result, token: token });
    console.log("you successfully login",result);
  }}
    );
  });
};

rootdb.register = (input) => {
  var sql = `insert into user (username,email,password) values (?,?,?)`;
  console.log(input);
  return new Promise((resolve, reject) => {
    pool.query(
      `select username from user where username=?`,
      [input.username],
      (err, result) => {
        if (err) {
          return reject({ status: 0, data: err });
        } else if (!result.length) {
          console.log("else if", result);
          pool.query(
            sql,
            [input.username, input.email, input.password],
            (err, result) => {
              if (err) {
                return reject({ status: 0, data: err });
              }
              let token = jwt.sign({ data: result }, "secret");
              return resolve({ status: 1, data: result, token: token });
            }
          );
        } else {
          console.log("else if", result);
          return resolve({ status: 0, data: "username already exist" });
        }
      }
    );
  });
};

rootdb.employeedetails = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select e.empid,e.ename as ename,j.job_title,b.ename ,e.hiredate,e.salary,e.comission,d.dname from 
employee e left join employee b on e.mgrid=b.empid inner join departments d on e.deptid=d.deptid
inner join  jobs j on e.jobid=j.job_id;`,
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

rootdb.employeegetid=(id)=>{
  return new Promise((resolve,reject)=>{
    pool.query(`select * from employee where empid=?`,[id],(err,result)=>{
      if(err){
        return reject(err);
      }
      return resolve(result);
    })
  })
}

rootdb.departmentdetails = () => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from departments `, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

rootdb.jobdetails = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from jobs`, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

rootdb.Locationdetails = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`
    select l.location_id,l.street_address,l.city,l.state,c.country_name from departments d inner join location l on d.locationid=l.location_id inner join countries c on l.country_id=c.country_id; `, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

rootdb.mgrid = () => {
  return new Promise((resolve, reject) => {
    pool.query(`select * from employee where jobid="mgr"`, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};

rootdb.EmployeeDelete = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`delete from employee where empid=?`, [id], (err) => {
      if (err) {
        return reject(err);
      }
      return resolve("Successfully Employee Details Delete");
    });
  });
};

rootdb.DepartmentDelete = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`delete from departments where deptid=?`, [id], (err) => {
      if (err) {
        return reject(err);
      }
      return resolve("Successfully Department Details Delete");
    });
  });
};

rootdb.AddEmployee = (input) => {
  var sql = `insert into employee(empid,ename,jobid,mgrid,hiredate,salary,comission,deptid)
  values(?,?,?,?,?,?,?,?)`;
  return new Promise((resolve, reject) => {
    pool.query(
      sql,
      [
        input.empid,
        input.ename,
        input.jobid,
        input.mgrid,
        input.hiredate,
        input.salary,
        input.comission,
        input.deptid,
      ],
      (err) => {
        if (err) {
          return reject(err);
        }
        return resolve("Employee Successfully Add");
      }
    );
  });
};

rootdb.AddDepartment = (input) => {
  var sql = `insert into departments(deptid,dname,mgrid,locationid)
  values(?,?,?,?)`;
  return new Promise((resolve, reject) => {
    pool.query(
      sql,
      [
        input.deptid,
        input.dname,
        input.mgrid,
        input.locationid,
       
      ],
      (err) => {
        if (err) {
          return reject(err);
        }
        return resolve("Department Successfully Add");
      }
    );
  });
};

rootdb.employeeupdate = (input) => {
  var sql = `update employee set ename =?, jobid=?,mgrid=?,hiredate=?,salary=?,comission=?,deptid=? where empid=?`;
  return new Promise((resolve, reject) => {
    pool.query(
      sql,
      [
        input.ename,
        input.jobid,
        input.mgrid,
        input.hiredate,
        input.salary,
        input.comission,
        input.deptid,
        input.empid,
      ],
      (err) => {
        if (err) {
          return reject(err);
        }
        return resolve("Successfull Update");
      }
    );
  });
};
module.exports = rootdb;
