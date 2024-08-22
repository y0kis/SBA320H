import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const respone = await axios.get('https://rickandmortyapi.com/api/character');
                setCharacters(respone.data.results);
            } catch (error) {
                console.error('Error fetching characters', error);
            }
        }
        fetchCharacters();
    }, []);

    return (
        <div>
            <h2>Character List</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} style={{ width: '100px' }} />
                        <p>{character.species} - {character.status}</p>
                    </li>
                ))}
            </ul>
        </div >
    );

};



export default CharacterList;