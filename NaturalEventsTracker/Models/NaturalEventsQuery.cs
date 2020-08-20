using System;
using Microsoft.AspNetCore.Mvc;
using NaturalEventsTracker.Infrastructure;

namespace NaturalEventsTracker.Models
{
    public class NaturalEventsQuery
    {
        public const string OrderByAsc = "asc";
        public const string OrderByDesc = "desc";

        [QueryPropertyName("from")]
        public DateTime? From { get; set; }

        [QueryPropertyName("to")]
        public DateTime? To { get; set; }

        [BindProperty(BinderType = typeof(CommaSeparatedModelBinder))]
        [QueryPropertyName("source")]
        public string[] Source { get; set; }

        [BindProperty(BinderType = typeof(CommaSeparatedModelBinder))]
        [QueryPropertyName("status")]
        public string[] Status { get; set; }

        [QueryPropertyName("limit")]
        public int Limit { get; set; } = 100;

        public string Sort { get; set; }
    }
}
