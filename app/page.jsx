import Feed from "@components/Feed";
function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Leveraging the Resource
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> AI-Powered Summarizer</span>
               
            </h1>
            <p className="desc text-center">
                This application allows you to create blogs and prompts related to the latest technology, and effectively summarize the web content through an ai-powered summarizer provided by OpenAI.
            </p>
            <Feed/>
        </section>
    )
}

export default Home;
