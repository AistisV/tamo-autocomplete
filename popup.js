document.addEventListener('DOMContentLoaded', () => {
  const userEl = document.getElementById('username');
  const passEl = document.getElementById('password');
  const saveBtn = document.getElementById('save');
  const statusEl = document.getElementById('status');

  // Load existing credentials
  chrome.storage.local.get(['username', 'password'], (result) => {
    if (result.username) userEl.value = result.username;
    if (result.password) passEl.value = result.password;
  });

  // Save credentials
  saveBtn.addEventListener('click', () => {
    const username = userEl.value;
    const password = passEl.value;

    chrome.storage.local.set({ username, password }, () => {
      statusEl.textContent = 'Settings saved!';
      setTimeout(() => { statusEl.textContent = ''; }, 2000);
    });
  });
});
