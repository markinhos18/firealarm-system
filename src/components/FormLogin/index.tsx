import * as S from './styles'
// import TextField from 'components/TextField'
import Checkbox from 'components/Checkbox'
import Button from 'components/Button'
import Link from 'next/link'

const FormLogin = () => (
  <S.Wrapper>
    <form className="formLogin">
      <h2 className="formTitle">Login</h2>
      <input
        className="inputLogin"
        name="email"
        type="email"
        placeholder="E-mail"
        required
      />
      <input
        className="inputLogin"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <Link href="/">
        <a className="forgotinputLabel">Forgot username or password?</a>
      </Link>
      <Checkbox label="Remember Me" />
      <div className="loginCenter">
        <Button className="signinBtn" size="medium">
          Sign in
        </Button>
        <br />
        <Link href="/">
          <a className="registerLabel">or register</a>
        </Link>
      </div>
    </form>
  </S.Wrapper>
)

export default FormLogin
