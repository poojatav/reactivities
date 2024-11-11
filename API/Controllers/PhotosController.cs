using Application.Core;
using Application.Photos;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
    public class PhotosController : BaseApiController
    {

        private readonly DataContext _context;
        public PhotosController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromForm] Add.Command command)
        {
            return HandleResult(await Mediator.Send(command));
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

        [HttpDelete("clear")]
        public async Task<IActionResult> ClearTableData()
        {
            _context.Photos.RemoveRange(_context.Photos); 
            await _context.SaveChangesAsync();
            return Ok("Table data cleared successfully.");
        }
    }
}