import style from "./DownPage.module.scss";
import ellipse from "../../assest/img/Ellipse.png";
import vito from "../../assest/img/vito.png";
import Collection from "../Collection/Collection";


const DownPage = () =>{
  return(
    <div className={style.downPage}>
      <div className={style.downPage__person}>
        <img className = {style.person__img} src={vito} alt="vito"/>
        <img className = {style.person__ellipse} src={ellipse} alt="ellipse"/>
      </div>
      <Collection />
    </div>
  )
}

export default DownPage;