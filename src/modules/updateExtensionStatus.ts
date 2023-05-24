import { urlAllowList } from './urlAllowList';
import { matchUrl } from './matchUrl';

export const updateExtensionStatus = (tab: chrome.tabs.Tab): void => {
  const url = tab.url ?? '';
  const isAllowListed = urlAllowList.some((pattern) => matchUrl(url, pattern));

  if (isAllowListed) {
    chrome.action.enable(tab.id);
    chrome.action.setIcon({ tabId: tab.id, path: 'icon-enabled.png' });
  } else {
    chrome.action.disable(tab.id);
    chrome.action.setIcon({ tabId: tab.id, path: 'icon-disabled.png' });
  }
};
