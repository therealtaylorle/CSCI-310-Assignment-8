import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends React.Component {
    render() { 
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title*/}
                            {/* product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2>Model: {title}</h2>
                                    <h4>
                                        Made by: {company}
                                    </h4>
                                    <h4>
                                        Price: ${price}
                                    </h4>

                                    <p>
                                        {info}
                                    </p>
                                    <Link to="/">
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart?true:false} 
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModel(id);
                                    }}>
                                        {inCart ? "Already in Cart" : "Add to Cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                            

                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}
export default Details;