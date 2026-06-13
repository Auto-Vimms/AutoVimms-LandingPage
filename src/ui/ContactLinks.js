import { CONFIG } from '../config/config.js';

export class ContactLinks {
  /**
   * Populates all contact links (WhatsApp, Instagram, Email) using CONFIG.
   * Elements are matched by ID; missing elements are silently skipped.
   */
  static init() {
    const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}`;
    const instagramUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
    const emailUrl = `mailto:${CONFIG.email}`;

    ContactLinks._setLink('whatsapp-link', whatsappUrl, CONFIG.whatsappDisplay);
    ContactLinks._setLink('whatsapp-footer', whatsappUrl);

    ContactLinks._setLink('instagram-link', instagramUrl, `@${CONFIG.instagram}`);
    ContactLinks._setLink('instagram-footer', instagramUrl);

    ContactLinks._setLink('email-link', emailUrl, CONFIG.email);
    ContactLinks._setLink('email-footer', emailUrl);
  }

  /**
   * Sets the href and (optionally) the text content of an element by ID.
   * @param {string} id
   * @param {string} href
   * @param {string} [text]
   */
  static _setLink(id, href, text) {
    const element = document.getElementById(id);
    if (!element) return;

    element.href = href;
    if (text !== undefined) element.textContent = text;
  }
}