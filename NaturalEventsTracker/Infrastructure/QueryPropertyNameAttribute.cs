using System;

namespace NaturalEventsTracker.Infrastructure
{
    public class QueryPropertyNameAttribute : Attribute
    {
        public string Name { get; set; }


        public QueryPropertyNameAttribute(string Name)
        {
            this.Name = Name;
        }
    }
}