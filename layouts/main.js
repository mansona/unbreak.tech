import GlobalStyles from "./main.styles.js";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <main id="main_content">{props.children}</main>
      <Footer />
      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  );
}
