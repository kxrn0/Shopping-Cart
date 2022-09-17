import "./image.css";

export default function Image({ src, alt }) {
    return (
        <div className="image">
            <span className="background" style={{ backgroundImage: `url(${src})` }}></span>
            <img src={src} alt={alt} />
        </div>
    );
}
