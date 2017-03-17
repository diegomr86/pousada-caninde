export default ({ onClick, children }) => (
    <button onClick={e => onClick(e)}>
        {children}
    <style jsx>{`
        button {
            width: 100%;
            background: #005FB6;
            color: #fff;
            text-align: center;
            padding: 15px 0;
            text-transform: uppercase;
            width: 104%;
            cursor: pointer;
        }
    `}</style>
    </button>
)