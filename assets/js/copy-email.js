// JavaScript is used only by the email copy button.
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
if (copyButton && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('gorbuzova.maria@yandex.ru');
      copyStatus.textContent = 'Почта скопирована';
      copyButton.title = 'Почта скопирована';
      copyButton.setAttribute('aria-label', 'Почта скопирована');
    } catch {
      copyStatus.textContent = 'Не удалось скопировать. Выделите адрес и скопируйте его вручную.';
      copyButton.title = 'Выделите адрес и скопируйте вручную';
    }
  });
}
