package com.example.buscadoranime.ui.gallery

import android.content.Context
import android.content.Intent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.R
import com.example.buscadoranime.databinding.AnimeCardBinding
import kotlin.coroutines.coroutineContext


class AnimeAdapter(val animes: List<Data>, val context: Context) : RecyclerView.Adapter<AnimeViewHolder>() {
    private lateinit var mListener: onItemClickListener

    interface onItemClickListener {
        fun onItemClick(anime: Data)
    }

    fun setOnItemClickListener(listener: onItemClickListener) {
        mListener = listener
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): AnimeViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return AnimeViewHolder(layoutInflater.inflate(R.layout.anime_card, parent, false))
    }

    override fun onBindViewHolder(holder: AnimeViewHolder, position: Int) {
        val item = animes[position]
        holder.bind(item, mListener)
    }

    override fun getItemCount(): Int {
        return animes.size;
    }
}