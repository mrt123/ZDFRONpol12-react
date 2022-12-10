import { render, waitFor } from "@testing-library/react";
import ItunesAlbumList from "../ItunesAlbumList";

describe("ItunesAlbumList", () => {
  it("matches snapshot when data is loading", () => {
    const { container } = render(<ItunesAlbumList />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot after data is loaded", async () => {
    const { container } = render(<ItunesAlbumList />);

    const loaderElements = container.getElementsByClassName("loader");

    console.log("pobralismy loaderElements z containera");

    await waitFor(() => {
      console.log(
        "sprawdzamy ile jest loaderow. Obecnie jest ...",
        loaderElements.length
      );
      return expect(loaderElements.length === 0);
    });

    expect(container).toMatchSnapshot();
  });
});
