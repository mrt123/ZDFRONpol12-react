import { daysAgo } from "../dates";
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

const AlbumDescription = ({
  title,
  artist,
  price,
  releaseDate,
}: AlbumDescriptionProps) => {
  let priceToDisplay;
  if (price) priceToDisplay = price;
  else priceToDisplay = "N/A";

  const releaseDateToDisplay = releaseDate ? daysAgo(releaseDate) : null;
  const daysSinceRelease =
    releaseDateToDisplay === null
      ? null
      : `released ${releaseDateToDisplay} days ago`;

  return (
    <div style={albumDescriptionStyles}>
      <AlbumDescriptionEntry value={title} />
      <AlbumDescriptionEntry value={artist} />
      <AlbumDescriptionEntry value={priceToDisplay} />
      <AlbumDescriptionEntry value={daysSinceRelease} />
    </div>
  );
};

export default AlbumDescription;
