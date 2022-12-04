interface AlbumImageProps {
  imageUrl: string | undefined;
}

const getCoverImageStyle = (imageUrl: string | undefined) => {
  return {
    width: "100px",
    height: "100px",
    background: "blue",
    backgroundImage: imageUrl === undefined ? "none" : `url("${imageUrl}")`,
    backgroundSize: "contain",
  };
};

const AlbumImage = ({ imageUrl }: AlbumImageProps) => {
  return <div style={getCoverImageStyle(imageUrl)}></div>;
};

export default AlbumImage;
