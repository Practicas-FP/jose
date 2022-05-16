import 'package:flutter/material.dart';

import '../models/anime_response.dart';

class MovieSlider extends StatelessWidget {
  final List<Data> listadoAnimes;

  const MovieSlider({Key? key, required this.listadoAnimes}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 260,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
            child: Text("Populares",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ),
          Expanded(
            child: ListView.builder(
              scrollDirection: Axis.horizontal,
              itemCount: listadoAnimes.length,
              itemBuilder: (BuildContext context, int index) => _MoviePoster(anime: listadoAnimes[index],),
            ),
          )
        ],
      ),
    );
  }
}

class _MoviePoster extends StatelessWidget {
  final Data anime;
  const _MoviePoster({
    Key? key, required this.anime,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 130,
      height: 190,
      margin: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      child: Column(
        children: [
          GestureDetector(
            onTap: () {
              Navigator.pushNamed(
                  context,
                  'details',
                  arguments: anime
              );
            },
            child: ClipRRect(
              borderRadius: BorderRadius.circular(50),
              child: FadeInImage(
                  placeholder: AssetImage('assets/no-image.jpg'),
                  image: NetworkImage(anime.images.jpg.imageUrl),
                  width: 130,
                  height: 190,
                  fit: BoxFit.cover),
            ),
          ),
          Text(
            anime.title,
            overflow: TextOverflow.ellipsis,
          )
      ],
    ),
    );
  }
}
