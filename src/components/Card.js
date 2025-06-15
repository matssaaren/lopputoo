import './Card.css'

function Card({ title, description, imageUrl, sourceUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" width="350px"/>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {sourceUrl && (
          <a href={sourceUrl} className="card-link" target="_blank" rel="noopener noreferrer">
          {sourceUrl}
        </a>
        )}
      </div>
    </div>
  );
}

export default Card;