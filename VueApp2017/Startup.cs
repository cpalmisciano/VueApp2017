using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.AspNetCore.WebSockets.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Serialization;
using System;
using System.Text;
using VueApp2017.Services;

namespace VueApp2017
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IUserService>(new UserService());

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.LoginPath = "/Home/Index";
                options.SlidingExpiration = true;
                options.ExpireTimeSpan = new TimeSpan(0, 0, 15, 0, 0);
            })
            .AddJwtBearer(options =>
             {
                 /*
                 options.RequireHttpsMetadata = true;
                 options.Authority = "https://localhost:44320/";
                 //options.Authority = "https://localhost/VueCore";
                 options.Audience = "https://localhost:44320/"; //"VueCore";
                 //options.TokenValidationParameters.NameClaimType = "client_id";
                 options.RequireHttpsMetadata = false;
                 //options.SaveToken = true;
                 */
                 options.TokenValidationParameters = new TokenValidationParameters()
                 {
                     ValidateIssuer = true,
                     ValidateAudience = true,
                     ValidateIssuerSigningKey = true,
                     ValidIssuer = Configuration["Tokens:Issuer"], //_configuration["Tokens:Issuer"], //"https://localhost:44320/", //Configuration["Tokens:Issuer"],
                     ValidAudience = Configuration["Tokens:Issuer"], //"https://localhost:44320/", //Configuration["Tokens:Issuer"],
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes((Configuration["Tokens:Key"].ToString()))),
                     ClockSkew = TimeSpan.Zero // remove delay of token when expire
                 };
             });

            //services.AddAuthorization(options => {
            //    options.DefaultPolicy = new AuthorizationPolicyBuilder(CookieAuthenticationDefaults.AuthenticationScheme)
            //        .RequireAuthenticatedUser()
            //        .Build();
            //});

            //services.AddAuthorization(options =>
            //{
            //    options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
            //});

            //services.AddAuthorization(options =>
            //{
            //    options.DefaultPolicy = new AuthorizationPolicyBuilder(JwtBearerDefaults.AuthenticationScheme)
            //        .RequireAuthenticatedUser()
            //        .Build();
            //});

            // if we need to support API calls from a different domain
            //services.AddCors( options => {
            //    options.AddPolicy("SPA", policy => {
            //        policy.WithOrigins("https://localhost/VueCore") // pass a string array with all authorized reqquests URL
            //            .AllowAnyHeader()
            //            .AllowAnyMethod();
            //    });
            //});

            //services.AddMvc(options => { options.Filters.Add(new RequireHttpsAttribute()); })
            //    .AddJsonOptions(opt =>
            //    {
            //        if (opt.SerializerSettings.ContractResolver != null)
            //        {
            //            var resolver = opt.SerializerSettings.ContractResolver as DefaultContractResolver;
            //            resolver.NamingStrategy = null;
            //        }
            //    });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseRewriter(new RewriteOptions().AddRedirectToHttps(301, 443));

            app.UseStaticFiles();

            // if we need to support API calls from a different domain
            //app.UseCors("SPA");

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                  name: "areas",
                  template: "{area:exists}/{controller=Home}/{action=Index}/{id?}"
                );

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}"
                );

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" }
                );
            });
        }
    }
}
