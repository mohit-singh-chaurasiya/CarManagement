import React from 'react'

export default function NewsItem ({ title,description, src, url ,img})  {
    // console.log("Fdsfd",src)
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-4 px-3 py-2" style={{ maxWidth: "345px" }}>
            <img src={src} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):""}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
} 
