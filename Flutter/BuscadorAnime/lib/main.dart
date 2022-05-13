import 'package:buscador_anime/screens/home_screen.dart';
import 'package:buscador_anime/screens/home_screen_statefull.dart';
import 'package:flutter/material.dart';
import 'package:vertical_card_pager/vertical_card_pager.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';


void main(){
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomeScreenStatefull()
    );
  }

}

/*void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    final List<String> titles = [
      "RED",
      "YELLOW",
      "BLACK",
      "CYAN",
      "BLUE",
      "GREY",
    ];

    //Future<List<Map<String, dynamic>>> animes = recuperarAnimes();
    List<Map<String, dynamic>> animes = devolverDatos();
    List<String> listaTitulos = devolverTitulos(animes);
    List<Widget> listaPortadas = devolverPortadas(animes);

    recuperarAnimes().then((value) {
      animes = value;
      listaTitulos = devolverTitulos(animes);
      listaPortadas = devolverPortadas(animes);
      print(listaPortadas);
    });


    final List<Widget> images = [
      Container(
        color: Colors.red,
      ),
      Container(
        color: Colors.yellow,
      ),
      Container(
        color: Colors.black,
      ),
      Container(
        color: Colors.cyan,
      ),
      Container(
        color: Colors.blue,
      ),
      Container(
        color: Colors.grey,
      ),
    ];
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: <Widget>[
            Expanded(
              child: Container(
                child: VerticalCardPager(
                  textStyle: TextStyle(
                      color: Colors.white, fontWeight: FontWeight.bold),
                  titles: listaTitulos,
                  images: listaPortadas,
                  onPageChanged: (page) {},
                  align: ALIGN.CENTER,
                  onSelectedItem: (index) {},
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}*/

List<String> devolverTitulos(List<Map<String, dynamic>> lista) {
  List<String> listaTitulos = [];
  lista.forEach((element) {
    listaTitulos.add(element["title"]);
  });
  return listaTitulos;
}

List<Widget> devolverPortadas(List<Map<String, dynamic>> lista) {
  List<Widget> listaPortadas = [];
  lista.forEach((element) {
    listaPortadas.add(ClipRRect(
      borderRadius: BorderRadius.circular(20.0),
      child: Image.network(
        element["images"]["jpg"]["large_image_url"],
        fit: BoxFit.cover,
      ),
    ),);
  });
  return listaPortadas;
}



void funcionParametrosOpcionales({String? saludo, String? nombre}) {
  print("$saludo $nombre");
}

void funcionParametrosOpcionales2({String saludo = "hola", String? nombre}) {
  print("$saludo $nombre");
}

void funcionParametrosOpcionales3(String saludo, [String? nombre]) {
  print("$saludo $nombre");
}

Future<List<Map<String, dynamic>>> recuperarAnimes() async {
  final response = await http.get(Uri.parse
    ('https://api.jikan.moe/v4/anime?q=&status=&type=&'
      'limit=3&sfw&order_by=score&sort=desc&page=1'));
  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    print(jsonDecode(response.body)["data"]);
    return jsonDecode(response.body)["data"];
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load album');
  }

}

class Heroe {
  String nombre;
  String poder;

  Heroe({
    required this.nombre,
    required this.poder
  });

  Heroe.fromJson(Map<String, String> json)
      :
        nombre = json['nombre' ]!,
        poder = json['poder'] ?? 'No tiene poder';

/*  Heroe.fromJson2( Map<String, String> json){
    this.nombre = json['nombre' ]?? "Nombre";
    this.poder = json['poder'] ?? 'No tiene poder';
  }*/

  String toString() {
    Cuadrado(5).area;
    return 'Heroe: nombre: ${(nombre)}, poder: ${(poder)}';
  }
}

class Cuadrado {
  double lado = 0;

  double get area {
    return lado * lado;
  }

/*  Cuadrado(double lado){
    this.lado = lado;
  }*/
  Cuadrado(this.lado);

}

List<Map<String, dynamic>> devolverDatos() {
  return [
    {
      "mal_id": 38524,
      "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.webp"
        }
      },
      "trailer": {
        "youtube_id": "hKHepjfj5Tw",
        "url": "https://www.youtube.com/watch?v=hKHepjfj5Tw",
        "embed_url": "https://www.youtube.com/embed/hKHepjfj5Tw?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
          "image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/default.jpg",
          "small_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/sddefault.jpg",
          "medium_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/mqdefault.jpg",
          "large_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/hqdefault.jpg",
          "maximum_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/maxresdefault.jpg"
        }
      },
      "title": "Shingeki no Kyojin Season 3 Part 2",
      "title_english": "Attack on Titan Season 3 Part 2",
      "title_japanese": "進撃の巨人 Season3 Part.2",
      "title_synonyms": [],
      "type": "TV",
      "source": "Manga",
      "episodes": 10,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2019-04-29T00:00:00+00:00",
        "to": "2019-07-01T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 29,
            "month": 4,
            "year": 2019
          },
          "to": {
            "day": 1,
            "month": 7,
            "year": 2019
          }
        },
        "string": "Apr 29, 2019 to Jul 1, 2019"
      },
      "duration": "23 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 9.08,
      "scored_by": 1283578,
      "rank": 3,
      "popularity": 31,
      "members": 1818076,
      "favorites": 50527,
      "synopsis": "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again. Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. Shingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement. [Written by MAL Rewrite]",
      "background": "Shingeki no Kyojin adapts content from volumes 18-22 of Hajime Isayama's award-winning manga of the same name.",
      "season": "spring",
      "year": 2019,
      "broadcast": {
        "day": "Mondays",
        "time": "00:10",
        "timezone": "Asia/Tokyo",
        "string": "Mondays at 00:10 (JST)"
      },
      "producers": [
        {
          "mal_id": 10,
          "type": "anime",
          "name": "Production I.G",
          "url": "https://myanimelist.net/anime/producer/10/Production_IG"
        },
        {
          "mal_id": 53,
          "type": "anime",
          "name": "Dentsu",
          "url": "https://myanimelist.net/anime/producer/53/Dentsu"
        },
        {
          "mal_id": 143,
          "type": "anime",
          "name": "Mainichi Broadcasting System",
          "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
        },
        {
          "mal_id": 144,
          "type": "anime",
          "name": "Pony Canyon",
          "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
        },
        {
          "mal_id": 159,
          "type": "anime",
          "name": "Kodansha",
          "url": "https://myanimelist.net/anime/producer/159/Kodansha"
        },
        {
          "mal_id": 1499,
          "type": "anime",
          "name": "Techno Sound",
          "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
        },
        {
          "mal_id": 1557,
          "type": "anime",
          "name": "Pony Canyon Enterprise",
          "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprise"
        }
      ],
      "licensors": [
        {
          "mal_id": 102,
          "type": "anime",
          "name": "Funimation",
          "url": "https://myanimelist.net/anime/producer/102/Funimation"
        }
      ],
      "studios": [
        {
          "mal_id": 858,
          "type": "anime",
          "name": "Wit Studio",
          "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 58,
          "type": "anime",
          "name": "Gore",
          "url": "https://myanimelist.net/anime/genre/58/Gore"
        },
        {
          "mal_id": 38,
          "type": "anime",
          "name": "Military",
          "url": "https://myanimelist.net/anime/genre/38/Military"
        },
        {
          "mal_id": 76,
          "type": "anime",
          "name": "Survival",
          "url": "https://myanimelist.net/anime/genre/76/Survival"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "anime",
          "name": "Shounen",
          "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 28977,
      "url": "https://myanimelist.net/anime/28977/Gintama°",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.webp"
        }
      },
      "trailer": {
        "youtube_id": null,
        "url": null,
        "embed_url": null,
        "images": {
          "image_url": null,
          "small_image_url": null,
          "medium_image_url": null,
          "large_image_url": null,
          "maximum_image_url": null
        }
      },
      "title": "Gintama°",
      "title_english": "Gintama Season 4",
      "title_japanese": "銀魂°",
      "title_synonyms": [
        "Gintama' (2015)"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 51,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2015-04-08T00:00:00+00:00",
        "to": "2016-03-30T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 8,
            "month": 4,
            "year": 2015
          },
          "to": {
            "day": 30,
            "month": 3,
            "year": 2016
          }
        },
        "string": "Apr 8, 2015 to Mar 30, 2016"
      },
      "duration": "24 min per ep",
      "rating": "PG-13 - Teens 13 or older",
      "score": 9.08,
      "scored_by": 212083,
      "rank": 5,
      "popularity": 337,
      "members": 529659,
      "favorites": 14144,
      "synopsis": "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko? Meanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team. Filled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet. [Written by MAL Rewrite]",
      "background": "This is a fourth season of Gintama. In the episode continuity corresponds to episodes 266-316 of Gintama.",
      "season": "spring",
      "year": 2015,
      "broadcast": {
        "day": "Wednesdays",
        "time": "18:00",
        "timezone": "Asia/Tokyo",
        "string": "Wednesdays at 18:00 (JST)"
      },
      "producers": [
        {
          "mal_id": 16,
          "type": "anime",
          "name": "TV Tokyo",
          "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
        },
        {
          "mal_id": 17,
          "type": "anime",
          "name": "Aniplex",
          "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
          "mal_id": 53,
          "type": "anime",
          "name": "Dentsu",
          "url": "https://myanimelist.net/anime/producer/53/Dentsu"
        }
      ],
      "licensors": [
        {
          "mal_id": 102,
          "type": "anime",
          "name": "Funimation",
          "url": "https://myanimelist.net/anime/producer/102/Funimation"
        },
        {
          "mal_id": 1468,
          "type": "anime",
          "name": "Crunchyroll",
          "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
        }
      ],
      "studios": [
        {
          "mal_id": 1258,
          "type": "anime",
          "name": "Bandai Namco Pictures",
          "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 57,
          "type": "anime",
          "name": "Gag Humor",
          "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
        },
        {
          "mal_id": 13,
          "type": "anime",
          "name": "Historical",
          "url": "https://myanimelist.net/anime/genre/13/Historical"
        },
        {
          "mal_id": 20,
          "type": "anime",
          "name": "Parody",
          "url": "https://myanimelist.net/anime/genre/20/Parody"
        },
        {
          "mal_id": 21,
          "type": "anime",
          "name": "Samurai",
          "url": "https://myanimelist.net/anime/genre/21/Samurai"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "anime",
          "name": "Shounen",
          "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
      ]
    },
    {
      "mal_id": 9969,
      "url": "https://myanimelist.net/anime/9969/Gintama",
      "images": {
        "jpg": {
          "image_url": "https://cdn.myanimelist.net/images/anime/4/50361.jpg",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50361t.jpg",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50361l.jpg"
        },
        "webp": {
          "image_url": "https://cdn.myanimelist.net/images/anime/4/50361.webp",
          "small_image_url": "https://cdn.myanimelist.net/images/anime/4/50361t.webp",
          "large_image_url": "https://cdn.myanimelist.net/images/anime/4/50361l.webp"
        }
      },
      "trailer": {
        "youtube_id": null,
        "url": null,
        "embed_url": null,
        "images": {
          "image_url": null,
          "small_image_url": null,
          "medium_image_url": null,
          "large_image_url": null,
          "maximum_image_url": null
        }
      },
      "title": "Gintama'",
      "title_english": "Gintama Season 2",
      "title_japanese": "銀魂'",
      "title_synonyms": [
        "Gintama (2011)"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 51,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
        "from": "2011-04-04T00:00:00+00:00",
        "to": "2012-03-26T00:00:00+00:00",
        "prop": {
          "from": {
            "day": 4,
            "month": 4,
            "year": 2011
          },
          "to": {
            "day": 26,
            "month": 3,
            "year": 2012
          }
        },
        "string": "Apr 4, 2011 to Mar 26, 2012"
      },
      "duration": "24 min per ep",
      "rating": "PG-13 - Teens 13 or older",
      "score": 9.05,
      "scored_by": 205553,
      "rank": 6,
      "popularity": 382,
      "members": 467024,
      "favorites": 6955,
      "synopsis": "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child. Bewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it. With even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo. [Written by MAL Rewrite]",
      "background": "This is the second season of Gintama. In the episode continuity corresponds to episodes 202-252 of Gintama.",
      "season": "spring",
      "year": 2011,
      "broadcast": {
        "day": "Mondays",
        "time": "18:00",
        "timezone": "Asia/Tokyo",
        "string": "Mondays at 18:00 (JST)"
      },
      "producers": [
        {
          "mal_id": 16,
          "type": "anime",
          "name": "TV Tokyo",
          "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
        },
        {
          "mal_id": 17,
          "type": "anime",
          "name": "Aniplex",
          "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
          "mal_id": 53,
          "type": "anime",
          "name": "Dentsu",
          "url": "https://myanimelist.net/anime/producer/53/Dentsu"
        },
        {
          "mal_id": 643,
          "type": "anime",
          "name": "Trinity Sound",
          "url": "https://myanimelist.net/anime/producer/643/Trinity_Sound"
        },
        {
          "mal_id": 763,
          "type": "anime",
          "name": "Miracle Robo",
          "url": "https://myanimelist.net/anime/producer/763/Miracle_Robo"
        },
        {
          "mal_id": 829,
          "type": "anime",
          "name": "Studio Jack",
          "url": "https://myanimelist.net/anime/producer/829/Studio_Jack"
        },
        {
          "mal_id": 1365,
          "type": "anime",
          "name": "Shueisha",
          "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
        }
      ],
      "licensors": [],
      "studios": [
        {
          "mal_id": 14,
          "type": "anime",
          "name": "Sunrise",
          "url": "https://myanimelist.net/anime/producer/14/Sunrise"
        }
      ],
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
          "mal_id": 24,
          "type": "anime",
          "name": "Sci-Fi",
          "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
        }
      ],
      "explicit_genres": [],
      "themes": [
        {
          "mal_id": 57,
          "type": "anime",
          "name": "Gag Humor",
          "url": "https://myanimelist.net/anime/genre/57/Gag_Humor"
        },
        {
          "mal_id": 13,
          "type": "anime",
          "name": "Historical",
          "url": "https://myanimelist.net/anime/genre/13/Historical"
        },
        {
          "mal_id": 20,
          "type": "anime",
          "name": "Parody",
          "url": "https://myanimelist.net/anime/genre/20/Parody"
        },
        {
          "mal_id": 21,
          "type": "anime",
          "name": "Samurai",
          "url": "https://myanimelist.net/anime/genre/21/Samurai"
        }
      ],
      "demographics": [
        {
          "mal_id": 27,
          "type": "anime",
          "name": "Shounen",
          "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
      ]
    }
  ];
}