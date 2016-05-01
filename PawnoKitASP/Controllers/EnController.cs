using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PawnoKitASP.Controllers
{
    public class EnController : Controller
    {
        public static string pathHeader = "~/Views/En";

        // GET: En
        public ActionResult Index() {                   ViewBag.LibsPath = "/"; return View(); }

        public ActionResult IDs() {                     ViewBag.LibsPath = "/"; return View(); }
        public ActionResult Vehicles() {                ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Skins() {                   ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Guns() {                    ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Vehcolors() {               ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Mapicons() {                ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Gametexts() {               ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Explosions() {              ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Weathers() {                ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Paintjobs() {               ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Racecheckpoints() {         ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Objects() {                 ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Interiors() {               ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult Pickups() {                 ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult ClientCommands() {          ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult RconCommands() {            ViewBag.LibsPath = "/IDs/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }

        public ActionResult Tools() {                   ViewBag.LibsPath = "/"; return View(); }
        public ActionResult StringSizeCounter() {       ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult ColorCreator() {            ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult TextureManager() {          ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult DialogCreator() {           ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult CommandCreator() {          ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult KeyFinder() {               ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        public ActionResult SoundManager() {            ViewBag.LibsPath = "/Tools/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
        //public ActionResult GametextConverter() { return View(); }

        public ActionResult MainInfo() {                ViewBag.LibsPath = "/"; return View(); }
        public ActionResult Limits() {                  ViewBag.LibsPath = "/MainInfo/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }

        public ActionResult Library() {                 ViewBag.LibsPath = "/"; return View(); }
        public ActionResult dZCMD() {                   return Redirect("vk.com/ts_samp"); }
        public ActionResult dYSI() {                    return Redirect("vk.com/ts_samp"); }
        public ActionResult dForeach() {                return Redirect("vk.com/ts_samp"); }
        public ActionResult dSscanf() {                 return Redirect("vk.com/ts_samp"); }
        public ActionResult dMxINI() {                  return Redirect("vk.com/ts_samp"); }
        public ActionResult dColors() {                 return Redirect("vk.com/ts_samp"); }
        public ActionResult dStreamer() {               return Redirect("vk.com/ts_samp"); }
        public ActionResult dMySQL() {                  return Redirect("vk.com/ts_samp"); }

        public ActionResult DownloadSAMP() {            ViewBag.LibsPath = "/"; return View(); }
        public ActionResult AllServerVersions() {       ViewBag.LibsPath = "/DownloadSAMP/"; return View(String.Format("{0}{1}{2}.cshtml", pathHeader, ViewBag.LibsPath, RouteData.GetRequiredString("action"))); }
    }
}