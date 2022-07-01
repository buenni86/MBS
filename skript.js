import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

    var currentPopup = undefined;
    var isCoWebSiteOpened =  false;

    function closePopUp(){
        if (currentPopup !== undefined) {
            currentPopup.close();
            currentPopup = undefined;
        }
    }

    var zoneNeedHelp = "needHelp";
    var zoneFeedback = "feedback";
    var zoneDBPlanet = "DBPlanet";
    var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
    var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";
    var urlDBPlanet = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure";

    WA.room.onEnterZone(zoneNeedHelp, () => {
    currentPopup =  WA.ui.openPopup("needHelpPopup","Tutorial\nansehen?",[
            {
                label: "OK",
                className:"primary",
                callback: (popup => {
                    WA.nav.openTab(urlTutorial);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneNeedHelp, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneFeedback, () => {
    currentPopup =  WA.ui.openPopup("feedbackPopup","Möchtest du ein Feedback geben?",[


            {
                label: 'Nein',
                className: 'secondary',
                callback: () => closePopUp(),
            },
            {
                label: "Gerne",
                className:"primary",
                callback: (popup => {
                    WA.nav.openCoWebSite(urlFeedback);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneFeedback, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })

    WA.room.onEnterZone(zoneDBPlanet, () => {
    currentPopup =  WA.ui.openPopup("DBPlanetPopup","DB Planet WorkAdventure",[
            {
                label: "OK",
                className:"primary",
                callback: (popup => {
                    WA.nav.openTab(urlDBPlanet);
                    isCoWebSiteOpened = true;
                    closePopUp();
                })
            }]);
    })

    WA.room.onLeaveZone(zoneDBPlanet, () =>{
        closePopUp();

        if (isCoWebSiteOpened) {
            WA.nav.closeCoWebSite();
            isCoWebSiteOpened = false;
        }
    })