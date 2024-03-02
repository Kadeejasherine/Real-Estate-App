import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable}  from 'firebase/storage'
import { app } from '../Firebase';
import { upadateUserStart,updateUserSuccess,updateUserFailure, signInStart } from '../redux/user/userSlice';


export default function Profile() {
 

  const fileRef = useRef(null);
  const {currentUser,loading,error} = useSelector((state)=>state.user);

  const [file, setfile] = useState(undefined);
 const [filePerc, setFilePerc] = useState(0)
 const [fileUploadError,setFileUploadError] = useState(false);
const [formData, setFormData] = useState({})
const [updateSuccess, setupdateSuccess] = useState(false)

const dispatch = useDispatch();


  useEffect(() => {
    if(file) {
      handleFileUpload(file)
    }
  }, [file]);

  const handleFileUpload = (file) =>{
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage,fileName);
      const uploadTask = uploadBytesResumable(storageRef,file);

      uploadTask.on('state_changed',
(snapshot) =>
{
const progress = (snapshot.bytesTransferred /
snapshot.totalBytes) * 100;
setFilePerc(Math.round(progress));
},
(error)=>{
  setFileUploadError(true);
},
()=>{
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>
      setFormData({ ...formData,avatar:downloadURL})
  );
}
      );
  };

  const handleChange = (e) =>{
   setFormData( {...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      dispatch(upadateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      })
       const data = await res.json();
       if(data.success == false) {
        dispatch(updateUserFailure(data.message));
        return;
       }
      dispatch(updateUserSuccess(data));
      setupdateSuccess(true);
      
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  }
  
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'> Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onClick={(e)=>setfile(e.target.files[0])} type="file"  ref={fileRef} hidden accept='image/*'/>
       <img onClick={()=>fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="profile " 
       className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>
       <p className='text-sm self-center'>{fileUploadError ? (
        <span className='text-red-600'>Error uploading image(Image must be less than 2 mb)</span>
       ) : filePerc > 0 && filePerc < 100 ? (
        <span>{`Uploading ${filePerc}%` }</span>
       
       ): filePerc ===100 ? (
        <span className='text-green-600'>Image uploaded successfully!</span>
       ): ('')
       }</p>
       <input type="text" placeholder='username' defaultValue={currentUser.username} onChange={handleChange} className='border p-3 rounded-lg bg-gray-100' id='username'/>
       <input type="email" placeholder='email' defaultValue={currentUser.email} onChange={handleChange} className='border p-3 rounded-lg bg-gray-100' id='email' />
       <input type="password" placeholder='password' onChange={handleChange} className='border p-3 rounded-lg bg-gray-100' id='password'/>
       <button disabled={loading} className='bg-red-600 p-3 rounded-lg text-white hover:opacity-90 disabled:opacity-70'>{loading ? 'Loading...' : 'Update'}</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-600 cursor-pointer'>Delete account</span>
        <span className='text-slate-600 cursor-pointer'>Sign out</span>
      </div>
      <p className='text-red-600 mt-5'>{error ? error : ""}</p>
      <p className='text-green-500 mt-5'>{updateSuccess ? "Updated successfully" : " "}</p>
    </div>
  )
}
