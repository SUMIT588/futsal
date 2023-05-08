import KhaltiCheckout from 'khalti-checkout-web';
import { KhaltiWrapper } from "./khaltiStyle"
import config from './khaltiConfig';
import futsalcourt from '../../common/img/futsalcourt.jpg'

export const Payment = () =>{

const checkout = new KhaltiCheckout(config);
    return (
        <KhaltiWrapper>
        
<div className = 'firstContainer'>
    
<h1>Secure</h1>

<h2>Payment</h2>



<p>Book Your 
    Court
</p>
        
    <div className ='button'>
        
            
            <button onClick ={ () => checkout.show({amount:100000})}  > Pay via Khalti  </button >     
</div>

    </div>
<div className = 'secondContainer'>
    <img src = {futsalcourt} alt = 'futsalcourt' />
</div>
        
        </KhaltiWrapper>
    )
}