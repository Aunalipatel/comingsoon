import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const RefundPolicy = () => {


  return (
  <div  style = {{  backgroundColor: "#265385" }}>

    <Container fluid className = "mx-auto "  style = {{  color:"white", width : "180vh" , height:"120vh" , paddingTop :"20vh"}}>

       <h3 className = "pt-4">
Cancellations
</h3>
<p>

As a general rule Buyer shall not be entitled to cancel Order once placed. Buyer may choose to cancel Order only within twenty-four 
hours of the Order being placed. If Buyer cancels his/her Order after twenty-four hours of placing it, Tech Guy Services LLP shall 
have a right to collect a penalty of 25% of the Order amount for breach of contract terms as a compensation for the damages suffered
 by Tech guy services LLP, with a right to either not to refund the Order value in case Buyer&apos;s Order is prepaid or recover from 
 the Buyer&apos;s subsequent Order in case his/her Order is postpaid, to compensate the Merchants, delivery partners and Engineers.
</p>
<h3 className = "pt-4">
Refunds
</h3>
<p>
Buyer may be entitled to a refund for prepaid Orders. Tech Guy Services LLP retains the right to retain the penalty payable by the
 Buyer from the amount refundable to him/her. The Buyer shall also be entitled to a refund of proportionate value in the event 
 packaging of an item in an Order or the complete Order, is either tampered or damaged and the Buyer refuses to accept at the time 
 of delivery for the said reason.
</p>
<p>
  Buyer may be entitled to a refund upto 100% of the Order value if the delivery partner fails to deliver the Order
   due to a cause attributable to either delivery partner or tech guy services LLP, however such refunds will be assessed
  on a case to case basis by Tech Guy services LLP.</p>
<p>
All refund amounts shall be credited to Buyer&apos;s account as may be stipulated as per the payment mechanism of Buyer&apos;s choice. 
</p>

<h6 className = "pt-4">
TechGuy&apos;s decision on refunds shall be final and binding.

</h6>

    </Container>

  </div>
  )
};

export default RefundPolicy;