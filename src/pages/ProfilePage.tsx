import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
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
    </div>
  );
} 