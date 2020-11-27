console.log('compose.js loaded');
let serviceid = null;

function notify(message, sender, sendResponse) {
    switch (message.action) {
        case "getServiceId":
            sendResponse(serviceid);
            break;

        case "setServiceId":
            serviceid = message.value;
            break;
    }
}

browser.runtime.onMessage.addListener(notify);
