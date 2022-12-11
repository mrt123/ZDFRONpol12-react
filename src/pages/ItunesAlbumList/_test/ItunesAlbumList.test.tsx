import { render, waitFor, screen } from "@testing-library/react";
import ItunesAlbumList from "../ItunesAlbumList";
import { ItunesAlbumDataEntry } from "../itunesDataTransformer";

describe("ItunesAlbumList", () => {
  it("matches snapshot when data is loading", () => {
    const { container } = render(<ItunesAlbumList />);
    expect(container).toMatchSnapshot();
  });

  it("fires a single fetch, and renders two albums", async () => {
    // ARRANGE
    const rawAlbumEntires: ItunesAlbumDataEntry[] = [
      {
        "im:name": {
          label: "Slim Shady",
        },
        "im:artist": {
          label: "Eminem",
        },
        "im:releaseDate": {
          label: "2000/04/18",
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

    const fakeHttpResponse = {
      json: () => Promise.resolve(rawAlbumTestData),
    };

    const fakeFetch = () => Promise.resolve(fakeHttpResponse);

    window.fetch = jest.fn(fakeFetch) as jest.Mock;

    // ACT
    const { container, getByText } = render(<ItunesAlbumList />);

    const loaderElements = container.getElementsByClassName("loader");

    // TODO: test takes 1000+ ms to finish?
    await waitFor(() => expect(loaderElements.length === 0).toEqual(true), {
      timeout: 2000,
    });

    // ASSERT
    // We do not test snapshot here, we avoid complex snapshot comparison. Imagine this is the most complex component in a large application.
    expect(window.fetch).toHaveBeenCalledTimes(1);

    expect(container.firstChild).toHaveTextContent("Top Albums");

    const albumElements = screen.getAllByTestId("Album");
    expect(albumElements.length).toEqual(2);

    const slimShadyAlbumElement = getByText("Slim Shady");
    expect(slimShadyAlbumElement).toBeInTheDocument();

    const killingMeSoftlyAlbumElement = getByText("Killing me softly");
    expect(killingMeSoftlyAlbumElement).toBeInTheDocument();

    expect(albumElements[0].contains(slimShadyAlbumElement)).toEqual(true);
    expect(albumElements[1].contains(killingMeSoftlyAlbumElement)).toEqual(
      true
    );

    expect(albumElements[0]).toHaveTextContent("99000000");
    expect(albumElements[1]).toHaveTextContent("N/A");

    expect(albumElements[0]).toHaveTextContent("Slim Shady");
    expect(albumElements[1]).toHaveTextContent("Fugees");
  });
});
