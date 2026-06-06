export class Toast {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  show() {
    if (!this.element || !window.bootstrap) return;

    const toast = new bootstrap.Toast(this.element);
    toast.show();
  }
}
