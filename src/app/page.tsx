import Link from "next/link";

export default function HomePage() {
    const mockUrls = [
        "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]

    const mockImages = mockUrls.map((url, index) => ({
        id: index + 1,
        url
    }))

  return (
    <main className="">
        <div className='flex flex-wrap gap-4'>
            {mockImages.map((img) => (
                <div key={img.id} className='w-48'>
                    <img src={img.url} alt="img not found"/>
                </div>
            ))}
        </div>
    </main>
  );
}
