import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const chooseTypePay = async () => {
  const { value: xx } = await MySwal.fire({
    title: "Payment",
    input: "select",
    inputOptions: {
      online: "Thanh toán trực tiếp",
      offline: "Thanh toán khi nhận hàng",
    },
    inputPlaceholder: "Kiểu nhận hàng",
    showCancelButton: true,
  });

  if (xx) {
    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", MySwal.stopTimer);
        toast.addEventListener("mouseleave", MySwal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Đặt hàng thành công\nHàng sẽ được giao sớm nhất có thể",
    });
  }
};

export const magiamgia = () => {
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Thêm mã giảm giá thành công",
  });
};

export const commentCountdown = () => {
  const Toast = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Cảm ơn bạn đã feedback",
  });
};

export const muakhuyenmai = () => {
  const Toast = MySwal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "warning",
    title: "Hết hàng !!! Mua chậm thì chịu chứ sao :>",
  });
};

export const addSuccess = async () => {
  MySwal.fire({
    position: "bottom-start",
    icon: "success",
    title: "Đã thêm vào giỏ hàng",
    showConfirmButton: false,
    timer: 700,
  });
};

export const popupToBuy = async () => {
  const { value: formValues } = await MySwal.fire({
    title: "Multiple inputs",
    html:
      '<input placeholder="Họ và Tên" id="swal-input1" class="swal2-input">' +
      '<input placeholder="Số điện thoại" id="swal-input2" class="swal2-input">' +
      '<input placeholder="Địa chỉ nhận hàng" id="swal-input3" class="swal2-input">' +
      '<input placeholder="Ghi chú" id="swal-input4" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value,
        document.getElementById("swal-input3").value,
        document.getElementById("swal-input4").value,
      ];
    },
  });

  if (formValues) {
    chooseTypePay();
  }
};
