import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";

const albumStyle = {
  display: "flex",
  margin: "20px",
  fontSize: "12px",
  background: "#353a45",
};

const numberStyle = {
  padding: "5px",
  background: "black",
};

export interface AlbumProps {
  number: number;
  coverImageUrl: string;
  description: AlbumDescriptionProps;
}

const Album = ({ number, coverImageUrl, description }: AlbumProps) => {
  return (
    <div style={albumStyle} data-testid="Album">
      <div style={numberStyle}>{number}</div>
      <AlbumImage imageUrl={coverImageUrl} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
        releaseDate={description.releaseDate}
      />
    </div>
  );
};

export default Album;
