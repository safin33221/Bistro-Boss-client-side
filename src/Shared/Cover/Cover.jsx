

const Cover = ({img,title,subTitle}) => {
    return (
        <div
            className="hero h-[600px]"
            style={{
                backgroundImage: `url(${img})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center w-9/12 h-72 mx-auto bg-black bg-blend-overlay opacity-60 p-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                       {subTitle}
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Cover;