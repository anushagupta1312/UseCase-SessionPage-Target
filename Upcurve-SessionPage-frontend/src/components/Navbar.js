import React from 'react'
import pic from '../Target_logo.svg.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.target.com/">
                    <div style={{ "display": "flex" }}>
                        <img src={pic} alt="" width="40" height="40" class="d-inline-block align-text-top" style={{ 'margin-right': '1rem', 'height': '100%' }} />
                        <h2 className="heading-navbar" >TARGET UPCURVE 2022</h2>
                    </div>

                </a>
            </div>
        </nav>
    )
}

export default Navbar