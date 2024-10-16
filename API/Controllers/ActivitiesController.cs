using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet] //api/activities
        public async Task<IActionResult> GetActivities()
        {
            //return HandleResult(await Mediator.Send(new List.Query()));
            return HandleResult<List<Activity>>(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] //api/activities/id
        public async Task<IActionResult> GetActivity(Guid id)
        {
            //var result = await Mediator.Send(new Details.Query { Id = id });
            return HandleResult<Activity>(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            //await Mediator.Send(new Create.Command { Activity = activity });
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, Activity activity)
        {
            activity.Id = id;
            //await Mediator.Send(new Edit.Command { Activity = activity });
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            //await Mediator.Send(new Delete.Command { Id = id });
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}