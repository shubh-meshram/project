/* myscript.min.js */
function remove_from_cart() {
  $(document).on("click", ".shoppinCart table a.close", function () {
    $(this).parent().parent().remove();
  });
}

function plus_cart() {
  /*$(document).on("click",".shoppinCart table .btn.plus",function(){$(this).prev().text(parseInt($(this).prev().text())+1)})*/
}

function minus_cart() {
  /*$(document).on("click",".shoppinCart table .btn.minus",function(){$(this).next().text()-1==0?alert("Quantity can not be less than 1"):$(this).next().text($(this).next().text()-1)})*/
}

function assign_parent() {
  $(".list-group").each(function () {
    $(this).find(".sort-btn").attr("data-parent", $(this).attr("data-parent"));
  });
}

function sortlist() {
  assign_parent(),
    $(document).on("click", ".sort-btn", function () {
      $(this).parents(".list-group").find(".sort-btn").removeClass("active"),
        $(this).addClass("active");
      var e = $(this).attr("data-path");
      ".default" == e
        ? ($($(this).attr("data-parent")).find(".no-results").hide(),
          $($(this).attr("data-parent") + " .list-item").show())
        : $($(this).attr("data-parent") + " .list-item" + e).length < 1
        ? ($($(this).attr("data-parent")).find(".list-item").hide(),
          $($(this).attr("data-parent")).find(".no-results").show())
        : ($($(this).attr("data-parent")).find(".no-results").hide(),
          $($(this).attr("data-parent") + " .list-item").each(function () {
            1 == $(this).hasClass(e.slice(1)) ? $(this).show() : $(this).hide();
          }));
    });
}

function call_select() {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
    $(".styled").trigger("render");
  }),
    $(".styled").customSelect();
}

function icheck_call() {
  $("input").iCheck({
    checkboxClass: "icheckbox_flat-blue",
    radioClass: "iradio_flat-blue",
    increaseArea: "20%",
  });
}

function select_tab() {
  $(".dropbox").on("change", function () {
    var e = $(this).val();
    $("#tab_list_li li:eq(" + e + ") a").tab("show");
  });
}

function active_tab() {
  $('.my_tab_checkout a[data-toggle="tab"]').on("shown.bs.tab", function () {
    $(".my_tab_checkout li a i").removeClass("fa-square"),
      $(".my_tab_checkout li a i").addClass("fa-square-o"),
      $(this).find("i").removeClass("fa-square-o"),
      $(this).find("i").addClass("fa-square");
  });
}

function deletHistory() {
  $(document).on("click", ".booking a.close", function () {
    $(this).parent().parent().remove();
  });
}

function assign_box_size() {
  var e = 0;
  $(".concept-box-parent-row .concept-box-parent .middle-box").css(
    "min-height",
    "0"
  ),
    $(window).width() > 767 &&
      ($(".concept-box-parent-row .concept-box-parent").each(function () {
        e < $(this).find(".middle-box").innerHeight() &&
          (e = $(this).find(".middle-box").innerHeight());
      }),
      $(".concept-box-parent-row .concept-box-parent .middle-box").css(
        "min-height",
        e + "px"
      ));
}

function assign_box_size_menu() {
  var e = 0;
  $(".grid-parent .list-item .caption h4").css("min-height", "0"),
    $(window).width() > 767 &&
      ($(".grid-parent .list-item").each(function () {
        e < $(this).find(".caption h4").innerHeight() &&
          (e = $(this).find(".caption h4").innerHeight());
      }),
      $(".grid-parent .list-item .caption h4").css("min-height", e + "px"));
}

function assign_box_size() {
  var e = 0;
  $(".concept-box-parent-row .concept-box-parent .middle-box").css(
    "min-height",
    "0"
  ),
    $(window).width() > 767 &&
      ($(".concept-box-parent-row .concept-box-parent").each(function () {
        e < $(this).find(".middle-box").innerHeight() &&
          (e = $(this).find(".middle-box").innerHeight());
      }),
      $(".concept-box-parent-row .concept-box-parent .middle-box").css(
        "min-height",
        e + "px"
      ));
}

function calHeight() {
  var e = $(window).height(),
    s = e - 200;
  //$(".monthly_calender").css("height", s + "px")
}

function openScroll() {
  $("#myModal").on("show.bs.modal", function () {
    calHeight(),
      $(".monthly_calender").niceScroll({
        cursorwidth: "12px",
        cursorcolor: "#000",
      });
  }),
    $("#myModal").on("shown.bs.modal", function () {
      $(".monthly_calender").getNiceScroll().remove(),
        $(".monthly_calender").niceScroll({
          cursorwidth: "12px",
          cursorcolor: "#000",
        });
    });
}

function closeScroll() {
  $("#myModal").on("hidden.bs.modal", function () {
    $(".monthly_calender").getNiceScroll().remove();
  });
}

//Pooja

// window.onscroll = function() {myFunction()};

// var navHeader = document.getElementById("myHeader");
var stickyNav = navHeader.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > stickyNav) {
//     navHeader.classList.add("nav-sticky");
//   } else {
//     navHeader.classList.remove("nav-sticky");
//   }
// }
//Pooja

function validation() {
  $("#contact-form").validate({
    rules: {
      name: {
        required: !0,
      },
      number: {
        number: !0,
        minlength: 7,
        maxlength: 10,
      },
      email: {
        required: !0,
        email: !0,
      },
      subject: {
        required: !0,
      },
      message: {
        required: !0,
      },
      code: {
        required: !0,
        number: !0,
      },
    },
    submitHandler: function () {
      $(".form-btn").css("display", "none"),
        $(".loader").css("display", "inline-block"),
        $(".error-message")
          .html("Please wait your message is sending..")
          .css("display", "block");
      var e = $("#name").val(),
        s = $("#number").val(),
        a = $("#email").val(),
        t = $("#subject").val(),
        n = $("#message").val();
      return (
        $.ajax({
          type: "POST",
          data: {
            name: e,
            number: s,
            email: a,
            subject: t,
            message: n,
          },
          url: "sendmail.php",
          success: function (e) {
            "Your Message Send Successfully." == e
              ? ($(".error-message")
                  .html("Our Administrative call you.")
                  .addClass("text-success")
                  .css("display", "block"),
                $(".form-control").val(""))
              : $(".error-message")
                  .html("Please Try again..")
                  .addClass("text-danger")
                  .removeClass("text-success")
                  .css("display", "block"),
              $(".form-btn").css("display", "block"),
              $(".loader").css("display", "none");
          },
        }),
        !1
      );
    },
  }),
    $("#register-form").validate({
      rules: {
        name: {
          required: !0,
        },
        number: {
          number: !0,
          minlength: 7,
          maxlength: 10,
        },
        altnumber: {
          number: !0,
          minlength: 7,
          maxlength: 10,
        },
        email: {
          required: !0,
          email: !0,
        },
        address: {
          required: !0,
        },
        username: {
          required: !0,
        },
        password: {
          required: !0,
        },
        repassword: {
          required: !0,
          equalTo: "#password",
        },
        agree: {
          required: !0,
        },
      },
      submitHandler: function () {
        $(".form-btn").css("display", "none"),
          $(".loader").css("display", "inline-block"),
          $(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#name").val(),
          s = $("#number").val(),
          a = $("#altnumber").val(),
          t = $("#email").val(),
          n = $("#address").val(),
          l = $("#username").val(),
          i = $("#password").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              name: e,
              number: s,
              altnumber: a,
              email: t,
              address: n,
              username: l,
              password: i,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $(".form-control").val(""))
                : $(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $(".form-btn").css("display", "block"),
                $(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#sign-form").validate({
      rules: {
        name: {
          required: !0,
        },
        number: {
          number: !0,
          minlength: 7,
          maxlength: 10,
        },
        email: {
          required: !0,
          email: !0,
        },
        location: {
          valueNotEquals: "default",
        },
        city: {
          valueNotEquals: "default",
        },
        cname: {
          required: !0,
        },
        saddress: {
          required: !0,
        },
        agree: {
          required: !0,
        },
      },
      messages: {
        location: {
          valueNotEquals: "Please select location",
        },
        city: {
          valueNotEquals: "Please select city",
        },
      },
      submitHandler: function () {
        $(".form-btn").css("display", "none"),
          $(".loader").css("display", "inline-block"),
          $(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#name").val(),
          s = $("#number").val(),
          a = $("#email").val(),
          t = $("#location option:selected").text(),
          n = $("#city option:selected").text(),
          l = $("#cname").val(),
          i = $("#saddress").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              name: e,
              number: s,
              email: a,
              location: t,
              city: n,
              cname: l,
              saddress: i,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $(".form-control").val(""))
                : $(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $(".form-btn").css("display", "block"),
                $(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#checkoutform-form").validate({
      rules: {
        location: {
          valueNotEquals: "default",
        },
        city: {
          valueNotEquals: "default",
        },
        address: {
          valueNotEquals: "default",
        },
      },
      messages: {
        location: {
          valueNotEquals: "Please select location",
        },
        city: {
          valueNotEquals: "Please select city",
        },
        address: {
          valueNotEquals: "Please select address",
        },
      },
      submitHandler: function () {
        $(".form-btn").css("display", "none"),
          $(".loader").css("display", "inline-block"),
          $(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#location option:selected").text(),
          s = $("#city option:selected").text(),
          a = $("#address option:selected").text();
        return (
          $.ajax({
            type: "POST",
            data: {
              location: e,
              city: s,
              address: a,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $(".form-control").val(""))
                : $(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $(".form-btn").css("display", "block"),
                $(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#checkout-form").validate({
      rules: {
        available: {
          required: !0,
          number: !0,
        },
        locked: {
          required: !0,
          number: !0,
        },
        addmoreamount: {
          required: !0,
          number: !0,
        },
      },
      submitHandler: function () {
        $("#checkout-form").find(".form-btn").css("display", "none"),
          $("#checkout-form").find(".loader").css("display", "inline-block"),
          $("#checkout-form")
            .find(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#available").val(),
          s = $("#locked").val(),
          a = $("#addmoreamount").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              available: e,
              locked: s,
              addmoreamount: a,
            },
            url: "sendmail1.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($("#checkout-form")
                    .find(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $("#checkout-form").find(".form-control").val(""))
                : $("#checkout-form")
                    .find(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $("#checkout-form")
                  .find(".form-btn")
                  .css("display", "inline-block"),
                $("#checkout-form").find(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#neft-form").validate({
      rules: {
        neft: {
          required: !0,
          number: !0,
        },
      },
      submitHandler: function () {
        $("#neft-form").find(".form-btn").css("display", "none"),
          $("#neft-form").find(".loader").css("display", "inline-block"),
          $("#neft-form")
            .find(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#neft").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              neft: e,
            },
            url: "sendmail1.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($("#neft-form")
                    .find(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $("#neft-form").find(".form-control").val(""))
                : $("#neft-form")
                    .find(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $("#neft-form")
                  .find(".form-btn")
                  .css("display", "inline-block"),
                $("#neft-form").find(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#cheque-form").validate({
      rules: {
        cheque: {
          required: !0,
          number: !0,
        },
      },
      submitHandler: function () {
        $("#cheque-form").find(".form-btn").css("display", "none"),
          $("#cheque-form").find(".loader").css("display", "inline-block"),
          $("#cheque-form")
            .find(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#cheque").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              cheque: e,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($("#cheque-form")
                    .find(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $("#cheque-form").find(".form-control").val(""))
                : $("#cheque-form")
                    .find(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $("#cheque-form")
                  .find(".form-btn")
                  .css("display", "inline-block"),
                $("#cheque-form").find(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#login-form").validate({
      rules: {
        email: {
          required: !0,
        },
        password: {
          required: !0,
        },
      },
      submitHandler: function () {
        $(".form-btn").css("display", "none"),
          $(".loader").css("display", "inline-block"),
          $(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#email").val(),
          s = $("#password").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              email: e,
              password: s,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $(".form-control").val(""))
                : $(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $(".form-btn").css("display", "inline-block"),
                $(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    }),
    $("#forgot-form").validate({
      rules: {
        email: {
          required: !0,
        },
      },
      submitHandler: function () {
        $(".form-btn").css("display", "none"),
          $(".loader").css("display", "inline-block"),
          $(".error-message")
            .html("Please wait your message is sending..")
            .css("display", "block");
        var e = $("#email").val();
        return (
          $.ajax({
            type: "POST",
            data: {
              email: e,
            },
            url: "sendmail.php",
            success: function (e) {
              "Your Message Send Successfully." == e
                ? ($(".error-message")
                    .html("Our Administrative call you.")
                    .addClass("text-success")
                    .css("display", "block"),
                  $(".form-control").val(""))
                : $(".error-message")
                    .html("Please Try again..")
                    .addClass("text-danger")
                    .removeClass("text-success")
                    .css("display", "block"),
                $(".form-btn").css("display", "inline-block"),
                $(".loader").css("display", "none");
            },
          }),
          !1
        );
      },
    });
}

function img_in_middle() {}

function checked_hide_show() {
  $("input").on("ifChecked", function () {
    $($(this).attr("data-show")).show(),
      $(".customeseletbox").trigger("render");
  }),
    $("input").on("ifUnchecked", function () {
      $($(this).attr("data-show")).hide();
    });
}

var modal_click = function () {
  $(".modal-btn").click(function () {
    $(".mymodal .modal-header .head-text").html("Modal Heading");
    $(".mymodal .modal-body").html(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    );
    $(".mymodal").modal("show");
  });
};
var call_nicescroll_cust = function () {
  if ($(window).width() > 768) {
    $(".table-wrapper").niceScroll({
      cursorcolor: "#656D78",
      background: "rgb(209, 212, 216)",
      autohidemode: false,
      cursorborderradius: "0",
      cursorwidth: "7px",
      cursorborder: "0",
    });
  }
};
var assign_height_to_menu = function () {
  if ($(window).width() < 768) {
    $("header .navbar-default .navbar-collapse .navbar-nav").height(
      $(window).height() - $(".navbar-default").height() + "px"
    );
  }
};
var summary_total_stiky = function () {
  $(window).bind("scroll", function (e) {
    var top =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    //$('.allsort .list-item:last-child').css('background','red');
    //alert($('.allsort .list-item:last-child').offset().top);

    if (top >= $(".allsort .list-item:last-child").offset().top - 300) {
    }
  });

  // $(window).scroll(function() {
  //
  // var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  //
  // var offset = $('.custmized_meal_container').height()+ $('header').height();
  //
  // console.log('top' + top);
  // console.log( $('.list-item:last-child').offset().top);
  //
  //
  // if(top >= offset) {
  //
  // }
  //
  //
  //
  // });
};

$.validator.addMethod(
  "valueNotEquals",
  function (e, s, a) {
    return a != e;
  },
  "Value must not equal arg."
),
  jQuery(document).ready(function (e) {
    e(".chosen").chosen({
      width: "95%",
    }),
      openScroll(),
      modal_click(),
      assign_height_to_menu(),
      closeScroll(),
      sortlist(),
      call_select(),
      select_tab(),
      deletHistory(),
      assign_box_size(),
      assign_box_size_menu(),
      img_in_middle(),
      e(".customeseletbox").customSelect(),
      e(".Datepicker").datepicker({
        minDate: 0,
        dateFormat: "dd-mm-yy",
        multidate: !0,
      }),
      validation(),
      active_tab(),
      //remove_from_cart(),
      plus_cart(),
      minus_cart(),
      icheck_call(),
      checked_hide_show(),
      e(window).resize(function () {
        assign_box_size(), assign_box_size_menu();
      });
  });

/*Anand*/
/*mobile header*/

$(document).ready(function () {
  var divHeight = $(".header-main-menu").height();
  $(".header-dropdown-menu").css("top", divHeight + "px");
});
