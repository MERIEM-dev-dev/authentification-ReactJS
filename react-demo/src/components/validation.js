const validation = (values) => {
    let errors= {};

    if(!values.name) {
        errors.name="Name is required."
    }

    if(!values.email) {
        errors.email="Email is required."
    }

    return (
        <div>

        </div>
    )
}

export default validation;