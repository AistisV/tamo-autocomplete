(function () {
  chrome.storage.local.get(['username', 'password'], (result) => {
    const { username, password } = result;

    if (!username || !password) {
      console.log("TAMO Auto Login: No credentials found. Set them in the extension popup.");
      return;
    }

    const userField = document.querySelector('input[name="UserName"]');
    const passField = document.querySelector('input[name="Password"]');
    if (!userField || !passField) return;

    userField.value = username;
    passField.value = password;

    ['input', 'change'].forEach(evt => {
      userField.dispatchEvent(new Event(evt, { bubbles: true }));
      passField.dispatchEvent(new Event(evt, { bubbles: true }));
    });

    const submitBtn = document.querySelector('button[type="submit"], input[type="submit"]');
    if (submitBtn) {
      submitBtn.click();
    } else {
      const form = document.querySelector('form');
      if (form) form.submit();
    }
  });
})();
