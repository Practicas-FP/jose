package com.example.buscadoranime.data.database.entities

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "anime_table")
data class AnimeEntity(
    @PrimaryKey
    @ColumnInfo(name="mal_id") val mal_id: Int,
    @ColumnInfo(name="title") val title: String,
    @ColumnInfo(name="image_url") val image_url: String,
    @ColumnInfo(name="synopsis") val synopsis: String,
) {

}