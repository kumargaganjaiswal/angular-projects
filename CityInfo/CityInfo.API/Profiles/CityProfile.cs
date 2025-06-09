using AutoMapper;

namespace CityInfo.API.Profiles
{
    public class CityProfile: Profile
    {
        public CityProfile()
        {
            CreateMap<Models.CityWithoutPointsOfInterestDto, Entities.City>()
                .ReverseMap();
            CreateMap<Entities.City, Models.CityWithoutPointsOfInterestDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description));
        }
    }
}
