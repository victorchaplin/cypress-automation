describe('My First Test Suite', () => {
  it('My First Test Case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    
    cy.get('input.search-keyword').type('ca')
    
    cy.wait(2000)

    cy.get('.products').find('.product').as('productList')
    
    cy.get('@productList').should('have.length', 4)
    
    cy.get('@productList').eq(1).contains('ADD TO CART').click()
    
    cy.get('@productList').each(($el) => {
      const productName = $el.find('h4.product-name').text()
      if (productName.includes('Cashews')) {
        cy.get($el).find('button').click()
      }
    })

    cy.get('.brand').then((logo) => {
      cy.log(logo.text())
    })

    cy.get('.brand').should('have.text', 'GREENKART')
  })
})