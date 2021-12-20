import React from 'react';

class CartColumns extends React.Component {
    render() { 
        return (
            <div className="container-fluid text-center d-none d-lg d-lg-block">
                <div className="row">

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Item</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Name of Item</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Price</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Quantity</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Remove</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p>Total</p>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default CartColumns;