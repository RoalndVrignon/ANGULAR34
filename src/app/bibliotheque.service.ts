import { Injectable } from '@angular/core';

interface biblio{
  id:string;
  name:string;
  
}

@Injectable()
export class BibliothequeService {

  constructor() { }
  getBibli()
  {
    return BIBLI;
  }

}

const BIBLI:biblio[]=JSON.parse(JSON.stringify([
 {
   
    "id": 33,
    "name": "Arcade"
  },
  {
    "id": 32,
    "name": "Indie"
  },
  {
    "id": 31,
    "name": "Adventure"
  },
  {
    "id": 30,
    "name": "Pinball"
  },
  {
    "id": 26,
    "name": "Quiz/Trivia"
  },
  {
    "id": 25,
    "name": "Hack and slash/Beat 'em up"
  },
  {
    "id": 24,
    "name": "Tactical"
  },
  {
    "id": 16,
    "name": "Turn-based strategy (TBS)"
  },
  {
    "id": 15,
    "name": "Strategy"
  },
  {
    "id": 14,
    "name": "Sport"
  },
  {
    "id": 13,
    "name": "Simulator"
  },
  {
    "id": 12,
    "name": "Role-playing (RPG)"
  },
  {
    "id": 11,
    "name": "Real Time Strategy (RTS)"
  },
  {
    "id": 10,
    "name": "Racing"
  },
  {
    "id": 9,
    "name": "Puzzle"
  },
  {
    "id": 8,
    "name": "Platform"
  },
  {
    "id": 7,
    "name": "Music"
  },
  {
    "id": 5,
    "name": "Shooter"
  },
  {
    "id": 4,
    "name": "Fighting"
  },
  {
    "id": 2,
    "name": "Point-and-click"
  }
]));