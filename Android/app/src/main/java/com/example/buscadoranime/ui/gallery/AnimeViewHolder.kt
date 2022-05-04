package com.example.buscadoranime.ui.gallery

import android.content.Context
import android.content.Intent
import android.view.View
import android.widget.Toast
import androidx.core.content.ContextCompat.startActivity
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.R
import com.example.buscadoranime.databinding.AnimeCardBinding
import com.squareup.picasso.Picasso

class AnimeViewHolder(view: View):RecyclerView.ViewHolder(view) {
    private val binding = AnimeCardBinding.bind(view)
    fun bind(anime: Data, mlistener:AnimeAdapter.onItemClickListener) {
        Picasso.get().load(anime.images.jpg.image_url).into(binding.imageViewPortadaAnime)
        binding.textViewTituloAnime.text = anime.title
        itemView.setOnClickListener() {
            mlistener.onItemClick(anime)

        }


    }
}