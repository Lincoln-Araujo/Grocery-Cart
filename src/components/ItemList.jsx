import './components.css';

export default function ItemList({ items, onItemClick }) {
  const handleClick = ({ target }) => {
    const item = target.value;
    onItemClick(item);
  };
  return (
    <div className='item-list'>
      {items.map((item, index) => (
        <button className="item" value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
