import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';


export default function HomeScreen() {

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const {loading, error, products} = productList;

    useEffect(() => {
       dispatch(listProducts());
    }, [dispatch])
    return (
        <>
           <div>
            <img className="carousel" src="./images/d3.jpeg" alt="" />
            <div className="text">
                <h1>Talk the truth dont sugar coat</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero eligendi blanditiis <br /> ea laborum voluptatibus nulla eos voluptas corporis 
                    magnam iusto dele <br />  niti possimus culpa, itaque aliquam vel ab rerum veniam.
                </p>
            </div>
            <div className="cto row">
                 <h1 className="cap">Register now as a Sponsor</h1> <p className="capi">Register today to get 20% off on your purchase</p> 
                 <Link to="/sregister" className="bnt">Sponsor</Link>
          </div>
          </div>

          
            <br /><br />

            <div>
                <img className="carousel" src="./images/d3.jpeg" alt="" />
                   
               
                <div className="cto row">
                     <h1 className="cap">Register now as a Vendor</h1> <p className="capi">Register today to get 20% off on your purchase</p> 
                     <Link to="/vregister" className="bnt">Vendor</Link>
              </div>
    
                </div>

            <h1>Featured Products</h1>
            <div>
                {loading ? (<LoadingBox></LoadingBox>
                ) : error ? (<MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="row center">
               {
                   products.map((product) => (
                    <Product key={product._id} product = {product}></Product>
                   ))
               }
              
           </div>
                )}
           
           </div>
           </>
    );
}
