import { BudgetForm } from './domain/budget/BudgetForm.js';
import { BudgetService } from './domain/budget/BudgetService.js';
import { RevealObserver } from './ui/RevealObserver.js';
import { Toast } from './ui/Toast.js';
import { ContactLinks } from './ui/ContactLinks.js';

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Scroll reveal animation ──
new RevealObserver('.reveal').init();

// ── Contact links (WhatsApp, Instagram, Email) ──
ContactLinks.init();

// ── Budget form submission ──
document.getElementById('budgetForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const data = BudgetForm.collect();

  if (!BudgetForm.isValid(data)) return;

  BudgetService.send(data);

  new Toast('formToast').show();
});