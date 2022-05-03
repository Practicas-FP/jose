package com.example.buscadoranime

import com.example.buscadoranime.AnimeDataClass.AnimeResponse
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Url

interface ApiService {
    @GET
    suspend fun getAnimesByName(@Url url: String):Response<AnimeResponse>
}