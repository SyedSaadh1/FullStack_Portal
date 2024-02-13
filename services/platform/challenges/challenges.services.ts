import challenges from "./data/ui-challenges.min.json";

const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

class UIChallenges {
  private allChallenges = challenges;

  constructor() {
  }

  get list() {
    return sampleSize(this.allChallenges, 30);
  }

  get courseList() {
    return this.allChallenges.filter(({ title }) => title?.toLowerCase().includes('page'))

  }
}

export default new UIChallenges();

