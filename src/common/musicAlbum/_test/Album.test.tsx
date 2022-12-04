import { render } from "@testing-library/react";
import Album from "../Album";
import { AlbumDescriptionProps } from "../AlbumDescription";

test("Album test", () => {
  const albumDescription: AlbumDescriptionProps = {
    title: "artysta",
    artist: "Kamil WG",
  };
  const { container } = render(
    <Album
      number={0}
      coverImageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/rap-trap-mixtape-cover-art-template-design-42d0a5596257ec487408e1039eac95d7_screen.jpg?ts=1580857100"
      description={albumDescription}
    />
  );

  expect(container).toMatchSnapshot();
});
