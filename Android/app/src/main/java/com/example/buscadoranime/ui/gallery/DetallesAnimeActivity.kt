package com.example.buscadoranime.ui.gallery

import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.room.Room
import com.example.buscadoranime.R
import com.example.buscadoranime.data.database.AnimeDatabase
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.example.buscadoranime.databinding.ActivityDetallesAnimeBinding
import com.squareup.picasso.Picasso
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class DetallesAnimeActivity : AppCompatActivity() {

    private lateinit var appBarConfiguration: AppBarConfiguration
    private lateinit var binding: ActivityDetallesAnimeBinding

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

        binding.buttonGuardarFavorito.setOnClickListener(){
            saveFavoritoRoom(animeFavorito)
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
        }
    }


}