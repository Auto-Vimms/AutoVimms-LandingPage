import { CONFIG } from '../../config/config.js';
import { WhatsAppDelivery } from '../../infrastructure/delivery/WhatsAppDelivery.js';
import { EmailDelivery } from '../../infrastructure/delivery/EmailDelivery.js';

const deliveryMethods = {
  whatsapp: WhatsAppDelivery,
  email: EmailDelivery,
};

export class BudgetService {
  /**
   * Sends the budget request using the configured delivery method.
   * @param {{ nome: string, empresa: string, telefone: string, email: string, servico: string, mensagem: string }} data
   */
  static send(data) {
    const delivery = deliveryMethods[CONFIG.submitMethod];

    if (!delivery) {
      console.error(`[BudgetService] Unknown submitMethod: "${CONFIG.submitMethod}"`);
      return;
    }

    delivery.send(data);
  }
}