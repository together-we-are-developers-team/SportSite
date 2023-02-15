import React, {useEffect} from 'react'
import SaleStiker from '../../components/SaleStiker/SaleStiker'
import Card from '../../components/Card/Card'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCourses } from '../../store/slices/coursesSlices'
import { useCourses } from '../../hooks/use-courses'
import { getDatabase, ref, child, get } from 'firebase/database'
import Button from '../../components/Button/Button'
import cardBody from '../../components/Card/images/card-body.png'
import cardDance from '../../components/Card/images/card-dance.png'
import cardStep from '../../components/Card/images/card-step.png'
import cardStretch from '../../components/Card/images/card-strench.png'
import cardYoga from '../../components/Card/images/card-yoga.png'

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isCourses, courses } = useCourses()
  /// /////////////////////////////////////////

  /* для заполнения карточек можно использовать массив курсов courses,путем его обхода и рендера карточек по данным  */
  // названия курсов можно взять так, пример console.log(courses[0].nameRu)
  // для подбора нужной картинки на карточке курса можно использовать англ имя,если правильным образом назвать картинки в папке images, пример  console.log(courses[0].nameEng)
  /// ////////////////////////////////////////////
  /// функция первоночального заполнения данных в сторе по курсам при открытии main
  useEffect(() => {
    const dbRef = ref(getDatabase())

    get(child(dbRef, `courses/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()

          dispatch(
            getCourses({
              courses: data,
            })
          )
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  const UpWindow = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
 

  const cardMockData = [
    {
      id: 1,
      title: 'Йога',
      image: cardYoga,
    },
    {
      id: 2,
      title: 'Стретчинг',
      image: cardStretch,
    },
    {
      id: 3,
      title: 'Танцевальный фитнес',
      image: cardDance,
    },
    {
      id: 4,
      title: 'Степ-аэробика',
      image: cardStep,
    },
    {
      id: 5,
      title: 'Бодифлекс',
      image: cardBody,
    },
  ]

  return (
    <S.Main>
      <S.MainSubTitle>Онлайн-тренировки для занятий дома</S.MainSubTitle>
      <S.MainTitle>
        Начните заниматься спортом и улучшите качество жизни
      </S.MainTitle>
      {/* <SaleStiker /> Если просто 1 фото, которое нигде не переиспользуется, лучше не делать отдельный компонент */}
      <SaleStiker />

      <S.MainCards>
        {cardMockData?.map((element, i) => (
          <Card
            titleCard={element.title}
            cardImage={element.image}
            key={element.id}
            onClick={() => navigate(`/courses/${i}`)}
          />
        ))}
      </S.MainCards>
      <Button callback={UpWindow} isGreen buttonName="Наверх 🠕" />
    </S.Main>
  )
}

export default Main
