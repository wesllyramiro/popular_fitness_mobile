import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'

const Router = createAppContainer(
    createSwitchNavigator({
        Home
    }) 
)

export default Router