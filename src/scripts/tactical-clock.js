// =====================================================
//  TACTICAL EXPEDITION CHRONOMETER - Unified Script
// =====================================================

const CITY_DATA = [
  ["Europe/London", "London", "United Kingdom", "Europe", 51.5074, -0.1278, 11],
  ["Europe/Madrid", "Madrid", "Spain", "Europe", 40.4168, -3.7038, 657],
  ["Europe/Paris", "Paris", "France", "Europe", 48.8566, 2.3522, 35],
  ["Europe/Berlin", "Berlin", "Germany", "Europe", 52.5200, 13.4050, 34],
  ["Europe/Rome", "Rome", "Italy", "Europe", 41.9028, 12.4964, 21],
  ["Europe/Amsterdam", "Amsterdam", "Netherlands", "Europe", 52.3676, 4.9041, -2],
  ["Europe/Brussels", "Brussels", "Belgium", "Europe", 50.8503, 4.3517, 13],
  ["Europe/Vienna", "Vienna", "Austria", "Europe", 48.2082, 16.3738, 151],
  ["Europe/Zurich", "Zurich", "Switzerland", "Europe", 47.3769, 8.5417, 408],
  ["Europe/Stockholm", "Stockholm", "Sweden", "Europe", 59.3293, 18.0686, 28],
  ["Europe/Oslo", "Oslo", "Norway", "Europe", 59.9139, 10.7522, 23],
  ["Europe/Copenhagen", "Copenhagen", "Denmark", "Europe", 55.6761, 12.5683, 5],
  ["Europe/Helsinki", "Helsinki", "Finland", "Europe", 60.1699, 24.9384, 26],
  ["Europe/Warsaw", "Warsaw", "Poland", "Europe", 52.2297, 21.0122, 100],
  ["Europe/Prague", "Prague", "Czech Republic", "Europe", 50.0755, 14.4378, 200],
  ["Europe/Budapest", "Budapest", "Hungary", "Europe", 47.4979, 19.0402, 102],
  ["Europe/Athens", "Athens", "Greece", "Europe", 37.9838, 23.7275, 70],
  ["Europe/Lisbon", "Lisbon", "Portugal", "Europe", 38.7223, -9.1393, 2],
  ["Europe/Dublin", "Dublin", "Ireland", "Europe", 53.3498, -6.2603, 20],
  ["Europe/Moscow", "Moscow", "Russia", "Europe", 55.7558, 37.6173, 156],
  ["Europe/Istanbul", "Istanbul", "Turkey", "Europe/Asia", 41.0082, 28.9784, 39],
  ["Europe/Kyiv", "Kyiv", "Ukraine", "Europe", 50.4501, 30.5234, 179],
  ["Atlantic/Reykjavik", "Reykjavik", "Iceland", "Europe", 64.1466, -21.9426, 61],
  ["Europe/Bucharest", "Bucharest", "Romania", "Europe", 44.4268, 26.1025, 85],
  ["Europe/Sofia", "Sofia", "Bulgaria", "Europe", 42.6977, 23.3219, 550],
  ["Europe/Belgrade", "Belgrade", "Serbia", "Europe", 44.7866, 20.4489, 117],
  ["Europe/Zagreb", "Zagreb", "Croatia", "Europe", 45.8150, 15.9819, 122],
  ["Europe/Luxembourg", "Luxembourg", "Luxembourg", "Europe", 49.6116, 6.1319, 300],
  ["Europe/Minsk", "Minsk", "Belarus", "Europe", 53.9006, 27.5590, 220],
  ["Europe/Riga", "Riga", "Latvia", "Europe", 56.9496, 24.1052, 7],
  ["Europe/Vilnius", "Vilnius", "Lithuania", "Europe", 54.6872, 25.2797, 112],
  ["Europe/Tallinn", "Tallinn", "Estonia", "Europe", 59.4370, 24.7536, 9],
  ["Europe/Bratislava", "Bratislava", "Slovakia", "Europe", 48.1486, 17.1077, 134],
  ["Europe/Ljubljana", "Ljubljana", "Slovenia", "Europe", 46.0569, 14.5058, 295],
  ["Europe/Malta", "Valletta", "Malta", "Europe", 35.8989, 14.5146, 56],
  ["Europe/Chisinau", "Chisinau", "Moldova", "Europe", 47.0105, 28.8638, 85],
  ["Atlantic/Azores", "Ponta Delgada", "Portugal", "Europe", 37.7412, -25.6756, 30],
  ["America/New_York", "New York", "USA", "North America", 40.7128, -74.0060, 10],
  ["America/Los_Angeles", "Los Angeles", "USA", "North America", 34.0522, -118.2437, 71],
  ["America/Chicago", "Chicago", "USA", "North America", 41.8781, -87.6298, 181],
  ["America/Denver", "Denver", "USA", "North America", 39.7392, -104.9903, 1609],
  ["America/Phoenix", "Phoenix", "USA", "North America", 33.4484, -112.0740, 331],
  ["America/Anchorage", "Anchorage", "USA", "North America", 61.2181, -149.9003, 31],
  ["America/Detroit", "Detroit", "USA", "North America", 42.3314, -83.0458, 183],
  ["America/Indiana/Indianapolis", "Indianapolis", "USA", "North America", 39.7684, -86.1581, 220],
  ["America/Kentucky/Louisville", "Louisville", "USA", "North America", 38.2527, -85.7585, 142],
  ["America/Boise", "Boise", "USA", "North America", 43.6150, -116.2023, 824],
  ["America/Juneau", "Juneau", "USA", "North America", 58.3019, -134.4197, 17],
  ["America/Adak", "Adak", "USA", "North America", 51.8800, -176.6580, 5],
  ["America/Toronto", "Toronto", "Canada", "North America", 43.6532, -79.3832, 76],
  ["America/Vancouver", "Vancouver", "Canada", "North America", 49.2827, -123.1207, 0],
  ["America/Montreal", "Montreal", "Canada", "North America", 45.5017, -73.5673, 36],
  ["America/Halifax", "Halifax", "Canada", "North America", 44.6488, -63.5752, 25],
  ["America/Edmonton", "Edmonton", "Canada", "North America", 53.5461, -113.4938, 645],
  ["America/Winnipeg", "Winnipeg", "Canada", "North America", 49.8951, -97.1384, 239],
  ["America/St_Johns", "St. John's", "Canada", "North America", 47.5615, -52.7126, 63],
  ["America/Mexico_City", "Mexico City", "Mexico", "North America", 19.4326, -99.1332, 2240],
  ["America/Tijuana", "Tijuana", "Mexico", "North America", 32.5149, -117.0382, 20],
  ["America/Monterrey", "Monterrey", "Mexico", "North America", 25.6866, -100.3161, 540],
  ["America/Cancun", "Cancun", "Mexico", "North America", 21.1619, -86.8515, 10],
  ["America/Nuuk", "Nuuk", "Greenland", "North America", 64.1835, -51.7216, 70],
  ["America/Havana", "Havana", "Cuba", "North America", 23.1136, -82.3666, 59],
  ["America/Panama", "Panama City", "Panama", "North America", 8.9824, -79.5199, 2],
  ["America/Costa_Rica", "San Jose", "Costa Rica", "North America", 9.9281, -84.0907, 1170],
  ["America/Guatemala", "Guatemala City", "Guatemala", "North America", 14.6349, -90.5069, 1500],
  ["America/El_Salvador", "San Salvador", "El Salvador", "North America", 13.6929, -89.2182, 658],
  ["America/Tegucigalpa", "Tegucigalpa", "Honduras", "North America", 14.0723, -87.1921, 990],
  ["America/Managua", "Managua", "Nicaragua", "North America", 12.1364, -86.2514, 83],
  ["America/Belize", "Belize City", "Belize", "North America", 17.4995, -88.1976, 2],
  ["America/Jamaica", "Kingston", "Jamaica", "North America", 18.0179, -76.8099, 9],
  ["America/Santo_Domingo", "Santo Domingo", "Dominican Republic", "North America", 18.4861, -69.9312, 14],
  ["America/Puerto_Rico", "San Juan", "Puerto Rico", "North America", 18.4655, -66.1057, 3],
  ["America/Port-au-Prince", "Port-au-Prince", "Haiti", "North America", 18.5944, -72.3074, 98],
  ["America/Nassau", "Nassau", "Bahamas", "North America", 25.0443, -77.3504, 3],
  ["America/Barbados", "Bridgetown", "Barbados", "North America", 13.1132, -59.5988, 1],
  ["America/Port_of_Spain", "Port of Spain", "Trinidad and Tobago", "North America", 10.6549, -61.5019, 12],
  ["America/Bogota", "Bogota", "Colombia", "South America", 4.7110, -74.0721, 2640],
  ["America/Argentina/Buenos_Aires", "Buenos Aires", "Argentina", "South America", -34.6037, -58.3816, 25],
  ["America/Argentina/Cordoba", "Cordoba", "Argentina", "South America", -31.4201, -64.1888, 400],
  ["America/Argentina/Mendoza", "Mendoza", "Argentina", "South America", -32.8895, -68.8458, 746],
  ["America/Sao_Paulo", "Sao Paulo", "Brazil", "South America", -23.5505, -46.6333, 760],
  ["America/Bahia", "Salvador", "Brazil", "South America", -12.9777, -38.5016, 8],
  ["America/Fortaleza", "Fortaleza", "Brazil", "South America", -3.7319, -38.5267, 21],
  ["America/Manaus", "Manaus", "Brazil", "South America", -3.1190, -60.0217, 92],
  ["America/Rio_Branco", "Rio Branco", "Brazil", "South America", -9.9754, -67.8243, 143],
  ["America/Santiago", "Santiago", "Chile", "South America", -33.4489, -70.6693, 570],
  ["America/Lima", "Lima", "Peru", "South America", -12.0464, -77.0428, 154],
  ["America/Caracas", "Caracas", "Venezuela", "South America", 10.4806, -66.9036, 900],
  ["America/Montevideo", "Montevideo", "Uruguay", "South America", -34.9011, -56.1645, 43],
  ["America/Asuncion", "Asuncion", "Paraguay", "South America", -25.2637, -57.5759, 43],
  ["America/La_Paz", "La Paz", "Bolivia", "South America", -16.5000, -68.1500, 3640],
  ["America/Guayaquil", "Guayaquil", "Ecuador", "South America", -2.1700, -79.9224, 4],
  ["America/Guyana", "Georgetown", "Guyana", "South America", 6.8013, -58.1551, 2],
  ["America/Paramaribo", "Paramaribo", "Suriname", "South America", 5.8520, -55.2038, 3],
  ["America/Cayenne", "Cayenne", "French Guiana", "South America", 4.9224, -52.3135, 9],
  ["Asia/Tokyo", "Tokyo", "Japan", "Asia", 35.6762, 139.6503, 40],
  ["Asia/Seoul", "Seoul", "South Korea", "Asia", 37.5665, 126.9780, 38],
  ["Asia/Pyongyang", "Pyongyang", "North Korea", "Asia", 39.0392, 125.7625, 40],
  ["Asia/Shanghai", "Shanghai", "China", "Asia", 31.2304, 121.4737, 4],
  ["Asia/Hong_Kong", "Hong Kong", null, "Asia", 22.3193, 114.1694, 0],
  ["Asia/Macau", "Macau", null, "Asia", 22.1987, 113.5439, 0],
  ["Asia/Taipei", "Taipei", "Taiwan", "Asia", 25.0330, 121.5654, 9],
  ["Asia/Singapore", "Singapore", null, "Asia", 1.3521, 103.8198, 15],
  ["Asia/Kuala_Lumpur", "Kuala Lumpur", "Malaysia", "Asia", 3.1390, 101.6869, 22],
  ["Asia/Brunei", "Bandar Seri Begawan", "Brunei", "Asia", 4.9031, 114.9398, 1],
  ["Asia/Bangkok", "Bangkok", "Thailand", "Asia", 13.7563, 100.5018, 2],
  ["Asia/Jakarta", "Jakarta", "Indonesia", "Asia", -6.2088, 106.8456, 8],
  ["Asia/Makassar", "Makassar", "Indonesia", "Asia", -5.1477, 119.4327, 3],
  ["Asia/Manila", "Manila", "Philippines", "Asia", 14.5995, 120.9842, 5],
  ["Asia/Ho_Chi_Minh", "Ho Chi Minh City", "Vietnam", "Asia", 10.8231, 106.6297, 19],
  ["Asia/Phnom_Penh", "Phnom Penh", "Cambodia", "Asia", 11.5564, 104.9282, 12],
  ["Asia/Vientiane", "Vientiane", "Laos", "Asia", 17.9757, 102.6331, 174],
  ["Asia/Yangon", "Yangon", "Myanmar", "Asia", 16.8409, 96.1735, 23],
  ["Asia/Kolkata", "Delhi", "India", "Asia", 28.6139, 77.2090, 216],
  ["Asia/Dhaka", "Dhaka", "Bangladesh", "Asia", 23.8103, 90.4125, 23],
  ["Asia/Kathmandu", "Kathmandu", "Nepal", "Asia", 27.7172, 85.3240, 1400],
  ["Asia/Thimphu", "Thimphu", "Bhutan", "Asia", 27.4716, 89.6386, 2320],
  ["Asia/Colombo", "Colombo", "Sri Lanka", "Asia", 6.9271, 79.8612, 8],
  ["Indian/Maldives", "Male", "Maldives", "Asia", 4.1755, 73.5093, 1],
  ["Asia/Karachi", "Karachi", "Pakistan", "Asia", 24.8607, 67.0011, 10],
  ["Asia/Kabul", "Kabul", "Afghanistan", "Asia", 34.5553, 69.2075, 1790],
  ["Asia/Tashkent", "Tashkent", "Uzbekistan", "Asia", 41.2995, 69.2401, 455],
  ["Asia/Almaty", "Almaty", "Kazakhstan", "Asia", 43.2389, 76.8897, 800],
  ["Asia/Bishkek", "Bishkek", "Kyrgyzstan", "Asia", 42.8746, 74.5698, 800],
  ["Asia/Dushanbe", "Dushanbe", "Tajikistan", "Asia", 38.5598, 68.7870, 800],
  ["Asia/Ulaanbaatar", "Ulaanbaatar", "Mongolia", "Asia", 47.8864, 106.9057, 1350],
  ["Asia/Yekaterinburg", "Yekaterinburg", "Russia", "Asia", 56.8389, 60.6057, 237],
  ["Asia/Novosibirsk", "Novosibirsk", "Russia", "Asia", 55.0084, 82.9357, 150],
  ["Asia/Vladivostok", "Vladivostok", "Russia", "Asia", 43.1155, 131.8855, 30],
  ["Asia/Baku", "Baku", "Azerbaijan", "Asia", 40.4093, 49.8671, 28],
  ["Asia/Tbilisi", "Tbilisi", "Georgia", "Asia", 41.7151, 44.8271, 490],
  ["Asia/Yerevan", "Yerevan", "Armenia", "Asia", 40.1792, 44.4991, 989],
  ["Asia/Tehran", "Tehran", "Iran", "Asia", 35.6892, 51.3890, 1191],
  ["Asia/Dubai", "Dubai", "UAE", "Middle East", 25.2048, 55.2708, 16],
  ["Asia/Riyadh", "Riyadh", "Saudi Arabia", "Middle East", 24.7136, 46.6753, 612],
  ["Asia/Qatar", "Doha", "Qatar", "Middle East", 25.2854, 51.5310, 10],
  ["Asia/Kuwait", "Kuwait City", "Kuwait", "Middle East", 29.3759, 47.9774, 5],
  ["Asia/Bahrain", "Manama", "Bahrain", "Middle East", 26.2285, 50.5860, 2],
  ["Asia/Muscat", "Muscat", "Oman", "Middle East", 23.5880, 58.3829, 15],
  ["Asia/Baghdad", "Baghdad", "Iraq", "Middle East", 33.3152, 44.3661, 34],
  ["Asia/Jerusalem", "Jerusalem", "Israel", "Middle East", 31.7683, 35.2137, 754],
  ["Asia/Amman", "Amman", "Jordan", "Middle East", 31.9454, 35.9284, 777],
  ["Asia/Beirut", "Beirut", "Lebanon", "Middle East", 33.8938, 35.5018, 0],
  ["Asia/Damascus", "Damascus", "Syria", "Middle East", 33.5138, 36.2765, 700],
  ["Africa/Cairo", "Cairo", "Egypt", "Africa", 30.0444, 31.2357, 23],
  ["Africa/Johannesburg", "Johannesburg", "South Africa", "Africa", -26.2041, 28.0473, 1753],
  ["Africa/Cape_Town", "Cape Town", "South Africa", "Africa", -33.9249, 18.4241, 25],
  ["Africa/Lagos", "Lagos", "Nigeria", "Africa", 6.5244, 3.3792, 41],
  ["Africa/Nairobi", "Nairobi", "Kenya", "Africa", -1.2921, 36.8219, 1795],
  ["Africa/Casablanca", "Casablanca", "Morocco", "Africa", 33.5731, -7.5898, 50],
  ["Africa/Accra", "Accra", "Ghana", "Africa", 5.6037, -0.1870, 61],
  ["Africa/Addis_Ababa", "Addis Ababa", "Ethiopia", "Africa", 9.0320, 38.7469, 2355],
  ["Africa/Algiers", "Algiers", "Algeria", "Africa", 36.7538, 3.0588, 25],
  ["Africa/Tunis", "Tunis", "Tunisia", "Africa", 36.8065, 10.1815, 4],
  ["Africa/Tripoli", "Tripoli", "Libya", "Africa", 32.8872, 13.1913, 11],
  ["Africa/Khartoum", "Khartoum", "Sudan", "Africa", 15.5007, 32.5599, 380],
  ["Africa/Dakar", "Dakar", "Senegal", "Africa", 14.7167, -17.4677, 22],
  ["Africa/Abidjan", "Abidjan", "Ivory Coast", "Africa", 5.3600, -4.0083, 18],
  ["Africa/Bamako", "Bamako", "Mali", "Africa", 12.6392, -8.0029, 350],
  ["Africa/Douala", "Douala", "Cameroon", "Africa", 4.0511, 9.7679, 13],
  ["Africa/Kinshasa", "Kinshasa", "DR Congo", "Africa", -4.4419, 15.2663, 240],
  ["Africa/Luanda", "Luanda", "Angola", "Africa", -8.8383, 13.2344, 6],
  ["Africa/Dar_es_Salaam", "Dar es Salaam", "Tanzania", "Africa", -6.7924, 39.2083, 14],
  ["Africa/Kampala", "Kampala", "Uganda", "Africa", 0.3476, 32.5825, 1190],
  ["Africa/Mogadishu", "Mogadishu", "Somalia", "Africa", 2.0469, 45.3182, 9],
  ["Africa/Maputo", "Maputo", "Mozambique", "Africa", -25.9692, 32.5732, 47],
  ["Africa/Harare", "Harare", "Zimbabwe", "Africa", -17.8252, 31.0335, 1490],
  ["Africa/Lusaka", "Lusaka", "Zambia", "Africa", -15.3875, 28.3228, 1279],
  ["Africa/Windhoek", "Windhoek", "Namibia", "Africa", -22.5609, 17.0658, 1700],
  ["Indian/Antananarivo", "Antananarivo", "Madagascar", "Africa", -18.8792, 47.5079, 1276],
  ["Indian/Mauritius", "Port Louis", "Mauritius", "Africa", -20.1609, 57.5012, 10],
  ["Atlantic/Cape_Verde", "Praia", "Cape Verde", "Africa", 14.9330, -23.5133, 35],
  ["Australia/Sydney", "Sydney", "Australia", "Oceania", -33.8688, 151.2093, 19],
  ["Australia/Melbourne", "Melbourne", "Australia", "Oceania", -37.8136, 144.9631, 31],
  ["Australia/Brisbane", "Brisbane", "Australia", "Oceania", -27.4698, 153.0251, 27],
  ["Australia/Perth", "Perth", "Australia", "Oceania", -31.9505, 115.8605, 31],
  ["Australia/Adelaide", "Adelaide", "Australia", "Oceania", -34.9285, 138.6007, 50],
  ["Australia/Darwin", "Darwin", "Australia", "Oceania", -12.4634, 130.8456, 30],
  ["Australia/Hobart", "Hobart", "Australia", "Oceania", -42.8821, 147.3272, 15],
  ["Pacific/Auckland", "Auckland", "New Zealand", "Oceania", -36.8509, 174.7645, 41],
  ["Pacific/Honolulu", "Honolulu", "Hawaii", "Oceania", 21.3069, -157.8583, 6],
  ["Pacific/Fiji", "Suva", "Fiji", "Oceania", -18.1416, 178.4419, 6],
  ["Pacific/Port_Moresby", "Port Moresby", "Papua New Guinea", "Oceania", -9.4438, 147.1803, 35],
  ["Pacific/Guam", "Hagatna", "Guam", "Oceania", 13.4443, 144.7937, 3],
  ["Pacific/Noumea", "Noumea", "New Caledonia", "Oceania", -22.2711, 166.4416, 10],
  ["Pacific/Tahiti", "Papeete", "French Polynesia", "Oceania", -17.5516, -149.5585, 2],
  ["Pacific/Tongatapu", "Nuku'alofa", "Tonga", "Oceania", -21.1394, -175.2018, 2],
  ["Pacific/Apia", "Apia", "Samoa", "Oceania", -13.8333, -171.7667, 2],
  ["Pacific/Pago_Pago", "Pago Pago", "American Samoa", "Oceania", -14.2756, -170.7020, 3]
];

const HDG_OVERRIDES = {
  "Europe/London": "184° S",
  "Europe/Madrid": "210° SW",
  "America/New_York": "165° SSE",
  "America/Mexico_City": "178° S",
  "America/Bogota": "015° NNE",
  "America/Argentina/Buenos_Aires": "092° E",
  "America/Santiago": "220° SW",
  "Asia/Tokyo": "042° NE",
  "Asia/Dubai": "315° NW",
  "Australia/Sydney": "128° SE"
};

const fmtCoord = (v, pos, neg) => `${Math.abs(v).toFixed(4)}° ${v >= 0 ? pos : neg}`;

function getTzAbbr(tz) {
  try {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone: tz, timeZoneName: "short" }).formatToParts(new Date());
    return parts.find(p => p.type === "timeZoneName")?.value ?? "";
  } catch (e) {
    return "";
  }
}

const cityTelemetry = Object.fromEntries(
  CITY_DATA.map(([tz, city, country, region, latitude, longitude, alt]) => {
    const abbr = getTzAbbr(tz);
    return [tz, {
      label: abbr ? `${city} (${abbr})` : city,
      name: `${city}${country ? ", " + country : ""} · ${region}`,
      coords: `${fmtCoord(latitude, "N", "S")}, ${fmtCoord(longitude, "E", "W")}`,
      alt: `${alt}m MSL`,
      latitude,
      longitude,
      hdg: HDG_OVERRIDES[tz] ?? "--"
    }];
  })
);

const timezoneAliases = {
  "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
  "America/Cordoba": "America/Argentina/Cordoba",
  "America/Mendoza": "America/Argentina/Mendoza",
  "America/Argentina/ComodRivadavia": "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca": "America/Argentina/Cordoba",
  "America/Argentina/Tucuman": "America/Argentina/Cordoba",
  "America/Argentina/Salta": "America/Argentina/Cordoba",
  "America/Argentina/Jujuy": "America/Argentina/Cordoba",
  "America/Argentina/San_Juan": "America/Argentina/Mendoza",
  "America/Indiana/Indianapolis": "America/New_York",
  "America/Detroit": "America/New_York",
  "America/Kentucky/Louisville": "America/New_York",
  "America/Boise": "America/Denver",
  "America/Ciudad_Juarez": "America/Denver",
  "America/Mazatlan": "America/Denver",
  "America/Regina": "America/Winnipeg",
  "America/Godthab": "America/Nuuk",
  "Asia/Calcutta": "Asia/Kolkata",
  "Asia/Saigon": "Asia/Ho_Chi_Minh",
  "Asia/Katmandu": "Asia/Kathmandu",
  "Asia/Rangoon": "Asia/Yangon",
  "Asia/Dacca": "Asia/Dhaka",
  "Asia/Istanbul": "Europe/Istanbul",
  "Europe/Kiev": "Europe/Kyiv",
  "Pacific/Samoa": "Pacific/Pago_Pago",
  "Australia/Canberra": "Australia/Sydney",
  "Australia/NSW": "Australia/Sydney"
};

function getUserTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    return null;
  }
}

function resolveTimezone(val) {
  if (!val || val === "LOCAL_AUTO") {
    const raw = getUserTimezone();
    if (raw && cityTelemetry[raw]) return raw;
    if (raw && timezoneAliases[raw] && cityTelemetry[timezoneAliases[raw]]) return timezoneAliases[raw];
    return "Europe/London";
  }
  if (cityTelemetry[val]) return val;
  if (timezoneAliases[val] && cityTelemetry[timezoneAliases[val]]) return timezoneAliases[val];
  return "Europe/London";
}

const rawUserTimezone = getUserTimezone();
let currentTimezone = resolveTimezone(rawUserTimezone || "Europe/London");

let userGeo = { lat: null, lon: null, alt: null, hasFix: false };

// 'city' = clima de la ciudad seleccionada
// 'user' = clima de GPS del usuario (modo LOCAL_AUTO con fix)
let weatherGeoSource = "city";

// ===================== DOM =====================
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const locationEl = document.getElementById("location-name");
const dateEl = document.getElementById("current-date");
const utcOffsetEl = document.getElementById("utc-offset");
const zuluTimeEl = document.getElementById("zulu-time");
const timezoneSelect = document.getElementById("timezone-select");
const ampmEl = document.getElementById("clock-ampm");

const weatherIconEl = document.getElementById("weather-icon");
const weatherTempEl = document.getElementById("weather-temp");
const weatherFeelsEl = document.getElementById("weather-feels");
const weatherConditionEl = document.getElementById("weather-condition");
const weatherHumidityEl = document.getElementById("weather-humidity");
const weatherWindEl = document.getElementById("weather-wind");
const weatherStatusEl = document.getElementById("weather-status");
const geoCoordsEl = document.getElementById("geo-coords");
const geoAltEl = document.getElementById("geo-alt");
const geoBaroEl = document.getElementById("geo-baro");
const geoHdgEl = document.getElementById("geo-hdg");

const phaseIconEl = document.getElementById("phase-icon");
const phaseNameEl = document.getElementById("phase-name");
const phasePulseDot = document.getElementById("phase-pulse-dot");

function formatUserCoords(lat, lon) {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lon).toFixed(4)}° ${lonDir}`;
}

function applyUserGeoToHeader() {
  if (!userGeo.hasFix || userGeo.lat == null || userGeo.lon == null) return;

  if (geoCoordsEl) {
    geoCoordsEl.textContent = formatUserCoords(userGeo.lat, userGeo.lon);
  }

  const city = cityTelemetry[currentTimezone];
  if (geoAltEl) {
    if (userGeo.alt != null && Number.isFinite(userGeo.alt)) {
      geoAltEl.textContent = `${Math.round(userGeo.alt)}m MSL`;
    } else if (city?.alt) {
      geoAltEl.textContent = city.alt;
    } else {
      geoAltEl.textContent = "-- m MSL";
    }
  }

  const fixLabel = document.getElementById("gps-fix-label");
  if (fixLabel) fixLabel.textContent = "GPS FIX";
}

function applyCityGeoToHeader(data) {
  if (!data) return;
  if (geoCoordsEl) geoCoordsEl.textContent = data.coords;
  if (geoAltEl) geoAltEl.textContent = data.alt || "-- m MSL";
}

// ===================== ATMOSPHERE =====================
const cycleLayers = {
  dawn: document.getElementById("layer-dawn"),
  morning: document.getElementById("layer-morning"),
  noon: document.getElementById("layer-noon"),
  afternoon: document.getElementById("layer-afternoon"),
  sunset: document.getElementById("layer-sunset"),
  night: document.getElementById("layer-night"),
  midnight: document.getElementById("layer-midnight")
};

const cycleConfig = {
  dawn: { name: "DAWN", icon: "wb_twilight", accent: "#f59e0b" },
  morning: { name: "MORNING", icon: "wb_sunny", accent: "#38bdf8" },
  noon: { name: "MIDDAY", icon: "flare", accent: "#ffffff" },
  afternoon: { name: "AFTERNOON", icon: "wb_twilight", accent: "#eab308" },
  sunset: { name: "SUNSET", icon: "filter_drama", accent: "#f43f5e" },
  night: { name: "NIGHT", icon: "dark_mode", accent: "#818cf8" },
  midnight: { name: "MIDNIGHT", icon: "bedtime", accent: "#38bdf8" }
};

function getAutomaticCycle(hours, minutes) {
  const timeVal = hours + minutes / 60;
  if (timeVal >= 5.0 && timeVal < 7.5) return "dawn";
  if (timeVal >= 7.5 && timeVal < 11.5) return "morning";
  if (timeVal >= 11.5 && timeVal < 14.5) return "noon";
  if (timeVal >= 14.5 && timeVal < 18.0) return "afternoon";
  if (timeVal >= 18.0 && timeVal < 20.5) return "sunset";
  if (timeVal >= 20.5) return "night";
  return "midnight";
}

function applyAtmosphericCycle(cycleKey) {
  Object.keys(cycleLayers).forEach((key) => {
    if (cycleLayers[key]) cycleLayers[key].classList.toggle("active", key === cycleKey);
  });
  const info = cycleConfig[cycleKey] || cycleConfig.midnight;
  if (phaseNameEl) phaseNameEl.textContent = info.name;
  if (phaseIconEl) {
    phaseIconEl.textContent = info.icon;
    phaseIconEl.style.color = info.accent;
  }
  if (phasePulseDot) phasePulseDot.style.backgroundColor = info.accent;
}

// ===================== WEATHER =====================
const weatherCodeConfig = {
  0: { condition: "CLEAR SKY", dayIcon: "wb_sunny", nightIcon: "bedtime" },
  1: { condition: "MAINLY CLEAR", dayIcon: "wb_sunny", nightIcon: "bedtime" },
  2: { condition: "PARTLY CLOUDY", dayIcon: "partly_cloudy_day", nightIcon: "partly_cloudy_day" },
  3: { condition: "OVERCAST", dayIcon: "cloud", nightIcon: "cloud" },
  45: { condition: "FOG", dayIcon: "foggy", nightIcon: "foggy" },
  48: { condition: "RIME FOG", dayIcon: "foggy", nightIcon: "foggy" },
  51: { condition: "LIGHT DRIZZLE", dayIcon: "rainy", nightIcon: "rainy" },
  53: { condition: "DRIZZLE", dayIcon: "rainy", nightIcon: "rainy" },
  55: { condition: "DENSE DRIZZLE", dayIcon: "rainy", nightIcon: "rainy" },
  61: { condition: "LIGHT RAIN", dayIcon: "rainy", nightIcon: "rainy" },
  63: { condition: "RAIN", dayIcon: "rainy", nightIcon: "rainy" },
  65: { condition: "HEAVY RAIN", dayIcon: "rainy", nightIcon: "rainy" },
  71: { condition: "LIGHT SNOW", dayIcon: "weather_snowy", nightIcon: "weather_snowy" },
  73: { condition: "SNOW", dayIcon: "weather_snowy", nightIcon: "weather_snowy" },
  75: { condition: "HEAVY SNOW", dayIcon: "weather_snowy", nightIcon: "weather_snowy" },
  80: { condition: "LIGHT RAIN SHOWERS", dayIcon: "rainy", nightIcon: "rainy" },
  81: { condition: "RAIN SHOWERS", dayIcon: "rainy", nightIcon: "rainy" },
  82: { condition: "HEAVY RAIN SHOWERS", dayIcon: "rainy", nightIcon: "rainy" },
  95: { condition: "THUNDERSTORM", dayIcon: "thunderstorm", nightIcon: "thunderstorm" },
  96: { condition: "THUNDERSTORM / HAIL", dayIcon: "thunderstorm", nightIcon: "thunderstorm" },
  99: { condition: "SEVERE THUNDERSTORM / HAIL", dayIcon: "thunderstorm", nightIcon: "thunderstorm" }
};
const windDirections = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
let weatherRequest;

function getWeatherCoords() {
  const city = cityTelemetry[currentTimezone];

  if (weatherGeoSource === "user" && userGeo.hasFix && userGeo.lat != null && userGeo.lon != null) {
    return { lat: userGeo.lat, lon: userGeo.lon, from: "user" };
  }

  if (city?.latitude != null && city?.longitude != null) {
    return { lat: city.latitude, lon: city.longitude, from: "city" };
  }

  if (userGeo.hasFix && userGeo.lat != null && userGeo.lon != null) {
    return { lat: userGeo.lat, lon: userGeo.lon, from: "user-fallback" };
  }

  return null;
}

function populateTimezoneSelect() {
  if (!timezoneSelect) return;

  const localOpt = document.createElement("option");
  localOpt.value = "LOCAL_AUTO";
  localOpt.className = "bg-neutral-950 text-white font-semibold";
  localOpt.textContent = "LOCAL / AUTO (SYSTEM)";

  const entries = Object.entries(cityTelemetry);
  entries.sort(([tzA], [tzB]) => {
    return cityTelemetry[tzA].label.localeCompare(cityTelemetry[tzB].label);
  });

  const cityOpts = entries.map(([timezone, city]) => {
    const option = document.createElement("option");
    option.className = "bg-neutral-950 text-white";
    option.value = timezone;
    option.textContent = city.label;
    option.selected = timezone === currentTimezone;
    return option;
  });

  timezoneSelect.replaceChildren(localOpt, ...cityOpts);

  // Si el tz resuelto coincide con el del sistema, marcar LOCAL_AUTO
  const systemResolved = resolveTimezone("LOCAL_AUTO");
  if (systemResolved === currentTimezone) {
    localOpt.selected = true;
    cityOpts.forEach((o) => { o.selected = false; });
  }
}

async function updateWeatherTelemetry() {
  const data = cityTelemetry[currentTimezone];
  const coords = getWeatherCoords();
  if (!coords) return;

  const { lat, lon, from } = coords;

  if (locationEl && data) locationEl.textContent = data.name;

  // Header geo: GPS solo si la fuente de clima es user; si no, ciudad
  if (from === "user" || from === "user-fallback") {
    applyUserGeoToHeader();
  } else if (data) {
    applyCityGeoToHeader(data);
  }

  if (geoHdgEl && data) geoHdgEl.textContent = data.hdg;

  const headingMatch = data?.hdg?.match?.(/(\d+)/);
  if (headingMatch && typeof isCompassLocked !== "undefined" && !isCompassLocked) {
    if (typeof compassMode === "undefined" || compassMode !== "device") {
      targetHeading = parseInt(headingMatch[1], 10);
    }
  }

  weatherRequest?.abort();
  weatherRequest = new AbortController();
  const { signal } = weatherRequest;
  if (weatherConditionEl) weatherConditionEl.textContent = "FETCHING LIVE WEATHER";
  if (weatherStatusEl) weatherStatusEl.textContent = "Loading live weather data";

  const query = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,pressure_msl",
    wind_speed_unit: "kmh",
    timezone: currentTimezone,
    forecast_days: "1"
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const result = await response.json();
    const current = result.current;
    if (!current || !Number.isFinite(current.temperature_2m)) throw new Error("Invalid data");

    const weather = weatherCodeConfig[current.weather_code] ?? {
      condition: `CODE ${current.weather_code}`,
      dayIcon: "cloud",
      nightIcon: "cloud"
    };
    const windDirection = windDirections[Math.round(current.wind_direction_10m / 22.5) % 16];

    if (weatherTempEl) weatherTempEl.textContent = `${Math.round(current.temperature_2m)}°C`;
    if (weatherFeelsEl) weatherFeelsEl.textContent = `FEELS ${Math.round(current.apparent_temperature)}°C`;
    if (weatherConditionEl) weatherConditionEl.textContent = weather.condition;
    if (weatherIconEl) weatherIconEl.textContent = current.is_day ? weather.dayIcon : weather.nightIcon;
    if (weatherHumidityEl) weatherHumidityEl.textContent = `${Math.round(current.relative_humidity_2m)}%`;
    if (weatherWindEl) weatherWindEl.textContent = `${Math.round(current.wind_speed_10m)} km/h ${windDirection}`;
    if (geoBaroEl) geoBaroEl.textContent = `${Math.round(current.pressure_msl)} hPa`;
    if (weatherStatusEl) weatherStatusEl.textContent = `Live weather updated (${from})`;
  } catch (error) {
    if (signal.aborted) return;
    if (weatherTempEl) weatherTempEl.textContent = "--°C";
    if (weatherFeelsEl) weatherFeelsEl.textContent = "FEELS --°C";
    if (weatherConditionEl) weatherConditionEl.textContent = "WEATHER UNAVAILABLE";
    if (weatherIconEl) weatherIconEl.textContent = "cloud_off";
    if (weatherHumidityEl) weatherHumidityEl.textContent = "--%";
    if (weatherWindEl) weatherWindEl.textContent = "-- km/h --";
    if (geoBaroEl) geoBaroEl.textContent = "-- hPa";
    if (weatherStatusEl) weatherStatusEl.textContent = "Weather unavailable";
  }
}

// ===================== AUDIO =====================
let audioCtx = null;
function initAudioContext() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
}

// Classic digital-watch beep (square wave, hard on/off with tiny ramps to avoid clicks)
function playBeep(freq = 2048, durationMs = 90, delayMs = 0, volume = 0.12) {
  if (!audioCtx || audioCtx.state !== "running") return;
  const t = audioCtx.currentTime + delayMs / 1000;
  const end = t + durationMs / 1000;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.004);
  gain.gain.setValueAtTime(volume, end - 0.004);
  gain.gain.linearRampToValueAtTime(0.0001, end);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(end + 0.01);
}

// Hourly chime: two short beeps ("beep-beep")
function playHourlyChime() {
  playBeep(2048, 90, 0);
  playBeep(2048, 90, 180);
}

// ===================== TIMER ALARM =====================
const ALARM_DURATION_MS = 30000;
const silenceAlarmBtn = document.getElementById("silence-alarm-btn");
let alarmInterval = null;
let alarmStopTimeout = null;

function playAlarmBurst() {
  // Classic "beep-beep-beep-beep" pattern
  for (let i = 0; i < 4; i++) playBeep(2048, 70, i * 125, 0.14);
}

function startTimerAlarm() {
  stopTimerAlarm();
  initAudioContext();
  playAlarmBurst();
  alarmInterval = setInterval(playAlarmBurst, 1000);
  alarmStopTimeout = setTimeout(stopTimerAlarm, ALARM_DURATION_MS);
  if (silenceAlarmBtn) silenceAlarmBtn.style.display = "";
  missionTimerEl?.classList.add("animate-pulse");
}

function stopTimerAlarm() {
  const wasActive = alarmInterval !== null;
  if (alarmInterval) { clearInterval(alarmInterval); alarmInterval = null; }
  if (alarmStopTimeout) { clearTimeout(alarmStopTimeout); alarmStopTimeout = null; }
  if (silenceAlarmBtn) silenceAlarmBtn.style.display = "none";
  missionTimerEl?.classList.remove("animate-pulse");
  if (wasActive) renderTimerUI();
}

silenceAlarmBtn?.addEventListener("click", () => stopTimerAlarm());

// ===================== TIMER =====================
let timerTotalSeconds = 0;
let timerMode = "countdown";
let timerState = "STANDBY";
let lastTimerTickTime = Date.now();
let currentPomoLabel = "";

const missionTimerEl = document.getElementById("mission-timer");
const timerStatusBadge = document.getElementById("timer-status-badge");
const timerToggleBtn = document.getElementById("timer-toggle-btn");
const timerToggleIcon = document.getElementById("timer-toggle-icon");
const timerToggleLabel = document.getElementById("timer-toggle-label");
const chronoResetBtn = document.getElementById("chrono-reset-btn");
const btnClearTimer = document.getElementById("btn-clear-timer");
const pomoBadge = document.getElementById("pomo-mode-badge");

function formatTime(totalSec) {
  const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
  const s = String(totalSec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function renderTimerUI() {
  if (!missionTimerEl) return;
  missionTimerEl.textContent = formatTime(timerTotalSeconds);
  if (pomoBadge) {
    if (timerMode === "pomo") {
      pomoBadge.classList.remove("hidden");
      pomoBadge.textContent = currentPomoLabel || "POMODORO";
    } else pomoBadge.classList.add("hidden");
  }
  if (timerState === "RUNNING") {
    if (timerStatusBadge) timerStatusBadge.textContent = "RUNNING";
    if (timerToggleLabel) timerToggleLabel.textContent = "PAUSE";
    if (timerToggleIcon) timerToggleIcon.textContent = "pause";
  } else if (timerState === "PAUSED") {
    if (timerStatusBadge) timerStatusBadge.textContent = "PAUSED";
    if (timerToggleLabel) timerToggleLabel.textContent = "RESUME";
    if (timerToggleIcon) timerToggleIcon.textContent = "play_arrow";
  } else {
    if (timerStatusBadge) timerStatusBadge.textContent = alarmInterval ? "TIME UP" : "STANDBY";
    if (timerToggleLabel) timerToggleLabel.textContent = "START";
    if (timerToggleIcon) timerToggleIcon.textContent = "play_arrow";
  }
}

function stepTimer() {
  const now = Date.now();
  const elapsed = Math.floor((now - lastTimerTickTime) / 1000);
  if (elapsed >= 1) {
    lastTimerTickTime = now - ((now - lastTimerTickTime) % 1000);
    if (timerState === "RUNNING") {
      if (timerMode === "countdown" || timerMode === "pomo") {
        timerTotalSeconds = Math.max(0, timerTotalSeconds - elapsed);
        if (timerTotalSeconds === 0) {
          timerState = "STANDBY";
          startTimerAlarm();
        }
      } else timerTotalSeconds += elapsed;
      renderTimerUI();
    }
  }
}

timerToggleBtn?.addEventListener("click", () => {
  initAudioContext();
  stopTimerAlarm();
  if (timerState === "RUNNING") timerState = "PAUSED";
  else {
    if (timerTotalSeconds === 0) timerMode = "countup";
    timerState = "RUNNING";
    lastTimerTickTime = Date.now();
  }
  renderTimerUI();
});

chronoResetBtn?.addEventListener("click", () => {
  initAudioContext();
  stopTimerAlarm();
  timerTotalSeconds = 0;
  timerMode = "countdown";
  timerState = "STANDBY";
  lastTimerTickTime = Date.now();
  renderTimerUI();
});

btnClearTimer?.addEventListener("click", () => {
  initAudioContext();
  stopTimerAlarm();
  timerTotalSeconds = 0;
  timerMode = "countdown";
  timerState = "STANDBY";
  renderTimerUI();
});

function adjustTimerSeconds(amount) {
  initAudioContext();
  stopTimerAlarm();
  timerTotalSeconds = Math.max(0, timerTotalSeconds + amount);
  timerMode = "countdown";
  renderTimerUI();
}

document.getElementById("btn-sub-min")?.addEventListener("click", () => adjustTimerSeconds(-60));
document.getElementById("btn-add-min")?.addEventListener("click", () => adjustTimerSeconds(60));
document.getElementById("btn-add-5m")?.addEventListener("click", () => adjustTimerSeconds(300));
document.getElementById("btn-add-10m")?.addEventListener("click", () => adjustTimerSeconds(600));

document.querySelectorAll("[data-preset]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    initAudioContext();
    stopTimerAlarm();
    timerTotalSeconds = parseInt(e.currentTarget.getAttribute("data-preset"), 10);
    timerMode = "countdown";
    timerState = "RUNNING";
    lastTimerTickTime = Date.now();
    renderTimerUI();
  });
});

document.querySelectorAll("[data-pomo]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    initAudioContext();
    stopTimerAlarm();
    timerTotalSeconds = parseInt(e.currentTarget.getAttribute("data-pomo"), 10);
    timerMode = "pomo";
    currentPomoLabel = e.currentTarget.textContent.trim();
    timerState = "RUNNING";
    lastTimerTickTime = Date.now();
    renderTimerUI();
  });
});

renderTimerUI();

// ===================== COMPASS =====================
let currentHeading = 184;
let targetHeading = 184;
let isCompassLocked = false;
let compassViewMode = "dial";
let compassMode = "city";
let deviceOrientationActive = false;
let deviceHeadingOffset = 0;

const compassSvg = document.getElementById("compass-svg");
const compassDegreesEl = document.getElementById("compass-degrees");
const compassCardinalEl = document.getElementById("compass-cardinal");
const compassLockBtn = document.getElementById("compass-lock-btn");
const compassLockIndicator = document.getElementById("compass-lock-indicator");
const compassModeBtn = document.getElementById("compass-mode-btn");
const compassDialContainer = document.getElementById("compass-dial-container");
const compassTapeStrip = document.getElementById("compass-tape-strip");
const azimuthMilsEl = document.getElementById("azimuth-mils");
const btnRecalibrateCompass = document.getElementById("btn-recalibrate-compass");
const compassSourceEl = document.getElementById("compass-source");
const compassDeviceBtn = document.getElementById("compass-device-btn");

function setCompassSourceLabel(text) {
  if (compassSourceEl) compassSourceEl.textContent = text;
}

function getCardinalDirection(deg) {
  const d = ((deg % 360) + 360) % 360;
  const cardinals = [
    { name: "N", deg: 0 }, { name: "NNE", deg: 22.5 }, { name: "NE", deg: 45 }, { name: "ENE", deg: 67.5 },
    { name: "E", deg: 90 }, { name: "ESE", deg: 112.5 }, { name: "SE", deg: 135 }, { name: "SSE", deg: 157.5 },
    { name: "S", deg: 180 }, { name: "SSW", deg: 202.5 }, { name: "SW", deg: 225 }, { name: "WSW", deg: 247.5 },
    { name: "W", deg: 270 }, { name: "WNW", deg: 292.5 }, { name: "NW", deg: 315 }, { name: "NNW", deg: 337.5 }
  ];
  let closest = cardinals[0];
  let minDiff = 360;
  cardinals.forEach((c) => {
    let diff = Math.abs(d - c.deg);
    if (diff > 180) diff = 360 - diff;
    if (diff < minDiff) { minDiff = diff; closest = c; }
  });
  return closest.name;
}

function buildCompassTape() {
  if (!compassTapeStrip) return;
  compassTapeStrip.innerHTML = "";
  for (let deg = -45; deg <= 405; deg += 15) {
    const normDeg = ((deg % 360) + 360) % 360;
    let label = `${normDeg}°`;
    let colorClass = "text-neutral-500";
    if (normDeg === 0) { label = "N"; colorClass = "text-white font-bold"; }
    else if (normDeg === 90) { label = "E"; colorClass = "text-white font-bold"; }
    else if (normDeg === 180) { label = "S"; colorClass = "text-white font-bold"; }
    else if (normDeg === 270) { label = "W"; colorClass = "text-white font-bold"; }
    const span = document.createElement("span");
    span.className = `inline-flex flex-col items-center justify-center shrink-0 w-8 ${colorClass}`;
    span.innerHTML = `<span class="h-1.5 w-px ${normDeg % 45 === 0 ? "bg-neutral-300 h-2.5" : "bg-neutral-700"}"></span><span class="text-[8px] mt-0.5">${label}</span>`;
    compassTapeStrip.appendChild(span);
  }
}
buildCompassTape();

function updateCompassDisplay(deg) {
  const roundedDeg = Math.round(((deg % 360) + 360) % 360);
  const cardinal = getCardinalDirection(deg);
  const mils = Math.round(roundedDeg * (6400 / 360));
  if (compassDegreesEl) compassDegreesEl.textContent = `${String(roundedDeg).padStart(3, "0")}°`;
  if (compassCardinalEl) compassCardinalEl.textContent = cardinal;
  if (azimuthMilsEl) azimuthMilsEl.textContent = `${mils} MIL`;
  if (compassSvg) compassSvg.style.transform = `rotate(${-deg}deg)`;
  if (compassTapeStrip) {
    const pxPerDegree = 32 / 15;
    const offsetPx = (deg + 45) * pxPerDegree;
    compassTapeStrip.style.transform = `translateX(calc(50% - ${offsetPx}px))`;
  }
  if (geoHdgEl) geoHdgEl.textContent = `${String(roundedDeg).padStart(3, "0")}° ${cardinal}`;
}

function animateCompassHeading() {
  if (!isCompassLocked) {
    const drift = compassMode === "device" ? 0 : Math.sin(Date.now() / 1400) * 0.35;
    let diff = targetHeading + drift - currentHeading;
    while (diff < -180) diff += 360;
    while (diff > 180) diff -= 360;
    const lerp = compassMode === "device" ? 0.25 : 0.12;
    currentHeading = (currentHeading + diff * lerp + 360) % 360;
  }
  updateCompassDisplay(currentHeading);
  requestAnimationFrame(animateCompassHeading);
}
requestAnimationFrame(animateCompassHeading);

function parseHeadingValue(raw) {
  if (raw == null) return null;
  const num = parseFloat(String(raw).replace(",", "."));
  if (Number.isNaN(num)) return null;
  return ((num % 360) + 360) % 360;
}

function getHeadingForCurrentCity() {
  const tz = currentTimezone || timezoneSelect?.value || null;
  if (!tz) return 184;
  if (HDG_OVERRIDES[tz] != null) {
    const h = parseHeadingValue(HDG_OVERRIDES[tz]);
    if (h != null) return h;
  }
  const c = cityTelemetry[tz];
  if (c) {
    const h = parseHeadingValue(c.hdg);
    if (h != null) return h;
  }
  let hash = 0;
  for (let i = 0; i < tz.length; i++) hash = (hash * 31 + tz.charCodeAt(i)) >>> 0;
  return hash % 360;
}

function syncCompassToSelectedCity(force = false) {
  if (compassMode === "device") return;
  if (isCompassLocked && !force) return;
  compassMode = "city";
  targetHeading = getHeadingForCurrentCity();
  setCompassSourceLabel("CITY HDG");
}

function normalizeDeviceHeading(event) {
  if (typeof event.webkitCompassHeading === "number") return event.webkitCompassHeading;
  if (event.absolute === true && typeof event.alpha === "number") return (360 - event.alpha) % 360;
  if (typeof event.alpha === "number") return (360 - event.alpha) % 360;
  return null;
}

function onDeviceOrientation(event) {
  if (compassMode !== "device" || isCompassLocked) return;
  const heading = normalizeDeviceHeading(event);
  if (heading == null) return;
  targetHeading = (heading + deviceHeadingOffset + 360) % 360;
  setCompassSourceLabel("DEVICE COMPASS");
}

async function enableDeviceCompass() {
  if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
    try {
      const permission = await DeviceOrientationEvent.requestPermission();
      if (permission !== "granted") {
        setCompassSourceLabel("PERMISSION DENIED");
        compassMode = "city";
        syncCompassToSelectedCity(true);
        return false;
      }
    } catch (e) {
      setCompassSourceLabel("PERMISSION ERROR");
      compassMode = "city";
      return false;
    }
  }
  if (!window.DeviceOrientationEvent) {
    setCompassSourceLabel("NO SENSOR");
    compassMode = "city";
    syncCompassToSelectedCity(true);
    return false;
  }
  if (!deviceOrientationActive) {
    window.addEventListener("deviceorientation", onDeviceOrientation, true);
    window.addEventListener("deviceorientationabsolute", onDeviceOrientation, true);
    deviceOrientationActive = true;
  }
  compassMode = "device";
  isCompassLocked = false;
  if (compassLockBtn) compassLockBtn.textContent = "LOCK";
  if (compassLockIndicator) compassLockIndicator.textContent = "UNLOCKED";
  setCompassSourceLabel("DEVICE COMPASS");
  return true;
}

function disableDeviceCompass() {
  if (deviceOrientationActive) {
    window.removeEventListener("deviceorientation", onDeviceOrientation, true);
    window.removeEventListener("deviceorientationabsolute", onDeviceOrientation, true);
    deviceOrientationActive = false;
  }
}

compassDeviceBtn?.addEventListener("click", async () => {
  initAudioContext();
  if (compassMode === "device") {
    disableDeviceCompass();
    compassMode = "city";
    syncCompassToSelectedCity(true);
    compassDeviceBtn.textContent = "SENSOR";
  } else {
    const ok = await enableDeviceCompass();
    compassDeviceBtn.textContent = ok ? "SENSOR ON" : "SENSOR";
  }
});

let isDraggingCompass = false;
let dragStartAngle = 0;
let dragStartHeading = 0;

function getAngleFromCenter(e, el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const rad = Math.atan2(clientY - cy, clientX - cx);
  return ((rad * 180) / Math.PI + 90 + 360) % 360;
}

if (compassDialContainer) {
  compassDialContainer.addEventListener("mousedown", (e) => {
    if (isCompassLocked) return;
    isDraggingCompass = true;
    compassMode = "manual";
    disableDeviceCompass();
    setCompassSourceLabel("MANUAL");
    dragStartAngle = getAngleFromCenter(e, compassDialContainer);
    dragStartHeading = targetHeading;
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDraggingCompass || isCompassLocked) return;
    targetHeading = (dragStartHeading + (getAngleFromCenter(e, compassDialContainer) - dragStartAngle) + 360) % 360;
  });
  window.addEventListener("mouseup", () => { isDraggingCompass = false; });
  compassDialContainer.addEventListener("touchstart", (e) => {
    if (isCompassLocked) return;
    isDraggingCompass = true;
    compassMode = "manual";
    disableDeviceCompass();
    setCompassSourceLabel("MANUAL");
    dragStartAngle = getAngleFromCenter(e, compassDialContainer);
    dragStartHeading = targetHeading;
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (!isDraggingCompass || isCompassLocked) return;
    targetHeading = (dragStartHeading + (getAngleFromCenter(e, compassDialContainer) - dragStartAngle) + 360) % 360;
  }, { passive: true });
  window.addEventListener("touchend", () => { isDraggingCompass = false; });
}

compassLockBtn?.addEventListener("click", () => {
  initAudioContext();
  isCompassLocked = !isCompassLocked;
  compassLockBtn.textContent = isCompassLocked ? "UNLOCK" : "LOCK";
  if (compassLockIndicator) compassLockIndicator.textContent = isCompassLocked ? "LOCKED" : "UNLOCKED";
});

compassModeBtn?.addEventListener("click", () => {
  initAudioContext();
  compassViewMode = compassViewMode === "dial" ? "tape" : "dial";
  compassModeBtn.textContent = compassViewMode === "dial" ? "MODE: DIAL" : "MODE: TAPE";
});

btnRecalibrateCompass?.addEventListener("click", () => {
  initAudioContext();
  isCompassLocked = false;
  if (compassMode === "device") {
    deviceHeadingOffset = (deviceHeadingOffset - currentHeading + 360) % 360;
    targetHeading = 0;
    currentHeading = 0;
    setCompassSourceLabel("DEVICE · CALIBRATED");
  } else {
    compassMode = "city";
    targetHeading = 0;
    currentHeading = 0;
    setCompassSourceLabel("CALIBRATED 0°");
  }
});

btnRecalibrateCompass?.addEventListener("dblclick", async (e) => {
  e.preventDefault();
  initAudioContext();
  await enableDeviceCompass();
});

syncCompassToSelectedCity(true);

// ===================== BEACONS =====================
function playTacticalWhistleBlast(duration = 1.35) {
  initAudioContext();
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.0001, t);
  masterGain.gain.linearRampToValueAtTime(0.48, t + 0.04);
  masterGain.gain.setValueAtTime(0.48, t + duration - 0.15);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  const lfo = audioCtx.createOscillator();
  lfo.frequency.setValueAtTime(24, t);
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.setValueAtTime(120, t);
  lfo.connect(lfoGain);
  const osc1 = audioCtx.createOscillator();
  osc1.type = "triangle";
  osc1.frequency.setValueAtTime(2820, t);
  lfoGain.connect(osc1.frequency);
  const osc2 = audioCtx.createOscillator();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(3160, t);
  lfoGain.connect(osc2.frequency);
  osc1.connect(masterGain);
  osc2.connect(masterGain);
  masterGain.connect(audioCtx.destination);
  lfo.start(t); osc1.start(t); osc2.start(t);
  lfo.stop(t + duration); osc1.stop(t + duration); osc2.stop(t + duration);
}

const whistleToggleBtn = document.getElementById("whistle-toggle-btn");
const whistleLabel = document.getElementById("whistle-label");
whistleToggleBtn?.addEventListener("click", () => {
  initAudioContext();
  whistleToggleBtn.classList.add("whistle-active-pulse");
  if (whistleLabel) whistleLabel.textContent = "BLOWING...";
  playTacticalWhistleBlast(1.4);
  setTimeout(() => {
    whistleToggleBtn.classList.remove("whistle-active-pulse");
    if (whistleLabel) whistleLabel.textContent = "WHISTLE";
  }, 1450);
});

const torchFieldBtn = document.getElementById("torch-field-btn");
const torchScreenOverlay = document.getElementById("torch-screen-overlay");
if (torchFieldBtn && torchScreenOverlay) {
  torchFieldBtn.addEventListener("click", () => {
    const isClosed = torchScreenOverlay.classList.contains("hidden");
    if (isClosed) {
      torchScreenOverlay.classList.remove("hidden");
      torchScreenOverlay.classList.add("flex");
    } else {
      torchScreenOverlay.classList.add("hidden");
      torchScreenOverlay.classList.remove("flex");
    }
  });
  torchScreenOverlay.addEventListener("click", () => {
    torchScreenOverlay.classList.add("hidden");
    torchScreenOverlay.classList.remove("flex");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !torchScreenOverlay.classList.contains("hidden")) {
      torchScreenOverlay.classList.add("hidden");
      torchScreenOverlay.classList.remove("flex");
    }
  });
}

const torchToggle = document.getElementById("torch-toggle");
const torchLabel = document.getElementById("torch-label");
const strobeOverlay = document.getElementById("strobe-screen-overlay");
let strobeActive = false;
let strobeInterval = null;

function startTacticalStrobe() {
  strobeActive = true;
  if (strobeOverlay) {
    strobeOverlay.classList.remove("hidden");
    strobeOverlay.style.backgroundColor = "#ffffff";
  }
  if (torchLabel) torchLabel.textContent = "STROBING";
  let phase = 0;
  strobeInterval = setInterval(() => {
    phase++;
    const pattern = phase % 8;
    const flash = pattern === 0 || pattern === 2 || pattern === 4;
    if (strobeOverlay) strobeOverlay.style.opacity = flash ? "1" : "0";
  }, 40);
}

function stopTacticalStrobe() {
  strobeActive = false;
  if (strobeInterval) { clearInterval(strobeInterval); strobeInterval = null; }
  if (strobeOverlay) {
    strobeOverlay.style.opacity = "0";
    strobeOverlay.classList.add("hidden");
  }
  if (torchLabel) torchLabel.textContent = "STROBE";
}

torchToggle?.addEventListener("click", () => {
  initAudioContext();
  if (strobeActive) stopTacticalStrobe();
  else startTacticalStrobe();
});

(function initEmergencySOS() {
  const sosBtn = document.getElementById("sos-toggle-btn");
  const activeStatus = document.getElementById("sos-active-status");
  const sosFreqLabel = document.getElementById("sos-freq-label");
  const sosBtnLabel = document.getElementById("sos-btn-label");
  const pips = Array.from(document.querySelectorAll(".morse-pip"));
  let isSosActive = false;
  let sosLoopTimeouts = [];
  const morsePattern = [
    { pipIndex: 0, duration: 120, pause: 120 },
    { pipIndex: 1, duration: 120, pause: 120 },
    { pipIndex: 2, duration: 120, pause: 300 },
    { pipIndex: 3, duration: 360, pause: 120 },
    { pipIndex: 4, duration: 360, pause: 120 },
    { pipIndex: 5, duration: 360, pause: 300 },
    { pipIndex: 6, duration: 120, pause: 120 },
    { pipIndex: 7, duration: 120, pause: 120 },
    { pipIndex: 8, duration: 120, pause: 1200 }
  ];

  function playMorseTone(durationMs) {
    initAudioContext();
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + durationMs / 1000);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + durationMs / 1000);
  }

  function stopSosBeacon() {
    isSosActive = false;
    sosLoopTimeouts.forEach((t) => clearTimeout(t));
    sosLoopTimeouts = [];
    pips.forEach((p) => p.classList.remove("lit"));
    if (sosBtnLabel) sosBtnLabel.textContent = "SOS DISTRESS";
    if (activeStatus) { activeStatus.classList.remove("inline-flex"); activeStatus.classList.add("hidden"); }
    if (sosFreqLabel) sosFreqLabel.classList.remove("hidden");
  }

  function playSosSequence() {
    if (!isSosActive) return;
    let currentDelay = 0;
    morsePattern.forEach((step) => {
      sosLoopTimeouts.push(setTimeout(() => {
        if (!isSosActive) return;
        playMorseTone(step.duration);
        document.getElementById("pip-" + step.pipIndex)?.classList.add("lit");
      }, currentDelay));
      sosLoopTimeouts.push(setTimeout(() => {
        document.getElementById("pip-" + step.pipIndex)?.classList.remove("lit");
      }, currentDelay + step.duration));
      currentDelay += step.duration + step.pause;
    });
    sosLoopTimeouts.push(setTimeout(() => { if (isSosActive) playSosSequence(); }, currentDelay));
  }

  sosBtn?.addEventListener("click", () => {
    if (isSosActive) stopSosBeacon();
    else {
      isSosActive = true;
      initAudioContext();
      if (sosBtnLabel) sosBtnLabel.textContent = "TRANSMITTING";
      if (activeStatus) { activeStatus.classList.remove("hidden"); activeStatus.classList.add("inline-flex"); }
      if (sosFreqLabel) sosFreqLabel.classList.add("hidden");
      playSosSequence();
    }
  });
})();

// ===================== SURVIVAL MODAL =====================
const survivalModal = document.getElementById("survival-modal");
document.getElementById("open-survival-modal-btn")?.addEventListener("click", () => {
  survivalModal?.classList.remove("hidden");
  survivalModal?.classList.add("flex");
});
document.getElementById("close-survival-modal-btn")?.addEventListener("click", () => {
  survivalModal?.classList.add("hidden");
  survivalModal?.classList.remove("flex");
});

(function initSurvivalTabs() {
  const tabSurvival = document.getElementById("tab-btn-survival");
  const tabMedical = document.getElementById("tab-btn-medical");
  const viewSurvival = document.getElementById("view-survival-doctrine");
  const viewFirstAid = document.getElementById("view-first-aid");
  if (!tabSurvival || !tabMedical || !viewSurvival || !viewFirstAid) return;
  const activeClass = "px-4 py-2 text-[10px] tracking-widest uppercase font-semibold border-b-2 border-white text-white bg-white/5 cursor-pointer flex items-center gap-1.5 transition-all";
  const inactiveClass = "px-4 py-2 text-[10px] tracking-widest uppercase font-semibold border-b-2 border-transparent text-neutral-400 hover:text-neutral-200 cursor-pointer flex items-center gap-1.5 transition-all";
  const activeMedicalClass = "px-4 py-2 text-[10px] tracking-widest uppercase font-semibold border-b-2 border-amber-500 text-amber-200 bg-white/5 cursor-pointer flex items-center gap-1.5 transition-all";
  tabSurvival.addEventListener("click", () => {
    viewSurvival.classList.remove("hidden");
    viewFirstAid.classList.add("hidden");
    tabSurvival.className = activeClass;
    tabMedical.className = inactiveClass;
  });
  tabMedical.addEventListener("click", () => {
    viewSurvival.classList.add("hidden");
    viewFirstAid.classList.remove("hidden");
    tabMedical.className = activeMedicalClass;
    tabSurvival.className = inactiveClass;
  });
})();

// ===================== MAP (sin tocar userGeo del header) =====================
(function initTacticalLeafletModal() {
  const modal = document.getElementById("tactical-map-modal");
  const openBtn = document.getElementById("open-map-modal-btn");
  const closeBtn = document.getElementById("close-map-modal-btn");
  const coordsDisplay = document.getElementById("leaflet-coords-display");
  const zoomDisplay = document.getElementById("leaflet-zoom-display");
  const cacheStatus = document.getElementById("map-cache-status");
  const recenterBtn = document.getElementById("map-recenter-btn");
  const cityBtn = document.getElementById("map-city-btn");
  const waypointBtn = document.getElementById("map-waypoint-btn");
  const cacheBtn = document.getElementById("map-cache-btn");
  const copyCoordsBtn = document.getElementById("map-copy-coords-btn");
  const CACHE_NAME = "tactical-osm-tiles-v1";
  let map = null;
  let currentMarker = null;
  let waypoints = [];
  let lastCoords = { lat: -34.6037, lon: -58.3816 };

  function formatCoords(lat, lon) {
    const latDir = lat >= 0 ? "N" : "S";
    const lonDir = lon >= 0 ? "E" : "W";
    return `LAT: ${Math.abs(lat).toFixed(4)}° ${latDir} | LON: ${Math.abs(lon).toFixed(4)}° ${lonDir}`;
  }
  function updateCoordsUI(lat, lon, zoom) {
    lastCoords = { lat, lon };
    if (coordsDisplay) coordsDisplay.textContent = formatCoords(lat, lon);
    if (zoomDisplay) zoomDisplay.textContent = `ZOOM: ${zoom}x`;
  }
  function getTileUrl(z, x, y) { return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`; }
  function latLngToTile(lat, lng, zoom) {
    const n = Math.pow(2, zoom);
    const x = Math.floor(((lng + 180) / 360) * n);
    const latRad = (lat * Math.PI) / 180;
    const y = Math.floor(((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n);
    return { x, y };
  }
  function getSelectedCityCoords() {
    const city = cityTelemetry[currentTimezone];
    if (city) return { lat: city.latitude, lon: city.longitude, name: city.name || currentTimezone };
    return { lat: -34.6037, lon: -58.3816, name: "Default" };
  }
  function setMapPosition(lat, lon, zoom = 13) {
    if (!map) return;
    map.setView([lat, lon], zoom);
    if (currentMarker) currentMarker.setLatLng([lat, lon]);
    else currentMarker = L.marker([lat, lon]).addTo(map);
    updateCoordsUI(lat, lon, map.getZoom());
  }
  function centerOnSelectedCity() {
    const c = getSelectedCityCoords();
    setMapPosition(c.lat, c.lon, 12);
    if (cacheStatus) cacheStatus.textContent = `CITY VIEW · ${String(c.name).toUpperCase()}`;
  }
  function centerOnUser(onFail) {
    if (!navigator.geolocation) { if (onFail) onFail(); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setMapPosition(lat, lon, 14);
        if (window.TacticalNav) window.TacticalNav.setUser(lat, lon);
        if (cacheStatus) cacheStatus.textContent = "GPS · YOUR LOCATION";
      },
      () => { if (onFail) onFail(); },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }
  function createTileLayer() {
    if (!("caches" in window)) {
      return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" });
    }
    const CachedLayer = L.TileLayer.extend({
      createTile(coords, done) {
        const tile = document.createElement("img");
        tile.alt = "";
        const url = getTileUrl(coords.z, coords.x, coords.y);
        const setSrc = (src) => {
          tile.onload = () => done(null, tile);
          tile.onerror = () => done(new Error("tile error"), tile);
          tile.src = src;
        };
        caches.open(CACHE_NAME).then((cache) =>
          cache.match(url).then((hit) => {
            if (hit) hit.blob().then((blob) => setSrc(URL.createObjectURL(blob)));
            else {
              setSrc(url);
              fetch(url).then((res) => { if (res.ok) cache.put(url, res.clone()); }).catch(() => {});
            }
          })
        ).catch(() => setSrc(url));
        return tile;
      }
    });
    return new CachedLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" });
  }
  async function cacheVisibleTiles() {
    const bounds = map.getBounds();
    const zoom = map.getZoom();
    const zMin = Math.max(zoom - 1, 10);
    const zMax = Math.min(zoom + 1, 15);
    const urls = [];
    for (let z = zMin; z <= zMax; z++) {
      const nw = latLngToTile(bounds.getNorth(), bounds.getWest(), z);
      const se = latLngToTile(bounds.getSouth(), bounds.getEast(), z);
      for (let x = Math.min(nw.x, se.x); x <= Math.max(nw.x, se.x); x++) {
        for (let y = Math.min(nw.y, se.y); y <= Math.max(nw.y, se.y); y++) {
          urls.push(getTileUrl(z, x, y));
        }
      }
    }
    const list = urls.slice(0, 250);
    const cache = await caches.open(CACHE_NAME);
    let saved = 0;
    for (const url of list) {
      try {
        if (await cache.match(url)) { saved++; continue; }
        const res = await fetch(url);
        if (res.ok) { await cache.put(url, res.clone()); saved++; }
      } catch (_) {}
    }
    return { saved, total: list.length };
  }
  async function countCached() {
    try { return (await (await caches.open(CACHE_NAME)).keys()).length; }
    catch { return 0; }
  }
  function initMap() {
    if (map || typeof L === "undefined") return;
    const city = getSelectedCityCoords();
    map = L.map("leaflet-offline-map", { zoomControl: false, attributionControl: false }).setView([city.lat, city.lon], 12);
    L.control.zoom({ position: "bottomright" }).addTo(map);
    createTileLayer().addTo(map);
    currentMarker = L.marker([city.lat, city.lon]).addTo(map);
    map.on("moveend zoomend", () => {
      const center = map.getCenter();
      updateCoordsUI(center.lat, center.lng, map.getZoom());
    });
    map.on("click", (e) => {
      const { lat, lng } = e.latlng;
      if (currentMarker) currentMarker.setLatLng([lat, lng]);
      else currentMarker = L.marker([lat, lng]).addTo(map);
      updateCoordsUI(lat, lng, map.getZoom());
    });
    updateCoordsUI(city.lat, city.lon, 12);
    if (cacheStatus) cacheStatus.textContent = "LOCATING GPS...";
    centerOnUser(() => {
      centerOnSelectedCity();
      countCached().then((n) => {
        if (cacheStatus) cacheStatus.textContent = n > 0 ? `CITY · TILES CACHED: ${n}` : "CITY VIEW · PRESS CACHE TILES FOR OFFLINE";
      });
    });
  }

  recenterBtn?.addEventListener("click", () => {
    if (!map) return;
    if (!navigator.geolocation) { alert("Geolocation not supported by this browser."); return; }
    const html = recenterBtn.innerHTML;
    recenterBtn.textContent = "LOCATING...";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setMapPosition(lat, lon, 14);
        if (window.TacticalNav) window.TacticalNav.setUser(lat, lon);
        if (cacheStatus) cacheStatus.textContent = "GPS · YOUR LOCATION";
        recenterBtn.innerHTML = html;
      },
      () => { alert("Unable to get GPS position."); recenterBtn.innerHTML = html; },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  });

  cityBtn?.addEventListener("click", () => { if (map) centerOnSelectedCity(); });

  waypointBtn?.addEventListener("click", () => {
    if (!map) return;
    const center = map.getCenter();
    const marker = L.circleMarker([center.lat, center.lng], {
      radius: 6, color: "#d4a373", fillColor: "#8c6239", fillOpacity: 0.9, weight: 2
    }).addTo(map);
    marker.bindPopup(`<strong>WAYPOINT</strong><br>${formatCoords(center.lat, center.lng)}`).openPopup();
    waypoints.push(marker);
    if (window.TacticalNav) window.TacticalNav.setWaypoint(center.lat, center.lng);
  });

  cacheBtn?.addEventListener("click", async () => {
    if (!map) return;
    if (!("caches" in window)) { if (cacheStatus) cacheStatus.textContent = "CACHE API NOT SUPPORTED"; return; }
    const html = cacheBtn.innerHTML;
    cacheBtn.textContent = "CACHING...";
    if (cacheStatus) cacheStatus.textContent = "SAVING VISIBLE TILES...";
    try {
      const { saved, total } = await cacheVisibleTiles();
      const all = await countCached();
      if (cacheStatus) cacheStatus.textContent = `SAVED ${saved}/${total} · TOTAL IN CACHE: ${all}`;
    } catch {
      if (cacheStatus) cacheStatus.textContent = "CACHE FAILED";
    }
    cacheBtn.innerHTML = html;
  });

  copyCoordsBtn?.addEventListener("click", async () => {
    const text = `${lastCoords.lat.toFixed(6)}, ${lastCoords.lon.toFixed(6)}`;
    const html = copyCoordsBtn.innerHTML;
    try { await navigator.clipboard.writeText(text); }
    catch {
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    copyCoordsBtn.innerHTML = '<span class="material-symbols-outlined text-[11px]">check</span>COPIED';
    setTimeout(() => { copyCoordsBtn.innerHTML = html; }, 1500);
  });

  openBtn?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
    initMap();
    setTimeout(() => { if (map) map.invalidateSize(); }, 200);
  });
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
    modal?.classList.remove("flex");
  });
})();

// ===================== MEDICAL ID =====================
(function initMedicalIdSystem() {
  const STORAGE_KEY = "tactical_chronometer_medical_id_v1";
  const modal = document.getElementById("medical-id-modal");
  const openBtn = document.getElementById("open-medical-id-btn");
  const closeBtn = document.getElementById("close-medical-id-btn");
  const saveBtn = document.getElementById("med-save-data-btn");
  const resetBtn = document.getElementById("med-reset-defaults-btn");
  const feedbackEl = document.getElementById("med-save-feedback");
  const CHRONIC_CONDITIONS = ["NONE","Asthma","Hypertension","Diabetes Type 1","Diabetes Type 2","Heart Disease","Epilepsy / Seizures","COPD","Kidney Disease","Liver Disease","Thyroid Disorder","Anemia","Cancer (History)","Stroke (History)","Mental Health (Anxiety/Depression)","Arthritis","Migraine","Sleep Apnea","HIV / Immunocompromised","Other"];
  const ALLERGIES = ["NKDA (No Known Drug Allergies)","Penicillin","Amoxicillin","Sulfa Drugs","Aspirin / NSAIDs","Ibuprofen","Codeine / Opioids","Morphine","Latex","Iodine / Contrast","Eggs","Milk / Dairy","Peanuts","Tree Nuts","Shellfish","Fish","Soy","Wheat / Gluten","Bee / Wasp Stings","Pollen","Dust Mites","Other"];
  const conditionsContainer = document.getElementById("med-conditions-list");
  const allergiesContainer = document.getElementById("med-allergies-list");

  function createCheckboxList(container, items, namePrefix) {
    if (!container) return;
    container.innerHTML = "";
    items.forEach((item, index) => {
      const label = document.createElement("label");
      label.className = "flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors";
      label.innerHTML = `<input type="checkbox" id="${namePrefix}-${index}" value="${item}" class="accent-amber-600"><span>${item}</span>`;
      container.appendChild(label);
    });
  }
  createCheckboxList(conditionsContainer, CHRONIC_CONDITIONS, "cond");
  createCheckboxList(allergiesContainer, ALLERGIES, "allg");

  function getCheckedValues(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map((cb) => cb.value);
  }
  function setCheckedValues(container, values = []) {
    if (!container) return;
    container.querySelectorAll('input[type="checkbox"]').forEach((cb) => { cb.checked = values.includes(cb.value); });
  }
  function collectFormData() {
    return {
      name: document.getElementById("med-input-name")?.value || "",
      dob: document.getElementById("med-input-dob")?.value || "",
      blood: document.getElementById("med-input-blood")?.value || "UNKNOWN",
      conditions: getCheckedValues(conditionsContainer),
      conditionsOther: document.getElementById("med-conditions-other")?.value || "",
      allergies: getCheckedValues(allergiesContainer),
      allergiesOther: document.getElementById("med-allergies-other")?.value || "",
      medications: document.getElementById("med-input-medications")?.value || "",
      donor: document.getElementById("med-input-donor")?.value || "UNSPECIFIED",
      updatedAt: new Date().toISOString()
    };
  }
  function fillForm(data) {
    if (!data) return;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ""; };
    set("med-input-name", data.name);
    set("med-input-dob", data.dob);
    set("med-input-blood", data.blood || "UNKNOWN");
    set("med-conditions-other", data.conditionsOther);
    set("med-allergies-other", data.allergiesOther);
    set("med-input-medications", data.medications);
    set("med-input-donor", data.donor || "UNSPECIFIED");
    setCheckedValues(conditionsContainer, data.conditions || []);
    setCheckedValues(allergiesContainer, data.allergies || []);
  }
  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collectFormData()));
      if (feedbackEl) {
        feedbackEl.classList.remove("hidden");
        setTimeout(() => feedbackEl.classList.add("hidden"), 2200);
      }
    } catch (e) { console.error(e); }
  }
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) fillForm(JSON.parse(raw));
    } catch (e) { console.error(e); }
  }
  function resetData() {
    localStorage.removeItem(STORAGE_KEY);
    fillForm({ name: "", dob: "", blood: "UNKNOWN", conditions: [], conditionsOther: "", allergies: [], allergiesOther: "", medications: "", donor: "UNSPECIFIED" });
  }
  openBtn?.addEventListener("click", () => {
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
    loadData();
  });
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
    modal?.classList.remove("flex");
  });
  saveBtn?.addEventListener("click", saveData);
  resetBtn?.addEventListener("click", resetData);
  loadData();
})();

// ===================== NOTES =====================
(function initNotes() {
  const KEY = "tactical_field_notes_v1";
  const modal = document.getElementById("notes-modal");
  const openBtn = document.getElementById("open-notes-btn");
  const closeBtn = document.getElementById("close-notes-btn");
  const textarea = document.getElementById("notes-textarea");
  const saveBtn = document.getElementById("notes-save-btn");
  const clearBtn = document.getElementById("notes-clear-btn");
  const status = document.getElementById("notes-status");

  function load() {
    try {
      const data = localStorage.getItem(KEY);
      if (textarea) textarea.value = data || "";
      if (status) status.textContent = data ? "LOADED FROM LOCAL STORAGE" : "EMPTY · LOCAL STORAGE";
    } catch { if (status) status.textContent = "STORAGE ERROR"; }
  }
  function save() {
    try {
      localStorage.setItem(KEY, textarea?.value || "");
      if (status) status.textContent = "SAVED · " + new Date().toLocaleTimeString();
    } catch { if (status) status.textContent = "SAVE FAILED"; }
  }
  openBtn?.addEventListener("click", () => {
    load();
    modal?.classList.remove("hidden");
    modal?.classList.add("flex");
  });
  closeBtn?.addEventListener("click", () => {
    modal?.classList.add("hidden");
    modal?.classList.remove("flex");
  });
  saveBtn?.addEventListener("click", save);
  clearBtn?.addEventListener("click", () => {
    if (textarea) textarea.value = "";
    localStorage.removeItem(KEY);
    if (status) status.textContent = "CLEARED";
  });
})();

// ===================== TACTICAL NAV =====================
window.TacticalNav = {
  userLat: null,
  userLon: null,
  wpLat: null,
  wpLon: null,
  toRad(d) { return (d * Math.PI) / 180; },
  bearing(lat1, lon1, lat2, lon2) {
    const φ1 = this.toRad(lat1), φ2 = this.toRad(lat2), Δλ = this.toRad(lon2 - lon1);
    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
  },
  distanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dφ = this.toRad(lat2 - lat1);
    const dλ = this.toRad(lon2 - lon1);
    const a = Math.sin(dφ / 2) ** 2 + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dλ / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  },
  setUser(lat, lon) { this.userLat = lat; this.userLon = lon; this.updateUI(); },
  setWaypoint(lat, lon) { this.wpLat = lat; this.wpLon = lon; this.updateUI(); },
  clearWaypoint() { this.wpLat = null; this.wpLon = null; this.updateUI(); },
  updateUI() {
    const brgEl = document.getElementById("nav-bearing");
    const distEl = document.getElementById("nav-distance");
    const stEl = document.getElementById("nav-status");
    const compassWp = document.getElementById("compass-wp-brg");
    if (this.wpLat == null || this.wpLon == null) {
      if (brgEl) brgEl.textContent = "BRG ---°";
      if (distEl) distEl.textContent = "DIST --- km";
      if (stEl) stEl.textContent = "NO WAYPOINT";
      if (compassWp) compassWp.textContent = "---°";
      return;
    }
    if (this.userLat == null || this.userLon == null) {
      if (brgEl) brgEl.textContent = "BRG ---°";
      if (distEl) distEl.textContent = "DIST --- km";
      if (stEl) stEl.textContent = "WP SET · NEED GPS";
      if (compassWp) compassWp.textContent = "---°";
      return;
    }
    const brg = this.bearing(this.userLat, this.userLon, this.wpLat, this.wpLon);
    const dist = this.distanceKm(this.userLat, this.userLon, this.wpLat, this.wpLon);
    if (brgEl) brgEl.textContent = `BRG ${String(Math.round(brg)).padStart(3, "0")}°`;
    if (distEl) distEl.textContent = dist < 1 ? `DIST ${Math.round(dist * 1000)} m` : `DIST ${dist.toFixed(2)} km`;
    if (stEl) stEl.textContent = "NAV ACTIVE";
    if (compassWp) compassWp.textContent = `${Math.round(brg)}°`;
  }
};

// ===================== GEO DETAIL MODAL =====================
(function initGeoDetailModal() {
  const modal = document.getElementById("geo-detail-modal");
  const openBtn = document.getElementById("open-geo-modal-btn");
  const closeBtn = document.getElementById("close-geo-modal-btn");
  const sourceUserBtn = document.getElementById("geo-source-user-btn");
  const sourceCityBtn = document.getElementById("geo-source-city-btn");
  const copyBtn = document.getElementById("geo-copy-btn");
  const copyFeedback = document.getElementById("geo-copy-feedback");
  const elSource = document.getElementById("geo-modal-source");
  const elLat = document.getElementById("geo-modal-lat");
  const elLon = document.getElementById("geo-modal-lon");
  const elAlt = document.getElementById("geo-modal-alt");
  const elDecimal = document.getElementById("geo-modal-decimal");
  const elPlace = document.getElementById("geo-modal-place");
  let geoModalSource = "user";

  function fmt(lat, lon) {
    return {
      latStr: `${Math.abs(lat).toFixed(6)}° ${lat >= 0 ? "N" : "S"}`,
      lonStr: `${Math.abs(lon).toFixed(6)}° ${lon >= 0 ? "E" : "W"}`,
      decimal: `${lat.toFixed(6)}, ${lon.toFixed(6)}`
    };
  }
  function getActiveGeo() {
    if (geoModalSource === "user" && userGeo.hasFix) {
      return {
        lat: userGeo.lat,
        lon: userGeo.lon,
        alt: userGeo.alt != null ? `${Math.round(userGeo.alt)} m MSL` : "N/A",
        place: "USER DEVICE POSITION",
        sourceLabel: "SOURCE: USER GPS"
      };
    }
    const city = cityTelemetry[currentTimezone];
    if (city) {
      return {
        lat: city.latitude,
        lon: city.longitude,
        alt: city.alt || "N/A",
        place: city.name || currentTimezone,
        sourceLabel: "SOURCE: SELECTED CITY"
      };
    }
    return null;
  }
  function paintModal() {
    const g = getActiveGeo();
    if (!g) {
      if (elLat) elLat.textContent = "--";
      if (elLon) elLon.textContent = "--";
      if (elAlt) elAlt.textContent = "--";
      if (elDecimal) elDecimal.textContent = "--";
      if (elPlace) elPlace.textContent = "NO DATA";
      if (elSource) elSource.textContent = "SOURCE: UNAVAILABLE";
      return;
    }
    const f = fmt(g.lat, g.lon);
    if (elLat) elLat.textContent = f.latStr;
    if (elLon) elLon.textContent = f.lonStr;
    if (elAlt) elAlt.textContent = g.alt;
    if (elDecimal) elDecimal.textContent = f.decimal;
    if (elPlace) elPlace.textContent = g.place;
    if (elSource) elSource.textContent = g.sourceLabel;
    if (sourceUserBtn && sourceCityBtn) {
      if (geoModalSource === "user") {
        sourceUserBtn.className = "flex-1 px-2 py-1.5 border border-neutral-600 bg-neutral-900 text-[9px] uppercase tracking-wider cursor-pointer";
        sourceCityBtn.className = "flex-1 px-2 py-1.5 border border-neutral-800 bg-black text-[9px] uppercase tracking-wider cursor-pointer text-neutral-400";
      } else {
        sourceCityBtn.className = "flex-1 px-2 py-1.5 border border-neutral-600 bg-neutral-900 text-[9px] uppercase tracking-wider cursor-pointer";
        sourceUserBtn.className = "flex-1 px-2 py-1.5 border border-neutral-800 bg-black text-[9px] uppercase tracking-wider cursor-pointer text-neutral-400";
      }
    }
  }
  function openModal() {
    if (!modal) return;
    geoModalSource = userGeo.hasFix ? "user" : "city";
    paintModal();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    if (copyFeedback) copyFeedback.textContent = "";
  }
  openBtn?.addEventListener("click", openModal);
  closeBtn?.addEventListener("click", closeModal);
  sourceUserBtn?.addEventListener("click", () => { geoModalSource = "user"; paintModal(); });
  sourceCityBtn?.addEventListener("click", () => { geoModalSource = "city"; paintModal(); });
  copyBtn?.addEventListener("click", async () => {
    const g = getActiveGeo();
    if (!g) return;
    const text = `${g.lat.toFixed(6)}, ${g.lon.toFixed(6)}`;
    try { await navigator.clipboard.writeText(text); }
    catch {
      const input = document.createElement("input");
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    if (copyFeedback) {
      copyFeedback.textContent = "COPIED";
      setTimeout(() => { if (copyFeedback) copyFeedback.textContent = ""; }, 1500);
    }
  });
  modal?.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
})();

// ===================== GPS HEADER (independiente del clima de ciudad) =====================
function initUserPositionOnLoad() {
  // Clima por defecto: ciudad del timezone resuelto (no espera al GPS)
  weatherGeoSource = "city";
  updateWeatherTelemetry();

  if (!navigator.geolocation) {
    userGeo.hasFix = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      userGeo.lat = pos.coords.latitude;
      userGeo.lon = pos.coords.longitude;
      userGeo.alt = pos.coords.altitude;
      userGeo.hasFix = true;

      // Actualiza badge GPS del header, pero NO secuestra el clima
      // salvo que el select esté en LOCAL_AUTO
      const selectVal = timezoneSelect?.value;
      if (selectVal === "LOCAL_AUTO") {
        weatherGeoSource = "user";
        applyUserGeoToHeader();
        updateWeatherTelemetry();
      } else {
        // Solo marca GPS fix en el botón; coords de header siguen la ciudad
        const fixLabel = document.getElementById("gps-fix-label");
        if (fixLabel) fixLabel.textContent = "GPS FIX";
        const fixDot = document.getElementById("gps-fix-dot");
        if (fixDot) fixDot.classList.add("animate-pulse");
      }

      if (window.TacticalNav) window.TacticalNav.setUser(userGeo.lat, userGeo.lon);
    },
    () => {
      userGeo.hasFix = false;
      weatherGeoSource = "city";
      // ya se llamó updateWeatherTelemetry al inicio
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

// ===================== CLOCK =====================
// Tracks the last displayed hour per timezone so switching zones doesn't trigger the chime
let lastChimeHour = null;
let lastChimeTimezone = null;

function updateClock() {
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: currentTimezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  });
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: currentTimezone, weekday: "long", month: "long", day: "numeric", year: "numeric"
  });
  const parts = timeFormatter.formatToParts(now);
  let hours = "00", minutes = "00", seconds = "00";
  for (const p of parts) {
    if (p.type === "hour") hours = p.value;
    if (p.type === "minute") minutes = p.value;
    if (p.type === "second") seconds = p.value;
  }
  const hourNum = parseInt(hours, 10);
  const minNum = parseInt(minutes, 10);
  if (lastChimeTimezone === currentTimezone && lastChimeHour !== null && lastChimeHour !== hourNum) {
    playHourlyChime();
  }
  lastChimeHour = hourNum;
  lastChimeTimezone = currentTimezone;
  if (hoursEl) hoursEl.textContent = hours.padStart(2, "0");
  if (minutesEl) minutesEl.textContent = minutes.padStart(2, "0");
  if (secondsEl) secondsEl.textContent = seconds.padStart(2, "0");
  if (ampmEl) {
    try {
      const formatter = new Intl.DateTimeFormat("en-US", { timeZone: currentTimezone, hour: "numeric", hour12: true });
      const period = formatter.formatToParts(now).find((p) => p.type === "dayPeriod");
      if (period) ampmEl.textContent = period.value.toUpperCase();
    } catch (e) {}
  }
  if (dateEl) dateEl.textContent = dateFormatter.format(now).toUpperCase();
  applyAtmosphericCycle(getAutomaticCycle(hourNum, minNum));
  try {
    if (zuluTimeEl) {
      zuluTimeEl.textContent = `${String(now.getUTCHours()).padStart(2, "0")}${String(now.getUTCMinutes()).padStart(2, "0")}Z`;
    }
    const strInTz = now.toLocaleString("en-US", { timeZone: currentTimezone });
    const tzDate = new Date(strInTz);
    const diffMinutes = Math.round((tzDate.getTime() - new Date(now.toLocaleString("en-US", { timeZone: "UTC" })).getTime()) / 60000);
    const diffHours = diffMinutes / 60;
    if (utcOffsetEl) utcOffsetEl.textContent = `UTC${diffHours >= 0 ? "+" : ""}${diffHours}`;
  } catch (e) {
    if (utcOffsetEl) utcOffsetEl.textContent = "UTC+0";
  }
  stepTimer();
}

// ===================== INIT =====================
populateTimezoneSelect();

if (timezoneSelect) {
  timezoneSelect.addEventListener("change", (e) => {
    initAudioContext();
    const val = e.target.value;

    if (val === "LOCAL_AUTO") {
      currentTimezone = resolveTimezone("LOCAL_AUTO");
      weatherGeoSource = userGeo.hasFix ? "user" : "city";
    } else {
      currentTimezone = resolveTimezone(val);
      weatherGeoSource = "city";
    }

    updateWeatherTelemetry();
    updateClock();
    if (compassMode !== "device") syncCompassToSelectedCity(false);
  });
}

window.addEventListener("pointerdown", () => initAudioContext(), { once: true });
window.addEventListener("keydown", () => initAudioContext(), { once: true });

updateClock();
setInterval(updateClock, 200);
setInterval(updateWeatherTelemetry, 15 * 60 * 1000);
initUserPositionOnLoad();

(function initWaterCalculator() {
  const peopleEl = document.getElementById("water-people");
  const daysEl = document.getElementById("water-days");
  const climateEl = document.getElementById("water-climate");
  const activityEl = document.getElementById("water-activity");
  const cookingEl = document.getElementById("water-cooking");
  const perPersonEl = document.getElementById("water-per-person");
  const groupDayEl = document.getElementById("water-group-day");
  const totalEl = document.getElementById("water-total");

  if (!peopleEl || !daysEl || !climateEl || !activityEl) return;

  const BASE_L = 3.0;

  function calc() {
    const people = Math.max(1, parseInt(peopleEl.value, 10) || 1);
    const days = Math.max(1, parseInt(daysEl.value, 10) || 1);
    const climate = parseFloat(climateEl.value) || 1;
    const activity = parseFloat(activityEl.value) || 1;
    const cooking = cookingEl?.checked ? 0.5 : 0;

    const perPerson = BASE_L * climate * activity + cooking;
    const groupDay = perPerson * people;
    const total = groupDay * days;

    if (perPersonEl) perPersonEl.textContent = `${perPerson.toFixed(1)} L`;
    if (groupDayEl) groupDayEl.textContent = `${groupDay.toFixed(1)} L`;
    if (totalEl) totalEl.textContent = `${total.toFixed(1)} L`;
  }

  [peopleEl, daysEl, climateEl, activityEl].forEach((el) => {
    el.addEventListener("input", calc);
    el.addEventListener("change", calc);
  });
  cookingEl?.addEventListener("change", calc);
  calc();
})();