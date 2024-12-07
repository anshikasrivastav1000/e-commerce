import CurrencyFormat from "react-currency-format"

export default function (){

    return(
        <div className="subtotal">
            <CurrencyFormat
            renderText ={(value)=>(
                <>
                <p>
                    Subtotal( 0 items):<strong>$ 0</strong>
                </p>
                <small className="subtotal_gifts">
                 <input type="checkbox"/> This Order Contains Gifts

                </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
                thousandSeprator={true}
            prefix={"$"}
            
            
            />
        </div>
    )
}