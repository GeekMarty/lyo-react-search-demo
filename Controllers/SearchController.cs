using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class SearchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }        
    }
}
