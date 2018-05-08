import React,{Component} from "react";

class Product extends Component{
    render() {
        return (
            <div>
                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="thumbnail">
                        <img data-src="%PUBLIC_URL%/images/iphone6.jpeg" alt="iphone6"/>
                        <div className="caption">
                            <h3>Iphone 6plus</h3>
                            <p>
                              16.000.000 d
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Mua hang</a>
                                <a href="#" className="btn btn-default">Action</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Product;