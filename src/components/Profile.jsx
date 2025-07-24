import React from 'react'

function Profile({brand, img, title}) {
  return (
    <div>
                <div className="">
                    <h1>{brand}</h1>
                    {/* <img src={img} alt="img" /> */}
                    <p>{title}</p>

                </div>
    </div>
  )
}

export default Profile
