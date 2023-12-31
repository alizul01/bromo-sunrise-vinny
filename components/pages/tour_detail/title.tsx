const Title = ({title, subtitle}: { title: string, subtitle: string }) => (
    <div className={'flex flex-col gap-4'}>
        <div>
            <h2 className="text-3xl xl:text-5xl font-bold text-gray-900">
                {title}
            </h2>
        </div>
        <div>
            <p className="text-gray-600 font-light text-base md:text-lg text-start tracking-tight leading-6">
                {subtitle}
            </p>
        </div>
    </div>
);

export default Title;