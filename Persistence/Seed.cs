using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName="Bob", UserName="bob",Email ="bob@test.com"},
                    new AppUser{DisplayName="Tom", UserName="tom",Email ="tom@test.com"},
                    new AppUser{DisplayName="Jane", UserName="jane",Email ="jane@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            if (context.activities.Any()) return;

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