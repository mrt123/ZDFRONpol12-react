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
  // we use &nbsp; so that JSDOM serializer would not void close div tag
  // TODO: remove this and instead force JSDOM to close tag properly in test setup
  return <div style={getCoverImageStyle(imageUrl)}>&nbsp;</div>;
};

export default AlbumImage;
