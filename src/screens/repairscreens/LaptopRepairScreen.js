import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function LaptopRepairScreen() {
  const [laptop, setLaptop] = useState('');
  const [brand, setBrand] = useState('');
  const [serial, setSerial] = useState();
  const [problem, setProblem] = useState('');

  // const [brandsstate, setbrandsstate] = useState([]);
  const brandsstate = [
    'Apple',
    'ASUS',
    'HCL',
    'Acer',
    'Dell',
    'HP',
    'Lenovo',
    'Samsung ',
    'Microsoft',
    'Sony',
  ];
  const [modelstate, setmodelstate] = useState([]);

  const storeVariables = () => {
    console.log('Function called');
    const servicerequest = {
      product: 'laptop',
      brand: brand,
      modelNo: laptop,
      serial: serial,
      problem: problem,
    };
    localStorage.setItem('servicerequest', JSON.stringify(servicerequest));
  };

  let laptopBrands = [];
  let listOfLaptops = [];
  let listoflaptopmodelnumber = [];
  let localstoragedata = [];
  let responsedata = [];

  const callData = async () => {
    let data = '';

    let config = {
      method: 'get',
      url: 'http://localhost:5000/api/Service/getServices',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      listOfLaptops = response.data.filter((item) => item.product === 'Laptop');
      localStorage.setItem('listoflaptops', JSON.stringify(listOfLaptops));
      localstoragedata = await JSON.parse(
        localStorage.getItem('listoflaptops')
      ); //changes
      console.log('local data is', localstoragedata);
    } catch (err) {
      console.log(err);
    }
    // await axios(config)
    //   .then((response) => {
    //     responsedata = response.data;
    //     // listOfLaptops = response.data.filter(
    //     //   (item) => item.product === 'Laptop'
    //     // );
    //     // localStorage.setItem('listoflaptops', JSON.stringify(listOfLaptops));
    //     // localstoragedata = JSON.parse(localStorage.getItem('listoflaptops')); //changes
    //     // console.log('local data is', localstoragedata);

    //     // for(const item of listOfLaptops){
    //     //   listOfLaptopBrands.add(item.brand);
    //     // }
    //     // laptopBrands = Array.from(listOfLaptopBrands)
    //     // setbrandsstate(laptopBrands);

    //     //console.log(laptopBrands);

    //     // listoflaptopmodelnumber = listOfLaptops.filter(item => item.brand === brand )
    //     // setmodelstate([]);
    //     // setmodelstate(listoflaptopmodelnumber);
    //     // console.log(listoflaptopmodelnumber);
    //     // console.log(brand);
    //     // console.log(listOfLaptops)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    console.log('Running useEffect 1');
    callData();
    // listOfLaptops = responsedata.filter((item) => item.product === 'Laptop');
    // localStorage.setItem('listoflaptops', JSON.stringify(listOfLaptops));
    // localstoragedata = JSON.parse(localStorage.getItem('listoflaptops')); //changes
    // console.log('local data is', localstoragedata);
  }, []);

  useEffect(async () => {
    console.log('Running UseEffect 2');
    if (localstoragedata) {
      localstoragedata = await JSON.parse(
        localStorage.getItem('listoflaptops')
      ); // changes;
      if (localstoragedata) {
        listoflaptopmodelnumber = localstoragedata.filter(
          (item) => item.brand === brand
        );

        setmodelstate([]);
        setmodelstate(listoflaptopmodelnumber);
        console.log('Laptop models', listoflaptopmodelnumber);
        console.log(brand);
        console.log(listOfLaptops, 'second use effec ran');
      }
    }
  }, [brand]);

  return (
    <div className="LaptopRepairScreen">
      <Container
        fluid
        style={{
          minHeight: '50%',
          backgroundColor: 'beige',
          marginLeft: '0',
          marginRight: '0',
          paddingRight: '0',
          paddingLeft: '0',
          paddingTop: '56px',
        }}

        //   className = "px-0 mx-0" marginTop:"56px", marginLeft:"0"
        // ,   marginRight:"0" , paddingRight:"0" , paddingLeft:"0"
      >
        {/* <Button>lap</Button> */}
      </Container>

      <Container id="popo" fluid className="mt-4"></Container>

      <Container id="form-laptoprepair">
        <div className="pt-3 ml-2 pb-3">
          <h4>Need a device repaired?</h4>
        </div>

        <Form onSubmit={storeVariables}>
          <Form.Group className="py-2" controlId="exampleForm.ControlSelect1">
            {/* <Form.Label>Laptop brand</Form.Label> */}
            <Form.Control
              as="select"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option>Brand of Laptop</option>

              {brandsstate.map((brand_set) => (
                <option key={brand_set}>{brand_set}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="py-2" controlId="exampleForm.ControlSelect1">
            {/* <Form.Label>Laptop brand</Form.Label> */}
            <Form.Control
              as="select"
              onChange={(e) => setLaptop(e.target.value)}
            >
              <option>Model number</option>
              <option>Laptop Model 1 </option>
              <option>Laptop Model 2 </option>
              <option>Laptop Model 3 </option>
              <option>Laptop Model 4 </option>

              {modelstate.map((model_set) => (
                <option key={model_set._id}>{model_set.modelNo}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="py-2" controlId="exampleForm.ControlSelect1">
            {/* <Form.Label>Laptop brand</Form.Label> */}
            <Form.Control
              as="select"
              onChange={(e) => setProblem(e.target.value)}
            >
              <option>Type of problem</option>
              <option>battery issues</option>
              <option>fan not working</option>
              <option>other..</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="py-2" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="String"
              placeholder="Serial Number"
              onChange={(e) => setSerial(e.target.value)}
            />
          </Form.Group>
          <Button
            block
            variant="info"
            type="submit"
            href="/laptop-addons"
            onClick={storeVariables}
          >
            Continue
          </Button>
        </Form>
      </Container>

      <Container id="mini-nav">
        <Row className="py-5">
          <Col>How it works</Col>
          <Col>Our technicians</Col>
          <Col>Reviews</Col>
        </Row>
      </Container>
      <Container id="xx" fluid className=""></Container>
      <Container id="xx" fluid className="my-4"></Container>
      <Container id="xx" fluid className="my-4"></Container>
    </div>
  );
}

export default LaptopRepairScreen;