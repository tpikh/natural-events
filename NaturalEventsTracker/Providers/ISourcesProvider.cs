using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using NaturalEventsTracker.Models;

namespace NaturalEventsTracker
{
    public interface ISourcesProvider
    {
        Task<IEnumerable<EventSource>> GetAsync();
    }
}