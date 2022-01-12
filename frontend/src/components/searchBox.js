import React, { useState } from 'react'
import {Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()  
            const form =  document.getElementById('searchForm')
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
            form.reset()
        } else{
            history.push('/')
            form.reset()
        }
    }

    return (
        <Form id='searchForm' onSubmit={submitHandler} inline='true'>
          <Form.Control 
           id='formInput'
          type='text'
          name='q'
          onChange = {(e) => setKeyword(e.target.value)}
          placeholder='Search Products'
          className='mr-sm-2 ml-sm-5'
          ></Form.Control>
          <Button type='submit' variant='outline-info' className='p-1'> Search </Button>
        </Form>
    )
}

export default SearchBox