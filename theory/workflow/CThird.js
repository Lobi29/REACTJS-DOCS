const user = {
    name: "chao lobi",
    imageUrl: "https://xyz.jpg",
    imageSize: 90
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img className="avatar" src={user.imageUrl} alt={"Photo of " + user.name} 
            style={{
                width: user.imageSize,
                height: user.imageSize
            }} />
        </>
    );
}