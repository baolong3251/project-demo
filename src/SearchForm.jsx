import React from 'react'
import { Input } from 'antd'; 
import { SearchOutlined } from "@ant-design/icons"
import "./style_searchForm.css"

const { Search } = Input;

const SearchForm = () => {
  return (
    <div className='searchForm'>
        <Input style={{borderRadius: "10px"}} prefix={<SearchOutlined />}  placeholder="Search Account Name, OCS Account, Email"/>
    </div>
  )
}

export default SearchForm