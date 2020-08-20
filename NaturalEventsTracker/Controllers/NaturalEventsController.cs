using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NaturalEventsTracker.Models;
using NaturalEventsTracker.Providers;

namespace NaturalEventsTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NaturalEventsController : ControllerBase
    {
        private readonly INaturalEventsProvider naturalEventsProvider;

        public NaturalEventsController(INaturalEventsProvider naturalEventsProvider)
        {
            this.naturalEventsProvider = naturalEventsProvider;
        }


        public async Task<IActionResult> Get([FromQuery] NaturalEventsQuery query)
        {
            
            var data = await naturalEventsProvider.GetAsync(query);
            

            return Ok(data);

        }

        [Route("{id}")]
        public async Task<IActionResult> Get(string id)
        {

            var data = await naturalEventsProvider.GetAsync(id);


            return Ok(data);

        }
    }
}