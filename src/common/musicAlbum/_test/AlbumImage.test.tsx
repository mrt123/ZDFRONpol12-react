import { render } from "@testing-library/react";
import AlbumImage from "../AlbumImage";

describe("AlbumImage", () => {
  it("url = lalala", () => {
    const { container } = render(<AlbumImage imageUrl="lalala" />);
    expect(container).toMatchSnapshot();
  });

  it("url = undefined", () => {
    const { container } = render(<AlbumImage imageUrl={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
