package com.example.buscadoranime.ui.gallery

import android.os.Bundle
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.navigateUp
import androidx.navigation.ui.setupActionBarWithNavController
import com.example.buscadoranime.R
import com.example.buscadoranime.databinding.ActivityDetallesAnimeBinding
import com.squareup.picasso.Picasso

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
    }


}