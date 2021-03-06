import 'package:card_swiper/card_swiper.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/anime_response.dart';
import '../providers/anime_provider.dart';

class CardSwipper extends StatelessWidget {
  final List<Anime> listadoAnimes;

  CardSwipper({Key? key, required this.listadoAnimes}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Container(
        width: double.infinity,
        height: size.height * 0.5,
        child: Swiper(
          itemCount: listadoAnimes.length,
          layout: SwiperLayout.STACK,
          itemWidth: size.width * 0.6,
          itemHeight: size.width * 0.9,
          itemBuilder: (_, int index) {
            return GestureDetector(
              onTap: () {
                Provider.of<AnimesProvider>(context, listen: false).getOnDisplayCharacters(listadoAnimes[index].malId.toString());
                Navigator.pushNamed(
                  context,
                  'details',
                  arguments: listadoAnimes[index]
                );
              },
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: FadeInImage(
                    placeholder: AssetImage('assets/no-image.jpg'),
                    image: NetworkImage(listadoAnimes[index].images.jpg.imageUrl),
                    fit: BoxFit.cover),
              ),
            );
          },
        ));
  }
}
