interface ClockInterface {
  currentTime: Date;
  setTime:(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}

interface ClockConstructor {
  new (hour: number, minute: number);
}

// class Clockit implements ClockConstructor {
//  currentTime: Date;
//  constructor(h: number, m: number) { }
// }
// -> returns error, interface ClockConstructor has not been implemented
