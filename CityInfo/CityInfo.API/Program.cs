using Asp.Versioning;
using CityInfo.API.DbContexts;
using CityInfo.API.Middlewares;
using CityInfo.API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Serilog;


// Serilog configuration
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .Enrich.FromLogContext()
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseSerilog();
// Add controllers and configure return format
builder.Services.AddControllers(options =>
{
    options.ReturnHttpNotAcceptable = true;
}).AddNewtonsoftJson()
    .AddXmlDataContractSerializerFormatters();
builder.Services.AddScoped<ICityInfoRepository, CityInfoRepository>();

// Optional: Add support for API exploration and Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Optional: Add custom problem details
builder.Services.AddProblemDetails(options =>
{
    options.CustomizeProblemDetails = ctx =>
    {
        ctx.ProblemDetails.Extensions.Add("Additional Info", "Records not found");
        ctx.ProblemDetails.Extensions.Add("Server", "Dev Environment");
    };
});

builder.Services.AddDbContext<CityInfoContext>(DbContextOptions => DbContextOptions.UseSqlServer(
    builder.Configuration.GetConnectionString("CityInfoDBConnection")));

builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Authentication:Issuer"],
            ValidAudience = builder.Configuration["Authentication:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(builder.Configuration["Authentication:SecretForKey"]!)),
            ValidateLifetime = true
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MustBeFromParis", policy =>
    {
        policy.RequireAuthenticatedUser();
        policy.RequireClaim("city", "Paris 253625");
    });
});

builder.Services.AddApiVersioning(setupAction =>
{
    setupAction.ReportApiVersions = true;
    setupAction.DefaultApiVersion = new ApiVersion(1, 0);
    setupAction.AssumeDefaultVersionWhenUnspecified = true;
}).AddMvc();


var app = builder.Build();

// Enable Swagger only in development environment
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage(); // <-- Add this line   
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CityInfo API V1");
        // If you want Swagger UI at root '/', keep this:
        c.RoutePrefix = string.Empty;
    });
}
app.UseMiddleware<ExceptionMiddleware>();
app.UseAuthentication();
// Enable HTTPS redirection and authorization
app.UseHttpsRedirection();
app.UseAuthorization();

// Map API controllers
app.MapControllers();

app.Run();
