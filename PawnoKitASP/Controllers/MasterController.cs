using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PawnoKitASP.Controllers
{
    public class MasterController : Controller
    {
        // GET: Master
        public ActionResult Skins(string skinchose)
        {
            return PartialView("~/Views/Shared/skins/"+ skinchose + ".cshtml");
        }

        public ActionResult Vehicles(string category)
        {
            return View();
        }
    }
}