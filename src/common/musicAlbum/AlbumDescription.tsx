import AlbumDescriptionEntry from "./AlbumDescriptionEntry";

const albumDescriptionStyles = {
  margin: "8px",
};

export interface AlbumDescriptionProps {
  title: string;
  artist: string;
  price?: number;
  releaseDate?: Date;
}

const AlbumDescription = ({ title, artist, price }: AlbumDescriptionProps) => {
  let priceToDisplay;
  if (price) priceToDisplay = price;
  else priceToDisplay = "N/A";

  // TODO: if releaseDate is present (display it as last AlbumDescriptionEntry)?

  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry value={title} />
      <AlbumDescriptionEntry value={artist} />
      <AlbumDescriptionEntry value={priceToDisplay} />
    </div>
  );
};

export default AlbumDescription;
