import React from 'react';
// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { BsInfoCircle } from 'react-icons/bs';


const HickingGoods = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const items = [
    {
      image: "/Assects/images/hicking-shoes.png",
      title: "Hicking shoes",
      price: "38.00",
    },
    {
      image: "/Assects/images/hicking-bottel.png",
      title: "Bottel",
      price: "8.00",
    },
    {
      image: "/Assects/images/hicking-hats.png",
      title: "Hat",
      price: "8.00",
    },
    {
      image: "/Assects/images/hicking-sticks.png",
      title: "Hiking Sticks",
      price: "38.00",
    },
    {
      image: "/Assects/images/hicking-tent.png",
      title: "Portable Tent",
      price: "68.00",
    },
    {
      image: "/Assects/images/hicking-bag.png",
      title: "BackPack",
      price: "15.00",
    },
    {
      image: "/Assects/images/rain-coat.png",
      title: "Rainy Coat",
      price: "18.00",
    },
    {
      image: "/Assects/images/mini-stove.png",
      title: "Portable  Stove",
      price: "38.00",
    },
    {
      image: "/Assects/images/kalash-dubatta.png",
      title: "Kalashi Dubatta",
      price: "10.00",
    },
    {
      image: "/Assects/images/kalash-dress.png",
      title: "kalashi Dress",
      price: "48.00",
    },
    {
      image: "/Assects/images/kalash-necklace.png",
      title: "Kalashi Neclace ",
      price: "38.00",
    },
    {
      image: "/Assects/images/kalash-topi.png",
      title: "Kalashi Cap ",
      price: "28.00",
    },
    {
      image: "/Assects/images/kashmir-dress.png",
      title: "Kashmiri Dress",
      price: "38.00",
    },
    {
      image: "/Assects/images/kashmir-cap.png",
      title: "Krakual Cap",
      price: "18.00",
    },
    {
      image: "/Assects/images/kashmir-jewllery.png",
      title: "Kashmiri Jewllery ",
      price: "28.00",
    },
    {
      image: "/Assects/images/kashmir-shawl.png",
      title: "Kashmiri Shawl",
      price: "15.00",
    },
  ];



  return (
    <div className="container-fluid">
      <h1 className='text-center mt-3'style={{fontSize:"4em"}}><span className='p-1' style={{backgroundColor:"lightgreen",borderRadius:"10px"}}>Traditional</span> Products</h1>
      <div className="row p-5">
        {items.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mt-3" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="Product-item" />
              <div className="card-body">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-price">${item.price}</p>
                <hr />
                <button className="shop-button w-50 " style={{borderRadius:"20px"}}>Add to Cart</button>
                {/* <div className="rating"> */}
                  <i className="bi bi-star-fill ml-2 star-shop"></i>
                  <i className="bi bi-star-fill star-shop"></i>
                  <i className="bi bi-star-fill star-shop"></i>
                  <i className="bi bi-star-fill star-shop"></i>
                  <i className="bi bi-star-half star-shop"></i>

                  
                  <i class="bi bi-info-circle ml-2"></i>
                  {/* <BsInfoCircle style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleShow} /> */}

{/* Modal */}
{/* <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Product Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Here are the details of the product you are interested in:</p>
    <ul>
      <li><b>Product Name:</b>{item.title}</li>
      <li><b>Price:</b> ${item.price}</li>
      <li><b>Description: </b>A high-quality product with amazing features.</li>
    </ul>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal> */}




                {/* </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 
};




// };

export default HickingGoods;
