import { router } from 'expo-router';

import { Container } from '~/components/Container';
import CustomButton from '~/components/CustomButton';

export default function Home() {
  return (
    <>
      <Container>
        <CustomButton handlePress={() => router.push('sign-in')} title="go to sign in" />
      </Container>
    </>
  );
}
