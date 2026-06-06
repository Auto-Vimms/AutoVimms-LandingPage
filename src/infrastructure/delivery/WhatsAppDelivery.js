import { CONFIG } from '../../config/config.js';

export class WhatsAppDelivery {
  /**
   * Builds a WhatsApp message and opens it in a new tab.
   * @param {{ nome: string, empresa: string, telefone: string, email: string, servico: string, mensagem: string }} data
   */
  static send(data) {
    const message = WhatsAppDelivery._buildMessage(data);
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  }

  /**
   * Encodes the form data into a WhatsApp-ready message string.
   * @param {{ nome: string, empresa: string, telefone: string, email: string, servico: string, mensagem: string }} data
   * @returns {string}
   */
  static _buildMessage(data) {
    return (
      `Olá, AutoVimms! Gostaria de solicitar um orçamento.%0A%0A` +
      `Nome: ${encodeURIComponent(data.nome)}%0A` +
      `Empresa: ${encodeURIComponent(data.empresa)}%0A` +
      `WhatsApp: ${encodeURIComponent(data.telefone)}%0A` +
      `Email: ${encodeURIComponent(data.email)}%0A` +
      `Serviço: ${encodeURIComponent(data.servico)}%0A` +
      `Mensagem: ${encodeURIComponent(data.mensagem)}`
    );
  }
}