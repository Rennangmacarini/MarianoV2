import { ContentHome } from "@/Components/ContentHome";
import { Ofertas } from "@/Components/Encarte";
import { Video } from "@/Components/Filme";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";

export default function Home() {
  return (
    <>
     <Header/>
     <Video/>
     <ContentHome/>
     <Ofertas/>
     <Footer/>
    </>
  )
}
