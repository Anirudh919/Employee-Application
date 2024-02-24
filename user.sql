select e.empid,e.ename,j.job_title,b.ename,e.hiredate,e.salary,e.comission,d.dname from 
employee e left join employee b on e.empid=b.mgrid inner join departments d on e.deptid=d.deptid
inner join  jobs j on e.jobid=j.job_id;

SELECT e1.empid EmployeeId, e1.ename EmployeeName, 
       e1.mgrid ManagerId, e2.ename AS ManagerName
FROM   employee e1, employee e2
       where e1.mgrid = e2.empid;
    flush privileges;   
drop database user;

create database user;

create table user(
id int not null auto_increment,
username varchar(255) not null,
email varchar(255) not null,
password varchar(255) not null,
primary key(id));
select * from user;
insert into user
values(1,'anirudh','anirudhk67@gmail.com',86658754);
drop table user;

select * from user where username = "anirudh" and password=86658754;

select * from user;

select * from user where username="anirudh";

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql@123';