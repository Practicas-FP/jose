package com.example.buscadoranime.ui.favGallery

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.example.buscadoranime.databinding.AnimeCardBinding
import com.squareup.picasso.Picasso

class AnimesFavoritosViewHolder(view: View):RecyclerView.ViewHolder(view) {
    private val binding = AnimeCardBinding.bind(view)
    fun bind(anime: AnimeEntity, mlistener:AnimesFavoritosAdapter.onItemClickListener) {
        Picasso.get().load(anime.image_url).into(binding.imageViewPortadaAnime)
        binding.textViewTituloAnime.text = anime.title
        itemView.setOnClickListener() {
            mlistener.onItemClick(anime)

        }


    }
}