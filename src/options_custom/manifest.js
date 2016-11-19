this.manifest = {
    "name": "My Extension",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("information"), //tuition
            "group": i18n.get("tuition"),
            "name": "username",
            "type": "text",
            "label": i18n.get("username"),
            "text": i18n.get("x-amount")
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("tuition"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("t-description")
        },

        {
            "tab": i18n.get("information"), //semester beginning date
            "group": i18n.get("semester"),
            "name": "begDate",
            "type": "text",
            "label": i18n.get("begDate"),
            "text": i18n.get("x-date"),
        },
        {
            "tab": i18n.get("information"), //semester end date
            "group": i18n.get("semester"),
            "name": "password",
            "type": "text",
            "label": i18n.get("endDate"),
            "text": i18n.get("x-date"),
        },
        {
            "tab": i18n.get("information"),
            "group": i18n.get("semester"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("s-description")
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },

    ],
    "alignment": [
        [
            "username",
            "password"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]
    ]
};