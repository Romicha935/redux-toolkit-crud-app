import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBook } from './BookSlice'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()
  const numberofBooks = useSelector((state)=> state.books.books.length)
  const handleSubmit = (e) => {
    e.preventDefault()
    const book = {id:numberofBooks+ 1, title,author};
     dispatch(addBook(book))
     navigate('/show-books', {replace:true})
  }
  return (
    <div>
      <h2>Add Book</h2>
      <form action="">
        <div className='form-field'>
          <label htmlFor="" >Title:</label>
          <input type="text" id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label htmlFor="" cl>Author:</label>
          <input type="text" id='title' name='title' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>
        <button onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook