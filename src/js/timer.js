const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
  timer: document.querySelector('#timer-1'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  assign(days, hours, mins, secs) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }

  updateClockface = time => {
    const days = this.pad(
      String(Math.abs(Math.floor(time / (1000 * 60 * 60 * 24)))),
    );
    const hours = this.pad(
      Math.abs(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    );
    const mins = this.pad(
      Math.abs(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
    );
    const secs = this.pad(Math.abs(Math.floor((time % (1000 * 60)) / 1000)));

    this.assign(days, hours, mins, secs);
  };

  pad(value) {
    let step = 2;
    if (value.lenght > 2) step = 3;
    return String(value).padStart(step, '0');
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = currentTime - this.targetDate;
      this.updateClockface(time);
    }, 1000);
  }
}
const counter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

counter.start();
