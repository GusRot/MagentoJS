define([], function(){
    'use strict';

    return function(originalMessages) {
        // Use below lines instead for non-component override:
        // originalMessages.defaults.hideTimeout = 2000;
        // originalMessages.defaults.hideSpeed = 100;
        // return originalMessages;

        return originalMessages.extend({
            defaults: {
                hideTimeout: 2000,
                hideSpeed: 100
            }
        });
    }
});
