describe('DailyTask', () => {
  it('Should display Daily Task page', () => {
    cy.visit('http://localhost:3000/dailyTasks');
    cy.get('.header').contains('Daily Activities');
  });
  it('Should fill out the form and Add Reading as Activty', () => {
    cy.get('[name="from"]').select('08:00');
    cy.get('[name="to"]').select('09:00');
    cy.get('[name="name"]').type('Read');
    cy.get('.button').click();
  });
  it('Should fill out the form and Add Having Breakfast Activty', () => {
    cy.get('[name="from"]').select('10:00');
    cy.get('[name="to"]').select('11:00');
    cy.get('[name="name"]').type('Have Breakfast');
    cy.get('.button').click();
  });
  it('Should find Read Activity in the table', () => {
    cy.get('table').contains('td', 'Read');
  });
  it('Should find Have Breakfast Activity in the table', () => {
    cy.get('table').contains('td', 'Have Breakfast');
  });
});
