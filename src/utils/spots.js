const SPOTS = [
  {
    id: 1,
    province: "CA",
    locality: "Pula",
    name: "Covac",
    latitude: 38.9906,
    longitude: 9.0161,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2463.08888838818!2d9.012993074997608!3d38.990914971704235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU5JzI3LjMiTiA5wrAwMCc1Ni4wIkU!5e1!3m2!1sit!2sit!4v1706716504703!5m2!1sit!2sit",
  },
  {
    id: 2,
    province: "CA",
    locality: "Pula",
    name: "Su Guventeddu",
    latitude: 39.0073,
    longitude: 9.0022,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2462.8867884134247!2d9.01976625596724!3d38.996721990349315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU5JzQ4LjIiTiA5wrAwMScxNi42IkU!5e1!3m2!1sit!2sit!4v1706716442289!5m2!1sit!2sit",
  },
  {
    id: 3,
    province: "SU",
    locality: "Chia",
    name: "Su Giudeu",
    latitude: 38.9049,
    longitude: 8.8812,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19734.418021619607!2d8.843398556130312!3d38.8840876404775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e6ddc11be43beb%3A0x541d2b3243ce769b!2sSpiaggia%20Su%20Giudeu!5e1!3m2!1sit!2sit!4v1706715906368!5m2!1sit!2sit",
  },
  {
    id: 4,
    province: "SU",
    locality: "Chia",
    name: "Cala Cipolla",
    latitude: 38.8791,
    longitude: 8.8547,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22205.401147424906!2d8.826423741502634!3d38.87439900509687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e6dd9492db0845%3A0x81280c16781e657b!2sSpiaggia%20di%20Cala%20Cipolla!5e1!3m2!1sit!2sit!4v1706716059842!5m2!1sit!2sit",
  },
  {
    id: 5,
    province: "SU",
    locality: "Calasetta",
    name: "Maresciallo",
    latitude: 39.063,
    longitude: 8.2143,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2458.995103162717!2d8.359568075004818!3d39.10840197167978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA2JzMwLjMiTiA4wrAyMSc0My43IkU!5e1!3m2!1sit!2sit!4v1706717074865!5m2!1sit!2sit",
  },
  {
    id: 6,
    province: "SU",
    locality: "Gonnesa",
    name: "Guroneddu",
    latitude: 39.1457,
    longitude: 8.2344,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2454.0726718813607!2d8.395750000000001!3d39.249279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDE0JzU3LjQiTiA4wrAyMyc0NC43IkU!5e1!3m2!1sit!2sit!4v1706717410538!5m2!1sit!2sit",
  },
  {
    id: 7,
    province: "SU",
    locality: "Buggerru",
    name: "Buggerru",
    latitude: 39.2413,
    longitude: 8.2406,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2448.659917865062!2d8.401655999999996!3d39.403701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI0JzEzLjMiTiA4wrAyNCcwNi4wIkU!5e1!3m2!1sit!2sit!4v1706717665062!5m2!1sit!2sit",
  },
  {
    id: 8,
    province: "SU",
    locality: "Buggerru",
    name: "San Nicolò",
    latitude: 39.2515,
    longitude: 8.2442,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2448.056524018807!2d8.411718000000011!3d39.420884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI1JzE1LjIiTiA4wrAyNCc0Mi4yIkU!5e1!3m2!1sit!2sit!4v1706717753972!5m2!1sit!2sit",
  },
  {
    id: 9,
    province: "SU",
    locality: "Buggerru",
    name: "Portixeddu",
    latitude: 39.2361,
    longitude: 8.2436,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2447.3133128964632!2d8.410068!3d39.44204000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI2JzMxLjMiTiA4wrAyNCczNi4yIkU!5e1!3m2!1sit!2sit!4v1706717862301!5m2!1sit!2sit",
  },
  {
    id: 10,
    province: "SU",
    locality: "Arbus",
    name: "Scivu",
    latitude: 39.2942,
    longitude: 8.2449,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2445.4493228197166!2d8.413606999999999!3d39.495057999999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI5JzQyLjIiTiA4wrAyNCc0OS4wIkU!5e1!3m2!1sit!2sit!4v1706717996353!5m2!1sit!2sit",
  },
  {
    id: 11,
    province: "SU",
    locality: "Arbus",
    name: "Piscinas",
    latitude: 39.3233,
    longitude: 8.2659,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d10351.070052483637!2d8.434229946948202!3d39.544629965349124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDMyJzMzLjUiTiA4wrAyNic1OS41IkU!5e1!3m2!1sit!2sit!4v1706718189713!5m2!1sit!2sit",
  },
  {
    id: 12,
    province: "SU",
    locality: "Porto Palma",
    name: "Tunaria",
    latitude: 39.4041,
    longitude: 8.2722,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7874.972844038524!2d8.4445234359578!3d39.6707882372055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQwJzE0LjciTiA4wrAyNycyMi4zIkU!5e1!3m2!1sit!2sit!4v1706718418855!5m2!1sit!2sit",
  },
  {
    id: 13,
    province: "SU",
    locality: "Costa Verde",
    name: "S'Enna e S'Arca",
    latitude: 39.4041,
    longitude: 8.2722,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13091.767222234705!2d8.436745897782368!3d39.711624967466754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQyJzQxLjEiTiA4wrAyNycxNy44IkU!5e1!3m2!1sit!2sit!4v1706718601088!5m2!1sit!2sit",
  },
  {
    id: 14,
    province: "OR",
    locality: "Putzu Idu",
    name: "Capo mannu",
    latitude: 40.015,
    longitude: 8.2246,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2426.5034243314267!2d8.376896075062215!3d40.03060997150416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAxJzUwLjIiTiA4wrAyMic0Ni4xIkU!5e1!3m2!1sit!2sit!4v1706718849348!5m2!1sit!2sit",
  },
  {
    id: 15,
    province: "OR",
    locality: "S'archittu",
    name: "S'istella",
    latitude: 40.0522,
    longitude: 8.2932,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5300.455421867812!2d8.484109068735188!3d40.08981128650436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA1JzIyLjQiTiA4wrAyOSczMi43IkU!5e1!3m2!1sit!2sit!4v1706718953985!5m2!1sit!2sit",
  },
  {
    id: 16,
    province: "OR",
    locality: "Santa Caterina",
    name: "Santa Caterina",
    latitude: 40.0616,
    longitude: 8.2928,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d605.9675629173776!2d8.490467269568976!3d40.10457099821821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA2JzE2LjUiTiA4wrAyOScyOC4wIkU!5e1!3m2!1sit!2sit!4v1706719079201!5m2!1sit!2sit",
  },
  {
    id: 17,
    province: "SS",
    locality: "Alghero",
    name: "La Speranza",
    latitude: 40.2948,
    longitude: 8.2204,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9639.3574753406!2d8.361404952545993!3d40.496780000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI5JzQ4LjQiTiA4wrAyMicwNC43IkU!5e1!3m2!1sit!2sit!4v1706719333244!5m2!1sit!2sit",
  },
  {
    id: 18,
    province: "SS",
    locality: "Alghero",
    name: "La maddalenetta",
    latitude: 40.3429,
    longitude: 8.1806,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24012.252513829862!2d8.25971927566559!3d40.57560694882999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzI5LjMiTiA4wrAxOCcwNi4wIkU!5e1!3m2!1sit!2sit!4v1706719465150!5m2!1sit!2sit",
  },
  {
    id: 19,
    province: "SS",
    locality: "Alghero",
    name: "La maddalenetta",
    latitude: 40.3429,
    longitude: 8.1806,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24012.252513829862!2d8.25971927566559!3d40.57560694882999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDM0JzI5LjMiTiA4wrAxOCcwNi4wIkU!5e1!3m2!1sit!2sit!4v1706719465150!5m2!1sit!2sit",
  },
  {
    id: 20,
    province: "SS",
    locality: "Sassari",
    name: "Porto Ferro",
    latitude: 40.4045,
    longitude: 8.1213,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2403.2740609093785!2d8.203872999999996!3d40.679225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQwJzQ1LjIiTiA4wrAxMicxMy45IkU!5e1!3m2!1sit!2sit!4v1706719669615!5m2!1sit!2sit",
  },
  {
    id: 21,
    province: "SS",
    locality: "Sassari",
    name: "Porto Palmas",
    latitude: 40.4503,
    longitude: 8.0918,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4801.394654370193!2d8.1493489886504!3d40.75064597042228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzAzLjYiTiA4wrAwOScxOC4wIkU!5e1!3m2!1sit!2sit!4v1706719879756!5m2!1sit!2sit",
  },
  {
    id: 22,
    province: "SS",
    locality: "Badesi",
    name: "Li Junchi",
    latitude: 40.5841,
    longitude: 8.5129,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d19139.71535551999!2d8.842756222607262!3d40.978153999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDU4JzQxLjQiTiA4wrA1MScyOS4xIkU!5e1!3m2!1sit!2sit!4v1706780434002!5m2!1sit!2sit",
  },
  {
    id: 23,
    province: "SS",
    locality: "Trinità d'Agultu",
    name: "Isola Rossa",
    latitude: 41.0036,
    longitude: 8.5238,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9565.21590653445!2d8.870788952545992!3d41.010138000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzM2LjUiTiA4wrA1MiczOC41IkU!5e1!3m2!1sit!2sit!4v1706780643718!5m2!1sit!2sit",
  },
  {
    id: 24,
    province: "SS",
    locality: "Trinità d'Agultu",
    name: "Marinedda",
    latitude: 41.0053,
    longitude: 8.5314,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9564.527311019381!2d8.879587611303624!3d41.01488100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAwJzUzLjYiTiA4wrA1MycxNC4xIkU!5e1!3m2!1sit!2sit!4v1706780821947!5m2!1sit!2sit",
  },
  {
    id: 25,
    province: "SS",
    locality: "Trinità d'Agultu",
    name: "Li Cossi",
    latitude: 41.0249,
    longitude: 8.5607,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4779.895127405868!2d8.92908488490201!3d41.04749730232978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAyJzQ5LjgiTiA4wrA1NicwNy43IkU!5e1!3m2!1sit!2sit!4v1706781090002!5m2!1sit!2sit",
  },
  {
    id: 26,
    province: "SS",
    locality: "Aglientu",
    name: "Rena Majore",
    latitude: 41.1016,
    longitude: 9.1013,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4770.861785460245!2d9.168592382090964!3d41.17169762172735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEwJzE2LjciTiA5wrAxMCcxMy4xIkU!5e1!3m2!1sit!2sit!4v1706781328122!5m2!1sit!2sit",
  },
  {
    id: 27,
    province: "SS",
    locality: "Santra Reparata",
    name: "Santra Reparata",
    latitude: 41.1346,
    longitude: 9.1003,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3477.2986270194147!2d9.164604645709877!3d41.229894290487536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEzJzQ2LjciTiA5wrAxMCcwMy41IkU!5e1!3m2!1sit!2sit!4v1706781721827!5m2!1sit!2sit",
  },
  {
    id: 28,
    province: "NU",
    locality: "Orosei",
    name: "Cala Ginepro",
    latitude: 40.2649,
    longitude: 9.4737,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9646.296326118307!2d9.791137079560135!3d40.44845997360948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI2JzQ5LjMiTiA5wrA0NyczNy40IkU!5e1!3m2!1sit!2sit!4v1706781878157!5m2!1sit!2sit",
  },
  {
    id: 29,
    province: "SU",
    locality: "Muravera",
    name: "Porto Pirastu",
    latitude: 39.1741,
    longitude: 9.3638,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9809.913075795928!2d9.604078952545963!3d39.294819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDE3JzQxLjQiTiA5wrAzNiczOC4zIkU!5e1!3m2!1sit!2sit!4v1706782148214!5m2!1sit!2sit",
  },
  {
    id: 30,
    province: "SU",
    locality: "Castiadas",
    name: "Sant'Elmo",
    latitude: 39.1305,
    longitude: 9.3404,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2455.1580016950784!2d9.567912000000003!3d39.218253999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDEzJzA1LjciTiA5wrAzNCcwNC41IkU!5e1!3m2!1sit!2sit!4v1706782340548!5m2!1sit!2sit",
  },
  {
    id: 31,
    province: "CA",
    locality: "Villasimius",
    name: "Porto Giunco",
    latitude: 39.0647,
    longitude: 9.3106,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9835.282715834259!2d9.512820797418009!3d39.11340116367371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA2JzQ3LjgiTiA5wrAzMScwNi44IkU!5e1!3m2!1sit!2sit!4v1706782518995!5m2!1sit!2sit",
  },
  {
    id: 32,
    province: "CA",
    locality: "Villasimius",
    name: "Campulongu",
    latitude: 39.0749,
    longitude: 9.3014,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9832.901949576952!2d9.49540070800026!3d39.130455979971295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA3JzQ5LjYiTiA5wrAzMCcxNC45IkU!5e1!3m2!1sit!2sit!4v1706782593078!5m2!1sit!2sit",
  },
  {
    id: 33,
    province: "CA",
    locality: "Villasimius",
    name: "Capo Boi",
    latitude: 39.0747,
    longitude: 9.2803,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2458.2510021406583!2d9.467487000000009!3d39.129725000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA3JzQ3LjAiTiA5wrAyOCcwMy4wIkU!5e1!3m2!1sit!2sit!4v1706782929956!5m2!1sit!2sit",
  },
  {
    id: 34,
    province: "CA",
    locality: "Sinnai",
    name: "Solanas",
    latitude: 39.0757,
    longitude: 9.2558,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9832.612925937194!2d9.426235952545994!3d39.132526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDA3JzU3LjEiTiA5wrAyNSc1OC4xIkU!5e1!3m2!1sit!2sit!4v1706782759526!5m2!1sit!2sit",
  },
  {
    id: 35,
    province: "CA",
    locality: "Capitana",
    name: "Racca",
    latitude: 39.1217,
    longitude: 9.1847,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d11168.425325259022!2d9.30530744700383!3d39.20489147818897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDEyJzE3LjYiTiA5wrAxOCc0Ny4xIkU!5e1!3m2!1sit!2sit!4v1706783091322!5m2!1sit!2sit",
  },
  {
    id: 36,
    province: "CA",
    locality: "Capitana",
    name: "Il cancello",
    latitude: 39.122,
    longitude: 9.1819,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2455.5914947563347!2d9.303798589935301!3d39.20585650850528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDEyJzIwLjgiTiA5wrAxOCcxOS4zIkU!5e1!3m2!1sit!2sit!4v1706783192109!5m2!1sit!2sit",
  },
  {
    id: 37,
    province: "CA",
    locality: "Pula",
    name: "Is Morus",
    latitude: 38.5637,
    longitude: 8.5704,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d9858.94528380837!2d8.944143799103605!3d38.943551487812194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU2JzM3LjMiTiA4wrA1NycwNC4xIkU!5e1!3m2!1sit!2sit!4v1706786654993!5m2!1sit!2sit",
  },
  {
    id: 38,
    province: "CA",
    locality: "Pula",
    name: "Il cassonetto",
    latitude: 38.5724,
    longitude: 8.5809,
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2464.2725758194542!2d8.969283999999996!3d38.956889000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU3JzI0LjgiTiA4wrA1OCcwOS40IkU!5e1!3m2!1sit!2sit!4v1706786972864!5m2!1sit!2sit",
  },
];

export default SPOTS;
