create database testdb;
create table departments(
deptid int not null auto_increment primary key,
dname varchar(50),
mgrid int,
locationid int,
unique(dname));
select * from departments;
insert into departments(deptid, dname, mgrid, locationid)
values(10,'accounting', 7521, 1700),
(20, 'research', 7698, 1800),
(30, 'marketing', 7782, 1500),
(40, 'it', 7698, 1400),
(50, 'operations',7521,2500);

delete from departments where deptid = 10;
update departments
set deptid = 60
where deptid = 30;
select l.location_id,l.street_address,l.city,l.state,c.country_name from departments d inner join location l on d.locationid=l.location_id inner join countries c on l.country_id=c.country_id; 
select * from departments where deptid=10;
select * from departments;
insert into departments
values(100,'marketings',7734,1100);

select e.empid,d.dname,d.deptid from departments d
cross join emp e 
where d.deptid=e.deptid;
drop table departments;