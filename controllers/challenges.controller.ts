import UserService from "services/user.services";
import { Controller } from "./controller";
import type { IUser } from "types/user.types";

import challenges from "@/curriculum/practise-tasks/techiedelight.json";
import { Challenge } from "@/types/challenge.types";


class ChallengesController extends Controller {

  private allChallenges: Challenge[] = []

  constructor() {
    super();
    this.allChallenges = challenges.map(challenge => {
      const id = challenge.link.split(`problem=`)[1];  //"https://www.techiedelight.com/?problem=TwoSum",
      return {
        id,
        ...challenge
      }
    })
  }

  async getAll(): Promise<Challenge[]> {
    return Promise.resolve(this.allChallenges);
  }

  async getById(id: string): Promise<Challenge | undefined> {
    return Promise.resolve(this.allChallenges.find(challenge => challenge.id === id));
  }

}

export default new ChallengesController();