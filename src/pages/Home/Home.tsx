import React from 'react'
import './Home.css';
import { NavLink } from "react-router-dom";
import { projects } from './data';

const Home = () => {
  return (
    <div className="home-container">
        <h1>List of projects</h1>
        <ul>
          {projects.map(item => (
            <li key={item.name}>
              <NavLink to={item.route}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home