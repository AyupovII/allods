import style from "./UpPage.module.scss";
import mafiaCostume2 from '../../assest/img/MafiaCostume_2022 3.png';
import mafiaCostume1 from '../../assest/img/MafiaCostume_2022 2.png';
import boxes from '../../assest/img/boxes.png';
import logo from '../../assest/img/logo.png';

const UpPage = () => {
  return (
    <div className={style.upPage}>
      <div className={style.upPage__glow}></div>
      <img className={style.upPage__mafiaCostume} src={mafiaCostume1} alt="right" />
      <div className={style.upPage__box}>
        <img className={style.box__logo} src={logo} alt="logo" />
        <img className={style.box__boxes} src={boxes} alt="boxes" />
        <div className={style.box__text}>
          <h1 >КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
          <h2>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</h2>
        </div>

      </div>
      <img className={style.upPage__mafiaCostume} src={mafiaCostume2} alt="left" />
    </div>
  )
}

export default UpPage;