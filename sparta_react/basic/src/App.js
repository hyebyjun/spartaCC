import { useRef } from 'react';
import { useState } from 'react';
import Form from './components/form/Form';
import TodoList from './pages/TodoList';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(1);

  const onCreate = (title, content) => {
    const newItem = {
      title,
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  console.log(data);

  return (
    <>
      {/* <Form onCreate={onCreate} /> */}
      <TodoList onCreate={onCreate} />
    </>
  );
}

export default App;
