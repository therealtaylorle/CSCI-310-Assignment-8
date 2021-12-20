import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class Product extends React.Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product; 
        return (
        <ProductWrapper className="col-9 mx-auto col-md col-lg-3 my-3">
            <div className="card">
                <ProductConsumer>
                    {(value) => (
                        <div className="img-container" onClick={() => value.handleDetail(id)}>
                        <Link to="/details">
                            <img src={img} alt="instrument" className="card-img-top"/>
                        </Link>
                        <button disabled={inCart ? true : false} 
                        onClick={() => {
                            value.addToCart(id) 
                            value.openModel(id)
                        }}
                            >
                            {inCart?(<p className="text-capitalize mb-0" disabled> {" "} in cart</p>):(<i className="fas fa-cart-plus"/>)}
                        </button>
                        </div>
                    )} 
                </ProductConsumer>
                <div className="card-footer justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="mb-0">
                        ${price}
                    </h5>
                </div>
            </div>
        </ProductWrapper>
        
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div `
    .card {
        border-color: transparent;
    }
    
    &:hover {
        .card {
            border: 2px rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px black
        }
        .card-footer {
            background: lightgrey;
        }
    }
    .img-container{
        height: 400px;
        width: 150px;
    }
    
`
 
export default Product;
