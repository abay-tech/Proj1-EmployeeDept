using EmployeeDepartment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace EmployeeDepartment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public List<Employee> Get()
        {
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            List<Employee> empList = new List<Employee>();

            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            String query = "select * from Employee";
            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    Employee employee = new Employee();

                    employee.empId = reader.GetInt32(0);
                    employee.empName = reader.GetString(1);
                    employee.department = reader.GetString(2);
                    employee.dateOfJoining=reader.GetDateTime(3);
                    employee.photoFileName = reader.GetString(4);


                    empList.Add(employee);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            Console.Write(":GET request served\n");

            return empList;
        }
        
        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            String message = "Success";
            int rowsAffected = 0;
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                message=e.Message;
            }
            String query = $"insert into employee values(@empName,@department,@dateOfJoining,@photoFileName)";

            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@empName", employee.empName);
                command.Parameters.AddWithValue("@department", employee.department);
                command.Parameters.AddWithValue("@dateOfJoining", employee.dateOfJoining);//sql is date, not dateTime so only date is updated
                command.Parameters.AddWithValue("@photoFileName", employee.photoFileName);

                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            connection.Close();
            Console.Write(":POST request served\n");

            if (rowsAffected > 0)
            {
                return Ok("Data inserted successfully.");
            }
            else
            {
                return BadRequest("Failed to insert data." + message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(int key) {
            String message = "Success";
            int rowsAffected = 0;
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                message = e.Message;
            }
            String query = $"delete from employee where EmpID=@id";

            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@id", key);
                rowsAffected = command.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            connection.Close();
            Console.Write(":Delete request served\n");

            if (rowsAffected > 0)
            {
                return Ok("Data deleted successfully.");
            }
            else
            {
                return BadRequest("Failed to delete data." + message);
            }
        
    }
    }
}