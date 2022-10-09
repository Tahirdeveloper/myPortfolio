import React, { Suspense } from "react";
import Buttons from "./Buttons";
import { Buttons2 } from "./Buttons";
import Myfooter from "./Footer";
import Typewriter from 'typewriter-effect';
import ProgressBar from 'react-bootstrap/ProgressBar';
const SkillCard= React.lazy(()=> import('./Skills'));
const Progress=  React.lazy(() => import("./ProgressBar"));


function Home() {
    return (
        <>
            <div>
                <div className="header">

                    <div className="row ">

                        <div className="col-md-6 header-image">
                            {/* header image */}
                        </div>
                        <div className="col-md-5  text-white my-auto header-text">

                            <span> Hi, there! </span><h2 className="text-center"> I'M A PROFESSIONAL
                                <span className="text-info">
                                    <Typewriter
                                        options={{
                                            strings: ['Web Developer', 'App Developer', 'Freelancer', 'Web Designer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>

                            </h2>
                            <p className="text-center">  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                            </p>


                            <span className="btn1 my-5"><Buttons name="See Projects" /> </span>
                            <div className="btn2"> <Buttons2 name="Preview CV" /></div>
                        </div>
                    </div>

                </div>
               
                <div className="container">
               
                    <h1 className="text-center text-white">SERVICES</h1>
                   
                    <div className="row my-5">
                    <Suspense fallback= {<h1 className="text-info">Loading...</h1>}>
                        <div className="col-md-3">
                            <SkillCard imgSrc={require("../images/me.JPG")} title="Web Development" description=" In publishing and graphic design, Lorem ipsum 
                       is a placeholder text commonly used" name="See Projects" />
                        </div>
                        <div className="col-md-3">
                            <SkillCard imgSrc={require("../images/me.JPG")} title="Web Designing" description=" In publishing and graphic design, Lorem ipsum 
                       is a placeholder text commonly used" name="See Projects" />
                        </div>
                        <div className="col-md-3">
                            <SkillCard imgSrc={require("../images/me.JPG")} title="Video Editing" description=" In publishing and graphic design, Lorem ipsum 
                       is a placeholder text commonly used" name="See Projects" />
                        </div>
                        <div className="col-md-3 ">
                            <SkillCard imgSrc={require("../images/me.JPG")} title="Graphics Designing" description=" In publishing and graphic design, Lorem ipsum 
                       is a placeholder text commonly used" name="See Projects" />
                        </div>
                        </Suspense>
                    </div>
                   
                </div>
              
                <div className="container">
                <Suspense fallback= {<h1 className="text-info">Loading...</h1>} >
                
                    <h1 className="text-center text-white">Experience</h1>
                    <div className="row my-5 text-white" >

                        <div className="col-3">
                            <Progress progress={75} color={"green"} />
                            <h3> Web Development </h3>
                        </div>

                        <div className="col-3">
                            <Progress progress={85} color={"yellow"} />

                            <h3> Web Design </h3>
                        </div>

                        <div className="col-3">
                            <Progress progress={60} color={"cyan"} />
                            <h3> Graphics Design </h3>
                        </div>

                        <div className="col-3">
                            <Progress progress={90} color={"purple"} />
                            <h3> Wordpress </h3>
                        </div>

                    </div>
                    </Suspense>
                    <Suspense fallback={<h1>Loading...</h1>}>
                    <div className="row ">
                   
                        <h1 className="text-white my-4">Programing Languages</h1>
                        <div className="col-md-4 bg-secondary mb-4 text-info">
                        <h3 className=" languages-List my-3 ">HTML/CSS</h3>
                        <h3 className=" languages-List ">PHP</h3>
                        <h3 className=" languages-List">JavaScript</h3>
                        <h3 className=" languages-List">React</h3>
                        </div>

                        <div className="col-md-8 bg-secondary p-2  mb-4 progress-bar">
                          <ProgressBar className="my-5" animated variant="info" now={90} label={`${90}%`} />
                            <ProgressBar className="my-5" animated variant="success" now={65} label={`${65}%`} />
                            <ProgressBar className="my-5" animated variant="warning" now={75} label={`${75}%`} />
                            <ProgressBar className="my-5" animated variant="primary" now={60} label={`${60}%`} />
                        </div>
                   
                    </div>
                    </Suspense>


                </div>

            </div>
            <Myfooter />
        </>

    )
}

export default Home;