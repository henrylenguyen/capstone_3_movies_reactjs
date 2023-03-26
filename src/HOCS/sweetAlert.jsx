import Swal from "sweetalert2";

const withSweetAlert = (WrappedComponent) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-5 inline-block w-[100px]",
      cancelButton:
        "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-block w-[100px] ",
    },
    buttonsStyling: false,
  });

  return function WithSweetAlert(props) {
    const {
      title,
      text,
      icon,
      confirmButtonText,
      cancelButtonText,
      children1,
      children2,
      ...rest
    } = props;

    const handleConfirm = () => {
      swalWithBootstrapButtons
        .fire({
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          title,
          text,
          icon,
          width: "50rem",
          showCancelButton: true,
          confirmButtonText,
          cancelButtonText,
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            children1();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            children2();
          }
        });
    };

    return <WrappedComponent handleConfirm={handleConfirm} {...rest} />;
  };
};

export default withSweetAlert;
