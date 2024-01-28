import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toogleGPTSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();

  useEffect(()=>{

  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const  {uid,email,displayName,photoURL}  = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL: photoURL,}));
        navigate('/browse');
   
      } else {
        //User is  signed Out
        dispatch(removeUser());
        navigate('/');

      }
    });

    //Unsubscribe when the component unmounts
    return()=>unsubscribe();
},[])




  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
     
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const hadleGPTSearchView=()=>{
    dispatch(toogleGPTSearchView());

  }

  const handleLanguageChange=(e)=>{
     dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && (
          <select className="p-2 bg-gray-950 text-white m-2" onChange={handleLanguageChange}>
               {SUPPORTED_LANGUAGES.map((lang)=>(
               <option key={lang.identifier} value={lang.identifier} >
                  {lang.name}
               </option>))} 
          </select>)}
            <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={hadleGPTSearchView}>
              {showGPTSearch?'Home':"GPTSearch"}</button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />

          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;