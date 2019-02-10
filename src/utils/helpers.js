export function getScreenWidth() {
  if (typeof window !== `undefined`) {
    return window.innerWidth;
  }
}

export function isWideScreen() {
  if (typeof window !== `undefined`) {
    const windowWidth = window.innerWidth;
    const mediaQueryL = 1024;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}

export function currDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (1+today.getMonth())).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}
