import {toast} from "vue3-toastify";
import Swal from "sweetalert2";

const toastAlert = {
    option: {
        autoClose: 10000,
        pauseOnHover: true,
        position: 'top-left'
    },
    success: (msg) => {
        toast.success(msg, {
            autoClose: 2000,
            pauseOnHover: true,
            position: 'top-left'
        });
    },
    info: (msg) => {
        toast.info(msg, {
            autoClose: 2000,
            pauseOnHover: true,
            position: 'top-left'
        });
    },
    warn: (msg) => {
        toast.warn(msg, {
            autoClose: 2000,
            pauseOnHover: true,
            position: 'top-left'
        });
    },
    error: (msg) => {
        toast.error(msg, {
            autoClose: 2000,
            pauseOnHover: true,
            position: 'top-left'
        });
    },
    confirm: async (title, text, confirmTitle, confirmText) => {
        return (await Swal.fire({
            title: title,
            text: text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        })).isConfirmed
            // .then((result) => {
            //     console.log('result: ', result)
            //     return result.isConfirmed
                // if (result.isConfirmed) {
                //     Swal.fire(
                //         'Success!',
                //         confirmText,
                //         'success'
                //     )
                // }
            // })
    }
}
//     closeButton: SomeVNode, // CloseBtnType
//     type: toast.TYPE.INFO,
//     hideProgressBar: false,
//     position: toast.POSITION.TOP_LEFT,
//     pauseOnHover: true,
//     transition: MyCustomTransition,
//     progress: 0.2
// toast.info("World", options as ToastOptions);
// toast.warn(MyComponent, options as ToastOptions);
// toast.error("Error", options as ToastOptions);

export default toastAlert