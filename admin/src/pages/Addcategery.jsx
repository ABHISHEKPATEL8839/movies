import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import {useNavigate, useParams} from 'react-router-dom'


const AddCategory = () => {
  let param = useParams();
  let [cate, setCate] = useState({
      name : ""
    })
  
  useEffect(()=>{
    if(param.id){
      axios
      .get(`http://localhost:3000/api/v1/category/${param.id}`)
      .then(response=>{
        setCate(response.data.result)
      })
    }
  },[])
  let navigate = useNavigate();
  let CateFrm = useFormik({
    enableReinitialize : true,
    initialValues : cate,
    onSubmit : (formData)=>{
      if(param.id){
           axios
        .put(`http://localhost:3000/api/v1/category/${param.id}`, formData )
        .then(response=>{
          navigate("/addcate")  
        })
      }else{

        axios
        .post(`http://localhost:3000/api/v1/category`, formData )
        .then(response=>{
          navigate("/catelist")  
        })
      }
    }
  })


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
              <form onSubmit={CateFrm.handleSubmit}>                            
            <div className="page-header flex-wrap">
              <div className="col-md-6 col-lg-6 col-sm-6 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>{param.id ? 'Update' : 'Add New'} Category</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-2">
                        <label htmlFor="">Category Name</label>
                        <input value={CateFrm.values.name} name='name' onChange={CateFrm.handleChange} type='text' className={'form-control'} />
                        
                      </div>
                      
                    </div>
                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add'}</button>
                    </div>
                </div>
              </div>
            </div>
              </form>
        </div>
    </div>
  )
}

export default AddCategory