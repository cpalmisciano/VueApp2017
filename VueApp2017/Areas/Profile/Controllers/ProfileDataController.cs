using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace VueApp2017.Areas.Profile.Controllers
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Produces("application/json")]
    [Route("api/ProfileData")]
    public class ProfileDataController : Controller
    {
        //string accessToken = User.FindFirst("jwt_token")?.Value

        //var authenticateInfo = await HttpContext.Authentication.GetAuthenticateInfoAsync("Bearer");
        //string accessToken = authenticateInfo.Properties.Items[".Token.jwt_token"];

        //HttpContext.User.Claims.ToList().ForEach(item => dict.Add(item.Type, item.Value));
    }
}