package com.example.buscadoranime.ui.favGallery

import android.content.Context
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.R
import com.example.buscadoranime.data.database.entities.AnimeEntity


class AnimesFavoritosAdapter(val animes: List<AnimeEntity>) : RecyclerView.Adapter<AnimesFavoritosViewHolder>() {
    private lateinit var mListener: onItemClickListener

    interface onItemClickListener {
        fun onItemClick(anime: AnimeEntity)
    }

    fun setOnItemClickListener(listener: onItemClickListener) {
        mListener = listener
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AnimesFavoritosViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return AnimesFavoritosViewHolder(layoutInflater.inflate(R.layout.anime_card, parent, false))
    }

    override fun onBindViewHolder(holder: AnimesFavoritosViewHolder, position: Int) {
        val item = animes[position]
        holder.bind(item, mListener)
    }

    override fun getItemCount(): Int {
        return animes.size;
    }

/*    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AnimesFavoritosViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return AnimesFavoritosViewHolder(layoutInflater.inflate(R.layout.anime_card, parent, false))
    }

    override fun onBindViewHolder(holder: AnimesFavoritosViewHolder, position: Int) {
        val item = animes[position]
        holder.bind(item, mListener)
    }

    override fun getItemCount(): Int {
        return animes.size;
    }*/
}