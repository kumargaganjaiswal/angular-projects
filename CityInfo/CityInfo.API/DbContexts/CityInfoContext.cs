using Microsoft.EntityFrameworkCore;

namespace CityInfo.API.DbContexts
{
    public class CityInfoContext: DbContext
    {
        public CityInfoContext(DbContextOptions<CityInfoContext> options) : base(options)
        {
        }
        public DbSet<Entities.City> Cities { get; set; }
        public DbSet<Entities.PointOfInterest> PointsOfInterest { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CityInfoDB;Trusted_Connection=True;ConnectRetryCount=0");
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Entities.City>()
            //    .HasData(new Entities.City("New York City") { Id = 1, Description = "The one with that big park." },
            //             new Entities.City("Antwerp") { Id = 2, Description = "The one with the cathedral that was never really finished." },
            //             new Entities.City("Paris") { Id = 3, Description = "The one with that big tower." });
            //modelBuilder.Entity<Entities.PointOfInterest>()
            //    .HasData(new Entities.PointOfInterest("Central Park","Park") { Id = 1, CityId = 1 },
            //             new Entities.PointOfInterest("Metropolitan Museum of Art", "Museum") { Id = 2, CityId = 1 },
            //             new Entities.PointOfInterest("Cathedral of Our Lady", "Park") { Id = 3, CityId = 2 },
            //             new Entities.PointOfInterest("Antwerp Zoo", "Zoo") { Id = 4, CityId = 2 },
            //             new Entities.PointOfInterest("Eiffel Tower", "Tower") { Id = 5, CityId = 3 });
        }
    }
}
