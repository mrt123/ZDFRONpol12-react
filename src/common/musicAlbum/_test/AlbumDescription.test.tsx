import { render } from "@testing-library/react";
import AlbumDescription from "../AlbumDescription";

test("AlbumDescription", () => {
  const { container } = render(
    <AlbumDescription title="Mam 8 motywacji!" artist="Kamil WG" />
  );
  expect(container).toMatchSnapshot();
});
