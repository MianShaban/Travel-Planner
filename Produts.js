import React from 'react'
import DashboardFooter from './DashboardFooter'

const Produts = () => {
  return (
    <div>
      <div id='product' className='container p-3'>
            <h1>Add a product</h1>
        <div className='row'>
            <div className='col-md-7 p-5'>
<label><h5>Product tittle</h5></label>
<input type='text' placeholder='Product Name (such as:Cap/Dress etc..)'required/>
<label><h5>Product Price</h5></label>
<input type='number' placeholder='Price of the product (such as:$35)'required/>
{/* <label><h5>Product Description</h5></label>
<textarea placeholder='Description of the product' required/> */}
<label><h5>Product Image</h5></label>
<input type='file' required/>

<button className='btn btn-primary mt-5'><i class="bi bi-plus"></i> Add Product</button>
            </div>
            <div className='col-md-5  border-left'>
                <div className='row '>
<div className='col-md-12 text-center'>

                <button className=' w-25'>Discard</button>
                <button className=' w-25 ml-5'>Save draft</button>
</div>
                </div>
                <hr/>
                <div className="card " style={{ width: "22rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Organize</h5>
                        <label><h6>Category</h6></label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Men</option>
                            <option>Wo-Men</option>
                        </select>
                        <label><h6>Others</h6></label>
                        <select className="form-select" aria-label="Default select example">
                            <option>Hicking Product</option>
                            <option>Clothes</option>
                            <option>Traditional Things</option>

                        </select>

                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* <DashboardFooter/>     */}
    </div>
  )
}

export default Produts
