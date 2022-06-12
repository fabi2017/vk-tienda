import "../estilos/VideoHero.css";

function VideoHero() {
  return (
    <div className="fondo">
      <div className="contVideo">
        <video
          className="video"
          autoPlay
          muted
          loop
          src="../demo.mp4"
        />
      <p className="texto">Tienda VK</p> 
      </div>
    </div>
  );
}

export default VideoHero;
