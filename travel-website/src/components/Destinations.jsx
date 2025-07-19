function Destinations() {
  const places = [
    { id: 1, name: "Bali", desc: "Tropical paradise", img: "https://picsum.photos/300/200?1" },
    { id: 2, name: "Switzerland", desc: "Alps and lakes", img: "https://picsum.photos/300/200?2" },
    { id: 3, name: "Japan", desc: "Culture & tech", img: "https://picsum.photos/300/200?3" },
  ];

  return (
    <section id="destinations">
      <h2>Top Destinations</h2>
      <div className="cards">
        {places.map(place => (
          <div key={place.id} className="card">
            <img src={place.img} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
