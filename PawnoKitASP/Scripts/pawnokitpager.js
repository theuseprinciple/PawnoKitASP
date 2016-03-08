
var PawnoKitPager = {
    /*
        Loads page into parentDiv

        LIMITS PER 1 PAGE:
            - 1 page script:
                * All of them have to contain var Page = {};
                With methods: Install, Uninstall
                * (function () {PawnoKitPager.installPageScript(Page);}

            - unlimited page css styles
            - 1 page content
    */
    currentParentalDiv: null,

    loadedCssCount: 0,
    isScriptInstalled: false,
    isPageLoaded: false,

    /* 
        SCRIPT
    */
    currentPageScriptObj: null,

    installPageScript: function (page) { // calling from page script
        page.Install();
        PawnoKitPager.currentPageScriptObj = page;
        PawnoKitPager.isScriptInstalled = true;
        console.log("script installed");
    },

    uninstallPageScript: function () {// usage PawnoKitPager.uninstallPageScript()
        PawnoKitPager.currentPageScriptObj.Uninstall();
        PawnoKitPager.currentPageScriptObj = null;
        PawnoKitPager.isScriptInstalled = false;
    },

    loadPageScript: function (url) {
        $.getScript(url)
            .done(function (script, textStatus) {
                // script has just called installPageScript
                console.log("page script installed from " + url);
            })
            .fail(function (jqxhr, settings, exception) {
                // cannot install script, installPageScript hasn't been called
                console.log("cannot install page script from " + url);
            });
    },

    /* 
        STYLE
    */

    loadedPageStylesUrls: [],

    // load 1 style from url
    loadPageStyle: function (url) {
        PawnoKitPager.loadedPageStylesUrls.push(url);

        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: url
        }).appendTo("head");

        PawnoKitPager.loadedCssCount++;
    },

    // remove 1 loaded style
    unloadPageStyle: function (loadedStyleUrl) {
        if (PawnoKitPager.loadedCssCount > 0) {
            PawnoKitPager.loadedPageStylesUrls.forEach(function (item, index, object) {
                if (item === loadedStyleUrl) {
                    $('link[href="' + loadedStyleUrl + '"]').remove();
                    object.splice(index, 1);
                    PawnoKitPager.loadedCssCount--;
                    return null;
                }
            });
        }
    },

    // remove all loaded styles
    unloadAllPageStyles: function () {
        if (PawnoKitPager.loadedCssCount > 0) {
            PawnoKitPager.loadedPageStylesUrls.forEach(function (item, index, object) {
                $('link[href="' + item + '"]').remove();
                object.splice(index, 1);
                PawnoKitPager.loadedCssCount--;
            });
        }
    },

    /* 
        CONTENT
    */
    loadContent: function (contentHTML) {
        $(PawnoKitPager.currentParentalDiv).append(contentHTML);
    },


    unloadContent: function () {
        $(PawnoKitPager.currentParentalDiv).empty();
    },

    /*
        PAGE LOADER
    */
    loadPage: function (pageInfoJSON) {
        PawnoKitPager.loadContent(pageInfoJSON["content"]);

        if (pageInfoJSON["stylesUrls"] !== 'undefined') {
            pageInfoJSON["stylesUrls"].forEach(function (item, index, object) {
                PawnoKitPager.loadPageStyle(item);
            });
        }

        if (pageInfoJSON["scriptUrl"] !== 'undefined') {
            PawnoKitPager.loadPageScript(pageInfoJSON["scriptUrl"]);
        }

        PawnoKitPager.isPageLoaded = true;
    },


    unloadCurrentPage: function () {
        if (PawnoKitPager.isPageLoaded) {
            PawnoKitPager.unloadContent();
            PawnoKitPager.unloadAllPageStyles();
            PawnoKitPager.uninstallPageScript();
        }
        PawnoKitPager.isPageLoaded = false;
    },

    /*
        INSTALLER
    */
    install: function (parentDiv) {
        PawnoKitPager.currentParentalDiv = parentDiv;
    },
};

$(document).ready(function () {
    PawnoKitPager.install($("#content").get());

    // fill firts page info into history
    var st = {
        title: $(document).find("title").text(),
        url: window.location.pathname
    };
    history.replaceState(st, st.title, st.url); 
    // ~~~~

    function appendText(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        document.body.appendChild(div);
    }

    PawnoKit.hideLinks = function () {
        $('a:not(.external)').each(function () {
            var href = $(this).attr('href');
            var title = $(this).attr('title');
            var state = { title: title, url: href };
            $(this)
                .removeAttr('href')

                .css({
                    cursor: 'pointer'
                })

                .click(function () {
                    history.pushState(state, state.title, state.url);
                    appendText('<b>Вы перешли по ссылке:</b> ' +
                            '<span style="color: green;">' + state.url + '</span>');

                    // Start loading JSON Page info
                });
        });
    }
    
    window.onpopstate = function (e) {
        // просто сообщение
        appendText('<b>Вы вернулись на страницу:</b> ' +
            '<span style="color: green;">' + history.location + '</span>' +
            '<br/><b>state:</b> <span style="color: green;">' +
            JSON.stringify(history.state) + '</span><br/><br/>');

        // START LOADING JSON PAGE INFO
    }
});

/*
    NEXT PAGE INIT [NORMAL WORK]
    PawnoKitPager.unloadCurrentPage();
    PawnoKitPager.loadPage(PageJSONInfo);
*/

/*
    FIRST PAGE INIT [HOLD START]

    1.
    <div id = "content">
        Parse page content  
    </div>

    2.
    <script>pagescript.js</script> <!-- Will be installed automatically, isScriptInstalled will be set as true -->
    <link>style.css</link>
    PawnoKitPager.loadedPageStylesUrls.push(url);
    PawnoKitPager.loadedCssCount ++;
    PawnoKitPager.isPageLoaded = true;
*/

/*
(function () {
    PawnoKitPager.install($("#content").get());
})();
*/
