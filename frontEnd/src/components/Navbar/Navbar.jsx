import React from 'react'
import './navbar.css'
import closeLogo from '../../assets/images/close.svg'
import logo from '../../assets/images/logo.png'

export default function Navbar () {
  var currentpage = window.location.pathname;

  return (
        <aside>
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h2>My ST<span style={{"color":"#ff9800"}}>ORE</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-symbols-outlined">
                        <img src={closeLogo} alt="close" />
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href={"/"} className={currentpage==="/"?"active":""} >
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>

                <a href={"/customers"} className={currentpage==="/customers"?"active":""}>
                    <span className="material-icons-sharp">person_outline</span>
                    <h3>Customers</h3>
                </a>

                <a href={"/orders"} className={currentpage==="/orders"?"active":""}>
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </a>

                <a href={"#dash"} className="">
                    <span className="material-icons-sharp">insights</span>
                    <h3>Analytics</h3>
                </a>


                <a href={"/products"} className={currentpage==="/products"?"active":""}>
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </a>

                <a href={"/setting"} className={currentpage==="/setting"?"active":""}>
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </a>

                <a href={"/logout"} >
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>

        </aside>
  )
}
