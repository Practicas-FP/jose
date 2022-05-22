import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class DrawerMenu extends StatefulWidget {
  String nombreUsuario = "Usuario";
  DrawerMenu({
    Key? key,
  }) : super(key: key);

  @override
  State<DrawerMenu> createState() => _DrawerMenuState();
}

class _DrawerMenuState extends State<DrawerMenu> {

  @override
  void initState() {
    if(defaultTargetPlatform == TargetPlatform.iOS || defaultTargetPlatform == TargetPlatform.android || kIsWeb)
      widget.nombreUsuario = FirebaseAuth.instance.currentUser?.displayName ?? "Usuario";
    super.initState();
  }



  @override
  Widget build(BuildContext context) {
    return Drawer(
      // Add a ListView to the drawer. This ensures the user can scroll
      // through the options in the drawer if there isn't enough vertical
      // space to fit everything.
      child: ListView(
        // Important: Remove any padding from the ListView.
        padding: EdgeInsets.zero,
        children: [
           DrawerHeader(
            decoration: BoxDecoration(
              color: Colors.blue,
            ),
            child: Text(widget.nombreUsuario),
          ),
          ListTile(
            title: Text("Home"),
            onTap: () {
              // Update the state of the app
              // ...
              // Then close the drawer
              Navigator.pushNamed(context, 'home');
            },
          ),
          ListTile(
            title: const Text('Área de usuario'),
            onTap: () {
              // Update the state of the app
              // ...
              // Then close the drawer
              Navigator.pushNamed(context, 'loginpage');
            },
          ),
        ],
      ),
    );
  }
}