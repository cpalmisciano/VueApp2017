using System;
using System.Threading.Tasks;

namespace VueApp2017.Services
{
    public class UserService : IUserService
    {

        Task<bool> IUserService.ValidateCredentials(string username, string password, out User user)
        {
            user = null;
            if (!string.IsNullOrWhiteSpace(username) && !string.IsNullOrWhiteSpace(password))
                user = new User(username);

            return Task.FromResult(true);
        }
 
        public Task<bool> AddUser(string username, string password)
        {
            throw new NotImplementedException();
        }
    }
}
