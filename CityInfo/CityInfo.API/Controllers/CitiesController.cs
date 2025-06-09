using Asp.Versioning;
using AutoMapper;
using CityInfo.API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace CityInfo.API.Controllers
{
    [Route("api/cities")]
   // [Authorize]
    [ApiController]
    [ApiVersion(1.0)]
    public class CitiesController : ControllerBase
    {
        private readonly ICityInfoRepository _cityInfoRepository;
        private readonly IMapper _mapper;
        public CitiesController(ICityInfoRepository cityInfoRepository,IMapper mapper)
        {
            _cityInfoRepository = cityInfoRepository ?? throw new ArgumentNullException(nameof(cityInfoRepository));
            _mapper = mapper ??  throw new ArgumentNullException(nameof(mapper));
        }

       

        [HttpGet]
        public async Task<IActionResult> GetCities(string? name)
        {
            var cities = !string.IsNullOrWhiteSpace(name) ? await this._cityInfoRepository.GetCities(name) : await this._cityInfoRepository.GetCities();
            if (cities is null || !cities.Any())
            {
                return NoContent();
            }
            // Map the CityDto to CityWithoutPointsOfInterestDto
            var citiesDto = _mapper.Map<IEnumerable<Models.CityWithoutPointsOfInterestDto>>(cities);
            return Ok(cities);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCity(int id, bool includePointOfInterest = false)
        {
            var city = await _cityInfoRepository.GetCity(id, includePointOfInterest);
            if (city is null)
            {
                return NotFound();
            }
            // Map the CityDto to CityWithoutPointsOfInterestDto
            var cityDto = _mapper.Map<Models.CityWithoutPointsOfInterestDto>(city);           
            return Ok(cityDto);
        }
    }
}
