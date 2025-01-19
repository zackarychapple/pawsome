import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  CatIcon,
  MessageCircleIcon,
  ShareIcon,
  UsersIcon,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-2 text-4xl font-bold text-purple-600 mb-4">
          <CatIcon className="w-12 h-12" />
          <span>Pawsome</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          The Social Network for Cat Lovers
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with fellow cat enthusiasts, share adorable moments, and build a
          community around your feline friends.
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Join the Purr-fect Community
        </Button>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Pawsome?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <UsersIcon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cat Community</h3>
            <p className="text-gray-600">
              Connect with thousands of cat lovers and share your experiences.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageCircleIcon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cat Chat</h3>
            <p className="text-gray-600">
              Discuss cat care, behavior, and share tips with other cat parents.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ShareIcon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Photo Sharing</h3>
            <p className="text-gray-600">
              Share your favorite cat moments and discover adorable cat photos.
            </p>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Join Our Growing Community
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100K+</div>
              <p className="text-gray-600">Cat Photos Shared</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25K+</div>
              <p className="text-gray-600">Daily Conversations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join the Cat Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start sharing your cat's journey and connect with fellow cat lovers
            today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Sign Up Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-purple-700"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-purple-600 mb-6">
            <CatIcon className="w-8 h-8" />
            <span>Pawsome</span>
          </div>
          <div className="flex justify-center gap-6 text-gray-600">
            <a href="#" className="hover:text-purple-600">
              About
            </a>
            <a href="#" className="hover:text-purple-600">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-600">
              Terms
            </a>
            <a href="#" className="hover:text-purple-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
