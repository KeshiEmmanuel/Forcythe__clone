const EmailField = () => {
    return (
        <section>
            <div className="w-full text-sm flex border border-white rounded-full">
                <input
                    type="email"
                    className="flex-1 bg-primary px-5 py-3 outline-none border-none rounded-full"
                    placeholder="Enter your email"
                />
                <button className="bg-white text-black px-5 rounded-tr-full rounded-br-full">
                    Subscribe
                </button>
            </div>
            <div className="flex mt-5 items-center gap-3">
                <input type="radio" />
                <label htmlFor="notifications">
                    I agree to receive other notifications from Forcythe
                </label>
            </div>
        </section>
    );
};

export default EmailField;
