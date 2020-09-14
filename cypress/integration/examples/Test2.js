describe('My Second Test Suite', () => {
  it('My Second Test Case', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    
    cy.get('input.search-keyword').type('ca')
    
    cy.wait(2000)

    cy.get('.products').find('.product').as('productList')
    
    cy.get('@productList').each(($el) => {
      const productName = $el.find('h4.product-name').text()
      if (productName.includes('Cashews')) {
        cy.get($el).find('button').click()
      }
    })

    cy.get('.cart-icon > img').click()
    
    cy.contains('PROCEED TO CHECKOUT').click()

    cy.contains('Place Order').click()
  })
})