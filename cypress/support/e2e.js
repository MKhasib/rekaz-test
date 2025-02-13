import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // For unhandled Google anayltics rejections
  return false;
});