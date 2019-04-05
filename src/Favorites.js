import React from 'react';

const favorites = (props) => {
    const showFavorites = props.favorites.length ? (
        props.favorites.map(favorite => {
            return (
                <div>
                    <h1>{favorite.content}</h1>
                </div>
            )
        })
    ) : (
            <p>No favorites selected</p>
        )

    return (
        <div>
            { showFavorites }
        </div>
    )
}

export default favorites;