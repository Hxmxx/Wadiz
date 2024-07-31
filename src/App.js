import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg';

function App() {
  return (
    <div className="App">
      <header>
        <div className='header-left'>
          <ul>
            <li className='coming-soon'>오픈예정</li>
            <li className='coming-soon'>펀딩 +</li>
            <li className='coming-soon'>프리오더</li>
            <li className='coming-soon'>스토어</li>
            <li><button className='coming-soon'>더보기</button></li>
          </ul>
        </div>
        <div className='util'>
          <button className='header-right'>로그인</button>
          <button className='header-right'>회원가입</button>
          <div className='project-made'>프로젝트 만들기</div>
        </div>
      </header>
      <div className='MainDesktop_headContent'>
        <form className='searchBox' action='' method='get'>
          <input className='searchTxt' type='text' name='' placeholder='새로운 일상이 필요하신가요?'></input>
          <button className='searchBtn' type='submit'>
            <div> {SearchIcon} </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
