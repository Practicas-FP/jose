package com.example.buscadoranime.ui.gallery

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.buscadoranime.AnimeDataClass.Data
import com.example.buscadoranime.ApiService
import com.example.buscadoranime.databinding.FragmentGalleryBinding
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class GalleryFragment : Fragment() {

    private var _binding: FragmentGalleryBinding? = null
    private lateinit var adapter: AnimeAdapter
    private val animeImages = mutableListOf<Data>()

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
            inflater: LayoutInflater,
            container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View {
        val galleryViewModel =
                ViewModelProvider(this).get(GalleryViewModel::class.java)

        _binding = FragmentGalleryBinding.inflate(inflater, container, false)
        val root: View = binding.root

        searchByName("")

        galleryViewModel.text.observe(viewLifecycleOwner) {

        }
        return root
    }

    private fun initRecyclerView() {
        adapter = AnimeAdapter(animeImages)
        binding.rvAnimes.layoutManager = LinearLayoutManager(requireContext())
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    private fun getRetrofit(): Retrofit {
        return Retrofit.Builder().
        baseUrl("https://api.jikan.moe/v4/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    private fun searchByName(query: String){
        CoroutineScope(Dispatchers.IO).launch {
            val call = getRetrofit().create(ApiService::class.java).getAnimesByName("anime?q=&status=&type=&limit=3&sfw&order_by=score&sort=desc")
            val animes = call.body()

            requireActivity().runOnUiThread {
                if(call.isSuccessful){
                    val images = animes?.data ?: emptyList()
                    Toast.makeText(requireContext(), animes?.data?.get(0)?.title_english.toString(), Toast.LENGTH_SHORT).show()
                    val text = ""
                    for(i in 0.. animes!!.data!!.size -1)
                    {
                        println(animes.data.get(i).title)
                    }
                    //animeImages.clear()
                    //animeImages.addAll(images)
                    //adapter.notifyDataSetChanged()
                }
                else{
                    //showError
                }
            }
        }
    }

    private fun showError() {
        Toast.makeText(requireContext(), "Ha ocurrido un error", Toast.LENGTH_SHORT).show()
    }
}