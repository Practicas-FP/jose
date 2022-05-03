package com.example.androidtutorial

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    companion object{
        const val moneda = "EUR"
    }
    var saldo: Float = 300.54f
    var entero: Int = 4
    var sueldo = 764.82
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fecha = "05/06/1990"
        var nombre = "Jose"
        var vip: Boolean = false
        nombre = "Roberto"
        var inicial: Char = '3'

        println(nombre + saldo.toString())
        println(moneda)
    }
}