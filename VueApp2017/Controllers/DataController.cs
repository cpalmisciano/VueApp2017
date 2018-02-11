using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace VueApp2017.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/Data")]
    public class DataController : Controller
    {
        private IHostingEnvironment _env;
        public DataController(IHostingEnvironment env)
        {
            _env = env;
        }

        [Route("GetData")]
        public IActionResult GetData()
        {
            //you can get info on the user from here
            //var user = this.ControllerContext.HttpContext.User;

            List<string> items = new List<string>();
            for (int i = 1; i < 24; i++)
                items.Add("Cell " + i.ToString());

            return Ok(items);
        }

        [Route("GetBooks")]
        public IActionResult GetBooks()
        {
            //you can get info on the user from here
            //var user = this.ControllerContext.HttpContext.User;

            // read JSON
            string json = System.IO.File.ReadAllText(_env.ContentRootPath + "\\Data\\books.json");

            //populate object list
            List<Book> items = JsonConvert.DeserializeObject<List<Book>>(json);

            return Ok(items);
        }

    }

    public class Book
    {
        [JsonProperty("isbn")]
        public string ISBN { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("subtitle")]
        public string SubTitle { get; set; }

        [JsonProperty("author")]
        public string Author { get; set; }

        [JsonProperty("published")]
        public DateTime Published { get; set; }

        [JsonProperty("publisher")]
        public string Publisher { get; set; }

        [JsonProperty("pages")]
        public int Pages { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("website")]
        public string WebSite { get; set; }


        /*
        "isbn": "9781449365035",
      "title": "Speaking JavaScript",
      "subtitle": "An In-Depth Guide for Programmers",
      "author": "Axel Rauschmayer",
      "published": "2014-02-01T00:00:00.000Z",
      "publisher": "O'Reilly Media",
      "pages": 460,
      "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
      "website": "http://speakingjs.com/"
      */
    }
}