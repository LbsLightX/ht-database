/**
 * HelloTalk Gift Database & Vault (v1.0.4)
 */

(() => {
  'use strict';

  const STORAGE_KEY = 'hellotalk_database_v3';
  const BATCH_SIZE = 60;

  const DEFAULT_SEED = {
  "version": "1.0.4",
  "lastExported": 1792741008104,
  "categories": [
    {
      "id": "cat-basic",
      "name": "Basic",
      "order": 1,
      "description": ""
    },
    {
      "id": "cat-emotion",
      "name": "Emotion",
      "order": 2,
      "description": ""
    },
    {
      "id": "cat-modern",
      "name": "Modern",
      "order": 3,
      "description": ""
    },
    {
      "id": "cat-art",
      "name": "Art",
      "order": 4,
      "description": ""
    },
    {
      "id": "cat-fantasy",
      "name": "Fantasy",
      "order": 5,
      "description": ""
    },
    {
      "id": "cat-apparel",
      "name": "Apparel",
      "order": 6,
      "description": ""
    },
    {
      "id": "cat-lives",
      "name": "Lives",
      "order": 7,
      "description": ""
    },
    {
      "id": "cat-home",
      "name": "Home",
      "order": 8,
      "description": ""
    },
    {
      "id": "cat-delicious",
      "name": "Delicious",
      "order": 9,
      "description": ""
    },
    {
      "id": "cat-celebration",
      "name": "Celebration",
      "order": 10,
      "description": ""
    }
  ],
  "series": [
    {
      "id": "ser-basic-echoes-of-youth",
      "categoryId": "cat-basic",
      "name": "Echoes of Growth",
      "badge": "Collection",
      "description": "Echoes of Youth collection series under Basic.",
      "displayOrder": 1
    },
    {
      "id": "ser-basic-live-streamer-s-trilogy",
      "categoryId": "cat-basic",
      "name": "Live Streamer's Tribute",
      "badge": "Collection",
      "description": "Live Streamer's Trilogy collection series under Basic.",
      "displayOrder": 2
    },
    {
      "id": "ser-basic-gummy-party",
      "categoryId": "cat-basic",
      "name": "Gummy Party",
      "badge": "Collection",
      "description": "Gummy Party collection series under Basic.",
      "displayOrder": 3
    },
    {
      "id": "ser-basic-creator-s-gifts",
      "categoryId": "cat-basic",
      "name": "Creator's gifts",
      "badge": "Collection",
      "description": "Creator's gifts collection series under Basic.",
      "displayOrder": 4
    },
    {
      "id": "ser-basic-happy-anniversary",
      "categoryId": "cat-basic",
      "name": "HAPPY ANNIVERSARY!",
      "badge": "Special",
      "description": "HAPPY ANNIVERSARY collection series under Basic.",
      "displayOrder": 5
    },
    {
      "id": "ser-basic-happy-birthday",
      "categoryId": "cat-basic",
      "name": "HAPPY BIRTHDAY!",
      "badge": "Special",
      "description": "HAPPY BIRTHDAY! collection series under Basic.",
      "displayOrder": 6
    },
    {
      "id": "ser-emotion-luminous-heart-s-melody",
      "categoryId": "cat-emotion",
      "name": "Luminous Heart's Whisper",
      "badge": "Romance",
      "description": "Luminous Heart's Melody collection series under Emotion.",
      "displayOrder": 7
    },
    {
      "id": "ser-emotion-romantic-vow",
      "categoryId": "cat-emotion",
      "name": "Romantic Vow",
      "badge": "Collection",
      "description": "Romantic Vow collection series under Emotion.",
      "displayOrder": 8
    },
    {
      "id": "ser-emotion-collections-of-hearts",
      "categoryId": "cat-emotion",
      "name": "Collections of Heart Flutters",
      "badge": "Romance",
      "description": "Collections of Hearts collection series under Emotion.",
      "displayOrder": 9
    },
    {
      "id": "ser-emotion-echoes-of-love",
      "categoryId": "cat-emotion",
      "name": "Echoes of Love",
      "badge": "Romance",
      "description": "Echoes of Love collection series under Emotion.",
      "displayOrder": 10
    },
    {
      "id": "ser-modern-back-to-the-millennium",
      "categoryId": "cat-modern",
      "name": "Back to the Millennium",
      "badge": "Collection",
      "description": "Back to the Millennium collection series under Modern.",
      "displayOrder": 11
    },
    {
      "id": "ser-modern-roaring-engine",
      "categoryId": "cat-modern",
      "name": "Roaring engine",
      "badge": "Collection",
      "description": "Roaring engine collection series under Modern.",
      "displayOrder": 12
    },
    {
      "id": "ser-modern-ready-to-go",
      "categoryId": "cat-modern",
      "name": "Ready to Go",
      "badge": "Collection",
      "description": "Ready to Go collection series under Modern.",
      "displayOrder": 13
    },
    {
      "id": "ser-modern-the-road-to-fame",
      "categoryId": "cat-modern",
      "name": "The Road to Fame",
      "badge": "Apex",
      "description": "The Road to Fame collection series under Modern.",
      "displayOrder": 14
    },
    {
      "id": "ser-art-wonderland-dream",
      "categoryId": "cat-art",
      "name": "Wonderland Dreamscape",
      "badge": "Collection",
      "description": "Wonderland Dream collection series under Art.",
      "displayOrder": 15
    },
    {
      "id": "ser-art-global-story-club",
      "categoryId": "cat-art",
      "name": "Global Story Club",
      "badge": "Collection",
      "description": "Global Story Club collection series under Art.",
      "displayOrder": 16
    },
    {
      "id": "ser-art-a-little-square-board",
      "categoryId": "cat-art",
      "name": "A Little Square Big Player",
      "badge": "Collection",
      "description": "A Little Square Board collection series under Art.",
      "displayOrder": 17
    },
    {
      "id": "ser-art-world-famous-paintings",
      "categoryId": "cat-art",
      "name": "World-famous paintings",
      "badge": "Collection",
      "description": "World-famous paintings collection series under Art.",
      "displayOrder": 18
    },
    {
      "id": "ser-art-eastern-musical-instrument",
      "categoryId": "cat-art",
      "name": "Eastern musical instruments",
      "badge": "Art",
      "description": "Eastern musical instrument collection series under Art.",
      "displayOrder": 19
    },
    {
      "id": "ser-fantasy-glimmering-hidden-paradise",
      "categoryId": "cat-fantasy",
      "name": "Glimmering Hidden Realm",
      "badge": "Collection",
      "description": "Glimmering Hidden Paradise collection series under Fantasy.",
      "displayOrder": 20
    },
    {
      "id": "ser-fantasy-starry-river-journey",
      "categoryId": "cat-fantasy",
      "name": "Starry River Journey",
      "badge": "Collection",
      "description": "Starry River Journey collection series under Fantasy.",
      "displayOrder": 21
    },
    {
      "id": "ser-fantasy-wandering-in-wonderland",
      "categoryId": "cat-fantasy",
      "name": "Wandering in Wonderland",
      "badge": "Collection",
      "description": "Wandering in Wonderland collection series under Fantasy.",
      "displayOrder": 22
    },
    {
      "id": "ser-fantasy-cyber-frenzy-ii",
      "categoryId": "cat-fantasy",
      "name": "Cyber Frenzy II",
      "badge": "Cyber",
      "description": "Cyber Frenzy II collection series under Fantasy.",
      "displayOrder": 23
    },
    {
      "id": "ser-fantasy-cyber-frenzy-i",
      "categoryId": "cat-fantasy",
      "name": "Cyber Frenzy I",
      "badge": "Cyber",
      "description": "Cyber Frenzy I collection series under Fantasy.",
      "displayOrder": 24
    },
    {
      "id": "ser-apparel-select-world-war",
      "categoryId": "cat-apparel",
      "name": "Select World Wardrobe I - Asia",
      "badge": "Collection",
      "description": "Select World War... collection series under Apparel.",
      "displayOrder": 25
    },
    {
      "id": "ser-apparel-mysterious-europe",
      "categoryId": "cat-apparel",
      "name": "Mysterious European Treasure",
      "badge": "Collection",
      "description": "Mysterious Europe... collection series under Apparel.",
      "displayOrder": 26
    },
    {
      "id": "ser-mvf6u22o-c2v0nf",
      "categoryId": "cat-apparel",
      "name": "Select World Wardrobe II - Americas",
      "badge": "",
      "description": "Select World Wardrobe II - Americas collection series under Apparel.",
      "displayOrder": 27
    },
    {
      "id": "ser-mvf6vc76-q06lzc",
      "categoryId": "cat-apparel",
      "name": "Select World Wardrobe III",
      "badge": "",
      "description": "Select World Wardrobe III collection series under Apparel.",
      "displayOrder": 28
    },
    {
      "id": "ser-lives-doggo-squad",
      "categoryId": "cat-lives",
      "name": "Doggo Squad",
      "badge": "Event",
      "description": "Doggo Squad collection series under Lives.",
      "displayOrder": 29
    },
    {
      "id": "ser-lives-butterfly-series",
      "categoryId": "cat-lives",
      "name": "Butterfly Series",
      "badge": "Collection",
      "description": "Butterfly Series collection series under Lives.",
      "displayOrder": 30
    },
    {
      "id": "ser-lives-four-seasons-in-bloom",
      "categoryId": "cat-lives",
      "name": "Four Seasons in Bloom",
      "badge": "Collection",
      "description": "Four Seasons in Bloom collection series under Lives.",
      "displayOrder": 31
    },
    {
      "id": "ser-lives-humanity-s-adorable",
      "categoryId": "cat-lives",
      "name": "Humanity's Adorable Friends",
      "badge": "Collection",
      "description": "Humanity's Adorable collection series under Lives.",
      "displayOrder": 32
    },
    {
      "id": "ser-lives-paws-of-attraction",
      "categoryId": "cat-lives",
      "name": "Paws of Attraction",
      "badge": "Collection",
      "description": "Paws of Attraction collection series under Lives.",
      "displayOrder": 33
    },
    {
      "id": "ser-lives-springtime-wishes",
      "categoryId": "cat-lives",
      "name": "Springtime Wishes",
      "badge": "Collection",
      "description": "Springtime Wishes collection series under Lives.",
      "displayOrder": 34
    },
    {
      "id": "ser-lives-spring-wildflowers",
      "categoryId": "cat-lives",
      "name": "Spring Wildflower News",
      "badge": "Collection",
      "description": "Spring Wildflowers collection series under Lives.",
      "displayOrder": 35
    },
    {
      "id": "ser-lives-star-wish-cat-land",
      "categoryId": "cat-lives",
      "name": "Star Wish Cat Language",
      "badge": "Collection",
      "description": "Star Wish Cat Land collection series under Lives.",
      "displayOrder": 36
    },
    {
      "id": "ser-lives-a-heart-full-of-felicity",
      "categoryId": "cat-lives",
      "name": "A heart full of feline spirit",
      "badge": "Romance",
      "description": "A heart full of felicity collection series under Lives.",
      "displayOrder": 37
    },
    {
      "id": "ser-lives-starry-flowers",
      "categoryId": "cat-lives",
      "name": "Starry Flowers",
      "badge": "Collection",
      "description": "Starry Flowers collection series under Lives.",
      "displayOrder": 38
    },
    {
      "id": "ser-lives-panda",
      "categoryId": "cat-lives",
      "name": "Panda",
      "badge": "Collection",
      "description": "Panda collection series under Lives.",
      "displayOrder": 39
    },
    {
      "id": "ser-home-autumn-delights",
      "categoryId": "cat-home",
      "name": "Autumn Delights",
      "badge": "Collection",
      "description": "Autumn Delights collection series under Home.",
      "displayOrder": 40
    },
    {
      "id": "ser-home-cosmic-galaxy",
      "categoryId": "cat-home",
      "name": "Cosmic Galaxy",
      "badge": "Collection",
      "description": "Cosmic Galaxy collection series under Home.",
      "displayOrder": 41
    },
    {
      "id": "ser-home-ticket-to-the-wonderland",
      "categoryId": "cat-home",
      "name": "Ticket to the Wonders",
      "badge": "Collection",
      "description": "Ticket to the Wonderland collection series under Home.",
      "displayOrder": 42
    },
    {
      "id": "ser-home-world-garden-stamp",
      "categoryId": "cat-home",
      "name": "World Garden Stamp",
      "badge": "Collection",
      "description": "World Garden Stamp collection series under Home.",
      "displayOrder": 43
    },
    {
      "id": "ser-home-beautiful-earth",
      "categoryId": "cat-home",
      "name": "Beautiful Earth",
      "badge": "Collection",
      "description": "Beautiful Earth collection series under Home.",
      "displayOrder": 44
    },
    {
      "id": "ser-home-travel-tickets",
      "categoryId": "cat-home",
      "name": "Travel tickets",
      "badge": "Collection",
      "description": "Travel tickets collection series under Home.",
      "displayOrder": 45
    },
    {
      "id": "ser-home-world-cultural-heritage",
      "categoryId": "cat-home",
      "name": "World Cultural Heritage",
      "badge": "Collection",
      "description": "World Cultural Heritage collection series under Home.",
      "displayOrder": 46
    },
    {
      "id": "ser-home-cherry-blossom",
      "categoryId": "cat-home",
      "name": "Cherry Blossom",
      "badge": "Collection",
      "description": "Cherry Blossom collection series under Home.",
      "displayOrder": 47
    },
    {
      "id": "ser-home-lotus-dreamscape",
      "categoryId": "cat-home",
      "name": "Lotus Dreamscape",
      "badge": "Collection",
      "description": "Lotus Dreamscape collection series under Home.",
      "displayOrder": 48
    },
    {
      "id": "ser-home-four-seasons",
      "categoryId": "cat-home",
      "name": "Four seasons",
      "badge": "Collection",
      "description": "Four seasons collection series under Home.",
      "displayOrder": 49
    },
    {
      "id": "ser-delicious-chocolate-feast",
      "categoryId": "cat-delicious",
      "name": "Chocolate Feast",
      "badge": "Collection",
      "description": "Chocolate Feast collection series under Delicious.",
      "displayOrder": 50
    },
    {
      "id": "ser-delicious-pixel-ice-cream",
      "categoryId": "cat-delicious",
      "name": "Pixel Ice Cream",
      "badge": "Collection",
      "description": "Pixel Ice Cream collection series under Delicious.",
      "displayOrder": 51
    },
    {
      "id": "ser-delicious-global-ice-cream-festival",
      "categoryId": "cat-delicious",
      "name": "Global Ice Cream Fair",
      "badge": "Special",
      "description": "Global Ice Cream Festival collection series under Delicious.",
      "displayOrder": 52
    },
    {
      "id": "ser-delicious-afternoon-tea-time",
      "categoryId": "cat-delicious",
      "name": "Afternoon tea time",
      "badge": "Collection",
      "description": "Afternoon tea time collection series under Delicious.",
      "displayOrder": 53
    },
    {
      "id": "ser-delicious-desserts",
      "categoryId": "cat-delicious",
      "name": "Desserts",
      "badge": "Collection",
      "description": "Desserts collection series under Delicious.",
      "displayOrder": 54
    },
    {
      "id": "ser-delicious-alcoholic-beverages",
      "categoryId": "cat-delicious",
      "name": "Alcoholic beverages",
      "badge": "Collection",
      "description": "Alcoholic beverages collection series under Delicious.",
      "displayOrder": 55
    },
    {
      "id": "ser-delicious-cocktail-journey",
      "categoryId": "cat-delicious",
      "name": "Cocktail Journey",
      "badge": "Collection",
      "description": "Cocktail Journey collection series under Delicious.",
      "displayOrder": 56
    },
    {
      "id": "ser-delicious-flavors-of-the-american-continent",
      "categoryId": "cat-delicious",
      "name": "Flavors of the Americas",
      "badge": "Collection",
      "description": "Flavors of the American Continent collection series under Delicious.",
      "displayOrder": 57
    },
    {
      "id": "ser-delicious-chinese-flavor-i",
      "categoryId": "cat-delicious",
      "name": "Chinese Flavor I",
      "badge": "Collection",
      "description": "Chinese Flavor I collection series under Delicious.",
      "displayOrder": 58
    },
    {
      "id": "ser-celebration-go-germany",
      "categoryId": "cat-celebration",
      "name": "Go Germany!",
      "badge": "Event",
      "description": "Go Germany! collection series under Celebration.",
      "displayOrder": 59
    },
    {
      "id": "ser-celebration-oktoberfest",
      "categoryId": "cat-celebration",
      "name": "Oktoberfest",
      "badge": "Special",
      "description": "Oktoberfest collection series under Celebration.",
      "displayOrder": 60
    },
    {
      "id": "ser-celebration-happy-film-festival",
      "categoryId": "cat-celebration",
      "name": "Happy Film Festival",
      "badge": "Special",
      "description": "Happy Film Festival collection series under Celebration.",
      "displayOrder": 61
    },
    {
      "id": "ser-celebration-childhood-dreamland",
      "categoryId": "cat-celebration",
      "name": "Childhood Dreamland",
      "badge": "Collection",
      "description": "Childhood Dreamland collection series under Celebration.",
      "displayOrder": 62
    },
    {
      "id": "ser-celebration-mid-autumn-festival",
      "categoryId": "cat-celebration",
      "name": "Mid-Autumn Festival I",
      "badge": "Special",
      "description": "Mid-Autumn Festival collection series under Celebration.",
      "displayOrder": 63
    },
    {
      "id": "ser-celebration-qixi-festival",
      "categoryId": "cat-celebration",
      "name": "Qixi Festival",
      "badge": "Special",
      "description": "Qixi Festival collection series under Celebration.",
      "displayOrder": 64
    },
    {
      "id": "ser-celebration-new-year-greetings",
      "categoryId": "cat-celebration",
      "name": "New Year Greetings",
      "badge": "Collection",
      "description": "New Year Greetings collection series under Celebration.",
      "displayOrder": 65
    },
    {
      "id": "ser-celebration-glory-commemoration",
      "categoryId": "cat-celebration",
      "name": "Glory Commemoration",
      "badge": "Apex",
      "description": "Glory Commemoration collection series under Celebration.",
      "displayOrder": 66
    },
    {
      "id": "ser-celebration-8-legendary-goals",
      "categoryId": "cat-celebration",
      "name": "8 Legendary Goals",
      "badge": "Collection",
      "description": "8 Legendary Goals collection series under Celebration.",
      "displayOrder": 67
    },
    {
      "id": "ser-celebration-dragon-boat-festival",
      "categoryId": "cat-celebration",
      "name": "Dragon Boat Festival",
      "badge": "Special",
      "description": "Dragon Boat Festival collection series under Celebration.",
      "displayOrder": 68
    },
    {
      "id": "ser-celebration-football-match-iv",
      "categoryId": "cat-celebration",
      "name": "Football match IV",
      "badge": "Event",
      "description": "Football match IV collection series under Celebration.",
      "displayOrder": 69
    },
    {
      "id": "ser-celebration-football-match-iii",
      "categoryId": "cat-celebration",
      "name": "Football match III",
      "badge": "Event",
      "description": "Football match III collection series under Celebration.",
      "displayOrder": 70
    },
    {
      "id": "ser-celebration-go-netherlands",
      "categoryId": "cat-celebration",
      "name": "Go Netherlands!",
      "badge": "Event",
      "description": "Go Netherlands! collection series under Celebration.",
      "displayOrder": 71
    },
    {
      "id": "ser-celebration-go-usa",
      "categoryId": "cat-celebration",
      "name": "Go USA!",
      "badge": "Event",
      "description": "Go USA! collection series under Celebration.",
      "displayOrder": 72
    },
    {
      "id": "ser-celebration-go-france",
      "categoryId": "cat-celebration",
      "name": "Go France!",
      "badge": "Event",
      "description": "Go France! collection series under Celebration.",
      "displayOrder": 73
    },
    {
      "id": "ser-celebration-go-england",
      "categoryId": "cat-celebration",
      "name": "Go England!",
      "badge": "Event",
      "description": "Go England! collection series under Celebration.",
      "displayOrder": 74
    },
    {
      "id": "ser-celebration-go-brazil",
      "categoryId": "cat-celebration",
      "name": "Go Brazil!",
      "badge": "Event",
      "description": "Go Brazil! collection series under Celebration.",
      "displayOrder": 75
    },
    {
      "id": "ser-celebration-go-argentina",
      "categoryId": "cat-celebration",
      "name": "Go Argentina!",
      "badge": "Event",
      "description": "Go Argentina! collection series under Celebration.",
      "displayOrder": 76
    },
    {
      "id": "ser-celebration-love-of-the-champions",
      "categoryId": "cat-celebration",
      "name": "Love of the champion",
      "badge": "Romance",
      "description": "Love of the champions collection series under Celebration.",
      "displayOrder": 77
    },
    {
      "id": "ser-mvf6nq6u-6nth15",
      "categoryId": "cat-celebration",
      "name": "Football star roster",
      "badge": "",
      "description": "Football star roster collection series under Celebration.",
      "displayOrder": 78
    },
    {
      "id": "ser-celebration-football-keychain-ii",
      "categoryId": "cat-celebration",
      "name": "Football Keychain II",
      "badge": "Event",
      "description": "Football Keychain II collection series under Celebration.",
      "displayOrder": 79
    },
    {
      "id": "ser-celebration-football-keychain-i",
      "categoryId": "cat-celebration",
      "name": "Football Keychain I",
      "badge": "Event",
      "description": "Football Keychain I collection series under Celebration.",
      "displayOrder": 80
    },
    {
      "id": "ser-celebration-football-match",
      "categoryId": "cat-celebration",
      "name": "Football match II",
      "badge": "Event",
      "description": "Football match collection series under Celebration.",
      "displayOrder": 81
    },
    {
      "id": "ser-celebration-football-match-ii",
      "categoryId": "cat-celebration",
      "name": "Football match I",
      "badge": "Event",
      "description": "Football match II collection series under Celebration.",
      "displayOrder": 82
    },
    {
      "id": "ser-celebration-songkran-festival",
      "categoryId": "cat-celebration",
      "name": "Songkran Festival",
      "badge": "Special",
      "description": "Songkran Festival collection series under Celebration.",
      "displayOrder": 83
    },
    {
      "id": "ser-celebration-venice-carnival",
      "categoryId": "cat-celebration",
      "name": "Venice Carnival",
      "badge": "Carnival",
      "description": "Venice Carnival collection series under Celebration.",
      "displayOrder": 84
    },
    {
      "id": "ser-celebration-easter",
      "categoryId": "cat-celebration",
      "name": "Easter",
      "badge": "Collection",
      "description": "Easter collection series under Celebration.",
      "displayOrder": 85
    },
    {
      "id": "ser-celebration-rare-zodiac-set",
      "categoryId": "cat-celebration",
      "name": "Rare Zodiac Set",
      "badge": "Zodiac",
      "description": "Rare Zodiac Set collection series under Celebration.",
      "displayOrder": 86
    },
    {
      "id": "ser-mvf6lli1-91ioig",
      "categoryId": "cat-celebration",
      "name": "Nowruz",
      "badge": "",
      "description": "Nowruz collection series under Celebration.",
      "displayOrder": 87
    },
    {
      "id": "ser-celebration-eid-al-fitr",
      "categoryId": "cat-celebration",
      "name": "Eid al-Fitr",
      "badge": "Special",
      "description": "Eid al-Fitr collection series under Celebration.",
      "displayOrder": 88
    },
    {
      "id": "ser-celebration-holi",
      "categoryId": "cat-celebration",
      "name": "Holi",
      "badge": "Collection",
      "description": "Holi collection series under Celebration.",
      "displayOrder": 89
    },
    {
      "id": "ser-celebration-st-patrick-s-day",
      "categoryId": "cat-celebration",
      "name": "St. Patrick's Day",
      "badge": "Collection",
      "description": "St. Patrick's Day collection series under Celebration.",
      "displayOrder": 90
    },
    {
      "id": "ser-celebration-april-fools-day",
      "categoryId": "cat-celebration",
      "name": "April Fools' Day",
      "badge": "Collection",
      "description": "April Fools' Day collection series under Celebration.",
      "displayOrder": 91
    },
    {
      "id": "ser-celebration-winter-reunion-festival",
      "categoryId": "cat-celebration",
      "name": "Winter Reunion Festival",
      "badge": "Special",
      "description": "Winter Reunion Festival collection series under Celebration.",
      "displayOrder": 92
    },
    {
      "id": "ser-celebration-epiphany",
      "categoryId": "cat-celebration",
      "name": "Epiphany",
      "badge": "Collection",
      "description": "Epiphany collection series under Celebration.",
      "displayOrder": 93
    },
    {
      "id": "ser-celebration-constellation-gifts",
      "categoryId": "cat-celebration",
      "name": "Constellation Gifts",
      "badge": "Collection",
      "description": "Constellation Gifts collection series under Celebration.",
      "displayOrder": 94
    },
    {
      "id": "ser-celebration-christmas",
      "categoryId": "cat-celebration",
      "name": "Christmas",
      "badge": "Collection",
      "description": "Christmas collection series under Celebration.",
      "displayOrder": 95
    },
    {
      "id": "ser-mvkkzea4-45g1fv",
      "categoryId": "cat-art",
      "name": "Realm of Celestial Romance",
      "badge": "",
      "description": "Realm of Celestial Romance Series under Art",
      "displayOrder": 96
    },
    {
      "id": "ser-mvklc187-5u1nb8",
      "categoryId": "cat-fantasy",
      "name": "Atlast of Dreambuilt Wonders",
      "badge": "",
      "description": "Atlast of Dreambuilt Wonders. Collection series under fantasy.",
      "displayOrder": 97
    },
    {
      "id": "ser-mvklqmfk-4jgf94",
      "categoryId": "cat-lives",
      "name": "Underwater world",
      "badge": "",
      "description": "Underwater world Collection Series Under Lives",
      "displayOrder": 98
    },
    {
      "id": "ser-mvkma262-gwvl83",
      "categoryId": "cat-home",
      "name": "Rendezvous in Autumn",
      "badge": "",
      "description": "Rendezvous in Autumn Collection series under Home",
      "displayOrder": 99
    },
    {
      "id": "ser-mvkmlz9i-nw2g2g",
      "categoryId": "cat-delicious",
      "name": "World Dessert Shop",
      "badge": "",
      "description": "World Dessert Shop Collection series under delicious",
      "displayOrder": 100
    },
    {
      "id": "ser-mvknpiw8-hy7a88",
      "categoryId": "cat-celebration",
      "name": "Halloween I",
      "badge": "",
      "description": "Halloween I Collection series under Celebration.",
      "displayOrder": 101
    },
    {
      "id": "ser-mvknpiw9-yqfu51",
      "categoryId": "cat-celebration",
      "name": "Halloween II",
      "badge": "",
      "description": "Halloween II Collection series under Celebration.",
      "displayOrder": 102
    },
    {
      "id": "ser-mvknpiw9-eqbk5q",
      "categoryId": "cat-celebration",
      "name": "Halloween III",
      "badge": "",
      "description": "Halloween III Collection series under Celebration.",
      "displayOrder": 103
    },
    {
      "id": "ser-mvknpiw9-2ftyyo",
      "categoryId": "cat-celebration",
      "name": "Letters from the...",
      "badge": "",
      "description": "Letters from the... Collection series under Celebration.",
      "displayOrder": 104
    }
  ],
  "items": [
    {
      "id": "item-mvkmvpap-nvhnx7",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Lapis Cake",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739616721
    },
    {
      "id": "item-mvkmv73d-jrih7g",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Turon",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739593129
    },
    {
      "id": "item-mvkmu9g8-6oxo4n",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Crème Brûlée",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739549528
    },
    {
      "id": "item-mvkmtap9-xu6poa",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Pan de Muerto",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739504494
    },
    {
      "id": "item-mvkms6oy-cogqb3",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Cannoli",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739452642
    },
    {
      "id": "item-mvkmrng2-lmtea3",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Osmanthus Jelly",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739427698
    },
    {
      "id": "item-mvkmqk0v-l41ijr",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Daifuku",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739376607
    },
    {
      "id": "item-mvkmp7ma-3ehl9m",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Taiyaki",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739313874
    },
    {
      "id": "item-mvkmojwg-7vlqzw",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Lemon Tart",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739283136
    },
    {
      "id": "item-mvkmnwk6-ifhk9e",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Egg Yolk Pastry",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739252886
    },
    {
      "id": "item-mvkmn4j4-tqpve6",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Pandan Cake",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739216561
    },
    {
      "id": "item-mvkmjfb2-inzsm9",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Lift chestnut",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739043902
    },
    {
      "id": "item-mvkmiw1g-2raypu",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Autumn Letter",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739018932
    },
    {
      "id": "item-mvkmibg7-xc3bq9",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Autumn Whisper Hourglass",
      "baseValue": 159,
      "marketWorth": 159,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738992247
    },
    {
      "id": "item-mvkmhf8i-dwin43",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Pick Persimmons",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738950498
    },
    {
      "id": "item-mvkmgr5g-dn52a1",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Roast Chestnut",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738919284
    },
    {
      "id": "item-mvkmga79-74qfxn",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Fall Bench",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738897317
    },
    {
      "id": "item-mvkmfsa6-8ol9cu",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Cat by window",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739103564
    },
    {
      "id": "item-mvkmf6o8-wz8w5n",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "A Leaf Knows Autumn",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739105100
    },
    {
      "id": "item-mvkmei7c-aibbbd",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Poker Castle",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739111581
    },
    {
      "id": "item-mvkmdi3i-xfybjc",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Autumn Home",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738770620
    },
    {
      "id": "item-mvkmb5zm-alqeb3",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Autumn Ode",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738677191
    },
    {
      "id": "item-mvklzavd-d6y9nl",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "A Cherished Letter",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738123765
    },
    {
      "id": "item-mvklyony-hmp45e",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Dream Dol",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738076255
    },
    {
      "id": "item-mvkly9h5-rlhgom",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Whale Isle",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738056569
    },
    {
      "id": "item-mvklxw2u-nh4ua4",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Whale Castle",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738039206
    },
    {
      "id": "item-mvklx5u9-08egan",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Gift of the Sea",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738005201
    },
    {
      "id": "item-mvklw1pm-2bxgjc",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Dolphins",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737953194
    },
    {
      "id": "item-mvklvkkx-j8ou05",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Dream Jellyfish",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737930993
    },
    {
      "id": "item-mvkluudi-on3h91",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Whale Crystal",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737897030
    },
    {
      "id": "item-mvkltozl-qsmudl",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Pearl Oys",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738129549
    },
    {
      "id": "item-mvklt6g4-oy3yyx",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Twin Dolphins Circling the Moon",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737819364
    },
    {
      "id": "item-mvklsa0k-139h91",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Star Shell Ride",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737777332
    },
    {
      "id": "item-mvklrgtn-j809yn",
      "categoryId": "cat-lives",
      "seriesId": "ser-mvklqmfk-4jgf94",
      "name": "Glass Jellyfish",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737739499
    },
    {
      "id": "item-mvkll2uy-f1uv19",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737441466
    },
    {
      "id": "item-mvklkfi7-pczhg1",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Sky City",
      "baseValue": 10000,
      "marketWorth": 10000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737411200
    },
    {
      "id": "item-mvklip9f-udn9xd",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Cottage",
      "baseValue": 5000,
      "marketWorth": 5000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737371942
    },
    {
      "id": "item-mvkli0pl-iitkl4",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Ice Castle",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737298713
    },
    {
      "id": "item-mvklgltx-gk3jxt",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "TreeHouse",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737232773
    },
    {
      "id": "item-mvklg3a1-6mlf3u",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Rose Temple",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737208729
    },
    {
      "id": "item-mvklfd2w-255bwd",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Mermaid Castle",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737174776
    },
    {
      "id": "item-mvkleon6-9setmd",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Cloud Lodge",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737143106
    },
    {
      "id": "item-mvkldvtu-wk99rd",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-mvklc187-5u1nb8",
      "name": "Sea Quest",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792737105763
    },
    {
      "id": "item-mvkl9ta6-94hnc6",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Moon Among the Clouds",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736915838
    },
    {
      "id": "item-mvkl93m5-nndth8",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Sky Lantern Wish",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736882573
    },
    {
      "id": "item-mvkl8lqn-cump9v",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Green Mountain Fan",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736859407
    },
    {
      "id": "item-mvkl83up-q1u6w8",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Blue Robe in Misty Rain",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736836225
    },
    {
      "id": "item-mvkl76qp-1fzik0",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Jade Flute Among Falling Blossoms",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736793313
    },
    {
      "id": "item-mvkl6ce3-gfc03h",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Bag of Love",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736753979
    },
    {
      "id": "item-mvkl5w4g-cwmb4v",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Frost Dragon",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736732896
    },
    {
      "id": "item-mvkl5gfy-ka3g8k",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Cloudstride Immortal Deer",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736712574
    },
    {
      "id": "item-mvkl3yav-hpla86",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Azure Cloud Immortal Robe",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736642407
    },
    {
      "id": "item-mvkl3c6b-gduxif",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Salted Fish Swordfight",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736613731
    },
    {
      "id": "item-mvkl2d57-odkdpv",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Azure Cloud Spiritblade",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736568332
    },
    {
      "id": "item-mvkl17qm-l0fegn",
      "categoryId": "cat-art",
      "seriesId": "ser-mvkkzea4-45g1fv",
      "name": "Spirit-Gathering Gourd",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792736514671
    },
    {
      "id": "item-alcoholic-beverages-champagne-467",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Champagne",
      "baseValue": 29999,
      "marketWorth": 29999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792484878605
    },
    {
      "id": "item-the-road-to-fame-dragon-throne-124",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Dragon Throne",
      "baseValue": 16999,
      "marketWorth": 16999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792423256019
    },
    {
      "id": "item-cyber-frenzy-ii-starship-anthem-215",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Starship Anthem",
      "baseValue": 16999,
      "marketWorth": 16999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792481214194
    },
    {
      "id": "item-cyber-frenzy-i-space-rocket-224",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Space Rocket",
      "baseValue": 10000,
      "marketWorth": 10000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792481136675
    },
    {
      "id": "item-mysterious-europe-star-crown-242",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "Star Crown",
      "baseValue": 10000,
      "marketWorth": 10000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Collection",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792482039361
    },
    {
      "id": "item-luminous-heart-s-melody-mylove-54",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "MyLove",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-luxgarage-103",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "LuxGarage",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792423027860
    },
    {
      "id": "item-the-road-to-fame-star-gala-122",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Star Gala",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chocolate-feast-sweetchoco-413",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "SweetChoco",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-qixi-festival-kitty-love-552",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Kitty Love",
      "baseValue": 9998,
      "marketWorth": 9998,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-mid-autumn-festival-moonglow-540",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Moonglow",
      "baseValue": 7999,
      "marketWorth": 7999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-ice-castle-187",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Ice Castle",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-star-wish-cat-land-cat-melody-301",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Cat Melody",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-childhood-dreamland-fun-park-530",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Fun Park",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-childhood-dreamland-love-city-531",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Love City",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-christmas-xmas-globe-758",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-christmas",
      "name": "Xmas Globe",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "christmas",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412090590
    },
    {
      "id": "item-romantic-vow-heart-garden-64",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Heart Garden",
      "baseValue": 5999,
      "marketWorth": 5999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-romantic-vow-heart-castle-65",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Heart Castle",
      "baseValue": 5999,
      "marketWorth": 5999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-the-road-to-fame-award-123",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Award",
      "baseValue": 5999,
      "marketWorth": 5999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-dwelling-in-the-fuchun-mountains-160",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Dwelling in the Fuchun Mountains",
      "baseValue": 5999,
      "marketWorth": 5999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-std-aegean-7e897a",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Aegean",
      "baseValue": 5000,
      "marketWorth": 5000,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733735057
    },
    {
      "id": "item-springtime-wishes-floral-cradle-291",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "Floral Cradle",
      "baseValue": 4999,
      "marketWorth": 4999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-ii-cyberrush-218",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "CyberRush",
      "baseValue": 4900,
      "marketWorth": 4900,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-star-sports-car-93",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Star Sports Car",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792422949000
    },
    {
      "id": "item-roaring-engine-convertible-100",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Convertible",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792422998323
    },
    {
      "id": "item-roaring-engine-pink-car-102",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Pink Car",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-luxury-sports-car-105",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Luxury Sports Car",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-ii-star-sports-car-210",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Star Sports Car",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792481180013
    },
    {
      "id": "item-football-match-iii-world-cup-night-614",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "World Cup Night",
      "baseValue": 3999,
      "marketWorth": 3999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-echoes-of-love-love-plane-82",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "Love Plane",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-girl-with-a-pearl-earring-159",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Girl with a Pearl Earring",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792480252055
    },
    {
      "id": "item-world-famous-paintings-the-starry-night-161",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "The Starry Night",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-the-great-wave-off-kanagawa-162",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "The Great Wave off Kanagawa",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-impression-sunrise-164",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Impression, Sunrise",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-mona-lisa-166",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Mona Lisa",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-guernica-167",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Guernica",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-magic-gate-182",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Magic Gate",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792480923486
    },
    {
      "id": "item-starry-river-journey-timepiece-189",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Timepiece",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-starry-river-journey-stellar-mirage-196",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Stellar Mirage",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-iguazu-falls-365",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Iguazu Falls",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-mountain-at-sunrise-366",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Golden Mountain at Sunrise",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792483469753
    },
    {
      "id": "item-beautiful-earth-blue-ice-cave-367",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Blue Ice Cave",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-uluru-368",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Uluru",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-maldives-atolls-373",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Maldives Atolls",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-the-great-wall-379",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "The Great Wall",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-chich-n-itz-380",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "Chichén Itzá",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-machu-picchu-381",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "Machu Picchu",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-colosseum-382",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "Colosseum",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-embrace-rio-383",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "Embrace Rio",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-cultural-heritage-taj-mahal-384",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-cultural-heritage",
      "name": "Taj Mahal",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-cultural-heritage",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-fuji-sakura-387",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Fuji Sakura",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792483305890
    },
    {
      "id": "item-alcoholic-beverages-red-wine-466",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Red Wine",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-new-year-greetings-glowfest-565",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Glowfest",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iv-thunderbolt-shot-603",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Thunderbolt Shot",
      "baseValue": 2999,
      "marketWorth": 2999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-li-river-369",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Li River",
      "baseValue": 2399,
      "marketWorth": 2399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-grand-canyon-370",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Grand Canyon",
      "baseValue": 2399,
      "marketWorth": 2399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-white-cliffs-371",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "White Cliffs",
      "baseValue": 2399,
      "marketWorth": 2399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-mount-kilimanjaro-372",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Mount Kilimanjaro",
      "baseValue": 2399,
      "marketWorth": 2399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-star-wish-cat-land-stargaze-cat-299",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Stargaze Cat",
      "baseValue": 2000,
      "marketWorth": 2000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792482935715
    },
    {
      "id": "item-mvggx32j-ox8kts",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Golden Illusionist",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487738827
    },
    {
      "id": "item-mvggwffe-r5evq7",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Chronos Weaver",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487708187
    },
    {
      "id": "item-mvggvwuh-6vm6mg",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Petal Wanderer",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487684105
    },
    {
      "id": "item-mvggvhap-fhs1cn",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Starward Sentinel",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487663953
    },
    {
      "id": "item-mvgguwrs-zocn0s",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Thunder Ascendant",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487637352
    },
    {
      "id": "item-mvggu7hn-8jga8s",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Frostbound Breaker",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487604587
    },
    {
      "id": "item-mvggt96n-my2o6a",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Dawn's Striker",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487560127
    },
    {
      "id": "item-mvggs15q-ipzwts",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6nq6u-6nth15",
      "name": "Violet Tempest",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792487503089
    },
    {
      "id": "item-world-famous-paintings-american-gothic-163",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "American Gothic",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-world-famous-paintings-portrait-with-thorn-necklace-and-hummingbird-165",
      "categoryId": "cat-art",
      "seriesId": "ser-art-world-famous-paintings",
      "name": "Self-Portrait with Thorn Necklace and Hummingbird",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "world-famous-paintings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792480241229
    },
    {
      "id": "item-starry-river-journey-starry-garden-194",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Starry Garden",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-swing-panda-321",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Swing Panda",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-beautiful-earth-sahara-desert-364",
      "categoryId": "cat-home",
      "seriesId": "ser-home-beautiful-earth",
      "name": "Sahara Desert",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "beautiful-earth",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792483452745
    },
    {
      "id": "item-dragon-boat-festival-rice-ride-588",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Rice Ride",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iii-we-are-the-champions-613",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "We are the champions!",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-wonder-goal-677",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Wonder Goal",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792486818543
    },
    {
      "id": "item-global-story-club-aladdin-s-lamp-135",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Aladdin's Lamp",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-anansi-the-spider-136",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Anansi the Spider",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-paul-bunyan-137",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Paul Bunyan",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-peter-and-the-wolf-138",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Peter and the Wolf",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-the-little-mermaid-139",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "The Little Mermaid",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-jack-and-the-beanstalk-140",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Jack and the Beanstalk",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-robin-hood-141",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Robin Hood",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-maui-lifting-the-land-142",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Maui Lifting the Land",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-the-cowherd-and-the-weaver-girl-143",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "The Cowherd and the Weaver Girl",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-urashima-tar-144",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Urashima Tarō",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-little-red-riding-hood-145",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Little Red Riding Hood",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-momotaro-146",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Momotaro",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-global-story-club-sun-wukong-147",
      "categoryId": "cat-art",
      "seriesId": "ser-art-global-story-club",
      "name": "Sun Wukong",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "global-story-club",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-vinicunca-343",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Vinicunca",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792483587568
    },
    {
      "id": "item-ticket-to-the-wonderland-tianshan-mountains-344",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Tianshan Mountains",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-barcelona-345",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Barcelona",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-nice-346",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Nice",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-florence-347",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Florence",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-great-barrier-reef-348",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Great Barrier Reef",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-uyuni-salt-flats-349",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Uyuni Salt Flats",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-kyoto-maple-350",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Kyoto Maple",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ticket-to-the-wonderland-finnish-aurora-351",
      "categoryId": "cat-home",
      "seriesId": "ser-home-ticket-to-the-wonderland",
      "name": "Finnish Aurora",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "ticket-to-the-wonderland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iv-champions-night-602",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Champions' Night",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iii-goal-609",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Goal",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-songkran-festival-songkran-festival-girl-689",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-songkran-festival",
      "name": "Songkran Festival Girl",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "songkran-festival",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-luminous-heart-s-melody-floral-path-58",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Floral Path",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-lux-ride-95",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Lux Ride",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792422965857
    },
    {
      "id": "item-starry-river-journey-galaxy-drink-197",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Galaxy Drink",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-cyber-racer-225",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Racer",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792480364142
    },
    {
      "id": "item-dragon-boat-festival-summer-with-kitty-592",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Early Summer with Kitty",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792485931577
    },
    {
      "id": "item-football-match-forward-scores-674",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Forward scores",
      "baseValue": 1299,
      "marketWorth": 1299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-golden-header-578",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Golden Header",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-blue-miracle-579",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Blue Miracle",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-last-minute-580",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Last Minute",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-flying-strike-581",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Flying Strike",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-last-gasp-equalizer-582",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Last-Gasp Equalizer",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-solo-run-583",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Solo Run",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-samba-storm-584",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Samba Storm",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-8-legendary-goals-century-run-585",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-8-legendary-goals",
      "name": "Century Run",
      "baseValue": 1199,
      "marketWorth": 1199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "8-legendary-goals",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-mvgfl3tg-w5wdsd",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Enchanting Osmanthus Fragrance",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792485500312
    },
    {
      "id": "item-happy-anniversary-golden-piano-38",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Golden Piano",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792403060673
    },
    {
      "id": "item-happy-birthday-birthday-party-hall-48",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Party Hall",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792403084987
    },
    {
      "id": "item-the-road-to-fame-golden-piano-126",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Golden Piano",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wonderland-dream-magic-hat-132",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Magic Hat",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792479985017
    },
    {
      "id": "item-starry-river-journey-chronowing-190",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "ChronoWing",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-lazy-panda-319",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Lazy Panda",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-sakura-view-394",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Sakura View",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792483357178
    },
    {
      "id": "item-childhood-dreamland-carousel-533",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Carousel",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iv-i-m-champion-600",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "I'm Champion!",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-iii-defensive-master-610",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Defensive Master",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-constellation-gifts-star-whisper-leo-743",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Leo",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412218059
    },
    {
      "id": "item-constellation-gifts-star-whisper-sagittarius-744",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Sagittarius",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412221637
    },
    {
      "id": "item-constellation-gifts-star-whisper-scorpio-745",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Scorpio",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412225403
    },
    {
      "id": "item-constellation-gifts-star-whisper-libra-746",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Libra",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412261759
    },
    {
      "id": "item-constellation-gifts-star-whisper-virgo-747",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Virgo",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412258462
    },
    {
      "id": "item-constellation-gifts-star-whisper-aquarius-748",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Aquarius",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412255425
    },
    {
      "id": "item-constellation-gifts-star-whisper-pisces-749",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Pisces",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412251900
    },
    {
      "id": "item-constellation-gifts-star-whisper-cancer-750",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Cancer",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412243982
    },
    {
      "id": "item-constellation-gifts-star-whisper-aries-751",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Aries",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412240356
    },
    {
      "id": "item-constellation-gifts-star-whisper-capricorn-752",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Capricorn",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412236153
    },
    {
      "id": "item-constellation-gifts-star-whisper-taurus-753",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Taurus",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412230427
    },
    {
      "id": "item-constellation-gifts-star-whisper-gemini-754",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-constellation-gifts",
      "name": "Star Whisper · Gemini",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "constellation-gifts",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412232986
    },
    {
      "id": "item-new-year-greetings-lucky-koi-560",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Lucky Koi",
      "baseValue": 1088,
      "marketWorth": 1088,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-panda-brew-316",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Panda Brew",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "panda",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792482767780
    },
    {
      "id": "item-childhood-dreamland-garden-spy-534",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Garden Spy",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-new-year-greetings-luckyfeast-562",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "LuckyFeast",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-leo-703",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Leo",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792733736106
    },
    {
      "id": "item-rare-zodiac-set-libra-704",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Libra",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792487145800
    },
    {
      "id": "item-eid-al-fitr-iftar-720",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Iftar",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412737351
    },
    {
      "id": "item-christmas-sleigh-757",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-christmas",
      "name": "Sleigh",
      "baseValue": 1000,
      "marketWorth": 1000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "christmas",
        "collection"
      ],
      "notes": "",
      "updatedAt": 1792412115207
    },
    {
      "id": "item-mvf8erkn-pgccd4",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6lli1-91ioig",
      "name": "Celebrating Nowruz",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792412981016
    },
    {
      "id": "item-echoes-of-youth-best-teacher-8",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Best Teacher",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792402650442
    },
    {
      "id": "item-luminous-heart-s-melody-crystal-flower-55",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Crystal Flower",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-collections-of-hearts-diamond-heart-73",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Diamond Heart",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-echoes-of-love-music-cake-81",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "Music Cake",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422706777
    },
    {
      "id": "item-roaring-engine-thunder-racing-98",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Thunder Racing",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-fire-tiger-99",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Fire Tiger",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792422987057
    },
    {
      "id": "item-a-little-square-board-loter-a-157",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Lotería",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-ii-thunder-racing-219",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Thunder Racing",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-time-train-230",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Time Train",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-select-world-war-flamenco-dress-232",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6vc76-q06lzc",
      "name": "Flamenco dress",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "apparel",
        "select-world-war",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482179355
    },
    {
      "id": "item-select-world-war-swedish-folk-costume-233",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6vc76-q06lzc",
      "name": "Swedish folk costume",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "select-world-war",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482154421
    },
    {
      "id": "item-select-world-war-egyptian-pharaoh-outfit-234",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6vc76-q06lzc",
      "name": "Egyptian Pharaoh Outfit",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "select-world-war",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482140703
    },
    {
      "id": "item-select-world-war-court-dress-235",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6vc76-q06lzc",
      "name": "Court Dress",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "select-world-war",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482115688
    },
    {
      "id": "item-mysterious-europe-court-dress-239",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "Court Dress",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-childhood-dreamland-gachapon-529",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Gachapon",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-egypt-567",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Egypt",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-switzerland-568",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Switzerland",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-belgium-569",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Belgium",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-spain-570",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Spain",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-brazil-571",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Brazil",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-england-572",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of England",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-morocco-573",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Morocco",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-france-574",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of France",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-argentina-575",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Argentina",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-norway-576",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Norway",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glory-commemoration-glory-of-cape-verde-577",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-glory-commemoration",
      "name": "Glory of Cape Verde",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "glory-commemoration",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-st-patrick-s-day-emerald-festival-730",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-st-patrick-s-day",
      "name": "Emerald Festival",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "st-patrick-s-day",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412523457
    },
    {
      "id": "item-epiphany-gilt-pile-741",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-epiphany",
      "name": "Gilt Pile",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "epiphany",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412318604
    },
    {
      "id": "item-select-world-war-indian-sari-760",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Indian Sari",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-traditional-thai-clothing-761",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Traditional Thai clothing",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-mongolian-robe-762",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Mongolian robe",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-hanbok-763",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Hanbok",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-kebaya-764",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Kebaya",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-vietnamese-o-d-i-765",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Vietnamese Áo Dài",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-hanfu-766",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Hanfu",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-japanese-kimono-767",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-select-world-war",
      "name": "Japanese Kimono",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1729300000000
    },
    {
      "id": "item-select-world-war-american-clothing-768",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Native American clothing",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482294794
    },
    {
      "id": "item-select-world-war-ivy-style-769",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Ivy Style",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482207638
    },
    {
      "id": "item-select-world-war-samba-dress-770",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Samba dress",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482213938
    },
    {
      "id": "item-select-world-war-vintage-swing-skirt-771",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Vintage Swing Skirt",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482225977
    },
    {
      "id": "item-select-world-war-flapper-dress-772",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Flapper Dress",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482235669
    },
    {
      "id": "item-select-world-war-mexican-catrina-773",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Mexican Catrina",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482244725
    },
    {
      "id": "item-select-world-war-straw-hat-shawl-774",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Straw Hat & Shawl",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482253651
    },
    {
      "id": "item-select-world-war-cowgirl-outfit-775",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Cowgirl Outfit",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482264692
    },
    {
      "id": "item-select-world-war-street-hip-hop-776",
      "categoryId": "cat-apparel",
      "seriesId": "ser-mvf6u22o-c2v0nf",
      "name": "Street Hip-Hop",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792482273017
    },
    {
      "id": "item-mysterious-europe-white-suit-240",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "White Suit",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chinese-flavor-i-hot-pot-lamb-500",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Hot Pot Lamb",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-love-of-the-champions-championship-crystal-cup-645",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-love-of-the-champions",
      "name": "Championship Crystal Cup",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "love-of-the-champions",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-venice-carnival-night-of-the-canal-691",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-venice-carnival",
      "name": "Night of the Canal",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "venice-carnival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792487080823
    },
    {
      "id": "item-christmas-xmas-eve-759",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-christmas",
      "name": "Xmas Eve",
      "baseValue": 899,
      "marketWorth": 899,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "christmas",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412099142
    },
    {
      "id": "item-new-year-greetings-lionspirit-559",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "LionSpirit",
      "baseValue": 888,
      "marketWorth": 888,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-creator-s-gifts-blossoms-books-32",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Blossoms & Books",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792402963831
    },
    {
      "id": "item-collections-of-hearts-cute-cam-71",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Cute Cam",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-starry-river-journey-galaxy-book-198",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Galaxy Book",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-cyber-warrior-227",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Warrior",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-panda-tea-322",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "PandaTea",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482795615
    },
    {
      "id": "item-cherry-blossom-sunny-doll-396",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Sunny Doll",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-desserts-spring-tea-459",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Spring Tea",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "desserts",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-flavors-of-the-american-continent-lunch-492",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Lunch",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-love-of-the-champions-champion-basket-644",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-love-of-the-champions",
      "name": "Champion Basket",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "love-of-the-champions",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-bicycle-kick-675",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Bicycle Kick",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-holi-elephant-724",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-holi",
      "name": "Elephant",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "holi",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412630784
    },
    {
      "id": "item-april-fools-day-april-fool-731",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-april-fools-day",
      "name": "April Fool",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "april-fools-day",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412489712
    },
    {
      "id": "item-live-streamer-s-trilogy-celebration-balloon-15",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Celebration Balloon",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792402680084
    },
    {
      "id": "item-happy-anniversary-fairy-tale-bear-39",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Fairy Tale Bear",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792403052983
    },
    {
      "id": "item-happy-anniversary-cat-magician-41",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Cat Magician",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792403046366
    },
    {
      "id": "item-romantic-vow-fancy-boat-63",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Fancy Boat",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-lazy-holiday-117",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Lazy Holiday",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-good-holiday-118",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Good Holiday",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wonderland-dream-poker-hat-134",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Poker Hat",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792479996014
    },
    {
      "id": "item-eastern-musical-instrument-guzheng-170",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Guzheng",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eastern-musical-instrument-bianzhong-171",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Bianzhong",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-fairy-boat-179",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Fairy Boat",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792480877112
    },
    {
      "id": "item-starry-river-journey-spellbook-191",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Spellbook",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-cyber-love-228",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Love",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-cyber-bear-231",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Bear",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-humanity-s-adorable-energetic-golden-retriever-276",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Energetic Golden Retriever",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-paws-of-attraction-dog-king-284",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Dog King",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-paws-of-attraction-energetic-golden-retriever-285",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Energetic Golden Retriever",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-star-wish-cat-land-wish-cat-303",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Wish Cat",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-starry-flowers-starry-iris-314",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Iris",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792482840548
    },
    {
      "id": "item-panda-meltypanda-318",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "MeltyPanda",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-panda-bath-320",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Panda Bath",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-panda-pack-323",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Panda Pack",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "panda",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-galaxy-333",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Galaxy",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-earth-335",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Earth",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-sakurafall-393",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "SakuraFall",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-four-seasons-summer-lotus-404",
      "categoryId": "cat-home",
      "seriesId": "ser-home-four-seasons",
      "name": "Lotus",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "four-seasons",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792483219880
    },
    {
      "id": "item-four-seasons-autumn-405",
      "categoryId": "cat-home",
      "seriesId": "ser-home-four-seasons",
      "name": "Autumn",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "four-seasons",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chocolate-feast-luckychoco-414",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "LuckyChoco",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-alcoholic-beverages-luxury-wine-box-462",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Luxury Wine Box",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792484860555
    },
    {
      "id": "item-oktoberfest-beer-barrel-515",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Beer Barrel",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-happy-film-festival-love-memories-524",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Love Memories",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-childhood-dreamland-dream-park-532",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Dream Park",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-qixi-festival-flying-together-544",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Flying Together",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792485598090
    },
    {
      "id": "item-qixi-festival-qixi-wish-553",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Qixi Wish",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-new-year-greetings-lucky-bag-563",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Lucky Bag",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-love-of-the-champions-champion-necklace-643",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-love-of-the-champions",
      "name": "Champion necklace",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "love-of-the-champions",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eid-al-fitr-ramadanlight-719",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "RamadanLight",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412747373
    },
    {
      "id": "item-april-fools-day-jokerballoon-732",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-april-fools-day",
      "name": "JokerBalloon",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "april-fools-day",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792412485969
    },
    {
      "id": "item-childhood-dreamland-balloonpals-528",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "BalloonPals",
      "baseValue": 610,
      "marketWorth": 610,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-cloudfeather-180",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Cloudfeather",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792480879109
    },
    {
      "id": "item-glimmering-hidden-paradise-butterfly-bloom-183",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Butterfly Bloom",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-starry-river-journey-magic-hat-192",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Magic Hat",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-starry-river-journey-galaxy-rose-195",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Galaxy Rose",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-springtime-wishes-butterfly-blossoms-292",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "Butterfly Blossoms",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792483033546
    },
    {
      "id": "item-spring-wildflowers-bloom-bee-297",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Bloom Bee",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-star-wish-cat-land-autumn-love-304",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Autumn Love",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-new-year-greetings-luckycoins-566",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "LuckyCoins",
      "baseValue": 600,
      "marketWorth": 600,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-happy-birthday-birthday-dinner-46",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Dinner",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792403091797
    },
    {
      "id": "item-luminous-heart-s-melody-crystallove-50",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "CrystalLove",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792479317968
    },
    {
      "id": "item-luminous-heart-s-melody-star-wish-57",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Star Wish",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-echoes-of-love-cutevow-77",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "CuteVow",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-roaring-engine-tech-car-101",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Tech Car",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-airplane-110",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Airplane",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792423123802
    },
    {
      "id": "item-the-road-to-fame-gold-crown-120",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Gold Crown",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792423233122
    },
    {
      "id": "item-wonderland-dream-sweet-treats-133",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Sweet Treats",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792479990935
    },
    {
      "id": "item-eastern-musical-instrument-erhu-175",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Erhu",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-dreamcatcher-184",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Dreamcatcher",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-glimmering-hidden-paradise-hourglass-185",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Hourglass",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wandering-in-wonderland-bottle-summer-205",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Bottle Summer",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wandering-in-wonderland-dreamstarcar-207",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "DreamStarCar",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-i-supernova-armor-223",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Supernova Armor",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792480370073
    },
    {
      "id": "item-cyber-frenzy-i-cool-shades-229",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cool Shades",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-mysterious-europe-amulet-241",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "Amulet",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-humanity-s-adorable-cuddly-ragdoll-cat-274",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Cuddly Ragdoll Cat",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-sun-334",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Sun",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-nepture-338",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Nepture",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-venus-339",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Venus",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-jupiter-340",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Jupiter",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-mars-341",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Mars",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cosmic-galaxy-uranus-342",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Uranus",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-sakurabell-386",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "SakuraBell",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792483298493
    },
    {
      "id": "item-cocktail-journey-zombie-cocktail-478",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Zombie Cocktail",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792484785540
    },
    {
      "id": "item-mid-autumn-festival-bunny-moon-541",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Bunny Moon",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-mid-autumn-festival-moonlight-542",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Moonlight",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-dragon-boat-festival-rice-boat-589",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Rice Boat",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-love-of-the-champions-champion-football-641",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-love-of-the-champions",
      "name": "Champion Football",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "love-of-the-champions",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-love-of-the-champions-champion-wish-ball-642",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-love-of-the-champions",
      "name": "Champion Wish Ball",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "love-of-the-champions",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wonderland-dream-wonderland-127",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Wonderland",
      "baseValue": 529,
      "marketWorth": 529,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792479955236
    },
    {
      "id": "item-gummy-party-thank-you-feedback-25",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Thank You Feedback",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eastern-musical-instrument-floralflute-172",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "FloralFlute",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-taurus-700",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Taurus",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792487155228
    },
    {
      "id": "item-rare-zodiac-set-pisces-701",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Pisces",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792487157419
    },
    {
      "id": "item-rare-zodiac-set-virgo-702",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Virgo",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792487159044
    },
    {
      "id": "item-rare-zodiac-set-cancer-705",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Cancer",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1792487149864
    },
    {
      "id": "item-rare-zodiac-set-aries-706",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Aries",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-gemini-707",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Gemini",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-aquarius-708",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Aquarius",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-capricorn-709",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Capricorn",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-scorpio-710",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Scorpio",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-rare-zodiac-set-sagittarius-711",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-rare-zodiac-set",
      "name": "Sagittarius",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "rare-zodiac-set",
        "luxury"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-std-duet-cat-b20b55",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Duet Cat",
      "baseValue": 500,
      "marketWorth": 500,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-happy-anniversary-to-the-celebration-35",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "To the Celebration",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422267900
    },
    {
      "id": "item-happy-birthday-birthday-jewel-47",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Jewel",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422304070
    },
    {
      "id": "item-romantic-vow-rose-orb-59",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Rose Orb",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479361658
    },
    {
      "id": "item-romantic-vow-flowers-for-you-62",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Flowers for You",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422492043
    },
    {
      "id": "item-back-to-the-millennium-disco-87",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "Disco",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479647647
    },
    {
      "id": "item-back-to-the-millennium-karaoke-90",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "Karaoke",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479670043
    },
    {
      "id": "item-roaring-engine-f1-car-94",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "F1 Car",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422960537
    },
    {
      "id": "item-ready-to-go-travel-bus-114",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Travel Bus",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792423174078
    },
    {
      "id": "item-eastern-musical-instrument-sheng-174",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Sheng",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480707673
    },
    {
      "id": "item-starry-river-journey-star-train-193",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Star Train",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480978337
    },
    {
      "id": "item-cyber-frenzy-ii-supernova-helmet-214",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Supernova Helmet",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481207012
    },
    {
      "id": "item-cyber-frenzy-i-cyber-storm-226",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Storm",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481153432
    },
    {
      "id": "item-cosmic-galaxy-saturn-336",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Saturn",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483647637
    },
    {
      "id": "item-cosmic-galaxy-mercury-337",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cosmic-galaxy",
      "name": "Mercury",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cosmic-galaxy",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483640875
    },
    {
      "id": "item-four-seasons-snowglobe-406",
      "categoryId": "cat-home",
      "seriesId": "ser-home-four-seasons",
      "name": "Snowglobe",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "four-seasons",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483186366
    },
    {
      "id": "item-desserts-dessert-table-460",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Dessert Table",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "desserts",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484961989
    },
    {
      "id": "item-cocktail-journey-old-fashioned-475",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Old Fashioned",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484800733
    },
    {
      "id": "item-cocktail-journey-godfather-479",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Godfather",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484781738
    },
    {
      "id": "item-cocktail-journey-negroni-481",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Negroni",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484762784
    },
    {
      "id": "item-flavors-of-the-american-continent-best-friend-491",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Best Friend",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484551515
    },
    {
      "id": "item-oktoberfest-munich-carnival-night-513",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Munich Carnival Night",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485112939
    },
    {
      "id": "item-mid-autumn-festival-basket-cake-537",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Basket Cake",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485370427
    },
    {
      "id": "item-mid-autumn-festival-osmanthus-tea-539",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Osmanthus tea",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485381242
    },
    {
      "id": "item-mid-autumn-festival-moonbunny-543",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "MoonBunny",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485405159
    },
    {
      "id": "item-go-usa-fierce-eagle-621",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-usa",
      "name": "Fierce Eagle",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-usa",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486406555
    },
    {
      "id": "item-go-brazil-football-stage-631",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-brazil",
      "name": "Football Stage",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-brazil",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486478604
    },
    {
      "id": "item-football-keychain-ii-argentina-pendant-652",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Argentina Pendant",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486728391
    },
    {
      "id": "item-football-keychain-ii-german-football-654",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "German Football Pendant",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486725799
    },
    {
      "id": "item-football-keychain-i-england-pendant-663",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "England Pendant",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486770400
    },
    {
      "id": "item-eid-al-fitr-starry-dream-722",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Starry Dream",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412710482
    },
    {
      "id": "item-holi-holi-girl-727",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-holi",
      "name": "Holi Girl",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "holi",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412605706
    },
    {
      "id": "item-winter-reunion-festival-laba-festival-739",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-winter-reunion-festival",
      "name": "Laba Festival",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "winter-reunion-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412420987
    },
    {
      "id": "item-happy-anniversary-anniversary-37",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Anniversary",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422231183
    },
    {
      "id": "item-happy-birthday-birthday-bouquet-45",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Bouquet",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422296936
    },
    {
      "id": "item-back-to-the-millennium-skateware-88",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "Skateware",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479658969
    },
    {
      "id": "item-roaring-engine-sunset-ride-92",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Sunset Ride",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422945216
    },
    {
      "id": "item-ready-to-go-travel-holiday-107",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Travel Holiday",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792423108808
    },
    {
      "id": "item-a-little-square-board-wings-of-chess-156",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Wings of Chess",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480774089
    },
    {
      "id": "item-wandering-in-wonderland-gilded-aviary-206",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Gilded Aviary",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481107132
    },
    {
      "id": "item-a-heart-full-of-felicity-snuggling-sweetie-308",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-a-heart-full-of-felicity",
      "name": "Snuggling Sweetie",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "a-heart-full-of-felicity",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482916904
    },
    {
      "id": "item-four-seasons-spring-403",
      "categoryId": "cat-home",
      "seriesId": "ser-home-four-seasons",
      "name": "Spring",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "home",
        "four-seasons",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483177239
    },
    {
      "id": "item-chocolate-feast-chocolate-gelato-416",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Chocolate Gelato",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484047171
    },
    {
      "id": "item-global-ice-cream-festival-chocolate-gelato-443",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Chocolate Gelato",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484266007
    },
    {
      "id": "item-afternoon-tea-time-coffeepour-445",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "CoffeePour",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484292580
    },
    {
      "id": "item-oktoberfest-golden-cup-celebration-514",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Golden Cup Celebration",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485107315
    },
    {
      "id": "item-happy-film-festival-film-projector-523",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Film projector",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": true,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485220519
    },
    {
      "id": "item-new-year-greetings-lunarsnack-564",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "LunarSnack",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485759941
    },
    {
      "id": "item-football-match-iv-snack-bucket-601",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Snack Bucket",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486192115
    },
    {
      "id": "item-football-match-iv-cat-cheer-team-604",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Cat Cheer Team",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486213153
    },
    {
      "id": "item-go-usa-championship-trophy-622",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-usa",
      "name": "Championship Trophy",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-usa",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486409607
    },
    {
      "id": "item-go-brazil-we-can-win-633",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-brazil",
      "name": "We can win",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-brazil",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486489708
    },
    {
      "id": "item-go-brazil-eternal-blaze-634",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-brazil",
      "name": "Eternal Blaze",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-brazil",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486492564
    },
    {
      "id": "item-go-brazil-crown-of-the-setting-sun-635",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-brazil",
      "name": "Crown of the Setting Sun",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-brazil",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486494966
    },
    {
      "id": "item-football-match-ii-football-gift-box-684",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Football Gift Box",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486931091
    },
    {
      "id": "item-songkran-festival-water-gun-party-688",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-songkran-festival",
      "name": "Water Gun Party",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "songkran-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487049967
    },
    {
      "id": "item-songkran-festival-throwing-water-bowl-690",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-songkran-festival",
      "name": "Throwing Water Bowl",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "songkran-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487065578
    },
    {
      "id": "item-easter-easter-bunny-697",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-easter",
      "name": "Easter Bunny",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "easter",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487117003
    },
    {
      "id": "item-easter-newborn-bunny-698",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-easter",
      "name": "Newborn Bunny",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "easter",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487122829
    },
    {
      "id": "item-easter-bunny-violinist-699",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-easter",
      "name": "Bunny Violinist",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "easter",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487125305
    },
    {
      "id": "item-eid-al-fitr-eid-feast-713",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Eid Feast",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487210019
    },
    {
      "id": "item-eid-al-fitr-moonboat-718",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Moonboat",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412756373
    },
    {
      "id": "item-eid-al-fitr-gilded-decor-721",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Gilded Decor",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412725218
    },
    {
      "id": "item-holi-holi-726",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-holi",
      "name": "Holi",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "holi",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412614558
    },
    {
      "id": "item-happy-anniversary-magic-bun-40",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Magic Bun",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422253714
    },
    {
      "id": "item-echoes-of-love-ballrose-76",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "BallRose",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422634228
    },
    {
      "id": "item-echoes-of-love-mistsweet-78",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "MistSweet",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422662380
    },
    {
      "id": "item-echoes-of-love-flower-bear-80",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "Flower Bear",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422714503
    },
    {
      "id": "item-ready-to-go-laser-backpack-113",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Laser Backpack",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792423170369
    },
    {
      "id": "item-ready-to-go-go-travel-115",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Go Travel",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792423168904
    },
    {
      "id": "item-a-little-square-board-mancala-150",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Mancala",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480769866
    },
    {
      "id": "item-a-little-square-board-checkers-151",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Checkers",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480767283
    },
    {
      "id": "item-a-little-square-board-go-152",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Go",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480761213
    },
    {
      "id": "item-eastern-musical-instrument-suona-173",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Suona",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480703485
    },
    {
      "id": "item-starry-river-journey-starmoon-bottle-188",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Starmoon Bottle",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480948334
    },
    {
      "id": "item-wandering-in-wonderland-phantom-feather-201",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Phantom Feather",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481079779
    },
    {
      "id": "item-mysterious-europe-lion-ring-237",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "Lion Ring",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482028548
    },
    {
      "id": "item-four-seasons-in-bloom-lavender-263",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Lavender",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482608936
    },
    {
      "id": "item-paws-of-attraction-hot-dog-282",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "HOT dog",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483089462
    },
    {
      "id": "item-springtime-wishes-flower-gift-box-290",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "Flower gift box",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483029882
    },
    {
      "id": "item-spring-wildflowers-spring-bag-294",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Spring Bag",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482992881
    },
    {
      "id": "item-starry-flowers-starry-gypsophila-313",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Gypsophila",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482836118
    },
    {
      "id": "item-world-garden-stamp-humble-administrator-s-garden-359",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Humble Administrator's Garden",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483553615
    },
    {
      "id": "item-travel-tickets-paris-trip-374",
      "categoryId": "cat-home",
      "seriesId": "ser-home-travel-tickets",
      "name": "Paris Trip",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "travel-tickets",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483430918
    },
    {
      "id": "item-travel-tickets-shanghai-trip-375",
      "categoryId": "cat-home",
      "seriesId": "ser-home-travel-tickets",
      "name": "Shanghai Trip",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "travel-tickets",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483429789
    },
    {
      "id": "item-travel-tickets-new-york-trip-376",
      "categoryId": "cat-home",
      "seriesId": "ser-home-travel-tickets",
      "name": "New York Trip",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "travel-tickets",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483425712
    },
    {
      "id": "item-travel-tickets-egypt-trip-377",
      "categoryId": "cat-home",
      "seriesId": "ser-home-travel-tickets",
      "name": "Egypt Trip",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "travel-tickets",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483428707
    },
    {
      "id": "item-travel-tickets-tokyo-trip-378",
      "categoryId": "cat-home",
      "seriesId": "ser-home-travel-tickets",
      "name": "Tokyo Trip",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "travel-tickets",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483422581
    },
    {
      "id": "item-chocolate-feast-hot-cocoa-411",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Hot Cocoa",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484024069
    },
    {
      "id": "item-pixel-ice-cream-guizhou-bingjiang-425",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Guizhou Bingjiang",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484134926
    },
    {
      "id": "item-pixel-ice-cream-maple-syrup-ice-cream-426",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Maple Syrup Ice Cream",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484136483
    },
    {
      "id": "item-afternoon-tea-time-hot-cocoa-448",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "Hot Cocoa",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484303276
    },
    {
      "id": "item-cocktail-journey-mai-tai-471",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Mai Tai",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484806555
    },
    {
      "id": "item-cocktail-journey-sunset-stars-480",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Sunset Stars",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484774249
    },
    {
      "id": "item-flavors-of-the-american-continent-lobster-roll-490",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Lobster Roll",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484562255
    },
    {
      "id": "item-chinese-flavor-i-grilled-oysters-499",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Grilled Oysters",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484505963
    },
    {
      "id": "item-chinese-flavor-i-jiaozi-504",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Jiaozi",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484523165
    },
    {
      "id": "item-childhood-dreamland-book-of-childhood-wonder-527",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Book of Childhood Wonder",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485334952
    },
    {
      "id": "item-qixi-festival-love-drum-548",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Love Drum",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485617817
    },
    {
      "id": "item-qixi-festival-bird-lamp-550",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Bird Lamp",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485631622
    },
    {
      "id": "item-dragon-boat-festival-zongzi-aroma-dream-591",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Zongzi Aroma Dream",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485952426
    },
    {
      "id": "item-dragon-boat-festival-rabbit-boat-593",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Rabbit Boat",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485979944
    },
    {
      "id": "item-football-match-iii-shot-607",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Shot",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486322520
    },
    {
      "id": "item-go-netherlands-orange-lion-617",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-netherlands",
      "name": "Orange Lion",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-netherlands",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486364072
    },
    {
      "id": "item-go-england-lion-of-england-630",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-england",
      "name": "Lion of England",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-england",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486445244
    },
    {
      "id": "item-football-match-football-match-669",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Football match",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486867453
    },
    {
      "id": "item-eid-al-fitr-ketupat-712",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Ketupat",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412819201
    },
    {
      "id": "item-april-fools-day-pirate-barrel-734",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-april-fools-day",
      "name": "Pirate Barrel",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "april-fools-day",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412465713
    },
    {
      "id": "item-winter-reunion-festival-jiaozi-738",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-winter-reunion-festival",
      "name": "Jiaozi",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "winter-reunion-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412414069
    },
    {
      "id": "item-epiphany-the-three-kings-gifts-742",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-epiphany",
      "name": "The Three Kings' Gifts",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "epiphany",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412324939
    },
    {
      "id": "item-a-little-square-board-poker-148",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Poker",
      "baseValue": 239,
      "marketWorth": 239,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480758447
    },
    {
      "id": "item-romantic-vow-wish-gift-61",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "Wish Gift",
      "baseValue": 200,
      "marketWorth": 200,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792733741450
    },
    {
      "id": "item-std-fruitplanet-321b7d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "FruitPlanet",
      "baseValue": 200,
      "marketWorth": 200,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-mvf8e2il-os9vpg",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6lli1-91ioig",
      "name": "Little Goldfish",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792412948551
    },
    {
      "id": "item-live-streamer-s-trilogy-celebration-rocket-9",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Celebration Rocket",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792422013736
    },
    {
      "id": "item-happy-birthday-birthday-gift-box-44",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Gift Box",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479257085
    },
    {
      "id": "item-collections-of-hearts-heartmatch-74",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "HeartMatch",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792479433571
    },
    {
      "id": "item-wonderland-dream-time-seal-128",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Time Seal",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480796372
    },
    {
      "id": "item-a-little-square-board-uno-153",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "UNO",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480754895
    },
    {
      "id": "item-a-little-square-board-mahjong-155",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Mahjong",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480752411
    },
    {
      "id": "item-a-little-square-board-shogi-158",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Shogi",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480749505
    },
    {
      "id": "item-eastern-musical-instrument-drum-176",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Drum",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480701043
    },
    {
      "id": "item-eastern-musical-instrument-xun-177",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Xun",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480697943
    },
    {
      "id": "item-glimmering-hidden-paradise-celebration-in-the-clouds-186",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Celebration in the Clouds",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480931673
    },
    {
      "id": "item-wandering-in-wonderland-galaxy-gift-203",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Galaxy Gift",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481087327
    },
    {
      "id": "item-wandering-in-wonderland-swan-teacup-204",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Swan Teacup",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481090544
    },
    {
      "id": "item-cyber-frenzy-ii-cyberbike-209",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "CyberBike",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792481174023
    },
    {
      "id": "item-cyber-frenzy-ii-cyber-backpack-217",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Cyber Backpack",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-four-seasons-in-bloom-pomegranate-bloom-259",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Pomegranate Bloom",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792733748217
    },
    {
      "id": "item-four-seasons-in-bloom-morningglory-262",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "MorningGlory",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482603504
    },
    {
      "id": "item-four-seasons-in-bloom-lotus-265",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Lotus",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482615161
    },
    {
      "id": "item-four-seasons-in-bloom-chrysanthemum-266",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Chrysanthemum",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482621731
    },
    {
      "id": "item-four-seasons-in-bloom-camellia-268",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Camellia",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482641578
    },
    {
      "id": "item-four-seasons-in-bloom-peony-269",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Peony",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": true,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792737607975
    },
    {
      "id": "item-four-seasons-in-bloom-hibiscus-270",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Hibiscus",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482644408
    },
    {
      "id": "item-paws-of-attraction-puppy-279",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Puppy",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483059273
    },
    {
      "id": "item-spring-wildflowers-holiday-travel-295",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Holiday travel",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482998317
    },
    {
      "id": "item-spring-wildflowers-terrarium-298",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Terrarium",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483006728
    },
    {
      "id": "item-starry-flowers-starry-tulip-310",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Tulip",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482832581
    },
    {
      "id": "item-starry-flowers-starry-rose-311",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Rose",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482828771
    },
    {
      "id": "item-starry-flowers-starry-daisy-312",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Daisy",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482817435
    },
    {
      "id": "item-starry-flowers-starry-narcissus-315",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-starry-flowers",
      "name": "Starry Narcissus",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "starry-flowers",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792482823220
    },
    {
      "id": "item-world-garden-stamp-rio-de-janeiro-botanical-garden-363",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Rio de Janeiro Botanical Garden",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483576650
    },
    {
      "id": "item-cherry-blossom-petal-spin-385",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Petal Spin",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483296238
    },
    {
      "id": "item-cherry-blossom-cherry-fall-388",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Cherry Fall",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792483311563
    },
    {
      "id": "item-desserts-donut-451",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Donut",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484920557
    },
    {
      "id": "item-desserts-swissroll-455",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "SwissRoll",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484938411
    },
    {
      "id": "item-alcoholic-beverages-astro-champagne-469",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Astro Champagne",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484888835
    },
    {
      "id": "item-cocktail-journey-mojito-474",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Mojito",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484815449
    },
    {
      "id": "item-cocktail-journey-singapore-sling-477",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Singapore Sling",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484793722
    },
    {
      "id": "item-chinese-flavor-i-chinese-xiaolongbao-498",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Chinese Xiaolongbao",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484492115
    },
    {
      "id": "item-chinese-flavor-i-luosifen-501",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Luosifen",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484511274
    },
    {
      "id": "item-chinese-flavor-i-rock-sugar-pear-502",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Rock Sugar Pear",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484525327
    },
    {
      "id": "item-go-germany-germany-golden-cup-506",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-germany",
      "name": "Germany Golden Cup",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-germany",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485083588
    },
    {
      "id": "item-happy-film-festival-cat-popcorn-517",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Cat Popcorn",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485196910
    },
    {
      "id": "item-happy-film-festival-love-record-521",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Love Record",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485214927
    },
    {
      "id": "item-happy-film-festival-film-projector-522",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Film projector",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": true,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485242227
    },
    {
      "id": "item-qixi-festival-person-in-book-554",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Person in Book",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485666443
    },
    {
      "id": "item-football-match-iii-trophy-pendant-611",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Trophy pendant",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486335069
    },
    {
      "id": "item-go-netherlands-football-flower-shop-615",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-netherlands",
      "name": "Football Flower Shop",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-netherlands",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486358965
    },
    {
      "id": "item-go-france-iron-tower-football-625",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-france",
      "name": "Iron Tower Football",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-france",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486422595
    },
    {
      "id": "item-go-argentina-gauchos-639",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-argentina",
      "name": "Gauchos",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-argentina",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486523737
    },
    {
      "id": "item-football-keychain-ii-brazil-pendant-653",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Brazil Pendant",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486735278
    },
    {
      "id": "item-football-keychain-i-japan-pendant-656",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Japan Pendant",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486773942
    },
    {
      "id": "item-football-keychain-i-australia-pendant-662",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Australia Pendant",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486793021
    },
    {
      "id": "item-football-match-pass-670",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Pass",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486862419
    },
    {
      "id": "item-football-match-ii-sliding-celebration-681",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Sliding celebration",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486905877
    },
    {
      "id": "item-football-match-ii-football-coronation-685",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Football coronation",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792486933848
    },
    {
      "id": "item-songkran-festival-songkran-687",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-songkran-festival",
      "name": "Songkran",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "songkran-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487044771
    },
    {
      "id": "item-venice-carnival-volta-carnival-mask-695",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-venice-carnival",
      "name": "Volta Carnival Mask",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "venice-carnival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792487079223
    },
    {
      "id": "item-holi-happy-holi-725",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-holi",
      "name": "Happy Holi",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "holi",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412622829
    },
    {
      "id": "item-st-patrick-s-day-leprechaun-729",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-st-patrick-s-day",
      "name": "Leprechaun",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "st-patrick-s-day",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412527026
    },
    {
      "id": "item-april-fools-day-prank-hammer-733",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-april-fools-day",
      "name": "Prank Hammer",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "april-fools-day",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412472674
    },
    {
      "id": "item-christmas-xmasbell-756",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-christmas",
      "name": "XmasBell",
      "baseValue": 199,
      "marketWorth": 199,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "christmas",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792412127589
    },
    {
      "id": "item-roaring-engine-goldwing-racer-104",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Goldwing Racer",
      "baseValue": 189,
      "marketWorth": 189,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792423057268
    },
    {
      "id": "item-new-year-greetings-luckypanda-561",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "LuckyPanda",
      "baseValue": 188,
      "marketWorth": 188,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485787288
    },
    {
      "id": "item-a-little-square-board-monopoly-149",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Monopoly",
      "baseValue": 159,
      "marketWorth": 159,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480746265
    },
    {
      "id": "item-a-little-square-board-xiangqi-154",
      "categoryId": "cat-art",
      "seriesId": "ser-art-a-little-square-board",
      "name": "Xiangqi",
      "baseValue": 159,
      "marketWorth": 159,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "a-little-square-board",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792480743711
    },
    {
      "id": "item-pixel-ice-cream-croissant-ice-cream-429",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Croissant Ice Cream",
      "baseValue": 159,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484169345
    },
    {
      "id": "item-dragon-boat-festival-cute-rice-587",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Cute Rice",
      "baseValue": 159,
      "marketWorth": 159,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792485981295
    },
    {
      "id": "item-creator-s-gifts-flower-language-fan-26",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Flower-language fan",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479174052
    },
    {
      "id": "item-starry-river-journey-star-phonograph-199",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-starry-river-journey",
      "name": "Star Phonograph",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "starry-river-journey",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cyber-frenzy-ii-cyber-guitar-211",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Cyber Guitar",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792481186790
    },
    {
      "id": "item-paws-of-attraction-shibaframe-283",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "ShibaFrame",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chocolate-feast-chocostick-408",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "ChocoStick",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483961151
    },
    {
      "id": "item-pixel-ice-cream-a-a-ice-cream-427",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Açaí Ice Cream",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484137583
    },
    {
      "id": "item-dragon-boat-festival-zongzi-590",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Zongzi",
      "baseValue": 129,
      "marketWorth": 129,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-luminous-heart-s-melody-feather-56",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Feather",
      "baseValue": 120,
      "marketWorth": 120,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-std-star-pouch-b7a76d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Star Pouch",
      "baseValue": 120,
      "marketWorth": 120,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733745160
    },
    {
      "id": "item-alcoholic-beverages-cocktail-464",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Cocktail",
      "baseValue": 119,
      "marketWorth": 119,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484866673
    },
    {
      "id": "item-winter-reunion-festival-warm-warm-lantern-736",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-winter-reunion-festival",
      "name": "Plum & Warm Lantern",
      "baseValue": 119,
      "marketWorth": 119,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "winter-reunion-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412428758
    },
    {
      "id": "item-cyber-frenzy-ii-fantasy-box-212",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Fantasy Box",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792481191963
    },
    {
      "id": "item-a-heart-full-of-felicity-fish-cat-309",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-a-heart-full-of-felicity",
      "name": "Fish Cat",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "a-heart-full-of-felicity",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-sakura-tea-392",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Sakura Tea",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483341307
    },
    {
      "id": "item-chocolate-feast-dessert-zodiac-417",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Dessert Zodiac",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-luminous-heart-s-melody-lilyperfume-53",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "LilyPerfume",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479331315
    },
    {
      "id": "item-echoes-of-love-bear-hug-75",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "Bear Hug",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479451282
    },
    {
      "id": "item-mid-autumn-festival-jaderabbit-536",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "JadeRabbit",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485360958
    },
    {
      "id": "item-std-miniufo-f532b9",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "MiniUFO",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 5
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-fate-echo-647413",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Fate Echo",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-night-penguin-5b57aa",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Night Penguin",
      "baseValue": 100,
      "marketWorth": 100,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-echoes-of-youth-mystery-gift-7",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792402665654
    },
    {
      "id": "item-live-streamer-s-trilogy-symphony-salute-14",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Symphony Salute",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792402689746
    },
    {
      "id": "item-creator-s-gifts-film-camera-27",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Film camera",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479180811
    },
    {
      "id": "item-happy-anniversary-ht-trophy-36",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "HT Trophy",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792403020342
    },
    {
      "id": "item-happy-birthday-birthday-balloon-43",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Balloon",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733752879
    },
    {
      "id": "item-romantic-vow-heartspark-60",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-romantic-vow",
      "name": "HeartSpark",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 3
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "emotion",
        "romantic-vow",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479360525
    },
    {
      "id": "item-collections-of-hearts-heartspark-68",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "HeartSpark",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479401952
    },
    {
      "id": "item-collections-of-hearts-mystery-gift-70",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792422574369
    },
    {
      "id": "item-roaring-engine-coin-racer-96",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Coin Racer",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792422971049
    },
    {
      "id": "item-roaring-engine-mystery-gift-97",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-roaring-engine",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "roaring-engine",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423081054
    },
    {
      "id": "item-the-road-to-fame-mystery-gift-121",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423279832
    },
    {
      "id": "item-the-road-to-fame-glory-crystal-125",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "Glory Crystal",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-wonderland-dream-mystery-gift-131",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479975233
    },
    {
      "id": "item-cyber-frenzy-ii-cyber-moto-216",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Cyber Moto",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-four-seasons-in-bloom-narcissus-260",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Narcissus",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482586883
    },
    {
      "id": "item-four-seasons-in-bloom-peach-blossom-261",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Peach Blossom",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482589790
    },
    {
      "id": "item-four-seasons-in-bloom-osmanthus-264",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Osmanthus",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482572664
    },
    {
      "id": "item-four-seasons-in-bloom-wintersweet-267",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-four-seasons-in-bloom",
      "name": "Wintersweet",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "four-seasons-in-bloom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-humanity-s-adorable-lop-eared-bunny-273",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Cuddly Lop-Eared Bunny",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482689167
    },
    {
      "id": "item-paws-of-attraction-toast-xc-278",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Toast XC",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483052496
    },
    {
      "id": "item-paws-of-attraction-bee-puppy-280",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Bee Puppy",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483066724
    },
    {
      "id": "item-paws-of-attraction-mystery-gift-281",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483083433
    },
    {
      "id": "item-paws-of-attraction-sweet-dreams-puppy-286",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Sweet Dreams Puppy",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-springtime-wishes-mystery-gift-289",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483037980
    },
    {
      "id": "item-spring-wildflowers-mystery-gift-296",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482974941
    },
    {
      "id": "item-star-wish-cat-land-mystery-gift-300",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482959254
    },
    {
      "id": "item-a-heart-full-of-felicity-mystery-gift-307",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-a-heart-full-of-felicity",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "a-heart-full-of-felicity",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482926175
    },
    {
      "id": "item-world-garden-stamp-yanggu-temple-360",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Yanggu Temple",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chocolate-feast-mystery-gift-412",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483994117
    },
    {
      "id": "item-global-ice-cream-festival-chinese-style-ice-dessert-432",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Chinese-style ice dessert",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484202294
    },
    {
      "id": "item-global-ice-cream-festival-durian-ice-cream-438",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Durian Ice Cream",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484228667
    },
    {
      "id": "item-global-ice-cream-festival-99-flake-440",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "99 Flake",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733751925
    },
    {
      "id": "item-alcoholic-beverages-cheers-463",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Cheers",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484864469
    },
    {
      "id": "item-cocktail-journey-pina-colada-472",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Pina Colada",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484829697
    },
    {
      "id": "item-flavors-of-the-american-continent-burger-484",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Burger",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484609830
    },
    {
      "id": "item-flavors-of-the-american-continent-big-burger-485",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Big Burger",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484606787
    },
    {
      "id": "item-flavors-of-the-american-continent-hot-dog-488",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Hot dog",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484591724
    },
    {
      "id": "item-chinese-flavor-i-tangyuan-494",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Tangyuan",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484475057
    },
    {
      "id": "item-chinese-flavor-i-sunflower-seeds-495",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Sunflower Seeds",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484476316
    },
    {
      "id": "item-go-germany-munich-beer-507",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-germany",
      "name": "Munich Beer",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-germany",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485086136
    },
    {
      "id": "item-oktoberfest-munich-beer-512",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Munich Beer",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485118911
    },
    {
      "id": "item-happy-film-festival-movie-corn-519",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Movie corn",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485207220
    },
    {
      "id": "item-mid-autumn-festival-rabbit-lantern-535",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Rabbit Lantern",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485358660
    },
    {
      "id": "item-new-year-greetings-mystery-gift-558",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485791637
    },
    {
      "id": "item-football-match-iii-color-fizz-605",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Color Fizz",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486311236
    },
    {
      "id": "item-football-match-iii-goal-moment-608",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Goal moment",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-netherlands-netherlands-gold-cup-616",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-netherlands",
      "name": "Netherlands Gold Cup",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-netherlands",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-france-france-gold-cup-623",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-france",
      "name": "France Gold Cup",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-france",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486429837
    },
    {
      "id": "item-go-england-england-gold-cup-628",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-england",
      "name": "England Gold Cup",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-england",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-england-football-cheers-629",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-england",
      "name": "Football Cheers",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-england",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-argentina-football-star-638",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-argentina",
      "name": "Football Star",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "go-argentina",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-keychain-ii-korean-pendant-646",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Korean Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486745513
    },
    {
      "id": "item-football-keychain-ii-egypt-pendant-647",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Egypt Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486748916
    },
    {
      "id": "item-football-keychain-ii-american-pendant-655",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "American Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-keychain-i-netherlands-pendant-658",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Netherlands Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486780261
    },
    {
      "id": "item-football-keychain-i-spain-pendant-659",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Spain Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486783153
    },
    {
      "id": "item-football-keychain-i-croatia-pendant-661",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Croatia Pendant",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486788847
    },
    {
      "id": "item-football-match-tackle-671",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Tackle",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486856695
    },
    {
      "id": "item-eid-al-fitr-ramadan-lantern-715",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Ramadan lantern",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412784281
    },
    {
      "id": "item-winter-reunion-festival-tangyuan-735",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-winter-reunion-festival",
      "name": "Tangyuan",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "celebration",
        "winter-reunion-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412360504
    },
    {
      "id": "item-collections-of-hearts-love-card-72",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Love Card",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-playful-parade-112",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Playful Parade",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423203279
    },
    {
      "id": "item-star-wish-cat-land-teacup-cat-302",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-star-wish-cat-land",
      "name": "Teacup Cat",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "lives",
        "star-wish-cat-land",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-panda-panda-bamboo-317",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-panda",
      "name": "Panda Bamboo",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "panda",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482765591
    },
    {
      "id": "item-world-garden-stamp-royal-botanic-garden-sydney-356",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Royal Botanic Garden Sydney",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483525873
    },
    {
      "id": "item-afternoon-tea-time-rose-latte-449",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "Rose Latte",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-desserts-sweetcake-456",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "SweetCake",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "desserts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-alcoholic-beverages-colorful-glass-468",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Colorful Glass",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-qixi-festival-jadeyearn-551",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "JadeYearn",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485637757
    },
    {
      "id": "item-go-england-bells-of-celebration-626",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-england",
      "name": "Bells of Celebration",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "go-england",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733753977
    },
    {
      "id": "item-go-argentina-tango-636",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-argentina",
      "name": "Tango",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "go-argentina",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733758602
    },
    {
      "id": "item-football-match-ii-2-yellow-cards-679",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "2 Yellow cards",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486913323
    },
    {
      "id": "item-easter-happy-easter-696",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-easter",
      "name": "Happy Easter",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "easter",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eid-al-fitr-star-moon-lantern-714",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Star Moon Lantern",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412838704
    },
    {
      "id": "item-std-sweet-float-bc4ad2",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Sweet Float",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733755716
    },
    {
      "id": "item-std-goddess-crown-f34976",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Goddess Crown",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733754566
    },
    {
      "id": "item-new-year-greetings-blast-556",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Blast",
      "baseValue": 88,
      "marketWorth": 88,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485688908
    },
    {
      "id": "item-wonderland-dream-heart-gem-130",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Heart Gem",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479967238
    },
    {
      "id": "item-springtime-wishes-spring-blessing-288",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "Spring Blessing",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483019616
    },
    {
      "id": "item-global-ice-cream-festival-frozen-yogurt-ice-cream-436",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Frozen Yogurt Ice Cream",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733760518
    },
    {
      "id": "item-desserts-rose-ice-cream-461",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Rose Ice Cream",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "desserts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-usa-victory-619",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-usa",
      "name": "Victory",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 6
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "go-usa",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486394019
    },
    {
      "id": "item-std-cash-gun-2f9237",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Cash gun",
      "baseValue": 79,
      "marketWorth": 79,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733759679
    },
    {
      "id": "item-mvf8ffa4-6khij2",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvf6lli1-91ioig",
      "name": "Dessert Plate",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792413011740
    },
    {
      "id": "item-creator-s-gifts-pearl-gift-box-28",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Pearl gift box",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792479182264
    },
    {
      "id": "item-back-to-the-millennium-tape-deck-84",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "tape deck",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-globecase-116",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "GlobeCase",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cherry-blossom-blossom-omamori-389",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Cherry Blossom Omamori",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483329251
    },
    {
      "id": "item-chocolate-feast-chocolate-415",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Chocolate",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484035113
    },
    {
      "id": "item-global-ice-cream-festival-coconut-ice-cream-430",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Coconut Ice Cream",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484189461
    },
    {
      "id": "item-chinese-flavor-i-qiegao-496",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Qiegao",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484480218
    },
    {
      "id": "item-go-germany-triumphant-return-505",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-germany",
      "name": "Triumphant Return",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-germany",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485087634
    },
    {
      "id": "item-happy-film-festival-popcorn-516",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Popcorn",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485202165
    },
    {
      "id": "item-football-match-iv-football-golden-cup-596",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Football Golden Cup",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486171483
    },
    {
      "id": "item-football-match-iii-successful-save-606",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Successful save",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486313964
    },
    {
      "id": "item-football-match-iii-kick-off-612",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iii",
      "name": "Kick-off",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-iii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-go-france-gallic-rooster-624",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-france",
      "name": "Gallic Rooster",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-france",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486431025
    },
    {
      "id": "item-venice-carnival-snack-basket-692",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-venice-carnival",
      "name": "Snack basket",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 17,
      "backpacks": {
        "lbs": 17,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "venice-carnival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792487082337
    },
    {
      "id": "item-venice-carnival-mask-693",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-venice-carnival",
      "name": "Mask",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "venice-carnival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792487083667
    },
    {
      "id": "item-st-patrick-s-day-shamrock-badge-728",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-st-patrick-s-day",
      "name": "Shamrock badge",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "celebration",
        "st-patrick-s-day",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412515846
    },
    {
      "id": "item-winter-reunion-festival-winter-solstice-737",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-winter-reunion-festival",
      "name": "Winter Solstice",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "celebration",
        "winter-reunion-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412401342
    },
    {
      "id": "item-std-seasidealbum-0cc36c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "SeasideAlbum",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 10,
      "backpacks": {
        "lbs": 10,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-concert-ticket-4a309d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Concert Ticket",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-kite-812a7d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Kite",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733762792
    },
    {
      "id": "item-std-rabbit-wine-db2c53",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Rabbit Wine",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-hishi-mochi-3b544e",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Hishi mochi",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-deer-isle-song-e6205b",
      "categoryId": "cat-home",
      "seriesId": "ser-mvkma262-gwvl83",
      "name": "Deer Isle Song",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792738723438
    },
    {
      "id": "item-eastern-musical-instrument-lotus-pipa-168",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "Lotus Pipa",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792480262460
    },
    {
      "id": "item-lotus-dreamscape-water-nest-397",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Water Nest",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483237256
    },
    {
      "id": "item-lotus-dreamscape-lotus-lamp-398",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Lotus Lamp",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483239270
    },
    {
      "id": "item-lotus-dreamscape-circle-fan-399",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Circle Fan",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483241631
    },
    {
      "id": "item-lotus-dreamscape-lotus-pipa-400",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Lotus Pipa",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483247239
    },
    {
      "id": "item-lotus-dreamscape-pavilion-401",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Pavilion",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483254378
    },
    {
      "id": "item-lotus-dreamscape-floral-fan-402",
      "categoryId": "cat-home",
      "seriesId": "ser-home-lotus-dreamscape",
      "name": "Floral Fan",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "lotus-dreamscape",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-mid-autumn-festival-mooncake-538",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-mid-autumn-festival",
      "name": "Mooncake",
      "baseValue": 66,
      "marketWorth": 66,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "mid-autumn-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485372664
    },
    {
      "id": "item-the-road-to-fame-flycrown-119",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-the-road-to-fame",
      "name": "FlyCrown",
      "baseValue": 60,
      "marketWorth": 60,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "the-road-to-fame",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423224037
    },
    {
      "id": "item-std-hairpin-8a5c2a",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Hairpin",
      "baseValue": 60,
      "marketWorth": 60,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733763551
    },
    {
      "id": "item-live-streamer-s-trilogy-celebration-key-13",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Celebration Key",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792402685428
    },
    {
      "id": "item-happy-birthday-birthday-magic-wand-42",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-birthday",
      "name": "Birthday Magic Wand",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "basic",
        "happy-birthday",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733677057
    },
    {
      "id": "item-echoes-of-love-heart-crit-79",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-echoes-of-love",
      "name": "Heart Crit",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "emotion",
        "echoes-of-love",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-back-to-the-millennium-photo-booth-83",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "photo booth",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-back-to-the-millennium-gachapon-89",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "gachapon",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-holiday-dove-108",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "Holiday Dove",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 3
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423114174
    },
    {
      "id": "item-ready-to-go-minicruise-111",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "MiniCruise",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792423128532
    },
    {
      "id": "item-wandering-in-wonderland-time-watch-202",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "Time Watch",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792481073468
    },
    {
      "id": "item-cyber-frenzy-ii-cyber-wand-213",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Cyber Wand",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792481196688
    },
    {
      "id": "item-cyber-frenzy-i-cyber-dagger-222",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Dagger",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733765223
    },
    {
      "id": "item-humanity-s-adorable-energetic-hamster-272",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Energetic Hamster",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792482671691
    },
    {
      "id": "item-paws-of-attraction-doggy-coins-277",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-paws-of-attraction",
      "name": "Doggy Coins",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "paws-of-attraction",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483047526
    },
    {
      "id": "item-world-garden-stamp-the-butchart-gardens-354",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "The Butchart Gardens",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483507733
    },
    {
      "id": "item-chocolate-feast-choco-box-407",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Choco Box",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483957106
    },
    {
      "id": "item-global-ice-cream-festival-cream-soda-433",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Cream Soda",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484206885
    },
    {
      "id": "item-global-ice-cream-festival-fruitpop-442",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Fruitpop",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484259057
    },
    {
      "id": "item-desserts-choco-box-450",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Choco Box",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484913853
    },
    {
      "id": "item-desserts-afternoon-tea-453",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Afternoon Tea",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484927180
    },
    {
      "id": "item-cocktail-journey-aperol-spritz-473",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Aperol Spritz",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792484828473
    },
    {
      "id": "item-flavors-of-the-american-continent-eggs-benedict-489",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Eggs Benedict",
      "baseValue": 59,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "limited"
      ],
      "notes": "",
      "updatedAt": 1792484580809
    },
    {
      "id": "item-chinese-flavor-i-spring-roll-503",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Spring Roll",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-happy-film-festival-entry-ticket-518",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Entry Ticket",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485200375
    },
    {
      "id": "item-childhood-dreamland-bubblemaker-525",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "BubbleMaker",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485280914
    },
    {
      "id": "item-childhood-dreamland-star-unicorn-526",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-childhood-dreamland",
      "name": "Star Unicorn",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "childhood-dreamland",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792485282228
    },
    {
      "id": "item-football-match-iv-foul-598",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Foul",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486179277
    },
    {
      "id": "item-football-match-iv-gold-medal-599",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Gold Medal",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792486181162
    },
    {
      "id": "item-football-match-ii-go-go-goal-678",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "GO GO GOAL",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792733767946
    },
    {
      "id": "item-football-match-ii-1-yellow-card-686",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "1 Yellow Card",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eid-al-fitr-shawarma-717",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Shawarma",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412766621
    },
    {
      "id": "item-christmas-xmaswreath-755",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-christmas",
      "name": "XmasWreath",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "christmas",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792412136983
    },
    {
      "id": "item-std-love-call-76f482",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Love Call",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-faith-book-a52666",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Faith Book",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-moon-sprite-47e249",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Moon Sprite",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733772323
    },
    {
      "id": "item-std-tinycastle-d5dc3e",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "TinyCastle",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733772821
    },
    {
      "id": "item-std-pink-moto-b225e5",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Pink Moto",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 6,
      "backpacks": {
        "lbs": 6,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-music-album-b5dcad",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Music Album",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-arctic-breeze-f2215c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Arctic Breeze",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 3
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-hot-dog-d46747",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Hot dog",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733769461
    },
    {
      "id": "item-std-pink-shutter-9f44bd",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "pink shutter",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-magic-tome-72ef09",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Magic Tome",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733771167
    },
    {
      "id": "item-std-birthday-ode-b45e5d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Birthday Ode",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-jewel-box-6592f2",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Jewel Box",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733770634
    },
    {
      "id": "item-std-hide-one-s-love-81e889",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Hide one's love",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733898388
    },
    {
      "id": "item-std-calligraphy-cba833",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Calligraphy",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-fairy-wings-a21444",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Fairy Wings",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733767132
    },
    {
      "id": "item-std-spring-hue-c5d109",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Spring Hue",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733674556
    },
    {
      "id": "item-springtime-wishes-fateflower-287",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-springtime-wishes",
      "name": "FateFlower",
      "baseValue": 50,
      "marketWorth": 50,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "springtime-wishes",
        "featured"
      ],
      "notes": "",
      "updatedAt": 1792483017488
    },
    {
      "id": "item-std-corridor-pavilion-423b4c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Corridor Pavilion",
      "baseValue": 50,
      "marketWorth": 50,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-live-streamer-s-trilogy-celebration-hat-10",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Celebration Hat",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-happy-anniversary-double-salute-cannon-33",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Double Salute Cannon",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479203103
    },
    {
      "id": "item-back-to-the-millennium-retro-pc-86",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "retro PC",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-ready-to-go-starbearcase-106",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "StarBearCase",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792423095853
    },
    {
      "id": "item-wonderland-dream-ruby-necklace-129",
      "categoryId": "cat-art",
      "seriesId": "ser-art-wonderland-dream",
      "name": "Ruby Necklace",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "wonderland-dream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479965318
    },
    {
      "id": "item-humanity-s-adorable-playful-parrot-275",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Playful Parrot",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733774805
    },
    {
      "id": "item-world-garden-stamp-longwood-gardens-362",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Longwood Gardens",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792734178549
    },
    {
      "id": "item-cherry-blossom-sakura-drink-395",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Sakura Drink",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-pixel-ice-cream-banana-split-422",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Banana Split",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733775539
    },
    {
      "id": "item-pixel-ice-cream-mango-ice-cream-428",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Mango Ice Cream",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-chinese-flavor-i-stinky-tofu-497",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Stinky Tofu",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484482026
    },
    {
      "id": "item-oktoberfest-golden-roast-whole-chicken-510",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Golden Roast Whole Chicken",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485126640
    },
    {
      "id": "item-oktoberfest-crispy-roasted-pork-knuckle-511",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Crispy Roasted Pork Knuckle",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485124283
    },
    {
      "id": "item-new-year-greetings-koi-lantern-557",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Koi lantern",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485693742
    },
    {
      "id": "item-football-match-iv-bronze-medal-594",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Bronze medal",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486165614
    },
    {
      "id": "item-football-match-iv-silver-medal-595",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Silver medal",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733777165
    },
    {
      "id": "item-go-england-victory-crown-627",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-england",
      "name": "Victory Crown",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-england",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486453655
    },
    {
      "id": "item-go-brazil-golden-sun-632",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-brazil",
      "name": "Golden Sun",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-brazil",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486480814
    },
    {
      "id": "item-football-match-goal-676",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Goal !",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486833349
    },
    {
      "id": "item-venice-carnival-queen-mask-694",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-venice-carnival",
      "name": "Queen Mask",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "venice-carnival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792487085109
    },
    {
      "id": "item-eid-al-fitr-glazed-glass-lantern-716",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-eid-al-fitr",
      "name": "Glazed glass lantern",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "eid-al-fitr",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-epiphany-king-cake-740",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-epiphany",
      "name": "King cake",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "epiphany",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792412334640
    },
    {
      "id": "item-std-iced-cola-91ebfd",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Iced Cola",
      "baseValue": 49,
      "marketWorth": 49,
      "quantity": 22,
      "backpacks": {
        "lbs": 22,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-football-match-dribble-past-666",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Dribble past",
      "baseValue": 48,
      "marketWorth": 48,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486854959
    },
    {
      "id": "item-football-match-iv-beer-cheers-597",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-iv",
      "name": "Beer & Cheers",
      "baseValue": 40,
      "marketWorth": 40,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-iv",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486176666
    },
    {
      "id": "item-football-match-ii-chill-beer-joy-682",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Chill Beer Joy",
      "baseValue": 40,
      "marketWorth": 40,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486897633
    },
    {
      "id": "item-live-streamer-s-trilogy-rubik-s-cube-12",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Rubik's Cube",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-creator-s-gifts-thank-you-letter-31",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Thank-You Letter",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479192635
    },
    {
      "id": "item-luminous-heart-s-melody-crystal-shell-49",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Crystal Shell",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479309570
    },
    {
      "id": "item-glimmering-hidden-paradise-magicconch-178",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "MagicConch",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 8,
      "backpacks": {
        "lbs": 8,
        "cryptid": 12
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792480870118
    },
    {
      "id": "item-doggo-squad-poodle-251",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Poodle",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482525966
    },
    {
      "id": "item-doggo-squad-bernese-mountain-dog-252",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Bernese Mountain Dog",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482530653
    },
    {
      "id": "item-humanity-s-adorable-adorable-tortoise-271",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-humanity-s-adorable",
      "name": "Adorable Tortoise",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 3
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "humanity-s-adorable",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482668996
    },
    {
      "id": "item-spring-wildflowers-spring-flower-bushes-293",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-spring-wildflowers",
      "name": "Spring flower bushes",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "spring-wildflowers",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482980501
    },
    {
      "id": "item-a-heart-full-of-felicity-heart-cat-305",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-a-heart-full-of-felicity",
      "name": "Heart Cat",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "a-heart-full-of-felicity",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482909529
    },
    {
      "id": "item-world-garden-stamp-villa-d-este-garden-353",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Villa d'Este Garden",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483504118
    },
    {
      "id": "item-cherry-blossom-japanese-flower-tea-390",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Japanese Flower Tea",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733779501
    },
    {
      "id": "item-global-ice-cream-festival-sundae-434",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Sundae",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733668487
    },
    {
      "id": "item-afternoon-tea-time-americano-444",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "Americano",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484287342
    },
    {
      "id": "item-afternoon-tea-time-coffeelove-446",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "CoffeeLove",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733778606
    },
    {
      "id": "item-afternoon-tea-time-green-tea-447",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-afternoon-tea-time",
      "name": "Green Tea",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "afternoon-tea-time",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484298743
    },
    {
      "id": "item-oktoberfest-german-sausage-platter-508",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "German Sausage Platter",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485134526
    },
    {
      "id": "item-oktoberfest-aromatic-apple-pie-509",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-oktoberfest",
      "name": "Aromatic Apple Pie",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "oktoberfest",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485132864
    },
    {
      "id": "item-new-year-greetings-lion-dance-555",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-new-year-greetings",
      "name": "Lion Dance",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "new-year-greetings",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485683969
    },
    {
      "id": "item-go-usa-freedom-torch-618",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-usa",
      "name": "Freedom Torch",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 15,
      "backpacks": {
        "lbs": 15,
        "cryptid": 6
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "go-usa",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486391720
    },
    {
      "id": "item-go-argentina-argentina-golden-cup-637",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-argentina",
      "name": "Argentina Golden Cup",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-argentina",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486517588
    },
    {
      "id": "item-go-argentina-tierra-del-fuego-640",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-argentina",
      "name": "Tierra del Fuego",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-argentina",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486512318
    },
    {
      "id": "item-football-keychain-ii-france-pendant-648",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "France Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 38,
      "backpacks": {
        "lbs": 38,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486750454
    },
    {
      "id": "item-football-keychain-ii-morocco-pendant-649",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Morocco Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 23,
      "backpacks": {
        "lbs": 23,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486751380
    },
    {
      "id": "item-football-keychain-ii-belgium-pendant-650",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Belgium Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486753351
    },
    {
      "id": "item-football-keychain-ii-mexico-pendant-651",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-ii",
      "name": "Mexico Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-keychain-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486752327
    },
    {
      "id": "item-football-keychain-i-colombian-pendant-657",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Colombian Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-keychain-i-iran-pendant-660",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Iran Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486785655
    },
    {
      "id": "item-football-keychain-i-canada-pendant-664",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Canada Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-keychain-i-portugal-pendant-665",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-keychain-i",
      "name": "Portugal Pendant",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-keychain-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-std-lovebattery-150ecd",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "LoveBattery",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-sofa-1d0b8d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Sofa",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-princess-violin-0834d9",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Princess Violin",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-page-blooms-9a8cbb",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Page Blooms",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-starry-moon-whisper-9d9c89",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Starry Moon Whisper",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-dream-chest-234e13",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Dream Chest",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-mood-shaker-91f6ea",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Mood Shaker",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733781279
    },
    {
      "id": "item-std-tea-pot-402bf7",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Tea Pot",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-flavors-of-the-american-continent-cola-486",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Cola",
      "baseValue": 35,
      "marketWorth": 35,
      "quantity": 19,
      "backpacks": {
        "lbs": 19,
        "cryptid": 11
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484599316
    },
    {
      "id": "item-creator-s-gifts-feather-notebook-30",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "Feather Notebook",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479191247
    },
    {
      "id": "item-luminous-heart-s-melody-gem-hearts-51",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Gem Hearts",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479323865
    },
    {
      "id": "item-a-heart-full-of-felicity-creamy-cat-306",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-a-heart-full-of-felicity",
      "name": "Creamy Cat",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "a-heart-full-of-felicity",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482906791
    },
    {
      "id": "item-autumn-delights-autumn-scarf-324",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Autumn Scarf",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733783733
    },
    {
      "id": "item-qixi-festival-magpie-545",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Magpie",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485602065
    },
    {
      "id": "item-std-jasmine-jelly-d8d072",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Jasmine jelly",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-candyapple-a5f3ed",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "CandyApple",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733784840
    },
    {
      "id": "item-std-harmonix-7200ec",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Harmonix",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 5
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-starlight-drum-f071a4",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Starlight Drum",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733791721
    },
    {
      "id": "item-std-carnival-headdress-3ea4ab",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Carnival Headdress",
      "baseValue": 30,
      "marketWorth": 30,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733786176
    },
    {
      "id": "item-live-streamer-s-trilogy-heart-paper-plane-11",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-live-streamer-s-trilogy",
      "name": "Heart Paper Plane",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "basic",
        "live-streamer-s-trilogy",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-collections-of-hearts-cute-bag-66",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Cute Bag",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479394315
    },
    {
      "id": "item-back-to-the-millennium-cute-pixel-pet-91",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "Cute Pixel Pet",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-eastern-musical-instrument-floraflute-169",
      "categoryId": "cat-art",
      "seriesId": "ser-art-eastern-musical-instrument",
      "name": "FloraFlute",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "art",
        "eastern-musical-instrument",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792480264603
    },
    {
      "id": "item-wandering-in-wonderland-lumibutterfly-200",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-wandering-in-wonderland",
      "name": "LumiButterfly",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "wandering-in-wonderland",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792481074517
    },
    {
      "id": "item-mysterious-europe-white-bridal-veil-236",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "White Bridal Veil",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482022643
    },
    {
      "id": "item-mysterious-europe-rose-scepter-238",
      "categoryId": "cat-apparel",
      "seriesId": "ser-apparel-mysterious-europe",
      "name": "Rose Scepter",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "apparel",
        "mysterious-europe",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733812767
    },
    {
      "id": "item-doggo-squad-samoyed-246",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Samoyed",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482506876
    },
    {
      "id": "item-doggo-squad-tibetan-mastiff-253",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Tibetan Mastiff",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733878081
    },
    {
      "id": "item-autumn-delights-corn-bouquet-326",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Corn Bouquet",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483694999
    },
    {
      "id": "item-autumn-delights-fall-wreath-331",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Fall Wreath",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483711783
    },
    {
      "id": "item-autumn-delights-moon-reed-332",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Moon Reed",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483714016
    },
    {
      "id": "item-world-garden-stamp-sch-nbrunn-palace-garden-358",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Schönbrunn Palace Gardens",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792738515887
    },
    {
      "id": "item-cherry-blossom-sakura-ice-cream-391",
      "categoryId": "cat-home",
      "seriesId": "ser-home-cherry-blossom",
      "name": "Sakura ice cream",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "cherry-blossom",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483334777
    },
    {
      "id": "item-pixel-ice-cream-puluoda-ice-cream-424",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Puluoda Ice Cream",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 6,
      "backpacks": {
        "lbs": 6,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484098200
    },
    {
      "id": "item-desserts-pumpkin-pie-458",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Pumpkin Pie",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "delicious",
        "desserts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-cocktail-journey-margarita-470",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Margarita",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733808427
    },
    {
      "id": "item-cocktail-journey-lemon-drop-martini-476",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-cocktail-journey",
      "name": "Lemon Drop Martini",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "cocktail-journey",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484822595
    },
    {
      "id": "item-flavors-of-the-american-continent-friedchicken-482",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "FriedChicken",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484614407
    },
    {
      "id": "item-flavors-of-the-american-continent-taco-483",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Taco",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484612171
    },
    {
      "id": "item-chinese-flavor-i-cantonese-sweet-soup-493",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chinese-flavor-i",
      "name": "Cantonese sweet soup",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "chinese-flavor-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733794442
    },
    {
      "id": "item-football-match-football-fireworks-672",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Football fireworks",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486851435
    },
    {
      "id": "item-football-match-winning-moment-673",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Winning moment",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1729000000000
    },
    {
      "id": "item-football-match-ii-soccer-683",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Soccer",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486922043
    },
    {
      "id": "item-holi-gulal-723",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-holi",
      "name": "Gulal",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "holi",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792412850890
    },
    {
      "id": "item-std-star-8212e3",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Star",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733813984
    },
    {
      "id": "item-std-peachjuice-9cffb9",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "PeachJuice",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733809112
    },
    {
      "id": "item-std-game-console-d73904",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "game console",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 6
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-cute-persimmon-b49396",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Cute Persimmon",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-ramen-4dc842",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Ramen",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733812261
    },
    {
      "id": "item-std-star-ship-e2aa07",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Star Ship",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733883341
    },
    {
      "id": "item-std-bearheart-964ced",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Bearheart",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-jelly-octo-bb41cb",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Jelly Octo",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733797651
    },
    {
      "id": "item-std-candy-cane-2f72a2",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Candy cane",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733793113
    },
    {
      "id": "item-std-lemon-tart-250742",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Lemon Tart",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733800125
    },
    {
      "id": "item-collections-of-hearts-lipstick-67",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Lipstick",
      "baseValue": 25,
      "marketWorth": 25,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479395920
    },
    {
      "id": "item-creator-s-gifts-white-rose-29",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-creator-s-gifts",
      "name": "White Rose",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "basic",
        "creator-s-gifts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479186802
    },
    {
      "id": "item-luminous-heart-s-melody-dream-bottle-52",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-luminous-heart-s-melody",
      "name": "Dream Bottle",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "luminous-heart-s-melody",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479326949
    },
    {
      "id": "item-cyber-frenzy-ii-blue-gun-208",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-ii",
      "name": "Blue Gun",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733819137
    },
    {
      "id": "item-std-maple-glow-d9f1bc",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Maple Glow",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-chill-time-bad0b7",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Chill Time",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-flip-flops-1adb37",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Flip-flops",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 8,
      "backpacks": {
        "lbs": 8,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-fashion-watch-aecff8",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Fashion Watch",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-mvkjid9q-3e32ee",
      "categoryId": "",
      "seriesId": "",
      "name": "Cheer Squad",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792734214984
    },
    {
      "id": "item-echoes-of-youth-proud-of-you-1",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Proud of You",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478989327
    },
    {
      "id": "item-echoes-of-youth-perfect-2",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Perfect",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478988089
    },
    {
      "id": "item-echoes-of-youth-much-better-3",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Much Better",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478986297
    },
    {
      "id": "item-echoes-of-youth-you-did-it-4",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "You Did It",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478985172
    },
    {
      "id": "item-echoes-of-youth-keep-it-up-5",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Keep It Up",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478983853
    },
    {
      "id": "item-echoes-of-youth-good-job-6",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-echoes-of-youth",
      "name": "Good Job",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "echoes-of-youth",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792478982614
    },
    {
      "id": "item-ready-to-go-golden-plane-109",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-ready-to-go",
      "name": "golden plane",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 3
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "modern",
        "ready-to-go",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792423118532
    },
    {
      "id": "item-cyber-frenzy-i-cyber-microphone-221",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Microphone",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792480378645
    },
    {
      "id": "item-doggo-squad-alaskan-malamute-243",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Alaskan Malamute",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482492796
    },
    {
      "id": "item-doggo-squad-beagle-249",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Beagle",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 6
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482520356
    },
    {
      "id": "item-autumn-delights-halfmoon-pancake-330",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Halfmoon Pancake",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483707349
    },
    {
      "id": "item-world-garden-stamp-kirstenbosch-national-botanical-garden-355",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Kirstenbosch National Botanical Garden",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483520481
    },
    {
      "id": "item-world-garden-stamp-singapore-botanic-gardens-361",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Singapore Botanic Gardens",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792651951107
    },
    {
      "id": "item-global-ice-cream-festival-affogato-435",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Affogato",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484214315
    },
    {
      "id": "item-global-ice-cream-festival-bread-ice-cream-437",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Bread Ice Cream",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733724121
    },
    {
      "id": "item-global-ice-cream-festival-chinese-ice-pop-439",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Old-School Chinese Ice Pop",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 14,
      "backpacks": {
        "lbs": 14,
        "cryptid": 30
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484246576
    },
    {
      "id": "item-desserts-strawberry-pudding-454",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Strawberry Pudding",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484930253
    },
    {
      "id": "item-flavors-of-the-american-continent-fries-487",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-flavors-of-the-american-continent",
      "name": "Fries",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "flavors-of-the-american-continent",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484597418
    },
    {
      "id": "item-qixi-festival-qixi-sachet-546",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Qixi Sachet",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 21,
      "backpacks": {
        "lbs": 21,
        "cryptid": 23
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485605865
    },
    {
      "id": "item-dragon-boat-festival-multicolored-cord-586",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-dragon-boat-festival",
      "name": "Multicolored Cord",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "dragon-boat-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485984523
    },
    {
      "id": "item-std-handlebar-mustache-cowboy-fb04b4",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Handlebar-mustache cowboy",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 9,
      "backpacks": {
        "lbs": 9,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-rose-bouquet-2bf936",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Rose Bouquet",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-good-fortune-has-arrived-e5e4b3",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Good fortune has arrived",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-basketball-star-60209b",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Basketball Star",
      "baseValue": 19,
      "marketWorth": 19,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-doggo-squad-corgi-247",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Corgi",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482509946
    },
    {
      "id": "item-doggo-squad-german-shepherd-248",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "German Shepherd",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482513043
    },
    {
      "id": "item-autumn-delights-grape-basket-327",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Grape Basket",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 32,
      "backpacks": {
        "lbs": 32,
        "cryptid": 10
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483698037
    },
    {
      "id": "item-go-usa-star-fondant-cookies-620",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-go-usa",
      "name": "Star Fondant Cookies",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "go-usa",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486398887
    },
    {
      "id": "item-std-flower-d90685",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Flower",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-passionate-love-delivery-c07f6c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Passionate Love Delivery",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 18,
      "backpacks": {
        "lbs": 18,
        "cryptid": 23
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-angel-crystal-ball-3a155d",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Angel Crystal Ball",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-paper-crane-76947b",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Paper Crane",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 12
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-desserts-baguette-457",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Baguette",
      "baseValue": 12,
      "marketWorth": 12,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484948211
    },
    {
      "id": "item-mvkji3yl-f2jkpg",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Eclair",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739572657
    },
    {
      "id": "item-cyber-frenzy-i-cyber-disc-220",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-cyber-frenzy-i",
      "name": "Cyber Disc",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 16,
      "backpacks": {
        "lbs": 16,
        "cryptid": 6
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "fantasy",
        "cyber-frenzy-i",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792480375594
    },
    {
      "id": "item-world-garden-stamp-monet-s-garden-352",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Monet's Garden",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 25,
      "backpacks": {
        "lbs": 25,
        "cryptid": 24
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483499411
    },
    {
      "id": "item-chocolate-feast-candy-chocolate-409",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "Candy Chocolate",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733662508
    },
    {
      "id": "item-pixel-ice-cream-kulfi-popsicle-419",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Kulfi Popsicle",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484075817
    },
    {
      "id": "item-pixel-ice-cream-gelato-420",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Gelato",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 29,
      "backpacks": {
        "lbs": 29,
        "cryptid": 27
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484077819
    },
    {
      "id": "item-global-ice-cream-festival-gelato-431",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "Gelato",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484192204
    },
    {
      "id": "item-global-ice-cream-festival-french-parfait-441",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-global-ice-cream-festival",
      "name": "French parfait",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "global-ice-cream-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484256527
    },
    {
      "id": "item-football-match-no-1-balloon-667",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "No.1 Balloon",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486884953
    },
    {
      "id": "item-football-match-ball-confetti-cannon-668",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match",
      "name": "Football confetti cannon",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 51,
      "backpacks": {
        "lbs": 51,
        "cryptid": 44
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486883348
    },
    {
      "id": "item-std-lovestrike-744da4",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "LoveStrike",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 5,
      "backpacks": {
        "lbs": 5,
        "cryptid": 39
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-shinyheart-402c36",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "ShinyHeart",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733706295
    },
    {
      "id": "item-std-firecracker-e7dd92",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Firecracker",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733722793
    },
    {
      "id": "item-std-snowflake-90b91c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Snowflake",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733704868
    },
    {
      "id": "item-std-kiwibird-147a20",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "KiwiBird",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 21,
      "backpacks": {
        "lbs": 21,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-star-wish-jar-2fb056",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Star Wish Jar",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 14,
      "backpacks": {
        "lbs": 14,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-paris-brest-e38789",
      "categoryId": "cat-delicious",
      "seriesId": "ser-mvkmlz9i-nw2g2g",
      "name": "Paris Brest",
      "baseValue": 10,
      "marketWorth": 10,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739341017
    },
    {
      "id": "item-gummy-party-treasure-hunter-16",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Treasure Hunter",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 49,
      "backpacks": {
        "lbs": 49,
        "cryptid": 54
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479148479
    },
    {
      "id": "item-gummy-party-super-lucky-17",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Super Lucky",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479149837
    },
    {
      "id": "item-gummy-party-happy-4-u-18",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Happy 4 U",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479150784
    },
    {
      "id": "item-gummy-party-get-well-soon-19",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Get Well Soon",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479152593
    },
    {
      "id": "item-gummy-party-i-m-here-4-u-20",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "I'm Here 4 U",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479153952
    },
    {
      "id": "item-gummy-party-thought-of-u-21",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Thought of U",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479157267
    },
    {
      "id": "item-gummy-party-nice-post-22",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Nice post!",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479158367
    },
    {
      "id": "item-gummy-party-flutter-23",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Flutter",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479159553
    },
    {
      "id": "item-gummy-party-bear-hug-24",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-gummy-party",
      "name": "Bear Hug",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "basic",
        "gummy-party",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479161826
    },
    {
      "id": "item-back-to-the-millennium-flip-phone-85",
      "categoryId": "cat-modern",
      "seriesId": "ser-modern-back-to-the-millennium",
      "name": "flip phone",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 9,
      "backpacks": {
        "lbs": 9,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "modern",
        "back-to-the-millennium",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792422821025
    },
    {
      "id": "item-doggo-squad-chow-chow-244",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Chow Chow",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482497782
    },
    {
      "id": "item-doggo-squad-pekingese-245",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Pekingese",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482500353
    },
    {
      "id": "item-autumn-delights-lucky-conker-328",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Lucky Conker",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483700529
    },
    {
      "id": "item-autumn-delights-chestnut-pal-329",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Chestnut Pal",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 9,
      "backpacks": {
        "lbs": 9,
        "cryptid": 13
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483703363
    },
    {
      "id": "item-world-garden-stamp-versailles-gardens-357",
      "categoryId": "cat-home",
      "seriesId": "ser-home-world-garden-stamp",
      "name": "Versailles Gardens",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "home",
        "world-garden-stamp",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792719899174
    },
    {
      "id": "item-pixel-ice-cream-waffle-ice-cream-421",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Waffle Ice Cream",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 65,
      "backpacks": {
        "lbs": 65,
        "cryptid": 57
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484081531
    },
    {
      "id": "item-pixel-ice-cream-shaved-ice-423",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Shaved Ice",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484091479
    },
    {
      "id": "item-desserts-cookie-452",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-desserts",
      "name": "Cookie",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Limited",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "delicious",
        "desserts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484908870
    },
    {
      "id": "item-qixi-festival-love-lantern-549",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Love Lantern",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 13,
      "backpacks": {
        "lbs": 13,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485623308
    },
    {
      "id": "item-std-give-you-a-like-23b8ac",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Give you a like",
      "baseValue": 9,
      "marketWorth": 9,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 10
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-collections-of-hearts-gilded-ruby-heart-69",
      "categoryId": "cat-emotion",
      "seriesId": "ser-emotion-collections-of-hearts",
      "name": "Gilded Ruby Heart",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series"
      ],
      "tags": [
        "emotion",
        "collections-of-hearts",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479412513
    },
    {
      "id": "item-glimmering-hidden-paradise-moon-butterfly-crown-181",
      "categoryId": "cat-fantasy",
      "seriesId": "ser-fantasy-glimmering-hidden-paradise",
      "name": "Moon Butterfly Crown",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "fantasy",
        "glimmering-hidden-paradise",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792480885058
    },
    {
      "id": "item-doggo-squad-shiba-inu-250",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-doggo-squad",
      "name": "Shiba Inu",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "doggo-squad",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482517340
    },
    {
      "id": "item-butterfly-series-pink-butterfly-254",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-butterfly-series",
      "name": "Pink Butterfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "lives",
        "butterfly-series",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482549510
    },
    {
      "id": "item-butterfly-series-blue-butterfly-255",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-butterfly-series",
      "name": "blue butterfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "butterfly-series",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482551035
    },
    {
      "id": "item-butterfly-series-black-butterfly-256",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-butterfly-series",
      "name": "Black Butterfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 65,
      "backpacks": {
        "lbs": 65,
        "cryptid": 57
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "butterfly-series",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482554171
    },
    {
      "id": "item-butterfly-series-yellow-butterfly-257",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-butterfly-series",
      "name": "Yellow Butterfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 4,
      "backpacks": {
        "lbs": 4,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "butterfly-series",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482557395
    },
    {
      "id": "item-butterfly-series-purple-butterfly-258",
      "categoryId": "cat-lives",
      "seriesId": "ser-lives-butterfly-series",
      "name": "Purple Butterfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 26,
      "backpacks": {
        "lbs": 26,
        "cryptid": 42
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "lives",
        "butterfly-series",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792482558847
    },
    {
      "id": "item-autumn-delights-small-ginkgo-umbrella-325",
      "categoryId": "cat-home",
      "seriesId": "ser-home-autumn-delights",
      "name": "Small Ginkgo Umbrella",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 6,
      "backpacks": {
        "lbs": 6,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "home",
        "autumn-delights",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483689643
    },
    {
      "id": "item-pixel-ice-cream-dondurma-418",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-pixel-ice-cream",
      "name": "Dondurma",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 53,
      "backpacks": {
        "lbs": 53,
        "cryptid": 8
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "pixel-ice-cream",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792484071248
    },
    {
      "id": "item-alcoholic-beverages-icy-golden-goblet-465",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-alcoholic-beverages",
      "name": "Icy Golden Goblet",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "alcoholic-beverages",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792733699967
    },
    {
      "id": "item-qixi-festival-qixi-jade-ring-547",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-qixi-festival",
      "name": "Qixi Jade Ring",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 23
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "qixi-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485608957
    },
    {
      "id": "item-football-match-ii-little-horn-680",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-football-match-ii",
      "name": "Little Horn",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 10,
      "backpacks": {
        "lbs": 10,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "celebration",
        "football-match-ii",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792486909494
    },
    {
      "id": "item-std-sea-bottle-2a6f69",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Sea Bottle",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-music-box-b3de3f",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Music Box",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-little-star-96445b",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Little Star",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 26,
      "backpacks": {
        "lbs": 26,
        "cryptid": 19
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-sunlit-bouquet-02a8ad",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Sunlit Bouquet",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733702027
    },
    {
      "id": "item-std-star-bag-4e681a",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Star Bag",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 3,
      "backpacks": {
        "lbs": 3,
        "cryptid": 4
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-fingerheart-e1ddcb",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Fingerheart",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 11,
      "backpacks": {
        "lbs": 11,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-bamboo-dragonfly-be6424",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Bamboo Dragonfly",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 2,
      "backpacks": {
        "lbs": 2,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-glimstar-ab045b",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "GlimStar",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 1
      },
      "wallOwned": true,
      "starred": true,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792733659713
    },
    {
      "id": "item-std-ruyi-scepter-6d7af1",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Ruyi scepter",
      "baseValue": 5,
      "marketWorth": 5,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 5
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-rose-c52c12",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Rose",
      "baseValue": 2,
      "marketWorth": 2,
      "quantity": 64,
      "backpacks": {
        "lbs": 64,
        "cryptid": 241
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-happy-anniversary-party-card-34",
      "categoryId": "cat-basic",
      "seriesId": "ser-basic-happy-anniversary",
      "name": "Party Card",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "series",
        "backpack"
      ],
      "tags": [
        "basic",
        "happy-anniversary",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792479204828
    },
    {
      "id": "item-chocolate-feast-chocoheart-410",
      "categoryId": "cat-delicious",
      "seriesId": "ser-delicious-chocolate-feast",
      "name": "ChocoHeart",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 10,
      "backpacks": {
        "lbs": 10,
        "cryptid": 5
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall",
        "backpack"
      ],
      "tags": [
        "delicious",
        "chocolate-feast",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792483967020
    },
    {
      "id": "item-happy-film-festival-glasses-520",
      "categoryId": "cat-celebration",
      "seriesId": "ser-celebration-happy-film-festival",
      "name": "Glasses",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series",
        "wall"
      ],
      "tags": [
        "celebration",
        "happy-film-festival",
        "standard"
      ],
      "notes": "",
      "updatedAt": 1792485208833
    },
    {
      "id": "item-std-sun-75063a",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Sun",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 22,
      "backpacks": {
        "lbs": 22,
        "cryptid": 10
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-disco-pony-001df3",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Disco Pony",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 17,
      "backpacks": {
        "lbs": 17,
        "cryptid": 14
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-blessing-0dc98b",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Blessing",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 116,
      "backpacks": {
        "lbs": 116,
        "cryptid": 81
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-light-stick-277416",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Light Stick",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 9,
      "backpacks": {
        "lbs": 9,
        "cryptid": 35
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-banner-f3364c",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Banner",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 95,
      "backpacks": {
        "lbs": 95,
        "cryptid": 132
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-tomato-0ee2f6",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Tomato",
      "baseValue": 1,
      "marketWorth": 1,
      "quantity": 48,
      "backpacks": {
        "lbs": 48,
        "cryptid": 30
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-welcome-47af88",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Welcome",
      "baseValue": 0,
      "marketWorth": 0,
      "quantity": 219,
      "backpacks": {
        "lbs": 219,
        "cryptid": 87
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-popcorn-dc0bcc",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Popcorn",
      "baseValue": 0,
      "marketWorth": 0,
      "quantity": 162,
      "backpacks": {
        "lbs": 162,
        "cryptid": 78
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-wings-39eb59",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Wings",
      "baseValue": 0,
      "marketWorth": 0,
      "quantity": 7,
      "backpacks": {
        "lbs": 7,
        "cryptid": 2
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-std-lollipop-39d2e8",
      "categoryId": "cat-basic",
      "seriesId": "",
      "name": "Lollipop",
      "baseValue": 0,
      "marketWorth": 0,
      "quantity": 6,
      "backpacks": {
        "lbs": 6,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792500000000
    },
    {
      "id": "item-mvkjl1nu-11l4nu",
      "categoryId": "",
      "seriesId": "",
      "name": "Schönbrunn Palace Gardens",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 1,
      "backpacks": {
        "lbs": 1,
        "cryptid": 0
      },
      "wallOwned": true,
      "starred": true,
      "tier": "Standard",
      "tabs": [
        "wall",
        "backpack"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792739096843
    },
    {
      "id": "item-mvknpiw9-hwa4sj",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "MagicBroom",
      "baseValue": 39,
      "marketWorth": 39,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ici51w",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Witch Hat",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-97mv85",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "JackOLantern",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-3giehs",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Ghost",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ikj4hw",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Casper",
      "baseValue": 29,
      "marketWorth": 29,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-10v60u",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "CandyCat",
      "baseValue": 1599,
      "marketWorth": 1599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-p3kd09",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Pumpkin Wand",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-6b34oi",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Candy broom",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-uf88z7",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Spook",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-e617zl",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Weird Box",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-umrb0d",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Cute Spook",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-55jik1",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Pumpkin Pail",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-5s4wro",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw8-hy7a88",
      "name": "Bubble Ghost",
      "baseValue": 69,
      "marketWorth": 69,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ny0tmq",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Mystic Castle",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-88wuv7",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Halloween Book",
      "baseValue": 999,
      "marketWorth": 999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-bp1wf3",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Ghost Cruise",
      "baseValue": 4999,
      "marketWorth": 4999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-prpbxl",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Hallow Trip",
      "baseValue": 6999,
      "marketWorth": 6999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-x3a99j",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "HauntedPark",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-h142rt",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Skeletons",
      "baseValue": 9999,
      "marketWorth": 9999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-8a2y3j",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Spooky Egg",
      "baseValue": 4999,
      "marketWorth": 4999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-s41ih6",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Candygram",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-n2eayi",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Lil Spook",
      "baseValue": 2000,
      "marketWorth": 2000,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-tkt390",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Candy Ghost",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-hrsgaq",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Pumpkin",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-n0ci77",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Halloween",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-0c4jjp",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-yqfu51",
      "name": "Sugar-Sprinkling Girl",
      "baseValue": 6599,
      "marketWorth": 6599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ho9blx",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "pumpkin castle",
      "baseValue": 1999,
      "marketWorth": 1999,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-sqom5k",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Lord Skeleton",
      "baseValue": 699,
      "marketWorth": 699,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-en9aid",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "pumpkin envelope",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-sn0kts",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "sweet tomb",
      "baseValue": 59,
      "marketWorth": 59,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-8fdfgv",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Pumpkin Candy",
      "baseValue": 109,
      "marketWorth": 109,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-obp0zj",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Halloween Sweetness",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-j4a5yq",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Ghost Kitty",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ag720q",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Ghost Hall",
      "baseValue": 1099,
      "marketWorth": 1099,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-czq5u6",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "ghost candelabra",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ehb1lp",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "magic cauldron feast",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-lzqyq3",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Trick Night",
      "baseValue": 2399,
      "marketWorth": 2399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Luxury",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-wjnuxv",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Witch Broom",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-1awtrm",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "Ghost Candy",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-b6ghmk",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-eqbk5q",
      "name": "pumpkin candy drop",
      "baseValue": 599,
      "marketWorth": 599,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-uqiaga",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Platform Postcard",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-6gyfjj",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Island Post",
      "baseValue": 89,
      "marketWorth": 89,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-9cfeyx",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Passionate Love Delivery",
      "baseValue": 15,
      "marketWorth": 15,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": true,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-ckpac3",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Winter Letter",
      "baseValue": 120,
      "marketWorth": 120,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-gy8o33",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Love Note",
      "baseValue": 20,
      "marketWorth": 20,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-5u6th5",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Mystery Gift",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": true,
      "tier": "Mystery Gift",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-oce1kf",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Coconut Env",
      "baseValue": 99,
      "marketWorth": 99,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Standard",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-g2hn9u",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "LoveLetters",
      "baseValue": 499,
      "marketWorth": 499,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-6r4eio",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Chubby love pigeon",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-wgkfjb",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Love Mail",
      "baseValue": 799,
      "marketWorth": 799,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-qaqqld",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "The Rose Letter",
      "baseValue": 299,
      "marketWorth": 299,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    },
    {
      "id": "item-mvknpiw9-er4m1f",
      "categoryId": "cat-celebration",
      "seriesId": "ser-mvknpiw9-2ftyyo",
      "name": "Love Letter",
      "baseValue": 399,
      "marketWorth": 399,
      "quantity": 0,
      "backpacks": {
        "lbs": 0,
        "cryptid": 0
      },
      "wallOwned": false,
      "starred": false,
      "isDistinctVariant": false,
      "tier": "Featured",
      "tabs": [
        "series"
      ],
      "tags": [],
      "notes": "",
      "updatedAt": 1792741008104
    }
  ],
  "tiers": [
    {
      "id": "tier-standard",
      "name": "Standard",
      "color": "#e2e8f0",
      "bg": "#1e293b",
      "border": "rgba(226, 232, 240, 0.25)",
      "rank": 10,
      "displayOrder": 1,
      "description": "Standard default tier"
    },
    {
      "id": "tier-featured",
      "name": "Featured",
      "color": "#38bdf8",
      "bg": "#0c4a6e",
      "border": "rgba(56, 189, 248, 0.35)",
      "rank": 40,
      "displayOrder": 2,
      "description": "Featured blue highlighted tier"
    },
    {
      "id": "tier-limited",
      "name": "Limited",
      "color": "#c084fc",
      "bg": "#3b0764",
      "border": "rgba(192, 132, 252, 0.35)",
      "rank": 60,
      "displayOrder": 3,
      "description": "Limited purple exclusive tier"
    },
    {
      "id": "tier-luxury",
      "name": "Luxury",
      "color": "#facc15",
      "bg": "#422006",
      "border": "rgba(250, 204, 21, 0.35)",
      "rank": 80,
      "displayOrder": 4,
      "description": "Luxury yellow prestige tier"
    },
    {
      "id": "tier-collection",
      "name": "Collection",
      "color": "#ef4444",
      "bg": "#450a0a",
      "border": "rgba(239, 68, 68, 0.35)",
      "rank": 100,
      "displayOrder": 5,
      "description": "Collection red apex tier"
    },
    {
      "id": "tier-mvertu49-em82ey",
      "name": "Mystery Gift",
      "color": "#ba2089",
      "bg": "rgba(186, 32, 137, 0.16)",
      "border": "rgba(186, 32, 137, 0.35)",
      "rank": 1,
      "displayOrder": 6,
      "description": ""
    }
  ],
  "themeConfig": {
    "tags": [
      {
        "key": "wall",
        "name": "Wall",
        "color": "#10b981",
        "displayOrder": 1
      },
      {
        "key": "series",
        "name": "Series",
        "color": "#06b6d4",
        "displayOrder": 2
      },
      {
        "key": "backpack",
        "name": "Backpack",
        "color": "#f43f5e",
        "displayOrder": 3
      }
    ],
    "tagColors": {
      "wall": "#10b981",
      "series": "#06b6d4",
      "backpack": "#f43f5e"
    }
  }
};

  const APP_VERSION = DEFAULT_SEED.version || '1.0.1';

  // Shared SVG Icons for contextual tags
  const TAG_ICONS = {
    wall: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>',
    series: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    backpack: '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path><path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path><line x1="8" y1="10" x2="16" y2="10"></line></svg>'
  };

  const DEFAULT_TAGS = [
    { key: 'wall', name: 'Wall', color: '#10b981', displayOrder: 1 },
    { key: 'series', name: 'Series', color: '#06b6d4', displayOrder: 2 },
    { key: 'backpack', name: 'Backpack', color: '#f43f5e', displayOrder: 3 }
  ];

  // ------------------------------------------------------------------
  // 1. STATE MANAGER (UNIFIED MASTER REPOSITORY)
  // ------------------------------------------------------------------
  class VaultState {
    constructor() {
      this.reconciliationNotice = null;
      this._saveTimer = null;
      this.data = this.loadState();
      this.listeners = [];
      this.rebuildLookupMaps();

      if (typeof window !== 'undefined') {
        const flushPendingSave = () => {
          if (this._saveTimer) {
            clearTimeout(this._saveTimer);
            this._saveTimer = null;
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
            } catch (e) {}
          }
        };
        window.addEventListener('pagehide', flushPendingSave);
        window.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') flushPendingSave();
        });
      }
    }

    loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object' && Array.isArray(parsed.items)) {
            const safeItems = parsed.items.map(item => {
              if (!item || typeof item !== 'object') return null;
              let notesVal = String(item.notes ?? '').trim();
              if (notesVal.includes(' > ') || notesVal.includes('coins).')) notesVal = '';
              const catId = String(item.categoryId ?? '').trim();
              const serId = String(item.seriesId ?? '').trim();
              const isWallOwned = typeof item.wallOwned === 'boolean' ? item.wallOwned : false;
              const rawQty = Math.max(0, Math.floor(Number(item.quantity) || 0));
              const backpacksObj = (item.backpacks && typeof item.backpacks === 'object') ? {
                lbs: Math.max(0, Math.floor(Number(item.backpacks.lbs) || 0)),
                cryptid: Math.max(0, Math.floor(Number(item.backpacks.cryptid) || 0))
              } : {
                lbs: rawQty,
                cryptid: 0
              };

              let itemTabs = Array.isArray(item.tabs) ? item.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
              if (catId && serId && !itemTabs.includes('series')) {
                itemTabs.push('series');
              }
              if (isWallOwned && !itemTabs.includes('wall')) {
                itemTabs.push('wall');
              }
              const hasAnyBpStock = (backpacksObj.lbs > 0 || backpacksObj.cryptid > 0);
              if (hasAnyBpStock && !itemTabs.includes('backpack')) {
                itemTabs.push('backpack');
              }
              const finalWallOwned = isWallOwned || itemTabs.includes('wall');
              if (finalWallOwned && !itemTabs.includes('wall')) {
                itemTabs.push('wall');
              }
              itemTabs = [...new Set(itemTabs)];
              let finalQty = backpacksObj.lbs;
              if (itemTabs.includes('backpack') && finalQty === 0 && backpacksObj.cryptid === 0) {
                finalQty = 1;
                backpacksObj.lbs = 1;
              } else if (!itemTabs.includes('backpack') && hasAnyBpStock) {
                itemTabs.push('backpack');
              }

              const baseCoins = Math.max(0, Number(item.baseValue) || 0);
              const rawMarket = Number(item.marketWorth);
              const marketCoins = (!isNaN(rawMarket) && rawMarket > 0) ? rawMarket : baseCoins;

              return {
                id: String(item.id || '').trim(),
                categoryId: catId,
                seriesId: serId,
                name: String(item.name ?? '').trim(),
                baseValue: baseCoins,
                marketWorth: marketCoins,
                quantity: finalQty,
                backpacks: backpacksObj,
                wallOwned: finalWallOwned,
                starred: typeof item.starred === 'boolean' ? item.starred : false,
                isDistinctVariant: typeof item.isDistinctVariant === 'boolean' ? item.isDistinctVariant : !!(DEFAULT_SEED.items && DEFAULT_SEED.items.find(si => si.id === item.id)?.isDistinctVariant),
                tier: String(item.tier || 'Standard').trim(),
                tabs: itemTabs,
                tags: Array.isArray(item.tags) ? item.tags.map(t => String(t).trim()).filter(Boolean) : [],
                notes: notesVal,
                updatedAt: Number(item.updatedAt) || Date.now()
              };
            }).filter(Boolean);

              const safeCategories = (Array.isArray(parsed.categories) ? parsed.categories : DEFAULT_SEED.categories).map(cat => {
                if (!cat || typeof cat !== 'object') return null;
                return {
                  id: String(cat.id || '').trim(),
                  name: String(cat.name || '').trim(),
                  order: Number(cat.order) || 1,
                  description: String(cat.description || '').trim()
                };
              }).filter(Boolean);

              const safeSeries = (Array.isArray(parsed.series) ? parsed.series : DEFAULT_SEED.series).map(ser => {
                if (!ser || typeof ser !== 'object') return null;
                return {
                  id: String(ser.id || '').trim(),
                  categoryId: String(ser.categoryId || '').trim(),
                  name: String(ser.name || '').trim(),
                  badge: String(ser.badge || '').trim(),
                  description: String(ser.description || '').trim(),
                  displayOrder: Number(ser.displayOrder ?? ser.order) || 1
                };
              }).filter(Boolean);

              const safeTiers = (Array.isArray(parsed.tiers) ? parsed.tiers : DEFAULT_SEED.tiers).map(t => {
                if (!t || typeof t !== 'object') return null;
                return {
                  id: String(t.id || '').trim(),
                  name: String(t.name || '').trim(),
                  color: String(t.color || '#e2e8f0').trim(),
                  bg: String(t.bg || 'rgba(226, 232, 240, 0.16)').trim(),
                  border: String(t.border || 'rgba(226, 232, 240, 0.35)').trim(),
                  rank: Number(t.rank) || 10,
                  displayOrder: Number(t.displayOrder ?? t.order) || 1,
                  description: String(t.description || '').trim()
                };
              }).filter(Boolean);

              let tags = DEFAULT_TAGS.map(t => ({ ...t }));
              if (parsed.themeConfig && typeof parsed.themeConfig === 'object') {
                if (Array.isArray(parsed.themeConfig.tags) && parsed.themeConfig.tags.length > 0) {
                  tags = DEFAULT_TAGS.map(def => {
                    const found = parsed.themeConfig.tags.find(t => t && t.key === def.key);
                    if (found) {
                      return {
                        key: def.key,
                        name: String(found.name || def.name).trim(),
                        color: String(found.color || def.color).trim(),
                        displayOrder: Number(found.displayOrder) || def.displayOrder
                      };
                    }
                    return { ...def };
                  }).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
                } else if (parsed.themeConfig.tagColors) {
                  tags.forEach(t => {
                    if (parsed.themeConfig.tagColors[t.key]) t.color = parsed.themeConfig.tagColors[t.key];
                  });
                }
              }
              const tagColors = {
                wall: tags.find(t => t.key === 'wall')?.color || '#10b981',
                series: tags.find(t => t.key === 'series')?.color || '#06b6d4',
                backpack: tags.find(t => t.key === 'backpack')?.color || '#f43f5e'
              };
              let themeConfig = {
                tags,
                tagColors
              };
              // ------------------------------------------------------------------
              // SEED RECONCILIATION ENGINE: Merge new seed items while preserving user state
              // ------------------------------------------------------------------
              const existingItemIds = new Set(safeItems.map(i => i.id));
              const existingItemKeys = new Set(safeItems.map(i => `${i.seriesId}:::${(i.name || '').trim().toLowerCase()}`));
              let newlyAddedGiftsCount = 0;

              if (Array.isArray(DEFAULT_SEED.items)) {
                const seedMap = new Map(DEFAULT_SEED.items.map(si => [si.id, si]));
                const isVersionUpgrade = (parsed.version !== APP_VERSION);
                safeItems.forEach(item => {
                  const seed = seedMap.get(item.id);
                  if (seed) {
                    if (!item.marketWorth || item.marketWorth <= 0 || item.marketWorth !== item.baseValue) {
                      item.marketWorth = seed.marketWorth || item.baseValue;
                    }
                    const itemTierLower = (item.tier || '').toLowerCase();
                    const isExempt = itemTierLower.includes('limited') || itemTierLower.includes('mystery');
                    if (!isExempt && seed.tier && seed.tier !== item.tier) {
                      item.tier = seed.tier;
                    }
                    // Reconcile official seed backpack quantities & wall ownership
                    if (isVersionUpgrade) {
                      if (seed.backpacks) {
                        const curLbs = item.backpacks ? Number(item.backpacks.lbs) || 0 : 0;
                        const curCryptid = item.backpacks ? Number(item.backpacks.cryptid) || 0 : 0;
                        const seedLbs = Number(seed.backpacks.lbs) || 0;
                        const seedCryptid = Number(seed.backpacks.cryptid) || 0;
                        item.backpacks = {
                          lbs: Math.max(curLbs, seedLbs),
                          cryptid: Math.max(curCryptid, seedCryptid)
                        };
                        item.quantity = item.backpacks.lbs;
                      }
                      if (seed.wallOwned || (Array.isArray(seed.tabs) && seed.tabs.includes('wall')) || item.wallOwned || (Array.isArray(item.tabs) && item.tabs.includes('wall'))) {
                        item.wallOwned = true;
                        if (!item.tabs.includes('wall')) {
                          item.tabs.push('wall');
                        }
                      }
                      const hasStock = ((item.backpacks?.lbs || 0) > 0 || (item.backpacks?.cryptid || 0) > 0);
                      if (hasStock && !item.tabs.includes('backpack')) {
                        item.tabs.push('backpack');
                      } else if (!hasStock) {
                        item.tabs = item.tabs.filter(t => t !== 'backpack');
                      }
                      if (item.wallOwned && !item.tabs.includes('wall')) {
                        item.tabs.push('wall');
                      }
                    } else {
                      if (seed.backpacks) {
                        const curLbs = item.backpacks ? Number(item.backpacks.lbs) || 0 : 0;
                        const curCryptid = item.backpacks ? Number(item.backpacks.cryptid) || 0 : 0;
                        if (curLbs === 0 && curCryptid === 0 && ((seed.backpacks.lbs || 0) > 0 || (seed.backpacks.cryptid || 0) > 0)) {
                          item.backpacks = {
                            lbs: Number(seed.backpacks.lbs) || 0,
                            cryptid: Number(seed.backpacks.cryptid) || 0
                          };
                          item.quantity = item.backpacks.lbs;
                          if (!item.tabs.includes('backpack')) item.tabs.push('backpack');
                        }
                      }
                      if ((seed.wallOwned || (Array.isArray(seed.tabs) && seed.tabs.includes('wall'))) && !item.wallOwned) {
                        item.wallOwned = true;
                        if (!item.tabs.includes('wall')) item.tabs.push('wall');
                      }
                    }
                  } else if (!item.marketWorth || item.marketWorth <= 0) {
                    item.marketWorth = item.baseValue;
                  }
                });

                DEFAULT_SEED.items.forEach(seedItem => {
                  if (!seedItem || !seedItem.id) return;
                  const key = `${seedItem.seriesId}:::${(seedItem.name || '').trim().toLowerCase()}`;
                  if (!existingItemIds.has(seedItem.id) && !existingItemKeys.has(key)) {
                    safeItems.push({
                      id: String(seedItem.id).trim(),
                      categoryId: String(seedItem.categoryId || '').trim(),
                      seriesId: String(seedItem.seriesId || '').trim(),
                      name: String(seedItem.name || '').trim(),
                      baseValue: Math.max(0, Number(seedItem.baseValue) || 0),
                      marketWorth: Math.max(0, Number(seedItem.marketWorth) || Number(seedItem.baseValue) || 0),
                      quantity: seedItem.quantity || (seedItem.backpacks?.lbs || 0),
                      backpacks: seedItem.backpacks ? { ...seedItem.backpacks } : { lbs: 0, cryptid: 0 },
                      wallOwned: !!seedItem.wallOwned || (Array.isArray(seedItem.tabs) && seedItem.tabs.includes('wall')),
                      starred: !!seedItem.starred,
                      tier: String(seedItem.tier || 'Standard').trim(),
                      tabs: Array.isArray(seedItem.tabs) ? [...seedItem.tabs] : (seedItem.seriesId ? ['series'] : []),
                      tags: Array.isArray(seedItem.tags) ? [...seedItem.tags] : [],
                      notes: '',
                      updatedAt: Date.now()
                    });
                    existingItemIds.add(seedItem.id);
                    existingItemKeys.add(key);
                    newlyAddedGiftsCount++;
                  }
                });
              }

              const existingCatIds = new Set(safeCategories.map(c => c.id));
              if (Array.isArray(DEFAULT_SEED.categories)) {
                DEFAULT_SEED.categories.forEach(seedCat => {
                  if (seedCat && seedCat.id && !existingCatIds.has(seedCat.id)) {
                    safeCategories.push({
                      id: String(seedCat.id).trim(),
                      name: String(seedCat.name || '').trim(),
                      order: Number(seedCat.order) || 1,
                      description: String(seedCat.description || '').trim()
                    });
                    existingCatIds.add(seedCat.id);
                  }
                });
              }

              const existingSeriesIds = new Set(safeSeries.map(s => s.id));
              if (Array.isArray(DEFAULT_SEED.series)) {
                DEFAULT_SEED.series.forEach(seedSer => {
                  if (seedSer && seedSer.id && !existingSeriesIds.has(seedSer.id)) {
                    safeSeries.push({
                      id: String(seedSer.id).trim(),
                      categoryId: String(seedSer.categoryId || '').trim(),
                      name: String(seedSer.name || '').trim(),
                      badge: String(seedSer.badge || '').trim(),
                      description: String(seedSer.description || '').trim(),
                      displayOrder: Number(seedSer.displayOrder ?? seedSer.order) || 1
                    });
                    existingSeriesIds.add(seedSer.id);
                  }
                });
              }

              const existingTierIds = new Set(safeTiers.map(t => t.id));
              const existingTierNames = new Set(safeTiers.map(t => (t.name || '').trim().toLowerCase()));
              let newlyAddedTiersCount = 0;
              if (Array.isArray(DEFAULT_SEED.tiers)) {
                DEFAULT_SEED.tiers.forEach(seedTier => {
                  if (!seedTier || !seedTier.id) return;
                  const nameKey = (seedTier.name || '').trim().toLowerCase();
                  const existingTier = safeTiers.find(t => t.id === seedTier.id || (t.name || '').trim().toLowerCase() === nameKey);
                  if (existingTier) {
                    const color = String(seedTier.color || existingTier.color || '#e2e8f0').trim();
                    const rgb = this.hexToRgb ? this.hexToRgb(color) : '226, 232, 240';
                    existingTier.color = color;
                    existingTier.bg = String(seedTier.bg || `rgba(${rgb}, 0.16)`).trim();
                    existingTier.border = String(seedTier.border || `rgba(${rgb}, 0.35)`).trim();
                    if (seedTier.name) existingTier.name = String(seedTier.name).trim();
                    if (seedTier.description !== undefined) existingTier.description = String(seedTier.description).trim();
                    if (seedTier.rank !== undefined) existingTier.rank = Number(seedTier.rank);
                  } else {
                    const color = String(seedTier.color || '#e2e8f0').trim();
                    const rgb = this.hexToRgb ? this.hexToRgb(color) : '226, 232, 240';
                    safeTiers.push({
                      id: String(seedTier.id).trim(),
                      name: String(seedTier.name || '').trim(),
                      color,
                      bg: String(seedTier.bg || `rgba(${rgb}, 0.16)`).trim(),
                      border: String(seedTier.border || `rgba(${rgb}, 0.35)`).trim(),
                      rank: Number(seedTier.rank) || 10,
                      displayOrder: Number(seedTier.displayOrder ?? seedTier.order) || (safeTiers.length + 1),
                      description: String(seedTier.description || '').trim()
                    });
                    existingTierIds.add(seedTier.id);
                    existingTierNames.add(nameKey);
                    newlyAddedTiersCount++;
                  }
                });
              }

              if (newlyAddedGiftsCount > 0 || newlyAddedTiersCount > 0) {
                const parts = [];
                if (newlyAddedGiftsCount > 0) parts.push(`+${newlyAddedGiftsCount} gifts`);
                if (newlyAddedTiersCount > 0) parts.push(`+${newlyAddedTiersCount} tiers`);
                this.reconciliationNotice = `Catalog updated to v${APP_VERSION} (${parts.join(', ')} added). Inventory preserved.`;
              }

              return {
                version: APP_VERSION,
                lastExported: Number(parsed.lastExported) || Date.now(),
                categories: safeCategories,
                series: safeSeries,
                items: safeItems,
                tiers: safeTiers,
                themeConfig
              };
          }
        }
      } catch (err) {
        console.warn('HelloTalk Database: Error parsing localStorage, loading official seed.', err);
      }
      const seedCopy = JSON.parse(JSON.stringify(DEFAULT_SEED));
      if (!seedCopy.themeConfig) {
        seedCopy.themeConfig = {
          tags: DEFAULT_TAGS.map(t => ({ ...t })),
          tagColors: { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' }
        };
      }
      return seedCopy;
    }

    getTags() {
      if (!this.data.themeConfig || !Array.isArray(this.data.themeConfig.tags)) {
        return DEFAULT_TAGS.map(t => ({ ...t }));
      }
      return [...this.data.themeConfig.tags].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
    }

    getTag(key) {
      const tags = this.getTags();
      return tags.find(t => t.key === key) || DEFAULT_TAGS.find(t => t.key === key) || null;
    }

    getTagName(key) {
      const tag = this.getTag(key);
      return tag ? tag.name : (key.charAt(0).toUpperCase() + key.slice(1));
    }

    updateTag(key, updates = {}) {
      if (!this.data.themeConfig) this.data.themeConfig = {};
      if (!Array.isArray(this.data.themeConfig.tags)) {
        this.data.themeConfig.tags = DEFAULT_TAGS.map(t => ({ ...t }));
      }
      const tag = this.data.themeConfig.tags.find(t => t.key === key);
      if (tag) {
        if (updates.name !== undefined) tag.name = String(updates.name).trim();
        if (updates.color !== undefined) tag.color = String(updates.color).trim();
        if (updates.displayOrder !== undefined) tag.displayOrder = Number(updates.displayOrder);
      }
      if (!this.data.themeConfig.tagColors) this.data.themeConfig.tagColors = {};
      this.data.themeConfig.tags.forEach(t => {
        this.data.themeConfig.tagColors[t.key] = t.color;
      });
      this.saveState();
    }

    updateTagOrder(key, newOrder) {
      this.updateTag(key, { displayOrder: newOrder });
    }

    resetTags() {
      if (!this.data.themeConfig) this.data.themeConfig = {};
      this.data.themeConfig.tags = DEFAULT_TAGS.map(t => ({ ...t }));
      this.data.themeConfig.tagColors = {
        wall: '#10b981',
        series: '#06b6d4',
        backpack: '#f43f5e'
      };
      this.saveState();
    }

    getTagColors() {
      const defaults = { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' };
      if (!this.data.themeConfig) return defaults;
      if (this.data.themeConfig.tagColors) {
        return {
          wall: this.data.themeConfig.tagColors.wall || defaults.wall,
          series: this.data.themeConfig.tagColors.series || defaults.series,
          backpack: this.data.themeConfig.tagColors.backpack || defaults.backpack
        };
      }
      return defaults;
    }

    setTagColor(tagKey, hexColor) {
      this.updateTag(tagKey, { color: hexColor });
    }

    resetTagColors() {
      this.resetTags();
    }

    saveState(silent = false, immediate = false) {
      this.data.lastExported = Date.now();
      this.rebuildLookupMaps();

      const persistToDisk = () => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        } catch (e) {
          console.warn('HelloTalk Database: Failed to save state to localStorage', e);
        }
      };

      if (immediate || !silent) {
        if (this._saveTimer) {
          clearTimeout(this._saveTimer);
          this._saveTimer = null;
        }
        persistToDisk();
      } else {
        if (this._saveTimer) clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => {
          persistToDisk();
          this._saveTimer = null;
        }, 200);
      }

      if (!silent) this.notify();
    }

    rebuildLookupMaps() {
      this.seriesMap = new Map();
      if (Array.isArray(this.data?.series)) {
        this.data.series.forEach(s => this.seriesMap.set(s.id, s));
      }
      this.categoryMap = new Map();
      if (Array.isArray(this.data?.categories)) {
        this.data.categories.forEach(c => this.categoryMap.set(c.id, c));
      }
      this.tierMap = new Map();
      if (Array.isArray(this.data?.tiers)) {
        this.data.tiers.forEach(t => {
          if (t.id) this.tierMap.set(t.id.toLowerCase(), t);
          if (t.name) this.tierMap.set(t.name.toLowerCase(), t);
        });
      }
      this.itemMap = new Map();
      if (Array.isArray(this.data?.items)) {
        this.data.items.forEach(i => this.itemMap.set(i.id, i));
      }
    }

    save() {
      this.saveState();
    }

    notify() {
      this.listeners.forEach(fn => fn(this.data));
    }

    subscribe(fn) {
      this.listeners.push(fn);
    }

    uid(prefix = 'id') {
      return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 6)}`;
    }

    // Session Action Journal (Tracks user operations for smart GitHub commit messages)
    recordAction(action) {
      try {
        const raw = localStorage.getItem('ht_session_journal');
        let journal = raw ? JSON.parse(raw) : [];
        if (!Array.isArray(journal)) journal = [];
        journal.push({
          ...action,
          timestamp: Date.now()
        });
        if (journal.length > 100) journal = journal.slice(-100);
        localStorage.setItem('ht_session_journal', JSON.stringify(journal));
      } catch (e) {}
    }

    getJournal() {
      try {
        const raw = localStorage.getItem('ht_session_journal');
        const journal = raw ? JSON.parse(raw) : [];
        return Array.isArray(journal) ? journal : [];
      } catch (e) {
        return [];
      }
    }

    clearJournal() {
      try {
        localStorage.removeItem('ht_session_journal');
      } catch (e) {}
    }

    // Item Operations
    getItem(id) {
      if (!id) return null;
      return this.itemMap?.get(id) || this.data.items.find(i => i.id === id);
    }

    addItem(itemData) {
      const id = this.uid('item');
      const catId = (itemData.categoryId || '').trim();
      const serId = (itemData.seriesId || '').trim();
      let itemTabs = Array.isArray(itemData.tabs) ? itemData.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
      if (catId && serId && !itemTabs.includes('series')) {
        itemTabs.push('series');
      }
      if (itemData.wallOwned && !itemTabs.includes('wall')) {
        itemTabs.push('wall');
      }
      if ((Number(itemData.quantity) || 0) > 0 && !itemTabs.includes('backpack')) {
        itemTabs.push('backpack');
      }
      if (itemTabs.length === 0) {
        if (catId && serId) itemTabs.push('series');
        else itemTabs.push('backpack');
      }
      itemTabs = [...new Set(itemTabs)];
      const wallOwned = itemTabs.includes('wall') || !!itemData.wallOwned;
      let qty = 0;
      if (itemTabs.includes('backpack')) {
        qty = Math.max(1, Math.floor(Number(itemData.quantity) || 0));
      }

      const baseCoins = Math.max(0, Number(itemData.baseValue) || 0);
      const rawMarket = Number(itemData.marketWorth);
      const marketCoins = (!isNaN(rawMarket) && rawMarket > 0) ? rawMarket : baseCoins;

      const newItem = {
        id,
        categoryId: catId,
        seriesId: serId,
        name: (itemData.name || '').trim(),
        baseValue: baseCoins,
        marketWorth: marketCoins,
        quantity: qty,
        wallOwned,
        starred: !!itemData.starred,
        isDistinctVariant: !!itemData.isDistinctVariant,
        tier: (itemData.tier || 'Standard').trim(),
        tabs: itemTabs,
        tags: Array.isArray(itemData.tags) ? itemData.tags : [],
        notes: (itemData.notes || '').trim(),
        updatedAt: Date.now()
      };
      // Prepend to top of master items array
      this.data.items.unshift(newItem);
      this.saveState();
      this.recordAction({
        type: 'ADD_GIFT',
        name: newItem.name,
        coins: newItem.baseValue,
        seriesName: this.getSeries(newItem.seriesId)?.name || 'Standalone'
      });
      return newItem;
    }

    updateItem(id, itemData) {
      const idx = this.data.items.findIndex(i => i.id === id);
      if (idx !== -1) {
        const cur = this.data.items[idx];
        const oldName = cur.name;
        const oldBase = cur.baseValue;
        const oldMarket = cur.marketWorth;
        const oldTier = cur.tier;
        const oldSeriesId = cur.seriesId;

        const catId = (itemData.categoryId !== undefined ? itemData.categoryId : cur.categoryId).trim();
        const serId = (itemData.seriesId !== undefined ? itemData.seriesId : cur.seriesId).trim();
        let itemTabs = Array.isArray(itemData.tabs) ? itemData.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [...(cur.tabs || [])];
        if (catId && serId && !itemTabs.includes('series')) {
          itemTabs.push('series');
        }

        let backpacksObj = cur.backpacks && typeof cur.backpacks === 'object' ? {
          lbs: Math.max(0, Math.floor(Number(cur.backpacks.lbs) || 0)),
          cryptid: Math.max(0, Math.floor(Number(cur.backpacks.cryptid) || 0))
        } : { lbs: Number(cur.quantity) || 0, cryptid: 0 };

        if (itemData.backpacks && typeof itemData.backpacks === 'object') {
          backpacksObj.lbs = Math.max(0, Math.floor(Number(itemData.backpacks.lbs) || 0));
          backpacksObj.cryptid = Math.max(0, Math.floor(Number(itemData.backpacks.cryptid) || 0));
        } else if (itemData.quantity !== undefined) {
          backpacksObj.lbs = Math.max(0, Math.floor(Number(itemData.quantity) || 0));
        }

        const hasAnyBpStock = (backpacksObj.lbs > 0 || backpacksObj.cryptid > 0);
        if (hasAnyBpStock && !itemTabs.includes('backpack')) {
          itemTabs.push('backpack');
        } else if (!hasAnyBpStock && itemTabs.includes('backpack')) {
          itemTabs = itemTabs.filter(t => t !== 'backpack');
        }
        itemTabs = [...new Set(itemTabs)];

        const wallOwned = itemTabs.includes('wall') || (itemData.wallOwned !== undefined ? !!itemData.wallOwned : !!cur.wallOwned);
        let qty = backpacksObj.lbs;
        if (itemTabs.includes('backpack') && qty === 0 && backpacksObj.cryptid === 0) {
          qty = 1;
          backpacksObj.lbs = 1;
        }

        const baseCoins = Math.max(0, Number(itemData.baseValue !== undefined ? itemData.baseValue : cur.baseValue) || 0);
        const rawMarket = Number(itemData.marketWorth !== undefined ? itemData.marketWorth : cur.marketWorth);
        const marketCoins = (!isNaN(rawMarket) && rawMarket > 0) ? rawMarket : baseCoins;

        this.data.items[idx] = {
          ...cur,
          categoryId: catId,
          seriesId: serId,
          name: (itemData.name !== undefined ? itemData.name : cur.name).trim(),
          baseValue: baseCoins,
          marketWorth: marketCoins,
          quantity: qty,
          backpacks: backpacksObj,
          wallOwned,
          starred: itemData.starred !== undefined ? !!itemData.starred : !!cur.starred,
          isDistinctVariant: itemData.isDistinctVariant !== undefined ? !!itemData.isDistinctVariant : !!cur.isDistinctVariant,
          tier: (itemData.tier || cur.tier || 'Standard').trim(),
          tabs: itemTabs,
          tags: Array.isArray(itemData.tags) ? itemData.tags : cur.tags,
          notes: (itemData.notes !== undefined ? itemData.notes : cur.notes || '').trim(),
          updatedAt: Date.now()
        };
        this.saveState();

        const changedFields = [];
        if (this.data.items[idx].name !== oldName) changedFields.push('name');
        if (baseCoins !== oldBase) changedFields.push('baseValue');
        if (marketCoins !== oldMarket) changedFields.push('marketWorth');
        if (this.data.items[idx].tier !== oldTier) changedFields.push('tier');
        if (serId !== oldSeriesId) changedFields.push('series');

        if (changedFields.length > 0) {
          this.recordAction({
            type: 'UPDATE_GIFT',
            name: this.data.items[idx].name,
            changedFields,
            oldWorth: oldMarket,
            newWorth: marketCoins,
            seriesName: this.getSeries(serId)?.name || 'Standalone'
          });
        }

        return this.data.items[idx];
      }
      return null;
    }

    deleteItem(id) {
      const idx = this.data.items.findIndex(i => i.id === id);
      if (idx !== -1) {
        const removed = this.data.items.splice(idx, 1)[0];
        this.saveState();
        this.recordAction({
          type: 'DELETE_GIFT',
          name: removed.name,
          seriesName: this.getSeries(removed.seriesId)?.name || 'Standalone'
        });
        return removed;
      }
      return null;
    }

    toggleWallOwned(id) {
      const item = this.getItem(id);
      if (item) {
        if (!Array.isArray(item.tabs)) item.tabs = [];
        item.wallOwned = !item.wallOwned;
        if (item.wallOwned) {
          if (!item.tabs.includes('wall')) item.tabs.push('wall');
        } else {
          item.tabs = item.tabs.filter(t => t !== 'wall');
        }
        item.updatedAt = Date.now();
        this.saveState(true);
        return item.wallOwned;
      }
      return false;
    }

    incrementQuantity(id, delta, account = 'lbs') {
      const item = this.getItem(id);
      if (item) {
        if (!Array.isArray(item.tabs)) item.tabs = [];
        if (!item.backpacks || typeof item.backpacks !== 'object') {
          item.backpacks = { lbs: Number(item.quantity) || 0, cryptid: 0 };
        }
        const acc = (account === 'cryptid') ? 'cryptid' : 'lbs';
        const curAccQty = Number(item.backpacks[acc]) || 0;
        const newAccQty = Math.max(0, curAccQty + delta);
        item.backpacks[acc] = newAccQty;
        item.quantity = Number(item.backpacks.lbs) || 0;
        
        const hasAnyBpStock = (Number(item.backpacks.lbs) || 0) > 0 || (Number(item.backpacks.cryptid) || 0) > 0;
        if (!hasAnyBpStock) {
          item.tabs = item.tabs.filter(t => t !== 'backpack');
        } else {
          if (!item.tabs.includes('backpack')) item.tabs.push('backpack');
        }
        item.updatedAt = Date.now();
        this.saveState(true);
      }
    }

    toggleStarred(id) {
      const item = this.getItem(id);
      if (item) {
        item.starred = !item.starred;
        item.updatedAt = Date.now();
        this.saveState(true);
        return item.starred;
      }
      return false;
    }

    toggleItemTab(id, tabName, account = 'lbs') {
      const item = this.getItem(id);
      if (!item) return { success: false, reason: 'Gift not found' };
      if (!Array.isArray(item.tabs)) {
        item.tabs = [];
        if (item.categoryId && item.seriesId) item.tabs.push('series');
        if (item.wallOwned) item.tabs.push('wall');
        if ((Number(item.quantity) || 0) > 0 || (item.backpacks && ((item.backpacks.lbs || 0) > 0 || (item.backpacks.cryptid || 0) > 0))) {
          item.tabs.push('backpack');
        }
      }
      if (!item.backpacks || typeof item.backpacks !== 'object') {
        item.backpacks = { lbs: Number(item.quantity) || 0, cryptid: 0 };
      }
      const acc = (account === 'cryptid') ? 'cryptid' : 'lbs';
      const t = String(tabName || '').toLowerCase().trim();
      const hasTab = item.tabs.includes(t);
      if (hasTab) {
        if (t === 'wall') {
          item.tabs = item.tabs.filter(x => x !== t);
          item.wallOwned = false;
        } else if (t === 'backpack') {
          item.backpacks[acc] = 0;
          if ((Number(item.backpacks.lbs) || 0) === 0 && (Number(item.backpacks.cryptid) || 0) === 0) {
            item.tabs = item.tabs.filter(x => x !== 'backpack');
            item.quantity = 0;
          } else {
            item.quantity = Number(item.backpacks.lbs) || 0;
          }
        } else {
          item.tabs = item.tabs.filter(x => x !== t);
        }
      } else {
        if (t === 'series') {
          if (!item.categoryId || !item.seriesId || !this.getSeries(item.seriesId)) {
            return { success: false, reason: 'Series tab requires a valid Category and Series. Assign them in Edit Gift.' };
          }
        }
        item.tabs.push(t);
        if (t === 'wall') item.wallOwned = true;
        if (t === 'backpack') {
          item.backpacks[acc] = Math.max(1, item.backpacks[acc] || 1);
          item.quantity = Number(item.backpacks.lbs) || 0;
        }
      }
      item.updatedAt = Date.now();
      this.saveState(true);
      return { success: true, added: !hasTab };
    }

    // Category Operations
    getCategory(id) {
      if (!id) return null;
      return this.categoryMap?.get(id) || this.data.categories.find(c => c.id === id);
    }

    addCategory(catData) {
      const id = this.uid('cat');
      const order = Number(catData.order) || (this.data.categories.length + 1);
      const newCat = {
        id,
        name: catData.name.trim(),
        order,
        description: (catData.description || '').trim()
      };
      this.data.categories.push(newCat);
      this.saveState();
      this.recordAction({
        type: 'ADD_CATEGORY',
        name: newCat.name
      });
      return newCat;
    }

    updateCategory(id, catData) {
      const cat = this.getCategory(id);
      if (cat) {
        cat.name = catData.name.trim();
        if (catData.order !== undefined) cat.order = Number(catData.order);
        if (catData.description !== undefined) cat.description = (catData.description || '').trim();
        this.saveState();
        this.recordAction({
          type: 'UPDATE_CATEGORY',
          name: cat.name
        });
      }
    }

    deleteCategory(id) {
      const cat = this.getCategory(id);
      const catName = cat ? cat.name : 'Category';
      this.data.categories = this.data.categories.filter(c => c.id !== id);
      this.data.series.forEach(s => {
        if (s.categoryId === id) s.categoryId = '';
      });
      this.data.items.forEach(i => {
        if (i.categoryId === id) {
          i.categoryId = '';
          i.seriesId = '';
        }
      });
      this.saveState();
      this.recordAction({
        type: 'DELETE_CATEGORY',
        name: catName
      });
    }

    // Series Operations
    getSeries(id) {
      if (!id) return null;
      return this.seriesMap?.get(id) || this.data.series.find(s => s.id === id);
    }

    addSeries(seriesData) {
      const id = this.uid('ser');
      const displayOrder = Number(seriesData.displayOrder) || (this.data.series.length + 1);
      const newSeries = {
        id,
        categoryId: seriesData.categoryId || '',
        name: seriesData.name.trim(),
        badge: (seriesData.badge || '').trim(),
        description: (seriesData.description || '').trim(),
        displayOrder
      };
      this.data.series.push(newSeries);
      this.saveState();
      this.recordAction({
        type: 'ADD_SERIES',
        name: newSeries.name
      });
      return newSeries;
    }

    updateSeries(id, seriesData) {
      const ser = this.getSeries(id);
      if (ser) {
        ser.categoryId = seriesData.categoryId || '';
        ser.name = seriesData.name.trim();
        ser.badge = (seriesData.badge || '').trim();
        ser.description = (seriesData.description || '').trim();
        if (seriesData.displayOrder !== undefined) ser.displayOrder = Number(seriesData.displayOrder);
        this.saveState();
        this.recordAction({
          type: 'UPDATE_SERIES',
          name: ser.name
        });
      }
    }

    deleteSeries(id) {
      const ser = this.getSeries(id);
      const serName = ser ? ser.name : 'Series';
      this.data.series = this.data.series.filter(s => s.id !== id);
      this.data.items.forEach(i => {
        if (i.seriesId === id) i.seriesId = '';
      });
      this.saveState();
      this.recordAction({
        type: 'DELETE_SERIES',
        name: serName
      });
    }

    // Tier Operations (CRUD & Color Management)
    getTier(idOrName) {
      if (!idOrName || !this.data.tiers) return null;
      const clean = String(idOrName).toLowerCase().trim();
      return this.tierMap?.get(clean) || this.data.tiers.find(t => (t.id && t.id.toLowerCase() === clean) || (t.name && t.name.toLowerCase() === clean));
    }

    addTier(tierData) {
      const id = this.uid('tier');
      const rank = Number(tierData.rank) || 10;
      const displayOrder = Number(tierData.displayOrder) || (this.data.tiers ? this.data.tiers.length + 1 : 1);
      const description = (tierData.description || '').trim();
      const color = (tierData.color || '#e2e8f0').trim();
      const rgb = this.hexToRgb(color);
      const newTier = {
        id,
        name: tierData.name.trim(),
        color,
        bg: tierData.bg || `rgba(${rgb}, 0.16)`,
        border: tierData.border || `rgba(${rgb}, 0.35)`,
        rank,
        displayOrder,
        description
      };
      if (!this.data.tiers) this.data.tiers = [];
      this.data.tiers.push(newTier);
      this.saveState();
      this.recordAction({
        type: 'ADD_TIER',
        name: newTier.name
      });
      return newTier;
    }

    updateTier(id, tierData) {
      const tier = this.getTier(id);
      if (tier) {
        tier.name = tierData.name.trim();
        if (tierData.color) {
          tier.color = tierData.color.trim();
          const rgb = this.hexToRgb(tier.color);
          tier.bg = tierData.bg || `rgba(${rgb}, 0.16)`;
          tier.border = tierData.border || `rgba(${rgb}, 0.35)`;
        }
        if (tierData.rank !== undefined) tier.rank = Number(tierData.rank);
        if (tierData.displayOrder !== undefined) tier.displayOrder = Number(tierData.displayOrder);
        if (tierData.description !== undefined) tier.description = (tierData.description || '').trim();
        this.saveState();
        this.recordAction({
          type: 'UPDATE_TIER',
          name: tier.name
        });
        return tier;
      }
      return null;
    }

    deleteTier(id) {
      const tier = this.getTier(id);
      if (!tier) return;
      const deletedName = tier.name;
      this.data.tiers = this.data.tiers.filter(t => t.id !== tier.id);
      // Revert items with this deleted tier to Standard
      this.data.items.forEach(i => {
        if (i.tier && i.tier.toLowerCase() === deletedName.toLowerCase()) {
          i.tier = 'Standard';
        }
      });
      this.saveState();
      this.recordAction({
        type: 'DELETE_TIER',
        name: deletedName
      });
    }

    hexToRgb(hex) {
      const clean = (hex || '').replace('#', '');
      if (clean.length === 3) {
        const r = parseInt(clean[0] + clean[0], 16) || 226;
        const g = parseInt(clean[1] + clean[1], 16) || 232;
        const b = parseInt(clean[2] + clean[2], 16) || 240;
        return `${r}, ${g}, ${b}`;
      }
      if (clean.length === 6) {
        const r = parseInt(clean.substring(0, 2), 16) || 226;
        const g = parseInt(clean.substring(2, 4), 16) || 232;
        const b = parseInt(clean.substring(4, 6), 16) || 240;
        return `${r}, ${g}, ${b}`;
      }
      return '226, 232, 240';
    }

    wipeAll() {
      const savedTheme = this.data.themeConfig;
      this.data = JSON.parse(JSON.stringify(DEFAULT_SEED));
      this.data.version = APP_VERSION;
      if (savedTheme) {
        this.data.themeConfig = savedTheme;
      }
      this.saveState();
    }

    importData(importedData) {
      if (!importedData || typeof importedData !== 'object' || !Array.isArray(importedData.items)) {
        throw new Error('Invalid JSON structure. Missing items array.');
      }
      const safeItems = importedData.items.map(item => {
        if (!item || typeof item !== 'object') return null;
        let notesVal = String(item.notes ?? '').trim();
        if (notesVal.includes(' > ') || notesVal.includes('coins).')) notesVal = '';
        const catId = String(item.categoryId ?? '').trim();
        const serId = String(item.seriesId ?? '').trim();
        const isWallOwned = typeof item.wallOwned === 'boolean' ? item.wallOwned : false;
        const rawQty = Math.max(0, Math.floor(Number(item.quantity) || 0));

        let itemTabs = Array.isArray(item.tabs) ? item.tabs.map(t => String(t).toLowerCase().trim()).filter(Boolean) : [];
        if (catId && serId && !itemTabs.includes('series')) {
          itemTabs.push('series');
        }
        if (isWallOwned && !itemTabs.includes('wall')) {
          itemTabs.push('wall');
        }
        if (rawQty > 0 && !itemTabs.includes('backpack')) {
          itemTabs.push('backpack');
        }
        itemTabs = [...new Set(itemTabs)];

        const finalWallOwned = isWallOwned || itemTabs.includes('wall');
        let finalQty = rawQty;
        if (itemTabs.includes('backpack') && finalQty === 0) {
          finalQty = 1;
        } else if (!itemTabs.includes('backpack') && finalQty > 0) {
          itemTabs.push('backpack');
        }

        const baseCoins = Math.max(0, Number(item.baseValue) || 0);
        const rawMarket = Number(item.marketWorth);
        const marketCoins = (!isNaN(rawMarket) && rawMarket > 0) ? rawMarket : baseCoins;

        return {
          id: String(item.id || this.uid('item')).trim(),
          categoryId: catId,
          seriesId: serId,
          name: String(item.name ?? '').trim(),
          baseValue: baseCoins,
          marketWorth: marketCoins,
          quantity: finalQty,
          wallOwned: finalWallOwned,
          starred: typeof item.starred === 'boolean' ? item.starred : false,
          isDistinctVariant: typeof item.isDistinctVariant === 'boolean' ? item.isDistinctVariant : false,
          tier: String(item.tier || 'Standard').trim(),
          tabs: itemTabs,
          tags: Array.isArray(item.tags) ? item.tags.map(t => String(t).trim()).filter(Boolean) : [],
          notes: notesVal,
          updatedAt: Number(item.updatedAt) || Date.now()
        };
      }).filter(Boolean);

      const safeCategories = (Array.isArray(importedData.categories) ? importedData.categories : this.data.categories).map(cat => {
        if (!cat || typeof cat !== 'object') return null;
        return {
          id: String(cat.id || this.uid('cat')).trim(),
          name: String(cat.name || '').trim(),
          order: Number(cat.order) || 1,
          description: String(cat.description || '').trim()
        };
      }).filter(Boolean);

      const safeSeries = (Array.isArray(importedData.series) ? importedData.series : this.data.series).map(ser => {
        if (!ser || typeof ser !== 'object') return null;
        return {
          id: String(ser.id || this.uid('ser')).trim(),
          categoryId: String(ser.categoryId || '').trim(),
          name: String(ser.name || '').trim(),
          badge: String(ser.badge || '').trim(),
          description: String(ser.description || '').trim(),
          displayOrder: Number(ser.displayOrder ?? ser.order) || 1
        };
      }).filter(Boolean);

      const safeTiers = (Array.isArray(importedData.tiers) ? importedData.tiers : this.data.tiers).map(t => {
        if (!t || typeof t !== 'object') return null;
        const color = String(t.color || '#e2e8f0').trim();
        const rgb = this.hexToRgb(color);
        return {
          id: String(t.id || this.uid('tier')).trim(),
          name: String(t.name || '').trim(),
          color,
          bg: String(t.bg || `rgba(${rgb}, 0.16)`).trim(),
          border: String(t.border || `rgba(${rgb}, 0.35)`).trim(),
          rank: Number(t.rank) || 10,
          displayOrder: Number(t.displayOrder ?? t.order) || 1,
          description: String(t.description || '').trim()
        };
      }).filter(Boolean);

      let themeConfig = {
        tags: DEFAULT_TAGS.map(t => ({ ...t })),
        tagColors: { wall: '#10b981', series: '#06b6d4', backpack: '#f43f5e' }
      };
      if (importedData.themeConfig && typeof importedData.themeConfig === 'object') {
        if (Array.isArray(importedData.themeConfig.tags)) {
          themeConfig.tags = importedData.themeConfig.tags;
        }
        if (importedData.themeConfig.tagColors) {
          themeConfig.tagColors = importedData.themeConfig.tagColors;
        }
      } else if (this.data.themeConfig) {
        themeConfig = this.data.themeConfig;
      }

      this.data = {
        version: APP_VERSION,
        lastExported: Date.now(),
        categories: safeCategories,
        series: safeSeries,
        items: safeItems,
        tiers: safeTiers,
        themeConfig
      };
      this.saveState();
    }
  }

  // ------------------------------------------------------------------
  // 2. CONTROLLER & PRESENTATION LAYER
  // ------------------------------------------------------------------
  class HelloTalkApp {
    constructor() {
      this.state = new VaultState();

      // Active Navigation Tab: Persisted in localStorage
      const validTabs = ['tab-backpack', 'tab-series', 'tab-wall', 'tab-portfolio'];
      let savedTab = null;
      try {
        savedTab = localStorage.getItem('hellotalk_active_tab');
      } catch (e) {}
      this.currentTab = (savedTab && validTabs.includes(savedTab)) ? savedTab : 'tab-backpack';

      // Unified Global Search (Synchronized across all tabs)
      this.globalSearchQuery = '';

      // Tab 1: Backpack Inventory Filter State (Default Active Tab)
      this.activeBackpackAccount = 'lbs';
      try {
        const savedAccount = localStorage.getItem('hellotalk_active_backpack');
        if (savedAccount === 'lbs' || savedAccount === 'cryptid') {
          this.activeBackpackAccount = savedAccount;
        }
      } catch (e) {}
      this.bpStatusFilter = 'all'; // all, in-stock, exchange-needed, starred, extras
      this.bpSelectedCategory = '';
      this.bpSelectedSeries = '';
      this.bpSelectedTier = '';
      this.bpSortMethod = 'worth-desc';
      this.bpRenderedCount = BATCH_SIZE;

      // Tab 2: Series Master Catalog Filter State
      this.seriesStatusFilter = 'all'; // all, collected, missing, in-stock
      this.seriesSelectedCategory = '';
      this.seriesSelectedSeries = '';
      this.seriesSelectedTier = '';
      this.seriesSortMethod = 'coins-desc';
      this.seriesRenderedCount = BATCH_SIZE;
      this.focusedSeriesId = null;

      // Tab 3: Wall Collected Gallery Filter State
      this.wallStatusFilter = 'all'; // all, starred
      this.wallSelectedCategory = '';
      this.wallSelectedSeries = '';
      this.wallSelectedTier = '';
      this.wallSortMethod = 'coins-desc';
      this.wallRenderedCount = BATCH_SIZE;

      this.pendingConfirmAction = null;
      this._renderScheduled = false;
      this.isBatchLoading = false;
      this._cachedSeriesFiltered = null;
      this._cachedWallFiltered = null;
      this._cachedBpFiltered = null;

      this.initDomReferences();
      this.applyThemeColors();
      this.bindEvents();

      // Synchronize active tab state from storage
      this.switchTab(this.currentTab, false);

      this.state.subscribe(() => {
        this.scheduleRender();
        this.applyThemeColors();
      });

      this.renderActiveTab();
      this.populateCategorySelects();
      this.setupBatchObservers();

      if (this.state.reconciliationNotice) {
        setTimeout(() => {
          this.showToast(this.state.reconciliationNotice);
          this.state.reconciliationNotice = null;
          this.state.saveState();
        }, 800);
      }
    }

    initDomReferences() {
      // Global Search
      this.globalSearchInput = document.getElementById('globalSearchInput');
      this.globalClearSearchBtn = document.getElementById('globalClearSearchBtn');

      // Navigation Dock
      this.navTabButtons = document.querySelectorAll('.dock-item');
      this.tabPanes = document.querySelectorAll('.tab-pane');

      // ----------------------------------------------------------------
      // Tab 1: Backpack Inventory References
      // ----------------------------------------------------------------
      this.bpAccountSwitcher = document.querySelector('.bp-account-switcher');
      this.bpAccountTabs = document.querySelectorAll('.bp-account-tab');
      this.bpPillCountLbs = document.getElementById('bpPillCountLbs');
      this.bpPillCountCryptid = document.getElementById('bpPillCountCryptid');

      // Instantly sync active backpack tab buttons with saved activeBackpackAccount
      if (this.bpAccountTabs) {
        this.bpAccountTabs.forEach(btn => {
          const isActive = btn.dataset.account === this.activeBackpackAccount;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }

      this.bpTotalUnits = document.getElementById('bpTotalUnits');
      this.bpUniqueItems = document.getElementById('bpUniqueItems');
      this.bpMarketWorth = document.getElementById('bpMarketWorth');
      this.bpBaseWorth = document.getElementById('bpBaseWorth');
      this.bpProfitSpread = document.getElementById('bpProfitSpread');
      this.bpExchangeMarkerCount = document.getElementById('bpExchangeMarkerCount');

      this.bpStatusPills = document.getElementById('bpStatusPills');
      this.bpCountAll = document.getElementById('bpCountAll');
      this.bpCountShared = document.getElementById('bpCountShared');
      this.bpCountInStock = document.getElementById('bpCountInStock');
      this.bpCountExchange = document.getElementById('bpCountExchange');
      this.bpCountStarred = document.getElementById('bpCountStarred');
      this.bpCountExtras = document.getElementById('bpCountExtras');
      this.bpCountStandalone = document.getElementById('bpCountStandalone');
      this.bpTierPills = document.getElementById('bpTierPills');

      this.bpFilterCategory = document.getElementById('bpFilterCategory');
      this.bpFilterSeries = document.getElementById('bpFilterSeries');
      this.bpFilterTier = document.getElementById('bpFilterTier');
      this.bpSortBy = document.getElementById('bpSortBy');
      this.bpResetFiltersBtn = document.getElementById('bpResetFiltersBtn');
      this.bpResultsCount = document.getElementById('bpResultsCount');
      this.bpResultsAggregate = document.getElementById('bpResultsAggregate');
      this.backpackGrid = document.getElementById('backpackGrid');
      this.bpScrollSentinel = document.getElementById('bpScrollSentinel');

      // ----------------------------------------------------------------
      // Tab 2: Series Master Catalog References
      // ----------------------------------------------------------------
      this.seriesTotalGifts = document.getElementById('seriesTotalGifts');
      this.seriesTotalCount = document.getElementById('seriesTotalCount');
      this.seriesWallProgressRatio = document.getElementById('seriesWallProgressRatio');
      this.seriesWallProgressBar = document.getElementById('seriesWallProgressBar');
      this.seriesWallProgressPercent = document.getElementById('seriesWallProgressPercent');
      this.seriesCompleteRatio = document.getElementById('seriesCompleteRatio');
      this.seriesCompleteBar = document.getElementById('seriesCompleteBar');
      this.seriesCompletePercent = document.getElementById('seriesCompletePercent');

      this.seriesFilterHub = document.getElementById('seriesFilterHub');
      this.seriesStatusPills = document.getElementById('seriesStatusPills');
      this.seriesCountAll = document.getElementById('seriesCountAll');
      this.seriesCountCollected = document.getElementById('seriesCountCollected');
      this.seriesCountMissing = document.getElementById('seriesCountMissing');
      this.seriesCountInStock = document.getElementById('seriesCountInStock');
      this.seriesTierPills = document.getElementById('seriesTierPills');

      this.seriesFilterCategory = document.getElementById('seriesFilterCategory');
      this.seriesFilterSeries = document.getElementById('seriesFilterSeries');
      this.seriesFilterTier = document.getElementById('seriesFilterTier');
      this.seriesSortBy = document.getElementById('seriesSortBy');
      this.seriesResetFiltersBtn = document.getElementById('seriesResetFiltersBtn');
      this.seriesResultsCount = document.getElementById('seriesResultsCount');
      this.seriesResultsAggregate = document.getElementById('seriesResultsAggregate');

      this.seriesGiftsContainer = document.getElementById('seriesGiftsContainer');
      this.seriesGiftsGrid = document.getElementById('seriesGiftsGrid');
      this.seriesScrollSentinel = document.getElementById('seriesScrollSentinel');

      this.seriesDrillDownView = document.getElementById('seriesDrillDownView');
      this.backToSeriesListBtn = document.getElementById('backToSeriesListBtn');
      this.drillCategoryCrumb = document.getElementById('drillCategoryCrumb');
      this.drillSeriesTitle = document.getElementById('drillSeriesTitle');
      this.drillSeriesDesc = document.getElementById('drillSeriesDesc');
      this.drillSeriesBadge = document.getElementById('drillSeriesBadge');
      this.drillProgressText = document.getElementById('drillProgressText');
      this.drillUnitsText = document.getElementById('drillUnitsText');
      this.drillProgressBar = document.getElementById('drillProgressBar');
      this.drillGiftsCountTitle = document.getElementById('drillGiftsCountTitle');
      this.drillGiftsGrid = document.getElementById('drillGiftsGrid');

      // ----------------------------------------------------------------
      // Tab 3: Wall Collected Gallery References
      // ----------------------------------------------------------------
      this.wallCollectedTotal = document.getElementById('wallCollectedTotal');
      this.wallBaseTotal = document.getElementById('wallBaseTotal');
      this.wallMarketTotal = document.getElementById('wallMarketTotal');

      this.wallStatusPills = document.getElementById('wallStatusPills');
      this.wallCountCollectedOnly = document.getElementById('wallCountCollectedOnly');
      this.wallCountStarredOnly = document.getElementById('wallCountStarredOnly');
      this.wallCountStandalone = document.getElementById('wallCountStandalone');
      this.wallTierPills = document.getElementById('wallTierPills');

      this.wallFilterCategory = document.getElementById('wallFilterCategory');
      this.wallFilterSeries = document.getElementById('wallFilterSeries');
      this.wallFilterTier = document.getElementById('wallFilterTier');
      this.wallSortBy = document.getElementById('wallSortBy');
      this.wallResetFiltersBtn = document.getElementById('wallResetFiltersBtn');
      this.wallResultsCount = document.getElementById('wallResultsCount');
      this.wallResultsAggregate = document.getElementById('wallResultsAggregate');
      this.wallGrid = document.getElementById('wallGrid');
      this.wallScrollSentinel = document.getElementById('wallScrollSentinel');

      // ----------------------------------------------------------------
      // Tab 4: Portfolio & Studio References
      // ----------------------------------------------------------------
      this.ledgerTierTableBody = document.getElementById('ledgerTierTableBody');
      this.ledgerSeriesTableBody = document.getElementById('ledgerSeriesTableBody');
      this.catTotalCount = document.getElementById('catTotalCount');
      this.serTotalCount = document.getElementById('serTotalCount');
      this.categoryManagerList = document.getElementById('categoryManagerList');
      this.seriesManagerList = document.getElementById('seriesManagerList');
      this.seriesManagerSearchInput = document.getElementById('seriesManagerSearchInput');
      this.seriesManagerClearSearchBtn = document.getElementById('seriesManagerClearSearchBtn');
      this.addCategoryBtn = document.getElementById('addCategoryBtn');
      this.addSeriesBtn = document.getElementById('addSeriesBtn');
      this.addTierBtn = document.getElementById('addTierBtn');
      this.tierTotalCount = document.getElementById('tierTotalCount');
      this.tierManagerList = document.getElementById('tierManagerList');
      this.exportDataBtn = document.getElementById('exportDataBtn');
      this.importFileInput = document.getElementById('importFileInput');
      this.wipeDataBtn = document.getElementById('wipeDataBtn');

      // Duplicate Detection and Integrity Tools
      this.editItemDuplicateAlert = document.getElementById('editItemDuplicateAlert');
      this.duplicateWarningText = document.getElementById('duplicateWarningText');
      this.duplicateLoadExistingBtn = document.getElementById('duplicateLoadExistingBtn');
      this.duplicateAutoFillBtn = document.getElementById('duplicateAutoFillBtn');
      this.scanDuplicatesBtn = document.getElementById('scanDuplicatesBtn');
      this.duplicateAuditResults = document.getElementById('duplicateAuditResults');

      // GitHub Cloud Synchronization
      this.ghSyncStatusBadge = document.getElementById('ghSyncStatusBadge');
      this.ghLastSyncTime = document.getElementById('ghLastSyncTime');
      this.ghPatInput = document.getElementById('ghPatInput');
      this.ghSaveTokenBtn = document.getElementById('ghSaveTokenBtn');
      this.ghTestTokenBtn = document.getElementById('ghTestTokenBtn');
      this.ghClearTokenBtn = document.getElementById('ghClearTokenBtn');
      this.ghPushBtn = document.getElementById('ghPushBtn');
      this.ghPullBtn = document.getElementById('ghPullBtn');

      // ----------------------------------------------------------------
      // Modals
      // ----------------------------------------------------------------
      this.itemModal = document.getElementById('itemModal');
      this.itemModalTitle = document.getElementById('itemModalTitle');
      this.editItemForm = document.getElementById('editItemForm');
      this.editItemId = document.getElementById('editItemId');
      this.editItemCategory = document.getElementById('editItemCategory');
      this.editItemSeries = document.getElementById('editItemSeries');
      this.editItemName = document.getElementById('editItemName');
      this.editItemBaseValue = document.getElementById('editItemBaseValue');
      this.editItemMarketWorth = document.getElementById('editItemMarketWorth');
      this.editItemQuantity = document.getElementById('editItemQuantity');
      this.editItemQuantityLbs = document.getElementById('editItemQuantityLbs');
      this.editItemQuantityCryptid = document.getElementById('editItemQuantityCryptid');
      this.editItemCopyLbsToCryptid = document.getElementById('editItemCopyLbsToCryptid');
      this.editItemCopyCryptidToLbs = document.getElementById('editItemCopyCryptidToLbs');
      this.editItemTabsPresets = document.getElementById('editItemTabsPresets');
      this.editItemStarred = document.getElementById('editItemStarred');
      this.editItemDistinctVariant = document.getElementById('editItemDistinctVariant');
      this.editItemSyncMatchingGroup = document.getElementById('editItemSyncMatchingGroup');
      this.editItemSyncMatching = document.getElementById('editItemSyncMatching');
      this.editItemSyncMatchingLabel = document.getElementById('editItemSyncMatchingLabel');
      this.editItemSyncMatchingSubtext = document.getElementById('editItemSyncMatchingSubtext');
      this.editItemTier = document.getElementById('editItemTier');
      this.editItemTierPresets = document.getElementById('editItemTierPresets');
      this.modalDeleteBtn = document.getElementById('modalDeleteBtn');

      this.categoryModal = document.getElementById('categoryModal');
      this.catModalTitle = document.getElementById('catModalTitle');
      this.categoryForm = document.getElementById('categoryForm');
      this.catModalId = document.getElementById('catModalId');
      this.catModalName = document.getElementById('catModalName');
      this.catModalOrder = document.getElementById('catModalOrder');
      this.catModalDesc = document.getElementById('catModalDesc');
      this.catModalDeleteBtn = document.getElementById('catModalDeleteBtn');

      this.seriesModal = document.getElementById('seriesModal');
      this.serModalTitle = document.getElementById('serModalTitle');
      this.seriesForm = document.getElementById('seriesForm');
      this.serModalId = document.getElementById('serModalId');
      this.serModalCategory = document.getElementById('serModalCategory');
      this.serModalName = document.getElementById('serModalName');
      this.serModalOrder = document.getElementById('serModalOrder');
      this.serModalBadge = document.getElementById('serModalBadge');
      this.serModalDesc = document.getElementById('serModalDesc');
      this.serModalDeleteBtn = document.getElementById('serModalDeleteBtn');

      this.tierModal = document.getElementById('tierModal');
      this.tierModalTitle = document.getElementById('tierModalTitle');
      this.tierForm = document.getElementById('tierForm');
      this.tierModalId = document.getElementById('tierModalId');
      this.tierModalName = document.getElementById('tierModalName');
      this.tierModalRank = document.getElementById('tierModalRank');
      this.tierModalOrder = document.getElementById('tierModalOrder');
      this.tierModalDesc = document.getElementById('tierModalDesc');
      this.tierColorPalettePresets = document.getElementById('tierColorPalettePresets');
      this.tierModalColorPicker = document.getElementById('tierModalColorPicker');
      this.tierModalColorHex = document.getElementById('tierModalColorHex');
      this.tierModalPreviewBadge = document.getElementById('tierModalPreviewBadge');
      this.tierModalDeleteBtn = document.getElementById('tierModalDeleteBtn');

      this.confirmModal = document.getElementById('confirmModal');
      this.confirmModalTitle = document.getElementById('confirmModalTitle');
      this.confirmModalMessage = document.getElementById('confirmModalMessage');
      this.confirmAcceptBtn = document.getElementById('confirmAcceptBtn');
      this.confirmCancelBtn = document.getElementById('confirmCancelBtn');

      // GitHub Smart Commit & Deploy Modal
      this.ghCommitModal = document.getElementById('ghCommitModal');
      this.ghCommitTitleInput = document.getElementById('ghCommitTitleInput');
      this.ghCommitExtendedBody = document.getElementById('ghCommitExtendedBody');
      this.ghCommitSummaryChips = document.getElementById('ghCommitSummaryChips');
      this.ghCommitResetTitleBtn = document.getElementById('ghCommitResetTitleBtn');
      this.ghCommitConfirmBtn = document.getElementById('ghCommitConfirmBtn');
      this.ghCommitCancelBtn = document.getElementById('ghCommitCancelBtn');

      this.toastContainer = document.getElementById('toastContainer');

      // Tag and Series Management
      this.tagTotalCount = document.getElementById('tagTotalCount');
      this.tagManagerList = document.getElementById('tagManagerList');
      this.resetTagManagerBtn = document.getElementById('resetTagManagerBtn');

      // Tag Modal
      this.tagModal = document.getElementById('tagModal');
      this.tagModalTitle = document.getElementById('tagModalTitle');
      this.tagForm = document.getElementById('tagForm');
      this.tagModalKey = document.getElementById('tagModalKey');
      this.tagModalName = document.getElementById('tagModalName');
      this.tagColorPalettePresets = document.getElementById('tagColorPalettePresets');
      this.tagModalColorPicker = document.getElementById('tagModalColorPicker');
      this.tagModalColorHex = document.getElementById('tagModalColorHex');
      this.tagModalPreviewBadge = document.getElementById('tagModalPreviewBadge');
    }

    applyThemeColors() {
      const colors = this.state.getTagColors();
      const wallColor = colors.wall || '#10b981';
      const seriesColor = colors.series || '#06b6d4';
      const backpackColor = colors.backpack || '#f43f5e';

      document.documentElement.style.setProperty('--tag-wall-color', wallColor);
      document.documentElement.style.setProperty('--tag-series-color', seriesColor);
      document.documentElement.style.setProperty('--tag-backpack-color', backpackColor);

      // Dynamic Tier Styles: Injects colored outline and glow for all built-in & custom tiers
      let styleEl = document.getElementById('dynamic-tier-styles');
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'dynamic-tier-styles';
        document.head.appendChild(styleEl);
      }

      let cssRules = '';
      const tiers = (this.state && this.state.data && Array.isArray(this.state.data.tiers)) ? this.state.data.tiers : [];
      tiers.forEach(t => {
        if (!t || !t.name) return;
        const slug = t.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const color = t.color || '#e2e8f0';
        const rgb = this.state.hexToRgb ? this.state.hexToRgb(color) : '226, 232, 240';
        const border = t.border || `rgba(${rgb}, 0.35)`;
        const bg = t.bg || `rgba(${rgb}, 0.16)`;
        const glow = `0 0 16px rgba(${rgb}, 0.20)`;

        cssRules += `
          .gift-card.is-owned.tier-card-${slug} {
            border-color: ${border} !important;
            box-shadow: ${glow} !important;
          }
          .tier-chip.tier-chip-${slug} {
            border-color: ${border};
            color: ${color};
          }
          .tier-chip.tier-chip-${slug}.active {
            background-color: ${bg};
            border-color: ${color};
            color: ${color};
            box-shadow: ${glow};
          }
          .tier-badge.tier-${slug} {
            background-color: ${bg};
            border-color: ${border};
            color: ${color};
          }
        `;
      });
      styleEl.textContent = cssRules;
    }

    bindEvents() {
      // Bottom Dock Navigation
      this.navTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.dataset.tab) {
            this.switchTab(btn.dataset.tab);
          }
        });
      });

      // Primary Navigation Row Add Gift Action (+ New Gift next to search bar)
      const addGiftBtn = document.getElementById('navAddGiftBtn');
      if (addGiftBtn) {
        addGiftBtn.addEventListener('click', () => {
          this.openNewItemModal();
        });
      }

      // Universal Modal Delete Handlers (Destructive actions moved exclusively inside modals)
      if (this.modalDeleteBtn) {
        this.modalDeleteBtn.addEventListener('click', () => {
          this.handleDeleteItem();
        });
      }

      if (this.catModalDeleteBtn) {
        this.catModalDeleteBtn.addEventListener('click', () => {
          const id = this.catModalId.value;
          if (!id) return;
          const cat = this.state.getCategory(id);
          const name = cat ? cat.name : 'this category';
          this.confirmAction(
            'Confirm Delete Category',
            `Are you sure you want to delete category "${name}"? Series inside will become standalone.`,
            () => {
              this.state.deleteCategory(id);
              this.closeModal('categoryModal');
              this.showToast(`Deleted category "${name}"`);
            }
          );
        });
      }

      if (this.serModalDeleteBtn) {
        this.serModalDeleteBtn.addEventListener('click', () => {
          const id = this.serModalId.value;
          if (!id) return;
          const ser = this.state.getSeries(id);
          const name = ser ? ser.name : 'this series';
          this.confirmAction(
            'Confirm Delete Series',
            `Are you sure you want to delete series "${name}"? Gifts inside will become standalone.`,
            () => {
              this.state.deleteSeries(id);
              this.closeModal('seriesModal');
              this.showToast(`Deleted series "${name}"`);
            }
          );
        });
      }

      if (this.tierModalDeleteBtn) {
        this.tierModalDeleteBtn.addEventListener('click', () => {
          this.handleDeleteTier();
        });
      }

      if (this.tierForm) {
        this.tierForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSaveTier();
        });
      }

      if (this.tierModalColorPicker && this.tierModalColorHex) {
        this.tierModalColorPicker.addEventListener('input', (e) => {
          this.tierModalColorHex.value = e.target.value;
          this.updateTierModalPreview();
        });
        this.tierModalColorHex.addEventListener('input', (e) => {
          const val = e.target.value.trim();
          if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
            this.tierModalColorPicker.value = val;
            this.updateTierModalPreview();
          }
        });
      }

      if (this.tierModalName) {
        this.tierModalName.addEventListener('input', () => {
          this.updateTierModalPreview();
        });
      }

      // Unified Global Search across all tabs
      let searchDebounceTimer;
      this.globalSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(() => {
          this.globalSearchQuery = e.target.value.trim().toLowerCase();
          this.globalClearSearchBtn.style.display = this.globalSearchQuery ? 'block' : 'none';
          this.seriesRenderedCount = BATCH_SIZE;
          this.wallRenderedCount = BATCH_SIZE;
          this.bpRenderedCount = BATCH_SIZE;
          this.renderActiveTab();
        }, 120);
      });

      this.globalClearSearchBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.seriesRenderedCount = BATCH_SIZE;
        this.wallRenderedCount = BATCH_SIZE;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderActiveTab();
      });

      // ----------------------------------------------------------------
      // Tab: Series Master Catalog Events
      // ----------------------------------------------------------------
      this.backToSeriesListBtn.addEventListener('click', () => {
        this.focusedSeriesId = null;
        this.seriesDrillDownView.style.display = 'none';
        this.seriesGiftsContainer.style.display = 'block';
        this.seriesFilterHub.style.display = 'flex';
        this.renderSeriesTab();
      });

      this.seriesStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.seriesStatus) return;
        this.seriesStatusFilter = btn.dataset.seriesStatus;
        this.seriesStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.seriesStatus === this.seriesStatusFilter);
        });
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterCategory.addEventListener('change', () => {
        this.seriesSelectedCategory = this.seriesFilterCategory.value;
        this.updateSeriesDropdownFilter();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterSeries.addEventListener('change', () => {
        this.seriesSelectedSeries = this.seriesFilterSeries.value;
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesFilterTier.addEventListener('change', () => {
        this.seriesSelectedTier = this.seriesFilterTier.value;
        this.syncSeriesTierPills();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesSortBy.addEventListener('change', () => {
        this.seriesSortMethod = this.seriesSortBy.value;
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      this.seriesResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.seriesStatusFilter = 'all';
        this.seriesStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.seriesStatus === 'all');
        });
        this.seriesSelectedCategory = '';
        this.seriesFilterCategory.value = '';
        this.seriesSelectedSeries = '';
        this.seriesFilterSeries.value = '';
        this.seriesSelectedTier = '';
        this.seriesFilterTier.value = '';
        this.syncSeriesTierPills();
        this.seriesSortMethod = 'coins-desc';
        this.seriesSortBy.value = 'coins-desc';
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });

      // ----------------------------------------------------------------
      // Tab 2: Wall Events
      // ----------------------------------------------------------------
      this.wallStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.wallStatus) return;
        this.wallStatusFilter = btn.dataset.wallStatus;
        this.wallStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.wallStatus === this.wallStatusFilter);
        });
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterCategory.addEventListener('change', () => {
        this.wallSelectedCategory = this.wallFilterCategory.value;
        this.updateWallSeriesDropdownFilter();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterSeries.addEventListener('change', () => {
        this.wallSelectedSeries = this.wallFilterSeries.value;
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallFilterTier.addEventListener('change', () => {
        this.wallSelectedTier = this.wallFilterTier.value;
        this.syncWallTierPills();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallSortBy.addEventListener('change', () => {
        this.wallSortMethod = this.wallSortBy.value;
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      this.wallResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.wallStatusFilter = 'all';
        this.wallStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.wallStatus === 'all');
        });
        this.wallSelectedCategory = '';
        this.wallFilterCategory.value = '';
        this.wallSelectedSeries = '';
        this.wallFilterSeries.value = '';
        this.wallSelectedTier = '';
        this.wallFilterTier.value = '';
        this.syncWallTierPills();
        this.wallSortMethod = 'coins-desc';
        this.wallSortBy.value = 'coins-desc';
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });

      // ----------------------------------------------------------------
      // Tab 3: Backpack Events & Account Switcher
      // ----------------------------------------------------------------
      if (this.bpAccountTabs) {
        this.bpAccountTabs.forEach(btn => {
          btn.addEventListener('click', () => {
            const acc = btn.dataset.account;
            if (acc) {
              this.switchBackpackAccount(acc);
            }
          });
        });
      }

      if (this.editItemCopyLbsToCryptid) {
        this.editItemCopyLbsToCryptid.addEventListener('click', () => {
          const lbsVal = Math.max(1, Math.floor(Number(this.editItemQuantityLbs?.value) || 1));
          if (this.editItemQuantityCryptid) {
            this.editItemQuantityCryptid.value = lbsVal;
          }
          this.showToast(`Copied ${lbsVal} unit${lbsVal > 1 ? 's' : ''} to CryptidArise`);
        });
      }

      if (this.editItemCopyCryptidToLbs) {
        this.editItemCopyCryptidToLbs.addEventListener('click', () => {
          const cryVal = Math.max(1, Math.floor(Number(this.editItemQuantityCryptid?.value) || 1));
          if (this.editItemQuantityLbs) {
            this.editItemQuantityLbs.value = cryVal;
          }
          this.showToast(`Copied ${cryVal} unit${cryVal > 1 ? 's' : ''} to LbsLightX`);
        });
      }

      this.bpStatusPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-chip');
        if (!btn || !btn.dataset.bpStatus) return;
        this.bpStatusFilter = btn.dataset.bpStatus;
        this.bpStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.bpStatus === this.bpStatusFilter);
        });
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterCategory.addEventListener('change', () => {
        this.bpSelectedCategory = this.bpFilterCategory.value;
        this.updateBpSeriesDropdownFilter();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterSeries.addEventListener('change', () => {
        this.bpSelectedSeries = this.bpFilterSeries.value;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpFilterTier.addEventListener('change', () => {
        this.bpSelectedTier = this.bpFilterTier.value;
        this.syncBpTierPills();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpSortBy.addEventListener('change', () => {
        this.bpSortMethod = this.bpSortBy.value;
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      this.bpResetFiltersBtn.addEventListener('click', () => {
        this.globalSearchInput.value = '';
        this.globalSearchQuery = '';
        this.globalClearSearchBtn.style.display = 'none';
        this.bpStatusFilter = 'all';
        this.bpStatusPills.querySelectorAll('.filter-chip').forEach(b => {
          b.classList.toggle('active', b.dataset.bpStatus === 'all');
        });
        this.bpSelectedCategory = '';
        this.bpFilterCategory.value = '';
        this.bpSelectedSeries = '';
        this.bpFilterSeries.value = '';
        this.bpSelectedTier = '';
        this.bpFilterTier.value = '';
        this.syncBpTierPills();
        this.bpSortMethod = 'base-desc';
        this.bpSortBy.value = 'base-desc';
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });

      // ----------------------------------------------------------------
      // Tab 4: Portfolio & Studio Events
      // ----------------------------------------------------------------
      this.addCategoryBtn.addEventListener('click', () => {
        this.openCategoryModal();
      });

      this.addSeriesBtn.addEventListener('click', () => {
        this.openSeriesModal();
      });

      if (this.seriesManagerSearchInput) {
        this.seriesManagerSearchInput.addEventListener('input', () => {
          this.renderSeriesManagerList();
        });
      }

      if (this.seriesManagerClearSearchBtn) {
        this.seriesManagerClearSearchBtn.addEventListener('click', () => {
          if (this.seriesManagerSearchInput) {
            this.seriesManagerSearchInput.value = '';
            this.seriesManagerSearchInput.focus();
          }
          this.renderSeriesManagerList();
        });
      }

      if (this.addTierBtn) {
        this.addTierBtn.addEventListener('click', () => {
          this.openTierModal();
        });
      }

      this.exportDataBtn.addEventListener('click', () => {
        this.exportDatabaseJSON();
      });

      this.importFileInput.addEventListener('change', (e) => {
        this.handleImportFile(e);
      });

      this.wipeDataBtn.addEventListener('click', () => {
        const seedCount = (DEFAULT_SEED && Array.isArray(DEFAULT_SEED.items)) ? DEFAULT_SEED.items.length : 779;
        this.confirmAction(
          'Reset to Official Seed',
          `This will reset your catalog, series, and categories to the verified ${seedCount}-gift database. All changes will be overwritten.`,
          () => {
            this.state.wipeAll();
            this.showToast(`Database reset to official ${seedCount}-gift seed.`);
          }
        );
      });

      // Duplicate Detection and Catalog Integrity Listeners
      this.initDuplicateDetection();

      // GitHub Cloud Synchronization Listeners
      this.initGitHubSync();

      // ----------------------------------------------------------------
      // Tag and Series Management Events
      // ----------------------------------------------------------------
      if (this.resetTagManagerBtn) {
        this.resetTagManagerBtn.addEventListener('click', () => {
          this.confirmAction('Reset Default Tags', 'Restore default tag names and colors (Wall, Series, Backpack)?', () => {
            this.state.resetTags();
            this.applyThemeColors();
            this.renderTagManagerList();
            this.renderAll();
            this.showToast('Default tags and colors restored');
          });
        });
      }

      if (this.tagForm) {
        this.tagForm.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSaveTag();
        });
      }

      if (this.tagModalName) {
        this.tagModalName.addEventListener('input', () => {
          this.updateTagModalPreview();
        });
      }

      if (this.tagModalColorPicker) {
        this.tagModalColorPicker.addEventListener('input', (e) => {
          this.tagModalColorHex.value = e.target.value;
          this.updateTagModalPreview();
        });
      }

      if (this.tagModalColorHex) {
        this.tagModalColorHex.addEventListener('input', (e) => {
          let hex = e.target.value.trim();
          if (hex && !hex.startsWith('#')) hex = '#' + hex;
          if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
            this.tagModalColorPicker.value = hex;
          }
          this.updateTagModalPreview();
        });
      }

      // ----------------------------------------------------------------
      // Modal Category Change -> Dynamic Series Cascade
      // ----------------------------------------------------------------
      this.editItemCategory.addEventListener('change', () => {
        const catId = this.editItemCategory.value;
        this.populateModalSeriesSelect(catId);
      });

      // Modal Target Tabs Selection Buttons (Multi-Select)
      if (this.editItemTabsPresets) {
        this.editItemTabsPresets.addEventListener('click', (e) => {
          const btn = e.target.closest('.tab-preset-btn');
          if (!btn) return;
          btn.classList.toggle('active');
        });
      }

      // Modal Manual Tier Selection Buttons
      this.editItemTierPresets.addEventListener('click', (e) => {
        const btn = e.target.closest('.tier-preset-btn');
        if (!btn || !btn.dataset.tier) return;
        const chosenTier = btn.dataset.tier;
        this.editItemTier.value = chosenTier;
        this.editItemTierPresets.querySelectorAll('.tier-preset-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.tier === chosenTier);
        });
      });

      if (this.editItemBaseValue && this.editItemMarketWorth) {
        this.editItemBaseValue.addEventListener('input', () => {
          if (!this.editItemMarketWorth.value || this.editItemMarketWorth.dataset.autoFilled === 'true') {
            this.editItemMarketWorth.value = this.editItemBaseValue.value;
            this.editItemMarketWorth.dataset.autoFilled = 'true';
          }
        });
        this.editItemMarketWorth.addEventListener('input', () => {
          this.editItemMarketWorth.dataset.autoFilled = 'false';
        });
      }

      // Save Item Form
      this.editItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveItem();
      });

      // Save Category Form
      this.categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveCategory();
      });

      // Save Series Form
      this.seriesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveSeries();
      });

      // Modal Close Handlers (Overlay & Cancel buttons)
      document.querySelectorAll('[data-modal]').forEach(el => {
        el.addEventListener('click', () => {
          const modalId = el.dataset.modal;
          if (modalId) this.closeModal(modalId);
        });
      });

      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.style.display = 'none';
            this.pendingConfirmAction = null;
          }
        });
      });

      // Keyboard Accessibility: Escape key dismisses open modals cleanly
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.modal-overlay').forEach(overlay => {
            if (overlay.style.display === 'flex') {
              overlay.style.display = 'none';
            }
          });
          this.pendingConfirmAction = null;
        }
      });

      // Confirm Modal Action
      this.confirmAcceptBtn.addEventListener('click', () => {
        if (typeof this.pendingConfirmAction === 'function') {
          this.pendingConfirmAction();
        }
        this.closeModal('confirmModal');
      });

      this.confirmCancelBtn.addEventListener('click', () => {
        this.closeModal('confirmModal');
      });

      // Grid Card Action Event Delegation (Single listener per container)
      const handleGridClick = (e) => this.handleCardAction(e);
      if (this.backpackGrid) this.backpackGrid.addEventListener('click', handleGridClick);
      if (this.seriesGiftsGrid) this.seriesGiftsGrid.addEventListener('click', handleGridClick);
      if (this.wallGrid) this.wallGrid.addEventListener('click', handleGridClick);
      if (this.drillGiftsGrid) this.drillGiftsGrid.addEventListener('click', handleGridClick);
    }

    handleCardAction(e) {
      const actionBtn = e.target.closest('[data-action]');
      if (!actionBtn) return;
      e.stopPropagation();
      const card = actionBtn.closest('.gift-card');
      if (!card) return;
      const itemId = card.dataset.id;
      const item = this.state.getItem(itemId);
      if (!item) return;

      const action = actionBtn.dataset.action;
      switch (action) {
        case 'toggle-star':
          this.handleCardToggleStar(item, card);
          break;
        case 'toggle-wall':
          this.handleCardToggleWall(item, card);
          break;
        case 'toggle-bp':
          this.handleCardToggleBp(item, card);
          break;
        case 'qty-minus':
          this.handleCardQtyChange(item, card, -1);
          break;
        case 'qty-plus':
          this.handleCardQtyChange(item, card, 1);
          break;
        case 'open-edit':
          this.openEditItemModal(item.id);
          break;
        case 'route-series':
          if (item.seriesId && this.state.getSeries(item.seriesId)) {
            this.switchTab('tab-series');
            this.openSeriesDrilldown(item.seriesId);
          } else {
            this.showToast('This gift is standalone and does not belong to any series.');
          }
          break;
        case 'copy-to-account':
          this.handleCardCopyToAccount(item, actionBtn.dataset.targetAccount);
          break;
      }
    }

    handleCardCopyToAccount(item, targetAccount) {
      const acc = (targetAccount === 'cryptid') ? 'cryptid' : 'lbs';
      const targetLabel = (acc === 'cryptid') ? 'CryptidArise' : 'LbsLightX';

      this.state.incrementQuantity(item.id, 1, acc);
      if (!item.wallOwned) {
        this.state.updateItem(item.id, { wallOwned: true });
      }
      this.showToast(`Copied "${item.name}" to ${targetLabel} (1 unit)`);
      this.updateBpHeaderCounts();
      this.updateSeriesHeaderCounts();
      this.renderBackpackTab();
    }

    handleCardToggleStar(item, card) {
      const willStar = !item.starred;
      this.state.toggleStarred(item.id);

      // In-place update for all rendered instances of this card
      document.querySelectorAll(`.gift-card[data-id="${item.id}"]`).forEach(c => {
        const starBtn = c.querySelector('.star-mark-badge');
        if (starBtn) {
          starBtn.className = `star-mark-badge ${willStar ? 'is-starred' : 'is-unstarred'}`;
          starBtn.title = willStar ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)';
          const svg = starBtn.querySelector('svg');
          if (svg) {
            svg.setAttribute('fill', willStar ? '#f59e0b' : 'none');
            svg.setAttribute('stroke', willStar ? '#f59e0b' : 'currentColor');
          }
        }
      });

      // Update pill badge counts
      if (this.wallCountStarredOnly) {
        const starCount = this.state.data.items.filter(i => !!i.wallOwned && !!i.starred).length;
        this.wallCountStarredOnly.textContent = starCount;
      }
      if (this.bpCountStarred) {
        const bpStarCount = this.state.data.items.filter(i => (Number(i.quantity) || 0) > 0 && !!i.starred).length;
        this.bpCountStarred.textContent = bpStarCount;
      }

      // If user is filtering by starred only and unstarred item, remove it from active view
      if (this.currentTab === 'tab-wall' && this.wallStatusFilter === 'starred' && !willStar) {
        card.remove();
        this._cachedWallFiltered = this._cachedWallFiltered ? this._cachedWallFiltered.filter(i => i.id !== item.id) : null;
        if (this.wallGrid && this.wallGrid.children.length === 0) {
          this.renderWallTab();
        }
      } else if (this.currentTab === 'tab-backpack' && this.bpStatusFilter === 'starred' && !willStar) {
        card.remove();
        this._cachedBpFiltered = this._cachedBpFiltered ? this._cachedBpFiltered.filter(i => i.id !== item.id) : null;
        if (this.backpackGrid && this.backpackGrid.children.length === 0) {
          this.renderBackpackTab();
        }
      }

      this.showToast(`Updated "${item.name}" priority: ${willStar ? 'Marked Priority' : 'Unmarked'}`);
    }

    handleCardToggleWall(item, card) {
      const willBeOwned = !item.wallOwned;
      const isWallTab = this.currentTab === 'tab-wall';

      const doToggle = () => {
        if (isWallTab) {
          const res = this.state.toggleItemTab(item.id, 'wall');
          if (!res.success) {
            this.showToast(res.reason || 'Could not remove from Wall');
            return;
          }
        } else {
          this.state.toggleWallOwned(item.id);
        }

        const isOwned = !!item.wallOwned;
        const tierInfo = this.getTierInfo(item.tier);

        // Update all rendered card instances
        document.querySelectorAll(`.gift-card[data-id="${item.id}"]`).forEach(c => {
          c.classList.toggle('is-owned', isOwned);
          if (isOwned) {
            c.classList.add(tierInfo.cardClass);
            c.style.setProperty('--card-tier-border', tierInfo.border);
            c.style.setProperty('--card-tier-glow', tierInfo.glow);
          } else {
            c.classList.remove(tierInfo.cardClass);
            c.style.removeProperty('--card-tier-border');
            c.style.removeProperty('--card-tier-glow');
          }

          const wallBtn = c.querySelector('.btn-wall-toggle');
          if (wallBtn) {
            wallBtn.className = `btn-wall-toggle ${isOwned ? 'is-collected' : ''}`;
            wallBtn.title = isOwned ? 'Click to unmark from Wall' : 'Mark Collected on Wall';
            wallBtn.innerHTML = isOwned
              ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Collected</span>`
              : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>Mark Collected</span>`;
          }

          const tagWall = c.querySelector('.tag-wall');
          if (tagWall) {
            tagWall.classList.toggle('is-active', isOwned);
            tagWall.title = isOwned ? 'On Wall (Click to remove)' : 'Add to Wall';
          }

          const exchangeBadge = c.querySelector('.marker-badge-exchange');
          const qty = Number(item.quantity) || 0;
          const isExchangeNeeded = qty > 0 && !isOwned;
          if (isExchangeNeeded && !exchangeBadge) {
            const badgesLeft = c.querySelector('.badges-group-left');
            if (badgesLeft) {
              const badge = document.createElement('span');
              badge.className = 'marker-badge-exchange';
              badge.title = 'In Backpack but missing on Wall';
              badge.textContent = 'Exchange Needed';
              badgesLeft.appendChild(badge);
            }
          } else if (!isExchangeNeeded && exchangeBadge) {
            exchangeBadge.remove();
          }
        });

        // If on Wall tab and item was uncollected, remove card from Wall view
        if (isWallTab && !isOwned) {
          card.remove();
          this._cachedWallFiltered = this._cachedWallFiltered ? this._cachedWallFiltered.filter(i => i.id !== item.id) : null;
          if (this.wallGrid && this.wallGrid.children.length === 0) {
            this.renderWallTab();
          }
        }

        // Update header counters in-place
        this.updateSeriesHeaderCounts();
        this.updateWallHeaderCounts();
        this.updateBpHeaderCounts();
        if (this.focusedSeriesId) {
          this.updateDrilldownHeaderCounts(this.focusedSeriesId);
        }

        this.showToast(isOwned ? `Marked "${item.name}" as Collected on Wall` : `Removed "${item.name}" from Wall`);
      };

      this.confirmAction(
        'Confirm Wall Status',
        `Are you sure you want to mark "${item.name}" as ${willBeOwned ? 'collected on' : 'missing from'} the Wall?`,
        doToggle
      );
    }

    handleCardToggleBp(item, card) {
      const res = this.state.toggleItemTab(item.id, 'backpack', this.activeBackpackAccount);
      if (!res.success) {
        this.showToast(res.reason || 'Could not update Backpack tab');
        return;
      }

      const activeQty = this.getItemQuantity(item, this.activeBackpackAccount);
      const hasAnyBp = this.getItemQuantity(item, 'lbs') > 0 || this.getItemQuantity(item, 'cryptid') > 0;
      const isInBackpack = (Array.isArray(item.tabs) ? item.tabs.includes('backpack') : false) || hasAnyBp;

      document.querySelectorAll(`.gift-card[data-id="${item.id}"]`).forEach(c => {
        const btnBp = c.querySelector('.tag-bp');
        if (btnBp) {
          btnBp.className = `btn-context-tag tag-bp ${isInBackpack ? 'is-active' : ''}`;
          btnBp.title = isInBackpack ? 'In Backpack (Click to remove)' : 'Add to Backpack';
          btnBp.innerHTML = `
            ${TAG_ICONS.backpack}
            <span>${this.escapeHtml(this.state.getTagName('backpack'))}${activeQty > 0 ? ` (${activeQty})` : ''}</span>
          `;
        }
      });

      this.updateSeriesHeaderCounts();
      this.updateBpHeaderCounts();

      this.showToast(res.added ? `Added "${item.name}" to Backpack` : `Removed "${item.name}" from Backpack`);
    }

    handleCardQtyChange(item, card, delta) {
      this.state.incrementQuantity(item.id, delta, this.activeBackpackAccount);
      const newQty = this.getItemQuantity(item, this.activeBackpackAccount);

      if (newQty > 0) {
        const qtySpan = card.querySelector('.stepper-qty');
        if (qtySpan) qtySpan.textContent = newQty;

        const exchangeBadge = card.querySelector('.marker-badge-exchange');
        const isExchangeNeeded = newQty > 0 && !item.wallOwned;
        if (isExchangeNeeded && !exchangeBadge) {
          const badgesLeft = card.querySelector('.badges-group-left');
          if (badgesLeft) {
            const badge = document.createElement('span');
            badge.className = 'marker-badge-exchange';
            badge.title = 'In Backpack but missing on Wall';
            badge.textContent = 'Exchange Needed';
            badgesLeft.appendChild(badge);
          }
        } else if (!isExchangeNeeded && exchangeBadge) {
          exchangeBadge.remove();
        }
      } else {
        card.remove();
        this._cachedBpFiltered = this._cachedBpFiltered ? this._cachedBpFiltered.filter(i => i.id !== item.id) : null;
        if (this.backpackGrid && this.backpackGrid.children.length === 0) {
          this.renderBackpackTab();
        }
      }

      document.querySelectorAll(`.gift-card[data-id="${item.id}"]`).forEach(c => {
        const btnBp = c.querySelector('.tag-bp');
        if (btnBp) {
          const hasAnyBp = this.getItemQuantity(item, 'lbs') > 0 || this.getItemQuantity(item, 'cryptid') > 0;
          btnBp.classList.toggle('is-active', hasAnyBp);
          btnBp.title = hasAnyBp ? 'In Backpack (Click to remove)' : 'Add to Backpack';
          btnBp.innerHTML = `
            ${TAG_ICONS.backpack}
            <span>${this.escapeHtml(this.state.getTagName('backpack'))}${newQty > 0 ? ` (${newQty})` : ''}</span>
          `;
        }
      });

      this.updateBpHeaderCounts();
      this.updateSeriesHeaderCounts();
      if (this.focusedSeriesId) {
        this.updateDrilldownHeaderCounts(this.focusedSeriesId);
      }
    }

    getItemQuantity(item, account = this.activeBackpackAccount) {
      if (!item) return 0;
      if (item.backpacks && typeof item.backpacks === 'object') {
        const acc = (account === 'cryptid') ? 'cryptid' : 'lbs';
        return Math.max(0, Math.floor(Number(item.backpacks[acc]) || 0));
      }
      return (account === 'lbs') ? Math.max(0, Math.floor(Number(item.quantity) || 0)) : 0;
    }

    switchBackpackAccount(account) {
      this.activeBackpackAccount = account;
      try {
        localStorage.setItem('hellotalk_active_backpack', account);
      } catch (e) {}

      if (this.bpAccountTabs) {
        this.bpAccountTabs.forEach(btn => {
          const isActive = btn.dataset.account === account;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }

      this.bpRenderedCount = BATCH_SIZE;
      this.renderBackpackTab();
      this.updateSeriesHeaderCounts();
      if (this.currentTab === 'tab-series') this.renderSeriesTab();
      if (this.currentTab === 'tab-wall') this.renderWallTab();
      if (this.currentTab === 'tab-portfolio') this.renderPortfolioTab();

      this.showToast(`Switched to ${account === 'lbs' ? 'LbsLightX' : 'CryptidArise'} Backpack`);
    }

    updateSeriesHeaderCounts(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const totalItems = seriesItems.length;
      const wallCollectedCount = seriesItems.filter(i => !!i.wallOwned).length;
      const wallMissingCount = totalItems - wallCollectedCount;
      const inStockCount = seriesItems.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) > 0).length;
      const completionPct = totalItems > 0 ? ((wallCollectedCount / totalItems) * 100).toFixed(1) : '0.0';

      if (this.seriesTotalGifts) this.seriesTotalGifts.textContent = totalItems;
      if (this.seriesTotalCount) this.seriesTotalCount.textContent = this.state.data.series.length;
      if (this.seriesWallProgressRatio) this.seriesWallProgressRatio.textContent = `${wallCollectedCount} / ${totalItems}`;
      if (this.seriesWallProgressPercent) this.seriesWallProgressPercent.textContent = `${completionPct}% Collected on Wall`;
      if (this.seriesWallProgressBar) this.seriesWallProgressBar.style.width = `${completionPct}%`;

      let completedSeriesCount = 0;
      const totalSeries = this.state.data.series.length;
      this.state.data.series.forEach(s => {
        const sItems = seriesItems.filter(i => i.seriesId === s.id);
        if (sItems.length > 0 && sItems.every(i => !!i.wallOwned)) {
          completedSeriesCount++;
        }
      });
      const seriesPct = totalSeries > 0 ? ((completedSeriesCount / totalSeries) * 100).toFixed(1) : '0.0';
      if (this.seriesCompleteRatio) this.seriesCompleteRatio.textContent = `${completedSeriesCount} / ${totalSeries}`;
      if (this.seriesCompletePercent) this.seriesCompletePercent.textContent = `${seriesPct}% Series Complete`;
      if (this.seriesCompleteBar) this.seriesCompleteBar.style.width = `${seriesPct}%`;

      if (this.seriesCountAll) this.seriesCountAll.textContent = totalItems;
      if (this.seriesCountCollected) this.seriesCountCollected.textContent = wallCollectedCount;
      if (this.seriesCountMissing) this.seriesCountMissing.textContent = wallMissingCount;
      if (this.seriesCountInStock) this.seriesCountInStock.textContent = inStockCount;
    }

    updateWallHeaderCounts(collectedGifts) {
      if (!collectedGifts) collectedGifts = this.getWallCatalogItems();
      const totalCollected = collectedGifts.length;
      const totalBase = collectedGifts.reduce((s, i) => s + (Number(i.baseValue) || 0), 0);
      const totalMarket = collectedGifts.reduce((s, i) => s + (Number(i.marketWorth) || 0), 0);
      const standaloneCount = collectedGifts.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId)).length;

      if (this.wallCollectedTotal) this.wallCollectedTotal.textContent = totalCollected;
      if (this.wallBaseTotal) this.wallBaseTotal.textContent = this.formatNumber(totalBase);
      if (this.wallMarketTotal) this.wallMarketTotal.textContent = this.formatNumber(totalMarket);

      if (this.wallCountCollectedOnly) this.wallCountCollectedOnly.textContent = totalCollected;
      if (this.wallCountStarredOnly) this.wallCountStarredOnly.textContent = collectedGifts.filter(i => !!i.starred).length;
      if (this.wallCountStandalone) this.wallCountStandalone.textContent = standaloneCount;
    }

    updateBpHeaderCounts(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const allItems = this.state.data.items || [];
      const totalUnits = bpItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount), 0);
      const totalBaseWorth = bpItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.baseValue) || 0), 0);
      const totalMarketWorth = bpItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.marketWorth) || 0), 0);
      const netSpread = totalMarketWorth - totalBaseWorth;
      const spreadSign = netSpread > 0 ? '+' : '';

      const exchangeNeededGifts = bpItems.filter(i => !i.wallOwned);
      const starredGifts = bpItems.filter(i => !!i.starred);
      const inStockExact1 = bpItems.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) === 1);
      const extrasGifts = bpItems.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) > 1);
      const standaloneCount = bpItems.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId)).length;
      const sharedGifts = bpItems.filter(i => this.getItemQuantity(i, 'lbs') > 0 && this.getItemQuantity(i, 'cryptid') > 0);

      // Update switcher pill badges
      const lbsItemsCount = allItems.filter(i => this.getItemQuantity(i, 'lbs') > 0).length;
      const cryptidItemsCount = allItems.filter(i => this.getItemQuantity(i, 'cryptid') > 0).length;
      if (this.bpPillCountLbs) this.bpPillCountLbs.textContent = lbsItemsCount;
      if (this.bpPillCountCryptid) this.bpPillCountCryptid.textContent = cryptidItemsCount;

      if (this.bpTotalUnits) this.bpTotalUnits.textContent = this.formatNumber(totalUnits);
      if (this.bpUniqueItems) this.bpUniqueItems.textContent = bpItems.length;
      if (this.bpMarketWorth) this.bpMarketWorth.textContent = this.formatNumber(totalMarketWorth);
      if (this.bpBaseWorth) this.bpBaseWorth.textContent = this.formatNumber(totalBaseWorth);
      if (this.bpProfitSpread) this.bpProfitSpread.textContent = `${spreadSign}${this.formatNumber(netSpread)} Coins`;
      if (this.bpExchangeMarkerCount) this.bpExchangeMarkerCount.textContent = exchangeNeededGifts.length;

      if (this.bpCountAll) this.bpCountAll.textContent = bpItems.length;
      if (this.bpCountShared) this.bpCountShared.textContent = sharedGifts.length;
      if (this.bpCountInStock) this.bpCountInStock.textContent = inStockExact1.length;
      if (this.bpCountExchange) this.bpCountExchange.textContent = exchangeNeededGifts.length;
      if (this.bpCountStarred) this.bpCountStarred.textContent = starredGifts.length;
      if (this.bpCountExtras) this.bpCountExtras.textContent = extrasGifts.length;
      if (this.bpCountStandalone) this.bpCountStandalone.textContent = standaloneCount;
    }

    switchTab(tabId, saveToStorage = true) {
      if (!tabId) return;
      const validTabs = ['tab-backpack', 'tab-series', 'tab-wall', 'tab-portfolio'];
      if (!validTabs.includes(tabId)) return;
      this.currentTab = tabId;

      if (saveToStorage) {
        try {
          localStorage.setItem('hellotalk_active_tab', tabId);
        } catch (e) {}
      }

      this.navTabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
      });

      this.tabPanes.forEach(pane => {
        pane.classList.toggle('active', pane.id === tabId);
      });

      this.renderActiveTab();
      if (saveToStorage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    renderActiveTab() {
      switch (this.currentTab) {
        case 'tab-series': this.renderSeriesTab(); break;
        case 'tab-wall': this.renderWallTab(); break;
        case 'tab-backpack': this.renderBackpackTab(); break;
        case 'tab-portfolio': this.renderPortfolioTab(); break;
      }
    }

    // ------------------------------------------------------------------
    // MASTER RENDER DISPATCHER (COALESCED & DEBOUNCED)
    // ------------------------------------------------------------------
    scheduleRender() {
      if (this._renderScheduled) return;
      this._renderScheduled = true;
      requestAnimationFrame(() => {
        this._renderScheduled = false;
        this.renderAll();
      });
    }

    renderAll() {
      this.renderSeriesTab();
      this.renderWallTab();
      this.renderBackpackTab();
      this.renderPortfolioTab();
      this.populateCategorySelects();
    }

    // ------------------------------------------------------------------
    // TAB CATALOG ROUTING & SCOPING HELPERS
    // ------------------------------------------------------------------
    getSeriesCatalogItems() {
      return (this.state.data.items || []).filter(i => !!(i.seriesId && this.state.getSeries(i.seriesId)));
    }

    getWallCatalogItems() {
      return this.state.data.items.filter(i => {
        return !!i.wallOwned;
      });
    }

    getBackpackCatalogItems(account = this.activeBackpackAccount) {
      return (this.state.data.items || []).filter(i => {
        return this.getItemQuantity(i, account) > 0;
      });
    }

    // ------------------------------------------------------------------
    // TAB 1: SERIES (MASTER CATALOG FOR ALL 779 GIFTS & 95 SERIES)
    // ------------------------------------------------------------------
    renderSeriesTab() {
      const seriesItems = this.getSeriesCatalogItems();
      const totalItems = seriesItems.length;
      const wallCollectedCount = seriesItems.filter(i => !!i.wallOwned).length;
      const completionPct = totalItems > 0 ? ((wallCollectedCount / totalItems) * 100).toFixed(1) : '0.0';

      this.updateSeriesHeaderCounts(seriesItems);
      this.updateSeriesCategoryDropdownFilter(seriesItems);
      this.updateSeriesDropdownFilter(seriesItems);
      this.updateSeriesTierDropdownFilter(seriesItems);
      this.renderSeriesTierPills(seriesItems);

      if (this.focusedSeriesId) {
        this.openSeriesDrilldown(this.focusedSeriesId);
        return;
      }

      const filtered = this.getFilteredSeriesItems();
      this._cachedSeriesFiltered = filtered;

      const hasActiveFilters = this.globalSearchQuery || this.seriesStatusFilter !== 'all' || this.seriesSelectedCategory || this.seriesSelectedSeries || this.seriesSelectedTier;
      this.seriesResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.seriesRenderedCount);
      const currentHeight = this.seriesGiftsGrid.offsetHeight;
      if (currentHeight > 0) {
        this.seriesGiftsGrid.style.minHeight = `${currentHeight}px`;
      }
      this.seriesGiftsGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.seriesGiftsGrid.style.minHeight = '';
        this.seriesGiftsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">No gifts match current criteria</div>
            <p style="font-size: 13px; color: var(--text-muted);">Adjust search query or reset filter pills to browse the master catalog.</p>
          </div>
        `;
        if (this.seriesScrollSentinel) this.seriesScrollSentinel.style.display = 'none';
        if (this.seriesResultsCount) this.seriesResultsCount.textContent = 'Showing 0 gifts';
        if (this.seriesResultsAggregate) this.seriesResultsAggregate.textContent = 'Master Catalog';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createSeriesGiftCard(item);
        fragment.appendChild(card);
      });
      this.seriesGiftsGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.seriesGiftsGrid.style.minHeight = '';
      });

      if (this.seriesScrollSentinel) {
        this.seriesScrollSentinel.style.display = (toRender.length < filtered.length) ? 'block' : 'none';
      }

      if (this.seriesResultsCount) this.seriesResultsCount.textContent = `Showing ${toRender.length} of ${totalItems} gifts`;
      if (this.seriesResultsAggregate) this.seriesResultsAggregate.textContent = `Wall: ${wallCollectedCount}/${totalItems} (${completionPct}%)`;
    }

    appendSeriesBatch() {
      if (this.isBatchLoading || this.focusedSeriesId) return;
      const filtered = this._cachedSeriesFiltered || this.getFilteredSeriesItems();
      if (this.seriesRenderedCount >= filtered.length) {
        if (this.seriesScrollSentinel) this.seriesScrollSentinel.style.display = 'none';
        return;
      }
      this.isBatchLoading = true;
      const prevCount = this.seriesRenderedCount;
      this.seriesRenderedCount = Math.min(filtered.length, this.seriesRenderedCount + BATCH_SIZE);
      const toAppend = filtered.slice(prevCount, this.seriesRenderedCount);

      const fragment = document.createDocumentFragment();
      toAppend.forEach(item => {
        fragment.appendChild(this.createSeriesGiftCard(item));
      });
      this.seriesGiftsGrid.appendChild(fragment);

      if (this.seriesResultsCount) {
        this.seriesResultsCount.textContent = `Showing ${this.seriesRenderedCount} of ${filtered.length} gifts`;
      }
      if (this.seriesScrollSentinel) {
        this.seriesScrollSentinel.style.display = (this.seriesRenderedCount < filtered.length) ? 'block' : 'none';
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          this.isBatchLoading = false;
        }, 50);
      });
    }

    getFilteredSeriesItems() {
      let items = this.getSeriesCatalogItems();

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.seriesStatusFilter === 'collected') {
        items = items.filter(i => !!i.wallOwned);
      } else if (this.seriesStatusFilter === 'missing') {
        items = items.filter(i => !i.wallOwned);
      } else if (this.seriesStatusFilter === 'in-stock') {
        items = items.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) > 0);
      }

      if (this.seriesSelectedCategory) {
        items = items.filter(i => i.categoryId === this.seriesSelectedCategory);
      }

      if (this.seriesSelectedSeries) {
        items = items.filter(i => i.seriesId === this.seriesSelectedSeries);
      }

      if (this.seriesSelectedTier) {
        const cleanTier = this.seriesSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;
        const aOwned = a.wallOwned ? 1 : 0;
        const bOwned = b.wallOwned ? 1 : 0;

        switch (this.seriesSortMethod) {
          case 'coins-desc': return bBase - aBase;
          case 'coins-asc': return aBase - bBase;
          case 'missing-first':
            if (aOwned !== bOwned) return aOwned - bOwned;
            return bBase - aBase;
          case 'series-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'category-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aCatId = a.categoryId || (aSer ? aSer.categoryId : '');
            const bCatId = b.categoryId || (bSer ? bSer.categoryId : '');
            const aCat = this.state.getCategory(aCatId);
            const bCat = this.state.getCategory(bCatId);
            const aCatOrder = aCat ? (Number(aCat.order) || 9999) : 99999;
            const bCatOrder = bCat ? (Number(bCat.order) || 9999) : 99999;
            if (aCatOrder !== bCatOrder) return aCatOrder - bCatOrder;
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'tier-order': {
            const aInfo = this.getTierInfo(a.tier);
            const bInfo = this.getTierInfo(b.tier);
            const aOrder = Number(aInfo.displayOrder ?? aInfo.rank) || 999;
            const bOrder = Number(bInfo.displayOrder ?? bInfo.rank) || 999;
            if (aOrder !== bOrder) return aOrder - bOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return bBase - aBase;
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'series-group': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aName = aSer ? aSer.name : 'Standalone';
            const bName = bSer ? bSer.name : 'Standalone';
            return aName.localeCompare(bName) || (bBase - aBase);
          }
          default: return 0;
        }
      });

      return items;
    }

    createSeriesGiftCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const isOwned = !!item.wallOwned;
      const isStarred = !!item.starred;
      const ser = this.state.getSeries(item.seriesId);
      const qty = this.getItemQuantity(item, this.activeBackpackAccount);
      const hasAnyBp = this.getItemQuantity(item, 'lbs') > 0 || this.getItemQuantity(item, 'cryptid') > 0;
      const isInBackpack = (Array.isArray(item.tabs) ? item.tabs.includes('backpack') : false) || hasAnyBp;

      card.dataset.id = item.id;
      card.className = `gift-card ${isOwned ? 'is-owned ' + tierInfo.cardClass : ''}`;
      if (isOwned) {
        card.style.setProperty('--card-tier-border', tierInfo.border);
        card.style.setProperty('--card-tier-glow', tierInfo.glow);
      }

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : '<span class="badge-series badge-standalone" title="Standalone / Non-Series Gift">Standalone</span>'}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <button class="btn-wall-toggle ${isOwned ? 'is-collected' : ''}" data-action="toggle-wall" title="${isOwned ? 'Click to unmark from Wall' : 'Mark Collected on Wall'}">
              ${isOwned
                ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Collected</span>`
                : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>Mark Collected</span>`
              }
            </button>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" data-action="toggle-star" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" data-action="open-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-bp ${isInBackpack ? 'is-active' : ''}" data-action="toggle-bp" title="${isInBackpack ? 'In Backpack (Click to remove)' : 'Add to Backpack'}">
              ${TAG_ICONS.backpack}
              <span>${this.escapeHtml(this.state.getTagName('backpack'))}${qty > 0 ? ` (${qty})` : ''}</span>
            </button>
          </div>
        </div>
      `;

      return card;
    }

    updateDrilldownHeaderCounts(seriesId) {
      if (!seriesId || this.focusedSeriesId !== seriesId) return;
      const sItems = this.getSeriesCatalogItems().filter(i => i.seriesId === seriesId);
      const total = sItems.length;
      const collected = sItems.filter(i => !!i.wallOwned).length;
      const totalUnits = sItems.reduce((sum, i) => sum + (Number(i.quantity) || 0), 0);
      const pct = total > 0 ? ((collected / total) * 100).toFixed(0) : '0';

      if (this.drillProgressText) this.drillProgressText.textContent = `${collected} / ${total} Collected on Wall (${pct}%)`;
      if (this.drillUnitsText) this.drillUnitsText.textContent = `${totalUnits} Units in Backpack`;
      if (this.drillProgressBar) this.drillProgressBar.style.width = `${pct}%`;
      if (this.drillGiftsCountTitle) this.drillGiftsCountTitle.textContent = `Series Gifts (${total})`;
    }

    openSeriesDrilldown(seriesId) {
      const ser = this.state.getSeries(seriesId);
      if (!ser) return;

      this.focusedSeriesId = seriesId;
      this.seriesGiftsContainer.style.display = 'none';
      this.seriesFilterHub.style.display = 'none';
      this.seriesDrillDownView.style.display = 'block';

      const cat = this.state.getCategory(ser.categoryId);
      this.drillCategoryCrumb.textContent = cat ? cat.name : 'Standalone Category';
      this.drillSeriesTitle.textContent = ser.name;
      this.drillSeriesBadge.textContent = ser.badge || ser.name;
      this.drillSeriesDesc.textContent = ser.description || '';

      this.updateDrilldownHeaderCounts(seriesId);

      const sItems = this.getSeriesCatalogItems().filter(i => i.seriesId === ser.id);
      this.drillGiftsGrid.innerHTML = '';
      sItems.sort((a, b) => (b.baseValue || 0) - (a.baseValue || 0));
      sItems.forEach(item => {
        const card = this.createSeriesGiftCard(item);
        this.drillGiftsGrid.appendChild(card);
      });
    }

    // ------------------------------------------------------------------
    // TAB 2: WALL (STRICTLY COLLECTED-ONLY GALLERY)
    // ------------------------------------------------------------------
    renderWallTab() {
      // ONLY GIFTS MARKED AS COLLECTED
      const collectedGifts = this.getWallCatalogItems();
      const totalCollected = collectedGifts.length;

      this.updateWallHeaderCounts(collectedGifts);

      this.updateWallCategoryDropdownFilter(collectedGifts);
      this.updateWallSeriesDropdownFilter(collectedGifts);
      this.updateWallTierDropdownFilter(collectedGifts);
      this.renderWallTierPills(collectedGifts);

      const filtered = this.getFilteredWallItems(collectedGifts);
      this._cachedWallFiltered = filtered;

      const hasActiveFilters = this.globalSearchQuery || this.wallStatusFilter !== 'all' || this.wallSelectedCategory || this.wallSelectedSeries || this.wallSelectedTier;
      this.wallResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.wallRenderedCount);
      const currentHeight = this.wallGrid.offsetHeight;
      if (currentHeight > 0) {
        this.wallGrid.style.minHeight = `${currentHeight}px`;
      }
      this.wallGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.wallGrid.style.minHeight = '';
        this.wallGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
              ${totalCollected === 0 ? 'No gifts marked as collected on your Wall yet' : 'No collected gifts match current filters'}
            </div>
            <p style="font-size: 13px; color: var(--text-muted);">
              ${totalCollected === 0 ? 'Switch to the Series catalog and click "Mark Collected" on gifts to populate your Wall gallery.' : 'Adjust search query or reset filter pills to view your full Wall collection.'}
            </p>
          </div>
        `;
        if (this.wallScrollSentinel) this.wallScrollSentinel.style.display = 'none';
        if (this.wallResultsCount) this.wallResultsCount.textContent = 'Showing 0 collected gifts';
        if (this.wallResultsAggregate) this.wallResultsAggregate.textContent = 'Wall Gallery';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createWallCard(item);
        fragment.appendChild(card);
      });
      this.wallGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.wallGrid.style.minHeight = '';
      });

      if (this.wallScrollSentinel) {
        this.wallScrollSentinel.style.display = (toRender.length < filtered.length) ? 'block' : 'none';
      }

      const totalBase = collectedGifts.reduce((s, i) => s + (Number(i.baseValue) || 0), 0);
      const totalMarket = collectedGifts.reduce((s, i) => s + (Number(i.marketWorth) || 0), 0);

      if (this.wallResultsCount) this.wallResultsCount.textContent = `Showing ${toRender.length} of ${totalCollected} collected gifts`;
      if (this.wallResultsAggregate) this.wallResultsAggregate.textContent = `Wall Base: ${this.formatNumber(totalBase)} // Market: ${this.formatNumber(totalMarket)}`;
    }

    appendWallBatch() {
      if (this.isBatchLoading) return;
      const filtered = this._cachedWallFiltered || this.getFilteredWallItems(this.getWallCatalogItems());
      if (this.wallRenderedCount >= filtered.length) {
        if (this.wallScrollSentinel) this.wallScrollSentinel.style.display = 'none';
        return;
      }
      this.isBatchLoading = true;
      const prevCount = this.wallRenderedCount;
      this.wallRenderedCount = Math.min(filtered.length, this.wallRenderedCount + BATCH_SIZE);
      const toAppend = filtered.slice(prevCount, this.wallRenderedCount);

      const fragment = document.createDocumentFragment();
      toAppend.forEach(item => {
        fragment.appendChild(this.createWallCard(item));
      });
      this.wallGrid.appendChild(fragment);

      if (this.wallResultsCount) {
        this.wallResultsCount.textContent = `Showing ${this.wallRenderedCount} of ${filtered.length} collected gifts`;
      }
      if (this.wallScrollSentinel) {
        this.wallScrollSentinel.style.display = (this.wallRenderedCount < filtered.length) ? 'block' : 'none';
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          this.isBatchLoading = false;
        }, 50);
      });
    }

    getFilteredWallItems(collectedGifts) {
      let items = [...collectedGifts];

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.wallStatusFilter === 'starred') {
        items = items.filter(i => !!i.starred);
      } else if (this.wallStatusFilter === 'standalone') {
        items = items.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId));
      }

      if (this.wallSelectedCategory) {
        if (this.wallSelectedCategory === '__standalone__') {
          items = items.filter(i => !i.categoryId);
        } else {
          items = items.filter(i => i.categoryId === this.wallSelectedCategory);
        }
      }

      if (this.wallSelectedSeries) {
        if (this.wallSelectedSeries === '__standalone__') {
          items = items.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId));
        } else {
          items = items.filter(i => i.seriesId === this.wallSelectedSeries);
        }
      }

      if (this.wallSelectedTier) {
        const cleanTier = this.wallSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;

        switch (this.wallSortMethod) {
          case 'coins-desc': return bBase - aBase;
          case 'coins-asc': return aBase - bBase;
          case 'series-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'category-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aCatId = a.categoryId || (aSer ? aSer.categoryId : '');
            const bCatId = b.categoryId || (bSer ? bSer.categoryId : '');
            const aCat = this.state.getCategory(aCatId);
            const bCat = this.state.getCategory(bCatId);
            const aCatOrder = aCat ? (Number(aCat.order) || 9999) : 99999;
            const bCatOrder = bCat ? (Number(bCat.order) || 9999) : 99999;
            if (aCatOrder !== bCatOrder) return aCatOrder - bCatOrder;
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'tier-order': {
            const aInfo = this.getTierInfo(a.tier);
            const bInfo = this.getTierInfo(b.tier);
            const aOrder = Number(aInfo.displayOrder ?? aInfo.rank) || 999;
            const bOrder = Number(bInfo.displayOrder ?? bInfo.rank) || 999;
            if (aOrder !== bOrder) return aOrder - bOrder;
            return (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          }
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return bBase - aBase;
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'recent-desc': return (b.updatedAt || 0) - (a.updatedAt || 0);
          default: return 0;
        }
      });

      return items;
    }

    createWallCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const isStarred = !!item.starred;
      const ser = this.state.getSeries(item.seriesId);
      const qty = this.getItemQuantity(item, this.activeBackpackAccount);
      const isInSeries = (Array.isArray(item.tabs) ? item.tabs.includes('series') : false) && !!(item.categoryId && item.seriesId && this.state.getSeries(item.seriesId));
      const hasAnyBp = this.getItemQuantity(item, 'lbs') > 0 || this.getItemQuantity(item, 'cryptid') > 0;
      const isInBackpack = (Array.isArray(item.tabs) ? item.tabs.includes('backpack') : false) || hasAnyBp;

      // On Wall tab, all displayed items are owned -> tier glow active!
      card.dataset.id = item.id;
      card.className = `gift-card is-owned ${tierInfo.cardClass}`;
      card.style.setProperty('--card-tier-border', tierInfo.border);
      card.style.setProperty('--card-tier-glow', tierInfo.glow);

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : '<span class="badge-series badge-standalone" title="Standalone / Non-Series Gift">Standalone</span>'}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <button class="btn-wall-toggle is-collected" data-action="toggle-wall" title="Click to unmark from Wall">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Collected</span>
            </button>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" data-action="toggle-star" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" data-action="open-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-series ${isInSeries ? 'is-active' : ''}" data-action="route-series" title="${isInSeries ? 'In Series Catalog (Click to view series)' : 'Series Catalog'}">
              ${TAG_ICONS.series}
              <span>${this.escapeHtml(this.state.getTagName('series'))}</span>
            </button>
            <button type="button" class="btn-context-tag tag-bp ${isInBackpack ? 'is-active' : ''}" data-action="toggle-bp" title="${isInBackpack ? 'In Backpack (Click to remove)' : 'Add to Backpack'}">
              ${TAG_ICONS.backpack}
              <span>${this.escapeHtml(this.state.getTagName('backpack'))}${qty > 0 ? ` (${qty})` : ''}</span>
            </button>
          </div>
        </div>
      `;

      return card;
    }

    // ------------------------------------------------------------------
    // TAB 3: BACKPACK (INVENTORY & STOCK LINKED TO MASTER CATALOG)
    // ------------------------------------------------------------------
    renderBackpackTab() {
      // STRICT VIEW SCOPE: Only gifts physically in user backpack inventory
      const bpItems = this.getBackpackCatalogItems();

      this.updateBpHeaderCounts(bpItems);

      this.updateBpCategoryDropdownFilter(bpItems);
      this.updateBpSeriesDropdownFilter(bpItems);
      this.updateBpTierDropdownFilter(bpItems);
      this.renderBpTierPills(bpItems);

      const filtered = this.getFilteredBpItems();
      this._cachedBpFiltered = filtered;

      const hasActiveFilters = this.globalSearchQuery || this.bpStatusFilter !== 'all' || this.bpSelectedCategory || this.bpSelectedSeries || this.bpSelectedTier;
      this.bpResetFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';

      const toRender = filtered.slice(0, this.bpRenderedCount);
      const currentHeight = this.backpackGrid.offsetHeight;
      if (currentHeight > 0) {
        this.backpackGrid.style.minHeight = `${currentHeight}px`;
      }
      this.backpackGrid.innerHTML = '';

      if (toRender.length === 0) {
        this.backpackGrid.style.minHeight = '';
        this.backpackGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
            <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">No inventory gifts match criteria</div>
            <p style="font-size: 13px; color: var(--text-muted);">Adjust search query or filter pills to browse your Backpack stock.</p>
          </div>
        `;
        if (this.bpScrollSentinel) this.bpScrollSentinel.style.display = 'none';
        if (this.bpResultsCount) this.bpResultsCount.textContent = 'Showing 0 inventory gifts';
        if (this.bpResultsAggregate) this.bpResultsAggregate.textContent = 'Base: 0 // Market: 0';
        return;
      }

      const fragment = document.createDocumentFragment();
      toRender.forEach(item => {
        const card = this.createBackpackCard(item);
        fragment.appendChild(card);
      });
      this.backpackGrid.appendChild(fragment);
      requestAnimationFrame(() => {
        this.backpackGrid.style.minHeight = '';
      });

      if (this.bpScrollSentinel) {
        this.bpScrollSentinel.style.display = (toRender.length < filtered.length) ? 'block' : 'none';
      }

      const subBase = filtered.reduce((s, i) => s + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.baseValue) || 0), 0);
      const subMarket = filtered.reduce((s, i) => s + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.marketWorth) || 0), 0);

      if (this.bpResultsCount) this.bpResultsCount.textContent = `Showing ${toRender.length} of ${filtered.length} inventory gifts`;
      if (this.bpResultsAggregate) this.bpResultsAggregate.textContent = `Held Base: ${this.formatNumber(subBase)} // Market: ${this.formatNumber(subMarket)}`;
    }

    appendBpBatch() {
      if (this.isBatchLoading) return;
      const filtered = this._cachedBpFiltered || this.getFilteredBpItems();
      if (this.bpRenderedCount >= filtered.length) {
        if (this.bpScrollSentinel) this.bpScrollSentinel.style.display = 'none';
        return;
      }
      this.isBatchLoading = true;
      const prevCount = this.bpRenderedCount;
      this.bpRenderedCount = Math.min(filtered.length, this.bpRenderedCount + BATCH_SIZE);
      const toAppend = filtered.slice(prevCount, this.bpRenderedCount);

      const fragment = document.createDocumentFragment();
      toAppend.forEach(item => {
        fragment.appendChild(this.createBackpackCard(item));
      });
      this.backpackGrid.appendChild(fragment);

      if (this.bpResultsCount) {
        this.bpResultsCount.textContent = `Showing ${this.bpRenderedCount} of ${filtered.length} inventory gifts`;
      }
      if (this.bpScrollSentinel) {
        this.bpScrollSentinel.style.display = (this.bpRenderedCount < filtered.length) ? 'block' : 'none';
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          this.isBatchLoading = false;
        }, 50);
      });
    }

    getFilteredBpItems() {
      // STRICT VIEW SCOPE: Only gifts physically in user backpack inventory
      let items = this.getBackpackCatalogItems();

      if (this.globalSearchQuery) {
        const q = this.globalSearchQuery;
        items = items.filter(i => {
          const cat = this.state.getCategory(i.categoryId);
          const ser = this.state.getSeries(i.seriesId);
          return (
            (i.name && i.name.toLowerCase().includes(q)) ||
            (cat && cat.name.toLowerCase().includes(q)) ||
            (ser && ser.name.toLowerCase().includes(q)) ||
            (i.tier && i.tier.toLowerCase().includes(q)) ||
            (i.notes && i.notes.toLowerCase().includes(q))
          );
        });
      }

      if (this.bpStatusFilter === 'shared') {
        items = items.filter(i => this.getItemQuantity(i, 'lbs') > 0 && this.getItemQuantity(i, 'cryptid') > 0);
      } else if (this.bpStatusFilter === 'in-stock') {
        items = items.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) === 1);
      } else if (this.bpStatusFilter === 'exchange-needed') {
        items = items.filter(i => !i.wallOwned);
      } else if (this.bpStatusFilter === 'starred') {
        items = items.filter(i => !!i.starred);
      } else if (this.bpStatusFilter === 'extras') {
        items = items.filter(i => this.getItemQuantity(i, this.activeBackpackAccount) > 1);
      } else if (this.bpStatusFilter === 'standalone') {
        items = items.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId));
      }

      if (this.bpSelectedCategory) {
        if (this.bpSelectedCategory === '__standalone__') {
          items = items.filter(i => !i.categoryId);
        } else {
          items = items.filter(i => i.categoryId === this.bpSelectedCategory);
        }
      }

      if (this.bpSelectedSeries) {
        if (this.bpSelectedSeries === '__standalone__') {
          items = items.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId));
        } else {
          items = items.filter(i => i.seriesId === this.bpSelectedSeries);
        }
      }

      if (this.bpSelectedTier) {
        const cleanTier = this.bpSelectedTier.toLowerCase();
        items = items.filter(i => (i.tier || '').toLowerCase() === cleanTier);
      }

      items.sort((a, b) => {
        const aBase = a.baseValue || 0;
        const bBase = b.baseValue || 0;
        const aWorth = a.marketWorth || 0;
        const bWorth = b.marketWorth || 0;
        const aQty = this.getItemQuantity(a, this.activeBackpackAccount);
        const bQty = this.getItemQuantity(b, this.activeBackpackAccount);
        const aTotalWorth = aQty * aWorth;
        const bTotalWorth = bQty * bWorth;

        switch (this.bpSortMethod) {
          case 'base-desc': return (bBase - aBase) || (bQty - aQty) || (a.name || '').localeCompare(b.name || '');
          case 'base-asc': return (aBase - bBase) || (bQty - aQty) || (a.name || '').localeCompare(b.name || '');
          case 'total-desc':
          case 'worth-desc': return ((bQty * bBase) - (aQty * aBase)) || (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          case 'qty-desc': return (bQty - aQty) || (bBase - aBase) || (a.name || '').localeCompare(b.name || '');
          case 'series-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return ((bQty * bBase) - (aQty * aBase)) || (bBase - aBase);
          }
          case 'category-order': {
            const aSer = this.state.getSeries(a.seriesId);
            const bSer = this.state.getSeries(b.seriesId);
            const aCatId = a.categoryId || (aSer ? aSer.categoryId : '');
            const bCatId = b.categoryId || (bSer ? bSer.categoryId : '');
            const aCat = this.state.getCategory(aCatId);
            const bCat = this.state.getCategory(bCatId);
            const aCatOrder = aCat ? (Number(aCat.order) || 9999) : 99999;
            const bCatOrder = bCat ? (Number(bCat.order) || 9999) : 99999;
            if (aCatOrder !== bCatOrder) return aCatOrder - bCatOrder;
            const aSerOrder = aSer ? (Number(aSer.displayOrder ?? aSer.order) || 9999) : 99999;
            const bSerOrder = bSer ? (Number(bSer.displayOrder ?? bSer.order) || 9999) : 99999;
            if (aSerOrder !== bSerOrder) return aSerOrder - bSerOrder;
            return ((bQty * bBase) - (aQty * aBase)) || (bBase - aBase);
          }
          case 'tier-order': {
            const aInfo = this.getTierInfo(a.tier);
            const bInfo = this.getTierInfo(b.tier);
            const aOrder = Number(aInfo.displayOrder ?? aInfo.rank) || 999;
            const bOrder = Number(bInfo.displayOrder ?? bInfo.rank) || 999;
            if (aOrder !== bOrder) return aOrder - bOrder;
            return (bQty * bBase) - (aQty * aBase);
          }
          case 'tier-rank': {
            const aRank = this.getTierInfo(a.tier).rank;
            const bRank = this.getTierInfo(b.tier).rank;
            if (aRank !== bRank) return aRank - bRank;
            return (bQty * bBase) - (aQty * aBase);
          }
          case 'name-asc': return (a.name || '').localeCompare(b.name || '');
          case 'recent-desc': return (b.updatedAt || 0) - (a.updatedAt || 0);
          default: return 0;
        }
      });

      return items;
    }

    createBackpackCard(item) {
      const tierInfo = this.getTierInfo(item.tier);
      const card = document.createElement('div');
      const qty = this.getItemQuantity(item, this.activeBackpackAccount);
      const isOwned = qty > 0;
      const isStarred = !!item.starred;
      const isExchangeNeeded = qty > 0 && !item.wallOwned;
      const ser = this.state.getSeries(item.seriesId);
      const isInSeries = (Array.isArray(item.tabs) ? item.tabs.includes('series') : false) && !!(item.categoryId && item.seriesId && this.state.getSeries(item.seriesId));
      const isWallOwned = !!item.wallOwned;

      const lbsQty = this.getItemQuantity(item, 'lbs');
      const cryptidQty = this.getItemQuantity(item, 'cryptid');
      const isShared = (lbsQty > 0 && cryptidQty > 0);
      const isLbsActive = (this.activeBackpackAccount === 'lbs');
      const otherAccount = isLbsActive ? 'cryptid' : 'lbs';
      const otherAccountLabel = isLbsActive ? 'Cryptid' : 'LBS';
      const otherQty = isLbsActive ? cryptidQty : lbsQty;

      card.dataset.id = item.id;
      card.className = `gift-card ${isOwned ? 'is-owned ' + tierInfo.cardClass : ''}`;
      if (isOwned) {
        card.style.setProperty('--card-tier-border', tierInfo.border);
        card.style.setProperty('--card-tier-glow', tierInfo.glow);
      }

      const baseVal = item.baseValue || 0;
      const marketVal = item.marketWorth !== undefined ? item.marketWorth : 0;

      // Clean card top: Badges ONLY
      card.innerHTML = `
        <div>
          <div class="card-badges-row">
            <div class="badges-group-left">
              <span class="tier-badge ${tierInfo.className}" style="color: ${tierInfo.color}; background-color: ${tierInfo.bg}; border-color: ${tierInfo.border};">${this.escapeHtml(tierInfo.name)}</span>
              ${ser ? `<span class="badge-series" title="Series: ${this.escapeHtml(ser.name)}">${this.escapeHtml(ser.name)}</span>` : '<span class="badge-series badge-standalone" title="Standalone / Non-Series Gift">Standalone</span>'}
              ${isShared ? `<span class="badge-shared" title="Present in both backpacks: LBS (${lbsQty}) · Cryptid (${cryptidQty})">✦ Shared</span>` : ''}
              ${isExchangeNeeded ? `<span class="marker-badge-exchange" title="In Backpack but missing on Wall">Exchange Needed</span>` : ''}
            </div>
          </div>

          <div class="card-body">
            <div class="gift-title" title="${this.escapeHtml(item.name)}">${this.escapeHtml(item.name)}</div>
            <div class="coin-valuation-box">
              <div class="coins-main tabular">${this.formatNumber(baseVal)} <span>Coins</span></div>
              <div class="coins-worth tabular">${this.formatNumber(marketVal)} <span>Worth</span></div>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-top">
            <div class="stepper-group">
              <button class="stepper-btn btn-minus" data-action="qty-minus" aria-label="Decrease quantity">&minus;</button>
              <span class="stepper-qty tabular">${qty}</span>
              <button class="stepper-btn btn-plus" data-action="qty-plus" aria-label="Increase quantity">&plus;</button>
            </div>

            <button type="button" class="star-mark-badge ${isStarred ? 'is-starred' : 'is-unstarred'}" data-action="toggle-star" style="margin-left: auto;" title="${isStarred ? 'Priority (Do Not Trade) - Click to unmark' : 'Click to mark as Priority (Do Not Trade)'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="${isStarred ? '#f59e0b' : 'none'}" stroke="${isStarred ? '#f59e0b' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>

            <div class="card-actions">
              <button class="action-icon-btn btn-edit" data-action="open-edit" title="Edit gift details" aria-label="Edit gift">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
            </div>
          </div>

          <div class="card-context-row">
            <button type="button" class="btn-context-tag tag-wall ${isWallOwned ? 'is-active' : ''}" data-action="toggle-wall" title="${isWallOwned ? 'On Wall (Click to remove)' : 'Add to Wall'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
              <span>${this.escapeHtml(this.state.getTagName('wall'))}</span>
            </button>
            <button type="button" class="btn-context-tag tag-series ${isInSeries ? 'is-active' : ''}" data-action="route-series" title="${isInSeries ? 'In Series Catalog (Click to view series)' : 'Series Catalog'}">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <span>${this.escapeHtml(this.state.getTagName('series'))}</span>
            </button>
            ${otherQty === 0 ? `
              <button type="button" class="btn-context-tag tag-copy-account" data-action="copy-to-account" data-target-account="${otherAccount}" title="Copy to ${otherAccountLabel}'s backpack">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span>Copy to ${otherAccountLabel}</span>
              </button>
            ` : `
              <span class="btn-context-tag tag-other-qty" title="${otherAccountLabel} has ${otherQty} in backpack">
                <span>${otherAccountLabel}: ${otherQty}</span>
              </span>
            `}
          </div>
        </div>
      `;

      return card;
    }

    // ------------------------------------------------------------------
    // TAB 4: PORTFOLIO & STUDIO
    // ------------------------------------------------------------------
    renderPortfolioTab() {
      const items = this.state.data.items;
      const series = this.state.data.series;

      // Tier Breakdown Table
      this.ledgerTierTableBody.innerHTML = '';
      const tierMap = new Map();
      const currentTiers = this.getDynamicTierList();

      currentTiers.forEach(t => {
        tierMap.set(t, { name: t, info: this.getTierInfo(t), count: 0, ownedUnits: 0, baseVal: 0, marketVal: 0 });
      });

      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        const entry = tierMap.get(info.name) || { name: info.name, info, count: 0, ownedUnits: 0, baseVal: 0, marketVal: 0 };
        entry.count++;
        const qty = this.getItemQuantity(i, this.activeBackpackAccount);
        entry.ownedUnits += qty;
        entry.baseVal += (Number(i.baseValue) || 0) * qty;
        entry.marketVal += (Number(i.marketWorth) || 0) * qty;
        tierMap.set(info.name, entry);
      });

      tierMap.forEach(tData => {
        const tr = document.createElement('tr');
        const diff = tData.marketVal - tData.baseVal;
        const spreadPct = tData.baseVal > 0 ? ((diff / tData.baseVal) * 100).toFixed(0) : '0';
        const spreadSign = diff > 0 ? '+' : '';

        tr.innerHTML = `
          <td><span class="tier-badge ${tData.info.className}" style="color: ${tData.info.color}; background-color: ${tData.info.bg}; border-color: ${tData.info.border};">${this.escapeHtml(tData.name)}</span></td>
          <td class="tabular">${tData.count}</td>
          <td class="tabular" style="font-weight: 700;">${this.formatNumber(tData.ownedUnits)}</td>
          <td class="tabular">${this.formatNumber(tData.baseVal)}</td>
          <td class="tabular" style="color: #38bdf8; font-weight: 700;">${this.formatNumber(tData.marketVal)}</td>
          <td class="tabular" style="color: ${diff >= 0 ? '#38bdf8' : 'var(--danger)'}; font-weight: 700;">
            ${spreadSign}${this.formatNumber(diff)} (${spreadSign}${spreadPct}%)
          </td>
        `;
        this.ledgerTierTableBody.appendChild(tr);
      });

      // Series Breakdown Table
      this.ledgerSeriesTableBody.innerHTML = '';
      const sortedSeries = [...series].sort((a, b) => a.name.localeCompare(b.name));
      sortedSeries.forEach(s => {
        const cat = this.state.getCategory(s.categoryId);
        const sItems = items.filter(i => i.seriesId === s.id);
        const total = sItems.length;
        const wallCollected = sItems.filter(i => !!i.wallOwned).length;
        const wallPct = total > 0 ? ((wallCollected / total) * 100).toFixed(0) : '0';
        const bpUnits = sItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount), 0);
        const bpBase = sItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.baseValue) || 0), 0);
        const bpMarket = sItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.marketWorth) || 0), 0);

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><span class="badge-series">${this.escapeHtml(s.name)}</span></td>
          <td style="color: var(--text-muted); font-size: 11px;">${cat ? this.escapeHtml(cat.name) : 'Standalone'}</td>
          <td class="tabular">${wallCollected} / ${total} (${wallPct}%)</td>
          <td class="tabular" style="font-weight: 700;">${this.formatNumber(bpUnits)}</td>
          <td class="tabular">${this.formatNumber(bpBase)}</td>
          <td class="tabular" style="color: #38bdf8; font-weight: 700;">${this.formatNumber(bpMarket)}</td>
        `;
        this.ledgerSeriesTableBody.appendChild(tr);
      });

      // Standalone / Non-Series Ledger Row
      const standaloneItems = items.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId));
      if (standaloneItems.length > 0) {
        const total = standaloneItems.length;
        const wallCollected = standaloneItems.filter(i => !!i.wallOwned).length;
        const wallPct = total > 0 ? ((wallCollected / total) * 100).toFixed(0) : '0';
        const bpUnits = standaloneItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount), 0);
        const bpBase = standaloneItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.baseValue) || 0), 0);
        const bpMarket = standaloneItems.reduce((sum, i) => sum + this.getItemQuantity(i, this.activeBackpackAccount) * (Number(i.marketWorth) || 0), 0);

        const tr = document.createElement('tr');
        tr.style.background = 'rgba(255, 255, 255, 0.02)';
        tr.innerHTML = `
          <td><span class="badge-series badge-standalone">Standalone / No Series</span></td>
          <td style="color: var(--text-muted); font-size: 11px;">Standalone Base</td>
          <td class="tabular">${wallCollected} / ${total} (${wallPct}%)</td>
          <td class="tabular" style="font-weight: 700;">${this.formatNumber(bpUnits)}</td>
          <td class="tabular">${this.formatNumber(bpBase)}</td>
          <td class="tabular" style="color: #38bdf8; font-weight: 700;">${this.formatNumber(bpMarket)}</td>
        `;
        this.ledgerSeriesTableBody.appendChild(tr);
      }

      this.renderCategoryManagerList();
      this.renderSeriesManagerList();
      this.renderTierManagerList();
      this.renderTagManagerList();
    }

    setupDraggableList(container, itemSelector, onReorder) {
      if (!container) return;
      const rows = Array.from(container.querySelectorAll(itemSelector));
      let draggedElement = null;
      let draggedIndex = -1;

      const clearIndicators = () => {
        rows.forEach(r => {
          r.classList.remove('is-dragging', 'drag-over-top', 'drag-over-bottom');
        });
      };

      rows.forEach((row, index) => {
        row.setAttribute('draggable', 'true');

        row.addEventListener('dragstart', (e) => {
          if (e.target.closest('button') || e.target.closest('input')) {
            e.preventDefault();
            return;
          }
          draggedElement = row;
          draggedIndex = index;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', String(index));
          setTimeout(() => row.classList.add('is-dragging'), 0);
        });

        row.addEventListener('dragover', (e) => {
          e.preventDefault();
          if (!draggedElement || draggedElement === row) return;
          e.dataTransfer.dropEffect = 'move';

          const rect = row.getBoundingClientRect();
          const midY = rect.top + rect.height / 2;
          if (e.clientY < midY) {
            row.classList.add('drag-over-top');
            row.classList.remove('drag-over-bottom');
          } else {
            row.classList.add('drag-over-bottom');
            row.classList.remove('drag-over-top');
          }
        });

        row.addEventListener('dragleave', () => {
          row.classList.remove('drag-over-top', 'drag-over-bottom');
        });

        row.addEventListener('drop', (e) => {
          e.preventDefault();
          if (!draggedElement || draggedElement === row) {
            clearIndicators();
            return;
          }
          const rect = row.getBoundingClientRect();
          const isBefore = e.clientY < (rect.top + rect.height / 2);
          clearIndicators();

          let targetIndex = rows.indexOf(row);
          if (!isBefore && draggedIndex < targetIndex) {
            // target remains targetIndex
          } else if (isBefore && draggedIndex > targetIndex) {
            // target remains targetIndex
          } else if (!isBefore && draggedIndex > targetIndex) {
            targetIndex = targetIndex + 1;
          } else if (isBefore && draggedIndex < targetIndex) {
            targetIndex = targetIndex - 1;
          }
          if (targetIndex >= 0 && targetIndex < rows.length && targetIndex !== draggedIndex) {
            onReorder(draggedIndex, targetIndex);
          }
        });

        row.addEventListener('dragend', () => {
          clearIndicators();
          draggedElement = null;
          draggedIndex = -1;
        });

        // Mobile touch drag handle support
        const handle = row.querySelector('.drag-handle');
        if (handle) {
          handle.addEventListener('click', (e) => e.stopPropagation());

          let touchStartTarget = null;
          let activeHoverRow = null;
          let isOverTop = false;

          handle.addEventListener('touchstart', (e) => {
            touchStartTarget = row;
            draggedIndex = index;
            row.classList.add('is-dragging');
          }, { passive: true });

          handle.addEventListener('touchmove', (e) => {
            if (!touchStartTarget) return;
            e.preventDefault();
            const touch = e.touches[0];
            touchStartTarget.style.pointerEvents = 'none';
            const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
            touchStartTarget.style.pointerEvents = '';
            const targetRow = elemBelow ? elemBelow.closest(itemSelector) : null;

            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));

            if (targetRow && targetRow !== touchStartTarget && container.contains(targetRow)) {
              activeHoverRow = targetRow;
              const rect = targetRow.getBoundingClientRect();
              isOverTop = touch.clientY < (rect.top + rect.height / 2);
              if (isOverTop) {
                targetRow.classList.add('drag-over-top');
              } else {
                targetRow.classList.add('drag-over-bottom');
              }
            } else {
              activeHoverRow = null;
            }
          }, { passive: false });

          const handleTouchEnd = () => {
            if (!touchStartTarget) return;
            touchStartTarget.style.pointerEvents = '';
            const from = draggedIndex;
            const hover = activeHoverRow;
            const before = isOverTop;

            touchStartTarget.classList.remove('is-dragging');
            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
            touchStartTarget = null;
            activeHoverRow = null;

            if (hover && hover !== rows[from]) {
              let targetIndex = rows.indexOf(hover);
              if (!before && from < targetIndex) {
                // target remains
              } else if (before && from > targetIndex) {
                // target remains
              } else if (!before && from > targetIndex) {
                targetIndex = targetIndex + 1;
              } else if (before && from < targetIndex) {
                targetIndex = targetIndex - 1;
              }
              if (targetIndex >= 0 && targetIndex < rows.length && targetIndex !== from) {
                onReorder(from, targetIndex);
              }
            }
          };

          handle.addEventListener('touchend', handleTouchEnd);
          handle.addEventListener('touchcancel', () => {
            if (touchStartTarget) {
              touchStartTarget.style.pointerEvents = '';
              touchStartTarget.classList.remove('is-dragging');
            }
            rows.forEach(r => r.classList.remove('drag-over-top', 'drag-over-bottom'));
            touchStartTarget = null;
            activeHoverRow = null;
          });
        }
      });
    }

    renderCategoryManagerList() {
      this.categoryManagerList.innerHTML = '';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      this.catTotalCount.textContent = cats.length;

      cats.forEach(c => {
        const count = this.state.data.series.filter(s => s.categoryId === c.id).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = c.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder category" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <div>
              <strong>${this.escapeHtml(c.name)}</strong>
              <span style="color:var(--text-muted); font-size: 11px;">(#${c.order || 1} &bull; ${count} series)</span>
              ${c.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(c.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-cat-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Category">Edit</button>
          </div>
        `;
        const editCatBtn = row.querySelector('.edit-cat-btn');
        if (editCatBtn) editCatBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openCategoryModal(c.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openCategoryModal(c.id));
        this.categoryManagerList.appendChild(row);
      });

      this.setupDraggableList(this.categoryManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...cats];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((c, i) => {
          const itemInState = this.state.data.categories.find(x => x.id === c.id);
          if (itemInState) itemInState.order = i + 1;
        });
        this.state.data.categories.sort((a, b) => (a.order || 0) - (b.order || 0));
        this.state.saveState();
        this.renderCategoryManagerList();
        this.updateSeriesCategoryDropdownFilter();
        this.updateWallCategoryDropdownFilter();
        this.updateBpCategoryDropdownFilter();
        this.renderAll();
        this.showToast('Category order updated');
      });
    }

    renderSeriesManagerList() {
      this.seriesManagerList.innerHTML = '';
      const allSers = [...this.state.data.series].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0) || a.name.localeCompare(b.name));
      const query = (this.seriesManagerSearchInput ? this.seriesManagerSearchInput.value.trim().toLowerCase() : '');

      if (this.seriesManagerClearSearchBtn) {
        this.seriesManagerClearSearchBtn.style.display = query ? 'block' : 'none';
      }

      const sers = query
        ? allSers.filter(s => {
            const cat = this.state.getCategory(s.categoryId);
            const catName = cat ? cat.name.toLowerCase() : '';
            return s.name.toLowerCase().includes(query) || (s.description && s.description.toLowerCase().includes(query)) || catName.includes(query);
          })
        : allSers;

      if (this.serTotalCount) {
        this.serTotalCount.textContent = query ? `${sers.length} / ${allSers.length}` : allSers.length;
      }

      if (sers.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.style.cssText = 'text-align: center; padding: 18px 8px; color: var(--text-muted); font-size: 11px;';
        emptyDiv.textContent = `No series matching "${query}"`;
        this.seriesManagerList.appendChild(emptyDiv);
        return;
      }

      sers.forEach(s => {
        const cat = this.state.getCategory(s.categoryId);
        const count = this.state.data.items.filter(i => i.seriesId === s.id).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = s.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="${query ? 'Reordering disabled while searching' : 'Drag to reorder series'}" aria-label="Drag handle" style="${query ? 'opacity: 0.35; cursor: not-allowed;' : ''}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <div>
              <strong style="color: #f8fafc;">${this.escapeHtml(s.name)}</strong>
              <span style="font-size:11px; color:var(--text-muted);">(#${s.displayOrder || 1} &bull; ${cat ? this.escapeHtml(cat.name) : 'Standalone'} &bull; ${count} gifts)</span>
              ${s.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(s.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-ser-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Series">Edit</button>
          </div>
        `;
        const editSerBtn = row.querySelector('.edit-ser-btn');
        if (editSerBtn) editSerBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openSeriesModal(s.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openSeriesModal(s.id));
        this.seriesManagerList.appendChild(row);
      });

      if (!query) {
        this.setupDraggableList(this.seriesManagerList, '.manager-row', (fromIdx, toIdx) => {
          const list = [...sers];
          const moved = list.splice(fromIdx, 1)[0];
          list.splice(toIdx, 0, moved);
          list.forEach((s, i) => {
            const itemInState = this.state.data.series.find(x => x.id === s.id);
            if (itemInState) itemInState.displayOrder = i + 1;
          });
          this.state.data.series.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
          this.state.saveState();
          this.renderSeriesManagerList();
          this.updateSeriesDropdownFilter();
          this.updateWallSeriesDropdownFilter();
          this.updateBpSeriesDropdownFilter();
          this.renderAll();
          this.showToast('Series order updated');
        });
      }
    }

    renderTierManagerList() {
      if (!this.tierManagerList) return;
      this.tierManagerList.innerHTML = '';
      const orderMap = { 'standard': 1, 'featured': 2, 'limited': 3, 'luxury': 4, 'collection': 5 };
      const tiers = [...(this.state.data.tiers || [])].sort((a, b) => {
        const aOrder = a.displayOrder ?? orderMap[(a.name || '').toLowerCase()] ?? 99;
        const bOrder = b.displayOrder ?? orderMap[(b.name || '').toLowerCase()] ?? 99;
        return aOrder - bOrder;
      });
      if (this.tierTotalCount) this.tierTotalCount.textContent = tiers.length;

      tiers.forEach(t => {
        const count = this.state.data.items.filter(i => (i.tier || '').toLowerCase() === t.name.toLowerCase()).length;
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.id = t.id;
        row.style.cursor = 'pointer';
        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder tier" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${t.color || '#e2e8f0'}; display: inline-block;"></span>
            <div>
              <strong>${this.escapeHtml(t.name)}</strong>
              <span style="color:var(--text-muted); font-size: 11px;">(#${t.displayOrder || 1} &bull; ${count} gifts)</span>
              ${t.description ? `<div style="font-size: 10.5px; color: var(--text-dim); margin-top: 2px;">${this.escapeHtml(t.description)}</div>` : ''}
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-tier-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Tier">Edit</button>
          </div>
        `;
        const editBtn = row.querySelector('.edit-tier-btn');
        if (editBtn) editBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openTierModal(t.id); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openTierModal(t.id));
        this.tierManagerList.appendChild(row);
      });

      this.setupDraggableList(this.tierManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...tiers];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((t, i) => {
          const itemInState = this.state.data.tiers.find(x => x.id === t.id);
          if (itemInState) itemInState.displayOrder = i + 1;
        });
        this.state.data.tiers.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        this.state.saveState();
        this.renderTierManagerList();
        this.renderPortfolioTab();
        this.updateSeriesTierDropdownFilter();
        this.updateWallTierDropdownFilter();
        this.updateBpTierDropdownFilter();
        this.renderSeriesTierPills();
        this.renderBpTierPills();
        this.renderWallTierPills();
        this.renderAll();
        this.showToast('Tier order updated');
      });
    }

    renderTagManagerList() {
      if (!this.tagManagerList) return;
      this.tagManagerList.innerHTML = '';
      const tags = this.state.getTags();
      if (this.tagTotalCount) this.tagTotalCount.textContent = tags.length;

      tags.forEach(t => {
        const row = document.createElement('div');
        row.className = 'manager-row';
        row.dataset.key = t.key;
        row.style.cursor = 'pointer';
        const iconSvg = TAG_ICONS[t.key] || '';
        const tagClass = t.key === 'backpack' ? 'tag-bp' : (t.key === 'series' ? 'tag-series' : 'tag-wall');

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="drag-handle" title="Drag to reorder tag" aria-label="Drag handle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="5" r="1.5"></circle>
                <circle cx="9" cy="12" r="1.5"></circle>
                <circle cx="9" cy="19" r="1.5"></circle>
                <circle cx="15" cy="5" r="1.5"></circle>
                <circle cx="15" cy="12" r="1.5"></circle>
                <circle cx="15" cy="19" r="1.5"></circle>
              </svg>
            </div>
            <span class="btn-context-tag is-active ${tagClass}" style="pointer-events: none; margin: 0; padding: 2px 8px; font-size: 11px;">
              ${iconSvg}
              <span>${this.escapeHtml(t.name)}</span>
            </span>
            <div>
              <span style="color:var(--text-muted); font-size: 11px;">(#${t.displayOrder || 1} &bull; ${t.color.toUpperCase()})</span>
            </div>
          </div>
          <div style="display:flex; gap:4px; align-items:center;">
            <button class="btn-secondary edit-tag-btn" style="padding: 2px 8px; font-size: 11px;" title="Edit Tag">Edit</button>
          </div>
        `;

        const editBtn = row.querySelector('.edit-tag-btn');
        if (editBtn) editBtn.addEventListener('click', (e) => { e.stopPropagation(); this.openTagModal(t.key); });
        const handle = row.querySelector('.drag-handle');
        if (handle) handle.addEventListener('click', (e) => e.stopPropagation());
        row.addEventListener('click', () => this.openTagModal(t.key));
        this.tagManagerList.appendChild(row);
      });

      this.setupDraggableList(this.tagManagerList, '.manager-row', (fromIdx, toIdx) => {
        const list = [...tags];
        const moved = list.splice(fromIdx, 1)[0];
        list.splice(toIdx, 0, moved);
        list.forEach((t, i) => {
          this.state.updateTagOrder(t.key, i + 1);
        });
        this.state.saveState();
        this.renderTagManagerList();
        this.renderAll();
        this.showToast('Tag order updated');
      });
    }

    // ------------------------------------------------------------------
    // DYNAMIC FILTER ADAPTATION FOR ACTIVE TAB
    // ------------------------------------------------------------------
    // Series Master Tab Filters
    updateSeriesCategoryDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterCategory.value;
      this.seriesFilterCategory.innerHTML = '<option value="">All Categories</option>';

      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = seriesItems.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.seriesFilterCategory.appendChild(opt);
        }
      });
      this.seriesFilterCategory.value = currentVal;
    }

    updateSeriesDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterSeries.value;
      this.seriesFilterSeries.innerHTML = '<option value="">All Series</option>';

      this.seriesFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.seriesSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.seriesSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = seriesItems.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.seriesFilterSeries.appendChild(opt);
        }
      });

      const exists = seriesList.some(s => s.id === currentVal);
      if (exists) {
        this.seriesFilterSeries.value = currentVal;
        this.seriesSelectedSeries = currentVal;
      } else {
        this.seriesFilterSeries.value = '';
        this.seriesSelectedSeries = '';
      }
    }

    getDynamicTierList() {
      const orderMap = { 'standard': 1, 'featured': 2, 'limited': 3, 'luxury': 4, 'collection': 5 };
      if (this.state.data.tiers && this.state.data.tiers.length) {
        return [...this.state.data.tiers].sort((a, b) => {
          const aOrder = a.displayOrder ?? orderMap[(a.name || '').toLowerCase()] ?? 99;
          const bOrder = b.displayOrder ?? orderMap[(b.name || '').toLowerCase()] ?? 99;
          return aOrder - bOrder;
        }).map(t => t.name);
      }
      return ['Standard', 'Featured', 'Limited', 'Luxury', 'Collection'];
    }

    updateSeriesTierDropdownFilter(seriesItems) {
      if (!seriesItems) seriesItems = this.getSeriesCatalogItems();
      const currentVal = this.seriesFilterTier.value;
      this.seriesFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = seriesItems.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.seriesFilterTier.appendChild(opt);
      });
      this.seriesFilterTier.value = currentVal;
    }

    renderSeriesTierPills(items) {
      if (!this.seriesTierPills) return;
      this.seriesTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.seriesSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${items.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.seriesSelectedTier = '';
        this.seriesFilterTier.value = '';
        this.syncSeriesTierPills();
        this.seriesRenderedCount = BATCH_SIZE;
        this.renderSeriesTab();
      });
      this.seriesTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.seriesSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.style.setProperty('--chip-tier-border', info.border);
        btn.style.setProperty('--chip-tier-color', info.color);
        btn.style.setProperty('--chip-tier-bg', info.bg);
        btn.style.setProperty('--chip-tier-glow', info.glow);
        btn.innerHTML = `${this.escapeHtml(tierName)} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.seriesSelectedTier = (this.seriesSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.seriesFilterTier.value = this.seriesSelectedTier;
          this.syncSeriesTierPills();
          this.seriesRenderedCount = BATCH_SIZE;
          this.renderSeriesTab();
        });
        this.seriesTierPills.appendChild(btn);
      });
    }

    syncSeriesTierPills() {
      if (!this.seriesTierPills) return;
      this.seriesTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.seriesSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // Wall Tab Dynamic Filters (Adapted to collected items only)
    updateWallCategoryDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterCategory.value;
      this.wallFilterCategory.innerHTML = '<option value="">All Collected Categories</option>';

      const standaloneCount = collectedGifts.filter(i => !i.categoryId).length;
      if (standaloneCount > 0) {
        const stOpt = document.createElement('option');
        stOpt.value = '__standalone__';
        stOpt.textContent = `Standalone Base (${standaloneCount})`;
        this.wallFilterCategory.appendChild(stOpt);
      }

      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = collectedGifts.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.wallFilterCategory.appendChild(opt);
        }
      });
      this.wallFilterCategory.value = currentVal;
    }

    updateWallSeriesDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterSeries.value;
      this.wallFilterSeries.innerHTML = '<option value="">All Collected Series</option>';

      if (this.wallSelectedCategory === '__standalone__') {
        this.wallFilterSeries.disabled = true;
        this.wallFilterSeries.value = '';
        this.wallSelectedSeries = '';
        return;
      }

      this.wallFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.wallSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.wallSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = collectedGifts.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.wallFilterSeries.appendChild(opt);
        }
      });

      const standaloneCount = collectedGifts.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId)).length;
      if (standaloneCount > 0 || !this.wallSelectedCategory) {
        const opt = document.createElement('option');
        opt.value = '__standalone__';
        opt.textContent = `Standalone / No Series (${standaloneCount})`;
        this.wallFilterSeries.appendChild(opt);
      }

      if (currentVal === '__standalone__') {
        this.wallFilterSeries.value = '__standalone__';
        this.wallSelectedSeries = '__standalone__';
      } else {
        const exists = seriesList.some(s => s.id === currentVal);
        if (exists) {
          this.wallFilterSeries.value = currentVal;
          this.wallSelectedSeries = currentVal;
        } else {
          this.wallFilterSeries.value = '';
          this.wallSelectedSeries = '';
        }
      }
    }

    updateWallTierDropdownFilter(collectedGifts) {
      const currentVal = this.wallFilterTier.value;
      this.wallFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = collectedGifts.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.wallFilterTier.appendChild(opt);
      });
      this.wallFilterTier.value = currentVal;
    }

    renderWallTierPills(collectedGifts) {
      if (!this.wallTierPills) return;
      this.wallTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      collectedGifts.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.wallSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${collectedGifts.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.wallSelectedTier = '';
        this.wallFilterTier.value = '';
        this.syncWallTierPills();
        this.wallRenderedCount = BATCH_SIZE;
        this.renderWallTab();
      });
      this.wallTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.wallSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.style.setProperty('--chip-tier-border', info.border);
        btn.style.setProperty('--chip-tier-color', info.color);
        btn.style.setProperty('--chip-tier-bg', info.bg);
        btn.style.setProperty('--chip-tier-glow', info.glow);
        btn.innerHTML = `${this.escapeHtml(tierName)} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.wallSelectedTier = (this.wallSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.wallFilterTier.value = this.wallSelectedTier;
          this.syncWallTierPills();
          this.wallRenderedCount = BATCH_SIZE;
          this.renderWallTab();
        });
        this.wallTierPills.appendChild(btn);
      });
    }

    syncWallTierPills() {
      if (!this.wallTierPills) return;
      this.wallTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.wallSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // Backpack Dropdowns
    updateBpCategoryDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterCategory.value;
      this.bpFilterCategory.innerHTML = '<option value="">All Categories</option>';
      const standaloneCount = bpItems.filter(i => !i.categoryId).length;
      if (standaloneCount > 0) {
        const stOpt = document.createElement('option');
        stOpt.value = '__standalone__';
        stOpt.textContent = `Standalone Base (${standaloneCount})`;
        this.bpFilterCategory.appendChild(stOpt);
      }
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const count = bpItems.filter(i => i.categoryId === c.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = c.id;
          opt.textContent = `${c.name} (${count})`;
          this.bpFilterCategory.appendChild(opt);
        }
      });
      this.bpFilterCategory.value = currentVal;
    }

    updateBpSeriesDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterSeries.value;
      this.bpFilterSeries.innerHTML = '<option value="">All Series</option>';

      if (this.bpSelectedCategory === '__standalone__') {
        this.bpFilterSeries.disabled = true;
        this.bpFilterSeries.value = '';
        this.bpSelectedSeries = '';
        return;
      }

      this.bpFilterSeries.disabled = false;
      let seriesList = [...this.state.data.series];
      if (this.bpSelectedCategory) {
        seriesList = seriesList.filter(s => s.categoryId === this.bpSelectedCategory);
      }
      seriesList.sort((a, b) => a.name.localeCompare(b.name));
      seriesList.forEach(s => {
        const count = bpItems.filter(i => i.seriesId === s.id).length;
        if (count > 0) {
          const opt = document.createElement('option');
          opt.value = s.id;
          opt.textContent = `${s.name} (${count})`;
          this.bpFilterSeries.appendChild(opt);
        }
      });

      const standaloneCount = bpItems.filter(i => !i.seriesId || !this.state.getSeries(i.seriesId)).length;
      if (standaloneCount > 0 || !this.bpSelectedCategory) {
        const opt = document.createElement('option');
        opt.value = '__standalone__';
        opt.textContent = `Standalone / No Series (${standaloneCount})`;
        this.bpFilterSeries.appendChild(opt);
      }

      if (currentVal === '__standalone__') {
        this.bpFilterSeries.value = '__standalone__';
        this.bpSelectedSeries = '__standalone__';
      } else {
        const exists = seriesList.some(s => s.id === currentVal);
        if (exists) {
          this.bpFilterSeries.value = currentVal;
          this.bpSelectedSeries = currentVal;
        } else {
          this.bpFilterSeries.value = '';
          this.bpSelectedSeries = '';
        }
      }
    }

    updateBpTierDropdownFilter(bpItems) {
      if (!bpItems) bpItems = this.getBackpackCatalogItems();
      const currentVal = this.bpFilterTier.value;
      this.bpFilterTier.innerHTML = '<option value="">All Tiers</option>';
      this.getDynamicTierList().forEach(t => {
        const count = bpItems.filter(i => (i.tier || '').toLowerCase() === t.toLowerCase()).length;
        const opt = document.createElement('option');
        opt.value = t;
        opt.textContent = `${t} (${count})`;
        this.bpFilterTier.appendChild(opt);
      });
      this.bpFilterTier.value = currentVal;
    }

    renderBpTierPills(items) {
      if (!this.bpTierPills) return;
      this.bpTierPills.innerHTML = '';
      const counts = new Map();
      const tierList = this.getDynamicTierList();
      tierList.forEach(t => counts.set(t, 0));
      items.forEach(i => {
        const info = this.getTierInfo(i.tier);
        counts.set(info.name, (counts.get(info.name) || 0) + 1);
      });

      const allBtn = document.createElement('button');
      allBtn.className = `filter-chip ${!this.bpSelectedTier ? 'active' : ''}`;
      allBtn.dataset.tier = '';
      allBtn.innerHTML = `All Tiers <span class="chip-badge">${items.length}</span>`;
      allBtn.addEventListener('click', () => {
        this.bpSelectedTier = '';
        this.bpFilterTier.value = '';
        this.syncBpTierPills();
        this.bpRenderedCount = BATCH_SIZE;
        this.renderBackpackTab();
      });
      this.bpTierPills.appendChild(allBtn);

      tierList.forEach(tierName => {
        const info = this.getTierInfo(tierName);
        const count = counts.get(tierName) || 0;
        const btn = document.createElement('button');
        const isActive = (this.bpSelectedTier || '').toLowerCase() === tierName.toLowerCase();
        btn.className = `filter-chip tier-chip ${info.chipClass} ${isActive ? 'active' : ''}`;
        btn.dataset.tier = tierName;
        btn.style.setProperty('--chip-tier-border', info.border);
        btn.style.setProperty('--chip-tier-color', info.color);
        btn.style.setProperty('--chip-tier-bg', info.bg);
        btn.style.setProperty('--chip-tier-glow', info.glow);
        btn.innerHTML = `${this.escapeHtml(tierName)} <span class="chip-badge">${count}</span>`;
        btn.addEventListener('click', () => {
          this.bpSelectedTier = (this.bpSelectedTier.toLowerCase() === tierName.toLowerCase()) ? '' : tierName;
          this.bpFilterTier.value = this.bpSelectedTier;
          this.syncBpTierPills();
          this.bpRenderedCount = BATCH_SIZE;
          this.renderBackpackTab();
        });
        this.bpTierPills.appendChild(btn);
      });
    }

    syncBpTierPills() {
      if (!this.bpTierPills) return;
      this.bpTierPills.querySelectorAll('.filter-chip').forEach(btn => {
        const t = btn.dataset.tier || '';
        const isActive = (this.bpSelectedTier || '').toLowerCase() === t.toLowerCase();
        btn.classList.toggle('active', isActive);
      });
    }

    // ------------------------------------------------------------------
    // TIER INFO LOOKUP
    // ------------------------------------------------------------------
    getTierInfo(tier) {
      const clean = (tier || '').trim().toLowerCase();
      if (this.state && this.state.data && Array.isArray(this.state.data.tiers)) {
        const found = this.state.data.tiers.find(t =>
          (t.name && t.name.toLowerCase() === clean) ||
          (t.id && t.id.toLowerCase() === clean)
        );
        if (found) {
          const color = found.color || '#e2e8f0';
          const rgb = this.state.hexToRgb ? this.state.hexToRgb(color) : '226, 232, 240';
          const slug = found.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
          return {
            name: found.name,
            className: `tier-${slug}`,
            cardClass: `tier-card-${slug}`,
            chipClass: `tier-chip-${slug}`,
            color,
            bg: found.bg || `rgba(${rgb}, 0.16)`,
            border: found.border || `rgba(${rgb}, 0.35)`,
            glow: `0 0 16px rgba(${rgb}, 0.20)`,
            rank: Number(found.rank) || 10,
            displayOrder: Number(found.displayOrder ?? found.order) || (Number(found.rank) || 10)
          };
        }
      }

      // Default tier fallbacks (strict v1.0.0 Morphe palette)
      if (clean.includes('collection')) return { name: 'Collection', className: 'tier-collection', cardClass: 'tier-card-collection', chipClass: 'tier-chip-collection', color: '#ef4444', bg: '#450a0a', border: 'rgba(239, 68, 68, 0.35)', glow: '0 0 16px rgba(239, 68, 68, 0.16)', rank: 100, displayOrder: 5 };
      if (clean.includes('luxury')) return { name: 'Luxury', className: 'tier-luxury', cardClass: 'tier-card-luxury', chipClass: 'tier-chip-luxury', color: '#facc15', bg: '#422006', border: 'rgba(250, 204, 21, 0.35)', glow: '0 0 16px rgba(250, 204, 21, 0.16)', rank: 80, displayOrder: 4 };
      if (clean.includes('limited')) return { name: 'Limited', className: 'tier-limited', cardClass: 'tier-card-limited', chipClass: 'tier-chip-limited', color: '#c084fc', bg: '#3b0764', border: 'rgba(192, 132, 252, 0.35)', glow: '0 0 16px rgba(192, 132, 252, 0.16)', rank: 60, displayOrder: 3 };
      if (clean.includes('featured')) return { name: 'Featured', className: 'tier-featured', cardClass: 'tier-card-featured', chipClass: 'tier-chip-featured', color: '#38bdf8', bg: '#0c4a6e', border: 'rgba(56, 189, 248, 0.35)', glow: '0 0 16px rgba(56, 189, 248, 0.16)', rank: 40, displayOrder: 2 };
      return { name: 'Standard', className: 'tier-standard', cardClass: 'tier-card-standard', chipClass: 'tier-chip-standard', color: '#e2e8f0', bg: '#1e293b', border: 'rgba(226, 232, 240, 0.25)', glow: '0 0 14px rgba(226, 232, 240, 0.08)', rank: 10, displayOrder: 1 };
    }

    // ------------------------------------------------------------------
    // BATCH SCROLL OBSERVERS (60FPS SCROLLING)
    // ------------------------------------------------------------------
    setupBatchObservers() {
      if ('IntersectionObserver' in window) {
        const seriesObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-series') {
            this.appendSeriesBatch();
          }
        }, { rootMargin: '200px' });
        if (this.seriesScrollSentinel) seriesObserver.observe(this.seriesScrollSentinel);

        const wallObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-wall') {
            this.appendWallBatch();
          }
        }, { rootMargin: '200px' });
        if (this.wallScrollSentinel) wallObserver.observe(this.wallScrollSentinel);

        const bpObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && this.currentTab === 'tab-backpack') {
            this.appendBpBatch();
          }
        }, { rootMargin: '200px' });
        if (this.bpScrollSentinel) bpObserver.observe(this.bpScrollSentinel);
      }
    }

    // ------------------------------------------------------------------
    // MODALS: ITEM / CATEGORY / SERIES (MANAGES CATEGORY & SERIES EXCLUSIVELY)
    // ------------------------------------------------------------------
    populateCategorySelects() {
      this.serModalCategory.innerHTML = '<option value="">Select Category</option>';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        this.serModalCategory.appendChild(opt);
      });
    }

    populateModalCategorySelect(selectedCatId = '') {
      this.editItemCategory.innerHTML = '<option value="">None / Standalone Base</option>';
      const cats = [...this.state.data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        this.editItemCategory.appendChild(opt);
      });
      this.editItemCategory.value = selectedCatId || '';
      this.populateModalSeriesSelect(selectedCatId, '');
    }

    populateModalSeriesSelect(categoryId = '', selectedSeriesId = '') {
      if (!categoryId) {
        this.editItemSeries.innerHTML = '<option value="">None / Standalone</option>';
        this.editItemSeries.disabled = true;
        this.editItemSeries.value = '';
        return;
      }

      this.editItemSeries.disabled = false;
      this.editItemSeries.innerHTML = '<option value="">Select Series</option>';
      const sers = this.state.data.series.filter(s => s.categoryId === categoryId).sort((a, b) => a.name.localeCompare(b.name));
      sers.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        this.editItemSeries.appendChild(opt);
      });
      this.editItemSeries.value = selectedSeriesId || '';
    }

    getModalSelectedTabs() {
      if (!this.editItemTabsPresets) return ['backpack'];
      const tabs = [];
      this.editItemTabsPresets.querySelectorAll('.tab-preset-btn.active').forEach(btn => {
        if (btn.dataset.tabName) tabs.push(btn.dataset.tabName);
      });
      return tabs;
    }

    setModalSelectedTabs(tabs = []) {
      if (!this.editItemTabsPresets) return;
      const clean = Array.isArray(tabs) ? tabs.map(t => String(t).toLowerCase().trim()) : [];
      const tagList = this.state.getTags();
      this.editItemTabsPresets.innerHTML = tagList.map(t => {
        const isActive = clean.includes(t.key);
        return `<button type="button" class="preset-btn tab-preset-btn ${isActive ? 'active' : ''}" data-tab-name="${t.key}">${this.escapeHtml(t.name)}</button>`;
      }).join('');
    }

    openNewItemModal() {
      this.itemModalTitle.textContent = 'Add New Gift';
      this.editItemId.value = '';
      if (this.modalDeleteBtn) this.modalDeleteBtn.style.display = 'none';
      if (this.editItemDuplicateAlert) this.editItemDuplicateAlert.style.display = 'none';
      if (this.editItemSyncMatchingGroup) this.editItemSyncMatchingGroup.style.display = 'none';
      if (this.editItemSyncMatching) this.editItemSyncMatching.checked = false;
      this.populateModalCategorySelect('');
      this.editItemName.value = '';
      this.editItemBaseValue.value = '';
      this.editItemMarketWorth.value = '';
      if (this.editItemMarketWorth) this.editItemMarketWorth.dataset.autoFilled = 'true';
      if (this.editItemQuantityLbs) this.editItemQuantityLbs.value = this.activeBackpackAccount === 'lbs' ? '1' : '';
      if (this.editItemQuantityCryptid) this.editItemQuantityCryptid.value = this.activeBackpackAccount === 'cryptid' ? '1' : '';
      if (this.editItemQuantity) this.editItemQuantity.value = '1';
      this.editItemStarred.checked = false;
      if (this.editItemDistinctVariant) this.editItemDistinctVariant.checked = false;
      this.editItemTier.value = 'Standard';
      this.populateModalTierPresets('Standard');

      let defaultTabs = ['backpack'];
      if (this.currentTab === 'tab-series') defaultTabs = ['series'];
      else if (this.currentTab === 'tab-wall') defaultTabs = ['wall'];
      this.setModalSelectedTabs(defaultTabs);

      this.openModal('itemModal');
      setTimeout(() => this.editItemName.focus(), 100);
    }

    openEditItemModal(itemId) {
      const item = this.state.getItem(itemId);
      if (!item) return;

      this.itemModalTitle.textContent = 'Edit Gift';
      this.editItemId.value = item.id;
      if (this.modalDeleteBtn) this.modalDeleteBtn.style.display = 'inline-flex';
      if (this.editItemDuplicateAlert) this.editItemDuplicateAlert.style.display = 'none';

      // Check for matching gifts in other series to offer cross-series sync
      const normName = (item.name || '').trim().toLowerCase();
      const matchingCrossSeries = this.state.data.items.filter(i => 
        i.id !== item.id && 
        (i.name || '').trim().toLowerCase() === normName
      );
      if (matchingCrossSeries.length > 0 && this.editItemSyncMatchingGroup) {
        this.editItemSyncMatchingGroup.style.display = 'block';
        this.editItemSyncMatching.checked = false;
        if (this.editItemSyncMatchingLabel) {
          this.editItemSyncMatchingLabel.textContent = `Sync changes across all matching series (${matchingCrossSeries.length} other occurrences)`;
        }
        if (this.editItemSyncMatchingSubtext) {
          const sNames = matchingCrossSeries.map(m => {
            const s = this.state.getSeries(m.seriesId);
            return s ? s.name : 'Standalone';
          });
          const previewNames = sNames.slice(0, 3).join(', ') + (sNames.length > 3 ? ` +${sNames.length - 3} more` : '');
          this.editItemSyncMatchingSubtext.textContent = `Applies Name, Tier, and Market Worth to: ${previewNames}. Checklists and wall ownership remain independent.`;
        }
      } else if (this.editItemSyncMatchingGroup) {
        this.editItemSyncMatchingGroup.style.display = 'none';
        this.editItemSyncMatching.checked = false;
      }

      this.populateModalCategorySelect(item.categoryId || '');
      this.populateModalSeriesSelect(item.categoryId || '', item.seriesId || '');
      this.editItemName.value = item.name || '';
      this.editItemBaseValue.value = item.baseValue !== undefined ? item.baseValue : 0;
      this.editItemMarketWorth.value = (item.marketWorth !== undefined && Number(item.marketWorth) > 0) ? item.marketWorth : (item.baseValue !== undefined ? item.baseValue : '');
      if (this.editItemMarketWorth) this.editItemMarketWorth.dataset.autoFilled = 'false';

      const lbsQty = this.getItemQuantity(item, 'lbs');
      const cryptidQty = this.getItemQuantity(item, 'cryptid');
      if (this.editItemQuantityLbs) this.editItemQuantityLbs.value = lbsQty > 0 ? lbsQty : '';
      if (this.editItemQuantityCryptid) this.editItemQuantityCryptid.value = cryptidQty > 0 ? cryptidQty : '';
      if (this.editItemQuantity) this.editItemQuantity.value = (item.quantity !== undefined && Number(item.quantity) > 0) ? item.quantity : '';

      this.editItemStarred.checked = !!item.starred;
      if (this.editItemDistinctVariant) this.editItemDistinctVariant.checked = !!item.isDistinctVariant;

      let itemTabs = Array.isArray(item.tabs) ? [...item.tabs] : [];
      if (item.categoryId && item.seriesId && !itemTabs.includes('series')) {
        itemTabs.push('series');
      }
      if (item.wallOwned && !itemTabs.includes('wall')) {
        itemTabs.push('wall');
      }
      const hasAnyBp = lbsQty > 0 || cryptidQty > 0 || (Number(item.quantity) || 0) > 0;
      if (hasAnyBp && !itemTabs.includes('backpack')) {
        itemTabs.push('backpack');
      }
      this.setModalSelectedTabs(itemTabs);

      const t = item.tier || 'Standard';
      this.editItemTier.value = t;
      this.populateModalTierPresets(t);
      this.openModal('itemModal');
    }

    populateModalTierPresets(selectedTier) {
      if (!this.editItemTierPresets) return;
      this.editItemTierPresets.innerHTML = '';
      const tierList = this.getDynamicTierList();
      const cleanSelected = (selectedTier || 'Standard').toLowerCase().trim();

      tierList.forEach(tName => {
        const info = this.getTierInfo(tName);
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `preset-btn tier-preset-btn ${tName.toLowerCase() === cleanSelected ? 'active' : ''}`;
        btn.dataset.tier = tName;
        btn.textContent = tName;
        btn.style.color = info.color;
        btn.addEventListener('click', () => {
          this.editItemTier.value = tName;
          this.setModalTierPresets(tName);
        });
        this.editItemTierPresets.appendChild(btn);
      });
    }

    setModalTierPresets(tier) {
      const clean = (tier || 'Standard').trim().toLowerCase();
      this.editItemTierPresets.querySelectorAll('.tier-preset-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tier.toLowerCase() === clean);
      });
    }

    updateTierPreviewBadge(badgeEl, tier) {
      if (!badgeEl) return;
      const info = this.getTierInfo(tier);
      badgeEl.className = `tier-badge ${info.className}`;
      badgeEl.textContent = info.name;
      badgeEl.style.color = info.color;
      badgeEl.style.backgroundColor = info.bg;
      badgeEl.style.borderColor = info.border;
    }

    handleSaveItem() {
      const id = this.editItemId.value;
      const existingItem = id ? this.state.getItem(id) : null;

      const rawName = this.editItemName.value.trim();
      const name = this.toSmartTitleCase(rawName);
      const rawBase = this.editItemBaseValue.value.trim();
      const rawMarket = this.editItemMarketWorth.value.trim();
      const rawQtyLbs = this.editItemQuantityLbs ? this.editItemQuantityLbs.value.trim() : '';
      const rawQtyCryptid = this.editItemQuantityCryptid ? this.editItemQuantityCryptid.value.trim() : '';
      const rawQty = this.editItemQuantity ? this.editItemQuantity.value.trim() : '';
      const categoryId = this.editItemCategory.value.trim();
      const seriesId = this.editItemSeries.value.trim();
      const selectedTabs = this.getModalSelectedTabs();

      // Strict validation checks
      if (!name) {
        this.showToast('Validation Error: Gift Name is required.');
        this.editItemName.focus();
        return;
      }

      if (rawBase === '' || isNaN(Number(rawBase)) || Number(rawBase) <= 0) {
        this.showToast('Validation Error: Base Coins must be greater than 0.');
        this.editItemBaseValue.focus();
        return;
      }
      const baseCoins = Math.round(Number(rawBase));

      let marketCoins = baseCoins;
      if (rawMarket !== '' && !isNaN(Number(rawMarket)) && Number(rawMarket) > 0) {
        marketCoins = Math.round(Number(rawMarket));
      }

      const effectiveTabs = Array.isArray(selectedTabs) ? [...selectedTabs] : [];
      if (categoryId && seriesId && this.state.getSeries(seriesId) && !effectiveTabs.includes('series')) {
        effectiveTabs.push('series');
      }

      if (!categoryId && effectiveTabs.length === 0) {
        this.showToast('Validation Error: Standalone gifts must be assigned to Backpack or Wall.');
        return;
      }

      if (effectiveTabs.includes('series')) {
        if (!categoryId || !seriesId || !this.state.getSeries(seriesId)) {
          this.showToast('Validation Error: Series tab requires a valid Category and Series.');
          this.editItemCategory.focus();
          return;
        }
      }

      let qtyLbs = (rawQtyLbs !== '' && !isNaN(Number(rawQtyLbs))) ? Math.max(0, Math.floor(Number(rawQtyLbs))) : 0;
      let qtyCryptid = (rawQtyCryptid !== '' && !isNaN(Number(rawQtyCryptid))) ? Math.max(0, Math.floor(Number(rawQtyCryptid))) : 0;

      if (rawQtyLbs === '' && rawQtyCryptid === '' && rawQty !== '' && !isNaN(Number(rawQty))) {
        if (this.activeBackpackAccount === 'cryptid') {
          qtyCryptid = Math.max(0, Math.floor(Number(rawQty)));
        } else {
          qtyLbs = Math.max(0, Math.floor(Number(rawQty)));
        }
      }

      if (effectiveTabs.includes('backpack')) {
        if (qtyLbs <= 0 && qtyCryptid <= 0) {
          if (this.activeBackpackAccount === 'cryptid') {
            qtyCryptid = 1;
            if (this.editItemQuantityCryptid) this.editItemQuantityCryptid.value = '1';
          } else {
            qtyLbs = 1;
            if (this.editItemQuantityLbs) this.editItemQuantityLbs.value = '1';
          }
        }
      } else {
        qtyLbs = 0;
        qtyCryptid = 0;
      }

      const isWallOwned = effectiveTabs.includes('wall');

      const itemData = {
        categoryId,
        seriesId,
        name,
        baseValue: baseCoins,
        marketWorth: marketCoins,
        quantity: qtyLbs,
        backpacks: { lbs: qtyLbs, cryptid: qtyCryptid },
        wallOwned: isWallOwned,
        starred: this.editItemStarred.checked,
        isDistinctVariant: this.editItemDistinctVariant ? this.editItemDistinctVariant.checked : (existingItem ? !!existingItem.isDistinctVariant : false),
        tier: this.editItemTier.value.trim() || 'Standard',
        tabs: effectiveTabs,
        notes: existingItem ? (existingItem.notes || '') : ''
      };

      // Smart Duplicate Check Scoped to Same Series
      const items = this.state.data.items || [];
      const duplicateMatch = items.find(i => 
        i.id !== id && 
        (i.seriesId || '') === seriesId && 
        (i.name || '').trim().toLowerCase() === name.toLowerCase() &&
        !i.isDistinctVariant &&
        !itemData.isDistinctVariant
      );

      if (duplicateMatch) {
        if (duplicateMatch.baseValue === baseCoins) {
          // Exact duplicate in same series with matching coins: prompt to merge stock
          const activeMergeQty = (this.activeBackpackAccount === 'cryptid') ? qtyCryptid : qtyLbs;
          this.confirmAction(
            'Duplicate Gift Detected',
            `A gift named "${duplicateMatch.name}" with ${baseCoins} coins already exists in this series.

Would you like to merge stock (${activeMergeQty} units) and collection status into the existing gift instead of creating a duplicate?`,
            () => {
              const scrollY = window.scrollY;
              const dupLbs = this.getItemQuantity(duplicateMatch, 'lbs');
              const dupCryptid = this.getItemQuantity(duplicateMatch, 'cryptid');
              const mergedBackpacks = {
                lbs: dupLbs + qtyLbs,
                cryptid: dupCryptid + qtyCryptid
              };
              const mergedQty = mergedBackpacks.lbs;
              const mergedWall = duplicateMatch.wallOwned || isWallOwned;
              const mergedStarred = duplicateMatch.starred || this.editItemStarred.checked;
              const mergedTabs = Array.isArray(duplicateMatch.tabs) ? [...duplicateMatch.tabs] : [];
              if (mergedWall && !mergedTabs.includes('wall')) mergedTabs.push('wall');
              if ((mergedBackpacks.lbs > 0 || mergedBackpacks.cryptid > 0) && !mergedTabs.includes('backpack')) mergedTabs.push('backpack');

              this.state.updateItem(duplicateMatch.id, {
                quantity: mergedQty,
                backpacks: mergedBackpacks,
                wallOwned: mergedWall,
                starred: mergedStarred,
                tabs: mergedTabs
              });
              this.closeModal('itemModal');
              this.showToast(`Merged stock into existing "${duplicateMatch.name}"`);
              window.scrollTo({ top: scrollY });
            }
          );
          return;
        } else {
          // Same name but different coin values: prompt as price variant
          this.confirmAction(
            'Price Variant Detected',
            `A gift named "${duplicateMatch.name}" exists in this series with ${duplicateMatch.baseValue} coins.

Do you want to save "${name}" as a distinct coin variation with ${baseCoins} coins?`,
            () => {
              const scrollY = window.scrollY;
              itemData.isDistinctVariant = true;
              this.state.updateItem(duplicateMatch.id, { isDistinctVariant: true });
              if (id) {
                this.state.updateItem(id, itemData);
                this.showToast(`Updated "${itemData.name}" (${itemData.baseValue} coins)`);
              } else {
                this.state.addItem(itemData);
                this.showToast(`Added variant "${itemData.name}" (${itemData.baseValue} coins)`);
              }
              this.closeModal('itemModal');
              window.scrollTo({ top: scrollY });
            }
          );
          return;
        }
      }

      if (id) {
        // Universal confirmation for saving edits to an existing gift
        const shouldSync = !!(this.editItemSyncMatching && this.editItemSyncMatching.checked);
        this.confirmAction(
          'Confirm Save Changes',
          `Are you sure you want to save changes to "${itemData.name}"?${shouldSync ? ' (Will also sync Name, Tier, and Market Worth across matching series).' : ''}`,
          () => {
            const scrollY = window.scrollY;
            this.state.updateItem(id, itemData);

            let syncCount = 0;
            if (shouldSync) {
              const normOldName = (existingItem.name || '').trim().toLowerCase();
              const normNewName = itemData.name.trim().toLowerCase();
              const matchingCrossSeries = this.state.data.items.filter(i => 
                i.id !== id && 
                ((i.name || '').trim().toLowerCase() === normOldName || (i.name || '').trim().toLowerCase() === normNewName)
              );
              matchingCrossSeries.forEach(other => {
                this.state.updateItem(other.id, {
                  name: itemData.name,
                  tier: itemData.tier,
                  marketWorth: itemData.marketWorth
                });
              });
              syncCount = matchingCrossSeries.length;
            }

            this.closeModal('itemModal');
            if (syncCount > 0) {
              this.showToast(`Updated "${itemData.name}" & synced across ${syncCount} matching series`);
            } else {
              this.showToast(`Updated "${itemData.name}"`);
            }
            window.scrollTo({ top: scrollY });
          }
        );
      } else {
        // Universal confirmation for adding a brand new gift
        this.confirmAction(
          'Confirm Add New Gift',
          `Are you sure you want to add "${itemData.name}" (${itemData.baseValue} base coins, ${itemData.tier} tier) to the database?`,
          () => {
            const scrollY = window.scrollY;
            this.state.addItem(itemData);
            this.closeModal('itemModal');
            this.showToast(`Added "${itemData.name}" to catalog`);
            window.scrollTo({ top: scrollY });
          }
        );
      }
    }

    handleDeleteItem() {
      const id = this.editItemId.value;
      if (!id) return;
      const item = this.state.getItem(id);
      if (!item) return;

      this.confirmAction(
        'Confirm Delete Gift',
        `Are you sure you want to permanently delete "${item.name}" from the database?`,
        () => {
          const scrollY = window.scrollY;
          this.state.deleteItem(id);
          this.closeModal('itemModal');
          this.showToast(`Deleted "${item.name}"`);
          window.scrollTo({ top: scrollY });
        }
      );
    }

    openCategoryModal(catId = null) {
      if (this.catModalDeleteBtn) {
        this.catModalDeleteBtn.style.display = catId ? 'inline-block' : 'none';
      }
      if (catId) {
        const cat = this.state.getCategory(catId);
        if (!cat) return;
        this.catModalTitle.textContent = 'Edit Category';
        this.catModalId.value = cat.id;
        this.catModalName.value = cat.name;
        if (this.catModalOrder) this.catModalOrder.value = cat.order || 1;
        if (this.catModalDesc) this.catModalDesc.value = cat.description || '';
      } else {
        this.catModalTitle.textContent = 'New Category';
        this.catModalId.value = '';
        this.catModalName.value = '';
        if (this.catModalOrder) this.catModalOrder.value = this.state.data.categories.length + 1;
        if (this.catModalDesc) this.catModalDesc.value = '';
      }
      this.openModal('categoryModal');
      setTimeout(() => this.catModalName.focus(), 100);
    }

    handleSaveCategory() {
      const id = this.catModalId.value;
      const name = this.catModalName.value.trim();
      const existingCat = id ? this.state.getCategory(id) : null;
      const order = existingCat && existingCat.order !== undefined ? existingCat.order : (this.state.data.categories.length + 1);
      const description = this.catModalDesc ? this.catModalDesc.value.trim() : '';
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Category' : 'Confirm New Category';
      const actionMsg = id ? `Save changes to category "${name}"?` : `Create new category "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateCategory(id, { name, order, description });
          this.showToast(`Updated category "${name}"`);
        } else {
          this.state.addCategory({ name, order, description });
          this.showToast(`Created category "${name}"`);
        }
        this.closeModal('categoryModal');
      });
    }

    openSeriesModal(serId = null) {
      this.populateCategorySelects();
      if (this.serModalDeleteBtn) {
        this.serModalDeleteBtn.style.display = serId ? 'inline-block' : 'none';
      }
      if (serId) {
        const ser = this.state.getSeries(serId);
        if (!ser) return;
        this.serModalTitle.textContent = 'Edit Series';
        this.serModalId.value = ser.id;
        this.serModalCategory.value = ser.categoryId || '';
        this.serModalName.value = ser.name;
        if (this.serModalOrder) this.serModalOrder.value = ser.displayOrder !== undefined ? ser.displayOrder : 1;
        this.serModalBadge.value = ser.badge || '';
        this.serModalDesc.value = ser.description || '';
      } else {
        this.serModalTitle.textContent = 'New Series';
        this.serModalId.value = '';
        this.serModalCategory.value = this.state.data.categories[0] ? this.state.data.categories[0].id : '';
        this.serModalName.value = '';
        if (this.serModalOrder) this.serModalOrder.value = this.state.data.series.length + 1;
        this.serModalBadge.value = '';
        this.serModalDesc.value = '';
      }
      this.openModal('seriesModal');
      setTimeout(() => this.serModalName.focus(), 100);
    }

    handleSaveSeries() {
      const id = this.serModalId.value;
      const categoryId = this.serModalCategory.value;
      const name = this.serModalName.value.trim();
      const existingSer = id ? this.state.getSeries(id) : null;
      const displayOrder = existingSer && existingSer.displayOrder !== undefined ? existingSer.displayOrder : (this.state.data.series.length + 1);
      const badge = this.serModalBadge.value.trim();
      const description = this.serModalDesc.value.trim();
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Series' : 'Confirm New Series';
      const actionMsg = id ? `Save changes to series "${name}"?` : `Create new series "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateSeries(id, { categoryId, name, badge, description, displayOrder });
          this.showToast(`Updated series "${name}"`);
        } else {
          this.state.addSeries({ categoryId, name, badge, description, displayOrder });
          this.showToast(`Created series "${name}"`);
        }
        this.closeModal('seriesModal');
      });
    }

    openTierModal(tierId = null) {
      if (this.tierModalDeleteBtn) {
        this.tierModalDeleteBtn.style.display = tierId ? 'inline-block' : 'none';
      }
      if (tierId) {
        const tier = this.state.getTier(tierId);
        if (!tier) return;
        this.tierModalTitle.textContent = 'Edit Tier';
        this.tierModalId.value = tier.id;
        this.tierModalName.value = tier.name;
        this.tierModalRank.value = tier.rank !== undefined ? tier.rank : 10;
        if (this.tierModalOrder) this.tierModalOrder.value = tier.displayOrder !== undefined ? tier.displayOrder : 1;
        if (this.tierModalDesc) this.tierModalDesc.value = tier.description || '';
        const col = tier.color || '#c084fc';
        this.tierModalColorPicker.value = col.startsWith('#') && col.length === 7 ? col : '#c084fc';
        this.tierModalColorHex.value = col;
      } else {
        this.tierModalTitle.textContent = 'New Tier';
        this.tierModalId.value = '';
        this.tierModalName.value = '';
        this.tierModalRank.value = 50;
        if (this.tierModalOrder) this.tierModalOrder.value = (this.state.data.tiers ? this.state.data.tiers.length : 0) + 1;
        if (this.tierModalDesc) this.tierModalDesc.value = '';
        this.tierModalColorPicker.value = '#c084fc';
        this.tierModalColorHex.value = '#c084fc';
      }
      this.populateTierColorPresets();
      this.updateTierModalPreview();
      this.openModal('tierModal');
      setTimeout(() => this.tierModalName.focus(), 100);
    }

    populateTierColorPresets() {
      if (!this.tierColorPalettePresets) return;
      this.tierColorPalettePresets.innerHTML = '';
      const palette = [
        { name: 'Red', hex: '#ef4444' },
        { name: 'Yellow', hex: '#facc15' },
        { name: 'Purple', hex: '#c084fc' },
        { name: 'Deep Violet', hex: '#a855f7' },
        { name: 'Blue', hex: '#38bdf8' },
        { name: 'Cyan', hex: '#06b6d4' },
        { name: 'Orange', hex: '#fb923c' },
        { name: 'Rose', hex: '#f43f5e' },
        { name: 'Light Grey', hex: '#e2e8f0' }
      ];

      const currentHex = (this.tierModalColorHex.value || '#c084fc').toLowerCase();

      palette.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `color-swatch-btn ${p.hex.toLowerCase() === currentHex ? 'active' : ''}`;
        btn.style.backgroundColor = p.hex;
        btn.title = p.name;
        btn.addEventListener('click', () => {
          this.tierModalColorPicker.value = p.hex;
          this.tierModalColorHex.value = p.hex;
          this.tierColorPalettePresets.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.updateTierModalPreview();
        });
        this.tierColorPalettePresets.appendChild(btn);
      });
    }

    updateTierModalPreview() {
      if (!this.tierModalPreviewBadge) return;
      const name = (this.tierModalName.value || 'Preview Tier').trim();
      const color = (this.tierModalColorHex.value || '#c084fc').trim();
      this.tierModalPreviewBadge.textContent = name || 'Preview Tier';
      this.tierModalPreviewBadge.style.color = color;
      const rgb = this.state.hexToRgb ? this.state.hexToRgb(color) : '192, 132, 252';
      this.tierModalPreviewBadge.style.backgroundColor = `rgba(${rgb}, 0.16)`;
      this.tierModalPreviewBadge.style.borderColor = `rgba(${rgb}, 0.45)`;
    }

    handleSaveTier() {
      const id = this.tierModalId.value;
      const name = this.tierModalName.value.trim();
      const rank = Number(this.tierModalRank.value) || 10;
      const existingTier = id ? this.state.getTier(id) : null;
      const displayOrder = existingTier && existingTier.displayOrder !== undefined ? existingTier.displayOrder : ((this.state.data.tiers ? this.state.data.tiers.length : 0) + 1);
      const description = this.tierModalDesc ? this.tierModalDesc.value.trim() : '';
      let color = this.tierModalColorHex.value.trim() || this.tierModalColorPicker.value || '#c084fc';
      if (!name) return;

      const actionTitle = id ? 'Confirm Save Tier' : 'Confirm New Tier';
      const actionMsg = id ? `Save changes to tier "${name}"?` : `Create new tier "${name}"?`;

      this.confirmAction(actionTitle, actionMsg, () => {
        if (id) {
          this.state.updateTier(id, { name, rank, color, displayOrder, description });
          this.showToast(`Updated tier "${name}"`);
        } else {
          this.state.addTier({ name, rank, color, displayOrder, description });
          this.showToast(`Created tier "${name}"`);
        }
        this.closeModal('tierModal');
      });
    }

    handleDeleteTier() {
      const id = this.tierModalId.value;
      if (!id) return;
      const tier = this.state.getTier(id);
      const name = tier ? tier.name : 'this tier';

      this.confirmAction(
        'Confirm Delete Tier',
        `Are you sure you want to delete tier "${name}"? Any gifts classified under this tier will safely revert to Standard.`,
        () => {
          this.state.deleteTier(id);
          this.closeModal('tierModal');
          this.showToast(`Deleted tier "${name}"`);
        }
      );
    }

    openTagModal(tagKey) {
      const tag = this.state.getTag(tagKey);
      if (!tag) return;
      this.tagModalTitle.textContent = `Edit "${tag.name}" Tag`;
      this.tagModalKey.value = tag.key;
      this.tagModalName.value = tag.name;
      const col = tag.color || (tag.key === 'wall' ? '#10b981' : (tag.key === 'series' ? '#06b6d4' : '#f43f5e'));
      this.tagModalColorPicker.value = col.startsWith('#') && col.length === 7 ? col : '#10b981';
      this.tagModalColorHex.value = col;
      this.populateTagColorPresets(tag.key);
      this.updateTagModalPreview();
      this.openModal('tagModal');
      setTimeout(() => this.tagModalName.focus(), 100);
    }

    populateTagColorPresets(tagKey) {
      if (!this.tagColorPalettePresets) return;
      this.tagColorPalettePresets.innerHTML = '';
      const curatedPresets = {
        wall: [
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Neon Mint', hex: '#00f5a0' },
          { name: 'Green', hex: '#22c55e' },
          { name: 'Lime', hex: '#84cc16' },
          { name: 'Teal', hex: '#14b8a6' },
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Coral', hex: '#ff6b4a' }
        ],
        series: [
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Electric Blue', hex: '#38bdf8' },
          { name: 'Indigo', hex: '#6366f1' },
          { name: 'Purple', hex: '#a855f7' },
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Orange', hex: '#f97316' },
          { name: 'Teal', hex: '#14b8a6' }
        ],
        backpack: [
          { name: 'Rose', hex: '#f43f5e' },
          { name: 'Coral', hex: '#ff6b4a' },
          { name: 'Orange', hex: '#f97316' },
          { name: 'Pink', hex: '#ec4899' },
          { name: 'Amber', hex: '#fbbf24' },
          { name: 'Emerald', hex: '#10b981' },
          { name: 'Cyan', hex: '#06b6d4' },
          { name: 'Sky Blue', hex: '#0ea5e9' },
          { name: 'Purple', hex: '#a855f7' }
        ]
      };

      const palette = curatedPresets[tagKey] || curatedPresets.wall;
      const currentHex = (this.tagModalColorHex.value || '#10b981').toLowerCase();

      palette.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `color-swatch-btn ${p.hex.toLowerCase() === currentHex ? 'active' : ''}`;
        btn.style.backgroundColor = p.hex;
        btn.title = p.name;
        btn.addEventListener('click', () => {
          this.tagModalColorPicker.value = p.hex;
          this.tagModalColorHex.value = p.hex;
          this.tagColorPalettePresets.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.updateTagModalPreview();
        });
        this.tagColorPalettePresets.appendChild(btn);
      });
    }

    updateTagModalPreview() {
      if (!this.tagModalPreviewBadge) return;
      const key = this.tagModalKey.value || 'wall';
      const name = (this.tagModalName.value || (key.charAt(0).toUpperCase() + key.slice(1))).trim();
      let color = (this.tagModalColorHex.value || this.tagModalColorPicker.value || '#10b981').trim();
      if (!color.startsWith('#')) color = '#' + color;

      const icon = TAG_ICONS[key] || '';
      this.tagModalPreviewBadge.innerHTML = `${icon}<span>${this.escapeHtml(name)}</span>`;
      this.tagModalPreviewBadge.style.color = color;
      this.tagModalPreviewBadge.style.backgroundColor = `color-mix(in srgb, ${color} 14%, transparent)`;
      this.tagModalPreviewBadge.style.borderColor = `color-mix(in srgb, ${color} 42%, transparent)`;
    }

    handleSaveTag() {
      const key = this.tagModalKey.value;
      const name = this.tagModalName.value.trim();
      let color = (this.tagModalColorHex.value || this.tagModalColorPicker.value || '#10b981').trim();
      if (!name || !key) return;
      if (!color.startsWith('#')) color = '#' + color;

      this.confirmAction('Confirm Save Tag', `Save changes to "${name}" tag?`, () => {
        this.state.updateTag(key, { name, color });
        this.applyThemeColors();
        this.renderTagManagerList();
        this.renderAll();
        this.closeModal('tagModal');
        this.showToast(`Updated "${name}" tag`);
      });
    }

    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = 'none';
      if (modalId === 'confirmModal') {
        this.pendingConfirmAction = null;
      }
      const anyOpen = Array.from(document.querySelectorAll('.modal-overlay')).some(m => m.style.display === 'flex');
      if (!anyOpen) {
        document.body.classList.remove('modal-open');
      }
    }

    confirmAction(title, message, onAccept) {
      this.confirmModalTitle.textContent = title;
      this.confirmModalMessage.textContent = message;
      this.pendingConfirmAction = onAccept;
      this.openModal('confirmModal');
    }

    exportDatabaseJSON() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.state.data, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `hellotalk-gifts-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      this.showToast('Database exported as JSON backup.');
    }

    handleImportFile(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          this.state.importData(parsed);
          this.showToast('Database successfully imported and restored.');
        } catch (err) {
          alert('Failed to parse JSON file: ' + err.message);
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    }

    toSmartTitleCase(str) {
      if (!str) return '';
      const trimmed = str.trim();
      // If user typed entirely lowercase, capitalize each word nicely
      if (trimmed === trimmed.toLowerCase()) {
        return trimmed.split(' ').map(w => w ? (w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()) : '').join(' ');
      }
      // If string begins with lowercase letter, capitalize first letter
      if (/^[a-z]/.test(trimmed)) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }
      return trimmed;
    }

    initDuplicateDetection() {
      let duplicateDebounceTimer;
      if (this.editItemName) {
        this.editItemName.addEventListener('input', () => {
          clearTimeout(duplicateDebounceTimer);
          duplicateDebounceTimer = setTimeout(() => {
            this.checkItemDuplicates();
          }, 150);
        });
      }

      if (this.editItemCategory) {
        this.editItemCategory.addEventListener('change', () => {
          this.checkItemDuplicates();
        });
      }

      if (this.editItemSeries) {
        this.editItemSeries.addEventListener('change', () => {
          this.checkItemDuplicates();
        });
      }

      if (this.scanDuplicatesBtn) {
        this.scanDuplicatesBtn.addEventListener('click', () => {
          this.scanDuplicates();
        });
      }
    }

    checkItemDuplicates() {
      if (!this.editItemDuplicateAlert || !this.editItemName) return;
      const name = this.editItemName.value.trim();
      const seriesId = this.editItemSeries ? this.editItemSeries.value.trim() : '';
      const currentId = this.editItemId ? this.editItemId.value : '';

      if (!name) {
        this.editItemDuplicateAlert.style.display = 'none';
        if (this.editItemSyncMatchingGroup) this.editItemSyncMatchingGroup.style.display = 'none';
        return;
      }

      const normName = name.toLowerCase();
      const items = this.state.data.items || [];

      // 1. Same-series match check
      const currentItem = currentId ? this.state.getItem(currentId) : null;
      const isCurrentDistinct = this.editItemDistinctVariant ? this.editItemDistinctVariant.checked : !!(currentItem && currentItem.isDistinctVariant);

      const sameSeriesMatch = items.find(i => 
        i.id !== currentId && 
        (i.seriesId || '') === seriesId && 
        (i.name || '').trim().toLowerCase() === normName &&
        !i.isDistinctVariant &&
        !isCurrentDistinct
      );

      if (sameSeriesMatch) {
        const ser = this.state.getSeries(sameSeriesMatch.seriesId);
        const serName = ser ? ser.name : 'Current Series';
        this.duplicateWarningText.innerHTML = `⚠️ Conflict: <strong>"${this.escapeHtml(sameSeriesMatch.name)}"</strong> already exists in <em>${this.escapeHtml(serName)}</em> (${sameSeriesMatch.baseValue} coins).`;
        this.duplicateLoadExistingBtn.style.display = 'inline-block';
        if (this.duplicateAutoFillBtn) this.duplicateAutoFillBtn.style.display = 'none';
        this.duplicateLoadExistingBtn.onclick = () => {
          this.openEditItemModal(sameSeriesMatch.id);
        };
        this.editItemDuplicateAlert.style.display = 'flex';
        return;
      }

      // 2. Cross-series check (Smart Auto-Suggest on Add & Sync Notice on Edit)
      const otherSeriesMatches = items.filter(i => 
        i.id !== currentId && 
        (i.name || '').trim().toLowerCase() === normName
      );

      if (otherSeriesMatches.length > 0) {
        const otherSeriesMatch = otherSeriesMatches[0];
        const ser = this.state.getSeries(otherSeriesMatch.seriesId);
        const serName = ser ? ser.name : 'Another Series';

        if (!currentId) {
          // ADDING A NEW GIFT: Provide 1-tap Auto-Fill from the catalog match
          this.duplicateWarningText.innerHTML = `💡 Catalog Match: <strong>"${this.escapeHtml(otherSeriesMatch.name)}"</strong> exists in <em>${this.escapeHtml(serName)}</em> (${otherSeriesMatch.baseValue} coins • ${this.escapeHtml(otherSeriesMatch.tier || 'Standard')}).`;
          this.duplicateLoadExistingBtn.style.display = 'none';
          if (this.duplicateAutoFillBtn) {
            this.duplicateAutoFillBtn.style.display = 'inline-block';
            this.duplicateAutoFillBtn.onclick = () => {
              this.editItemName.value = otherSeriesMatch.name;
              this.editItemBaseValue.value = otherSeriesMatch.baseValue;
              this.editItemMarketWorth.value = otherSeriesMatch.marketWorth || otherSeriesMatch.baseValue;
              if (this.editItemMarketWorth) this.editItemMarketWorth.dataset.autoFilled = 'false';
              const t = otherSeriesMatch.tier || 'Standard';
              this.editItemTier.value = t;
              this.setModalTierPresets(t);
              if (!this.editItemCategory.value && otherSeriesMatch.categoryId) {
                this.populateModalCategorySelect(otherSeriesMatch.categoryId);
                this.populateModalSeriesSelect(otherSeriesMatch.categoryId, otherSeriesMatch.seriesId || '');
              }
              this.showToast(`Auto-filled details from "${otherSeriesMatch.name}"`);
            };
          }
          this.editItemDuplicateAlert.style.display = 'flex';
        } else {
          // EDITING AN EXISTING GIFT: Informational note & update sync checkbox visibility
          this.duplicateWarningText.innerHTML = `ℹ️ Shared Gift: <strong>"${this.escapeHtml(otherSeriesMatch.name)}"</strong> also appears in <em>${this.escapeHtml(serName)}</em> (${otherSeriesMatch.baseValue} coins). Check the sync option below to sync changes across series.`;
          this.duplicateLoadExistingBtn.style.display = 'none';
          if (this.duplicateAutoFillBtn) this.duplicateAutoFillBtn.style.display = 'none';
          this.editItemDuplicateAlert.style.display = 'flex';

          if (this.editItemSyncMatchingGroup) {
            this.editItemSyncMatchingGroup.style.display = 'block';
            if (this.editItemSyncMatchingLabel) {
              this.editItemSyncMatchingLabel.textContent = `Sync changes across all matching series (${otherSeriesMatches.length} other occurrences)`;
            }
          }
        }
        return;
      }

      this.editItemDuplicateAlert.style.display = 'none';
      if (this.editItemSyncMatchingGroup) {
        this.editItemSyncMatchingGroup.style.display = 'none';
        this.editItemSyncMatching.checked = false;
      }
    }

    scanDuplicates() {
      if (!this.duplicateAuditResults) return;
      this.duplicateAuditResults.style.display = 'block';
      this.duplicateAuditResults.innerHTML = '<div style="padding: 10px; color: var(--text-muted);">Auditing catalog gifts...</div>';

      const items = this.state.data.items || [];
      const byName = new Map();

      items.forEach(item => {
        const norm = (item.name || '').trim().toLowerCase();
        if (!norm) return;
        if (!byName.has(norm)) byName.set(norm, []);
        byName.get(norm).push(item);
      });

      const activeConflictGroups = [];
      const verifiedVariantGroups = [];
      const crossSeriesSamePrice = [];
      const crossSeriesDiffPrice = [];

      byName.forEach(group => {
        if (group.length <= 1) return;

        // Subgroup by seriesId
        const bySeries = new Map();
        group.forEach(item => {
          const sid = item.seriesId || 'standalone';
          if (!bySeries.has(sid)) bySeries.set(sid, []);
          bySeries.get(sid).push(item);
        });

        // 1. Same-series duplicates check
        bySeries.forEach(seriesGroup => {
          if (seriesGroup.length > 1) {
            const allDistinct = seriesGroup.every(item => item.isDistinctVariant === true);
            if (allDistinct) {
              verifiedVariantGroups.push(seriesGroup);
            } else {
              activeConflictGroups.push(seriesGroup);
            }
          }
        });

        // 2. Cross-series check
        if (bySeries.size > 1) {
          const distinctValues = new Set(group.map(g => Number(g.baseValue) || 0));
          if (distinctValues.size === 1) {
            crossSeriesSamePrice.push({
              name: group[0].name,
              baseValue: group[0].baseValue,
              items: group
            });
          } else {
            crossSeriesDiffPrice.push({
              name: group[0].name,
              items: group
            });
          }
        }
      });

      // Sort cross series alphabetically for clean browsing
      crossSeriesSamePrice.sort((a, b) => a.name.localeCompare(b.name));
      crossSeriesDiffPrice.sort((a, b) => a.name.localeCompare(b.name));

      let html = '';

      // --- SECTION 1: SAME-SERIES CONFLICTS & VERIFIED VARIANTS ---
      if (activeConflictGroups.length === 0) {
        html += `
          <div style="padding: 10px 12px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-sm); color: #34d399; display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Catalog Integrity Verified:</strong> 0 duplicate conflicts within any series. Total items: ${items.length}.${verifiedVariantGroups.length > 0 ? ` (${verifiedVariantGroups.length} verified distinct variant group acknowledged).` : ''}</span>
          </div>
        `;
      } else {
        html += `
          <div style="margin-bottom: 8px; font-weight: 700; color: #f87171;">
            ⚠️ Found ${activeConflictGroups.length} unresolved duplicate conflict(s) within the same series:
          </div>
        `;

        activeConflictGroups.forEach(group => {
          const sample = group[0];
          const ser = this.state.getSeries(sample.seriesId);
          const serName = ser ? ser.name : 'Standalone';

          html += `
            <div class="duplicate-audit-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
                <span style="font-weight: 700; color: var(--text-primary);">${this.escapeHtml(sample.name)} (${this.escapeHtml(serName)})</span>
                <div style="display: flex; gap: 6px; align-items: center;">
                  <button type="button" class="btn-secondary duplicate-mark-valid-btn" data-group-ids="${group.map(g => g.id).join(',')}" style="font-size: 11px; padding: 3px 8px; color: #34d399; border-color: rgba(52, 211, 153, 0.4);">
                    ✓ Valid Variant
                  </button>
                  <button type="button" class="btn-secondary duplicate-merge-btn" data-group-ids="${group.map(g => g.id).join(',')}" style="font-size: 11px; padding: 3px 8px; color: #60a5fa; border-color: rgba(96, 165, 250, 0.4);">
                    Merge into One
                  </button>
                </div>
              </div>
              ${group.map(g => `
                <div class="duplicate-item-row">
                  <span style="font-size: 11px; color: var(--text-muted);">
                    ID: ${this.escapeHtml(g.id)} | Base: ${g.baseValue} coins | Qty: ${g.quantity || 0} | Wall: ${g.wallOwned ? 'Yes' : 'No'} | Tier: ${this.escapeHtml(g.tier || 'Standard')}
                  </span>
                  <button type="button" class="btn-modal-delete" data-delete-id="${g.id}" style="font-size: 10px; padding: 2px 6px;">Delete</button>
                </div>
              `).join('')}
            </div>
          `;
        });
      }

      if (verifiedVariantGroups.length > 0) {
        html += `
          <div style="margin-top: 10px; padding: 10px 12px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);">
            <div style="font-size: 11px; font-weight: 700; color: #a7f3d0; margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
              <span>Verified Distinct Variants (${verifiedVariantGroups.length} Group${verifiedVariantGroups.length > 1 ? 's' : ''}):</span>
              <span style="font-size: 10px; color: var(--text-muted); font-weight: 400;">Acknowledged &amp; Excluded from Conflicts</span>
            </div>
            ${verifiedVariantGroups.map(group => {
              const sName = this.state.getSeries(group[0].seriesId)?.name || 'Series';
              return `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 5px 0; font-size: 11px; color: var(--text-muted); border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                  <span>• <strong>${this.escapeHtml(group[0].name)}</strong> (${this.escapeHtml(sName)}) — ${group.map(g => g.baseValue + ' coins').join(' / ')}</span>
                  <button type="button" class="btn-secondary duplicate-unmark-btn" data-group-ids="${group.map(g => g.id).join(',')}" style="font-size: 10px; padding: 2px 7px;">
                    Unmark
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      // --- SECTION 2: SHARED CROSS-SERIES SETS (IDENTICAL PRICE) ---
      if (crossSeriesSamePrice.length > 0) {
        html += `
          <details open style="margin-top: 12px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); overflow: hidden; background: rgba(0, 0, 0, 0.2);">
            <summary style="padding: 9px 12px; font-size: 12px; font-weight: 700; color: #fbbf24; cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none; background: rgba(245, 158, 11, 0.06); border-bottom: 1px solid var(--border-subtle);">
              <span>🔗 Shared Cross-Series Gifts (${crossSeriesSamePrice.length} Sets)</span>
              <span style="font-size: 10px; font-weight: normal; color: var(--text-muted);">Same Name &amp; Price Across Series (Valid in HelloTalk)</span>
            </summary>
            <div style="padding: 10px; display: flex; flex-direction: column; gap: 8px;">
              <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
                These gifts appear in multiple event series with identical coin values. HelloTalk treats each series wall checklist independently.
              </div>
              ${crossSeriesSamePrice.map(set => {
                return `
                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <span style="font-weight: 700; color: var(--text-primary); font-size: 12px;">${this.escapeHtml(set.name)}</span>
                        <span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; font-size: 10px; padding: 1px 6px;">${set.baseValue} coins</span>
                      </div>
                      <span style="font-size: 10px; color: var(--text-muted);">${set.items.length} series occurrences</span>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                      ${set.items.map(item => {
                        const ser = this.state.getSeries(item.seriesId);
                        const sName = ser ? ser.name : 'Standalone';
                        return `
                          <button type="button" class="duplicate-inspect-btn" data-inspect-id="${item.id}" title="Inspect in ${this.escapeHtml(sName)}" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 4px; padding: 2px 7px; font-size: 10px; color: var(--text-secondary); cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                            <span>${this.escapeHtml(sName)}</span>
                            <span style="color: var(--text-muted); font-size: 9px;">›</span>
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </details>
        `;
      }

      // --- SECTION 3: CROSS-SERIES PRICE VARIATIONS (DIFF PRICE) ---
      if (crossSeriesDiffPrice.length > 0) {
        html += `
          <details open style="margin-top: 10px; border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); overflow: hidden; background: rgba(0, 0, 0, 0.2);">
            <summary style="padding: 9px 12px; font-size: 12px; font-weight: 700; color: #60a5fa; cursor: pointer; display: flex; align-items: center; justify-content: space-between; user-select: none; background: rgba(96, 165, 250, 0.06); border-bottom: 1px solid var(--border-subtle);">
              <span>⚖️ Cross-Series Price Variations (${crossSeriesDiffPrice.length} Sets)</span>
              <span style="font-size: 10px; font-weight: normal; color: var(--text-muted);">Same Name with Different Prices</span>
            </summary>
            <div style="padding: 10px; display: flex; flex-direction: column; gap: 8px;">
              <div style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
                These gifts share the same name across series but have different coin values (multi-event pricing). Review to ensure values match your HelloTalk live data.
              </div>
              ${crossSeriesDiffPrice.map(set => {
                return `
                  <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                      <span style="font-weight: 700; color: #60a5fa; font-size: 12px;">${this.escapeHtml(set.name)}</span>
                      <span style="font-size: 10px; color: var(--text-muted);">${set.items.length} series variations</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                      ${set.items.map(item => {
                        const ser = this.state.getSeries(item.seriesId);
                        const sName = ser ? ser.name : 'Standalone';
                        return `
                          <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 8px; background: rgba(0, 0, 0, 0.25); border-radius: 4px; font-size: 11px;">
                            <span style="color: var(--text-secondary);">${this.escapeHtml(sName)}</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                              <span style="color: #fbbf24; font-weight: 700;">${item.baseValue} coins</span>
                              <span style="font-size: 10px; color: var(--text-muted);">Tier: ${this.escapeHtml(item.tier || 'Standard')}</span>
                              <button type="button" class="btn-secondary duplicate-inspect-btn" data-inspect-id="${item.id}" style="font-size: 10px; padding: 2px 7px;">Edit</button>
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </details>
        `;
      }

      this.duplicateAuditResults.innerHTML = html;

      // Bind mark valid variant action
      this.duplicateAuditResults.querySelectorAll('.duplicate-mark-valid-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ids = btn.dataset.groupIds.split(',');
          ids.forEach(id => {
            this.state.updateItem(id, { isDistinctVariant: true });
          });
          this.showToast('Marked as verified distinct variant.');
          this.scanDuplicates();
        });
      });

      // Bind unmark action
      this.duplicateAuditResults.querySelectorAll('.duplicate-unmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ids = btn.dataset.groupIds.split(',');
          ids.forEach(id => {
            this.state.updateItem(id, { isDistinctVariant: false });
          });
          this.showToast('Unmarked distinct variant status.');
          this.scanDuplicates();
        });
      });

      // Bind merge action
      this.duplicateAuditResults.querySelectorAll('.duplicate-merge-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ids = btn.dataset.groupIds.split(',');
          if (ids.length <= 1) return;
          const primaryId = ids[0];
          const primary = this.state.getItem(primaryId);
          if (!primary) return;

          let totalQty = Number(primary.quantity) || 0;
          let anyWall = !!primary.wallOwned;
          let anyStarred = !!primary.starred;

          for (let i = 1; i < ids.length; i++) {
            const other = this.state.getItem(ids[i]);
            if (other) {
              totalQty += Number(other.quantity) || 0;
              if (other.wallOwned) anyWall = true;
              if (other.starred) anyStarred = true;
              this.state.deleteItem(ids[i]);
            }
          }

          const tabs = Array.isArray(primary.tabs) ? [...primary.tabs] : [];
          if (anyWall && !tabs.includes('wall')) tabs.push('wall');
          if (totalQty > 0 && !tabs.includes('backpack')) tabs.push('backpack');

          this.state.updateItem(primaryId, {
            quantity: totalQty,
            wallOwned: anyWall,
            starred: anyStarred,
            tabs: tabs
          });

          this.showToast(`Merged duplicate group into "${primary.name}"`);
          this.scanDuplicates();
        });
      });

      // Bind delete action
      this.duplicateAuditResults.querySelectorAll('[data-delete-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const delId = btn.dataset.deleteId;
          this.state.deleteItem(delId);
          this.showToast('Deleted duplicate item');
          this.scanDuplicates();
        });
      });

      // Bind inspect / edit buttons
      this.duplicateAuditResults.querySelectorAll('.duplicate-inspect-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const inspectId = btn.dataset.inspectId;
          if (inspectId) this.openEditItemModal(inspectId);
        });
      });
    }

    initGitHubSync() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';

      const updateUI = () => {
        const token = localStorage.getItem(STORAGE_KEY_TOKEN);
        const lastSync = localStorage.getItem(STORAGE_KEY_LAST_SYNC);

        if (token) {
          if (this.ghSyncStatusBadge) {
            this.ghSyncStatusBadge.className = 'status-badge status-online';
            this.ghSyncStatusBadge.textContent = 'Token Connected';
          }
          if (this.ghClearTokenBtn) this.ghClearTokenBtn.style.display = 'inline-block';
          if (this.ghPatInput && !this.ghPatInput.value) {
            this.ghPatInput.placeholder = '•••••••••••••••••••••••••••• (Saved)';
          }
        } else {
          if (this.ghSyncStatusBadge) {
            this.ghSyncStatusBadge.className = 'status-badge status-offline';
            this.ghSyncStatusBadge.textContent = 'No Token';
          }
          if (this.ghClearTokenBtn) this.ghClearTokenBtn.style.display = 'none';
          if (this.ghPatInput) this.ghPatInput.placeholder = 'Personal Access Token (ghp_...)';
        }

        if (this.ghLastSyncTime) {
          this.ghLastSyncTime.textContent = lastSync ? `Last synced: ${lastSync}` : 'Never synced';
        }
      };

      if (this.ghSaveTokenBtn) {
        this.ghSaveTokenBtn.addEventListener('click', () => {
          const val = this.ghPatInput ? this.ghPatInput.value.trim() : '';
          if (!val) {
            this.showToast('Please enter a GitHub Personal Access Token.');
            return;
          }
          localStorage.setItem(STORAGE_KEY_TOKEN, val);
          if (this.ghPatInput) this.ghPatInput.value = '';
          updateUI();
          this.showToast('GitHub token securely saved in browser storage.');
        });
      }

      if (this.ghTestTokenBtn) {
        this.ghTestTokenBtn.addEventListener('click', async () => {
          const token = (this.ghPatInput && this.ghPatInput.value.trim()) || localStorage.getItem(STORAGE_KEY_TOKEN);
          if (!token) {
            alert('Please enter or save a GitHub Personal Access Token to test.');
            return;
          }
          this.ghTestTokenBtn.disabled = true;
          this.ghTestTokenBtn.textContent = 'Testing...';
          this.showToast('Testing GitHub connection...');
          try {
            const res = await fetch('https://api.github.com/repos/LbsLightX/ht-database', {
              headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json'
              }
            });
            if (res.ok) {
              const repoInfo = await res.json();
              const hasPush = repoInfo.permissions && (repoInfo.permissions.push || repoInfo.permissions.admin);
              if (hasPush) {
                if (this.ghSyncStatusBadge) {
                  this.ghSyncStatusBadge.className = 'status-badge status-online';
                  this.ghSyncStatusBadge.textContent = 'Verified (Read/Write)';
                }
                this.showToast('✅ Connection Verified: Full Read/Write access to LbsLightX/ht-database');
              } else {
                if (this.ghSyncStatusBadge) {
                  this.ghSyncStatusBadge.className = 'status-badge status-offline';
                  this.ghSyncStatusBadge.textContent = 'Read Only (No Push)';
                }
                alert('Warning: Token connected, but lacks "Contents: Read and write" permission for this repo.');
              }
            } else if (res.status === 401) {
              throw new Error('Invalid or expired Personal Access Token (HTTP 401 Unauthorized).');
            } else if (res.status === 404) {
              throw new Error('Repository not found or token lacks access to LbsLightX/ht-database (HTTP 404).');
            } else {
              throw new Error(`GitHub API returned status ${res.status}: ${res.statusText}`);
            }
          } catch (err) {
            alert('Connection Test Failed: ' + err.message);
          } finally {
            if (this.ghTestTokenBtn) {
              this.ghTestTokenBtn.disabled = false;
              this.ghTestTokenBtn.textContent = 'Test Connection';
            }
          }
        });
      }

      if (this.ghClearTokenBtn) {
        this.ghClearTokenBtn.addEventListener('click', () => {
          localStorage.removeItem(STORAGE_KEY_TOKEN);
          if (this.ghPatInput) this.ghPatInput.value = '';
          updateUI();
          this.showToast('GitHub token cleared.');
        });
      }

      if (this.ghPushBtn) {
        this.ghPushBtn.addEventListener('click', () => {
          this.pushToGitHub();
        });
      }

      if (this.ghPullBtn) {
        this.ghPullBtn.addEventListener('click', () => {
          this.pullFromGitHub();
        });
      }

      // GitHub Smart Commit Modal Handlers
      if (this.ghCommitResetTitleBtn) {
        this.ghCommitResetTitleBtn.addEventListener('click', () => {
          const smart = this.generateSmartCommitMessage();
          if (this.ghCommitTitleInput) this.ghCommitTitleInput.value = smart.title;
          if (this.ghCommitExtendedBody) this.ghCommitExtendedBody.value = smart.body;
        });
      }

      if (this.ghCommitCancelBtn) {
        this.ghCommitCancelBtn.addEventListener('click', () => {
          this.closeModal('ghCommitModal');
          this.pendingGhCommitDeploy = null;
        });
      }

      if (this.ghCommitConfirmBtn) {
        this.ghCommitConfirmBtn.addEventListener('click', () => {
          const title = (this.ghCommitTitleInput?.value || '').trim() || 'chore(catalog): update database via Web Vault';
          const body = (this.ghCommitExtendedBody?.value || '').trim();
          const commitMessage = body ? `${title}

${body}` : title;
          this.closeModal('ghCommitModal');
          if (typeof this.pendingGhCommitDeploy === 'function') {
            this.pendingGhCommitDeploy(commitMessage);
          }
        });
      }

      updateUI();
    }

    generateSmartCommitMessage() {
      const journal = this.state.getJournal();
      
      if (!journal || journal.length === 0) {
        const nowStr = new Date().toISOString().slice(0, 19).replace('T', ' ');
        return {
          title: `chore(catalog): update gift database [${nowStr}]`,
          body: '',
          chips: [{ label: 'Catalog Sync', type: 'update' }]
        };
      }

      const adds = journal.filter(a => a.type === 'ADD_GIFT');
      const updates = journal.filter(a => a.type === 'UPDATE_GIFT');
      const deletes = journal.filter(a => a.type === 'DELETE_GIFT');
      const merges = journal.filter(a => a.type === 'MERGE_DUPLICATES');
      const seriesAdds = journal.filter(a => a.type === 'ADD_SERIES');
      const seriesUpdates = journal.filter(a => a.type === 'UPDATE_SERIES');
      const seriesDeletes = journal.filter(a => a.type === 'DELETE_SERIES');
      const tierUpdates = journal.filter(a => a.type === 'ADD_TIER' || a.type === 'UPDATE_TIER' || a.type === 'DELETE_TIER');
      const syncMatches = journal.filter(a => a.type === 'SYNC_MATCHING_GIFTS');
      const catUpdates = journal.filter(a => a.type === 'ADD_CATEGORY' || a.type === 'DELETE_CATEGORY');

      const chips = [];
      if (adds.length > 0) chips.push({ label: `+${adds.length} Added`, type: 'add' });
      if (updates.length > 0) chips.push({ label: `~${updates.length} Updated`, type: 'update' });
      if (deletes.length > 0) chips.push({ label: `-${deletes.length} Deleted`, type: 'delete' });
      if (merges.length > 0) chips.push({ label: `${merges.length} Merged`, type: 'update' });
      if (seriesAdds.length > 0) chips.push({ label: `+${seriesAdds.length} Series`, type: 'series' });
      if (seriesUpdates.length > 0) chips.push({ label: `~${seriesUpdates.length} Series`, type: 'series' });
      if (tierUpdates.length > 0) chips.push({ label: `${tierUpdates.length} Tiers`, type: 'update' });
      if (syncMatches.length > 0) chips.push({ label: `${syncMatches.length} Synced`, type: 'sync' });
      if (catUpdates.length > 0) chips.push({ label: `${catUpdates.length} Categories`, type: 'series' });

      // Generate conventional commit title
      let title = '';
      if (adds.length > 0 && updates.length === 0 && deletes.length === 0 && seriesAdds.length === 0) {
        const names = [...new Set(adds.map(a => a.name))];
        const preview = names.slice(0, 2).join(', ') + (names.length > 2 ? ` (+${names.length - 2} more)` : '');
        title = `feat(catalog): add ${adds.length} gift${adds.length > 1 ? 's' : ''} (${preview})`;
      } else if (updates.length > 0 && adds.length === 0 && deletes.length === 0 && seriesAdds.length === 0) {
        const valUpdates = updates.filter(u => u.changedFields && (u.changedFields.includes('marketWorth') || u.changedFields.includes('baseValue')));
        if (valUpdates.length > 0) {
          const names = [...new Set(valUpdates.map(u => u.name))];
          const preview = names.slice(0, 2).join(', ') + (names.length > 2 ? ` (+${names.length - 2} more)` : '');
          title = `fix(valuation): update market worth for ${preview}`;
        } else {
          const names = [...new Set(updates.map(u => u.name))];
          const preview = names.slice(0, 2).join(', ') + (names.length > 2 ? ` (+${names.length - 2} more)` : '');
          title = `chore(catalog): update ${updates.length} gift${updates.length > 1 ? 's' : ''} (${preview})`;
        }
      } else if (seriesAdds.length > 0 && adds.length === 0 && deletes.length === 0) {
        const sNames = seriesAdds.map(s => `"${s.name}"`).join(', ');
        title = `feat(series): add series ${sNames}`;
      } else if (merges.length > 0 && adds.length === 0 && deletes.length === 0) {
        title = `refactor(catalog): merge duplicate gifts in series checklists`;
      } else if (syncMatches.length > 0 && adds.length === 0 && deletes.length === 0) {
        title = `chore(catalog): cross-series sync for shared gifts`;
      } else {
        const parts = [];
        if (adds.length > 0) parts.push(`add ${adds.length} gift${adds.length > 1 ? 's' : ''}`);
        if (updates.length > 0) parts.push(`update ${updates.length}`);
        if (deletes.length > 0) parts.push(`remove ${deletes.length}`);
        if (seriesAdds.length > 0) parts.push(`add ${seriesAdds.length} series`);
        if (merges.length > 0) parts.push(`merge ${merges.length} duplicates`);
        title = `feat(catalog): ${parts.join(', ')}`;
      }

      // Generate extended detail body
      const bodyLines = [];
      adds.forEach(a => {
        bodyLines.push(`- Added: ${a.name}${a.coins ? ` (${a.coins}c)` : ''}${a.seriesName ? ` [${a.seriesName}]` : ''}`);
      });
      updates.forEach(u => {
        if (u.oldWorth !== undefined && u.newWorth !== undefined && u.oldWorth !== u.newWorth) {
          bodyLines.push(`- Valuation: ${u.name} (${u.oldWorth}c -> ${u.newWorth}c)`);
        } else {
          bodyLines.push(`- Updated: ${u.name}${u.changedFields ? ` (${u.changedFields.join(', ')})` : ''}`);
        }
      });
      deletes.forEach(d => {
        bodyLines.push(`- Removed: ${d.name} from [${d.seriesName || 'Catalog'}]`);
      });
      merges.forEach(m => {
        bodyLines.push(`- Merged duplicates: ${m.name}${m.seriesName ? ` in [${m.seriesName}]` : ''}`);
      });
      seriesAdds.forEach(s => {
        bodyLines.push(`- New Series: "${s.name}"`);
      });
      seriesUpdates.forEach(s => {
        bodyLines.push(`- Updated Series: "${s.name}"`);
      });
      syncMatches.forEach(sm => {
        bodyLines.push(`- Cross-series sync: updated ${sm.name} across ${sm.count} matching series`);
      });
      tierUpdates.forEach(t => {
        bodyLines.push(`- Tier configuration: ${t.name}`);
      });

      return {
        title,
        body: bodyLines.slice(0, 15).join('\n') + (bodyLines.length > 15 ? '\n...and ' + (bodyLines.length - 15) + ' more' : ''),
        chips
      };
    }

    openGhCommitModal(onDeploy) {
      if (!this.ghCommitModal) return;
      const smart = this.generateSmartCommitMessage();

      if (this.ghCommitTitleInput) {
        this.ghCommitTitleInput.value = smart.title;
      }
      if (this.ghCommitExtendedBody) {
        this.ghCommitExtendedBody.value = smart.body;
      }
      if (this.ghCommitSummaryChips) {
        this.ghCommitSummaryChips.innerHTML = smart.chips.map(c => `
          <span class="gh-chip gh-chip-${c.type}">${this.escapeHtml(c.label)}</span>
        `).join('');
      }

      this.pendingGhCommitDeploy = onDeploy;
      this.openModal('ghCommitModal');
    }

    async pushToGitHub() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';
      const token = localStorage.getItem(STORAGE_KEY_TOKEN);

      if (!token) {
        alert('Please save a GitHub Personal Access Token (Fine-grained or classic with "repo" permission) before syncing.');
        if (this.ghPatInput) this.ghPatInput.focus();
        return;
      }

      this.openGhCommitModal(async (commitMessage) => {
        const repo = 'LbsLightX/ht-database';
        const path = 'data/hellotalk-gifts.json';
        
        // Master vault state payload (preserves verified backpacks, wall checklists, and catalog definitions)
        const payload = {
          ...this.state.data,
          lastExported: Date.now()
        };
        const jsonContent = JSON.stringify(payload, null, 2);

        const utf8ToBase64 = (str) => {
          const bytes = new TextEncoder().encode(str);
          let binStr = '';
          for (let i = 0; i < bytes.length; i++) {
            binStr += String.fromCharCode(bytes[i]);
          }
          return btoa(binStr);
        };
        const base64Content = utf8ToBase64(jsonContent);

        if (this.ghPushBtn) {
          this.ghPushBtn.disabled = true;
          this.ghPushBtn.textContent = '⏳ Committing to GitHub...';
        }
        this.showToast('Connecting to GitHub API...');

        try {
          const url = `https://api.github.com/repos/${repo}/contents/${path}`;

          // 1. Fetch current file SHA
          let currentSha = null;
          const getRes = await fetch(url, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          });

          if (getRes.ok) {
            const getData = await getRes.json();
            currentSha = getData.sha;
          } else if (getRes.status === 401) {
            throw new Error('Invalid or expired GitHub Personal Access Token. Please re-enter a valid token.');
          } else if (getRes.status === 403) {
            throw new Error('Permission denied. Ensure your token has "Contents: Read and write" access for repository LbsLightX/ht-database.');
          } else if (getRes.status !== 404) {
            const errData = await getRes.json().catch(() => ({}));
            throw new Error(`Failed to query file info: ${errData.message || getRes.statusText}`);
          }

          // 2. Commit updated JSON file
          const putBody = {
            message: commitMessage,
            content: base64Content,
            branch: 'main'
          };
          if (currentSha) {
            putBody.sha = currentSha;
          }

          const putRes = await fetch(url, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(putBody)
          });

          if (!putRes.ok) {
            if (putRes.status === 409) {
              throw new Error('Conflict detected: Remote repository was modified. Please click "Pull Latest from GitHub" first.');
            }
            const putErr = await putRes.json().catch(() => ({}));
            throw new Error(`Failed to commit: ${putErr.message || putRes.statusText}`);
          }

          // Clear session journal upon successful GitHub commit
          this.state.clearJournal();

          const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          localStorage.setItem(STORAGE_KEY_LAST_SYNC, nowStr);
          if (this.ghLastSyncTime) this.ghLastSyncTime.textContent = `Last synced: ${nowStr}`;
          const shortTitle = commitMessage.split('\n')[0];
          this.showToast(`🚀 Pushed: "${shortTitle}"! GitHub Pages is deploying.`);
        } catch (err) {
          alert('GitHub Sync Error: ' + err.message);
        } finally {
          if (this.ghPushBtn) {
            this.ghPushBtn.disabled = false;
            this.ghPushBtn.textContent = '🚀 Commit & Deploy to GitHub Pages';
          }
        }
      });
    }

    async pullFromGitHub() {
      const STORAGE_KEY_TOKEN = 'ht_gh_pat';
      const STORAGE_KEY_LAST_SYNC = 'ht_gh_last_sync';
      const token = localStorage.getItem(STORAGE_KEY_TOKEN);
      const repo = 'LbsLightX/ht-database';
      const path = 'data/hellotalk-gifts.json';

      this.confirmAction(
        'Pull Latest from GitHub',
        'Pull latest database JSON from repository "LbsLightX/ht-database"?\n\nThis will update your local browser view with the latest cloud state.',
        async () => {
          if (this.ghPullBtn) {
            this.ghPullBtn.disabled = true;
            this.ghPullBtn.textContent = '⏳ Fetching from GitHub...';
          }
          this.showToast('Fetching latest database from GitHub...');

          try {
            const headers = { 'Accept': 'application/vnd.github.v3+json' };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const url = `https://api.github.com/repos/${repo}/contents/${path}?ref=main&t=${Date.now()}`;
            const res = await fetch(url, { headers });

            if (!res.ok) {
              if (res.status === 401) {
                throw new Error('Invalid or expired GitHub Personal Access Token.');
              }
              if (res.status === 403) {
                throw new Error('Permission denied. Please verify your token permissions.');
              }
              const errData = await res.json().catch(() => ({}));
              throw new Error(`Failed to fetch database: ${errData.message || res.statusText}`);
            }

            const data = await res.json();
            if (!data.content) throw new Error('Repository response does not contain file content.');

            const base64ToUtf8 = (str) => {
              const binStr = atob(str.replace(/\s+/g, ''));
              const bytes = new Uint8Array(binStr.length);
              for (let i = 0; i < binStr.length; i++) {
                bytes[i] = binStr.charCodeAt(i);
              }
              return new TextDecoder('utf-8').decode(bytes);
            };

            const rawJson = base64ToUtf8(data.content);
            const parsed = JSON.parse(rawJson);
            this.state.importData(parsed);

            const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            localStorage.setItem(STORAGE_KEY_LAST_SYNC, nowStr);
            if (this.ghLastSyncTime) this.ghLastSyncTime.textContent = `Last synced: ${nowStr}`;

            this.showToast('✅ Successfully pulled and synced latest database from GitHub!');
          } catch (err) {
            alert('GitHub Pull Error: ' + err.message);
          } finally {
            if (this.ghPullBtn) {
              this.ghPullBtn.disabled = false;
              this.ghPullBtn.textContent = '⬇️ Pull Latest from GitHub';
            }
          }
        }
      );
    }

    showToast(msg) {
      if (!this.toastContainer) return;
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = msg;
      this.toastContainer.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 200);
      }, 2400);
    }

    formatNumber(num) {
      return (Number(num) || 0).toLocaleString('en-US');
    }

    escapeHtml(str) {
      return String(str ?? '').replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[m]));
    }
  }

  // Boot Application on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new HelloTalkApp());
  } else {
    new HelloTalkApp();
  }
})();
