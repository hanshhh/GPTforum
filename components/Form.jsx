import Link from "next/link";
function Form({type,
    post,
    setPost,
    submitting,
    handleSubmit}) {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left"><span className="blue_gradient">{type}</span> Post</h1>
            <p className="desc text-left max-w-md">{type} Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum dignissimos quaerat eligendi incidunt reiciendis cum consectetur officiis enim. Non!</p>
            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt
                    </span>
                    <textarea value={post.prompt} onChange={(e) => setPost({...post, prompt: e.target.value})} placeholder="Write new prompt here..." className="form_textarea"/>

                    
                </label>
                <label htmlFor="">
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag
                        <span className="font-normal">#</span>
                    </span>
                    <input value={post.tag} onChange={(e) => setPost({...post, tag: e.target.value})} placeholder="Write new tag here..." className="form_input"/>

                    
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-sm text-gray-500">Cancel</Link>
                    <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? `${type}...`: type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form;
