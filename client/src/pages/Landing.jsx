import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Ui/Header";
import Footer from "../components/Ui/Footer";
import HeroImage from "../assets/hero.svg";
import Button from "../components/Ui/Button";
import FeatureCard from "../components/Ui/FeatureCard";
import TestimonyCard from "../components/Ui/TestimonyCard";

const Landing = () => {
  return (
    <div className="flex flex-col justify-between bg-neutral-50 text-neutral-900">
      <Header pageType="auth" />
      <div className="flex flex-col gap-8 bg-neutral-50">
        <div className="flex h-screen flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:px-8">
          <img src={HeroImage} alt="Hero Image" className="lg:hidden" />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start">
              <h1 className="text-4xl font-bold lg:text-6xl">
                Haz que cada viaje sea inolvidable
              </h1>
              <p className="text-lg font-medium text-neutral-800 lg:text-2xl">
                Planifica, personaliza y disfruta tus vacaciones a tu propio
                ritmo. Con Tourist Route, tu próximo viaje estará lleno de
                momentos que amarás
              </p>
            </div>
            <div className="hidden lg:block">
              <Link to="/home">
                <Button label="Comienza Ahora" />
              </Link>
            </div>
            <div className="lg:hidden">
              <Link to="/home">
                <Button label="Comienza Ahora" fullWidth />
              </Link>
            </div>
          </div>
          <img src={HeroImage} alt="Hero Image" className="hidden lg:block" />
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-8 lg:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-semibold lg:text-3xl">
              Descubre lo que podemos hacer por ti
            </h2>
            <p className="text-center text-lg lg:text-xl">
              Nuestra aplicación de planificación de viajes pone a tu
              disposición una serie de poderosas herramientas para hacer que tu
              próxima aventura sea perfecta. Aquí hay un vistazo a algunas de
              nuestras características principales
            </p>
          </div>
          <div className="flex flex-col  justify-center gap-8 lg:flex-row">
            <FeatureCard
              imageName="mapRoute"
              title="Itinerarios personalizados"
              description="Ahorra tiempo con itinerarios generados a partir de tus preferencias. Tu viaje, adaptado a lo que te gusta y quieres hacer."
            />
            <FeatureCard
              imageName="ai"
              title="Inteligencia artificial avanzada

              "
              description="Crea itinerarios únicos basados en tus intereses. Ya sea historia, gastronomía o naturaleza, te proporcionamos los lugares recomendados a visitar."
            />
            <FeatureCard
              imageName="history"
              title="Historial de itinerarios"
              description="Nunca olvides los detalles de tus viajes. Tus itinerarios se guardan para que puedas volver a ellos cuando quieras."
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-16 px-4 py-8 lg:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-2xl font-semibold lg:text-3xl">
              Lo que nuestros usuarios dicen
            </h2>
            <p className="text-center text-lg lg:text-xl">
              Nuestros usuarios adoran la facilidad y personalización que
              Tourist Route ofrece para la planificación de sus viajes. Pero no
              te quedes solo con nuestra palabra, lee sus testimonios
            </p>
          </div>
          <div className="flex flex-col  justify-center gap-8 lg:flex-row">
            <TestimonyCard
              imageName="Alex"
              userName="Alex"
              testimony="Increíblemente útil. Con Tourist Route pude planificar mi viaje a Japón de manera eficiente y descubrir lugares increíbles que no habría encontrado por mi cuenta. ¡Altamente recomendado!"
            />
            <TestimonyCard
              imageName="Emma"
              userName="Emma"
              testimony="La mejor herramienta de planificación de viajes que he usado! Tourist Route me ayudó a crear un itinerario personalizado para mi viaje a Italia, teniendo en cuenta mis intereses en arte y gastronomía. ¡Fue una experiencia increíble"
            />
            <TestimonyCard
              imageName="Sofia"
              userName="Sofia"
              testimony="Tourist Route hizo que la planificación de mi viaje a México fuera muy fácil y conveniente. Los itinerarios generados fueron excelentes y me permitieron disfrutar de la rica cultura y belleza natural del país. ¡Muy recomendado!"
            />
            <TestimonyCard
              imageName="Richard"
              userName="Richard"
              testimony="Como viajero Tourist Route me brindó la tranquilidad de tener un itinerario bien organizado para mi viaje a Europa. Pude explorar ciudades históricas y disfrutar de actividades adaptadas a mis necesidades. ¡Gracias por hacer que mi viaje sea inolvidable!"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 bg-green-400 px-4 py-32 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-neutral-100 lg:text-3xl">
            ¿Estás listo para comenzar tu próxima gran aventura?
          </h2>
          <Link to="/home">
            <Button label="Comienza Ahora" color="white" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
