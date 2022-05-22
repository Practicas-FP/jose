import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import '../helpers/debouncer.dart';
import '../models/anime_response.dart';
import '../models/characters_response.dart';


class AnimesProvider extends ChangeNotifier {
  String _baseUrl = "api.jikan.moe";
  String order_by = "score";
  String sort = "desc";
  String q = "";
  String status = "";
  int pageAnimesEmision = 0;
  bool hasNextPageAnimesEmision = true;
  int pageAnimes = 0;
  int pagePeliculasAnimePopulares = 0;
  String limit = '10';

  List<Anime> listaAnimes = [];
  List<Anime> listaAnimesPopulares = [];
  List<Anime> listaPeliculasAnimePopulares = [];
  List<Anime> listaAnimesEmision = [];
  List<CharacterData> listaPersonajes = [];

  final debouncer = Debouncer(duration: Duration(seconds: 2));

  final StreamController<List<Anime>> _suggestionsStreamController = new StreamController.broadcast();
  Stream<List<Anime>> get suggestionsStream => this._suggestionsStreamController.stream;

  AnimesProvider() {
    print("Inicializado anime provider");
    getOnDisplayAnimes();
    getOnAnimesEnEmision();
    getOnPopularPeliculasAnimes();
  }

  getOnDisplayAnimes() async {
    pageAnimes++;
    var url = Uri.https(_baseUrl, 'v4/anime', {
      'limit': limit,
      'q': q,
      'status': status,
      'page': pageAnimes.toString(),
      'order_by': order_by,
      'sort': sort,
    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    AnimeResponse respuestaAnime = AnimeResponse.fromJson(json.decode(response.body));
    //
    listaAnimes = respuestaAnime.listaAnimes;
    notifyListeners();
    await Future.delayed(Duration(seconds: 2));
  }

  getOnPopularDisplayAnimes() async {
    pageAnimesEmision++;
    var url = Uri.https(_baseUrl, 'v4/anime', {
      'limit': limit,
      'q': '',
      'status': '',
      'page': pageAnimesEmision.toString(),
      'order_by': 'score',
      'sort': 'desc',
      'type': 'tv',
    });


    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    AnimeResponse respuestaAnime = AnimeResponse.fromJson(json.decode(response.body));
    //
    listaAnimesPopulares = respuestaAnime.listaAnimes;
    notifyListeners();
    print(listaAnimesPopulares);
    await Future.delayed(Duration(seconds: 2));


    //var jikan = Jikan();
    //var top = await jikan.getTop(TopType.anime);
    //top.forEach((p0) {print(p0.title);});

  }

  getOnPopularPeliculasAnimes() async {
    pagePeliculasAnimePopulares++;
    var url = Uri.https(_baseUrl, 'v4/anime', {
      'limit': limit,
      'q': '',
      'status': '',
      'page': pagePeliculasAnimePopulares.toString(),
      'order_by': 'score',
      'sort': 'desc',
      'type': 'movie',
    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    AnimeResponse respuestaAnime = AnimeResponse.fromJson(json.decode(response.body));
    //
    listaPeliculasAnimePopulares.addAll(respuestaAnime.listaAnimes);
    notifyListeners();
    await Future.delayed(Duration(seconds: 2));

  }

  getOnAnimesEnEmision() async {
    print("Llamado get animes emision");
    print('page = $pageAnimesEmision');
    pageAnimesEmision++;
    var url = Uri.https(_baseUrl, 'v4/anime', {
      'limit': limit,
      'q': '',
      'status': '',
      'page': pageAnimesEmision.toString(),
      'order_by': 'score',
      'sort': 'desc',
      'type': 'tv',
      'status': 'airing',
    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    AnimeResponse respuestaAnime = AnimeResponse.fromJson(json.decode(response.body));
    //
    listaAnimesEmision.addAll(respuestaAnime.listaAnimes);
    notifyListeners();
    await Future.delayed(Duration(seconds: 2));

  }

  getOnDisplayCharacters(String animeid) async {
    listaPersonajes.clear();
    var url = Uri.https(_baseUrl, 'v4/anime/$animeid/characters', {

    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    CharactersResponse respuestaPersonajes = CharactersResponse.fromJson(json.decode(response.body));
    //
    listaPersonajes = respuestaPersonajes.data;
    notifyListeners();
    print("Lista personajes cargada");
  }

  Future<List<Anime>> searchAnimes(String query) async {

    var url = Uri.https(_baseUrl, 'v4/anime', {
      'limit': "10",
      'q': query,
      'status': "",
      'order_by': "score",
      'sort': "desc",
    });

    final response = await http.get(url);
    print(response.statusCode);
    if(response.statusCode == 200)
      {
        final animeResponse = AnimeResponse.fromJson(json.decode(response.body));
        return animeResponse.listaAnimes;
      }
    return [];


  }

  void getSuggestionsByQuery(String searchTerm){
    debouncer.value = '';
    debouncer.onValue = (value) async{
      print('Tenemos valor a buscar: $value');
      final results = await searchAnimes(value);
      this._suggestionsStreamController.add(results);
    };
    final timer = Timer.periodic(Duration(seconds: 2), (timer) {
      debouncer.value = searchTerm;
    });

    Future.delayed(Duration(seconds: 3)).then((_) => timer.cancel());
  }
}
