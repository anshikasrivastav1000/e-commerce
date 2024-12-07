import Header from "./Header";
import "./Home.css"
import Product from "./Product"
import ProductContainer from "./ProductContainer";
export default function Home(){
    return(

        <div className="home">
            <div className="home-container">
                <img src="https://img.freepik.com/free-psd/creative-cyber-monday-sales-banner-template_23-2149108125.jpg?t=st=1733559640~
                exp=1733563240~hmac=147efdbe74c6ca59b58edbb9744e322271d1a4c9d692f271dfbca424e69d11fb&w=1060" className="home-image" alt="" />
                <div className="home-row">
                   <ProductContainer/>
                </div>
            </div>
        </div>
    );
}