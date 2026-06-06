import { CONFIG } from '../../config/config.js';

export class EmailDelivery {
  static send(data) {
    const subject = encodeURIComponent('Solicitação de orçamento - AutoVimms');
    const body = encodeURIComponent(
      `Olá, AutoVimms! Gostaria de solicitar um orçamento.\n\n` +
      `Nome: ${data.nome}\n` +
      `Empresa: ${data.empresa}\n` +
      `WhatsApp: ${data.telefone}\n` +
      `Email: ${data.email}\n` +
      `Serviço: ${data.servico}\n` +
      `Mensagem: ${data.mensagem}`
    );

    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  }
}
