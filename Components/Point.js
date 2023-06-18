export default function Point({children}) {

    return <div className="flex items-center space-x-4">
        <div className="point"></div>
        <div className="py-2">
            {children}
        </div>
    </div>;
}