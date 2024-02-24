select* from employee;
create table employee(
empid int not null auto_increment primary key,
ename varchar(30),
jobid varchar(40) ,
mgrid int,hiredate date,salary int,comission int,deptid int,
foreign key(deptid) references departments(deptid));

create database testdb;
insert into employee( empid,ename ,jobid,mgrid,hiredate ,salary,comission,deptid)
values (7499,"allen","slmn",7698,"1981/02/20",1600,300,30),
(7521,"ward","mgr",7698,"1981/02/22",1250,500,30),
(7566,"jones","mgr" ,7839, "1981/04/02",2975,null,20),
(7654,"martin","slmn",7698,"1981/09/28",1250,1400,30),
(77698,"blake","mgr",7839,"1981/05/01",2850,null,30),
(7782,"clark","mgr",7839,"1981/06/09",2450,null,10),
(7788,"scott","anay",7566,"1981/04/19",3000,null,20),
(7839,"king","pres",null,"1981/11/17",5000,null,10),
(7844,"turner","slmn",7698,"1981/09/08",1500,0,40),
(7876,"adams","clrk",7788,"1981/05/23",1100,null,20),
(7900,"james","clrk",7698,"1987/12/03",950,null,30),
(7902,"ford","anay",7566,"1981/12/03",3000,null,20),
(7934,"miller","clrk",7782,"1981/01/23",1300,null,10);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql@123';

select * from employee where ename='scott';

drop table employee;

update employee set ename = 'ani', jobid = 'mgr',mgrid = 7521, hiredate = '1982-02-23',salary =1700, comission = 400, deptid = 20 
where empid = 7499;

select * from employee e inner join employee m
where m.mgrid=e.empid;
select * from employee
where empid=mgrid;
select * from employee
where jobid="mgr";

select job_title from employee e inner join  jobs j
on e.jobid=j.job_id;

set sql_safe_updates = 0;
select e.empid,e.ename,j.job_title,b.ename ,e.hiredate,e.salary,e.comission,d.dname from 
employee e left join employee b on e.empid=b.mgrid inner join departments d on e.deptid=d.deptid
inner join  jobs j on e.jobid=j.job_id;

select * from user;


select e.empid,e.ename as ename,j.job_title,b.ename ,e.hiredate,e.salary,e.comission,d.dname from 
employee e left join employee b on e.mgrid=b.empid inner join departments d on e.deptid=d.deptid
inner join  jobs j on e.jobid=j.job_id;