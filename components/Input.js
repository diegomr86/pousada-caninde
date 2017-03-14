const baseStyle = {
    padding: '15px 0',
    border: '1px solid #d0d0d0',
    width: '100%',
    borderRadius: 3,
    padding: 10
}

export default ({ type, value, name, onChange, placeholder }) => {
    if (type === 'textarea') {
        return (
            <textarea
                style={{ ...baseStyle, height: '150px' }}
                value={value}
                name={name}
                onChange={e => onChange(e.target.name, e.target.value)}
                placeholder={placeholder}
            />
        )
    } else {
        return (
            <input
                style={{ ...baseStyle }}
                value={value}
                name={name}
                onChange={e => onChange(e.target.name, e.target.value)}
                placeholder={placeholder}
            />
        )
    }
}
