namespace EmployeeDepartment.Models
{
    public class Employee
    {
        public int empId { get; set; }
        public string empName { get; set; }
        public string department { get; set; }
        public DateTime dateOfJoining { get; set; }
        public string photoFileName { get; set; }
    }
}
