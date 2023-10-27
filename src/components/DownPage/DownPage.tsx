import style from "./DownPage.module.scss";
import ellipse from "../../assest/img/Ellipse.png";
import vito from "../../assest/img/vito.png";
import Collection from "../Collection/Collection";


const DownPage = () =>{
  return(
    <div className={style.downPage}>
      <div className={style.person}>
        <img className = {style.vito} src={vito} alt="vito"/>
        <img className = {style.ellipse} src={ellipse} alt="ellipse"/>
      </div>
      <Collection />
    </div>
  )
}

export default DownPage;