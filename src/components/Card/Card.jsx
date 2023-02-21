import React, { useEffect, useState } from 'react'
import { ref, getStorage, listAll, getDownloadURL } from 'firebase/storage'
import * as S from './styles'

function Card({ titleCard, cardImage, isForwardBtn, onClick }) {
 /* const [imageList, setImageList] = useState([])
  const storage = getStorage()
  
  const imageListRef = ref(storage, `images/${cardImage}/`)
  /// /////////////////////////////////////////

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      })
    })
  }, [cardImage]) */

  return (
    <S.Card cardImage={`https://firebasestorage.googleapis.com/v0/b/sportapp-b5b77.appspot.com/o/images%2F${cardImage}%2F${cardImage}.png?alt=media`} onClick={onClick}>
      <S.CardTitle>{titleCard}</S.CardTitle>

      {isForwardBtn && <S.ForwardCardGreenBtn>Перейти →</S.ForwardCardGreenBtn>}
    </S.Card>
  )
}

export default Card
