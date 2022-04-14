define(['vue', 'jquery', 'jqueryLog'], function(Vue, $) {
    'use strict';

    $.log('Testing output to the console');

    return function(config, element) {
        return new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        });
    }
});
