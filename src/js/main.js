const swiper = new Swiper('.card-swiper', {
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    320: {
      spaceBetween: 14,
      slidesPerView: 2.5,
    },
    400: {
      spaceBetween: 14,
      slidesPerView: 3,
    },
    650: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
  },
});
const swiper2 = new Swiper('.card-swiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.card-swiper-button-next',
    prevEl: '.card-swiper-button-prev',
  },
  thumbs: {
    swiper,
  },
});

const swiper3 = new Swiper('.reviews-swiper', {
  // slidesPerView: 2,
  // spaceBetween: 32,
  navigation: {
    nextEl: '.reviews-swiper-button-next',
    prevEl: '.reviews-swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1000: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

const swiper4 = new Swiper('.catalog-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 23,
    },
    700: {
      slidesPerView: 5,
      spaceBetween: 26,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 34,
    },
    1000: {
      spaceBetween: 47,
      slidesPerView: 5,
    },
  },
  // effect: 'slide',
  // speed: 300,
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 400;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', (e) => {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', (e) => {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = 17;

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      let node = this;
      while (node) {
        if (node.matches(css)) return node;
        node = node.parentElement;
      }
      return null;
    };
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

const orderChange = () => {
  const orderChangeOne = document.querySelectorAll('.order-slide--one');
  const orderChangeTwo = document.querySelectorAll('.order-slide--two');
  const callbackSlideOne = document.querySelectorAll('.callback-slide--one');

  orderChangeOne.forEach((item) => {
    const orderChangeOneButton = item.querySelector('.button');
    orderChangeOneButton.addEventListener('click', () => {
      item.classList.remove('order-slide--active');
      item.nextElementSibling.classList.add('order-slide--active');
    });
  });

  orderChangeTwo.forEach((item) => {
    const orderChangeTwoButton = item.querySelector('.button');
    orderChangeTwoButton.addEventListener('click', () => {
      item.classList.remove('order-slide--active');
      item.nextElementSibling.classList.add('order-slide--active');
    });
  });

  // console.log(callbackSlideOne);

  callbackSlideOne.forEach((item) => {
    const callbackChangeOneButton = item.querySelector('.button');
    callbackChangeOneButton.addEventListener('click', () => {
      item.classList.remove('callback-slide--active');
      item.nextElementSibling.classList.add('callback-slide--active');
    });
  });
};

orderChange();

const minPopup = () => {
  const buttonLeft = document.querySelector('.button-plus--left');
  const buttonCenter = document.querySelector('.button-plus--center');
  const buttonRight = document.querySelector('.button-plus--right');
  const windowLeft = document.querySelector('.window--left');
  const windowCenter = document.querySelector('.window--center');
  const windowRight = document.querySelector('.window--right');
  const windowLeftClose = windowLeft.querySelector('.window__close');
  const windowCenterClose = windowCenter.querySelector('.window__close');
  const windowRightClose = windowRight.querySelector('.window__close');

  buttonLeft.addEventListener('click', () => {
    windowLeft.classList.toggle('window--active');

    windowLeftClose.addEventListener('click', () => {
      windowLeft.classList.remove('window--active');
    });
  });

  buttonCenter.addEventListener('click', () => {
    windowCenter.classList.toggle('window--active');
  });

  buttonRight.addEventListener('click', () => {
    windowRight.classList.toggle('window--active');
  });
};

minPopup();

const tab = function () {
  let tabNav = document.querySelectorAll('.tabs-nav__item'), // Выбираем элементы навигации табов
    tabContent = document.querySelectorAll('.tabs-content__item'), // Выбираем самы табы
    tabName; // Переменная для имени таба

  // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav
  tabNav.forEach((item) => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      // Удаляем активный класс у всех элементов навигации табов
      item.classList.remove('tabs-nav__item--active');
    });
    this.classList.add('tabs-nav__item--active'); // Добавляем активный укласс у элемента по которому кликнули
    tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен
    selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
  }

  function selectTabContent(tab) {
    // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
    tabContent.forEach((item) => {
      const { classList } = item;
      classList.contains(tab)
        ? classList.add('tabs-content__item--active')
        : classList.remove('tabs-content__item--active');
    });
  }
};

tab();
