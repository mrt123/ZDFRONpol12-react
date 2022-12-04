import { render } from "@testing-library/react";
import AlbumDescriptionEntry from "../AlbumDescriptionEntry";

test("AlbumDescriptionEntry", () => {
  const { container } = render(
    <AlbumDescriptionEntry value="testowy item albumu" />
  );

  expect(container).toMatchSnapshot();
});
