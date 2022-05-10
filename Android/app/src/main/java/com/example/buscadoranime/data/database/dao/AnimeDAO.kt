package com.example.buscadoranime.data.database.dao

import androidx.room.*
import com.example.buscadoranime.data.database.entities.AnimeEntity

@Dao
interface AnimeDAO {
    @Query("SELECT*FROM anime_table ORDER BY mal_id DESC")
    suspend fun getALLAnimes ():List<AnimeEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(animes:List<AnimeEntity>)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insert(anime:AnimeEntity)

    @Delete
    fun deleteAll(anime: AnimeEntity)

    @Query("DELETE FROM anime_table WHERE mal_id = :animeID")
    fun deleteByAnimeId(animeID: Int)
}