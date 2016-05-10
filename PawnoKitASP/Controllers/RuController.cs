using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PawnoKitASP.Controllers
{
    public class RuController : Controller
    {
        public static string pathHeader = "~/Views/Ru";

        // ужас, но на первое время сойдет
        // GET: En
        public ActionResult Index(string hash) {
            if(hash != null)
            {
                try
                {
                    string[] controllerAndAction = hash.Split(new char[] { '/' });
                    return RedirectToActionPermanent(controllerAndAction[1], controllerAndAction[0]);
                }
                catch
                {

                }
                
                
            }

            ViewBag.LibsPath = "/"; return View();
        }

        public ActionResult IDs() { ViewBag.LibsPath = "/"; return View(); }
        public ActionResult Vehicles() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Skins() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Guns() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Vehcolors() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Mapicons() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Gametexts() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Explosions() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Weathers() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Paintjobs() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Racecheckpoints() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Objects() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Interiors() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Pickups() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult ClientCommands() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult RconCommands() { ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }

        public ActionResult Tools() { ViewBag.LibsPath = "/"; return View(); }
        public ActionResult StringSizeCounter() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult ColorCreator() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult TextureManager() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult DialogCreator() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult CommandCreator() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult KeyFinder() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult SoundManager() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult GametextConverter() { ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }

        public ActionResult MainInfo() { ViewBag.LibsPath = "/"; return View(); }
        public ActionResult Limits() { ViewBag.LibsPath = "/MainInfo/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }

        public ActionResult Library() { ViewBag.LibsPath = "/"; return View(); }
        /*
        public ActionResult dZCMD() {                   return RedirectPermanent("http://vk.com/ts_samp"); }
        public ActionResult dYSI() {                    return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dForeach() {                return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dSscanf() {                 return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dMxINI() {                  return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dColors() {                 return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dStreamer() {               return RedirectPermanent("vk.com/ts_samp"); }
        public ActionResult dMySQL() {                  return RedirectPermanent("vk.com/ts_samp"); }
        */

        public ActionResult DownloadSAMP() { ViewBag.LibsPath = "/"; return View(); }
        //public ActionResult AllServerVersions() {       ViewBag.LibsPath = "/DownloadSAMP/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
    }
}