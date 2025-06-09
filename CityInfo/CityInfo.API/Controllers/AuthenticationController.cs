using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace CityInfo.API.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private IConfiguration _configuration;

        public AuthenticationController(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticationRequestBody requestBody)
        {
            if (requestBody == null || string.IsNullOrEmpty(requestBody.Username) || string.IsNullOrEmpty(requestBody.Password))
            {
                return BadRequest("Username and password are required.");
            }
            var user = ValidateUserCredentials(requestBody.Username, requestBody.Password);
            if (user is null)
            {
                return Unauthorized();
            }

            //Step2 create a Token
            var securityKey = new SymmetricSecurityKey(Convert.FromBase64String(_configuration["Authentication:SecretForKey"]!));

            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // The claims that
            var claimsForTokens = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub, requestBody.Username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.GivenName, user.FirstName),
                new Claim(JwtRegisteredClaimNames.FamilyName, user.LastName),
                new Claim("city", "Paris 253625"), // Example claim, you can modify as needed

            };


            var tokenOptions = new JwtSecurityToken(
                issuer: _configuration["Authentication:Issuer"],
                audience: _configuration["Authentication:Audience"],
                claims: claimsForTokens,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: signingCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);


            // Here you would typically validate the credentials against a database or other service.
            // For this example, we'll just return a success message.
            return Ok(new { Message = "Login successful", Username = requestBody.Username, Token= tokenString });
        }

        private User ValidateUserCredentials(string username, string password)
        {
            if (username == "test" && password == "test123")
            {
                return new User { FirstName = "Test", LastName = "User" };
            }
            else
            {
                throw new UnauthorizedAccessException("Invalid username or password.");
            }
        }
    }

    public class AuthenticationRequestBody
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }

    public class User
    {

        public string FirstName { get; set; } = "John";
        public string LastName { get; set; } = "Doe";

    }
}
