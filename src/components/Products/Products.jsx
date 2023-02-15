import React from 'react'
import "./Products.css";
import profile_photo from '../../assets/images/profile-1.jpg';

export default function Products () {
  return (
    <>
    <main >
    <div className='right'>
    <div className='top'>
    <button id='menu-btn'>
      <span className="material-icons-sharp">menu</span>
    </button>
    <div className='profile'>
      <div className="info">
        <p> Hey, <b>Yassine</b></p>
        <small className="text-muted">Welcome Admin</small>
      </div>
      <div className='profile-photo'>
        <img src={profile_photo} className='profile-photo' alt='profile' />
      </div>
    </div>
  </div>
  <br />
  </div>
      <h1>Products :</h1><hr />

      <div className="products">
            <table>
                <thead>
                    <tr>
                      <th>Product Number</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldabl</td>
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
            </div>

            
    
    
    </main>
    
  </>
  )
}
