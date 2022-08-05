class commands {
    
    go(){
        cy.visit('/')
    }

    menu(login){
        cy.get('input[name= "user-name"]').type(login.name)
        cy.get('input[name= "password"]').type(login.password)
        cy.get('input[name= "login-button"]').click()

        cy.get('.title').should('have.text', 'Products')
    }

    pageFilter(){
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        cy.get('[data-test="product_sort_container"]').select('Price (high to low)')
        cy.get('[data-test="product_sort_container"]').select('Name (A to Z)')
    }

    pageAddToCard(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    }
    
    pageRemoveToCard(){
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    }

    pageExit(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }

}

export default new commands
