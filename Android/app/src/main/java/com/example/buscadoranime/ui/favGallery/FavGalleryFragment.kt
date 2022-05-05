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
import com.example.buscadoranime.R
import com.example.buscadoranime.data.database.AnimeDatabase
import com.example.buscadoranime.data.database.entities.AnimeEntity
import com.example.buscadoranime.databinding.FavGalleryFragmentBinding
import com.example.buscadoranime.databinding.FragmentGalleryBinding
import com.example.buscadoranime.ui.gallery.AnimeAdapter
import com.example.buscadoranime.ui.gallery.DetallesAnimeActivity
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class FavGalleryFragment : Fragment() {

    companion object {
        fun newInstance() = FavGalleryFragment()
    }

    private lateinit var adapter: AnimesFavoritosAdapter
    private var _binding: FavGalleryFragmentBinding? = null
    private lateinit var listadoAnimes: List<AnimeEntity>
    private lateinit var viewModel: FavGalleryViewModel

    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        _binding = FavGalleryFragmentBinding.inflate(inflater, container, false)
        val root: View = binding.root

        loadFavoritosRoom()
        initRecyclerView()




        return inflater.inflate(R.layout.fav_gallery_fragment, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProvider(this).get(FavGalleryViewModel::class.java)
        // TODO: Use the ViewModel


    }

    private fun initRecyclerView() {
        adapter = AnimesFavoritosAdapter(listadoAnimes)
        adapter.setOnItemClickListener(object : AnimesFavoritosAdapter.onItemClickListener{

            override fun onItemClick(anime: AnimeEntity) {
                startActivity(
                    Intent(requireContext(), DetallesAnimeActivity::class.java)
                        .putExtra("anime.mal_id", anime.mal_id)
                        .putExtra("anime.title", anime.title)
                        .putExtra("anime.images.jpg.image_url", anime.image_url)
                        .putExtra("anime.synopsis", anime.synopsis))
            }
        })
        binding.rvAnimesFavoritos.layoutManager = LinearLayoutManager(requireContext())

        binding.rvAnimesFavoritos.adapter = adapter
    }

    private fun loadFavoritosRoom(){
        val db = Room.databaseBuilder(
            requireContext(),
            AnimeDatabase::class.java, "database-name"
        ).build()

        CoroutineScope(Dispatchers.IO).launch {
            listadoAnimes = db.getAnimeDao().getALLAnimes()
            db.close()


        }
    }

}