using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PawnoKitASP.Models
{
    public abstract class MenuItem
    {
        public List<MenuItem> Children { get; set; }
        public MenuItem Parent { get; set; }

        public void AddChild(MenuItem child)
        {
            child.Parent = this;
            this.Children.Add(child);
        }

        public string Name { get; protected set; }
        public string Alias { get; protected set; }
        public bool IsExternalLink { get; protected set; } = false;
    }
}
