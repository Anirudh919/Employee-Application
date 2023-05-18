const express = require("express");

const rootdb = require("../db");

const db = require("../db");
const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    let { username, password } = req.body;
    let result = await db.login(username, password);
    res.json(result);
  } catch (error) {
    res.send({ status: 0, error: error });
  }
});

// router.post("/notlogin",async (req,res)=>{
//   try{
//     let {username,password}=req.body;
//     let result = await db.loginnot(username,password);
//     res.json(result);
//   }catch(err){
//     res.send({status:0,err:err});
//   }
// })

router.post("/register", async (req, res) => {
  try {
    console.log(req);
    let result = await db.register(req.body);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/employeedetail", async (req, res) => {
  try {
    let result = await db.employeedetails();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/departmentdetail", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await db.departmentdetails(id);
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/jobdetail", async (req, res) => {
  try {
    let result = await db.jobdetails();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/mgr", async (req, res) => {
  try {
    let result = await db.mgrid();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get("/locationdetail", async (req, res) => {
  try {
    let result = await db.Locationdetails();
    res.json(result);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete("/employeedelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await db.EmployeeDelete(id);
    res.json(result);
  } catch (err) {
    console.log(err);

    res.sendStatus(500);
  }
});

router.delete("/departmentdelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await db.DepartmentDelete(id);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.post("/employeeadd", async (req, res) => {
  try {
    let result = await db.AddEmployee(req.body);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.post("/departmentadd", async (req, res) => {
  try {
    let result = await db.AddDepartment(req.body);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
    console.log("fromdatabase");
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    let result = await db.employeegetid(req.params.id);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

router.put("/employeeupdate", async (req, res) => {
  try {
    let result = await db.employeeupdate(req.body);
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
