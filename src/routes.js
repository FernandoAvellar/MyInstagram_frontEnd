import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import New from './pages/New'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Feed} />
            <Route path='/new' component={New} />
        </Switch>
    )
}

export default Routes

/* Switch garante que apenas uma das rotas será acessada por vez.
A palavra 'exact' garante que só se a URL for exata e não apenas
contiver o 'path' buscado essa rota será chamada. */
