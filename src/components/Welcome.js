import React from 'react'

export default function Welcome() {
    return (
        <div>
            <h1>Welcome to <i>The Shop</i></h1>
            <h2>This is your one stop shop for Shopify applications!</h2>
            <p>Welcome! Thank you for reviewing my Shopify application for the Summer Internships!</p>
            <p>This application is meant to cover both the front-end and back-end summer internship challenges.</p>
            <p>If you navigate to the link titled "The Shoppies", you will find the front-end code challenge,
            and if you navigate to the link titled "Shop IMG", you will find the back-end code challenge. 
            I decided to put them all on one app as I would like to be considered for both internships if possible.
            I figured this was the easiest way to do it, rather than submitting two applications.</p>
            <p>The front-end challenge is relatively straightforward, just type in a movie to search, and you can add it to your nominations.
            The nominations are stored in local storage, so if you refres the page, they are saved! This does not use the backend that was
            created for the back-end challenge</p>
            <p>
            <a href='https://github.com/lucassherwin/the-shoppies-2'>Here is a link to the front-end</a>
            <a href='https://github.com/lucassherwin/shoppies-images'>Here is a link to the back-end!</a>
            </p>
        </div>
    )
}
