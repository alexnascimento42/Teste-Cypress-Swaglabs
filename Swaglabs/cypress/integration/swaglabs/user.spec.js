/// <reference types="Cypress"/>

import command from '../../pages/commands.spec'
import commandFactory from '../../factories/commandFactory.spec'

describe('Testes site de compras', () => {



    it('Log into', function() {

        var used = commandFactory.user()

        command.go()
        command.menu(used)
        command.pageFilter()
        command.pageAddToCard()
        command.pageRemoveToCard()
        command.pageExit()

    })

})