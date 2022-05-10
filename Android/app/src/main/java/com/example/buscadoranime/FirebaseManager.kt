package com.example.buscadoranime

import android.util.Log
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.ktx.Firebase

class FirebaseManager {
    val database = FirebaseDatabase.getInstance().reference

    fun devolverFavoritosFirebase(): MutableList<AnimeEntity> {
        var listadoAnimes = mutableListOf<AnimeEntity>()
        listadoAnimes.clear()
        database.child(Firebase.auth.currentUser!!.uid).child("favoritos").get()
            .addOnSuccessListener {
                it.children.forEach(){ child ->
                    println(child.child("title").value)
                    println("hola")
                    val nuevoAnime = AnimeEntity(
                        child.child("mal_id").value.toString().toInt(),
                        child.child("title").value.toString(),
                        child.child("image_url").value.toString(),
                        child.child("synopsis").value.toString())
                    println(nuevoAnime)
                    nuevoAnime.let { listadoAnimes.add(it) }

                }
                println("Contratadme hijos de puta")
            }
        return listadoAnimes
    }

    fun guardarAnimes(anime: AnimeEntity) {
        database.child(Firebase.auth.currentUser!!.uid).child("favoritos")
            .child(anime.mal_id.toString()).setValue(anime)
    }

    fun leerAnimesFavoritos(dataSnapshot: DataSnapshot) {
        var listadoAnimes = mutableListOf<AnimeEntity>()
        var listadoFirebase = database.child(Firebase.auth.currentUser!!.uid).child("favoritos").get()
        //listadoAnimes.clear()
/*        dataSnapshot.children.forEach {
            child  ‐>
            val anime: AnimeEntity? =
                AnimeEntity(
                    child.child("name").getValue(),
                    child.child("date").getValue(),
                    child.child("description").getValue(),
                    child.child("url").getValue(),
                    child.key
                )
            anime?.let { listadoAnimes.add(it) }
        }*/

/*        dataSnapshot.children.forEach {
            println(it.child("title").value)

        }*/
    }
}