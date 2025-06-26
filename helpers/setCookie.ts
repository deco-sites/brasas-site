export function setCookie(cvalue: string) {
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();

  globalThis.document.cookie = `language=${cvalue};${expires};path=/`;
  globalThis.location.reload();
}
