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
    const { container } = render(<ItunesAlbumList />);

    const loaderElements = container.getElementsByClassName("loader");

    await waitFor(
      () => {
        return expect(loaderElements.length === 0).toEqual(true);
      },
      {
        timeout: 13000,
      }
    );

    // ASSERT
    // We do not test snapshot here, we avoid complex snapshot comparison. Imagine this is the most complex component in a large application.
    expect(container).toMatchSnapshot();
  });
});
