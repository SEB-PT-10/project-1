# project-1

## Project Planning

- [Project board](https://github.com/orgs/SEB-PT-10/projects/1/views/1)

<img width="1972" height="1109" alt="wireframe" src="https://github.com/user-attachments/assets/58bf72a8-fbc6-4a31-bdce-799a27ab1154" />

### Game Description
A choose your own adventure game with a sailor moon/horror theme.
The user has to choose the right path until they reach the winning endpoint.  If the choose the wrong path they lose.

### Sprint 1

Goal: The player can move through 3 different sets of choices, with 2 ending in a loss and 1 ending in a win.

Start: 16 Nov
End: 24 Nov

### CSS Credits

The animated glowing button CSS was created with the assistance of [ChatGPT](https://chatgpt.com) by OpenAI and customized for this project.

### Sprite Credits

Character sprites were generated with the assistance of [ChatGPT](https://chatgpt.com) by OpenAI and customized for this project.


### Code Graveyard

```css
  --midnight: #211c36;
  --plum: #3d2d50;
  --jade: #376454;
  --pink: #f2a3c7;
  --lavender: #c7b4ee;
  --gold: #ebc879;
  --ivory: #fff1e7;
  --berry: #ad4e70;
```

### Choices Map

```bash
THE VELVET GROVE
│
├── START: Moonpetal Village
│   │
│   ├── Intro:
│   │   The player receives a magical charm/heirloom.
│   │   That night, a spirit appears and calls them into the forest.
│   │
│   └── First Choice:
│       ├── A. Follow the spirit immediately
│       │   └── Gain early spirit trust
│       │
│       └── B. Ask the village elder first
│           └── Gain more human-world lore
│
├── CHAPTER 1: The Whispering Grove
│   │
│   ├── Problem:
│   │   The flowers are wilting and little sprite creatures are panicking.
│   │
│   ├── Main Encounter:
│   │   A suspicious masked spirit guards the path.
│   │
│   └── Player Choice:
│       ├── A. Calm the spirit
│       │   ├── Cute solution
│       │   ├── Less combat
│       │   └── Spirit path +1
│       │
│       ├── B. Fight the spirit
│       │   ├── Harder tone
│       │   ├── More RPG battle feel
│       │   └── Courage path +1
│       │
│       └── C. Investigate the corruption first
│           ├── Unlock secret clue
│           └── Mystery path +1
│
├── CHAPTER 2: Lantern Marsh
│   │
│   ├── Problem:
│   │   Friendly lantern spirits are leading travelers astray.
│   │
│   ├── Creepy Reveal:
│   │   The marsh shows illusions based on fear and memory.
│   │
│   └── Player Choice:
│       ├── A. Trust the glowing lantern child
│       │   ├── Cute but risky
│       │   └── May unlock hidden route
│       │
│       ├── B. Follow your charm instead
│       │   ├── Safer
│       │   └── Miss some secret lore
│       │
│       └── C. Break the illusion
│           ├── Leads to battle
│           └── Reveals darker truth about the grove
│
├── CHAPTER 3: Shrine of Mirrors
│   │
│   ├── Problem:
│   │   The shrine reflects possible versions of the player.
│   │
│   ├── Big Story Reveal:
│   │   The spirits recognize the player because of a family/spiritual connection.
│   │
│   └── Player Choice:
│       ├── A. Accept the spirit connection
│       │   ├── More magical ending path
│       │   └── Spirit alliance +1
│       │
│       ├── B. Reject it and stay human
│       │   ├── More grounded ending path
│       │   └── Human alliance +1
│       │
│       └── C. Search for the whole truth
│           ├── Hardest route
│           └── Unlocks true ending path
│
├── FINAL CHAPTER: Heart of the Velvet Grove
│   │
│   ├── Truth:
│   │   The corruption is tied to grief, forgetting, or a broken bond
│   │   between the human world and spirit world.
│   │
│   ├── Final Boss / Final Encounter:
│   │   The Thorn Queen / The Weeping Guardian / The Corrupted Spirit Mother
│   │
│   └── Final Choice:
│       ├── A. Purify the spirit
│       │   ├── Soft magical ending
│       │   └── Best for cute + eerie blend
│       │
│       ├── B. Defeat the spirit completely
│       │   ├── Darker ending
│       │   └── Forest survives, but something is lost
│       │
│       └── C. Merge both worlds / restore the bond
│           ├── Hardest ending to unlock
│           └── True ending
│
└── ENDINGS
    │
    ├── ENDING 1: Sweet Ending
    │   You save the grove and return home, forever changed.
    │
    ├── ENDING 2: Eerie Ending
    │   You win, but the forest still whispers your name.
    │
    ├── ENDING 3: Spirit Ending
    │   You become the grove’s new guardian.
    │
    └── TRUE ENDING: Velvet Dawn
        You restore harmony between village and spirit realm.



                    [Start: Moonpetal Village]
                               |
                 ---------------------------------
                 |                               |
     [Follow Spirit]                    [Ask Elder First]
                 \                               /
                  \                             /
                   ------[Whispering Grove]------
                               |
               -------------------------------------
               |                  |                |
        [Calm Spirit]      [Fight Spirit]   [Investigate]
               |                  |                |
                   --------[Lantern Marsh]---------
                               |
               -------------------------------------
               |                  |                |
        [Trust Lantern]   [Follow Charm]   [Break Illusion]
                               |
                   -------[Shrine of Mirrors]-------
                               |
               -------------------------------------
               |                  |                |
      [Accept Connection] [Reject Connection] [Seek Truth]
                               |
                   ------[Heart of the Grove]------
                               |
               -------------------------------------
               |                  |                |
          [Purify]           [Defeat]        [Restore Bond]
               |                  |                |
          Sweet Ending        Eerie Ending      True Ending
```