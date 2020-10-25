using System.Web;
using System.Web.Mvc;
using v2.Controllers;

namespace v2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            GlobalFilters.Filters.Add(new HomeController.BasicAuthenticationAttribute("your-username", "your-password"));
        }
    }
}
