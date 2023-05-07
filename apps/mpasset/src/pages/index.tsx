import dynamic from 'next/dynamic';
import { LoadingScreen } from '../components/section3/Loading';

const Home = dynamic(() => import('../components/Home'), { loading: () => <LoadingScreen /> });

export default function HomePage() {
  return (
    <Home />
  )
}
