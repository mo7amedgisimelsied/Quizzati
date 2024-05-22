import '../media-queries.css'
function ProgramList(props){

    return(
    <section className='programs-list'>
        <h2>Choose Your Program</h2>
        <div className='cards-list'>
        {props.programs.map(course => 
        <a href={`#${course.programId}`} className='a-card' key={course.programId}>
        <div className='card' data-aos = "fade-up" data-aos-duration="1000">
            <div className='card-image'>
            <img src={course.programImage}/>
            </div>
            <p className='major'>{course.major}</p>
            <h3>{course.programName}</h3>
            <p className='available'>{`${course.available} Courses available`}</p>
            <button className='btn btn-green'>See More</button>
            </div>
            </a>
        )}
        </div>
    </section>
    )
}
export default ProgramList;