import clock from "../../assest/img/icons/clock.png";
import toolbox from "../../assest/img/icons/toolbox.png";
import rune from "../../assest/img/icons/rune.png";
import bigSymbol from "../../assest/img/icons/bigSymbol.png";
import mana from "../../assest/img/icons/mana.png";
import module from "../../assest/img/icons/module.png";
import vito from "../../assest/img/icons/vito.png";
import box from "../../assest/img/box.png";

import style from "./Collection.module.scss";


const Collection = () => {
  const itemList = [
    {
      icon: clock,
      title: "Игровое время",
      freeServer: null,
      subscriptionServer: "30 дней"
    },
    {
      icon: toolbox,
      title: "Запечатанный набор инструментов",
      freeServer: 1,
      subscriptionServer: 1
    },
    {
      icon: rune,
      title: "Хрупкая чистая руна 10-й ступени",
      freeServer: 1,
      subscriptionServer: null
    },
    {
      icon: bigSymbol,
      title: "Большой символ изобилия творца",
      freeServer: 10,
      subscriptionServer: null
    },
    {
      icon: mana,
      title: "Мана батарея",
      freeServer: null,
      subscriptionServer: 20
    },
    {
      icon: module,
      title: "Модуль памяти",
      freeServer: null,
      subscriptionServer: 10
    },
    {
      icon: vito,
      title: "Помощник Вито",
      freeServer: 1,
      subscriptionServer: 1
    },
  ]
  return (
    <div className={style.collection}>
      <div className={style.collection__title}>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</div>
      <div className={style.collection__column}>
        <div>Бесплатные сервера</div>
        <div>Подписочный сервер</div>
      </div>
      <div className={style.collection__table}>
        {
          itemList.map((item: any) => {
            return (
              <div className={style.table__row}>
                <div className={style.row__left}>
                  <img src={item.icon} alt={item.title} />
                  <div className={style.left__text}>{item.title}</div>
                </div>
                <div className={style.row__right}>
                  <div>{item.freeServer ?? "-"}</div>
                  <div>{item.subscriptionServer ?? "-"}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={style.collection__buy}>
        <img src={box} alt="" />
        <div className={style.buy__area}>
          <div className={style.area__price}>399 ₽</div>
          <div className={style.area__button}>ПРИОБРЕСТИ</div>
        </div>
      </div>
    </div>
  )
};

export default Collection;