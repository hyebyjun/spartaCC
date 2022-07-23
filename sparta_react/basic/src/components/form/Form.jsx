import { useRef } from 'react';
import { useState } from 'react';

const Form = ({ onCreate }) => {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const titleInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    if (state.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if (state.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.title, state.content);
    alert('등록되었습니다.');
    setState({
      title: '',
      content: '',
    });
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
            handleChangeState(event)
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
            handleChangeState(event)
            setState({
              ...state,
              content: event.target.value,
            });
          }}
          type='text'
        />
        <button onClick={handleSubmit}>추가하기</button>
      </div>
    </div>
  );
};

export default Form;
