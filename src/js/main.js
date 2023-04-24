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
    swiper: swiper,
  },
});

const swiper3 = new Swiper('.reviews-swiper', {
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
  // speed: 2000,
  effect: 'coverflow',

  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    modifier: 1,
    depth: 30,
  },
  autoplay: {
    delay: 3000,
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
});

const swiper5 = new Swiper('.card-swiper3', {
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
const swiper6 = new Swiper('.card-swiper4', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.card-swiper2-button-next',
    prevEl: '.card-swiper2-button-prev',
  },
  thumbs: {
    swiper: swiper5,
  },
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

const mailingPopupChange = () => {
  const mailingPopup = document.querySelectorAll('.popup');
  mailingPopup.forEach((item) => {
    const mailingRadio = item.querySelectorAll('.mailing-item');
    const mailingPopupButtonEmail = item.querySelector('.mailing-item--email');
    const mailingPopupButton = item.querySelectorAll('.mailing-item');
    const mailingPopupInput = item.querySelector('.order-email');
    const ctlgForm1 = document.querySelector('.ctlg-form1');
    const ctlgForm2 = document.querySelector('.ctlg-form2');
    const bookForm1 = document.querySelector('.book-form1');
    const bookForm2 = document.querySelector('.book-form2');
    mailingRadio.forEach((item1) => {
      item1.addEventListener('click', (e) => {
        mailingRadio.forEach((item3) => {
          item3.classList.remove('mailing-item--active');
          e.currentTarget.classList.add('mailing-item--active');
        });
      });
    });
    if (item.contains(mailingPopupButtonEmail)) {
      mailingPopupButton.forEach((item2) => {
        item2.addEventListener('click', () => {
          mailingPopupInput.classList.remove('order-email--active');
          bookForm2.style.display = 'none';
          bookForm1.style.display = 'flex';
          ctlgForm2.style.display = 'none';
          ctlgForm1.style.display = 'flex';
        });
      });
      mailingPopupButtonEmail.addEventListener('click', () => {
        mailingPopupInput.classList.add('order-email--active');
        bookForm2.style.display = 'flex';
        bookForm1.style.display = 'none';
        ctlgForm2.style.display = 'flex';
        ctlgForm1.style.display = 'none';
      });
    }
  });
};

mailingPopupChange();

const validator1 = new Validator({
  form: document.getElementById('ctlg-form1'),
  rules: {
    name: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    phone: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator1.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator1.getValues();
  const errorMessageName = document.querySelector('.input-error1--name');
  const errorMessagePhone = document.querySelector('.input-error1--phone');
  const pages = document.querySelector('.popup-catalog-form-two');
  if (validator1?.errorMessages?.name) {
    errorMessageName.innerHTML = validator1?.errorMessages?.name;
    errorMessageName.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageName.innerHTML = '';
    errorMessageName.previousElementSibling.classList.remove('input--error');
  }
  if (validator1?.errorMessages?.phone) {
    errorMessagePhone.innerHTML = validator1?.errorMessages?.phone;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (values.name && values.phone) {
    pages.classList.remove('ctlg-slide--active');
    pages.nextElementSibling.classList.add('ctlg-slide--active');
  }
};

validator1.form.onreset = (evn) => {
  const data = validator1.reset();
  console.log(data);
};

const validator2 = new Validator({
  form: document.getElementById('ctlg-form2'),
  rules: {
    email2: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    name2: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    phone2: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator2.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator2.getValues();
  const errorMessageName = document.querySelector('.input-error2--name');
  const errorMessagePhone = document.querySelector('.input-error2--phone');
  const errorMessageEmail = document.querySelector('.input-error2--email');
  const pages = document.querySelector('.popup-catalog-form-two');
  if (validator2?.errorMessages?.name2) {
    errorMessageName.innerHTML = validator2?.errorMessages?.name2;
    errorMessageName.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageName.innerHTML = '';
    errorMessageName.previousElementSibling.classList.remove('input--error');
  }
  if (validator2?.errorMessages?.phone2) {
    errorMessagePhone.innerHTML = validator2?.errorMessages?.phone2;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (validator2?.errorMessages?.email2) {
    errorMessageEmail.innerHTML = validator2?.errorMessages?.email2;
    errorMessageEmail.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageEmail.innerHTML = '';
    errorMessageEmail.previousElementSibling.classList.remove('input--error');
  }
  if (values.name2 && values.phone2 && values.email2) {
    pages.classList.remove('ctlg-slide--active');
    pages.nextElementSibling.classList.add('ctlg-slide--active');
  }
};

validator2.form.onreset = (evn) => {
  const data = validator2.reset();
  console.log(data);
};

const validator3 = new Validator({
  form: document.getElementById('book-form1'),
  rules: {
    name3: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    phone3: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator3.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator3.getValues();
  const errorMessageName = document.querySelector('.input-error3--name');
  const errorMessagePhone = document.querySelector('.input-error3--phone');
  const book = document.querySelector('.popup-order');
  const orderRightOne = book.querySelector('.order-header--one');
  const orderRightTwo = book.querySelector('.order-header--two');
  const pages = document.querySelector('.popup-book-form-two');
  if (validator3?.errorMessages?.name3) {
    errorMessageName.innerHTML = validator3?.errorMessages?.name3;
    errorMessageName.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageName.innerHTML = '';
    errorMessageName.previousElementSibling.classList.remove('input--error');
  }
  if (validator3?.errorMessages?.phone3) {
    errorMessagePhone.innerHTML = validator3?.errorMessages?.phone3;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (values.name3 && values.phone3) {
    pages.classList.remove('book-slide--active');
    pages.nextElementSibling.classList.add('book-slide--active');
    orderRightTwo.classList.remove('order-header--active');
    orderRightTwo.nextElementSibling.classList.add('order-header--active');
  }
};

validator3.form.onreset = (evn) => {
  const data = validator3.reset();
  console.log(data);
};

const validator4 = new Validator({
  form: document.getElementById('book-form2'),
  rules: {
    email4: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    name4: {
      validate: (val) => (val ? '' : 'Ошибочка вышла'),
    },
    phone4: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator4.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator4.getValues();
  const errorMessageName = document.querySelector('.input-error4--name');
  const errorMessagePhone = document.querySelector('.input-error4--phone');
  const errorMessageEmail = document.querySelector('.input-error4--email');
  const book = document.querySelector('.popup-order');
  const orderRightOne = book.querySelector('.order-header--one');
  const orderRightTwo = book.querySelector('.order-header--two');
  const pages = document.querySelector('.popup-book-form-two');
  if (validator4?.errorMessages?.name4) {
    errorMessageName.innerHTML = validator4?.errorMessages?.name4;
    errorMessageName.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageName.innerHTML = '';
    errorMessageName.previousElementSibling.classList.remove('input--error');
  }
  if (validator4?.errorMessages?.phone4) {
    errorMessagePhone.innerHTML = validator4?.errorMessages?.phone4;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (validator4?.errorMessages?.email4) {
    errorMessageEmail.innerHTML = validator4?.errorMessages?.email4;
    errorMessageEmail.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageEmail.innerHTML = '';
    errorMessageEmail.previousElementSibling.classList.remove('input--error');
  }
  if (values.name4 && values.phone4 && values.email4) {
    pages.classList.remove('book-slide--active');
    pages.nextElementSibling.classList.add('book-slide--active');
    orderRightTwo.classList.remove('order-header--active');
    orderRightTwo.nextElementSibling.classList.add('order-header--active');
  }
};

validator4.form.onreset = (evn) => {
  const data = validator4.reset();
  console.log(data);
};

const ctlgChange = () => {
  const ctgl = document.querySelector('.popup-catalog');
  const ctglChangeOne = ctgl.querySelector('.ctlg-slide--one');
  const ctglChangeOneButton = ctglChangeOne.querySelector('.button');
  const ctglChangeTwo = ctgl.querySelector('.ctlg-slide--two');
  ctglChangeOneButton.addEventListener('click', () => {
    ctglChangeOne.classList.remove('ctlg-slide--active');
    ctglChangeTwo.classList.add('ctlg-slide--active');
  });
};

ctlgChange();

const callbackChange = () => {
  const callback = document.querySelector('.popup-callback');
  const callbackChangeOne = callback.querySelector('.callback-slide--one');
  const callbackChangeOneButton = callback.querySelector('.button');
  const callbackChangeTwo = callback.querySelector('.callback-slide--two');
  const callbackChangeTime = callback.querySelector('.callback-tabs__button--time');
  const callbackChangeNow = callback.querySelector('.callback-tabs__button--now');
  const callbackFormOne = callback.querySelector('.callback-form1');
  const callbackFormTwo = callback.querySelector('.callback-form2');

  callbackChangeTime.addEventListener('click', () => {
    callbackFormOne.style.display = 'none';
    callbackFormTwo.style.display = 'block';
  });

  callbackChangeNow.addEventListener('click', () => {
    callbackFormOne.style.display = 'block';
    callbackFormTwo.style.display = 'none';
  });
};

callbackChange();

const validator5 = new Validator({
  form: document.getElementById('callback-form1'),
  rules: {
    phone5: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator5.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator5.getValues();
  const errorMessagePhone = document.querySelector('.input-error5--phone');
  const callback = document.querySelector('.popup-callback');
  const callbackChangeOne = callback.querySelector('.callback-slide--one');
  const callbackChangeOneButton = callback.querySelector('.button');
  const callbackChangeTwo = callback.querySelector('.callback-slide--two');

  if (validator5?.errorMessages?.phone5) {
    errorMessagePhone.innerHTML = validator5?.errorMessages?.phone5;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (values.phone5) {
    callbackChangeOne.classList.remove('callback-slide--active');
    callbackChangeOne.nextElementSibling.classList.add('callback-slide--active');
  }
};

validator5.form.onreset = (evn) => {
  const data = validator5.reset();
  console.log(data);
};

const validator6 = new Validator({
  form: document.getElementById('callback-form2'),
  rules: {
    phone6: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
    info6: {
      validate: (val) => (!val ? 'Ошибочка вышла' : ''),
    },
  },
});

validator6.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator6.getValues();
  const errorMessagePhone = document.querySelector('.input-error6--phone');
  const errorMessageInfo = document.querySelector('.input-error6--info');
  const callback = document.querySelector('.popup-callback');
  const callbackChangeOne = callback.querySelector('.callback-slide--one');
  const callbackChangeOneButton = callback.querySelector('.button');
  const callbackChangeTwo = callback.querySelector('.callback-slide--two');

  if (validator6?.errorMessages?.phone6) {
    errorMessagePhone.innerHTML = validator6?.errorMessages?.phone6;
    errorMessagePhone.previousElementSibling.classList.add('input--error');
  } else {
    errorMessagePhone.innerHTML = '';
    errorMessagePhone.previousElementSibling.classList.remove('input--error');
  }
  if (validator6?.errorMessages?.info6) {
    errorMessageInfo.innerHTML = validator6?.errorMessages?.info6;
    errorMessageInfo.previousElementSibling.classList.add('input--error');
  } else {
    errorMessageInfo.innerHTML = '';
    errorMessageInfo.previousElementSibling.classList.remove('input--error');
  }
  if (values.phone6 && values.info6) {
    callbackChangeOne.classList.remove('callback-slide--active');
    callbackChangeOne.nextElementSibling.classList.add('callback-slide--active');
  }
};

validator5.form.onreset = (evn) => {
  const data = validator5.reset();
  console.log(data);
};

const orderChange = () => {
  const book = document.querySelector('.popup-order');
  const bookChangeOne = book.querySelector('.book-slide--one');
  const bookChangeOneButton = bookChangeOne.querySelector('.button');
  const bookChangeTwo = book.querySelector('.book-slide--two');
  const orderRightOne = book.querySelector('.order-header--one');
  const orderRightTwo = book.querySelector('.order-header--two');
  bookChangeOneButton.addEventListener('click', () => {
    bookChangeOne.classList.remove('book-slide--active');
    bookChangeTwo.classList.add('book-slide--active');
    orderRightOne.classList.remove('order-header--active');
    orderRightOne.nextElementSibling.classList.add('order-header--active');
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

  buttonLeft.addEventListener('click', (e) => {
    e.stopPropagation();
    windowLeft.classList.toggle('window--active');

    windowLeftClose.addEventListener('click', () => {
      windowLeft.classList.remove('window--active');
    });

    window.addEventListener('click', () => {
      windowLeft.classList.remove('window--active');
    });
  });

  buttonCenter.addEventListener('click', (e) => {
    e.stopPropagation();
    windowCenter.classList.toggle('window--active');

    windowCenterClose.addEventListener('click', () => {
      windowCenter.classList.remove('window--active');
    });

    window.addEventListener('click', () => {
      windowCenter.classList.remove('window--active');
    });
  });

  buttonRight.addEventListener('click', (e) => {
    e.stopPropagation(e);
    windowRight.classList.toggle('window--active');

    windowRightClose.addEventListener('click', () => {
      windowRight.classList.remove('window--active');
    });

    window.addEventListener('click', () => {
      windowRight.classList.remove('window--active');
    });
  });
};

minPopup();

(function () {
  let counter = document.querySelectorAll('.number');
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener('scroll', function () {
    if (limit == counter.length) {
      return;
    }

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === '0') {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 60);
      }
    }
  });
})();

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
