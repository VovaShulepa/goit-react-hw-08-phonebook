import { Helmet } from 'react-helmet';
import { SignInForm } from 'components/SignInForm/SignInForm';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(-45deg, #b5fa65d5, #a8c430b0, #47c5f3be, #15fdc7e1)',
  },
};
export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignInForm />
    </div>
  );
}
