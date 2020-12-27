import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
            <div>
                <ul className="breadcrumb">
                    <li><a href="http://octhemedesign.com/opencart/3store/Shoes/index.php?route=common/home">
                        <i className="fa fa-home"></i>
                    </a></li>
                    {/*<li><a*/}
                    {/*    href="http://octhemedesign.com/opencart/3store/Shoes/index.php?route=product/product&amp;product_id=42">Apple*/}
                    {/*    Cinema 30"</a></li>*/}
                </ul>
            </div>
        )
    }
 }