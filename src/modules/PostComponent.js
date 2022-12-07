import './PostComponent.css';
import React, { useState, useEffect, useRef} from 'react';

function PostComponent() {

    const ref = useRef(null);

    
    const site = window.location.href
    const newSite = site.substring(0, site.length - 5);
    console.log(newSite)
    const port = 5500;
    const localUrl = `${newSite}${port}/api/postRequest`;

    async function fetchPostRequest(data) {
        await fetch(localUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            );
    };

    function handlePost() {
        console.log(ref.current.value);
        fetchPostRequest(ref.current.value)
    }


    return (
        <div className="post-component"> 
            <p>Send a Post Request</p>            
            <textarea   placeholder='Some data...'
                        ref={ref}
            
            ></textarea>
            <button onClick={handlePost}>Send Post Request</button>
        </div>

    )
}

export default PostComponent