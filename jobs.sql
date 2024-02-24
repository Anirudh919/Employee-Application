create table jobs(
job_id varchar(30) not null primary key,
job_title varchar(30) not null,
min_salary int,
max_salary int,
check (min_salary>2000),
check (max_salary between 2000 and 50000));

select * from jobs;
insert into jobs
values("pres" , "president",20000,40000),
("prog","programmer",4000,10000),
( "anay","analyst",9000,15000),
("slmn","salesman",6000,12000),
("clrk","clerk",2800,5000),
("mgr","manager",5500,8500);

drop table jobs;
