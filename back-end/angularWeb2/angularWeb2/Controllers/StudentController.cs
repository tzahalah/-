using angularWeb.Models;
using angularWeb2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace angularWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public static List<Student> STUDENTS= new List<Student>{
         new Student  { id= 1, firstName= "tehila", lastName= "rayniz", address= "natanya", course= Course.software,schoolYear= SchoolYear.a, status= true, gradeAvg= 94,absence=new Absence[] { new Absence { dateBegin = new DateTime(2024, 7, 9), numDays = 5 } } },
         new Student{ id= 2, firstName= "sara", lastName= "cohen", status= true,schoolYear= SchoolYear.b,  leftDate=new DateTime(2024, 5, 6) },

         new Student { id= 3, firstName= "lea", lastName= "levi", status= true,schoolYear= SchoolYear.b },

         new Student { id= 4, firstName= "mali", lastName= "aharon", status= true, gradeAvg= 92 },

         new Student { id= 5, firstName= "rina", lastName= "shalom", status= false }
    };


        // GET: api/<StudentController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return STUDENTS;
        }

        // GET api/<StudentController>/5
        [HttpGet("{id}")]
        public IEnumerable<Student> Get(int id)
        {
           
            return STUDENTS;
        }

        // POST api/<StudentController>
        [HttpPost]
        public void Post([FromBody] Student student)
        {
            Student.c++;
            student.id = Student.c;
            STUDENTS.Add(student);
        }

        // PUT api/<StudentController>/5
        [HttpPut("{id}")]
        public Student Put(int id, [FromBody] Student student, [FromQuery] Absence? absence = null)
        {
            var oldStudent = STUDENTS.Find(s => s.id == id);
            if (oldStudent!=null)
            {
                oldStudent.firstName = student.firstName;
                oldStudent.lastName = student.lastName;
                oldStudent.address = student.address;
                oldStudent.course = student.course;
                oldStudent.gradeAvg = student.gradeAvg;
                oldStudent.status = student.status;
                oldStudent.leftDate = student.leftDate;
                oldStudent.schoolYear = student.schoolYear;
            }
            if(oldStudent.absence==null)
            {
                oldStudent.absence = new Absence[10];

            }
            if (absence != null && oldStudent.count<10)
            {
                oldStudent.absence[oldStudent.count] = absence;
                oldStudent.count++;
            }
            return oldStudent;
        }

        // DELETE api/<StudentController>/5
        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
           int index= STUDENTS.FindIndex(s => s.id == id);
            if (index!=-1)
            {
                STUDENTS.RemoveAt(index);
                return true;
            }
            return false;
                 
        }
    }
}
