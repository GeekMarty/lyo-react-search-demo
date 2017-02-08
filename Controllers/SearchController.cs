using LyoES;
using LyoES.Document.Deal;
using LyoES.EsClientInteraction;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication.Controllers
{
    public class SearchController : Controller
    {
        private readonly IReaderService _readerService;

        public SearchController(IReaderService readerService) {
            _readerService = readerService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Search(string term) {
            
            var result = _readerService.SearchInElastic<Deal>(term, "de-AT");
            if (!result.IsValid) {
                return JsonResult(false);
            }

            return JsonResult(true, result.Documents.Select(x => x.Name));
            // return new JsonResult("ECHO response: " + term);
        }

        private static JsonResult JsonResult(bool success, object jsonObject = null) {
            if (!success) {
                return new JsonResult(JsonConvert.SerializeObject(new { success = false }));
            }

            object jsonResult = new { result = jsonObject, success = true };

            return new JsonResult(JsonConvert.SerializeObject(jsonResult));
        }
    }
}
