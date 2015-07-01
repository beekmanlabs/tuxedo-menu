(function ($) {
    'use strict';
    var settings;

    $.fn.tuxedoMenu = function (options) {
        var self = this;

        // Extend default settings with options
        settings = $.extend({
            triggerSelector: '.tuxedo-menu-trigger',
            menuSelector: '.tuxedo-menu',
            activeClass: 'active',
            addActiveClass: true,
            isFixed: true
        }, options);

        self.addClass('tuxedo-menu tuxedo-menu-pristine animated')
            .toggleClass('tuxedo-menu-visible', !settings.isFixed)
            .toggleClass('tuxedo-menu-fixed slideOutLeft', settings.isFixed);
        $(settings.triggerSelector).addClass('tuxedo-menu-trigger');

        $(settings.triggerSelector).on('click', function () {
            if (!settings.isFixed) {
                return;
            }

            $(settings.menuSelector)
                .toggleClass('slideInLeft slideOutLeft')
                .addClass('tuxedo-menu-visible');
        });

        $(document).click(function (event) {
            if (!settings.isFixed ||
                $(event.target).is(settings.triggerSelector)) {
                return;
            }

            if (!$(event.target).is(settings.triggerSelector) &&
                !$(event.target).closest(settings.menuSelector).length) {

                $(settings.menuSelector)
                    .removeClass('slideInLeft')
                    .addClass('slideOutLeft');
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
