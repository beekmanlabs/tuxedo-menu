(function ($) {
    'use strict';
    $.fn.tuxedoMenu = function (options) {
        var self = this;

        // Extend default settings with options
        var settings = $.extend({
            triggerSelector: '.tuxedo-menu-trigger',
            menuSelector: '.tuxedo-menu',
            activeClass: 'active',
            addActiveClass: true,
            isFixed: true
        }, options);

        self.addClass('tuxedo-menu')
            .toggleClass('tuxedo-menu-fixed', settings.isFixed);
        $(settings.triggerSelector).addClass('tuxedo-menu-trigger');

        $(settings.triggerSelector).on('click', function () {
            $(settings.menuSelector)
                .addClass('tuxedo-menu-slide-opening')
                .removeClass('tuxedo-menu-slide-closing tuxedo-menu-pristine')
                .animate({
                    opacity: 1,
                    left: 0
                });
        });

        $(document).click(function (event) {
            if ($(event.target).is(settings.triggerSelector)) {
                return;
            }

            if (!$(event.target).is(settings.triggerSelector) &&
                !$(event.target).closest(settings.menuSelector).length) {
                $(settings.menuSelector)
                    .addClass('tuxedo-menu-slide-closing')
                    .removeClass('tuxedo-menu-slide-opening')
                    .animate({
                        opacity: 0.4,
                        left: '-256px'
                    });
            }
        });

        if (settings.addActiveClass) {
            $(settings.menuSelector + ' li').on('click', function () {
                $(this).siblings().removeClass(settings.activeClass);
                $(this).addClass(settings.activeClass);
            });
        }

        return self;
    };
}(jQuery));
