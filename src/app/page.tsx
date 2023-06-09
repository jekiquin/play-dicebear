import Img from '@/components/img';

export default function Home() {
  return (
    <div>
      Dicebear
      <Img
        src="https://api.dicebear.com/6.x/adventurer/svg"
        alt="avatar"
        className="h-10 w-10"
      />
    </div>
  );
}
