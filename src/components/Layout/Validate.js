export default function Validate(values){
    let errors = {};
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //name
    if(!values.name.trim()){
        errors.name = "Please provide your Name!"
    }
    //Email
    if(!values.email){
        errors.email = "Please provide your Email!"
    }
    else if (!pattern.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    //phone
    if(!values.phone){
        errors.phone = "Please provide your Phone number!"
    }
    //comment
    if(!values.comment.trim()){
        errors.comment = "Please provide your Message!"
    }

    return errors;
}