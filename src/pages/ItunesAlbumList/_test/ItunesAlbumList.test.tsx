import { render, waitFor } from "@testing-library/react";
import ItunesAlbumList from "../ItunesAlbumList";
import { ItunesAlbumDataEntry } from "../itunesDataTransformer";

describe("ItunesAlbumList", () => {
  it("matches snapshot when data is loading", () => {
    const { container } = render(<ItunesAlbumList />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot after data is loaded", async () => {
    // ARRANGE
    const rawAlbumEntires: ItunesAlbumDataEntry[] = [
      {
        "im:name": {
          label: "Album1",
        },
        "im:artist": {
          label: "Michael Jackson",
        },
        "im:releaseDate": {
          label: "1999/05/01",
        },
        "im:price": {
          attributes: {
            amount: "99000000",
          },
          label: "99000000",
        },
      },
      {
        "im:name": {
          label: "Killing me softly",
        },
        "im:artist": {
          label: "Fugees",
        },
        "im:releaseDate": {
          label: "1996/05/27",
        },
      },
    ];

    const rawAlbumTestData = {
      feed: {
        entry: rawAlbumEntires,
      },
    };

    window.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(rawAlbumTestData),
      })
    ) as jest.Mock;

    // ACT
    const { container, getByText, getAllByTestId } = render(
      <ItunesAlbumList />
    );

    const loaderElements = container.getElementsByClassName("loader");

    // TODO: test takes 1000+ ms to finish?
    await waitFor(
      () => {
        return expect(loaderElements.length === 0).toEqual(true);
      },
      { timeout: 2000 }
    );

    // ASSERT
    // We do not test snapshot here, we avoid complex snapshot comparison. Imagine this is the most complex component in a large application.

    expect(container.firstChild).toHaveTextContent("Top Albums");

    const albumElements = getAllByTestId("Album");
    expect(albumElements.length).toEqual(2);

    const firstAlbumELement = getByText("Album1");
    expect(firstAlbumELement).toBeInTheDocument();

    // TODO: 2nd album element

    // TODO: check differences in description of 2 albums
  });
});
