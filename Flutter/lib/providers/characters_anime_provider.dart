import 'dart:convert';

import 'package:buscador_anime/models/anime_response.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:jikan_api/jikan_api.dart';

import '../models/characters_response.dart';


class CharactersAnimeProvider {
  String _baseUrl = "api.jikan.moe";
  List<CharacterData> listaPersonajes = [];

  CharactersAnimeProvider() {
    print("Inicializado character provider");
  }

  Future<CharactersResponse> getOnDisplayCharacters(String animeid) async {
    print("pillando personajes");
    var url = Uri.https(_baseUrl, 'v4/anime/$animeid/characters', {

    });

    // Await the http get response, then decode the json-formatted response.
    final response = await http.get(url);
     CharactersResponse respuestaPersonajes = CharactersResponse.fromJson(json.decode(response.body));
    //
    return respuestaPersonajes;
    listaPersonajes = respuestaPersonajes.data;
    print("holaaaa");


  }
}
