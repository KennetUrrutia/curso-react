import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const credentials = GoogleAuthProvider.credentialFromResult(result)
    // console.log({ credentials })

    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid
    }

  }
  catch (error) {
    console.log(error)
    const { errorCode, errorMessage } = error

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}