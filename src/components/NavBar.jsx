import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { FaBars, FaTimes } from "react-icons/fa"
const NavBar = () => {
    const[clicked,setClicked] =useState(false)
    const[color,setColor] =useState(false);
    const handleColorChange=()=>{
        if(window.scrollY >= 1){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
window.addEventListener("scroll",handleColorChange)

    const handleClick=()=>setClicked(!clicked);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to ="/">
        <h1>My portfolio</h1>
        </Link>
        <div className='hamb' onClick={handleClick}>
            {clicked ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>) }
            
           





        </div>
        <ul className= {clicked ? "nav-menu active":'nav-menu'}>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/projects">Projects</Link>
            </li>
            <li>
                <Link to = "/experience">Experience</Link>
            </li>
            
            
            {/* <li>
                <Link to = "/skill">Skills</Link>
            </li> */}
            <li>
                <Link to = "/contacts">Contacts</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default NavBar