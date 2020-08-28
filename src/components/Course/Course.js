import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
   const {courseName,img,price,rating,totalHours,lectures}=props.course;
   const {name,faculty}=props.course.instructor;

    return (
        <div className="Course my-5">
            <div className="course-img">
                <img src={img} alt="" className="img-thumbnail"/>
            </div>
            <div className="course-info">                              
                <h4 className="name" > {courseName}</h4>               
                <h5 style={{color:"#46575E",fontWeight:"600"}}> Instructor : {name}</h5>
                <h6 > Faculty   : {faculty}</h6> 
                <h6> Total Hours  : {totalHours}</h6> 
                <h6> Lectures   : {lectures}</h6>             
                <h6 >Rating   : {rating}</h6>
                <h6 style={{color:"#C20130",fontWeight:"700"}}>Price : ${price}</h6>     
                <Button onClick={()=>props.handleAddCourse(props.course)} variant="primary" size="sm"><FontAwesomeIcon icon={faShoppingCart}/>  Enroll Now
                </Button>{' '}      
            </div>
           
           
        </div>
    );
};

export default Course;