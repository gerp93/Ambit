using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Net;

using Google.Maps;
using Google.Maps.DistanceMatrix;

namespace ambit.Auxiliary.GoogleAPIs
{
    public class DistanceMatrixAPI
    {

        public DistanceMatrixResponse Response { get; private set; }
        private string BaseURL { get; set; }
        private string URL {get; set;}
        public List<string> Origins { get; private set; }
        public List<string> Destinations { get; private set; }
        public Units Units { get; set; }

        public DistanceMatrixAPI()
        {
            Initialize();       
        }

        public DistanceMatrixAPI(string destination, string origin)
        {
            Initialize();
            AddDestination(destination);
            AddOrigin(origin);
            Call(); 
        }

        public DistanceMatrixAPI(List<string> destinations, List<string> origins)
        {
            Initialize();
            foreach (string origin in origins)
            {
                AddOrigin(origin);
            }
            foreach (string destination in destinations)
            {
                AddDestination(destination);
            }
            Call(); 
        }

        public void ApplyAPIKey()
        {

            GoogleSigned.AssignAllServices(new GoogleSigned(ConfigurationManager.AppSettings["GoogleAPIKey"]));


        }
        private void Call()
        {
            ApplyAPIKey();

            var request = new DistanceMatrixRequest();
            foreach (string origin in Origins)
            {
                request.AddOrigin(origin);
            }
            foreach (string destination in Destinations)
            {
                request.AddDestination(destination);
            }
            request.Units = this.Units; 

            var response = new DistanceMatrixService().GetResponse(request);
            this.Response = response; 
        }

        public DistanceMatrixResponse GetResponse()
        {
            Call();
            return this.Response; 
        }

        private void Initialize()
        {
            Units = Units.imperial; 
            Origins = new List<string>();
            Destinations = new List<string>();
        }

        public void AddDestination(string destination)
        {
            Destinations.Add(destination);
        }

        public void AddOrigin(string origin)
        {
            Origins.Add(origin);
        }
    }
}