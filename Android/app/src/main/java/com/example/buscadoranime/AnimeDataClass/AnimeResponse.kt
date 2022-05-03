package com.example.buscadoranime.AnimeDataClass

data class AnimeResponse(
    val `data`: List<Data>,
    val pagination: Pagination
)