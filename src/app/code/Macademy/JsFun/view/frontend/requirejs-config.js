var config = {
    "map": {
        "*": {
            "fadeInElement": "Macademy_JsFun/js/fade-in-element",
            "Magento_Review/js/submit-review": "Macademy_JsFun/js/submit-review"
        }
    },
    "paths": {
        "vue": [
            "https://cdn.jsdelivr.net/npm/vue/dist/vue",
            "Macademy_JsFun/js/vue"
        ],
        "jqueryLog": "Macademy_JsFun/js/jquery-log"
    },
    "shim": {
        "jqueryLog": ["jquery"],
    },
    "deps": ["Macademy_JsFun/js/every-page"],
    "config": {
        "mixins": {
            "Magento_Ui/js/view/messages": {
                "Macademy_JsFun/js/messages-mixin": true
            }
        }
    }
}
