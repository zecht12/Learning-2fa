import React from 'react'

const HomePaging = () => {
    const apiUrl = 'https://api.waifu.im/tags';

    fetch(apiUrl)
    .then(response => {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error('Request failed with status code: ' + response.status);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('An error occurred:', error.message);
    });

    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 pt-28">
        </div>
    )
}

export default HomePaging