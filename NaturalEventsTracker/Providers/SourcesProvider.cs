using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using NaturalEventsTracker.Constants;
using NaturalEventsTracker.Models;

namespace NaturalEventsTracker.Providers
{
    class SourcesProvider : ISourcesProvider
    {
        private readonly IHttpClientFactory httpClientFactory;

        public SourcesProvider(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
        }

        public async Task<IEnumerable<EventSource>> GetAsync()
        {
            var client = httpClientFactory.CreateClient(HttpClientNames.NaturalEventsClient);
            var response = await client.GetAsync("sources");

            var data = await JsonSerializer.DeserializeAsync<SourcesCollection>(await response.Content.ReadAsStreamAsync(), new JsonSerializerOptions()
            {
                PropertyNameCaseInsensitive = true
            });

            return data.Sources;

        }
    }
}