import React, { useState } from 'react';
import fakeData from '../../fakeData'; 
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const courseList=fakeData;    
    const [course,setCourse]=useState(courseList);
    const [cart,setCart]=useState([]);
    const handleAddCourse =(course)=>{       
        const newCart=[...cart,course];
        setCart(newCart);
        
    };
    
    return (
        <div className="shop-container my-5">
            <div className="Course-container">                
             
                {
                    course.map(course=><Course 
                        course={course}
                        key={course.id}
                        handleAddCourse={handleAddCourse}
                    ></Course>)      
                }
              
            </div>
            <div className="Cart-container">             
                      
               <Cart cart={cart}></Cart>
            </div>

              
                
        </div>
    );
}

export default Shop;