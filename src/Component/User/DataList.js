import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function DataList() {
    const navigate = useNavigate()

    const [picture, setPicture] = useState('')


    const displayTitle = localStorage.getItem('title')
    const displayColor = localStorage.getItem('color')
    const displayFuel = localStorage.getItem('fuel')
    const displayCompany = localStorage.getItem('company')

    useEffect(() => {
        const storedImage = localStorage.getItem('image')
        if (storedImage) {
            setPicture(storedImage)
        }
    }, [])
    // console.log("IMAGE",picture)
    const handleDelete = () => {
        localStorage.clear()
    }

    const handleEdit = () => {

        navigate('/edit')
    }

    return (<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', width: "100%", }}>
        
        <div style={{ display: 'flex', justifyContent: "space-around", width: "60%", boxShadow: '2px 2px 2px 2px grey' }} >
            {picture ? (

                <img src={picture} style={{ width: 200, borderRadius: 30 }} />
            ) : <img src="https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg" style={{ width: 200, borderRadius: 30 }} />}

            <div style={{ background: 'white', width: '70%', padding: 5, borderRadius: 30, }}>
                {picture ?(
                    <div>
                <p>{displayTitle}</p>
                <p>{displayFuel}</p>
                <p>{displayCompany}</p>
                <p>{displayColor}</p>
                <button style={{ padding: 10, border: '2px solid black', borderRadius: 10, background: 'darkgray', color: 'white', cursor: 'pointer' }} onClick={handleDelete} > Delete</button>
                <button style={{ padding: 10, border: '2px solid black', borderRadius: 10, background: 'darkgray', color: 'white', cursor: 'pointer', marginLeft: 10 }} onClick={handleEdit} > Edit</button>
</div>
                ):<img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg" style={{ width: '80%', borderRadius: 30 }} />}
             <h5>Add Data from <button onClick={()=>navigate('/home/add')} style={{cursor:'pointer',background:'red'}} >here</button> </h5>  
            </div>
        </div>
    </div>)
}