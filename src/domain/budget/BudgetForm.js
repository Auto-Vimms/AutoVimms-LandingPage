export class BudgetForm {
  /**
   * Reads and returns the form field values.
   * @returns {{ nome: string, empresa: string, telefone: string, email: string, servico: string, mensagem: string }}
   */
  static collect() {
    return {
      nome:     document.getElementById('nome').value.trim(),
      empresa:  document.getElementById('empresa').value.trim(),
      telefone: document.getElementById('telefone').value.trim(),
      email:    document.getElementById('email').value.trim(),
      servico:  document.getElementById('servico').value,
      mensagem: document.getElementById('mensagem').value.trim(),
    };
  }

  /**
   * Validates that all required fields are filled.
   * @param {{ nome: string, empresa: string, telefone: string, email: string, servico: string, mensagem: string }} data
   * @returns {boolean}
   */
  static isValid(data) {
    return Object.values(data).every((value) => value !== '' && value !== null);
  }
}