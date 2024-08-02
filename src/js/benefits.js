export function scrollBnf() {
    document.querySelectorAll('.bnf-button').forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSelector = this.getAttribute('href');
        const targetElement = document.querySelector(targetSelector);
          targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }