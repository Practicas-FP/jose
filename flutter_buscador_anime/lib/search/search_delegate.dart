

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/anime_response.dart';
import '../providers/anime_provider.dart';

class AnimeSearchDelegate extends SearchDelegate {
  @override
  String get searchFieldLabel => "Buscar animes";

  @override
  List<Widget>? buildActions(BuildContext context) {
    // TODO: implement buildActions
    return [
      IconButton(
          onPressed: () {
            query = "";
          },
          icon: Icon(Icons.clear)),
    ];
  }

  @override
  Widget? buildLeading(BuildContext context) {
    // TODO: implement buildLeading
    return IconButton(
        onPressed: () {
          close(context, query);
        },
        icon: Icon(Icons.arrow_back));
  }

  @override
  Widget buildResults(BuildContext context) {
    // TODO: implement buildResults
    // TODO: implement buildSuggestions
    if (query.isEmpty) return _emptyContainer();

    final animesProvider = Provider.of<AnimesProvider>(context, listen: false);
    animesProvider.searchAnimes(query);

    return FutureBuilder(
      future: animesProvider.searchAnimes(query),
      builder: (context, AsyncSnapshot<List<Anime>> snapshot) {
        if (!snapshot.hasData) {
          return _emptyContainer();
        }

        final animes = snapshot.data;

        return ListView.builder(
            itemCount: animes!.length,
            itemBuilder: (context, int index) {
              return _AnimeItem(
                anime: animes[index],
              );
            });
      },
    );
  }

  @override
  Widget buildSuggestions(BuildContext context) {
    // TODO: implement buildSuggestions
    return _emptyContainer();
  }
}

class _AnimeItem extends StatelessWidget {
  final Anime anime;
  const _AnimeItem({Key? key, required this.anime}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: FadeInImage(
        placeholder: AssetImage("assets/no-image.jpg"),
        image: NetworkImage(anime.images.jpg.imageUrl),
        width: 50,
        fit: BoxFit.contain,
      ),
      title: Text(anime.title),
      subtitle: Text(anime.titleJapanese),
      onTap: () {
        Provider.of<AnimesProvider>(context, listen: false)
            .getOnDisplayCharacters(anime.malId.toString());
        Navigator.pushNamed(context, 'details', arguments: anime);
      },
    );
  }
}

class _emptyContainer extends StatelessWidget {
  const _emptyContainer({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(),
    );
  }
}
