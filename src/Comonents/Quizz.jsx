import '../index.css'
import { useEffect, useState } from 'react';
import '../media-queries.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import questionsData from './mockEndpoints/questionsData';

function Quizz(){

  const [score, setScore] = useState(0);
  let location = useLocation();
  const [question, setQuestion] = useState([]);
    useEffect(() => {
        const filteredQuestions = questionsData.filter(
        (q) => q.courseId === location.state.course
        );
        setQuestion(filteredQuestions);
    }, []);

      

  const correct = 
  <svg  version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" width="30" height="30" fill='#00DF82'>
  <g>
    <path d="M405.333,0H106.667C47.786,0.071,0.071,47.786,0,106.667v298.667C0.071,464.214,47.786,511.93,106.667,512h298.667   C464.214,511.93,511.93,464.214,512,405.333V106.667C511.93,47.786,464.214,0.071,405.333,0z M426.667,172.352L229.248,369.771   c-16.659,16.666-43.674,16.671-60.34,0.012c-0.004-0.004-0.008-0.008-0.012-0.012l-83.563-83.541   c-8.348-8.348-8.348-21.882,0-30.229s21.882-8.348,30.229,0l83.541,83.541l197.44-197.419c8.348-8.318,21.858-8.294,30.176,0.053   C435.038,150.524,435.014,164.034,426.667,172.352z"/>
  </g>
  </svg>

  const wrong = 
  <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 24 24" width="30" height="30" fill='red'><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1.231,6.641l-4.466,5.359,4.466,5.359c.354.425.296,1.056-.128,1.409-.188.155-.414.231-.64.231-.287,0-.571-.122-.77-.359l-4.231-5.078-4.231,5.078c-.198.237-.482.359-.77.359-.226,0-.452-.076-.64-.231-.424-.354-.481-.984-.128-1.409l4.466-5.359-4.466-5.359c-.354-.425-.296-1.056.128-1.409.426-.353,1.056-.296,1.409.128l4.231,5.078,4.231-5.078c.354-.424.983-.48,1.409-.128.424.354.481.984.128,1.409Z"/></svg>
  
  

    const [currentQuestion, setCurrent] = useState(0);

  // to keep track of the selected answer
    const [selected, setSelected] = useState('');

    const [result, setResult] = useState();

    // change the selected option
    function handleChange(event){
      setSelected(event.target.value);
    }


    // function to check the correct answer
    function handleClick(event){
      // prevent default behavior
      event.preventDefault();
      // check the correct answer
      const x = selected === question[currentQuestion].correctAnswer;
      if(x){
        setResult(correct);
        setScore(prevScore => prevScore + 1);
      } 
      else setResult(wrong);
      checkAnswer(currentQuestion, x);
      
    }

    // move to the next question
    function nextQ(){
      setResult();
      // if user reached to the end of question list then display score
      if (currentQuestion >= question.length - 1)
      {
        setFinished([false, true]);
      } else
      {
        setCurrent(prevCurrent => prevCurrent + 1);
      }
      
        
      
      // setCurrent(prevCurrent => prevCurrent >= question.length - 1? 0 : prevCurrent + 1);
    }
    // go back to the previous question
    function previousQ(){
      setCurrent(prevCurrent => prevCurrent <= 0 ? 0 : prevCurrent - 1);
      if (isFinished[1] == true) {
        setCurrent(0);
        setFinished([true, false]);
      setScore(0);
      setBackgrounds(backgrounds.fill("white"))
    }
    }

    

    const [backgrounds, setBackgrounds] = useState(Array(question.length).fill("white"));
    function checkAnswer(index, isCorrect){
      // Create a new array based on the current backgrounds
      const newBackgrounds = [...backgrounds];
    
      // Update the background color for the specific question
      newBackgrounds[index] = isCorrect ? "#00DF82" : "red";
    
      // Set the new backgrounds array to state
      setBackgrounds(newBackgrounds);
    }

    const [isFinished, setFinished] = useState([true, false]);

    
    
  

    return(

    question.length == 0?  <></> : 
    <section className='quiz--container'>

      <div className='quizz--header'>
      {location.state.name}
      </div>

      <div className='quiz-board'>
        <div className='quiz'>
            {isFinished[0] &&
            <form className='question-form'>
                <div className="question--header">
                <h3>Question {currentQuestion + 1}</h3>
                {result}
                </div>
                
                <p>{question[currentQuestion].question}</p>
                <hr></hr>
                <ul>
                    <li>
                    <input type='radio' name='option' value='a' checked = {selected === 'a'} onChange={handleChange}/>
                    <label htmlFor='option'>{question[currentQuestion].optionA}</label>
                    </li>
                    <li>
                    <input type='radio' name='option' value='b' checked = {selected === 'b'} onChange={handleChange}/>
                    <label htmlFor='option'>{question[currentQuestion].optionB}</label>
                    </li>
                    <li>
                    <input type='radio' name='option' value='c' checked = {selected === 'c'} onChange={handleChange}/>
                    <label htmlFor='option'>{question[currentQuestion].optionC}</label>
                    </li>
                    <li>
                    <input type='radio' name='option' value='d' checked = {selected === 'd'} onChange={handleChange}/>
                    <label htmlFor='option'>{question[currentQuestion].optionD}</label>
                    </li>
                </ul>
                <button className='btn btn-check' onClick={handleClick}>check</button>
            </form>
            }
            {
              isFinished[1] &&
              <div className='question-form score'>
                {score >= question.length / 2?
                <>
                <h2>Congratulations!</h2>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100" height="100" fill='#ffe600'><path d="M15.091,15.997c6.571-.033,8.909-3.513,8.909-6.497,0-1.677-1.188-3.08-2.765-3.419,.136-.386,.254-.741,.333-1.01,.353-1.193,.125-2.453-.626-3.458-.766-1.024-1.937-1.612-3.214-1.612H6.271c-1.277,0-2.449,.588-3.215,1.612-.751,1.005-.979,2.266-.626,3.458,.08,.269,.197,.624,.334,1.011-1.577,.339-2.764,1.742-2.764,3.419,0,2.984,2.339,6.464,8.909,6.497,.056,.302,.091,.61,.091,.924v3.079c0,1.826-1.536,1.992-2,2h-1c-.553,0-1,.447-1,1s.447,1,1,1h12c.553,0,1-.447,1-1s-.447-1-1-1h-.992c-.472-.008-2.008-.174-2.008-2v-3.08c0-.313,.035-.621,.091-.923Zm5.361-8.007c.017,0,.031,.01,.048,.01,.827,0,1.5,.673,1.5,1.5,0,2.034-1.609,4.197-6.036,4.47,.221-.299,.474-.576,.762-.821,1.739-1.478,2.933-3.453,3.726-5.159ZM2,9.5c0-.827,.673-1.5,1.5-1.5,.017,0,.031-.009,.047-.01,.794,1.706,1.988,3.681,3.727,5.159,.288,.245,.541,.521,.762,.821-4.427-.273-6.036-2.436-6.036-4.47Zm7.792,.263c-.264-.182-.375-.518-.27-.822l.519-1.606-1.366-1c-.327-.24-.398-.699-.158-1.026,.138-.188,.358-.3,.591-.3h1.681l.511-1.593c.129-.387,.547-.595,.934-.466,.22,.073,.393,.246,.466,.466l.51,1.593h1.681c.405,0,.734,.328,.734,.734,0,.235-.112,.455-.301,.593l-1.366,1,.519,1.606c.124,.386-.088,.8-.475,.925-.224,.072-.469,.032-.659-.107l-1.343-.988-1.344,.987c-.256,.191-.606,.192-.864,.004Z"/></svg>
                <p className='stu-score'>{question.length} / <span style={{color: "#00DF82"}}>{score}</span></p>
                </>
                :
                <>
                <h2>Try Again ☹</h2>
                <p className='stu-score'>{question.length} / <span style={{color: "red"}}>{score}</span></p>
                </>
                }
                


              </div>
            }
            <div className='nav-btn'>
            <button className='btn btn-check' onClick={previousQ}>Previous</button>
            <button className='btn btn-green' onClick={nextQ}>Next Page</button>
            </div>
        </div>

        <div className='nav'>
        <h3>QUIZ NAVIGATION</h3>
        <div className="grid-nav">
          {question.map((q, index) => 
          <div className="page" 
          onClick={()=>setCurrent(index)} 
          style={{backgroundColor: backgrounds[index]}}>
            {index + 1}
            </div>)}
        </div>
        </div>
      </div>

    </section>
    )
}
export default Quizz;

/*
  let location = useLocation();
  const [question, setQuestion] = useState([]);
  
  
  const url = `http://localhost:8080/Test/questions/${location.state.course}`;

    useEffect(() => {
      
        fetch(url)
        .then(res => res.json())
        .then((result) => {
          setQuestion(result)
        })
      },[]);
*/