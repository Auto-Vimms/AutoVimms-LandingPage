export class Toast {
  /**
   * @param {string} elementId - The ID of the toast element in the DOM.
   */
  constructor(elementId) {
    this._element = document.getElementById(elementId);
  }

  /**
   * Shows the toast notification.
   */
  show() {
    const toast = new bootstrap.Toast(this._element);
    toast.show();
  }
}