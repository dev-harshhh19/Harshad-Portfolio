import Image from "next/image";

const Profile = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_200,c_fill/v1761289671/Profile_image_y1n580.jpg"
        alt="Profile"
        width={200}
        height={200}
        priority
        className="rounded-full object-cover"
        sizes="200px"
      />
    </div>
  );
};

export default Profile;
