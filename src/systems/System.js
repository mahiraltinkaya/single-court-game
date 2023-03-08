const Operations = (entities, { timer, start }, event) => {
  if (event?.keyCode === 32) {
    entities.map((x) => (x.pause = !x.pause));
  }

  if (!entities.some((x) => x.pause)) {
    entities = entities.filter((element) => {
      if (element.name === "Ball" && element.start === true) {
        if (element.left) {
          element.style["left"] -= element.speed;
        } else {
          element.style["left"] += element.speed;
        }

        if (element.top) {
          element.style["top"] -= element.speed;
        } else {
          element.style["top"] += element.speed;
        }

        if (element.style.left < 0) {
          element.left = false;
        }

        if (element.style.left >= element.dimensions.width - 20) {
          element.left = true;
        }

        if (element.style.top < 0) {
          element.top = false;
        }
      }

      if (!element.pause && element.name === "Bar1") {
        if (
          (event?.key === "d" || event?.key === "ArrowRight") &&
          element.style["left"] < element.dimensions.width - 120
        ) {
          element.style["left"] += 35;
        }
        if (
          (event?.key === "a" || event?.key === "ArrowLeft") &&
          element.style["left"] > 0
        ) {
          element.style["left"] -= 35;
        }
      }

      // if (!element.pause && element.name === "Bar2") {
      //   if (
      //     event?.key === "ArrowRight" &&
      //     element.style["left"] < element.dimensions.width - 120
      //   ) {
      //     element.style["left"] += 25;
      //   }
      //   if (event?.key === "ArrowLeft" && element.style["left"] > 0) {
      //     element.style["left"] -= 25;
      //   }
      // }

      return element;
    });

    const bar = entities.find((x) => x.name === "Bar1");
    const ball = entities.find((x) => x.name === "Ball");
    const layout = entities.find((x) => x.name === "Layout");
    const joystick = entities.find((x) => x.name === "Joystick");

    if (
      joystick.direction === "right" &&
      bar.style["left"] < bar.dimensions.width - 120
    ) {
      bar.style["left"] += 35;
    }

    if (joystick.direction === "left" && bar.style["left"] > 0) {
      bar.style["left"] -= 35;
    }

    joystick.direction = null;

    if (
      ball.style.left > bar.style.left &&
      ball.style.left < bar.style.left + 120 &&
      ball.style.top >= bar.style.top - 20 &&
      layout.over === false
    ) {
      ball.top = true;
      ball.speed += 0.2;
      layout.point += 10;
    }

    if (
      (ball.style.left < bar.style.left ||
        ball.style.left > bar.style.left + 120) &&
      ball.style.top > bar.style.top
    ) {
      ball.start = false;
      layout.over = true;
    }

    entities = entities.map((element) => {
      if (element.name === bar.name) {
        return bar;
      }

      if (element.name === ball.name) {
        return ball;
      }

      if (element.name === layout.name) {
        return layout;
      }

      if (element.name === joystick.name) {
        return joystick;
      }

      return element;
    });
  }

  return entities;
};

export { Operations };
