import React                     from 'react';
import {ParticleContainerStyled} from './Particle.styles';
import Particles                 from 'react-particles-js';
import {particleConfig}          from './particle-config.const';

export default function ParticleContainer() {
    return (
        <ParticleContainerStyled>
            <Particles
                params={particleConfig}
                style={{
                    width: '100%',
                    height: '100%'
                }}/>
        </ParticleContainerStyled>
    );
}

