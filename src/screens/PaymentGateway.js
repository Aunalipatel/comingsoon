import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function PaymentGateway() {
  const [ranOnce, setRanOnce] = useState(false);
  const [serviceCreated, setServiceCreated] = useState({});

  const createNewRequest = async () => {
    try {
      const localStorageData = await JSON.parse(
        localStorage.getItem('servicerequest')
      );
      console.log('Date in LS: ', localStorageData);

      const axios = require('axios');
      let data = JSON.stringify({
        userId: '123',
        NPC: false,
        brand: localStorageData.brand,
        modelNo: localStorageData.modelNo,
        problem: localStorageData.problem,
        product: localStorageData.product,
        subscription: localStorageData.subscription,
        address: localStorageData.address,
        bookingDate: localStorageData.date,
        addOn: localStorageData.addOn,
      });

      let config = {
        method: 'post',
        url: 'http://localhost:5000/api/Service/',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      const response = await axios(config);
      setServiceCreated(response.createdService);
      console.log(JSON.stringify(response.data));
      setRanOnce(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!ranOnce) {
      createNewRequest();
    }
    return () => {
      console.log('Request Sent');
      <h1>{serviceCreated.status}</h1>;
    };
  }, []);

  return (
    <div
      style={{
        marginTop: '50px',
        paddingTop: '100px',
        background: '#011B41',
        height: '100vh',
        color: 'white',
      }}
    >
      <h1>Order Summary</h1>
      <p></p>

      <Button variant="info">Send Service Request</Button>
    </div>
  );
}

export default PaymentGateway;
