package com.example.buscadoranime.data.database.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.example.buscadoranime.data.database.entities.AnimeEntity

@Dao
interface AnimeDAO {
    @Query("SELECT*FROM anime_table ORDER BY mal_id DESC")
    suspend fun getALLAnimes ():List<AnimeEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertAll(animes:List<AnimeEntity>)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insert(animes:AnimeEntity)
}