import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import CreateNutricionista from './pages/CreateNutricionista'
import CreatePersonal from './pages/CreatePersonal'
import ProfessionalOption from './pages/ProfessionalOption'

const Router = createAppContainer(
    createSwitchNavigator({
        Home,
        CreateUser,
        ProfessionalOption,
        CreateNutricionista,
        CreatePersonal
    }) 
)

export default Router