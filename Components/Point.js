export default function Point({children}) {

    return <div className="flex items-center space-x-4">
        <div className="point shrink-0"></div>
        <div className="py-2 text-xs lg:text-base">
            {children}
        </div>
    </div>;
}