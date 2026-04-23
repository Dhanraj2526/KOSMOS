// When the extension icon is clicked, open the side panel
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Optional: Open the sidebar automatically on the first install
chrome.runtime.onInstalled.addListener(() => {
  console.log("KOSMOS Extension Installed");
});
