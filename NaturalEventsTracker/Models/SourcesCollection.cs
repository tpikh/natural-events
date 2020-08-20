using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NaturalEventsTracker.Models
{
    public class SourcesCollection
    {
        [JsonPropertyName("sources")]
        public IEnumerable<EventSource> Sources { get; set; }
    }
}
