import { BudgetForm } from './domain/budget/BudgetForm.js';
import { BudgetService } from './domain/budget/BudgetService.js';
import { RevealObserver } from './ui/RevealObserver.js';
import { Toast } from './ui/Toast.js';

document.getElementById('year').textContent = new Date().getFullYear();

new RevealObserver().init();

document.getElementById('budgetForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const data = BudgetForm.collect();

  if (!BudgetForm.isValid(data)) {
    event.currentTarget.reportValidity();
    return;
  }

  new Toast('formToast').show();
  BudgetService.send(data);
});
