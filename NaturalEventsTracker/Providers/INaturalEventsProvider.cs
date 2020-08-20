using System.Collections.Generic;
using System.Threading.Tasks;
using NaturalEventsTracker.Models;

namespace NaturalEventsTracker.Providers
{
    public interface INaturalEventsProvider
    {
        Task<IEnumerable<NaturalEvent>> GetAsync(NaturalEventsQuery query);
        Task<NaturalEvent> GetAsync(string id);
    }
}
