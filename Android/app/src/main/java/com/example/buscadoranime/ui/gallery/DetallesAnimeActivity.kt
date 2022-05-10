package com.example.buscadoranime.ui.gallery

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.ui.AppBarConfiguration
import androidx.room.Room
import com.example.buscadoranime.FirebaseManager
import com.example.buscadoranime.data.database.AnimeDatabase
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.example.buscadoranime.databinding.ActivityDetallesAnimeBinding
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.ktx.Firebase
import com.squareup.picasso.Picasso
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class DetallesAnimeActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityDetallesAnimeBinding
    private var listadoAnimes = mutableListOf<AnimeEntity>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityDetallesAnimeBinding.inflate(layoutInflater)
        setContentView(binding.root)



        binding.textViewTituloAnimeDatalles.text = intent.getStringExtra("anime.title")
        Picasso.get().load(intent.getStringExtra("anime.images.jpg.image_url"))
            .into(binding.imageViewPortadaAnimeDetalles)
        binding.textViewSinopsisAnime.text = intent.getStringExtra("anime.synopsis")

        val animeFavorito = AnimeEntity(
            intent.getIntExtra("anime.mal_id", -1),
            intent.getStringExtra("anime.title")!!,
            intent.getStringExtra("anime.images.jpg.image_url")!!,
            intent.getStringExtra("anime.synopsis")!!
        )

        if(Firebase.auth.currentUser == null)
        {
            loadFavoritosRoom()
        }
        else
        {
            loadFavoritosFirebase()
        }



        binding.buttonGuardarFavorito.setOnClickListener(){
            if(Firebase.auth.currentUser == null)
            {
                saveFavoritoRoom(animeFavorito)
            }
            else
            {
                FirebaseManager().guardarAnimes(animeFavorito)
                binding.buttonGuardarFavorito.visibility = View.INVISIBLE
                binding.buttonBorrarFavorito.visibility = View.VISIBLE
            }
        }

        binding.buttonBorrarFavorito.setOnClickListener(){
            if(Firebase.auth.currentUser == null)
            {
                deleteFavoritoRoom(animeFavorito.mal_id)
            }
            else
            {
                deleteFavoritosFirebase(animeFavorito.mal_id)
            }
        }
    }

    private fun saveFavoritoRoom(anime: AnimeEntity){
        val db = Room.databaseBuilder(
            applicationContext,
            AnimeDatabase::class.java, "database-name"
        ).build()

        CoroutineScope(Dispatchers.IO).launch {
            db.getAnimeDao().insert(anime)
            db.close()
            withContext(Dispatchers.Main) {
                binding.buttonGuardarFavorito.visibility = View.INVISIBLE
                binding.buttonBorrarFavorito.visibility = View.VISIBLE
            }
        }

    }

    private fun deleteFavoritoRoom(animeID: Int){
        val db = Room.databaseBuilder(
            applicationContext,
            AnimeDatabase::class.java, "database-name"
        ).build()

        CoroutineScope(Dispatchers.IO).launch {
            db.getAnimeDao().deleteByAnimeId(animeID)
            db.close()
            withContext(Dispatchers.Main) {
                binding.buttonBorrarFavorito.visibility = View.INVISIBLE
                binding.buttonGuardarFavorito.visibility = View.VISIBLE
            }
        }

    }

    private fun loadFavoritosRoom() {
        val db = Room.databaseBuilder(
            applicationContext,
            AnimeDatabase::class.java, "database-name"
        ).build()

        CoroutineScope(Dispatchers.IO).launch {
            listadoAnimes.addAll(db.getAnimeDao().getALLAnimes())
            db.close()
            if((listadoAnimes.firstOrNull { it.mal_id == intent.getIntExtra("anime.mal_id", -1) }) != null)
            {
                binding.buttonGuardarFavorito.visibility = View.INVISIBLE
                binding.buttonBorrarFavorito.visibility = View.VISIBLE
            }

        }
    }

    private fun loadFavoritosFirebase() {
        val database = FirebaseDatabase.getInstance().reference
        listadoAnimes.clear()
        database.child(Firebase.auth.currentUser!!.uid).child("favoritos").get()
            .addOnSuccessListener {
                it.children.forEach() { child ->
                    println(child.child("title").value)
                    val nuevoAnime = AnimeEntity(
                        child.child("mal_id").value.toString().toInt(),
                        child.child("title").value.toString(),
                        child.child("image_url").value.toString(),
                        child.child("synopsis").value.toString()
                    )
                    println(nuevoAnime)
                    listadoAnimes.add(nuevoAnime)

                }
                if((listadoAnimes.firstOrNull { it.mal_id == intent.getIntExtra("anime.mal_id", -1) }) != null)
                {
                    binding.buttonGuardarFavorito.visibility = View.INVISIBLE
                    binding.buttonBorrarFavorito.visibility = View.VISIBLE
                }
            }
    }
    private fun deleteFavoritosFirebase(animeID: Int){
        val database = FirebaseDatabase.getInstance().reference

        database.child(Firebase.auth.currentUser!!.uid).child("favoritos")
            .child(animeID.toString()).setValue(null)
        binding.buttonBorrarFavorito.visibility = View.INVISIBLE
        binding.buttonGuardarFavorito.visibility = View.VISIBLE

    }



}