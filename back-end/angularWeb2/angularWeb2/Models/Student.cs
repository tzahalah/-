using angularWeb2.Models;
using System.Text.Json.Serialization;

namespace angularWeb.Models
{
    public class Student
    {
        public static int c=0;
        public int id { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? address { get; set; }
        public Course? course { get; set; }
        public SchoolYear? schoolYear { get; set; }
        public int? gradeAvg { get; set; }
        public bool status { get; set; }
        public DateTime? leftDate { get; set; }
      
        public Absence[]? absence { get; set; }
       
        public int count = 0;
    }
}
