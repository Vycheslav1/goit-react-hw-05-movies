browser.runtime
  .sendMessage('hello from content')
  .then(console.log, console.error);
