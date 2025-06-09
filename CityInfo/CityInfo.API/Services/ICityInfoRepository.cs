using CityInfo.API.Entities;
using CityInfo.API.Models;

namespace CityInfo.API.Services
{
    public interface ICityInfoRepository
    {
        Task<IEnumerable<City>> GetCities(); 
        Task<CityDto?> GetCity(int cityId, bool includePointsOfInterest = false);
        Task<IEnumerable<PointOfInterest>> GetPointsOfInterestForCity(int cityId);
        Task<PointOfInterest?> GetPointOfInterestForCity(int cityId, int pointOfInterestId);
        void AddPointOfInterestForCity(int cityId, PointOfInterestDto pointOfInterest);
        bool CityExists(int cityId);
        bool Save();
        Task<IEnumerable<City>> GetCities(string? name);
        Task<bool> CityNameMatchesCityId(string? cityName, int cityId);
    }
}

