export function ErrorBlock({ message }: { message: string }) {
    return (
        <div className="text-red-500 text-center mt-10 flex items-center justify-center flex-1">
            {message}
        </div>
    );
}