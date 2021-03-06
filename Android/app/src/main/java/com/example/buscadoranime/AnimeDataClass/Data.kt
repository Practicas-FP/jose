package com.example.buscadoranime.AnimeDataClass

data class Data(
    val aired: Aired,
    val airing: Boolean,
    val background: Any,
    val broadcast: Broadcast,
    val demographics: List<Any>,
    val duration: String,
    val episodes: Int,
    val explicit_genres: List<Any>,
    val favorites: Int,
    val genres: List<Genre>,
    val images: Images,
    val licensors: List<Any>,
    val mal_id: Int,
    val members: Int,
    val popularity: Int,
    val producers: List<Any>,
    val rank: Int,
    val rating: String,
    val score: Any,
    val scored_by: Any,
    val season: Any,
    val source: String,
    val status: String,
    val studios: List<Any>,
    val synopsis: Any,
    val themes: List<Any>,
    val title: String,
    val title_english: Any,
    val title_japanese: String,
    val title_synonyms: List<Any>,
    val trailer: Trailer,
    val type: String,
    val url: String,
    val year: Any
)