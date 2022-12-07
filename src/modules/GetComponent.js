import './GetComponent.css';
import React, { useState, useEffect, useRef} from 'react';

function PostComponent() {

    const ref = useRef(null);

    
    const site = window.location.href
    const newSite = site.substring(0, site.length - 5);
    console.log(newSite)
    const port = 5500;
    const localUrl = `${newSite}${port}/api/getRequest`;
    const errorUrl = `${newSite}${port}/api/getErrorRequest`;

    async function fetchGetRequest() {
        await fetch(localUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }
            );
    };

    async function fetchErrorRequest() {
        await fetch(errorUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                console.log("error triggered");
            }
            );
    };

    return (
        <div className="get-component"> 
            <p>Send a Get Request</p>            
            <button onClick={fetchGetRequest}>Send Get Request</button>
            <button onClick={fetchErrorRequest}>Get Error Request</button>
        </div>

    )
}

export default PostComponent