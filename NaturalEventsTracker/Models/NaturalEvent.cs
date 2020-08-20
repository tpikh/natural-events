using System;
using System.Text.Json.Serialization;

namespace NaturalEventsTracker.Models
{
    public class NaturalEvent
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }

        [JsonPropertyName("title")]
        public string Title { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }

        [JsonPropertyName("closed")]
        public DateTime? Closed { get; set; }
    }
}
