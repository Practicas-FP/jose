
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/anime_provider.dart';
import '../search/search_delegate.dart';
import '../widgets/card_swipper.dart';
import '../widgets/drawer_anime.dart';
import '../widgets/movie_slider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    final animeProvider = Provider.of<AnimesProvider>(context);


    return Scaffold(
      appBar: AppBar(
        title: Text("Buscador de Anime"),
        elevation: 0,
        actions: [
          IconButton(
              onPressed: (){
                showSearch(context: context, delegate: AnimeSearchDelegate());
              },
              icon: Icon(Icons.search_outlined)
          )
        ],
      ),
      drawer: DrawerMenu(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            //Tarjetas principales
            CardSwipper(listadoAnimes: animeProvider.listaAnimes),
            //Slider de películas
            MovieSlider(tituloSlider: "Animes en emision", listadoAnimes: animeProvider.listaAnimesEmision, onNextPage: () => animeProvider.getOnAnimesEnEmision()),
            MovieSlider(tituloSlider: "Películas de anime populares", listadoAnimes: animeProvider.listaPeliculasAnimePopulares, onNextPage: () => animeProvider.getOnPopularPeliculasAnimes()),
          ],

        ),
      ),
    );
  }
}

