package com.example.buscadoranime.data.database

import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.buscadoranime.data.database.dao.AnimeDAO
import com.example.buscadoranime.data.database.entities.AnimeEntity

@Database(entities = [AnimeEntity::class], version = 1)
abstract class AnimeDatabase: RoomDatabase() {
    abstract fun getAnimeDao(): AnimeDAO
}