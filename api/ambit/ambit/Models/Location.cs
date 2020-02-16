using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ambit.Models
{
    public class Location
    {
        public string StreetAddressLine1 { get; set; }
        public string StreetAddressLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

    }
}