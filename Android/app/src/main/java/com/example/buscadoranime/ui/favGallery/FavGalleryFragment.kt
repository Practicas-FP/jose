package com.example.buscadoranime.ui.favGallery

import android.content.Intent
import androidx.lifecycle.ViewModelProvider
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.room.Room
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.FirebaseManager
import com.example.buscadoranime.R
import com.example.buscadoranime.data.database.AnimeDatabase
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.example.buscadoranime.databinding.FavGalleryFragmentBinding
import com.example.buscadoranime.databinding.FragmentGalleryBinding
import com.example.buscadoranime.ui.gallery.AnimeAdapter
import com.example.buscadoranime.ui.gallery.DetallesAnimeActivity
import com.google.firebase.auth.ktx.auth
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.ktx.Firebase
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class FavGalleryFragment : Fragment() {

    companion object {
        fun newInstance() = FavGalleryFragment()
    }

    private lateinit var adapter: FavAnimeAdapter
    private var _binding: FavGalleryFragmentBinding? = null
    private var listadoAnimes = mutableListOf<AnimeEntity>()
    private lateinit var viewModel: FavGalleryViewModel

    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FavGalleryFragmentBinding.inflate(inflater, container, false)
        val root: View = binding.root




        return root
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProvider(this).get(FavGalleryViewModel::class.java)

        initRecyclerView()

        if (Firebase.auth.currentUser?.uid == null) {
            loadFavoritosRoom()
        } else {
            loadFavoritosFirebase()
        }

    }

    override fun onResume() {
        super.onResume()
        listadoAnimes.clear()
        if (Firebase.auth.currentUser?.uid == null) {
            loadFavoritosRoom()
        } else {
            loadFavoritosFirebase()
        }
    }

    private fun initRecyclerView() {
        adapter = FavAnimeAdapter(listadoAnimes)
        adapter.setOnItemClickListener(object : FavAnimeAdapter.onItemClickListener {
            override fun onItemClick(anime: AnimeEntity) {
                startActivity(
                    Intent(requireContext(), DetallesAnimeActivity::class.java)
                        .putExtra("anime.mal_id", anime.mal_id)
                        .putExtra("anime.title", anime.title)
                        .putExtra("anime.images.jpg.image_url", anime.image_url)
                        .putExtra("anime.synopsis", anime.synopsis)
                )
            }
        })
        binding.rvAnimesFavoritos.layoutManager = LinearLayoutManager(requireContext())
        binding.rvAnimesFavoritos.adapter = adapter

    }

    private fun loadFavoritosRoom() {
        val db = Room.databaseBuilder(
            requireContext(),
            AnimeDatabase::class.java, "database-name"
        ).build()

        CoroutineScope(Dispatchers.IO).launch {
            listadoAnimes.addAll(db.getAnimeDao().getALLAnimes())
            db.close()
            withContext(Dispatchers.Main) {
                adapter.notifyDataSetChanged()
            }
        }

    }

    private fun loadFavoritosFirebase() {
        val database = FirebaseDatabase.getInstance().reference
        listadoAnimes.clear()
        database.child(Firebase.auth.currentUser!!.uid).child("favoritos").get()
            .addOnSuccessListener {
                listadoAnimes.clear()
                it.children.forEach() { child ->
                    println(child.child("title").value)
                    println("hola")
                    val nuevoAnime = AnimeEntity(
                        child.child("mal_id").value.toString().toInt(),
                        child.child("title").value.toString(),
                        child.child("image_url").value.toString(),
                        child.child("synopsis").value.toString()
                    )
                    println(nuevoAnime)
                    listadoAnimes.add(nuevoAnime)
                }
                adapter.notifyDataSetChanged()

            }
    }

}