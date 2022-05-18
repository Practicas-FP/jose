import 'dart:convert';

import 'package:buscador_anime/models/anime_response.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:jikan_api/jikan_api.dart';

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
  String limit = '3';

  List<Data> listaAnimes = [];
  List<Data> listaAnimesPopulares = [];
  List<Data> listaPeliculasAnimePopulares = [];
  List<Data> listaAnimesEmision = [];
  List<CharacterData> listaPersonajes = [];

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
    listaAnimes = respuestaAnime.data;
    notifyListeners();
    await Future.delayed(Duration(seconds: 2));


    //var jikan = Jikan();
    //var top = await jikan.getTop(TopType.anime);
    //top.forEach((p0) {print(p0.title);});

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
    listaAnimesPopulares = respuestaAnime.data;
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
    listaPeliculasAnimePopulares.addAll(respuestaAnime.data);
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
    listaAnimesEmision.addAll(respuestaAnime.data);
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
}
