import { Helmet } from 'react-helmet';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      'linear-gradient(180deg, rgb(238, 254, 183) 19.1%, rgb(169, 254, 222) 53.9%, rgb(90, 222, 255) 92%)',
  },
};
export default function SignUp() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignUpForm />
    </div>
  );
}
