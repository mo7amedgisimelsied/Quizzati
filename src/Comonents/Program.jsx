import '../index.css'
import { useState } from 'react';
import '../media-queries.css'
import CourseList from './CourseList';



function Program(props){

    const [isShow, setShow] = useState(Array(7).fill(false));
    const semesters = [1, 2, 3, 4, 5, 6];
    const toggleShow = (semesterIndex) => {
        setShow(prevShow => {
          const newShow = [...prevShow];
          newShow[semesterIndex] = !newShow[semesterIndex];
          return newShow;
        });};

    return(
    <section className='courses'>
        {props.programs.map(course =>
            <div data-aos = "fade-up" data-aos-duration="1000" key={course.programId}>
            <div className='program--header' id = {`${course.programId}`}>
                <div className='program--image'>
            <img src={course.programImage}/>
            </div>
                <div>
                    <h2>{course.programName}</h2>
                    <p>{`${course.available} Courses available`}</p>
                    <p>Find quizzes organized by semester and course within Computer Science bachelor program. Make your choice below.</p>
                </div>
            </div>
            {semesters.map(semester =>
                <>
                <div className='semester-container' onClick={() => toggleShow(semester)}>
                <div className='semester'>{semester}. Semester
                <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="20" height="20"><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"/></svg>
                </div>
                {isShow[semester] && <CourseList progId ={course.programId} sem = {semester}/>}
                </div>
                 <br></br>
                 </>
            )}
            
           
            </div>
        )}
        
    </section>
    )
}
export default Program;