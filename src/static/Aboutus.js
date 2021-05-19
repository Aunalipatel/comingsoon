import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


// i have imported all the text from the PHP website and thus there are so many divs and extra classes which arent even relevant

function AboutusScreen() {
  return (
    <div style = {{marginTop : "50px" ,paddingTop:"50px", background: "#011B41" , height : "150vh" , color : "white" , paddingLeft:"10vw",paddingRight:"10vw"}}>
        <section className="wow fadeIn bg-light-gray padding-35px-tb page-title-small top-space">

            <h1 className="alt-font text-extra-dark-gray font-weight-600 mb-0 text-uppercase" >About us </h1>


        </section>


        <section className="wow fadeIn pt-3 ">

            


            <h5 className="alt-font font-weight-700 text-extra-dark-gray text-uppercase width-80 lg-width-100 pt-2">A Tech Based Venture</h5>


            <p className="width-95 lg-width-100">With an easy to use software, we streamline the IT Service process for both, our technicians and our customers ensuring maximum satisfaction for both.</p>


        </section>

        <section className="p-0 wow fadeIn bg-light-gray py-3">

            

                             

               

                <p>With belief in this age old service quote, we provide the best possible service in terms of authenticity , reliability, timeliness , quality and costing !</p>

         

                            
                        

        </section>


        <section className="extra-big-section parallax wow fadeIn pt-5" data-stellar-background-ratio="0.5" >

                                 

            <h4>About TechGuy</h4>

            <h5 className="text-light-gray alt-font margin-40px-bottom sm-margin-30px-bottom pt-2" >We don’t just repair. We come, we fix, we advise, we become your home’s TechGuy </h5>

            <h6 className="text-light-gray alt-font pt-4" >Meet the founder Garv Mulchandani, a 19 year old boy from Mumbai, who has a family background of 30+ years  in the IT Service industry. Growing up, he saw the various problems that customers, technicians and coordinators faced in the industry and came up with the concept of TechGuy, the concept of simplifying your service</h6>

                    

        </section>

        

        <section className="p-0 bg-light-gray wow fadeIn pt-5 mt-5">

            

                    

                    <h5 >Design is not just what it looks like and feels like. Design is how it works.</h5>

                    <p className="width-90 md-width-100">Pofo philosophy that great design can only be delivered by people with a deep social and cultural understanding of the communities they designing. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever...</p>


                 


        </section>

        

        <section className="wow fadeIn bg-light-gray2 pt-5">


            <h6 className="alt-font text-uppercase font-weight-500 text-extra-dark-gray width-100 mx-auto margin-35px-bottom lg-width-100 wow fadeInUp">Here at TechGuy, you get the best of both worlds with premium service quality at reduced costs and minimum time!</h6>

            <p className="text-extra-dark-gray text-large">With an ensured 5 hour TAT, we assure to provide highly trained technicians and authentic parts. Along with highly competitive rates, you also avail a discount of approximately 50% as compared to the standard market rates.</p>

                        

        </section>
       
    </div>
  );
}

export default AboutusScreen;


