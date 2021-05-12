import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const PaymentScreen = () => {


  return (
  <div  style = {{  backgroundColor: "#265385" }}>

    <Container fluid className = "mx-auto "  style = {{  color:"white", width : "180vh" , height:"100vh" , paddingTop :"20vh"}}>

       <h3 className = "pt-4">
Refunds

</h3>
<p>
Buyer may be entitled to a refund for prepaid Orders. Tech Guy Services LLP retains the right to retain the penalty payable by the Buyer from the amount refundable to him/her. The Buyer shall also be entitled to a refund of proportionate value in the event packaging of an item in an Order or the complete Order, is either tampered or damaged and the Buyer refuses to accept at the time of delivery for the said reason.
  
</p>
<p>
Buyer may be entitled to a refund upto 100% of the Order value if the delivery partner fails to deliver the Order due to a cause attributable to either delivery partner or tech guy services LLP, however such refunds will be assessed on a case to case basis by Tech Guy services LLP.

</p>
<h6 className = "pt-4">
All refund amounts shall be credited to Buyer&apos;s account as may be stipulated as per the payment mechanism of Buyer&apos;s choice. 

</h6>
<h6 className = "pt-4">
TechGuy&apos;s decision on refunds shall be final and binding.

</h6>

    </Container>

  </div>
  )
};

export default PaymentScreen;