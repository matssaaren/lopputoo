
import './Gallery.css';
import Card from '../components/Card';
function Gallery() {
  return (
    <div >
      <h1 className='bottom-line'>Collection of diffrent Cybernetics</h1>
      <div className="gallery-container">
        <Card 
          title="Beautiful Landscape"
          description="A breathtaking view of the mountains during sunset."
          imageUrl="https://placehold.co/400"
          sourceUrl="https://example.com/landscape"
        />
        <Card 
          title="City Lights"
          description="The vibrant lights of the city at night."
          imageUrl="https://placehold.co/400"
          sourceUrl="https://example.com/landscape"
        />
        <Card 
          title="Ocean Waves"
          description="Waves crashing on the shore, a perfect beach day."
          imageUrl="https://placehold.co/400"
          sourceUrl="https://example.com/landscape"
        />
      </div>
    </div>
  );
}

export default Gallery;