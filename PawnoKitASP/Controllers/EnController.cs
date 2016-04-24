using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PawnoKitASP.Controllers
{
    [RoutePrefix("En")]
    public class EnController : Controller
    {
        // GET: En
        public ActionResult Index() { return View(); }

        public ActionResult IDs() {             ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Vehicles() {        ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Skins() {           ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Guns() {            ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Vehcolors() {       ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Mapicons() {        ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Gametexts() {       ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Explosions() {      ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Weathers() {        ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Paintjobs() {       ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Racecheckpoints() { ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Objects() {         ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Interiors() {       ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult Pickups() {         ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult ClientCommands() {  ViewBag.LibsPath = "/IDs"; return View(); }
        public ActionResult RconCommands() {    ViewBag.LibsPath = "/IDs"; return View(); }

        public ActionResult Tools() {               ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult StringSizeCounter() {   ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult ColorCreator() {        ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult TextureManager() {      ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult DialogCreator() {       ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult CommandCreator() {      ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult KeyFinder() {           ViewBag.LibsPath = "/Tools"; return View(); }
        public ActionResult SoundManager() {        ViewBag.LibsPath = "/Tools"; return View(); }
        //public ActionResult GametextConverter() { return View(); }

        public ActionResult MainInfo() { return View(); }
        public ActionResult Limits() { return View(); }

        public ActionResult Library() { return View(); }

        public ActionResult DownloadSAMP() { return View(); }
    }
}