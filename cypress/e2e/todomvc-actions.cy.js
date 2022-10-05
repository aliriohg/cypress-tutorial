/// <reference types = "cypress"/>

it('should be able to add a new todo to the list', ()=> {
    cy.visit('http://todomvc-app-for-testing.surge.sh');

    cy.get('.new-todo').type('Clean room{enter}');
    
    cy.get('label').should('have.text','Clean room');
    cy.get('.toggle').should('not.be.checked');
    
    cy.get('.toggle').click();
    cy.get('label').should('have.css','text-decoration-line','line-through');
    
    cy.contains('Clear').click();
    
    cy.get('.todo-list').should('not.have.descendants','li');
})

describe('todo actions',()=>{
    it('should add a new todo to the list', ()=> {
        cy.visit('http://todomvc-app-for-testing.surge.sh');
    
        cy.get('.new-todo').type('Clean room{enter}');
        
        cy.get('label').should('have.text','Clean room');
        cy.get('.toggle').should('not.be.checked');
        
    })
    
    
    
    it('should mark a todo as completed', ()=> {
        cy.get('.toggle').click();
        cy.get('label').should('have.css','text-decoration-line','line-through');
    })
    
    
    
    it('should clear completed todos', ()=> {
        cy.contains('Clear').click();
        
        cy.get('.todo-list').should('not.have.descendants','li');
    })
});


it('should be able to add a new todo to the list with timeout', ()=> {
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000');
    cy.get('.new-todo',{timeout:6000}).type('Clean room{enter}');
})