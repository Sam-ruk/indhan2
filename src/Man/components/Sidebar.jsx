import {Navigation} from 'react-minimal-side-navigation';
import {FaRegSun} from 'react-icons/fa';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
    return (
    <div className="d-flex flex-column flex-shrink-0 p-3 position-lg-fixed position-md-fixed" style={{width:"inherit"}}>
    <Link to="*" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none justify-content-center">
      <span className="fs-4 justify-center">Dashboard</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="listings/" onClick={()=>{props.onCurr(0)}} className={props.curr===0?"nav-link active":"nav-link link-dark"} aria-current={props.curr===0?"page":"false"} style={{backgroundColor:props.curr===0?"green":"white"}}>
            Listings
        </Link>
      </li>
      <li>
        <Link to="notifs/" style={{backgroundColor:props.curr===1?"green":"white"}} onClick={()=>{props.onCurr(1)}} aria-current={props.curr===1?"page":"false"} className={props.curr===1?"nav-link active":"nav-link link-dark"}>
            Notifications
        </Link>
      </li>
      <li>
        <Link to="orders/" style={{backgroundColor:props.curr===2?"green":"white"}} onClick={()=>{props.onCurr(2)}} aria-current={props.curr===2?"page":"false"} className={props.curr===2?"nav-link active":"nav-link link-dark"}>
            Orders
        </Link>
      </li>
      <li>
        <Link to="recents/" style={{backgroundColor:props.curr===3?"green":"white"}} onClick={()=>{props.onCurr(3)}} aria-current={props.curr===3?"page":"false"} className={props.curr===3?"nav-link active":"nav-link link-dark"}>
            Recent
        </Link>
      </li>
      <li>
        <Link to="analytics/" style={{backgroundColor:props.curr===4?"green":"white"}} onClick={()=>{props.onCurr(4)}} aria-current={props.curr===4?"page":"false"} className={props.curr===4?"nav-link active":"nav-link link-dark"}>
            Analytics
        </Link>
      </li>
    </ul>
    <hr/>
    <Link to="settings/" style={{backgroundColor:props.curr===5?"green":"white"}} onClick={()=>{props.onCurr(5)}} style={{paddingRight:"22px"}} aria-current={props.curr===5?"page":"false"} className="d-flex align-items-center link-dark text-decoration-none justify-content-center" id="edit">
        <FaRegSun style={{width:"20%", height:"20px"}}/>
        <strong>Settings</strong>
    </Link>
    <hr/>
  </div>
  );
}

export default Sidebar;