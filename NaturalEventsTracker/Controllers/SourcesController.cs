using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NaturalEventsTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SourcesController : ControllerBase
    {
        private readonly ISourcesProvider sourcesProvider;

        public SourcesController(ISourcesProvider naturalEventsProvider)
        {
            this.sourcesProvider = naturalEventsProvider;
        }

        public async Task<IActionResult> Get()
        {
            var data = await sourcesProvider.GetAsync();

            return Ok(data);

        }
    }
}