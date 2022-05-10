package com.example.buscadoranime.ui.login

import android.content.ContentValues
import android.content.Intent
import android.opengl.Visibility
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import com.example.buscadoranime.R
import com.example.buscadoranime.databinding.FragmentGalleryBinding
import com.example.buscadoranime.databinding.FragmentLogBinding
import com.example.buscadoranime.databinding.LoginFragmentBinding
import com.google.android.gms.auth.api.identity.BeginSignInRequest
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase
import com.squareup.picasso.Picasso

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
private const val ARG_PARAM1 = "param1"
private const val ARG_PARAM2 = "param2"

/**
 * A simple [Fragment] subclass.
 * Use the [LogFragment.newInstance] factory method to
 * create an instance of this fragment.
 */
class LogFragment : Fragment() {
    // TODO: Rename and change types of parameters
    private var param1: String? = null
    private var param2: String? = null

    private lateinit var binding: FragmentLogBinding
    // [START declare_auth]
    private lateinit var auth: FirebaseAuth
    // [END declare_auth]

    private lateinit var googleSignInClient: GoogleSignInClient


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        arguments?.let {
            param1 = it.getString(ARG_PARAM1)
            param2 = it.getString(ARG_PARAM2)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentLogBinding.inflate(inflater, container, false)
        val root: View = binding.root



        // [START config_signin]
        // Configure Google Sign In
        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.your_web_client_id))
            .requestEmail()
            .build()

        googleSignInClient = GoogleSignIn.getClient(requireActivity(), gso)
        // [END config_signin]


        // [START initialize_auth]
        // Initialize Firebase Auth
        auth = Firebase.auth
        // [END initialize_auth]

        if(auth.currentUser != null)
        {
            binding.buttonLogGoogle.visibility = View.INVISIBLE
            binding.buttonLogOutGoogle.visibility = View.VISIBLE

            binding.textViewNombreUsuario.text = auth.currentUser?.displayName
            binding.textViewCorreoElectronico.text = auth.currentUser?.email
            Picasso.get().load(auth.currentUser?.photoUrl).into(binding.imageViewFotoUusuario)
        }
        else
        {
            binding.buttonLogGoogle.visibility = View.VISIBLE
            binding.buttonLogOutGoogle.visibility = View.INVISIBLE
            binding.imageViewFotoUusuario.visibility = View.INVISIBLE
            binding.textViewNombreUsuario.visibility = View.INVISIBLE
            binding.textViewCorreoElectronico.visibility = View.INVISIBLE
        }

        binding.buttonLogGoogle.setOnClickListener{
            signIn()
        }

        binding.buttonLogOutGoogle.setOnClickListener {
            auth.signOut()
            binding.buttonLogGoogle.visibility = View.VISIBLE
            binding.buttonLogOutGoogle.visibility = View.INVISIBLE
            binding.imageViewFotoUusuario.visibility = View.INVISIBLE
            binding.textViewNombreUsuario.visibility = View.INVISIBLE
            binding.textViewCorreoElectronico.visibility = View.INVISIBLE
        }

        println(auth.currentUser?.displayName)

        return root
    }

    companion object {
        /**
         * Use this factory method to create a new instance of
         * this fragment using the provided parameters.
         *
         * @param param1 Parameter 1.
         * @param param2 Parameter 2.
         * @return A new instance of fragment LogFragment.
         */
        // TODO: Rename and change types and number of parameters
        @JvmStatic
        fun newInstance(param1: String, param2: String) =
            LogFragment().apply {
                arguments = Bundle().apply {
                    putString(ARG_PARAM1, param1)
                    putString(ARG_PARAM2, param2)
                }
            }
    }

    fun getUserInfo()
    {
        val user = Firebase.auth.currentUser
        user?.let {
            // Name, email address, and profile photo Url
            val name = user.displayName
            val email = user.email
            val photoUrl = user.photoUrl

            // Check if user's email is verified
            val emailVerified = user.isEmailVerified

            // The user's ID, unique to the Firebase project. Do NOT use this value to
            // authenticate with your backend server, if you have one. Use
            // FirebaseUser.getToken() instead.
            val uid = user.uid
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        // Result returned from launching the Intent from GoogleSignInApi.getSignInIntent(...);
        if (requestCode == 9001) {
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)
            try {
                // Google Sign In was successful, authenticate with Firebase
                val account = task.getResult(ApiException::class.java)!!
                Log.d(ContentValues.TAG, "firebaseAuthWithGoogle:" + account.id)
                firebaseAuthWithGoogle(account.idToken!!)
            } catch (e: ApiException) {
                // Google Sign In failed, update UI appropriately
                Log.w(ContentValues.TAG, "Google sign in failed", e)
            }
        }
    }
    // [END onactivityresult]

    // [START auth_with_google]
    private fun firebaseAuthWithGoogle(idToken: String) {
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        auth.signInWithCredential(credential)
            .addOnCompleteListener(requireActivity()) { task ->
                if (task.isSuccessful) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(ContentValues.TAG, "signInWithCredential:success")
                    val user = auth.currentUser
                    updateUI(user)
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(ContentValues.TAG, "signInWithCredential:failure", task.exception)
                    updateUI(null)
                }
            }
    }
    // [END auth_with_google]

    // [START signin]
    private fun signIn() {
        val signInIntent = googleSignInClient.signInIntent
        startActivityForResult(signInIntent, 9001)
        binding.buttonLogGoogle.visibility = View.INVISIBLE
        binding.buttonLogOutGoogle.visibility = View.VISIBLE
        binding.imageViewFotoUusuario.visibility = View.VISIBLE
        binding.textViewNombreUsuario.visibility = View.VISIBLE
        binding.textViewCorreoElectronico.visibility = View.VISIBLE

        binding.textViewNombreUsuario.text = auth.currentUser?.displayName
        binding.textViewCorreoElectronico.text = auth.currentUser?.email
        Picasso.get().load(auth.currentUser?.photoUrl).into(binding.imageViewFotoUusuario)

    }
    // [END signin]

    private fun updateUI(user: FirebaseUser?) {
        binding.buttonLogGoogle.visibility = View.INVISIBLE
        binding.buttonLogOutGoogle.visibility = View.VISIBLE
        binding.imageViewFotoUusuario.visibility = View.VISIBLE
        binding.textViewNombreUsuario.visibility = View.VISIBLE
        binding.textViewCorreoElectronico.visibility = View.VISIBLE

        binding.textViewNombreUsuario.text = auth.currentUser?.displayName
        binding.textViewCorreoElectronico.text = auth.currentUser?.email
        Picasso.get().load(auth.currentUser?.photoUrl).into(binding.imageViewFotoUusuario)
    }

    fun loginGoogleOneTap() {
        val signInRequest = BeginSignInRequest.builder()
            .setGoogleIdTokenRequestOptions(
                BeginSignInRequest.GoogleIdTokenRequestOptions.builder()
                    .setSupported(true)
                    // Your server's client ID, not your Android client ID.
                    .setServerClientId(getString(R.string.your_web_client_id))
                    // Only show accounts previously used to sign in.
                    .setFilterByAuthorizedAccounts(true)
                    .build())
            .build()
    }

}