import React,{useState,useEffect} from 'react'
import "./Products.css";
import profile_photo from '../../assets/images/profile-1.jpg';
import { useNavigate } from "react-router-dom";

export default function Products () {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/prod_data")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const delete_this = (id) => {
    fetch(`/delete_prod/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === false) {
          alert("error");
        }
        if (data.status === "ok") {
          console.log(data.msg);
          window.location.reload();
        }
      });
  };

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
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.produitName}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price} DH</td>
                            <td>{product.description}</td>
                            <td >
                              <div className='prod-func'>
                                  <span class="material-icons-sharp" style={{"color":"var(--color-primary)"}} onClick={()=>{
                                      return navigate(`/products/modifier/${product._id}`, {state:{ product }} );
                                    }}>
                                    add
                                  </span>
                                
                                <span class="material-icons-sharp" style={{"color":"var(--color-danger)"}}  onClick={()=>delete_this(product._id)}>
                                  delete
                                </span>
                              </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br />
            </div>
    </main>
  </>
  )
}
