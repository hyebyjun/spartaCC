import Form from '../components/form/Form';
import Header from '../components/header/Header';

function TodoList({ onCreate }) {
  return (
    <>
      <Header />
      <Form onCreate={onCreate} />
    </>
  );
}

export default TodoList;
