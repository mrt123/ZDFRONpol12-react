import { render } from "@testing-library/react";
import AlbumImage from "../AlbumImage";

describe("AlbumImage", () => {
  test("url = lalala", () => {
    const { container } = render(<AlbumImage imageUrl="lalala" />);
    expect(container).toMatchSnapshot();
  });

  test("url = undefined", () => {
    const { container } = render(<AlbumImage imageUrl={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
