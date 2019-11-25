import React from 'react';

import {
    Container
} from './styles'

export default function ContainerImage({ image , children }){
    return (
        <Container source={image}>
            {children}
        </Container>
    )
}