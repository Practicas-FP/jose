package com.example.buscadoranime.ui.gallery

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.R


class AnimeAdapter(val animes:List<Data>): RecyclerView.Adapter<AnimeViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AnimeViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return AnimeViewHolder(layoutInflater.inflate(R.layout.anime_card, parent, false))
    }

    override fun onBindViewHolder(holder: AnimeViewHolder, position: Int) {
        val item = animes[position]
        holder.bind(item)
    }

    override fun getItemCount(): Int {
        return animes.size;
    }
}