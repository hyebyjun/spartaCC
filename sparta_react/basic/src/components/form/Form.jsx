import { useRef } from 'react';
import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const titleInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className='form'>
      <div>
        <label htmlFor='title'>제목</label>
        <input
          ref={titleInput}
          name='title'
          value={state.title}
          onChange={(event) => {
            setState({
              title: event.target.value,
              content: state.content,
            });
          }}
          type='text'
        />
        <label htmlFor='content'>내용</label>
        <input
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={(event) => {
            setState({
              ...state,
              content: event.target.value,
            });
          }}
          type='text'
        />
        <button>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
