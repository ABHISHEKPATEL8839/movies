import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Addmovie = () => {
  
    


  let [showOtherInput, setShowOtherInput] = useState(false)
  let param = useParams();
  let navigate = useNavigate();
  let [allCate, setAllCate] = useState([])
  let [allSubCate, setAllSubCate] = useState([]);
  let [other, setOther] = useState("")
  let [pro, setPro] = useState({
         title : "",
         name:"",
    categoryId : "",
    
    cast : "",
    Release:"",
        ott:""
    });

    useEffect(()=>{
    axios
    .get(`http://localhost:3000/api/v1/category`)
    .then(response=>{
     
      setAllCate(response.data.result);
      
    })
  },[])
  useEffect(()=>{
    if(param.id){
      axios
      .get(`http://localhost:3000/api/v1/movies/${param.id}`)
      .then(response=>{
        
        setPro(response.data.result)
        getSubCateById(response.data.result.categoryId)
      })
      
    }
  },[])

  

  let ProFrm = useFormik({
    enableReinitialize : true,
    initialValues : pro,
    onSubmit : (formData)=>{

      if(formData.brand=="Other"){
        formData.brand = other;
      }
      
     if(param.id){
      axios
       .put(`http://localhost:3000/api/v1/movies/${param.id}`, formData)
       .then(response=>{
         navigate("/list")
        })
     }else{

       axios
       .post(`http://localhost:3000/api/v1/movies`, formData)
       .then(response=>{
         navigate("/list")
        })
      }
    }
  })

  let getSubCateById = (cid)=>{
    
    axios
    .get(`http://localhost:3000/api/v1/movies/${cid}`)
    .then(response=>{
      setAllSubCate(response.data.result);
    })
  }

  let handleBrand = (e)=>{
      if(e.target.value=="Other"){
      setShowOtherInput(true)
    }else{
      setShowOtherInput(false)
    }
  }


  return (
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <form onSubmit={ProFrm.handleSubmit}>
            <div className="page-header flex-wrap">
              <div className="col-md-12 col-lg-12 col-sm-12 stretch-card grid-margin">
                <div className="card">
                    <div className="card-header">
                        <h4>{param.id ? 'Update' : "Add New"} movie</h4>
                    </div>
                    <div className="card-body">
                      <div className="my-4">
                        <label htmlFor="">MOVIE tittle</label>
                        <input value={ProFrm.values.title} name='title' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">MOVIE NAME</label>
                        <input value={ProFrm.values.name} name='name' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>

                      <div className="my-4">
                        <label htmlFor="">OTT</label>
                        <input value={ProFrm.values.ott} name='ott' onChange={ProFrm.handleChange} type='text' className={'form-control'} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Release</label>
                        <input value={ProFrm.values.Release} name='Release' onChange={ProFrm.handleChange} type='text ' className={'form-control col-3 '} />
                      </div>
                      <div className="my-4">
                        <label htmlFor="">Category</label>
                        <select value={ProFrm.values.categoryId} className='form-control' name='categoryId' onChange={(e)=>{ProFrm.handleChange(e); getSubCateById(e.target.value)}}>
                          <option>Select</option>
                          {
                            allCate.map(item=><option value={item._id}>{item.name}</option>)
                          }
                        </select>
                      </div>
                     
                     
                     
                    
                 
                      
                      <div className="my-4">
                        <label htmlFor="">Cast</label>
                        <textarea value={ProFrm.values.cast} name='cast' onChange={ProFrm.handleChange} className={'form-control'} ></textarea>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type='submit' className='btn btn-success'>{param.id ? "Update" : "Add"}</button>
                    </div>
                </div>
              </div>
            </div>
            </form>  
        </div>
    </div>

    
    
  )
}

export default Addmovie