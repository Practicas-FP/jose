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
  String page = "";

  List<Data> listaAnimes = [];
  List<CharacterData> listaPersonajes = [];

  AnimesProvider() {
    print("Inicializado anime provider");
    getOnDisplayAnimes();
  }

  getOnDisplayAnimes() async {
    var url = Uri.https(_baseUrl, 'v4/anime', {
      'q': q,
      'status': status,
      'page': '1',
      'order_by': order_by,
      'sort': sort
    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    AnimeResponse respuestaAnime = AnimeResponse.fromJson(json.decode(response.body));
    //
    listaAnimes = respuestaAnime.data;
    notifyListeners();

    //var jikan = Jikan();
    //var top = await jikan.getTop(TopType.anime);
    //top.forEach((p0) {print(p0.title);});

  }

  getOnDisplayCharacters() async {
    var url = Uri.https(_baseUrl, 'v4/anime/5114/characters', {

    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
    print(response.body);
    CharactersResponse respuestaPersonajes = CharactersResponse.fromJson(json.decode(response.body));
    //
    listaPersonajes = respuestaPersonajes.data;
    notifyListeners();
    print("holaaaa");


  }
}
