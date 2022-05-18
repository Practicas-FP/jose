import 'package:flutter/material.dart';

import '../models/characters_response.dart';

class CastingCards extends StatelessWidget {
  final List<CharacterData> listaPersonajes;
  CastingCards({Key? key, required this.listaPersonajes}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 30),
      width: double.infinity,
      height: 180,
      child: ListView.builder(
          itemCount: listaPersonajes.length,
          scrollDirection: Axis.horizontal,
          itemBuilder: (BuildContext context, int index) => _CastCard(personaje: listaPersonajes[index])),
    );
  }
}

class _CastCard extends StatelessWidget {
  final CharacterData personaje;
  const _CastCard({Key? key, required this.personaje}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 10),
      width: 110,
      height: 100,
      child: Column(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: FadeInImage(
              placeholder: AssetImage('assets/no-image.jpg'),
              image: NetworkImage(personaje.character.images.jpg.imageUrl),
              height: 140,
              width: 100,
              fit: BoxFit.cover,
            ),
          ),
          SizedBox(height: 5,),
          Text(
            personaje.character.name,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.center,
          )
        ],
      ),
    );
  }
}
