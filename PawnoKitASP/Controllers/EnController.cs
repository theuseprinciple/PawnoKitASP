using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PawnoKitASP.Controllers
{
    public class EnController : Controller
    {
        // GET: En
        public ActionResult Index() { return View(); }

        public ActionResult IDs() { return View(); }
        public ActionResult Vehicles() { return View(); }
        public ActionResult Skins() { return View(); }
        public ActionResult Guns() { return View(); }
        public ActionResult Vehcolors() { return View(); }
        public ActionResult Mapicons() { return View(); }
        public ActionResult Gametexts() { return View(); }
        public ActionResult Explosions() { return View(); }
        public ActionResult Weathers() { return View(); }
        public ActionResult Paintjobs() { return View(); }
        public ActionResult Racecheckpoints() { return View(); }
        public ActionResult Objects() { return View(); }
        public ActionResult Interiors() { return View(); }
        public ActionResult Pickups() { return View(); } 
    }
}