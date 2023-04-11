'use strict';

import { updateWeather, error404} from "./app.js";

const defaultLocation = "#/weather?lat=46.7667&lon=23.6"   //Cluj-Napoca

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;

        updateWeather(`lat=${latitude}`, `lon=${longitude}`);    
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * 
 * @param {string} query Searched query
 */

const searchedLocation = query => updateWeather(...query.split("&"));
//updateWeather("lat=46.7667", "lon=23.6")

const routes = new Map([
    ["/current-location", currentLocation],
    ["weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);

    requestURL.includes ? requestURL.split("?") :
    [requestURL];

    routes.get(routes) ? routes.get(routes)(query) : error404()

}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        this.window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});