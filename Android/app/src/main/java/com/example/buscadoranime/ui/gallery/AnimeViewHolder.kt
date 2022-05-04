package com.example.buscadoranime.ui.gallery

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.databinding.AnimeCardBinding
import com.squareup.picasso.Picasso

class AnimeViewHolder(view: View):RecyclerView.ViewHolder(view) {
    private val binding = AnimeCardBinding.bind(view)
    fun bind(anime: Data){
        Picasso.get().load(anime.images.jpg.image_url).into(binding.imageViewPortadaAnime)
        binding.textViewTituloAnime.text = anime.title.toString()
    }

}