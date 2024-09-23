using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.activities.Any()) return;
            
            var activities1 = new List<Activity>
            {
                new Activity
                {
                    Title ="Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description="Activity 1 month ago",
                    Category= "drink",
                    City ="London",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title ="Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description="Activity 1 month ago",
                    Category= "drink",
                    City ="London",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title ="Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description="Activity 1 month ago",
                    Category= "drink",
                    City ="London",
                    Venue = "Pub",
                },
                new Activity
                {
                    Title ="Past Activity 1",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description="Activity 1 month ago",
                    Category= "drink",
                    City ="London",
                    Venue = "Pub",
                }
            };

            await context.activities.AddRangeAsync(activities1);
            await context.SaveChangesAsync();
        }
    }
}