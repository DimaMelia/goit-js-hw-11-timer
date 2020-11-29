class CountdownTimer {
    constructor( {selector, targetDate} ) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate.getTime();
        this.refs = {
            days: this.selector.querySelector('span[data-value="days"]'),
            hours: this.selector.querySelector('span[data-value="hours"]'),
            mins: this.selector.querySelector('span[data-value="mins"]'),
            secs: this.selector.querySelector('span[data-value="secs"]'),
        };
    }

    start() {
        this.updateClockFace(this.getTimeComponents());
        setInterval(() => this.updateClockFace(this.getTimeComponents()), 1000);    
    }

    updateClockFace ({ days, hours, mins, secs }) {
        this.refs.hours.textContent = `${hours}`;
        this.refs.days.textContent = `${days}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;
    }

    getTimeComponents () {
        const time = this.targetDate - Date.now();
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
      }
}

    
const timer = new CountdownTimer({selector: '#timer-1', targetDate: new Date('Mar 30, 2021') });

timer.start();




