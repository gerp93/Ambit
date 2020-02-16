using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ambit.Models
{
    public class Trip
    {
        public string Origin { get; set; }
        public string Destination { get; set; }
        public decimal Distance { get; set; }
        public int Time { get; set; }
    }
}