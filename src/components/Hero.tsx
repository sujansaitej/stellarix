import { ArrowRight, Rocket, Shield, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Space background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Pioneering the Future
              </span>
              <span className="block text-white mt-2">
                of Space Travel
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Pushing the boundaries of human exploration with cutting-edge technology and innovative space solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105">
                Explore Missions <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
              <Rocket className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Space Launch</h3>
              <p className="text-gray-400">Advanced rocket technology for reliable space transportation</p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
              <Target className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Precision</h3>
              <p className="text-gray-400">Unmatched accuracy in orbital operations and deployments</p>
            </div>
            <div className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20">
              <Shield className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
              <p className="text-gray-400">Industry-leading safety protocols and redundancy systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}