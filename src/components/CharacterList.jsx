import React, { useEffect, useState } from 'react';

function CharacterList() {
    const [character, setCharacter] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch data for the default character when the component mounts
    useEffect(() => {
        const fetchDefaultCharacter = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/?name=Jerry%20Smith');
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    setCharacter(data.results[0]);
                } else {
                    setError('Character not found');
                }
            } catch (err) {
                setError('Error fetching character');
                console.error('Error fetching character', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDefaultCharacter();
    }, []);

    // Fetch data for the character based on the search term
    // Prevent default from submission behavior
    // If the search term is empty, do nothing
    const handleSearchSubmit = async (e) => {
        e.preventDefault(); 

        if (!searchTerm) return; 

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setCharacter(data.results[0]);
            } else {
                setError('Character not found');
            }
        } catch (err) {
            setError('Error fetching character');
            console.error('Error fetching character', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Character Information</h2>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search characters by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {character && (
                <div>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} style={{ width: '100px', borderRadius: '8px' }} />
                    <p>{character.species} - {character.status}</p>
                </div>
            )}
        </div>
    );
}

export default CharacterList;
