"use client";

import {
  ChangeEvent,
  useActionState,
  useRef,
  useState,
  ReactNode,
} from "react";
import Image from "next/image";
import { UserProps } from "@/features/profile/types";
import { updateUserInfoAction } from "@/features/profile/actions";
import { SubmitButton } from "@/features/profile/components/SubmitButton";

interface ProfileInfoFormProps {
  user: UserProps;
  children?: ReactNode; // We allow children (The Password Form) to be passed in
}

export default function ProfileInfoForm({
  user,
  children,
}: Readonly<ProfileInfoFormProps>) {
  // --- STATE & ACTION ---
  const [state, action] = useActionState(updateUserInfoAction, null);

  // --- IMAGE HANDLING ---
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
      {/* ==========================================
         LEFT COLUMN: Identity & Image Trigger
         ========================================== */}
      <div className="md:col-span-1">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-xl">
          <div
            className="group relative mx-auto mb-6 h-32 w-32 cursor-pointer"
            onClick={() => fileInputRef.current?.click()} // Triggers the hidden input below
          >
            <Image
              src={imagePreview || user.profileImage}
              alt={user.name}
              fill
              className="border-primary-50 rounded-full border-4 object-cover shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <CameraIcon />
            </div>
          </div>

          <h2 className="mb-1 text-xl font-bold text-gray-900">{user.name}</h2>
          <p className="mb-4 text-sm text-gray-500">{user.email}</p>
          <div className="bg-primary-100 text-primary-700 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
            {user.role}
          </div>
        </div>
      </div>

      {/* ==========================================
         RIGHT COLUMN: Info Form + Children (Password Form)
         ========================================== */}
      <div className="space-y-8 md:col-span-2">
        {/* --- FORM: PERSONAL DETAILS --- */}
        <form
          action={action}
          className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl"
        >
          <input type="hidden" name="userId" value={user._id} />

          {/* HIDDEN FILE INPUT (Linked to Left Column via Ref) */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            name="profileImage"
            accept="image/*"
            hidden
          />

          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <h3 className="text-lg font-bold text-gray-900">
              Personal Details
            </h3>
            {state?.success && (
              <span className="flex animate-pulse items-center gap-1 text-sm font-medium text-green-600">
                <CheckCircleIcon /> Saved
              </span>
            )}
            {state?.success === false && (
              <span className="text-sm font-medium text-red-500">
                {state.message}
              </span>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  required
                  className="focus:border-primary-500 focus:ring-primary-500/10 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-4"
                />
                <div className="absolute top-3.5 right-4 text-gray-400">
                  <UserIcon />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-400 outline-none"
                />
                <div className="absolute top-3.5 right-4 text-gray-400">
                  <MailIcon />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Bio
              </label>
              <textarea
                name="bio"
                defaultValue={user.bio || ""}
                rows={3}
                maxLength={500}
                className="focus:border-primary-500 focus:ring-primary-500/10 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all outline-none focus:bg-white focus:ring-4"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <SubmitButton label="Save Profile" />
          </div>
        </form>

        {/* --- SLOT FOR PASSWORD FORM (Rendered here to maintain layout) --- */}
        {children}
      </div>
    </div>
  );
}

// --- ICONS ---
const UserIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const MailIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);
const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-8 w-8 text-white"
  >
    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
    <path
      fillRule="evenodd"
      d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);
const CheckCircleIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
