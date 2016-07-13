using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PawnoKitASP.Models
{
    public static class Menu
    {
        public static MainMenuItem EnRoot { get; set; } =
            new MainMenuItem("Index", "En");
        public static void Init()
        {
            var IDs = new MainMenuItem("IDs", "IDs");
            IDs.AddChild(new MainMenuItem("Weapons", "Guns"));
            IDs.AddChild(new MainMenuItem("Skins", "Skins"));
            IDs.AddChild(new MainMenuItem("Vehicles", "Vehicles"));
            IDs.AddChild(new MainMenuItem("Vehicle colors", "Vehcolors"));
            IDs.AddChild(new MainMenuItem("Mapicons", "Mapicons"));
            IDs.AddChild(new MainMenuItem("Weather views", "Weathers"));
            IDs.AddChild(new MainMenuItem("Paint jobs", "Paintjobs"));
            IDs.AddChild(new MainMenuItem("Race checkpoints", "Racecheckpoints"));
            IDs.AddChild(new MainMenuItem("Objects", "Objects"));
            IDs.AddChild(new MainMenuItem("Interiors", "Interiors"));
            IDs.AddChild(new MainMenuItem("Pickup types", "Pickups"));
            EnRoot.AddChild(IDs);

            var DownloadSAMP = new MainMenuItem("Download SA-MP", "DownloadSAMP");
            DownloadSAMP.AddChild(new MainMenuItem("List of clients & servers", @"http://files.sa-mp.com/?C=M;O=D", true));
            EnRoot.AddChild(DownloadSAMP);
        }
    }
}