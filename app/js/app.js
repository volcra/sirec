(function ($) {
    'use strict';

    $(function () {
        $(document).foundation();

        $('.year').html(new Date().getFullYear());
    });
})(jQuery);
