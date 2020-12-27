import React, { Component } from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
 export default class Footer extends  Component {
     render() {
         return (
             <div>
                 <footer>
                     <Footer1 />

                     {/* Top foot  */}
                     <Footer2 />
                 </footer>
             </div>
         )
     }
 }