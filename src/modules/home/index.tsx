import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../core/enums";
import { Button } from "../../core/components";
import { MissionModule, AboutModule, ProgramsModule } from "../../modules";

export const HomeModule = () => {
     const navigate = useNavigate();

     return (
          <div className="w-full max-h-full">
               {/* <div className="w-full h-screen"> */}
               <div className="w-full sm:h-auto">
                    <div className="">
                         <div className="flex items-start flex-wrap-reverse justify-start px-8 sm:px-14 py-10 sm:py-52 gap-10">
                              <div className="flex-1">
                                   <div className="animate__animated animate__fadeInUp animate__delay-0.8s">
                                        <h1 className="text-blue-950 text-4xl sm:text-7xl tracking-wide sm:tracking-wider font-bold leading-tight mb-4 sm:mb-6">
                                             जीवनाची खरी संपत्ती हीच असते जी आपण इतरांसाठी खर्च करतो.
                                        </h1>
                                        <blockquote className="text-emerald-500 font-bold text-right">
                                             - Quote by महात्मा बुद्ध
                                        </blockquote>
                                   </div>
                                   <div className="flex items-center">
                                        <div className="sm:inline hidden">
                                             <Button
                                                  value="About Us"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.ABOUT)}
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 99204 41626
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                        <div className="sm:hidden inline">
                                             <Button
                                                  value="Donate Now"
                                                  styles="animate__animated animate__fadeInLeft animate__delay-1s"
                                                  onClick={() => navigate(ROUTES.DONATION)}
                                                  sm
                                             />
                                             <Button
                                                  styles="animate__animated animate__fadeInRight animate__delay-1s"
                                                  transparent
                                                  sm
                                             >
                                                  <div className="flex items-center gap-x-2">
                                                       <FaPhone />
                                                       <span className="text-md font-semibold text-blue-950">
                                                            +91 99204 41626
                                                       </span>
                                                  </div>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                              <div className="xl:flex-1 bg-gray-900 bg-opacity-90 rounded-full flex justify-center items-center">
                                   <img
                                        className="w-[80%] rounded-lg"
                                        src="https://firebasestorage.googleapis.com/v0/b/sainath-padyatri-form.appspot.com/o/SAI_BABA.png?alt=media&token=d58b8cf7-01bf-403c-87c4-e1214735c183"
                                        alt=""
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               <ProgramsModule tagLine="आमची केसेस तुम्ही पाहू शकता" heading="आमचे नवीनतम कार्यक्रम" isHomePage />
               <AboutModule />
               <MissionModule />
          </div>
     );
};
