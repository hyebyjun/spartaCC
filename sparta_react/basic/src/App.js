function App() {
  return (
    <div>
      <div className='working'>
        <h2>Working...</h2>
        <div id='card'>
          <h3>리액트 공부하기</h3>
          <p>리액트 기초를 공부해봅시다.</p>
          <button>삭제하기</button>
          <button>완료</button>
        </div>
      </div>
      <div className='done'>
        <h2>Done..!</h2>
        <div id='card'>
          <h3>리액트 공부하기</h3>
          <p>리액트 기초를 공부해봅시다.</p>
          <button>삭제하기</button>
          <button>완료</button>
        </div>
      </div>
    </div>
  );
}

export default App;
