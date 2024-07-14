

//Отображение метки для премиум-карточки
export default function Premium ({isPremium,typeMark} : {isPremium:boolean; typeMark:string}) {
  if (isPremium) {
    return(
      <div className={typeMark}>
        <span>Premium</span>
      </div>

    );
  }
}
