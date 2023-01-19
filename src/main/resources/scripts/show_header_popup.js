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
      if (serviceid_header_value) {
        serviceid_div.innerHTML = serviceid_header_value;
        serviceid_div.classList.add('present');
      } else {
        serviceid_div.innerHTML = "Keine Dienstkennung vorhanden";
        serviceid_div.classList.add('not-present');
      }

      // Read Content-Description
      let description_div = document.getElementById("content-description");
      let description_value = headers['content-description'];

      if (description_value) {
        description_div.innerHTML = description_value;
        description_div.classList.add('present');
      } else {
        description_div.innerHTML = "Kein Beschreibungsheader vorhanden";
        description_div.classList.add('not-present');
      }
    });
  });
});
