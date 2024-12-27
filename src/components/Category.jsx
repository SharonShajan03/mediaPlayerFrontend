import React,{useEffect, useState} from 'react'
import { Modal,Button, Form, FloatingLabel } from 'react-bootstrap'
import { addCategoryApi ,getAllCategoryApi, getSingleVideoAPI, removeCategoryApi, removeVideoApi, updateCategoryAPI} from '../services/allApi';
import VideoCard from './VideoCard';

const Category = ({setRemoveVideoResponseFromCategory,removeVideoResponseFromView}) => {
  const [allCategories,setAllCategories]= useState([])

  const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getAllCategories()
  },[removeVideoResponseFromView])

  {/* now its string value, to post, to  be converted to object */}
  const handleAddCategory=async()=>{
    if(categoryName){
    const categoryDetails={categoryName,allVideos:[]}
    await addCategoryApi(categoryDetails)
    handleClose()
    setCategoryName("")
    getAllCategories()
    }else{
      alert("Please fill form!!!")
    }
  }

  const getAllCategories = async ()=>{
    const response=await getAllCategoryApi()
    setAllCategories(response.data)
  }
  console.log(allCategories);
  
  const deleteCategory=async(id)=>{
   await removeCategoryApi(id)
   getAllCategories()
  }
  const dragOverCategory=e=>{
    e.preventDefault()
  }
  const videoDropOverCategory=async(e,categoryId)=>{
   const videoId= e.dataTransfer.getData("id")
    console.log(`video:  ${videoId} is dropped on category: ${categoryId}`);
    // add video into category
    // get dropping video details - call api
    const {data} = await getSingleVideoAPI(videoId)
    console.log(data);
    // get details dropping category and insert videoDetails of category allVideos
    const selectedCategory = allCategories?.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);

    // update selected category into json file - call api
    await updateCategoryAPI(categoryId,selectedCategory)
    // remove video from allVideos call api
    const response = await removeVideoApi(videoId)
    //pass response to view component
    setRemoveVideoResponseFromCategory(response)
    // get all updated categories
    getAllCategories()

  }

  const categoryVideoDragStart = (e,categoryId,video)=>{
    console.log(`Video with id : ${video.id} from category id ${categoryId} has started dragging`);
    let dataShare = {categoryId,video}
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  }

  return (
    <>
      <div className=' d-flex justify-content-around align-items-center'>
          <h3>All Categories</h3>
          <button onClick={handleShow} className='btn btn-warning rounded-circle fs-5 fw-bolder '>+</button>
      </div>
      <div className="container-fluid mt-3">
      {
        allCategories?.length>0?
        allCategories?.map(categoryDetails=>(
          <div droppable="true" onDragOver={e=>dragOverCategory(e)}  onDrop={e=>videoDropOverCategory(e,categoryDetails?.id)} key={categoryDetails?.id} className='border rounded p-3 mb-3'>
          <div className="d-flex justify-content-between">
            <h5>{categoryDetails?.categoryName}</h5>

            <button onClick={()=>deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button> 
          </div>
          {/* each category */}
          <div className="row mt-2">
            {
              categoryDetails?.allVideos?.length>0 && 
              categoryDetails?.allVideos?.map(video=>(
                  <div draggable={true} onDragStart={e=>categoryVideoDragStart(e,categoryDetails?.id,video)} key={video?.id} className="col-md-4">
                      <VideoCard displayData={video} insideCategory={true}/>
                  </div>
                ))
            }
          </div>
          </div> 
        ))
        :        
        <div className='text-danger fw-bolder'>No Category found yet!!!</div>
      }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        >

        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='border  rounded p-3'>
           <FloatingLabel controlId="floatingInputNmae"      label="Category Name"   >
              <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
           </FloatingLabel>       
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    

  )
}

export default Category