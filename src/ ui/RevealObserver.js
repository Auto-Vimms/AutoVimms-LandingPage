export class RevealObserver {
  /**
   * @param {string} selector - CSS selector for elements to observe.
   * @param {number} threshold - Intersection threshold (0 to 1).
   */
  constructor(selector = '.reveal', threshold = 0.14) {
    this._elements = document.querySelectorAll(selector);
    this._threshold = threshold;
  }

  /**
   * Starts observing all matching elements and adds the 'show' class on intersection.
   */
  init() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      }),
      { threshold: this._threshold }
    );

    this._elements.forEach((el) => observer.observe(el));
  }
}