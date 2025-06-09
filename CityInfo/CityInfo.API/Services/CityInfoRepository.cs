using CityInfo.API.DbContexts;
using CityInfo.API.Models;
using CityInfo.API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace CityInfo.API.Services
{
    public class CityInfoRepository : ICityInfoRepository
    {
        private readonly CityInfoContext _context;

        public CityInfoRepository(CityInfoContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<City>> GetCities()
        {
            var cities = await _context.Cities
                .Include(c => c.PointsOfInterest)
                .ToListAsync();

            return cities;
        }
        public async Task<IEnumerable<City>> GetCities(string? name)
        {
            var cities = await _context.Cities.Where(x=> x.Name == name)
                .Include(c => c.PointsOfInterest)
                .ToListAsync();
            return cities;
        }

        public async Task<CityDto?> GetCity(int cityId, bool includePointsOfInterest = false)
        {
            var query = _context.Cities.AsQueryable();

            if (includePointsOfInterest)
                query = query.Include(c => c.PointsOfInterest);

            var city = await query.FirstOrDefaultAsync(c => c.Id == cityId);

            if (city == null)
                return null;

            return new CityDto
            {
                Id = city.Id,
                Name = city.Name,
                Description = city.Description,
                PointsOfInterest = city.PointsOfInterest.Select(p => new PointOfInterestDto
                {
                    Id = p.Id,
                    Name = p.Name
                }).ToList()
            };
        }

        public async Task<IEnumerable<PointOfInterest>> GetPointsOfInterestForCity(int cityId)
        {
            var points = await _context.PointsOfInterest
                .Where(p => p.CityId == cityId)
                .ToListAsync();

            return points.Select(p => new PointOfInterest
            {
                Id = p.Id,
                Name = p.Name,
                Description = p.Description,
            });
        }

        public async Task<PointOfInterestDto?> GetPointOfInterestForCity(int cityId, int pointOfInterestId)
        {
            var point = await _context.PointsOfInterest
                .FirstOrDefaultAsync(p => p.CityId == cityId && p.Id == pointOfInterestId);

            if (point == null)
                return null;

            return new PointOfInterestDto
            {
                Id = point.Id,
                Name = point.Name
            };
        }

        public void AddPointOfInterestForCity(int cityId, PointOfInterestDto pointOfInterest)
        {
            var pointEntity = new PointOfInterest
            {
                Name = pointOfInterest.Name,
                Description = pointOfInterest.Description!,
                CityId = cityId
            };
            _context.PointsOfInterest.Add(pointEntity);
        }

        public bool CityExists(int cityId)
        {
            return _context.Cities.Any(c => c.Id == cityId);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }

        Task<PointOfInterest?> ICityInfoRepository.GetPointOfInterestForCity(int cityId, int pointOfInterestId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> CityNameMatchesCityId(string? cityName, int cityId)
        {
           return await _context.Cities
                .AnyAsync(c => c.Name == cityName && c.Id == cityId);
        }
    }
}
