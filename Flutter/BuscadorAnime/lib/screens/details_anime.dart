// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
  //TODO: Cambiar después por una instancia de anime
  const DetailsScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final String anime =
        ModalRoute.of(context)?.settings.arguments.toString() ?? 'no-anime';

    return Scaffold(
      // Body: custom scroll view
      body: CustomScrollView(
        slivers: [
          _CustomAppBar(),
          SliverList(
              delegate: SliverChildListDelegate([
                _PosterAndTitle(),

              ]
              )
          ),
        ],
      ),
    );
  }
}

class _CustomAppBar extends StatelessWidget {
  const _CustomAppBar({Key? key}) : super(key: key);

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
          child: Text('movie.title', style: TextStyle(fontSize: 16),),
        ),
        background: FadeInImage(
            placeholder: AssetImage('assets/loading.gif'),
            image: NetworkImage('https://via.placeholder.com/300x400'),
            fit: BoxFit.cover),
      ),
    );
  }
}

class _PosterAndTitle extends StatelessWidget {
  const _PosterAndTitle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 20),
      padding: EdgeInsets.symmetric(horizontal: 20),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: FadeInImage(
              placeholder: AssetImage('assets/no-image.jpg'),
              image: NetworkImage('https://via.placeholder.com/200x300'),
              height: 150,
            ),
          ),
          SizedBox(width: 20),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("movie.title",
                  style: buildTextTheme(context).headline5,
              overflow: TextOverflow.ellipsis,
              maxLines: 2,),
              Text("movie.originalTitle",
                style: buildTextTheme(context).subtitle1,
                overflow: TextOverflow.ellipsis,
                maxLines: 2,),
              Row(
                children: [
                  Icon(
                      Icons.star_outlined,
                  size: 15,
                  color: Colors.grey,
                  ),
                  SizedBox(
                    width: 5,
                  ),
                  Text(
                      'movie.voteAverage',
                      style: buildTextTheme(context).caption,
                  ),
                ],
              )
            ],
          )
        ],
      ),
    );
  }

  TextTheme buildTextTheme(BuildContext context) => Theme.of(context).textTheme;
}
