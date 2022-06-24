import React from 'react'
import { Input } from 'antd'; 
import { SearchOutlined } from "@ant-design/icons"
import "./style_searchForm.css"

const SearchForm = ({ handleChange, ...otherProps }) => {
  return (
    <div className='searchForm' style={{flex: "1"}}>
        <Input onChange={handleChange} style={{borderRadius: "10px"}} prefix={<SearchOutlined />}  placeholder="Search Account Name, OCS Account, Email" {...otherProps}/>
    </div>
  )
}

export default SearchForm