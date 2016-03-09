using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.WebPages;

namespace PawnoKitASP.Models
{
    public class PageJSONInfoModel
    {
        string title;
        string scriptUrl;
        List<string> cssUrls;
        HelperResult renderedBody;

        public PageJSONInfoModel(string title, string scripturl, List<string> cssurls, HelperResult renderedBody)
        {

        }
    }
}