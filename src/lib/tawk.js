function buildOrderMessage(cart, total) {
  const lines = cart
    .map((item) => {
      const lineTotal = Number(item.price) * Number(item.qty);
      return `• ${item.name} x${item.qty} — $${lineTotal.toLocaleString()}`;
    })
    .join("\n");

  return [
    "Hello, I would like to place an order from Inspiring designs.",
    "",
    "Order details:",
    lines,
    "",
    `Estimated total: $${Number(total).toLocaleString()}`,
    "",
    "Please let me know how I can complete my order."
  ].join("\n");
}

let callbacksInstalled = false;
let pendingMessage = null;

function fillChatInput() {
  if (!pendingMessage) return false;

  const api = window.Tawk_API;
  if (!api || typeof api.setChatInputMessage !== "function") return false;

  const message = pendingMessage;
  api.setChatInputMessage(message, (error) => {
    if (error) {
      console.warn("Tawk.to could not pre-fill the order message:", error);
      return;
    }
    // Keep the pending message only until Tawk confirms it was accepted.
    pendingMessage = null;
  });

  return true;
}

function installCallbacks() {
  if (callbacksInstalled) return;

  const api = window.Tawk_API;
  if (!api) return;

  // These callbacks are the reliable Tawk lifecycle points. The API docs
  // recommend using onLoad/onChatMaximized when manipulating the widget.
  api.onLoad = function () {
    fillChatInput();
  };

  api.onChatMaximized = function () {
    // The chat input is available after the widget has maximized.
    window.setTimeout(fillChatInput, 50);
    window.setTimeout(fillChatInput, 250);
  };

  callbacksInstalled = true;
}

export function openTawkWithOrder(cart, total) {
  if (!cart?.length) return;

  pendingMessage = buildOrderMessage(cart, total);
  installCallbacks();

  const tryOpen = () => {
    installCallbacks();

    const api = window.Tawk_API;
    if (!api || typeof api.maximize !== "function") return false;

    api.maximize();

    // setChatInputMessage is only available once Tawk has loaded. Try now,
    // then again after the widget has rendered its chat input.
    fillChatInput();
    window.setTimeout(fillChatInput, 100);
    window.setTimeout(fillChatInput, 300);
    window.setTimeout(fillChatInput, 800);
    window.setTimeout(fillChatInput, 1500);

    return true;
  };

  if (tryOpen()) return;

  // Tawk loads asynchronously. Wait for the API if the visitor clicks early.
  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    if (tryOpen() || attempts >= 40) {
      window.clearInterval(timer);
    }
  }, 250);
}
