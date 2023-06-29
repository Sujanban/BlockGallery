import { Socials } from "../components/Socials";
import { Hero } from "../components/Hero";
import { Product } from "./product/Product";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <>
            <Hero />
            <Product />
            <Socials />
            <Footer />
        </>
    )
}