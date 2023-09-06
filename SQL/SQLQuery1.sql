create table department(DeptId int identity(1,1), DeptName  varchar(100));

insert into department values('IT');
insert into department values('Support');

select * from department;
drop table department

create table employee(
EmpID int identity(1,1),
EmpName varchar(50),
Department varchar(20),
DateOfJoining date,
PhotoFileName varchar(50)
);
insert into employee values('Dasan','IT','01-01-2000','dass.png');
insert into employee values('Paavam','Support','01-01-2010','paavam.png');
insert into employee values('suuper','Support','01-11-2014','suuper.png');

select * from employee;