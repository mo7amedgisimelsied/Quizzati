import '../index.css'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import coursesData from './mockEndpoints/coursesData';

function CourseList(props){
    
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const filteredCourses = coursesData.filter(
        (course) => course.programId === props.progId && course.semester === props.sem
        );
        setCourses(filteredCourses);
    }, []);
     
      
    let history = useHistory();
    function handleClick(courseId, courseName){
        history.push(`/quizz/${courseId}/${courseName}`);
    }
    return(
        courses.length == 0? 
        <div className='courseList'><p style={{padding: "0.5rem 1rem", color: "#36454F"}}>No courses available for this semester. ☹ </p></div> :
        
        <div className='courseList'>
            {courses.map(course => 
            <div className="course-card" onClick={() => handleClick(course.courseId, course.courseName)}>
            <img src="https://img.freepik.com/free-psd/3d-checklist-clipboard-pen-icon-isolated_47987-11864.jpg?w=740&t=st=1716228259~exp=1716228859~hmac=38c984cacda4e4d403b735eddf5fcd177a68cfc57db18c1d7d9d3b7dcf7e84b1" />
            <div>
            <h3>{course.courseName}</h3>
            <p>DLBCSEMSE1</p>
            </div>
            </div>)}
            
        </div>
    );
}
export default CourseList;

/*

const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/Test/courses/${props.progId}/${props.sem}`)
        .then(res => res.json())
        .then((result) => {
          setCourse(result)
        })
      },[]);

*/