using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using NaturalEventsTracker.Infrastructure;
using NaturalEventsTracker.Models;

namespace NaturalEventsTracker.Extensions
{
    public static class NaturalEventsQueryExtension
    {
        static readonly Dictionary<Type, Func<object, string>> ValueAccessors = new Dictionary<Type, Func<object, string>>();

        static NaturalEventsQueryExtension()
        {
            ValueAccessors.Add(typeof(DateTime?), o => ((DateTime)o).ToString("O"));
            ValueAccessors.Add(typeof(string[]), o => String.Join(',', (string[])o));
            ValueAccessors.Add(typeof(int), o => o.ToString());
        }
        public static string ToQueryString(this NaturalEventsQuery query)
        {
            var nv = HttpUtility.ParseQueryString(string.Empty);
            var properties = query.GetType().GetProperties().Where(x => x.GetMethod.IsPublic);
            foreach (var property in properties)
            {
                var customNameAttr = property.GetCustomAttribute(typeof(QueryPropertyNameAttribute)) as QueryPropertyNameAttribute;
                if (customNameAttr == null)
                {
                    continue;
                }
                string name = customNameAttr?.Name ?? property.Name;
                var propValue = property.GetValue(query);
                if (propValue == null)
                {
                    continue;
                }
                var value = ValueAccessors.TryGetValue(property.PropertyType, out Func<object, string> valueAccessor) ? valueAccessor(propValue) : propValue.ToString();
                nv.Add(name, value);
            }


            return nv.ToString();
        }
    }
}
