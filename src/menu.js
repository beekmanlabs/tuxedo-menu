(function ($) {
    'use strict';
    $.fn.menu = function (options) {
        var self = this;
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "#FAFAFA",
            padding: "1em"
        }, options);

        self.addClass('flat-menu');
        self.on('click', function () {
            console.log('click', self);
            self.toggleClass('collapsed');
        });
        return self;
    };
}(jQuery));
