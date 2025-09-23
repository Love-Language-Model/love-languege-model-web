import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { ProfileFormData, profileSchema } from '@/types/forms';

const Info = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, updateProfile } = useAuth();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isValid },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      birthDate: null,
      gender: null,
      about: null,
      residenceLocation: null,
      birthLocation: null,
      imageUrl: null,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || '',
        birthDate: user.birthDate || null,
        gender: user.gender || null,
        about: user.about || null,
        residenceLocation: user.residenceLocation || null,
        birthLocation: user.birthLocation || null,
        imageUrl: user.imageUrl || null,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      setIsLoading(true);
      const success = await updateProfile(data);

      if (success) {
        toast({
          title: 'Profile updated successfully',
          description: 'Your profile information has been saved.',
        });
      } else {
        toast({
          title: 'Failed to update profile',
          description: 'Please try again later.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error updating profile',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    reset();
    toast({
      title: 'Changes discarded',
      description: 'Your changes have been reset to the original values.',
    });
  };

  const email = user?.identities?.find(identity => identity.type === 'email')?.value || '';

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">MY PROFILE</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="name" className="flex items-center gap-2 mb-4">
              Name*
            </Label>
            <Input
              id="name"
              {...register('name')}
              className="bg-[#F6F6F6] border border-gray-200"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="email" className="flex items-center gap-2 mb-4">
              Email
            </Label>
            <Input
              id="email"
              readOnly
              disabled
              value={email}
              className="bg-gray-100 border border-gray-200 cursor-not-allowed pointer-events-none"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="birthDate" className="flex items-center gap-2 mb-4">
              Birth Date
            </Label>
            <Input
              id="birthDate"
              type="date"
              {...register('birthDate')}
              className="bg-[#F6F6F6] border border-gray-200"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="gender" className="flex items-center gap-2 mb-4">
              Gender
            </Label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <SelectTrigger className="bg-[#F6F6F6] border border-gray-200">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="residenceLocation" className="flex items-center gap-2 mb-4">
              Residence Location
            </Label>
            <Input
              id="residenceLocation"
              placeholder="City, Country"
              {...register('residenceLocation')}
              className="bg-[#F6F6F6] border border-gray-200"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="birthLocation" className="flex items-center gap-2 mb-4">
              Birth Location
            </Label>
            <Input
              id="birthLocation"
              placeholder="City, Country"
              {...register('birthLocation')}
              className="bg-[#F6F6F6] border border-gray-200"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="about" className="flex items-center gap-2 mb-4">
            About
          </Label>
          <Textarea
            id="about"
            placeholder="Tell us about yourself..."
            rows={4}
            {...register('about')}
            className="bg-[#F6F6F6] border border-gray-200"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="rounded-full px-10"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading || !isValid}
            className="bg-[#6B6BCB] text-white rounded-full px-10 hover:bg-[#4050B5] disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Info;
