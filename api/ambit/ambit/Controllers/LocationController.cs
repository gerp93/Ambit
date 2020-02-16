using ambit.Auxiliary.GoogleAPIs;
using ambit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ambit.Controllers
{
    public class LocationController : ApiController
    {

        [HttpGet]
        [Route("api/Location")]
        public IHttpActionResult Location()
        {
            //string url = @"https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=124+Canabury+Court+Little_Canada,MN&destinations=2205+Foxglove+Way+Hudson,WI";
            //DistanceMatrixAPI api = new DistanceMatrixAPI(url);



            List<string> originList = new List<string>();
            originList.Add("2205 Foxglove Way, Hudson, WI");
            originList.Add("Target");
            originList.Add("Menards");
            originList.Add("8555 Jorgensen Bay S., Cottage Grove, MN");

            List<string> destinationList = new List<string>();
            destinationList.Add("124 Canabury Court, Little Canada, MN");


            //DistanceMatrixAPI api = new DistanceMatrixAPI("124 Canabury Count, Little Canada, MN 55117", "2205 Foxglove Way, Hudson, WI 54016");
            DistanceMatrixAPI api = new DistanceMatrixAPI(originList, destinationList);

            var r = api.Response;


            List<Trip> results = new List<Trip>();

            foreach(string origin in api.Response.OriginAddresses)
            {

            }


            foreach (var x in r.Rows)
            {
                var y = x.Elements;

                foreach(var g in y)
                {
                    var p = y;
                }
            }



            return Ok(api.Response);

        }




    }
}
