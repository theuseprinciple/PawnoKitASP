using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PawnoKitASP.Models
{
    public class MainMenuItem : MenuItem
    {
        public MainMenuItem(string name, string alias, bool isExternalLink = false)
        {
            this.Name = name;
            this.Alias = alias;
            this.IsExternalLink = isExternalLink;
        }
    }
}