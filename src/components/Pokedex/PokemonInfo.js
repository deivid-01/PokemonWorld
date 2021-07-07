import React, {useState,useEffect} from 'react'

import {
    Card,
    Name,
    SubCard,
    Id,
    Info,
    BoxTypes,
    BasicInfo,
    Stat,
    StatLabel,
    StatBar,
  } from '../styles';

const pad = (num, size) => {
    const s = `000${num}`;
    return s.substr(s.length - size);
  };


  function PokemonInfo({pokemon}){
   
    var totalStats=0
    return (
        <Card
                key={`pokemon-${pokemon.name}`}
                id={`pokemon-${pokemon.name}`}
              >
                <img  src={pokemon.sprites.front_default} alt={pokemon.name}
                        style={{
                            'width': '200px',
                            'margin': '0 auto',
                            'z-index':'2',
                            'margin-top': '0px'                    
                        }}
                     ></img>
       
                <SubCard className={`bg-dark`}>
                  <br></br>
                  <br></br>
                  <Id>#{pad(pokemon.id, 3)}</Id>
                  <BoxTypes>
                    {pokemon.types.map(item => (
                      <Info key={item.type.name}>{item.type.name}</Info>
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