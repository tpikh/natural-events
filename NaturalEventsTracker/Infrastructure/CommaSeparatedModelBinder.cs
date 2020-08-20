using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace NaturalEventsTracker.Infrastructure
{

    public class CommaSeparatedModelBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            try
            {
                var valueProviderResult = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
                var value = valueProviderResult.FirstValue; // get the value as string

                var model = value.Split(",");
                bindingContext.Result = ModelBindingResult.Success(model);
            }
            catch 
            {
                bindingContext.Result = ModelBindingResult.Failed();
            }



            return Task.CompletedTask;
        }
    }

}
