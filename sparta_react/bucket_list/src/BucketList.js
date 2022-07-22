const BucketList = ({ list }) => {
  return (
    <div>
      {list.map((list, index) => (
        <div className='list-item' key={index}>
          {list}
        </div>
      ))}
    </div>
  );
};

export default BucketList;
