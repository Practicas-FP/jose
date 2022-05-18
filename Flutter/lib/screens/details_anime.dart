// ignore_for_file: prefer_const_constructors

import 'package:buscador_anime/models/characters_response.dart';
import 'package:buscador_anime/providers/anime_provider.dart';
import 'package:buscador_anime/providers/characters_anime_provider.dart';
import 'package:buscador_anime/widgets/widgets.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/anime_response.dart';

class DetailsScreen extends StatelessWidget {
  //TODO: Cambiar después por una instancia de anime
  const DetailsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final Anime anime = ModalRoute.of(context)?.settings.arguments as Anime;

    return Scaffold(
      // Body: custom scroll view
      body: CustomScrollView(
        slivers: [
          _CustomAppBar(
            anime: anime,
          ),
          SliverList(
              delegate: SliverChildListDelegate([
            _PosterAndTitle(
              anime: anime,
            ),
            _Overview(
              anime: anime,
            ),
            CastingCards(listaPersonajes: Provider.of<AnimesProvider>(context).listaPersonajes),
          ])),
        ],
      ),
    );
  }
}

class _CustomAppBar extends StatelessWidget {
  final Anime anime;
  const _CustomAppBar({Key? key, required this.anime}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      backgroundColor: Colors.indigo,
      floating: false,
      pinned: true,
      expandedHeight: 200,
      flexibleSpace: FlexibleSpaceBar(
        centerTitle: true,
        titlePadding: EdgeInsets.all(0),
        title: Container(
          width: double.infinity,
          alignment: Alignment.bottomCenter,
          color: Colors.black12,
          child: Text(
            anime.title,
            style: TextStyle(fontSize: 16),
          ),
        ),
        background: FadeInImage(
            placeholder: AssetImage('assets/loading.gif'),
            image: NetworkImage(anime.images.jpg.imageUrl),
            fit: BoxFit.cover),
      ),
    );
  }
}

class _PosterAndTitle extends StatelessWidget {

  final Anime anime;

  const _PosterAndTitle( {required this.anime} );


  @override
  Widget build(BuildContext context) {

    final TextTheme textTheme = Theme.of(context).textTheme;
    final size = MediaQuery.of(context).size;

    return Container(
      margin: EdgeInsets.only( top: 20 ),
      padding: EdgeInsets.symmetric( horizontal: 20 ),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: FadeInImage(
              placeholder: AssetImage('assets/no-image.jpg'),
              image: NetworkImage( anime.images.jpg.imageUrl ),
              height: 150,
            ),
          ),

          SizedBox( width: 20 ),

          ConstrainedBox(
            constraints: BoxConstraints( maxWidth: size.width - 190 ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [

                Text( anime.title, style: textTheme.headline5, overflow: TextOverflow.ellipsis, maxLines: 2 ),

                Text( anime.titleJapanese, style: textTheme.subtitle1, overflow: TextOverflow.ellipsis, maxLines: 2),

                Row(
                  children: [
                    Icon( Icons.star_outline, size: 15, color: Colors.grey ),
                    SizedBox( width: 5 ),
                    Text( '${anime.score.toString()}', style: textTheme.caption )
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}


TextTheme buildTextTheme(BuildContext context) => Theme.of(context).textTheme;

class _Overview extends StatelessWidget {
  final Anime anime;
  const _Overview({Key? key, required this.anime}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
      child: Text(
        anime.synopsis,
        textAlign: TextAlign.justify,
        style: buildTextTheme(context).subtitle1,
      ),
    );
  }
}
