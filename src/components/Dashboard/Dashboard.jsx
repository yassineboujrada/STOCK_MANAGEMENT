import React from 'react'
import './dash.css'

export default function Dashboard (){
  return (
    <>
        <h1>Dashboard</h1>
        <br />
        <div className="insights">
        
            <div className="sales">
                <span className="material-icons-sharp">analytics</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Sales</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>81%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>

            <div className="expenses">
                <span className="material-icons-sharp">bar_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total Expenses</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>60%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>

            <div className="income">
                <span className="material-icons-sharp">stacked_line_chart</span>
                <div className="middle">
                    <div className='left'>
                        <h3>Total incomes</h3>
                        <h1>$25,024</h1>
                    </div>
                    <div className='progress'>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <div className="number">
                            <p>40%</p>
                        </div>
                    </div>
                </div>
                <small className='text-muted'>Last 24 Hours</small>
            </div>
        </div>
        <br />
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payement</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td className='warning'>Pending</td>
                    </tr>
                </tbody>
            </table><br />
            <a href={"#dash"}>View All</a>
        </div>
    </>
  )
}
