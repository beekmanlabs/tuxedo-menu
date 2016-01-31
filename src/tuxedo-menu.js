(function ($) {
    'use strict';
    var settings;

    $.fn.tuxedoMenu = function (options) {
        var self = this;

        // Extend default settings with options
        settings = $.extend({
            triggerSelector: '.tuxedo-menu-trigger',
            menuSelector: '.tuxedo-menu',
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
            return false;
        });

        $(document).click(function (event) {
            if (!settings.isFixed ||
                $(event.target).is(settings.triggerSelector)) {
                return;
            }

            var isTrigger = $(event.target).is(settings.triggerSelector);
            var isMenu = $(event.target).closest(settings.menuSelector).length === 1;
            var isClickAbleMenuItem = $(event.target).closest('a').length === 1;
            var isParentOfCollapsibleChildren = $(event.target).next().is('ul.collapse, ul.collapsing');
            var isChildElementOfMenu = $.contains($(settings.menuSelector)[0], event.target);
            if ((!isTrigger && !isMenu) ||
                (isClickAbleMenuItem && !isParentOfCollapsibleChildren && isChildElementOfMenu)) {
                $(settings.menuSelector)
                    .removeClass('slideInLeft')
                    .addClass('slideOutLeft');
            }
        });

        return self;
    };
})(jQuery);
