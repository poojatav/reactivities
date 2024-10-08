using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForcastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
           "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForcastController> _logger;

        public WeatherForcastController(ILogger<WeatherForcastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name ="GetWeatherForcast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1,5).Select(index=> new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC =Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]     
            }).ToArray();
        }
    }
}