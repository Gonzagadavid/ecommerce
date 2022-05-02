import { ReactElement } from 'react';
import Layout from '../components/Layout';
import Title from '../styles/Title';

const Home = () => {
  return (
    <div>
      <Title>Title</Title>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;