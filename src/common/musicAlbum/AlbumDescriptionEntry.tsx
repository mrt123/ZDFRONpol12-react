const descriptionEntryStyle = {
  margin: "5px",
  fontSize: "11px",
};

interface AlbumDescriptionEntryProps {
  value: string | number | null;
}

const AlbumDescriptionEntry = ({ value }: AlbumDescriptionEntryProps) => {
  if (value === null) return null;

  return <div style={descriptionEntryStyle}>{value}</div>;
};

export default AlbumDescriptionEntry;
