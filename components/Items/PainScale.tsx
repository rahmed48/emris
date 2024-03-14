import React, { useEffect } from "react";
import "./pain.scss";

const PainScale = () => {
  // useEffect(() => {
  //   const handleHover = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     const siblings = Array.from(target.parentElement!.children);
  //     siblings.forEach((sibling) => {
  //       if (sibling !== target) {
  //         sibling.classList.add("pain-scale__level--active");
  //       }
  //     });
  //   };

  //   const handleMouseOut = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     const siblings = Array.from(target.parentElement!.children);
  //     siblings.forEach((sibling) => {
  //       if (sibling !== target) {
  //         sibling.classList.remove("pain-scale__level--active");
  //       }
  //     });
  //   };

  //   const handleClick = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     const siblings = Array.from(target.parentElement!.children);
  //     siblings.forEach((sibling) => {
  //       sibling.classList.remove(
  //         "pain-scale__level--selected",
  //         "pain-scale__level--blink"
  //       );
  //     });
  //     target.classList.add(
  //       "pain-scale__level--selected",
  //       "pain-scale__level--blink"
  //     );
  //     siblings.forEach((sibling) => {
  //       if (sibling !== target) {
  //         sibling.classList.add(
  //           "pain-scale__level--selected",
  //           "pain-scale__level--blink"
  //         );
  //       }
  //     });
  //     target.addEventListener("animationend", () => {
  //       target.classList.remove("pain-scale__level--blink");
  //     });
  //   };

  //   const levels = document.querySelectorAll(".pain-scale__level");
  //   levels.forEach((level) => {
  //     level.addEventListener("mouseenter", handleHover);
  //     level.addEventListener("mouseleave", handleMouseOut);
  //     level.addEventListener("click", handleClick);
  //   });

  //   return () => {
  //     levels.forEach((level) => {
  //       level.removeEventListener("mouseenter", handleHover);
  //       level.removeEventListener("mouseleave", handleMouseOut);
  //       level.removeEventListener("click", handleClick);
  //     });
  //   };
  // }, []);

  return (
    <div className="wrapper">
      <ul className="pain-scale">
        <li className="pain-scale__level pain-scale__level--1">
          <span className="pain-scale__number">1</span>
        </li>
        <li className="pain-scale__level pain-scale__level--2">
          <span className="pain-scale__number">2</span>
        </li>
        <li className="pain-scale__level pain-scale__level--3">
          <span className="pain-scale__number">3</span>
        </li>
        <li className="pain-scale__level pain-scale__level--4">
          <span className="pain-scale__number">4</span>
        </li>
        <li className="pain-scale__level pain-scale__level--5">
          <span className="pain-scale__number">5</span>
        </li>
        <li className="pain-scale__level pain-scale__level--6">
          <span className="pain-scale__number">6</span>
        </li>
        <li className="pain-scale__level pain-scale__level--7">
          <span className="pain-scale__number">7</span>
        </li>
        <li className="pain-scale__level pain-scale__level--8">
          <span className="pain-scale__number">8</span>
        </li>
        <li className="pain-scale__level pain-scale__level--9">
          <span className="pain-scale__number">9</span>
        </li>
        <li className="pain-scale__level pain-scale__level--10">
          <span className="pain-scale__number">10</span>
        </li>
      </ul>
      <ul className="legend">
        <li className="legend__beginning">Mild</li>
        <li className="legend__end">Very severe</li>
      </ul>
    </div>
  );
};

export default PainScale;
