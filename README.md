# Chanced Storefront

Chanced Storefront operates as a dynamic rewrite proxy, enabling the publication of server-side content on chanced.com. It serves predefined routes through a Next.js application or defaults to the casino Single Page Application (SPA) for all unspecified routes.

## Defined Content Routes

### `/games/${gameId}`

This endpoint dynamically generates marketing pages for individual games based on predefined data located in `/public/content/${gameId}`.

#### Data Content Requirements for Game Pages:

For successful rendering of a game page (e.g., `/games/big-bass-splash`), two specific files must be placed within the content directory:

- A `gameData.json` file
- A `description.md` file

##### **gameData.json**

This JSON file is crucial for each game's presentation and must include:

- **Name**: Name of the game.
- **Provider**: Name of the provider and a link to their marketing page on chanced.com.
- **Edge**: The game's house edge.
- **Tile Image Path**: URL of the game's thumbnail image.
- **Tags**: A list of descriptive tags about the game, each with relevant links.
- **Big Wins**: A summary of significant winning amounts.
- **Lucky Wins**: A summary of wins characterized by high multipliers.

Example JSON for "Big Bass Splash":

```json
{
    "name": "Big Bass Splash",
    "provider": {
        "name": "Pragmatic",
        "link": "blab"
    },
    "tileImagePath": "https://mediumrare.imgix.net/98801318d067e57c3d22f9453d970d5278bf253365600c4d93841b9c994bf82a?&dpr=2&format=auto&auto=format&q=70",
    "edge": 3,
    "tags": [
        {"label": "Bonus Buy", "link": "https://www.chanced.com/group/bonus-buy"},
        {"label": "Drops & Wins", "link": "https://www.chanced.com/casino/group/drops-wins"},
        {"label": "Pragmatic Play", "link": "https://www.chanced.com/casino/group/pragmatic-play"},
        {"label": "Recommended Games", "link": "https://www.chanced.com/casino/group/recommended-slots"},
        {"label": "Sea", "link": "https://www.chanced.com/casino/group/sea"},
        {"label": "Slots", "link": "https://www.chanced.com/casino/group/slots"}
    ],
    "bigWins": [
        {"rank": 1, "date": "August 23, 2023", "bet": 9000000000000, "mutiplier": 18, "payout": 158670000000000},
        {"rank": 2, "date": "August 23, 2023", "bet": 498200003, "mutiplier": 15, "payout": 7274218249},
        {"rank": 3, "date": "August 23, 2023", "bet": 4658000, "mutiplier": 1074, "payout": 158670000000000}
    ],
    "luckyWins": [
        {"rank": 1, "date": "August 23, 2023", "bet": 9000000000000, "mutiplier": 18, "payout": 158670000000000},
        {"rank": 2, "date": "August 23, 2023", "bet": 498200003, "mutiplier": 15, "payout": 7274218249},
        {"rank": 3, "date": "August 23, 2023", "bet": 4658000, "mutiplier": 1074, "payout": 158670000000000}
    ]
}
```

##### **description.md**

This Markdown file will be rendered as the game's description on the webpage. For details on Markdown formatting, refer to [CommonMark](https://commonmark.org/).