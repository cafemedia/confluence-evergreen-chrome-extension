import { updateExtensionStatus } from '../../modules/updateExtensionStatus';

chrome.runtime.onInstalled.addListener(() => {
  // This clears all rules, then adds a new one
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // For each URL you want the extension enabled on, add a new PageStateMatcher
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'cafemedia.atlassian.net',
              schemes: ['https'],
            },
            css: ['h1[data-testid="title-text"]'],
          }),
          // Add as many matchers as needed
        ],
        // If any condition is met, show the page action.
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ]);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    updateExtensionStatus(tab);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    updateExtensionStatus(tab);
  });
});
