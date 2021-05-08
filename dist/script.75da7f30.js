// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/contactForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactForm = contactForm;

function contactForm() {
  var form = document.getElementById('form');
  var fullName = document.getElementById('full-name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var errorMessage = document.getElementById("error-message");
  var successMessage = document.getElementById("success-message");

  if (form !== null) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      checkInputs();
    });

    function checkInputs() {
      var fullNameValue = fullName.value.trim();
      var emailValue = email.value.trim();
      var messageValue = message.value;
      var text;

      if (fullNameValue === '') {
        text = "Please Enter your fullName";
        errorMessage.innerHTML = text;
        return false;
      }

      if (emailValue === '') {
        text = "Email cannot be blank";
        errorMessage.innerHTML = text;
        return false;
      } else if (!isEmail(emailValue)) {
        text = "Not a valid email";
        errorMessage.innerHTML = text;
        return false;
      }

      if (messageValue === 'free pizza slices') {
        text = "Seriously no Free Slices!";
        errorMessage.innerHTML = text;
        return false;
      }

      text = "Thank you! your message has been sent";
      successMessage.innerHTML = text;
      form.reset();
      errorMessage.innerHTML = '';
      return true;
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
  }
}
},{}],"items.json":[function(require,module,exports) {
module.exports = [{
  "id": 1,
  "name": "Veggie Slice",
  "category": "healthy",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Basil, Sauce, Parmesan",
  "priceCents": 200,
  "image": "veggie-slice.png",
  "bestSeller": "undefined"
}, {
  "id": 2,
  "name": "Italian Slice",
  "category": "vegetarian",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Basil, Sauce, Parmesan",
  "priceCents": 220,
  "image": "italian-slice.png",
  "bestSeller": "bestSeller"
}, {
  "id": 3,
  "name": "Cheese Slice",
  "category": "vegetarian",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Sauce, Parmesan",
  "priceCents": 300,
  "image": "cheese-slice.png",
  "bestSeller": "undefined"
}, {
  "id": 4,
  "name": "Hawaiian Slice",
  "category": "Meat",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Pepperoni, Basil, Sauce, Parmesan",
  "priceCents": 290,
  "image": "hawaiian-slice.png",
  "bestSeller": "bestSeller"
}, {
  "id": 5,
  "name": "Meatballs Slice",
  "category": "Meat",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Meatballs, Basil, Sauce, Parmesan",
  "priceCents": 250,
  "image": "meat-balls-slice.png",
  "bestSeller": "undefined"
}, {
  "id": 6,
  "name": "Pepperoni Slice",
  "category": "Meat",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Pepperoni, Basil, Sauce, Parmesan",
  "priceCents": 210,
  "image": "pepperoni-slice.png",
  "bestSeller": "bestSeller"
}, {
  "id": 7,
  "name": "Bacon Slice",
  "category": "Meat",
  "weight": "230G",
  "ingredients": "Dough, Mozzarella, Tomatoes, Bacon, Basil, Sauce, Parmesan",
  "priceCents": 300,
  "image": "bacon-slice.png",
  "bestSeller": "bestSeller"
}];
},{}],"js/utilities/addGlobalEventListener.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addGlobalEventListener;

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, function (e) {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}
},{}],"js/utilities/formatCurrency.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatCurrency;
var formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
});

function formatCurrency(amount) {
  return formatter.format(amount);
}
},{}],"js/listCart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupListCart = setupListCart;
exports.addToCart = addToCart;
exports.handleClickCart = handleClickCart;

var _items = _interopRequireDefault(require("../items.json"));

var _addGlobalEventListener = _interopRequireDefault(require("./utilities/addGlobalEventListener.js"));

var _formatCurrency = _interopRequireDefault(require("./utilities/formatCurrency.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listCart = [];
var IMAGE_URL = "https://raw.githubusercontent.com/rizkallahsalloum/pizzaslice/master/src/img/menu/";
var cartItemTemplate = document.querySelector('#cart-item-template');
var cartItemContainer = document.querySelector('[data-cart-items]');
var cartQuantity = document.querySelector('[data-cart-quantity]');
var cartTotal = document.querySelector('[data-cart-total]');
var cartBtn = document.getElementById("cartBtn");
var cartItems = document.getElementById("cartItems");
var SESSION_STORAGE_KEY = "SHOPPING_CART-cart";

function setupListCart() {
  (0, _addGlobalEventListener.default)("click", "[data-remove-from-cart-button]", function (e) {
    var id = parseInt(e.target.closest("[data-item]").dataset.itemId);
    removeFromCart(id);
  });
  listCart = loadCart();
  renderCart();
}

function saveCart() {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(listCart));
}

function loadCart() {
  var cart = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return JSON.parse(cart) || [];
}

function addToCart(id) {
  var existingItem = listCart.find(function (entry) {
    return entry.id === id;
  });

  if (existingItem) {
    existingItem.quantity++;
  } else {
    listCart.push({
      id: id,
      quantity: 1
    });
  }

  renderCart();
  saveCart();
}

function removeFromCart(id) {
  var existingItem = listCart.find(function (entry) {
    return entry.id === id;
  });
  if (existingItem === null) return;
  listCart = listCart.filter(function (entry) {
    return entry.id !== id;
  });
  renderCart();
  saveCart();
}

function renderCart() {
  if (listCart.length === 0) {
    hideCart();
    cartQuantity.innerText = '0';
  } else {
    showCart();
    renderCartItems();
  }
}

function hideCart() {
  cartItems.classList.add("hidden");
}

function showCart() {
  cartItems.classList.remove("hidden");
}

function handleClickCart() {
  cartBtn.addEventListener("click", function () {
    cartItems.classList.toggle("cart-items-active");
    cartBtn.classList.toggle("cart-items-active");
  });
}

function renderCartItems() {
  cartQuantity.innerText = listCart.length;
  var totalCents = listCart.reduce(function (sum, entry) {
    var item = _items.default.find(function (i) {
      return entry.id === i.id;
    });

    return sum + item.priceCents * entry.quantity;
  }, 0);
  cartTotal.innerText = (0, _formatCurrency.default)(totalCents / 100);

  if (cartItemTemplate !== null) {
    cartItemContainer.innerHTML = '';
    listCart.forEach(function (entry) {
      var item = _items.default.find(function (i) {
        return entry.id === i.id;
      });

      var cartItem = cartItemTemplate.content.cloneNode(true);
      var container = cartItem.querySelector("[data-item]");
      container.dataset.itemId = item.id;
      var name = cartItem.querySelector("[data-name]");
      name.innerText = item.name;
      var price = cartItem.querySelector("[data-price]");
      price.innerText = (0, _formatCurrency.default)(item.priceCents * entry.quantity / 100);
      var image = cartItem.querySelector("[data-image]");
      image.src = "".concat(IMAGE_URL, "/").concat(item.image);

      if (entry.quantity > 1) {
        var quantity = cartItem.querySelector("[data-quantity]");
        quantity.innerText = "Quantity: ".concat(entry.quantity);
      }

      cartItemContainer.appendChild(cartItem);
    });
  }
}
},{"../items.json":"items.json","./utilities/addGlobalEventListener.js":"js/utilities/addGlobalEventListener.js","./utilities/formatCurrency.js":"js/utilities/formatCurrency.js"}],"js/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupStore = setupStore;

var _items = _interopRequireDefault(require("../items.json"));

var _listCart = require("./listCart");

var _addGlobalEventListener = _interopRequireDefault(require("./utilities/addGlobalEventListener.js"));

var _formatCurrency = _interopRequireDefault(require("./utilities/formatCurrency.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardItemContainer = document.querySelector("[data-card-container]");
var cardItemTemplate = document.querySelector('#card-item-template');
var IMAGE_URL = "https://raw.githubusercontent.com/rizkallahsalloum/pizzaslice/master/src/img/menu/";
var itemNotificationAdded = document.querySelector('.item-notification');

if (document.querySelector(".filter-list-items") !== null && document.querySelector(".menu-slices") !== null) {
  (function () {
    var sortBtn = document.querySelector(".filter-list-items").children;
    var sortItem = document.querySelector(".menu-slices").children;

    for (var i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        for (var j = 0; j < sortBtn.length; j++) {
          sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        var targetData = this.getAttribute('data-target');

        var category = _items.default.map(function (d) {
          return d.category.toLowerCase();
        });

        var bestSeller = _items.default.map(function (name) {
          return name.bestSeller;
        });

        for (var k = 0; k < sortItem.length; k++) {
          sortItem[k].classList.remove('active');
          sortItem[k].classList.add('hidden');

          if (sortItem[k].getAttribute(_items.default) === targetData || targetData === category[k]) {
            sortItem[k].classList.remove('hidden');
            sortItem[k].classList.add('active');
          }

          if (sortItem[k].getAttribute(_items.default) === targetData || targetData === "all") {
            sortItem[k].classList.remove('hidden');
            sortItem[k].classList.add('active');
          }

          if (sortItem[k].getAttribute(_items.default) === targetData || targetData === bestSeller[k]) {
            sortItem[k].classList.remove('hidden');
            sortItem[k].classList.add('active');
          }
        }
      });
    }
  })();
}

function setupStore() {
  (0, _addGlobalEventListener.default)('click', '[data-add-to-cart-button]', function (e) {
    var id = e.target.closest('[data-card-item]').dataset.itemId;
    (0, _listCart.addToCart)(parseInt(id));
    setTimeout(function () {
      itemNotificationAdded.classList.add('item-notification-active');
      setTimeout(function () {
        itemNotificationAdded.classList.remove('item-notification-active');
      }, 2000);
    }, 100);
  });

  _items.default.forEach(renderCardItem);
}

function renderCardItem(item) {
  if (cardItemTemplate !== null) {
    var cardItem = cardItemTemplate.content.cloneNode(true);
    var container = cardItem.querySelector("[data-card-item]");
    container.dataset.itemId = item.id;
    var name = cardItem.querySelector("[data-name]");
    name.innerText = item.name;
    var category = cardItem.querySelector("[data-category]");
    category.innerText = item.category;
    var ingredients = cardItem.querySelector("[data-ingredients]");
    ingredients.innerText = item.ingredients;
    var weight = cardItem.querySelector("[data-weight]");
    weight.innerText = item.weight;
    var price = cardItem.querySelector("[data-price]");
    price.innerText = (0, _formatCurrency.default)(item.priceCents / 100);
    var image = cardItem.querySelector("[data-image]");
    image.src = "".concat(IMAGE_URL, "/").concat(item.image);
    cardItemContainer.appendChild(cardItem);
  }
}
},{"../items.json":"items.json","./listCart":"js/listCart.js","./utilities/addGlobalEventListener.js":"js/utilities/addGlobalEventListener.js","./utilities/formatCurrency.js":"js/utilities/formatCurrency.js"}],"script.js":[function(require,module,exports) {
"use strict";

var _contactForm = require("./js/contactForm.js");

var _listCart = require("./js/listCart.js");

var _store = require("./js/store.js");

(0, _store.setupStore)();
(0, _listCart.setupListCart)();
(0, _contactForm.contactForm)();
(0, _listCart.handleClickCart)();
},{"./js/contactForm.js":"js/contactForm.js","./js/listCart.js":"js/listCart.js","./js/store.js":"js/store.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54431" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map