import 'package:flutter/material.dart';
import 'package:vertical_card_pager/vertical_card_pager.dart';
import 'package:http/http.dart' as http;

import 'drawer_anime.dart';

class HomeScreenStatefull extends StatefulWidget {
  const HomeScreenStatefull({Key? key}) : super(key: key);

  @override
  State<HomeScreenStatefull> createState() => _HomeScreenStatefullState();


}

class _HomeScreenStatefullState extends State<HomeScreenStatefull> {
  int counter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: const Text('HomeScreenStatefull')),
        elevation: 15,
      ),
      drawer: DrawerAnime(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Card(
              elevation: 15,
              borderOnForeground: true,
              child: Text("Pulsaciones:", style: TextStyle(fontSize: 30)),
            ),
            Card(
              elevation: 15,
              borderOnForeground: true,
              child: Text("$counter"),
            ),
          ],
        ),
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: () {
              setState(() {
                counter++;
              });
            },
            child: const Icon(Icons.add_circle),
          ),
          FloatingActionButton(
            onPressed: () {
              setState(() {
                counter--;
              });
            },
            child: const Icon(Icons.remove_circle),
          ),
        ],
      ),
    );
  }
}