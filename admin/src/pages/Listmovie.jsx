import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import {ToastContainer, toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Listmovie = () => {

  let navigate = useNavigate();

  let file = useRef();

  let [allPro, setAllPro] = useState([]);
  let [showOverLay, setShowOverLay] = useState("none");
  let [imageSrc, setImageSrc] = useState("");

  let [proId, setProId] = useState(null);
  let [pro, setPro] = useState({})
  let [show, setShow] = useState(false)
  let [preloader, setPreLoader] = useState(false);



  useEffect(()=>{
    axios
    .get(`http://localhost:3000/api/v1/movies/add`)
    .then(response=>{
      setAllPro(response.data.result);
    })
  },[])
 
  let selectUploadImage = (id)=>{
    setProId(id);
    file.current.click();
  }

  let selectImage = ()=>{
    setShowOverLay("block");
    let url =URL.createObjectURL(file.current.files[0])
    setImageSrc(url);
  }

  let hide = ()=>{
    setShowOverLay("none")
  }

  let upload = ()=>{
    // console.log(file.current.files[0])
    let myfile = file.current.files[0];
    let x = new FormData(); // we ceate a Form varible by FormData() class
    x.append("photo", myfile);
    axios.put(`http://localhost:3000/api/v1/movies${proId}`, x )
    .then(response=>{
      console.log(response.data);
      setShowOverLay("none")
    })
    

  }

  let askDelete = (obj)=>{
    // console.log(obj)
    setPro(obj);
    setShow(true)
  }

  let confDelete = ()=>{
    setPreLoader(true);
    axios
    .delete(`http://localhost:3000/api/v1/movies/${pro._id}` )
    .then(response=>{
      console.log(response.data)
      setPreLoader(false);
      setAllPro(curr=>curr.filter(item=>item._id != pro._id));
      setShow(false);
      toast("movies Deleted Successfuly.....")
    })
  }

  let goToEdit = (obj)=>{
    navigate("/movies/edit/"+obj._id);
  }


  return (
    <>
    <ToastContainer />
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Delete movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure want to Delete <b>{pro.title}</b> !</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={confDelete} className='btn btn-danger'>Confirm {preloader ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
        <button onClick={()=>setShow(false)} className='btn btn-info'>Close</button>
      </Modal.Footer>
    </Modal>
    <div className="main-panel">
          <div className="content-wrapper pb-0">
            <h2>movies</h2>
            <div className="page-header flex-wrap">
              {
                allPro.length > 0 
                ?
                <>
              <h3>List of All movies</h3>
              <input onChange={selectImage} accept=".jpg, .jpeg, .png, image/jpeg, image/png" ref={file} style={{display : "none"}} type='file' />
                <div className="table-responsive">
                  <table className="table table-dark table-bordered table-hover table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>NAME</th>
                        <th>Category</th>
                        <th>cast</th>
                        <th>Release</th>
                        <th>Ott</th>
                        <th>Image</th>
                        <th>Upload</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allPro.map((item, index)=>{
                          return(
                            <tr>
                              <td>{index+1}</td>
                              <td>{item.title}</td>
                              <td>{item.name}</td>
                              <td>{item.categoryId ? item.categoryId.name : ''}</td>
                              <td>
                                <img src={item.image ? `http://localhost:3000/api/v1/movies/${pro._id}${item.image}` : `http://localhost:3000/api/v1/movies`} style={{height : 50, width : 50}} />
                              </td>
                              
                              <td>
                                <i onClick={()=>selectUploadImage(item._id)} className='fa fa-upload text-success'></i>
                              </td>
                              <td>
                                <button onClick={()=>goToEdit(item)} className='btn btn-info btn-sm'>
                                  <i className='fa fa-pencil-square'></i>
                                </button>
                              </td>
                              <td>
                                <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                                  <i className='fa fa-trash'></i>
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </>
              :
              <div className='alert alert-warning'>No Data Found</div>
              }
            </div>
          </div>

          <div style={{position : "absolute", width : "100%", height : "100%", backgroundColor : "rgba(0, 0, 0, 0.8)", display : showOverLay}}></div>              
          <div style={{position : "absolute", zIndex : 999, backgroundColor : "#666161", left : "40%", top : "20%", display : showOverLay, border : "1px solid #FFF", padding : 10}}>
            <div className='d-flex justify-content-between'>
            <h3 className='text-light'>Preview</h3>
            <button className='close text-light' onClick={hide}>x</button>
            </div>
            <img src={imageSrc} style={{height : 300, width : 300}} />
            <br />
            <button onClick={upload} className='btn btn-info mt-2'>Upload</button>
          </div>
    </div>



    
    
    
    </>
  )
}

export default Listmovie