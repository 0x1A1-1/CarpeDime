window.addEvent("domready", function () {
    /*// Option 1: Use the manifest:
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.myButton.addEvent("action", function () {
            alert("You clicked me!");
        });
    });*/
    
    // Option 2: Do everything manually:

    var settings = new FancySettings("My Extension", "icon.png");
    
    var tuition = settings.create({
        "tab": i18n.get("information"), //tuition
        "group": i18n.get("tuition"),
        "name": "username",
        "type": "text",
        "label": i18n.get("username"),
        "text": i18n.get("x-amount")
    });
    
    var tDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("tuition"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("t-description")
    });

    var begDate = settings.create({
        "tab": i18n.get("information"), //semester beginning date
        "group": i18n.get("semester"),
        "name": "begDate",
        "type": "text",
        "label": i18n.get("begDate"),
        "text": i18n.get("x-date"),
    });

    var endDate = settings.create({
        "tab": i18n.get("information"), //semester end date
        "group": i18n.get("semester"),
        "name": "password",
        "type": "text",
        "label": i18n.get("endDate"),
        "text": i18n.get("x-date"),
    });
    
    var sDescription = settings.create({
        "tab": i18n.get("information"),
        "group": i18n.get("semester"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("s-description")
    });
    
    // ...
    
    settings.align([
        begDate,
        endDate
    ]);
    
});
