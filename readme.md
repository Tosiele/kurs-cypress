# Kurs cypress - automatyzacja testów
## Moduł 1 - *lokatory*
### Wyszukiwanie po tekście
- jeżeli mamy element - <input id="user_email_login" class="user_email_ajax"></input> to:
- cy.get - znajduje element
- cy.get('**#**user_email_login') - wyszukiwanie elementu po id
    - cy.get('input[id="user_email_login"]') - ten sam efekt w dłuższy sposób
- cy.get('**.**user_email_ajax') - wyszukiwanie elementu po class
    - cy.get('input[class="user_email_ajax"]') - ten sam efekt w dłuższy sposób
- cy.get('input') - wyszukiwanie elementu po tagu
- cy.get('span').contains('log_in').click(**{ force: true }**) - przechodzenie przez akcję nie zależnie od spełnienia warunków dla użytkownika (np odpowiedni ruch myszą)