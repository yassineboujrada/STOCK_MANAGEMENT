import React from 'react'
import './navbar.css'
import closeLogo from '../../assets/images/close.svg'
import logo from '../../assets/images/logo.png'

export default function Navbar () {
  return (
    
        <aside >
            <div className='top'>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h2>EGA<span className="danger">TOR</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-symbols-outlined">
                        <img src={closeLogo} alt="close" />
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href={"#dash"} className="active">
                    <span className="material-icons-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">person_outline</span>
                    <h3>Customers</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">insights</span>
                    <h3>Analytics</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">mail_outline</span>
                    <h3>Messages</h3>
                    <span className='message-count'>12</span>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">report_gmailerrorred</span>
                    <h3>Reports</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </a>

                <a href={"#dash"}>
                    <span className="material-icons-sharp">add</span>
                    <h3>Add Product</h3>
                </a>

                <a href={"#dash"} >
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>

        </aside>
    // </div>
  )
}
