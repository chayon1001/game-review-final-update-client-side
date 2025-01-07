import React from "react";
import firstImage from '../../assets/first.jpg'
import secondImage from '../../assets/second.jpg'
import thirdImage from '../../assets/third.jpg'
import fourthImage from '../../assets/fourth.jpg'

const BlogLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">

        <h2 className="text-black text-5xl text-center font-semibold">Blogs</h2>
     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
      
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={thirdImage}
             
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-white bg-pink-500 px-3 py-1 rounded-full">
                Racing
              </span>
              <h3 className="text-lg font-semibold mt-2">
                Cyber Samurai: The Ultimate Racing Experience
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Step into a world of high-speed futuristic racing with Cyber
                Samurai. Compete in intense races and dominate the leaderboard.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 text-sm">3 Comments</span>
                <button className="text-pink-500 hover:text-pink-600">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>

         
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={fourthImage}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-white bg-purple-500 px-3 py-1 rounded-full">
                Racing
              </span>
              <h3 className="text-lg font-semibold mt-2">
                Intergalactic Battles: Race Beyond the Stars
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Take your skills to the cosmos and race across alien worlds in
                this thrilling intergalactic racing game.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 text-sm">5 Comments</span>
                <button className="text-pink-500 hover:text-pink-600">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={secondImage}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
                Adventure
              </span>
              <h3 className="text-lg font-semibold mt-2">
                Mystic Forest Adventure: Secrets of the Wild
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore the uncharted forest, solve ancient puzzles, and uncover
                the secrets hidden deep in the Mystic Forest.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 text-sm">8 Comments</span>
                <button className="text-pink-500 hover:text-pink-600">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={firstImage}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-white bg-green-500 px-3 py-1 rounded-full">
                Racing
              </span>
              <h3 className="text-lg font-semibold mt-2">
                Urban Legends: High-Speed Challenges
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Dive into the neon-lit streets of the city and race against the
                legends in this adrenaline-pumping game.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600 text-sm">10 Comments</span>
                <button className="text-pink-500 hover:text-pink-600">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Latest Posts */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Latest Posts</h3>
          <div className="space-y-4">
            {/* Static Latest Posts */}
            {[
              {
                title: "PUBG: Battle Royale Madness",
                date: "June 21, 2023",
                image: "https://i.ibb.co.com/1Gm4dfH/photo-1522069213448-443a614da9b6-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "Assassin's Creed: Odyssey",
                date: "June 20, 2023",
                image: "https://i.ibb.co.com/0GzM3d8/photo-1511213966740-24d719a0a814-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "Minecraft Legends",
                date: "June 19, 2023",
                image: "https://i.ibb.co.com/TYMNNdr/photo-1582921017967-79d1cb6702ee-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "Call of Duty: Vanguard",
                date: "June 18, 2023",
                image: "https://i.ibb.co.com/0GzM3d8/photo-1511213966740-24d719a0a814-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "FIFA 2023 Ultimate Teams",
                date: "June 17, 2023",
                image: "https://i.ibb.co.com/3WTVF2H/photo-1590061826933-c84b0891bc03-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "World of Warcraft",
                date: "June 16, 2023",
                image: "https://i.ibb.co.com/1Gm4dfH/photo-1522069213448-443a614da9b6-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "League of Legends: New Updates",
                date: "June 15, 2023",
                image: "https://i.ibb.co.com/TYMNNdr/photo-1582921017967-79d1cb6702ee-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
              {
                title: "Elden Ring Expansion",
                date: "June 14, 2023",
                image: "https://i.ibb.co.com/1Gm4dfH/photo-1522069213448-443a614da9b6-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
              },
            ].map((post, index) => (
              <div className="flex items-center space-x-4" key={index}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                  <p className="text-xs text-gray-500">By Admin</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
