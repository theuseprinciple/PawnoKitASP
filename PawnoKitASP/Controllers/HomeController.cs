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
            string controllerName = "En";
            if (Request.Cookies["UserLanguage"] != null)
            {
                controllerName = Request.Cookies["UserLanguage"].ToString();
            }
            else
            {
                // get OS language
                // redirect to a suitable controller
            }

            return RedirectToActionPermanent("Index", controllerName);
            //return View();
        }

        /*
        public ActionResult Error(int id)
        {
            Response.StatusCode = id;

            return View();
        }
        */
    }

    
}