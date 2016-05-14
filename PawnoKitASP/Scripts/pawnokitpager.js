PawnoKit.improveLinks = function (selector) {
    $(selector).each(function () {
        var href = $(this).attr('href');
        var title = $(this).attr('title');
        var state = { title: title, url: href };
        $(this)
            .removeAttr('href')

            .css({
                cursor: 'pointer'
            })

            .click(function () {
                // Вы перешли по ссылке
                history.pushState(state, state.title, state.url);
                PawnoKitPager.unloadCurrentPage();
                PawnoKitPager.loadPage(state.url);
            });
    });
}

var PawnoKitPager = {

    _parentalDiv: null,

    _loadedScript: {},
    _loadedScriptUrl: null,
    _isScriptLoaded: false,

    _loadedStyleUrl: null,
    _isStyleLoaded: false,

    _markScriptAsLoaded: function () {
        this._isScriptLoaded = true;
    },

    _markScriptAsUnloaded: function(){
        this._isScriptLoaded = false;
    },

    markStyleAsLoaded: function (styleUrl) {
        this._loadedStyleUrl = styleUrl;
        this._isStyleLoaded = true;
    },

    _markStyleAsUnloaded: function(){
        this._isStyleLoaded = false;
        this._loadedStyleUrl = null;
        
    },

    isStyleLoaded: function () { return this._isStyleLoaded; },
    isScriptLoaded: function () { return this._isScriptLoaded; },

    getStyleUrl: function () { return this._loadedStyleUrl; },

    installPageScript: function (pageScript) {
        if (!this.isScriptLoaded()){
            this._loadedScript = pageScript;
            this._loadedScript.Install();
            this._markScriptAsLoaded();

            console.log("Script's been loaded");
        }
        else console.log("Cannot install page script since script is already installed"); 
    },

    installPageStyle: function (styleUrl) {
        if (!this.isStyleLoaded()){
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: styleUrl
            }).appendTo("head");

            this.markStyleAsLoaded(styleUrl);

            console.log("Style has been installed from " + styleUrl);
        }
        else console.log("Cannot install page style since style is already installed");
    },

    _uninstallPageScript: function () {
        if (this.isScriptLoaded()){
            this._loadedScript.Uninstall();
            this._loadedScript = {};
            this._markScriptAsUnloaded();

            console.log("Script's been unloaded");
        }
        else console.log("Not any scripts installed to unload");
        
    },
    
    _uninstallPageStyle: function () {
        if (this.isStyleLoaded()){
            $('link[href="' + this.getStyleUrl() + '"]').remove();
            this._markStyleAsUnloaded();

            console.log("Style's been unloaded");
        }
        else console.log("Not any styles installed to unload");
    },

    loadPage: function (url) {
        var self = this;
        $(this._parentalDiv).load(url, function (response, status, xhr) {

            if (status == "error") {
                console.log("cannot load page: " + xhr.status + " " + xhr.statusText);
                return;
            }

            // set title
            var attrsElement = $("#pageAttrs");

            document.title = attrsElement.data("pktitle"); //eject title
 
            // install style
            try {
                var styleUrl = attrsElement.data("pkstyle");
                self.installPageStyle(
                    styleUrl
                );
            }
            catch (e) { console.log("No styles available to install found: " + e.toString()); }

            // install script
            try{
                var scriptUrl = attrsElement.data("pkscript");
                $.getScript(
                    scriptUrl
                )
                .done(function (script, textStatus) {
                    // script will call PawnoKitPager.installPageScript by itself
                })
                .fail(function (jqxhr, settings, exception) {
                    console.log("Cannot get page script from " + scriptUrl);
                });
            }
            catch (e) { console.log("No scripts available to install found: " + e.toString()); }

            // hide all links in parental and hang clicks upon them
            PawnoKit.improveLinks('#' + $(self._parentalDiv).attr('id') + " > a:not(.external)");
            //console.log('#'+$(self._parentalDiv).attr('id') + " > a:not(.external)");

            console.log("Page has been loaded from " + url);

            VK.callMethod("setLocation", url.slice(1));
        });
    },

    unloadCurrentPage: function () {
        this._uninstallPageScript();
        this._uninstallPageStyle();
        $(this._parentalDiv).empty();
        console.log("Page has been unloaded");
    },

    Install: function (parentDiv) {
        this._parentalDiv = parentDiv;
    }
}


$(document).ready(function () {
    PawnoKitPager.Install(
        $("#content").get()
    );

    var st = {
        title: $(document).find("title").text(),
        url: window.location.pathname
    };

    history.replaceState(st, st.title, st.url); 
    
    window.onpopstate = function (e) {
        try{
            if (history.state.url != null){
                PawnoKitPager.unloadCurrentPage();
                PawnoKitPager.loadPage(history.state.url);
            }
        }
        catch(e){

        }
    };

    //window.onanchorchange = function(){
    //    console.log("hash changed:" + History.getHash()); 
    //};

    

});
