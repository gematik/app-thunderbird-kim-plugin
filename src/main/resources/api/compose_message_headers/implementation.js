/* eslint-disable object-shorthand */
var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

var composeMessageHeaders = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    context.callOnClose(this);

    function getTabWindowFromTabId(tabId) {
      let tabObject = context.extension.tabManager.get(tabId);
      let realTab = tabObject.nativeTab;

      return tabObject.window;
    }

    return {
      composeMessageHeaders: {
        addComposeHeader(tabId, headerName, headerValue) {
          let realTabWindow = getTabWindowFromTabId(tabId);
          realTabWindow.gMsgCompose.compFields.setHeader(headerName, headerValue);
          console.log("Added " + headerName + ": " + headerValue + "to message headers");
        },
        deleteComposeHeader(tabId, headerName) {
          let realTabWindow = getTabWindowFromTabId(tabId);
          realTabWindow.gMsgCompose.compFields.deleteHeader(headerName);
          console.log("Removed " + headerName + " from message headers");
        },
      },
    };
  }

  close() {
    console.log("Unloaded compose message header API!");
    Services.obs.notifyObservers(null, "startupcache-invalidate", null);
  }
};
