String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
}

var Page = {};

//a:not(.external)
var PawnoKit = {
    improveLinks: function (selector) {
        $(selector).each(function () {
            var href = $(this).attr('href');
            $(this)
                .removeAttr('href')

                .css({
                    cursor: 'pointer'
                })

                .click(function () {
                    window.location = href;
                });
        });
    }
};



