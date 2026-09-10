import type { StateInfo } from "../types";

// High point & prominence point data sourced from Peakbagger.com
// (lists lid=12003 "50 State Highpoints" and lid=41207 "Most Prominent Peaks of the U.S. States").
export const STATES: StateInfo[] = [
  {
    "name": "Alabama",
    "abbr": "AL",
    "capital": "Montgomery",
    "highPoint": {
      "name": "Cheaha Mountain",
      "elevationFt": 2408,
      "prominenceFt": 1448,
      "lat": 33.4855,
      "lon": -85.8087,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7542"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Cheaha Mountain",
      "elevationFt": 2408,
      "prominenceFt": 1448,
      "lat": 33.4855,
      "lon": -85.8087,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7542"
    }
  },
  {
    "name": "Alaska",
    "abbr": "AK",
    "capital": "Juneau",
    "highPoint": {
      "name": "Denali",
      "elevationFt": 20310,
      "prominenceFt": 20146,
      "lat": 63.069,
      "lon": -151.0063,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=271"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Denali",
      "elevationFt": 20310,
      "prominenceFt": 20146,
      "lat": 63.069,
      "lon": -151.0063,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=271"
    }
  },
  {
    "name": "Arizona",
    "abbr": "AZ",
    "capital": "Phoenix",
    "highPoint": {
      "name": "Humphreys Peak",
      "elevationFt": 12633,
      "prominenceFt": 6039,
      "lat": 35.3464,
      "lon": -111.678,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=3938"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Mount Graham",
      "elevationFt": 10720,
      "prominenceFt": 6320,
      "lat": 32.7016,
      "lon": -109.8714,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=4211"
    }
  },
  {
    "name": "Arkansas",
    "abbr": "AR",
    "capital": "Little Rock",
    "highPoint": {
      "name": "Magazine Mountain",
      "elevationFt": 2753,
      "prominenceFt": 2133,
      "lat": 35.167,
      "lon": -93.6448,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6606"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Magazine Mountain",
      "elevationFt": 2753,
      "prominenceFt": 2133,
      "lat": 35.167,
      "lon": -93.6448,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6606"
    }
  },
  {
    "name": "California",
    "abbr": "CA",
    "capital": "Sacramento",
    "highPoint": {
      "name": "Mount Whitney",
      "elevationFt": 14499,
      "prominenceFt": 10079,
      "lat": 36.5786,
      "lon": -118.292,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2829"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Whitney",
      "elevationFt": 14499,
      "prominenceFt": 10079,
      "lat": 36.5786,
      "lon": -118.292,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2829"
    }
  },
  {
    "name": "Colorado",
    "abbr": "CO",
    "capital": "Denver",
    "highPoint": {
      "name": "Mount Elbert",
      "elevationFt": 14438,
      "prominenceFt": 9078,
      "lat": 39.1178,
      "lon": -106.4454,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5736"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Elbert",
      "elevationFt": 14438,
      "prominenceFt": 9078,
      "lat": 39.1178,
      "lon": -106.4454,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5736"
    }
  },
  {
    "name": "Connecticut",
    "abbr": "CT",
    "capital": "Hartford",
    "highPoint": {
      "name": "Mount Frissell - South Slope",
      "elevationFt": 2382,
      "prominenceFt": 0,
      "lat": 42.0496,
      "lon": -73.4828,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7083"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "North Preston Hill",
      "elevationFt": 1448,
      "prominenceFt": 885,
      "lat": 41.721,
      "lon": -73.5133,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=27366"
    }
  },
  {
    "name": "Delaware",
    "abbr": "DE",
    "capital": "Dover",
    "highPoint": {
      "name": "Ebright Azimuth",
      "elevationFt": 450,
      "prominenceFt": 40,
      "lat": 39.836,
      "lon": -75.5222,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7156"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Iron Hill",
      "elevationFt": 340,
      "prominenceFt": 200,
      "lat": 39.6402,
      "lon": -75.7524,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7164"
    }
  },
  {
    "name": "Florida",
    "abbr": "FL",
    "capital": "Tallahassee",
    "highPoint": {
      "name": "Britton Hill",
      "elevationFt": 345,
      "prominenceFt": 65,
      "lat": 30.9848,
      "lon": -86.2824,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7917"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Sugarloaf Mountain",
      "elevationFt": 310,
      "prominenceFt": 245,
      "lat": 28.6492,
      "lon": -81.7331,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7921"
    }
  },
  {
    "name": "Georgia",
    "abbr": "GA",
    "capital": "Atlanta",
    "highPoint": {
      "name": "Brasstown Bald",
      "elevationFt": 4784,
      "prominenceFt": 2108,
      "lat": 34.8745,
      "lon": -83.8111,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7730"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Brasstown Bald",
      "elevationFt": 4784,
      "prominenceFt": 2108,
      "lat": 34.8745,
      "lon": -83.8111,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7730"
    }
  },
  {
    "name": "Hawaii",
    "abbr": "HI",
    "capital": "Honolulu",
    "highPoint": {
      "name": "Mauna Kea",
      "elevationFt": 13796,
      "prominenceFt": 13796,
      "lat": 19.8207,
      "lon": -155.468,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=11909"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mauna Kea",
      "elevationFt": 13796,
      "prominenceFt": 13796,
      "lat": 19.8207,
      "lon": -155.468,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=11909"
    }
  },
  {
    "name": "Idaho",
    "abbr": "ID",
    "capital": "Boise",
    "highPoint": {
      "name": "Borah Peak",
      "elevationFt": 12665,
      "prominenceFt": 5985,
      "lat": 44.1374,
      "lon": -113.7811,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5142"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Borah Peak",
      "elevationFt": 12665,
      "prominenceFt": 5985,
      "lat": 44.1374,
      "lon": -113.7811,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5142"
    }
  },
  {
    "name": "Illinois",
    "abbr": "IL",
    "capital": "Springfield",
    "highPoint": {
      "name": "Charles Mound",
      "elevationFt": 1235,
      "prominenceFt": 95,
      "lat": 42.5041,
      "lon": -90.2398,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6426"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Williams Hill",
      "elevationFt": 1064,
      "prominenceFt": 624,
      "lat": 37.5824,
      "lon": -88.4757,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6514"
    }
  },
  {
    "name": "Indiana",
    "abbr": "IN",
    "capital": "Indianapolis",
    "highPoint": {
      "name": "Hoosier Hill",
      "elevationFt": 1257,
      "prominenceFt": 297,
      "lat": 40.0012,
      "lon": -84.8487,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6535"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Washington County High Point",
      "elevationFt": 1050,
      "prominenceFt": 420,
      "lat": 38.6415,
      "lon": -85.9872,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6545"
    }
  },
  {
    "name": "Iowa",
    "abbr": "IA",
    "capital": "Des Moines",
    "highPoint": {
      "name": "Hawkeye Point",
      "elevationFt": 1670,
      "prominenceFt": 40,
      "lat": 43.4602,
      "lon": -95.7089,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6217"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Carroll County High Point",
      "elevationFt": 1560,
      "prominenceFt": 330,
      "lat": 41.9924,
      "lon": -95.0735,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6415"
    }
  },
  {
    "name": "Kansas",
    "abbr": "KS",
    "capital": "Topeka",
    "highPoint": {
      "name": "Mount Sunflower",
      "elevationFt": 4039,
      "prominenceFt": 19,
      "lat": 39.022,
      "lon": -102.0371,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6307"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Pottawatomie County High Point",
      "elevationFt": 1560,
      "prominenceFt": 260,
      "lat": 39.5064,
      "lon": -96.3876,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6310"
    }
  },
  {
    "name": "Kentucky",
    "abbr": "KY",
    "capital": "Frankfort",
    "highPoint": {
      "name": "Black Mountain",
      "elevationFt": 4139,
      "prominenceFt": 1899,
      "lat": 36.9143,
      "lon": -82.894,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7464"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Black Mountain",
      "elevationFt": 4139,
      "prominenceFt": 1899,
      "lat": 36.9143,
      "lon": -82.894,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7464"
    }
  },
  {
    "name": "Louisiana",
    "abbr": "LA",
    "capital": "Baton Rouge",
    "highPoint": {
      "name": "Driskill Mountain",
      "elevationFt": 535,
      "prominenceFt": 225,
      "lat": 32.4249,
      "lon": -92.8967,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6630"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Bossier Parish High Point",
      "elevationFt": 470,
      "prominenceFt": 230,
      "lat": 32.9367,
      "lon": -93.7417,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6628"
    }
  },
  {
    "name": "Maine",
    "abbr": "ME",
    "capital": "Augusta",
    "highPoint": {
      "name": "Katahdin",
      "elevationFt": 5267,
      "prominenceFt": 4287,
      "lat": 45.9044,
      "lon": -68.9213,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6820"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Katahdin",
      "elevationFt": 5267,
      "prominenceFt": 4287,
      "lat": 45.9044,
      "lon": -68.9213,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6820"
    }
  },
  {
    "name": "Maryland",
    "abbr": "MD",
    "capital": "Annapolis",
    "highPoint": {
      "name": "Backbone Mountain",
      "elevationFt": 3360,
      "prominenceFt": 80,
      "lat": 39.2374,
      "lon": -79.4855,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7354"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Quirauk Mountain",
      "elevationFt": 2145,
      "prominenceFt": 1465,
      "lat": 39.6968,
      "lon": -77.5126,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7631"
    }
  },
  {
    "name": "Massachusetts",
    "abbr": "MA",
    "capital": "Boston",
    "highPoint": {
      "name": "Mount Greylock",
      "elevationFt": 3492,
      "prominenceFt": 2468,
      "lat": 42.6373,
      "lon": -73.1661,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7065"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Greylock",
      "elevationFt": 3492,
      "prominenceFt": 2468,
      "lat": 42.6373,
      "lon": -73.1661,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7065"
    }
  },
  {
    "name": "Michigan",
    "abbr": "MI",
    "capital": "Lansing",
    "highPoint": {
      "name": "Mount Curwood",
      "elevationFt": 1979,
      "prominenceFt": 166,
      "lat": 46.7032,
      "lon": -88.2395,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6475"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Grove Hill",
      "elevationFt": 1709,
      "prominenceFt": 1044,
      "lat": 44.1376,
      "lon": -85.3446,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6487"
    }
  },
  {
    "name": "Minnesota",
    "abbr": "MN",
    "capital": "Saint Paul",
    "highPoint": {
      "name": "Eagle Mountain",
      "elevationFt": 2301,
      "prominenceFt": 1321,
      "lat": 47.8974,
      "lon": -90.5606,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6440"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Eagle Mountain",
      "elevationFt": 2301,
      "prominenceFt": 1321,
      "lat": 47.8974,
      "lon": -90.5606,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6440"
    }
  },
  {
    "name": "Mississippi",
    "abbr": "MS",
    "capital": "Jackson",
    "highPoint": {
      "name": "Woodall Mountain",
      "elevationFt": 806,
      "prominenceFt": 296,
      "lat": 34.7877,
      "lon": -88.2416,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7505"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Choctaw County High Point",
      "elevationFt": 723,
      "prominenceFt": 383,
      "lat": 33.1284,
      "lon": -89.3106,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7495"
    }
  },
  {
    "name": "Missouri",
    "abbr": "MO",
    "capital": "Jefferson City",
    "highPoint": {
      "name": "Taum Sauk Mountain",
      "elevationFt": 1772,
      "prominenceFt": 512,
      "lat": 37.5713,
      "lon": -90.7291,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6575"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Mudlick Mountain",
      "elevationFt": 1313,
      "prominenceFt": 673,
      "lat": 37.2619,
      "lon": -90.5245,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6579"
    }
  },
  {
    "name": "Montana",
    "abbr": "MT",
    "capital": "Helena",
    "highPoint": {
      "name": "Granite Peak",
      "elevationFt": 12804,
      "prominenceFt": 4764,
      "lat": 45.1634,
      "lon": -109.8073,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5258"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Crazy Peak",
      "elevationFt": 11209,
      "prominenceFt": 5709,
      "lat": 46.0181,
      "lon": -110.2768,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=4905"
    }
  },
  {
    "name": "Nebraska",
    "abbr": "NE",
    "capital": "Lincoln",
    "highPoint": {
      "name": "Panorama Point",
      "elevationFt": 5429,
      "prominenceFt": 29,
      "lat": 41.0077,
      "lon": -104.0314,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6284"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Hogback Mountain",
      "elevationFt": 5062,
      "prominenceFt": 582,
      "lat": 41.6651,
      "lon": -103.7308,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6280"
    }
  },
  {
    "name": "Nevada",
    "abbr": "NV",
    "capital": "Carson City",
    "highPoint": {
      "name": "Boundary Peak",
      "elevationFt": 13141,
      "prominenceFt": 271,
      "lat": 37.8461,
      "lon": -118.3513,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=3625"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Charleston Peak",
      "elevationFt": 11920,
      "prominenceFt": 8245,
      "lat": 36.2716,
      "lon": -115.6956,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=3748"
    }
  },
  {
    "name": "New Hampshire",
    "abbr": "NH",
    "capital": "Concord",
    "highPoint": {
      "name": "Mount Washington",
      "elevationFt": 6286,
      "prominenceFt": 6146,
      "lat": 44.2705,
      "lon": -71.3033,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6960"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Washington",
      "elevationFt": 6286,
      "prominenceFt": 6146,
      "lat": 44.2705,
      "lon": -71.3033,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6960"
    }
  },
  {
    "name": "New Jersey",
    "abbr": "NJ",
    "capital": "Trenton",
    "highPoint": {
      "name": "High Point",
      "elevationFt": 1803,
      "prominenceFt": 901,
      "lat": 41.321,
      "lon": -74.6616,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7553"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "High Point",
      "elevationFt": 1803,
      "prominenceFt": 901,
      "lat": 41.321,
      "lon": -74.6616,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7553"
    }
  },
  {
    "name": "New Mexico",
    "abbr": "NM",
    "capital": "Santa Fe",
    "highPoint": {
      "name": "Wheeler Peak",
      "elevationFt": 13162,
      "prominenceFt": 3401,
      "lat": 36.5569,
      "lon": -105.4169,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5937"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Sierra Blanca Peak",
      "elevationFt": 11975,
      "prominenceFt": 5535,
      "lat": 33.3743,
      "lon": -105.8087,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=4277"
    }
  },
  {
    "name": "New York",
    "abbr": "NY",
    "capital": "Albany",
    "highPoint": {
      "name": "Mount Marcy",
      "elevationFt": 5344,
      "prominenceFt": 4917,
      "lat": 44.1128,
      "lon": -73.9237,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6048"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Marcy",
      "elevationFt": 5344,
      "prominenceFt": 4917,
      "lat": 44.1128,
      "lon": -73.9237,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6048"
    }
  },
  {
    "name": "North Carolina",
    "abbr": "NC",
    "capital": "Raleigh",
    "highPoint": {
      "name": "Mount Mitchell",
      "elevationFt": 6684,
      "prominenceFt": 6089,
      "lat": 35.7648,
      "lon": -82.2651,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7822"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Mitchell",
      "elevationFt": 6684,
      "prominenceFt": 6089,
      "lat": 35.7648,
      "lon": -82.2651,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7822"
    }
  },
  {
    "name": "North Dakota",
    "abbr": "ND",
    "capital": "Bismarck",
    "highPoint": {
      "name": "White Butte",
      "elevationFt": 3508,
      "prominenceFt": 553,
      "lat": 46.387,
      "lon": -103.3026,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6192"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Boundary Butte",
      "elevationFt": 2541,
      "prominenceFt": 1031,
      "lat": 48.9995,
      "lon": -100.43,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6163"
    }
  },
  {
    "name": "Ohio",
    "abbr": "OH",
    "capital": "Columbus",
    "highPoint": {
      "name": "Campbell Hill",
      "elevationFt": 1549,
      "prominenceFt": 639,
      "lat": 40.3703,
      "lon": -83.7201,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6532"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Campbell Hill",
      "elevationFt": 1549,
      "prominenceFt": 639,
      "lat": 40.3703,
      "lon": -83.7201,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6532"
    }
  },
  {
    "name": "Oklahoma",
    "abbr": "OK",
    "capital": "Oklahoma City",
    "highPoint": {
      "name": "Black Mesa",
      "elevationFt": 4973,
      "prominenceFt": 0,
      "lat": 36.9318,
      "lon": -102.9979,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6322"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Sugar Loaf Mountain",
      "elevationFt": 2570,
      "prominenceFt": 1879,
      "lat": 35.0263,
      "lon": -94.4685,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6609"
    }
  },
  {
    "name": "Oregon",
    "abbr": "OR",
    "capital": "Salem",
    "highPoint": {
      "name": "Mount Hood",
      "elevationFt": 11244,
      "prominenceFt": 7711,
      "lat": 45.3735,
      "lon": -121.6959,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2382"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Hood",
      "elevationFt": 11244,
      "prominenceFt": 7711,
      "lat": 45.3735,
      "lon": -121.6959,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2382"
    }
  },
  {
    "name": "Pennsylvania",
    "abbr": "PA",
    "capital": "Harrisburg",
    "highPoint": {
      "name": "Mount Davis",
      "elevationFt": 3213,
      "prominenceFt": 653,
      "lat": 39.786,
      "lon": -79.1768,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7351"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Shade Mountain - Snyder County High Point",
      "elevationFt": 2188,
      "prominenceFt": 1449,
      "lat": 40.699,
      "lon": -77.2217,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7576"
    }
  },
  {
    "name": "Rhode Island",
    "abbr": "RI",
    "capital": "Providence",
    "highPoint": {
      "name": "Jerimoth Hill",
      "elevationFt": 812,
      "prominenceFt": 192,
      "lat": 41.8493,
      "lon": -71.7789,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6771"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Beacon Pole Hill",
      "elevationFt": 552,
      "prominenceFt": 302,
      "lat": 41.9952,
      "lon": -71.4517,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6766"
    }
  },
  {
    "name": "South Carolina",
    "abbr": "SC",
    "capital": "Columbia",
    "highPoint": {
      "name": "Sassafras Mountain",
      "elevationFt": 3553,
      "prominenceFt": 777,
      "lat": 35.0653,
      "lon": -82.7773,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7720"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Hogback Mountain",
      "elevationFt": 3221,
      "prominenceFt": 1105,
      "lat": 35.17,
      "lon": -82.2906,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7718"
    }
  },
  {
    "name": "South Dakota",
    "abbr": "SD",
    "capital": "Pierre",
    "highPoint": {
      "name": "Black Elk Peak",
      "elevationFt": 7231,
      "prominenceFt": 2911,
      "lat": 43.866,
      "lon": -103.5312,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6236"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Black Elk Peak",
      "elevationFt": 7231,
      "prominenceFt": 2911,
      "lat": 43.866,
      "lon": -103.5312,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6236"
    }
  },
  {
    "name": "Tennessee",
    "abbr": "TN",
    "capital": "Nashville",
    "highPoint": {
      "name": "Kuwohi",
      "elevationFt": 6644,
      "prominenceFt": 4510,
      "lat": 35.5629,
      "lon": -83.4985,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7764"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Kuwohi",
      "elevationFt": 6644,
      "prominenceFt": 4510,
      "lat": 35.5629,
      "lon": -83.4985,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7764"
    }
  },
  {
    "name": "Texas",
    "abbr": "TX",
    "capital": "Austin",
    "highPoint": {
      "name": "Guadalupe Peak",
      "elevationFt": 8750,
      "prominenceFt": 3030,
      "lat": 31.8915,
      "lon": -104.8608,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=4297"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Emory Peak",
      "elevationFt": 7833,
      "prominenceFt": 4498,
      "lat": 29.246,
      "lon": -103.3053,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=4333"
    }
  },
  {
    "name": "Utah",
    "abbr": "UT",
    "capital": "Salt Lake City",
    "highPoint": {
      "name": "Kings Peak",
      "elevationFt": 13529,
      "prominenceFt": 6349,
      "lat": 40.7764,
      "lon": -110.373,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5507"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Kings Peak",
      "elevationFt": 13529,
      "prominenceFt": 6349,
      "lat": 40.7764,
      "lon": -110.373,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5507"
    }
  },
  {
    "name": "Vermont",
    "abbr": "VT",
    "capital": "Montpelier",
    "highPoint": {
      "name": "Mount Mansfield",
      "elevationFt": 4395,
      "prominenceFt": 3635,
      "lat": 44.544,
      "lon": -72.8143,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7013"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Mansfield",
      "elevationFt": 4395,
      "prominenceFt": 3635,
      "lat": 44.544,
      "lon": -72.8143,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7013"
    }
  },
  {
    "name": "Virginia",
    "abbr": "VA",
    "capital": "Richmond",
    "highPoint": {
      "name": "Mount Rogers",
      "elevationFt": 5711,
      "prominenceFt": 2431,
      "lat": 36.6599,
      "lon": -81.545,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7796"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Apple Orchard Mountain",
      "elevationFt": 4224,
      "prominenceFt": 2822,
      "lat": 37.5172,
      "lon": -79.5112,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7687"
    }
  },
  {
    "name": "Washington",
    "abbr": "WA",
    "capital": "Olympia",
    "highPoint": {
      "name": "Mount Rainier",
      "elevationFt": 14406,
      "prominenceFt": 13241,
      "lat": 46.8517,
      "lon": -121.7604,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2296"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Mount Rainier",
      "elevationFt": 14406,
      "prominenceFt": 13241,
      "lat": 46.8517,
      "lon": -121.7604,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=2296"
    }
  },
  {
    "name": "West Virginia",
    "abbr": "WV",
    "capital": "Charleston",
    "highPoint": {
      "name": "Spruce Knob",
      "elevationFt": 4864,
      "prominenceFt": 2784,
      "lat": 38.7002,
      "lon": -79.533,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7376"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Spruce Knob",
      "elevationFt": 4864,
      "prominenceFt": 2784,
      "lat": 38.7002,
      "lon": -79.533,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=7376"
    }
  },
  {
    "name": "Wisconsin",
    "abbr": "WI",
    "capital": "Madison",
    "highPoint": {
      "name": "Timms Hill",
      "elevationFt": 1951,
      "prominenceFt": 425,
      "lat": 45.4508,
      "lon": -90.1954,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6466"
    },
    "prominencePoint": {
      "sameAsHighPoint": false,
      "name": "Blue Mounds",
      "elevationFt": 1719,
      "prominenceFt": 934,
      "lat": 43.0282,
      "lon": -89.8526,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=6425"
    }
  },
  {
    "name": "Wyoming",
    "abbr": "WY",
    "capital": "Cheyenne",
    "highPoint": {
      "name": "Gannett Peak",
      "elevationFt": 13810,
      "prominenceFt": 7082,
      "lat": 43.1842,
      "lon": -109.6543,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5352"
    },
    "prominencePoint": {
      "sameAsHighPoint": true,
      "name": "Gannett Peak",
      "elevationFt": 13810,
      "prominenceFt": 7082,
      "lat": 43.1842,
      "lon": -109.6543,
      "peakbaggerUrl": "https://www.peakbagger.com/peak.aspx?pid=5352"
    }
  }
];
