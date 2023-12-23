import React from 'react'
import Project from '../project/Project'
import './productList.css'
import Project1 from '../project1/Project1'
import Project2 from '../project2/Project2'
import Project4 from '../project4/Project4'
import Project5 from '../project5/Project5'

const ProductList
 = () => {
  return (
    <div className='pl'>
        <div className='pl-title'><h1> Experience </h1></div>
        <div className='pl-achievements'>
            <p>
                Backend developer experienced in Java, Python, Apache Solr and various other server health monitoring tools.
                Experienced data analyst managing a variety of reporting and automation projects, with additional expertise in system design through the development of multiple systems from scratch.
            </p>
        </div>
        <div className='pl-title'>
          <h1> Project List</h1>
        </div>
        <div className='pl-desc'>
          <p>Below mentioned cards will contain the descriptions of the different projects created,
            handled by myself while my tenure at College, University and aforementioned designations
            at work.
          </p>
        </div>
        <div className='pl-list'>
            <Project/>
            <Project1/>
            <Project2/>
            <Project4/>
            <Project5/>
        </div>
    </div>
  )
}

export default ProductList