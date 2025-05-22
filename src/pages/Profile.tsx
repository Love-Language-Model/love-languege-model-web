import { useState } from 'react';

import { Link } from 'react-router-dom';
import { User, Heart, MessageCircle } from 'lucide-react';

import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

const mobileTabs = [
  { label: 'Profile' },
  { label: 'Tokens' },
  { label: 'Conversations' },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header whiteBackground={true} isAuthenticated={true} />
      <main className="flex flex-1 pt-24 max-w-5xl mx-auto w-full">
        <aside className="w-64 pr-8 border-r border-gray-200 pt-2 hidden md:block">
          <nav className="flex flex-col gap-2">
            <Link to="/profile">
              <button className="bg-[#B6B6E5] text-[#4050B5] rounded-md px-4 py-2 text-left font-medium w-full flex items-center gap-2">
                <User size={18} />
                My profile
              </button>
            </Link>
            <Link to="/profile">
              <button className="text-[#616161] rounded-md px-4 py-2 text-left w-full flex items-center gap-2">
                <Heart size={18} />
                My love tokens
              </button>
            </Link>
            <Link to="/profile">
              <button className="text-[#616161] rounded-md px-4 py-2 text-left w-full flex items-center gap-2">
                <MessageCircle size={18} />
                My conversations
              </button>
            </Link>
          </nav>
        </aside>
        <div className="md:hidden fixed top-[75px] left-0 w-full bg-white z-40 border-b border-gray-200 flex">
          {mobileTabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`flex-1 py-3 text-sm font-medium ${activeTab === idx ? 'text-[#6B6BCB] border-b-2 border-[#6B6BCB] bg-[#F6F6F6]' : 'text-[#A1A1A1]'}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <section className="flex-1 px-4 sm:px-4 md:px-12 py-8 mt-12 md:mt-0">
          <h2 className="text-xl font-semibold mb-6">MY PROFILE</h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value="Loranna" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
              <div className="flex-1">
                <Label htmlFor="surname">Surname</Label>
                <Input id="surname" value="Scarpioni" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value="loranna@bilive.com" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="doc">Document ID (optional)</Label>
                <Input id="doc" value="" placeholder="" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
              <div className="flex-1">
                <Label htmlFor="phone">Phone number (optional)</Label>
                <Input id="phone" value="+1 415 707 9105" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div>
                <Label>Profile picture:</Label>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="w-20 h-20 rounded-full object-cover mt-2" />
              </div>
              <div className="flex flex-col gap-2 mt-6 sm:mt-0">
                <Button className="bg-[#6B6BCB] text-white rounded-full px-6 hover:bg-[#4050B5]">upload a new picture</Button>
                <Button variant="outline" className="border-[#6B6BCB] text-[#6B6BCB] rounded-full px-6">delete</Button>
              </div>
            </div>
            <hr className="my-6 border-gray-200" />
            <div>
              <Label>ABOUT ME (optional)</Label>
              <p className="text-xs text-gray-500 mb-2">Tell us about yourself—whatever you'd like to share. This information is private and helps us understand love through your unique perspective and life experiences</p>
              <textarea
                className="w-full min-h-[100px] bg-[#F6F6F6] border border-gray-200 rounded-md p-2 text-sm"
                placeholder="I'm an engineer and love traveling..."
                defaultValue="I'm an engineer and love traveling..."
                readOnly
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label>Date of birth</Label>
                <Input value="01/08/1990" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
              <div className="flex-1">
                <Label>Gender</Label>
                <Input value="Female" readOnly className="bg-[#F6F6F6] border border-gray-200" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label>Place of residency</Label>
                <Select defaultValue="San Francisco, CA, US" disabled>
                  <option>San Francisco, CA, US</option>
                </Select>
              </div>
              <div className="flex-1">
                <Label>Place of birth</Label>
                <Select defaultValue="Salvador, BA, Brazil" disabled>
                  <option>Salvador, BA, Brazil</option>
                </Select>
              </div>
            </div>
            <hr className="my-6 border-gray-200" />
            <div>
              <Label>Password</Label>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-1">
                <Input type="password" value="123456" readOnly className="w-full sm:w-40 bg-[#F6F6F6] border border-gray-200" />
                <Button className="bg-[#6B6BCB] text-white rounded-full px-6 w-full sm:w-auto hover:bg-[#4050B5]">edit</Button>
                <Button variant="outline" className="border-[#B5322A] text-[#B5322A] rounded-full px-6 w-full sm:w-auto">Delete my account</Button>
              </div>
            </div>
            <div>
              <Label>Language</Label>
              <Select defaultValue="Automatic" disabled>
                <option>Automatic</option>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button className="bg-[#6B6BCB] text-white rounded-full px-10 w-full sm:w-auto hover:bg-[#4050B5]">save</Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile; 