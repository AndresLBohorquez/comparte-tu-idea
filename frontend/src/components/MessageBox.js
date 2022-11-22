import Swal from 'sweetalert2';

export default function MessageBox(props) {
    const msg = props.children;
    return (
        Swal.fire({
            title: 'Error!',
            text: msg,
            icon: 'error',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: '#691193'

        }).then(function () {
            window.location.href = "/";
        })

    );
}