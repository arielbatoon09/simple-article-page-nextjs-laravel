

function Label({children, className="", ...props}) {
    return (
        <label
            className={`${className} block text-gray-800`}
            {...props}
        >
            {children}
        </label>
    )
}

export default Label;