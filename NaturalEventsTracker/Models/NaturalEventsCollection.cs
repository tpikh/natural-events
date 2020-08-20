using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace NaturalEventsTracker.Models
{
    public class NaturalEventsCollection
    {
        [JsonPropertyName("events")]
        public IEnumerable<NaturalEvent> NaturalEvents { get; set; }
    }
}
