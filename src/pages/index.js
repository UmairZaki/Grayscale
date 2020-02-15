import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import ipad from '../assets/images/ipad.png';
import p1 from '../assets/images/pic01.jpg';
import p2 from '../assets/images/pic02.jpg';
import p3 from '../assets/images/pic03.jpg';
import p4 from '../assets/images/pic04.jpg';
import p5 from '../assets/images/pic05.jpg';
import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic03.png'
import pic03 from '../assets/images/pic04.png'
import pic04 from '../assets/images/pic05.png'
import pic05 from '../assets/images/pic06.png'
import pic06 from '../assets/images/pic07.png'
import pic07 from '../assets/images/pic08.png'
import pic08 from '../assets/images/pic09.png'
import pic09 from '../assets/images/pic10.png'
import pic10 from '../assets/images/pic11.png'
import pic11 from '../assets/images/pic00.png'
import pic13 from '../assets/images/pic12.png'
import pic14 from '../assets/images/pic13.png'
import pic15 from '../assets/images/pic14.png'
import pic16 from '../assets/images/pic15.png'
import pic17 from '../assets/images/pic16.png'
import pic18 from '../assets/images/pic17.png'
import pic19 from '../assets/images/pic18.png'
import pic20 from '../assets/images/pic19.png'
import pic21 from '../assets/images/pic20.png'
import pic22 from '../assets/images/pic21.png'
import pic23 from '../assets/images/pic22.png'
import pic24 from '../assets/images/pic23.png'
import pic25 from '../assets/images/pic24.png'
import pic27 from '../assets/images/pic26.png'
import pic28 from '../assets/images/pic27.png'
import pic29 from '../assets/images/pic28.png'
import pic30 from '../assets/images/pic29.png'
import pic31 from '../assets/images/pic30.png'
import pic32 from '../assets/images/pic31.png'
import pic33 from '../assets/images/pic32.png'
import pic34 from '../assets/images/pic33.png'
import pic35 from '../assets/images/pic34.png'
import pic36 from '../assets/images/pic35.png'
import pic37 from '../assets/images/pic36.png'
import pic38 from '../assets/images/pic37.png'
import pic39 from '../assets/images/pic41.png'
import pic41 from '../assets/images/pic44.png'



const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Objective</h2>
            <p className="text-white-50">
            Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector. To work a dynamic and challenging environment where I can optimally utilize my professional skills. Hardworking, honest, responsible and aspiring professional seeking as a position member of your team that requires creativity, hard work and multitasking.
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
    <h2 className="text-black d">My Work</h2>
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 c">
          <div className="featured-text col-xl-8 col-lg-7 a">
            <img className="img-fluid mb-3 mb-lg-0 " src={p1} alt="" />
          </div>
          <div>
            <div className="featured-text text-center text-lg-left">
              <h4>Gatstby Projects</h4>
              <h5>Web Design User Interface</h5>
              <p className="text-black-50 mb-0">
              I design these websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.
                    Some of the following websites are made by me.
              </p>
              <h3>1- Umair Zaki New</h3>
              <p className="b">to see my code <a href="https://umairzaki-new.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>2- Umair-Zaki</h3>
              <p className="b">to see my code <a href="https://umair-zaki.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>3- Umair Zaki Portfolio</h3>
              <p className="b">to see my code <a href="https://umairzakiportfolio.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>4- Umair Zaki CV</h3>
              <p className="b">to see my code <a href="https://umairzakicv.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>5- Umair Zaki Resume</h3>
              <p className="b">to see my code <a href="https://umairzakiresume.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>6- Umair Zaki</h3>
              <p className="b">to see my code <a href="https://umairzaki.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>7- Umair New</h3>
              <p className="b">to see my code <a href="https://umairnew.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>8- Umair Portfolio</h3>
              <p className="b">to see my code <a href="https://umairportfolio.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>9- Piaic New</h3>
              <p className="b">to see my code <a href="https://piaic-new.netlify.com/" target = "_blank"> Click Here</a></p>
              <h3>10- Piaic For Learning</h3>
              <p className="b">to see my code <a href="https://peaceful-goldwasser-23267b.netlify.com/"  target = "_blank"> Click Here</a></p>
            </div>
          </div>
        </div>
        </div>
       </section>

       <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 c">
        <div>
            <div className="featured-text text-center text-lg-left">
              <h4>Artificial Intelligence Projects</h4>
              <h5>Deep Learning</h5>
              <p className="text-black-50 mb-0">
              I trained the model with all following aspects:
              </p>
              <ul>
                <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                <li>Baseline Model With Data Standarization</li>
                <li>Evaluate a Smaller Network (Small Dense Layers)</li>
                <li>Evaluate a very Smaller Network that Underfit</li>
                <li>Evaluate a larger Network (Large Dense Layers)</li>
                <li>Evaluate a very Larger Network that Overfit</li>
                <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                <li>Use Dropout and Weight Regularization for best results</li>
              </ul>
                    
                    <h3>1- Binary Classification Sonar Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>2- Multiclass Classification Iris Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>3- Regression Housing Dataset</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h3>4- Save & Load Keras Model</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h3>5- Face Detection with Keras MTCNN</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p>
         
            </div>
          </div>
          <div className="featured-text col-xl-8 col-lg-7 a">
            <img className="img-fluid mb-3 mb-lg-0 " src={p2} alt="" />
          </div>
          
        </div>
        </div>
       </section>

       <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 c">
          <div className="featured-text col-xl-8 col-lg-7 a">
            <img className="img-fluid mb-3 mb-lg-0 " src={p3} alt="" />
          </div>
          <div>
            <div className="featured-text text-center text-lg-left">
              <h4>Python Flask Projects</h4>
              <h5>Todo Restful API with Unit Testing</h5>
              <h3>1- GraphQl-Mongodb-API</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h3>2- PostgreSQL-Todo-APP-Unit-Testing</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h3>3- Todo-APP-Unit-Testing-Mongodb</h3>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>
            </div>
          </div>
        </div>
        </div>
       </section>



       <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5 c">
        <div>
            <div className="featured-text text-center text-lg-left">
              <h4>Fiverr</h4>
              <p>to see my Fiverr Profile <a href="https://www.fiverr.com/users/umairjamstackai/seller_dashboard" target = "_blank"> Click Here</a></p>
         <span className="image">
                <img src={pic41}  height="150px" width="auto"  alt="" />
              </span>
            </div>
          </div>
          <div>
            <div className="featured-text text-center text-lg-left">
              <h4>Upwork</h4>
              <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p>
         <span className="image">
                <img src={pic39}  height="150px" width="auto"  alt="" />
              </span>
            </div>
          </div>
        </div>
        </div>
       </section>


       <section id="skills" className="h">
       <h2 className="text-white f">My Skills</h2>
       <ul className="i">
        <li >
              <span className="image">
                <img src={pic08}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Python</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic09}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Numpy</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic10}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Pandas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic07}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Matplotlib</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic06}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Neural Network</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic05}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Deep Learning</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic02}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Keras</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic01}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Scikit Learn</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic03}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Tensorflow</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic04}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Artificial Intelligence</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic11}  height="100px" width="auto"  alt="" />
              </span>
                <h3>HTML5</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic13}  height="100px" width="auto"  alt="" />
              </span>
                <h3>CSS</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic14}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Saas</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic15}  height="100px" width="auto"  alt="" />
              </span>
                <h3>JavaScript</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic17}  height="100px" width="auto"  alt="" />
              </span>
                <h3>NodeJs</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic16}  height="100px" width="auto"  alt="" />
              </span>
                <h3>React</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic18}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Gatsby</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic19}  height="100px" width="auto"  alt="" />
              </span>
                <h3>NPM</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic20}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Flask</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic21}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Terraform</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic22}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Windows</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic23}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Ubuntu</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic24}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Git</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic25}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Docker</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic27}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Kubernetes</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic28}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Jupyter Notebook</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic29}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Visual Studio</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic30}  height="100px" width="auto"  alt="" />
              </span>
                <h3>GraphQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic31}  height="100px" width="auto"  alt="" />
              </span>
                <h3>MongoDb</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic32}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Postman</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic38}  height="100px" width="auto"  alt="" />
              </span>
                <h3>MySQL</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic33}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Rust</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic34}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Lean Startup</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic35}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Agile</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic36}  height="100px" width="auto"  alt="" />
              </span>
                <h3>DevOps</h3>
              </li>
              <li>
              <span className="image">
                <img src={pic37}  height="100px" width="auto"  alt="" />
              </span>
                <h3>Desing Thinking</h3>
              </li>

        </ul>
       </section>
        
       <section id="achievements" className="e">
       <h2 className="text-black f">My Achivements</h2>
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={p4} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left g">
                  <h3 className="text-white">Microsoft Technology Associate</h3>
                  <h4 className="text-white">Introduction to Programming using Python</h4>
                  <p className="mb-0 text-white-50">
                  I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={p5} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right g">
                  <h3 className="text-white">Coursera Certificate</h3>
                  <h4 className="text-white">AI For Everyone deeplearning.ai</h4>
                  <p className="mb-0 text-white-50">
                  I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019. Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
