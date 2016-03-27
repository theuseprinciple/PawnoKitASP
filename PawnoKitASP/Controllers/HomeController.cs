using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PawnoKitASP.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            /*
            ViewBag.StylesUrls = new List<string> {
                Url.Content("~/Content/IndexCss.css"),
                Url.Content("~/Content/IndexCss.css")
            };
            */

            // get styles
            var pfPaths = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath("~/Content/Pages/Index"), "*.css");

            List<string> names = null;
            if (pfPaths.Count() > 0)
            {
                names = new List<string>();
                foreach (var pfP in pfPaths)
                {
                    names.Add(Url.Content(String.Format("~/Content/Pages/Index/{0}", Path.GetFileName(pfP))));
                }
            }
            ViewBag.StylesUrls = names;

            // get script
            pfPaths = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath("~/Content/Pages/Index"), "*.js");
            if(pfPaths.Count() > 0)
            {
                string path = pfPaths.First();
                ViewBag.ScriptUrl = Url.Content(String.Format("~/Content/Pages/Index/{0}", Path.GetFileName(path)));
            }
            else
            {
                ViewBag.ScriptUrl = null;
            }
            //ViewBag.ScriptUrl = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath("~/Content/Pages/Index"), "*.js").First();
            //ViewBag.ScriptUrl = Url.Content("~/Content/IndexJs.js");
            return View();
        }

        public ActionResult Error(int id)
        {
            Response.StatusCode = id;

            return View();
        }
    }

    
}