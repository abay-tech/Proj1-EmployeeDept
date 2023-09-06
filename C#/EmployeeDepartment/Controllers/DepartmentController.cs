using EmployeeDepartment.Models;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;


namespace EmployeeDepartment.Controllers
{
    [ApiController]
    [Route("api/[controller]")]  
    public class DepartmentController : ControllerBase
    {
        [HttpGet]
        public List<Department> Get()
        {
            string connectionString = @"Data Source=DESKTOP-H9T9SKL;Initial Catalog=tester; User ID=sa;Password=RPSsql12345;TrustServerCertificate=True;";
            SqlConnection connection = new SqlConnection(connectionString);
            List<Department> deptList = new List<Department>();
            Department department = new Department();
            try
            {
                connection.Open();
                Console.Write("CONNECTION open");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            String query = "select * from department";

            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {                 
                    department.deptId = reader.GetInt32(0);
                    department.deptName=reader.GetString(1);
                    deptList.Add(department);
                    department = new Department();
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            connection.Close();
            Console.Write(":GET request served\n");

            return deptList;
        }
        [HttpPost]
        public IActionResult Post(Department department)
        {
            String message = "Success";
            int rowsAffected=0;
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
            String query = $"insert into department values(@deptName)";
            try
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@deptName", department.deptName);

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
                return BadRequest("Failed to insert data."+message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(int key)
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
                message = e.Message;
            }
            String query = $"delete from department where DeptId=@id";

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
