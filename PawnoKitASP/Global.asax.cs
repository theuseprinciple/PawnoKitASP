using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace PawnoKitASP
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            //GlobalFilters.Filters.Add(new GettingScriptsAndStylesActionFilter(), 0);
            GlobalFilters.Filters.Add(new GetScriptAndStyleActionFilter(), 0);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
    public class GetScriptAndStyleActionFilter : ActionFilterAttribute
    {
        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {
            string pathHeader = "/Content/Pages";
            filterContext.Controller.ViewBag.StyleUrl = String.Format("{0}/{1}/style.css", pathHeader, filterContext.RouteData.Values["action"]);
            filterContext.Controller.ViewBag.ScriptUrl = String.Format("{0}/{1}/script.js", pathHeader, filterContext.RouteData.Values["action"]);
        }
        /*
        public class GettingScriptsAndStylesActionFilter : ActionFilterAttribute
        {
            public override void OnResultExecuting(ResultExecutingContext filterContext)
            {

                //if(filterContext.RouteData.Values["controller"].ToString().Equals("HomeController"))
                //{
                    var actName = filterContext.RouteData.Values["action"].ToString();
                    List<string> names = null;
                    try
                    {
                        var pfPaths = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath(String.Format("~/Content/Pages/{0}", actName)), "*.css");


                        if (pfPaths.Count() > 0)
                        {
                            names = new List<string>();
                            foreach (var pfP in pfPaths)
                            {
                                //names.Add(Url.Content(String.Format("~/Content/Pages/Index/{0}", Path.GetFileName(pfP))));
                                names.Add(String.Format("Content/Pages/{0}/{1}", actName, Path.GetFileName(pfP)));
                            }
                        }
                        filterContext.Controller.ViewBag.StylesUrls = names;

                        // get script
                        //pfPaths = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath("~/Content/Pages/Index"), "*.js");
                        pfPaths = Directory.EnumerateFiles(System.Web.HttpContext.Current.Server.MapPath(String.Format("~/Content/Pages/{0}", actName)), "*.js");
                        if (pfPaths.Count() > 0)
                        {
                            string path = pfPaths.First();
                            //filterContext.Controller.ViewBag.ScriptUrl = Url.Content(String.Format("~/Content/Pages/Index/{0}", Path.GetFileName(path)));
                            filterContext.Controller.ViewBag.ScriptUrl = String.Format("Content/Pages/{0}/{1}", actName, Path.GetFileName(path));
                        }
                        else
                        {
                            filterContext.Controller.ViewBag.ScriptUrl = null;
                        }
                    }
                    catch
                    {
                        filterContext.Controller.ViewBag.ScriptUrl = null;
                        filterContext.Controller.ViewBag.StylesUrls = null;
                    }
                //}
            }

        }*/
    }
}
