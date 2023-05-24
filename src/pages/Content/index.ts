const htmlToInject =
  '<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100px; background-color: red; text-align: center; line-height: 100px; z-index: 10000;">Injected HTML</div>';
document.body.insertAdjacentHTML('afterbegin', htmlToInject);
