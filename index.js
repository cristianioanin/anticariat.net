class SlideMenu {
  constructor() {
    this.leftSideMenu = document.querySelector('#left-pane');
    this.closeButton = document.querySelector('.side-menu__close');
  }

  open() {
    this.leftSideMenu.style.width = '28rem';
    setTimeout(() => {
      this.closeButton.style.position = 'fixed';
    }, 400);
  }

  close() {
    this.leftSideMenu.style.width = '0';
    this.closeButton.style.position = 'absolute';
  }
}

const initializeSlideMenu = function () {
  window.slideMenu = new SlideMenu();
}

document.addEventListener('DOMContentLoaded', initializeSlideMenu);
