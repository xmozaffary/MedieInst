export const createElement = (data: any) => {
  const movieContainer = document.getElementById(
    "movieContainer"
  ) as HTMLDivElement;
  movieContainer.className = "s";
  for (let i = 0; i < data.length; i++) {
    const container = document.createElement("div") as HTMLDivElement;

    const movieImg = document.createElement("img") as HTMLImageElement;
    const movieTitle = document.createElement("p") as HTMLParagraphElement;
    const movieYear = document.createElement("p") as HTMLParagraphElement;

    movieImg.src = data[i].Poster;
    movieTitle.innerText = data[i].Title;
    movieYear.innerText = data[i].Year;

    movieContainer?.appendChild(container);
    container?.appendChild(movieImg);
    container?.appendChild(movieTitle);
    container?.appendChild(movieYear);
  }
};
