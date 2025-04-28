import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const BeterzoOplossingen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-blue-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
                Onze oplossingen
                <span className="absolute -bottom-2 left-0 w-24 h-1 bg-primary"></span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Ontdek hoe we jouw werk een tikkie beterzo maken met onze slimme oplossingen.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid gap-8 max-w-4xl">
              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Lesstof Uitgewerkt... een tikkie beterzo</h2>
                  <p className="text-gray-700 mb-6">
                    Upload je module en ontvang automatisch leerdoelen, samenvattingen en begrippenlijsten, 
                    voor zowel studenten als docenten. Binnen een maand staat jouw systeem live – en daarna 
                    werk je in 7 minuten uit wat anders 7 uur zou kosten.
                  </p>
                  <Link to="/lesstof-uitgewerkt" className="inline-block">
                    <Button className="rounded-lg">
                      Lees meer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Toetsvragen... een tikkie beterzo</h2>
                  <p className="text-gray-700 mb-6">
                    Automatisch leerdoelen en toetsvragen genereren op basis van jouw lesstof? 
                    Met deze slimme AI-oplossing doe je dat in een paar klikken. Snel, veilig en 
                    altijd passend bij jouw niveau en doelgroep.
                  </p>
                  <Link to="/toetsvragen-generator" className="inline-block">
                    <Button className="rounded-lg">
                      Lees meer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Telefonische Klantenservice... een tikkie beterzo</h2>
                  <p className="text-gray-700 mb-6">
                    Een slimme, geautomatiseerde telefonie-oplossing die inkomend klantcontact razendsnel 
                    en professioneel afhandelt – automatisch waar het kan, persoonlijk waar het moet.
                  </p>
                  <Link to="/telefoon-service" className="inline-block">
                    <Button className="rounded-lg">
                      Lees meer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BeterzoOplossingen;
