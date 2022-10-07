import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Ali",
        src: "https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
        profile: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4",
    },
    {
        name: "Kashif",
        src: "https://thumbs.dreamstime.com/b/vertical-shot-road-magnificent-mountains-under-blue-sky-captured-california-163571053.jpg",
        profile: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4",
    },
    {
        name: "sonhar",
        src: "https://images.unsplash.com/photo-1531966662811-c6501e46eda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80",
        profile: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4",
    },
    {
        name: "malik",
        src: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80",
        profile: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4",
    },
    {
        name: "jef bezos",
        src: "https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
        profile: "https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4",
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
  )
}

export default Stories
