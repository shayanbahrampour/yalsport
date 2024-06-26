import Footer from './Footer/Footer';
import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
