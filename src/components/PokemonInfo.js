import React, {useState,useEffect} from 'react'

import {
    Container,
    Card,
    List,
    Name,
    Head,
    Row,
    Col,
    SubCard,
    Id,
    Info,
    SubTitle,
    Evolutions,
    Evolution,
    Colors,
    Color,
    Select,
    Option,
    BoxTypes,
    BasicInfo,
    ButtonTop,
    Stat,
    StatLabel,
    StatBar,
  } from './styles';
import imageTest from '../assets/pikachu.jpg'

const pad = (num, size) => {
    const s = `000${num}`;
    return s.substr(s.length - size);
  };

function PokemonInfo(){
    var   totalStats = 0;
    const [pokemon,setPokemon]=useState({
        id:21,
        name:'Pikachu',
        img:{imageTest},
        color:'dark',
        types:'Fire,Grass',
        habitat:'Desert',
        weight:'1.34',
        height:'135',
        stats:[]


    })
    return (
        <Card
                key={`pokemon-${pokemon.name}`}
                id={`pokemon-${pokemon.name}`}
              >
                <img src={imageTest} alt="daa"
                        style={{
                            'width': '350px',
                            'margin': '0 auto',
                            'z-index':'2',
                            'margin-top': '-70px'                    
                        }}
                     ></img>
       
                <SubCard className={`bg-${pokemon.color}`}>
                  <Id>#{pad(pokemon.id, 3)}</Id>
                  <BoxTypes>
                    {pokemon.types.split(',').map(t => (
                      <Info key={t}>{t}</Info>
                    ))}
                  </BoxTypes>
                  <Name>
                    <h2>{pokemon.name}</h2>
                    {pokemon.habitat && (
                      <BasicInfo>
                        <b>Habitat:</b>
                        {pokemon.habitat}
                      </BasicInfo>
                    )}
                  </Name>

                  <BasicInfo>
                    <b>Weight:</b>
                    {pokemon.weight}
                  </BasicInfo>
                  <BasicInfo>
                    <b>Height:</b>
                    {pokemon.height}
                  </BasicInfo>

                  {pokemon.stats
                    .filter(
                      o =>
                        o.stat.name !== 'special-defense' &&
                        o.stat.name !== 'special-attack'
                    )
                    .map(s => {
                      totalStats += s.base_stat;
                      return (
                        <Stat key={s.stat.name}>
                          <StatLabel>{s.stat.name}</StatLabel>
                          <StatBar
                            base_stat={s.base_stat}
                            title={s.base_stat}
                          />
                        </Stat>
                      );
                    })}

                  <Stat>
                    <StatLabel>Total</StatLabel>
                    <StatBar base_stat={totalStats} title={totalStats} />
                  </Stat>

                 
                </SubCard>
                
              </Card>
    )
}

export default PokemonInfo;