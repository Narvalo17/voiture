export class Dates {
            static dateTime = () =>{
            const dataFooter = document.querySelector("footer p")
            let dateTimeFull = new Date ().getFullYear()
            dataFooter.innerHTML += `&copy; - MIT -${dateTimeFull}`

    }
}
 