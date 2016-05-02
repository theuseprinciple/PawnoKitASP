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
            string controllerName = "en";

            HttpCookie cookie = Request.Cookies["UserLanguage"];

            if (cookie != null)
            {
                controllerName = cookie["UserLanguage"];
            }
            else
            {
                // get OS language
                // redirect to a suitable controller
                var userLangs = Request.UserLanguages;
                controllerName = userLangs[0].Substring(0,2);
                switch(controllerName)
                {
                    case "ru":
                        break;
                    default:
                        controllerName = "en";
                        break;
                }
            }

            return RedirectToActionPermanent("Index", controllerName);
            *
            * ////////
            * 
            */

            return View();
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