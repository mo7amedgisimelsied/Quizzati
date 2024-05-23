import '../index.css'
import '../media-queries.css'
function ProgramList(props){

    return(
    <section className='programs-list'>
        <h2>Choose Your Program</h2>
        <div className='cards-list'>
        {props.programs.map(course => 
        
        <div className='card' data-aos = "fade-up" data-aos-duration="1000" onClick={() => props.scrollToElement(course.programId)} key={course.programId}>
            <div className='card-image'>
            <img src={course.programImage}/>
            </div>
            <p className='major'>{course.major}</p>
            <h3>{course.programName}</h3>
            <p className='available'>{`${course.available} Courses available`}</p>
            <button className='btn btn-green'>See More</button>
            </div>
           
        )}
        </div>
    </section>
    )
}
export default ProgramList;