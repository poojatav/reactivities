using Application.Core;
using Application.Photos;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PhotosController : BaseApiController
    {
        // [HttpPost]
        // public async Task<IActionResult> Add([FromForm] Add.Command command)
        // {
        //     return HandleResult(await Mediator.Send(command));
        // }

        [HttpPost]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            if (command.File == null || command.File.Length == 0)
            {
                return BadRequest("File must not be empty.");
            }

            var result = await Mediator.Send(command);

            if (result.IsSuccess)
            {
                return Ok(result.Value); // Return the photo object or any relevant data.
            }

            return BadRequest(result.Error); // Return the error message from Result.
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMain(string id)
        {
            return HandleResult(await Mediator.Send(new SetMain.Command { Id = id }));
        }
    }
}