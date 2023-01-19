function selectServiceId( event, tabId ) {
  if (event.target.value) {
    console.log('Set KIM header to: ' + event.target.value);
    const valueParts = event.target.value.split(';')
    if (valueParts.length) {
      browser.composeMessageHeaders.addComposeHeader(tabId, 'Content-Description', valueParts[0]);
    }
    browser.composeMessageHeaders.addComposeHeader(tabId, 'X-KIM-Dienstkennung', event.target.value);
  } else {
    console.log('Remove KIM header');
    browser.composeMessageHeaders.deleteComposeHeader(tabId, 'X-KIM-Dienstkennung');
    browser.composeMessageHeaders.deleteComposeHeader(tabId, 'Content-Description');
  }
  browser.tabs.sendMessage(tabId, {action: "setServiceId", value: event.target.value});

  return false;
};

function initServiceId(id, tabId) {
  let input = document.getElementById("input-serviceid");
  input.addEventListener("change", () => selectServiceId(event, tabId)) ;
  if (id) {
    console.log("Received Id from content script: " + id);
    input.value = id;
  }
}

// Set onchange to select
browser.tabs.query({
  active: true,
  currentWindow: true,
}).then(tabs => {
  let tabId = tabs[0].id;
  browser.tabs.sendMessage(tabId, {action: "getServiceId"}).then((id) => initServiceId(id, tabId));
});
