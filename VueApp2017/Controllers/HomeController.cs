using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using VueApp2017.Models;
using VueApp2017.Services;

namespace VueApp2017.Controllers
{
    [Authorize(AuthenticationSchemes = CookieAuthenticationDefaults.AuthenticationScheme)]
    public class HomeController : Controller
    {
        private readonly IUserService _userService;
        private readonly IConfiguration _configuration;

        public HomeController(IUserService userService, IConfiguration configuration)
        {
            _userService = userService;
            _configuration = configuration;
        }

        [AllowAnonymous]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [AllowAnonymous]
        public async Task<IActionResult> Login(SignInModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                User user = null;
                if (await _userService.ValidateCredentials(model.Username, model.Password, out user))
                {
                    await SignInUser(user.Username);
                    if (returnUrl != null)
                    {
                        return Redirect(returnUrl);
                    }
                }
            }

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        [AllowAnonymous]
        [ActionName("requestToken")]
        [Route("Home/requestToken")]
        public IActionResult RequestToken()
        {
            if (User == null || User.Claims == null)
            {
                return BadRequest("Could not verify credentials");
            }

            DateTime expires = DateTime.UtcNow.AddMinutes(30);

            JwtSecurityToken token = GenerateJwtToken(expires);

            return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), expiration = expires });
        }

        [HttpGet]
        [ActionName("verifyToken")]
        [Route("Home/verifyToken")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult VerifyToken()
        {
            if (User == null || User.Claims == null)
            {
                return BadRequest("Could not verify credentials");
            }
            string accessToken = HttpContext.GetTokenAsync("access_token").Result;


            //HttpControllerContext ctx = this.ControllerContext;

            //string value = ctx.Request.Headers.Authorization.Parameter; //["Authorization"]
            //if (!string.IsNullOrWhiteSpace(value))
            //{
            //    ///string token = Encoding.UTF8.GetString(Convert.FromBase64String(value));

            //    string token_key = ConfigurationManager.AppSettings["TokenKey"];
            //    string token_issuer = ConfigurationManager.AppSettings["TokenIssuer"];
            //    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(token_key));

            //    var tokenHandler = new JwtSecurityTokenHandler();
            //    var tokenValidationParameters = new TokenValidationParameters()
            //    {
            //        ValidAudiences = new string[] { token_issuer },
            //        ValidIssuers = new string[] { token_issuer },
            //        IssuerSigningKey = key
            //    };

            //    SecurityToken validatedToken;

            //    tokenHandler.ValidateToken(value, tokenValidationParameters, out validatedToken);
            //    if (validatedToken != null)
            //    {
            //        JwtSecurityToken tkn = (JwtSecurityToken)validatedToken;
            //        if (tkn != null && tkn.Claims != null)
            //        {
            //            foreach (Claim claim in tkn.Claims)
            //            {
            //                Console.Out.WriteLine(claim.Type + " | " + claim.ValueType + " | " + claim.Value);
            //            }
            //        }
            //    }
            //}

            return Ok(new { sucess = true });

            //return new HttpResponseMessage()
            //{
            //    StatusCode = HttpStatusCode.OK,
            //    Content = new StringContent("{sucess: true}", Encoding.UTF8, "application/json")
            //};
        }

        [AllowAnonymous]
        public async Task SignInUser(string username)
        {
            var claims = new List<Claim>() {
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.Sid, "1234", ClaimValueTypes.Integer32), // for UserID
                new Claim(ClaimTypes.UserData, "{\"Expires\": \"2017-12-22 8:30:00\", \"firstName\" : \"Carlos\" }")
            };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

            var principal = new ClaimsPrincipal(identity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, 
                new AuthenticationProperties
                {
                    ExpiresUtc = DateTime.UtcNow.AddMinutes(20),
                    IsPersistent = false,
                    AllowRefresh = false
                });
        }

        [AllowAnonymous]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private JwtSecurityToken GenerateJwtToken(DateTime expires)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["Tokens:Issuer"],
                audience: _configuration["Tokens:Issuer"],
                claims: User.Claims,
                expires: expires,
                notBefore: DateTime.UtcNow,
                signingCredentials: creds);

            return token;
        }

    }
}
