export class RevealObserver {
  constructor(selector = '.reveal', threshold = 0.14) {
    this.elements = document.querySelectorAll(selector);
    this.threshold = threshold;
  }

  init() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      }),
      { threshold: this.threshold }
    );

    this.elements.forEach((element) => observer.observe(element));
  }
}
