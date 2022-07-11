import Clock from './Clock';

function ClocksList(props) {
  const { clocks, onDelete } = props;

  const elements = clocks.map((item) => {
    const { id } = item;
    return (
      <Clock
        className='clock'
        key={id}
        item={item}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return (
    <div className='d-flex flex-wrap justify-content-around'>{elements}</div>
  );
}

export default ClocksList;
