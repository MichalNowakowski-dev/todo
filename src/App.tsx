import { useEffect, useState } from "react";

const imgs = [
  { id: 1, url: "src\\assets\\img-q.jpg" },
  { id: 2, url: "src\\assets\\img-w.jpg" },
  { id: 3, url: "src\\assets\\img-e.jpg" },
  { id: 4, url: "src\\assets\\img-r.jpg" },
  { id: 5, url: "src\\assets\\img-t.jpg" },
];

function App() {
  const [active, setActive] = useState(1);
  const maxActiveNumber = imgs[imgs.length - 1].id;
  const [activeImgUrl] = imgs.filter((img) => img.id === active);
  const renderButtons = () =>
    imgs.map((img) => {
      if (active === img.id)
        return (
          <button
            key={img.id}
            onClick={() => {
              setActive(img.id);
            }}
            className="img_btn-circle active"
          ></button>
        );
      else
        return (
          <button
            key={img.id}
            onClick={() => {
              setActive(img.id);
            }}
            className="img_btn-circle"
          ></button>
        );
    });
  const changeSlide = (side: string) => {
    if (side === "prev") {
      if (active !== 1) {
        setActive((prev) => prev - 1);
      } else {
        setActive(maxActiveNumber);
      }
    } else {
      if (active < maxActiveNumber) {
        setActive((prev) => prev + 1);
      } else {
        setActive(1);
      }
    }
  };

  useEffect(() => {
    const newIntervalId: any = setInterval(() => {
      setActive((preActive) =>
        preActive < maxActiveNumber ? preActive + 1 : 1
      );
    }, 2000);
    return () => {
      clearInterval(newIntervalId);
    };
  }, [maxActiveNumber]);

  return (
    <div className="container">
      <div className="slider">
        <img src={activeImgUrl.url} alt="water" />
        <div className="buttons_container">{renderButtons()}</div>
        <button
          onClick={() => {
            changeSlide("prev");
          }}
          className="img_btn-prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </button>
        <button
          onClick={() => {
            changeSlide("next");
          }}
          className="img_btn-next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
