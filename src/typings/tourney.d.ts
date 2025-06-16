declare module 'tourney' {
  interface Team {
    id: number;
    name: string;
  }

  interface Match {
    round: number;
    team1: number;
    team2: number;
  }

  interface TourneyOptions {
    data: {
      teams: Team[];
      matches: Match[];
    };
    container: string;
  }

  export default class Tourney {
    constructor(options: TourneyOptions);
    render(): void;
  }
}
