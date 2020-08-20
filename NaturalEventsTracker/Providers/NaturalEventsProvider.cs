using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using NaturalEventsTracker.Constants;
using NaturalEventsTracker.Extensions;
using NaturalEventsTracker.Models;

namespace NaturalEventsTracker.Providers
{
    class NaturalEventsProvider : INaturalEventsProvider
    {
        private readonly IHttpClientFactory httpClientFactory;

        public NaturalEventsProvider(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
        }
        public async Task<IEnumerable<NaturalEvent>> GetAsync(NaturalEventsQuery query)
        {
            var client = httpClientFactory.CreateClient(HttpClientNames.NaturalEventsClient);

            var response = await client.GetAsync($"events?{query.ToQueryString()}");

            var data = await JsonSerializer.DeserializeAsync<NaturalEventsCollection>(await response.Content.ReadAsStreamAsync());

            IEnumerable<NaturalEvent> result;
            if (!string.IsNullOrEmpty(query.Sort))
            {
                result = query.Sort == NaturalEventsQuery.OrderByAsc
                    ? data.NaturalEvents.OrderBy(x => x.Title)
                    : data.NaturalEvents.OrderByDescending(x => x.Title);
            }
            else
            {
                result = data.NaturalEvents;
            }

            return result;
        }

        public async Task<NaturalEvent> GetAsync(string id)
        {
            var client = httpClientFactory.CreateClient(HttpClientNames.NaturalEventsClient);

            var response = await client.GetAsync($"events/{id}");

            var data = await JsonSerializer.DeserializeAsync<NaturalEvent>(await response.Content.ReadAsStreamAsync());

            return data;
        }
    }
}