browser.tabs.query({
  active: true,
  currentWindow: true,
}).then(tabs => {
  let tabId = tabs[0].id;
  browser.messageDisplay.getDisplayedMessage(tabId).then((message) => {
    browser.messages.getFull(message.id).then((fullMessage) => {
      let headers = fullMessage.headers;
      // Read serviceid
      let serviceid_div = document.getElementById("kim-serviceid");
      let serviceid_header_value = headers['x-kim-dienstkennung'];
      if(serviceid_header_value) {
        serviceid_div.innerHTML = serviceid_header_value;
        serviceid_div.classList.add('present');
      } else {
        serviceid_div.innerHTML = "Keine Dienstkennung vorhanden";
        serviceid_div.classList.add('not-present');
      }

      // Read version
      let version_div = document.getElementById("kim-version");
      let version_header_value = headers['x-kom-le-version'];
      if(version_header_value) {
        version_div.innerHTML = version_header_value;
        version_div.classList.add('present');
      } else {
        version_div.innerHTML = "Kein Versionsheader vorhanden";
        version_div.classList.add('not-present');
      }
    });
  });
});
