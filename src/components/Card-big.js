import './Card-big.css'

function BigCard({ title, description, imageUrl }) {
  return (
    <div className="big-card">
      <img src={imageUrl} alt={title} className="big-card-image" />
      <div className="big-card-content">
        <h2 className="big-card-title">{title}</h2>
        <p className="big-card-description">{description}</p>
        <a
          href="https://github.com/matssaaren"
          className="big-card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default BigCard;