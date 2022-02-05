import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators as userActions } from '../redux/modules/user'
import { Spinner } from '../components'

const KakaoLoginHandler = (props) => {
  const dispatch = useDispatch()

  let code = new URL(window.location.href).searchParams.get('code')

  React.useEffect(async () => {
    await dispatch(userActions.kakaoLoginDB(code))
  }, [])

  return (
    <>
      <>
        <Spinner />
      </>
    </>
  )
}

export default KakaoLoginHandler
