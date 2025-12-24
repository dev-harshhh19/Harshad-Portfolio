import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dtsque0dg/image/upload/v1761289671/Profile_image_y1n580.jpg"
        alt="Profile"
        width={500}
        height={500}
        unoptimized
        priority
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default Profile;
