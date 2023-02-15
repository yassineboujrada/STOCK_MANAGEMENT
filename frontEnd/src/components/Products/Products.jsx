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
      <div className='right'>
    <div className='top'>
      <div className="add-product">
        <button id='btn-add' onClick={() => {
                window.open("/products/add", "_blank");
            }}>
            <span class="material-icons-sharp">
                add
            </span>
            Add Product
        </button>
    </div>
    </div>
    </div>  

      <div className="products">
            <table>
                <thead>
                    <tr>
                      <th>Product Number</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Foldable mini drone</td>
                        <td>123456789</td>
                        <td>Paypal</td>
                        <td>Pending</td>
                        <td>kefoeofe</td>
                        <td >
                          <div className='prod-func'>
                            <a href={'/products/modifier'}>
                              <span class="material-icons-sharp">
                                add
                              </span>
                            </a>
                            
                            <a href={'/products/delete'}>
                              <span class="material-icons-sharp">
                                delete
                              </span>
                            </a>
                          </div>
                        </td>
                    </tr>
                </tbody>
            </table><br />
            </div>

            
    
    
    </main>
    
  </>
  )
}
