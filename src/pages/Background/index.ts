console.log('This is the background page.');

chrome.runtime.onInstalled.addListener(() => {
  // This clears all rules, then adds a new one
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // For each URL you want the extension enabled on, add a new PageStateMatcher
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'cafemedia.atlassian.net' },
          }),
          // Add as many matchers as needed
        ],
        // If any condition is met, show the page action.
        actions: [new chrome.declarativeContent.ShowAction()],
      },
    ]);
  });
});
