import './styles.css';

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
  // selector() {
  //   this.selector = refs.timer;
  // }
  start() {
    setInterval(() => {
      const pad = value => {
        if (value.lenght > 2) {
          String(value).padStart(3, '0');
        }
        String(value).padStart(2, '0');
        return value;
      };
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      const updateClockface = () => {
        const days = pad(String(Math.floor(time / (1000 * 60 * 60 * 24))));
        console.log(days);
        const hours = pad(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
        console.log(`${hours}:${mins}:${secs}`);
        console.log(time);
      };
      updateClockface(time);
    }, 1000);
  }
}
const counter = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
counter.start();
