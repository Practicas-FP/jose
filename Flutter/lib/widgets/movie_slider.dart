import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/anime_response.dart';
import '../providers/anime_provider.dart';

class MovieSlider extends StatefulWidget {
  final List<Anime> listadoAnimes;
  final String tituloSlider;
  final Function onNextPage;

  const MovieSlider({Key? key, required this.listadoAnimes, required this.tituloSlider, required this.onNextPage}) : super(key: key);

  @override
  State<MovieSlider> createState() => _MovieSliderState();
}

class _MovieSliderState extends State<MovieSlider> {

  final ScrollController scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    
    scrollController.addListener(() {
      if(scrollController.position.pixels >= scrollController.position.maxScrollExtent)
        {
          //TODO: llamar provider
          widget.onNextPage();
          print("limite pagina");
        }

    });
  }

  @override
  void dispose() {
    super.dispose();
  }

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
            child: Text(widget.tituloSlider,
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ),
          Expanded(
            child: ListView.builder(
              controller: scrollController,
              scrollDirection: Axis.horizontal,
              itemCount: widget.listadoAnimes.length,
              itemBuilder: (BuildContext context, int index) => _MoviePoster(anime: widget.listadoAnimes[index],),
            ),
          )
        ],
      ),
    );
  }

}

class _MoviePoster extends StatelessWidget {
  final Anime anime;
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
              Provider.of<AnimesProvider>(context, listen: false).getOnDisplayCharacters(anime.malId.toString());
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
