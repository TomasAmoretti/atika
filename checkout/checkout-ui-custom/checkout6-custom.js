$(document).ready(function () {
  $.ajaxSetup({
    complete: function () {
      $(".checkout-container .cart-template.active .cart-select-gift-placeholder").insertAfter($(".table.table.cart-items"));
    }
  });
  if (window.location.href.includes('cart')) {
    if (document.querySelectorAll(".item-link-remove") != null) {
      let remove = document.querySelectorAll(".item-link-remove");
      remove.forEach((itemremove) => {
        itemremove.children[0].className = "icon icon-trash item-remove-ico";
      });
    }
  }

  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '/arquivos/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);

});

function quitarDecimales(precio) {
  precio.innerText = precio.innerText.split(",").shift();
}

//Remover decimales en items cart
function quitarDecimalesCart() {
  if (location.hash == '#/cart') {
    setTimeout(() => {
      let itemsCarrito = document.querySelectorAll("span.new-product-price");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.innerText.includes(",")) {
          quitarDecimales(itemDecimal);
        }
      });
      let itemsCarritoViejo = document.querySelectorAll("del.old-product-price.muted");
      itemsCarritoViejo.forEach((itemDecimalViejo) => {
        if (itemDecimalViejo.innerText.includes(",")) {
          quitarDecimales(itemDecimalViejo);
        }
      });
      if ((document.querySelector("tbody.totalizers-list td.monetary") != null) && document.querySelector("tbody.totalizers-list td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("tbody.totalizers-list td.monetary"));
      }
      if ((document.querySelector("tr.srp-summary-result td.monetary") != null) && document.querySelector("tr.srp-summary-result td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("tr.srp-summary-result td.monetary"));
      }
      if ((document.querySelector(".summary-template-holder tfoot tr td.monetary") != null) && document.querySelector(".summary-template-holder tfoot tr td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector(".summary-template-holder tfoot tr td.monetary"));
      }
      if ($(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder") != "Código cupón de descuento") {
        $(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder", "Código cupón de descuento");
      }
      if (document.querySelector("#cartLoadedDiv > div.extensions-checkout-buttons-container.row-fluid > .texto-comunas-footer") == null) {
        $("#cartLoadedDiv > div.extensions-checkout-buttons-container.row-fluid").append("<div class='texto-comunas-footer'>Precio incluye IVA. El costo del despacho se incluye al finalizar la compra. <a href='#' class='link-comunas'>Ver comunas despacho disponible</a></div>");
      }
      if ($("a.boton-volver-home").length == 0 && $(".table.cart-items tbody tr").length >= 1) {
        $(".transactions-container.row-fluid").append("<a class='boton-volver-home' href='/'><p>←</p> Seguir comprando</a>");
      }
      if (document.querySelector(".transactions-container.row-fluid .transactions.span5.pull-right .aviso-terminos") == null && $(".table.cart-items tbody tr").length >= 1) {
        $(".transactions-container.row-fluid .transactions.span5.pull-right").append("<div class='aviso-terminos'>Al hacer click en 'FINALIZAR COMPRA' estás aceptando nuestros <a class='terminos-checkout' href='/institucional'>términos y condiciones</a>.</div>");
      }
    }, 1000);
  }

  if (location.hash == '#/email') {
    setTimeout(() => {
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      if ($(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder") != "Código cupón de descuento") {
        $(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder", "Código cupón de descuento");
      }
    }, 1000);
  }

  if (location.hash == '#/profile') {
    setTimeout(() => {
      //Precios items col derecha
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      if ($(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder") != "Código cupón de descuento") {
        $(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder", "Código cupón de descuento");
      }
      if ($("#client-document").attr("placeholder") == "99.999.999-K") {
        $("#client-document").attr("placeholder", "99999999-K");
      }
    }, 1000);
  }

  if (location.hash == '#/shipping') {
    setTimeout(() => {
      //Precios items col derecha
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      //Precios costo envio opciones
      if (document.querySelector(".vtex-omnishipping-1-x-scheduledDeliveryList") != null) {
        let itemsEnvio = document.querySelectorAll(".vtex-omnishipping-1-x-leanShippingOption");
        itemsEnvio.forEach((itemEnvio) => {
          if (itemEnvio.children[3].innerText.includes(",")) {
            quitarDecimales(itemEnvio.children[3]);
          }
        });
      }
      //Precios selec tipo de envio
      if (document.querySelector(".vtex-omnishipping-1-x-scheduledDelivery .span12") != null) {
        let itemsOpcion = document.querySelectorAll(".vtex-omnishipping-1-x-scheduledDelivery .span12");
        itemsOpcion.forEach((itemOp) => {
          if (itemOp.children[0].innerText.includes(",")) {
            quitarDecimales(itemOp.children[0]);
          }
        });
      }
      if ($(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder") != "Código cupón de descuento") {
        $(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder", "Código cupón de descuento");
      }
    }, 1000);
  }

  if (location.hash == '#/payment') {
    setTimeout(() => {
      //Precios items col derecha
      let itemsCarrito = document.querySelectorAll("ul.cart-items>li.hproduct.item");
      itemsCarrito.forEach((itemDecimal) => {
        if (itemDecimal.children[3].children[3].innerText.includes(",")) {
          quitarDecimales(itemDecimal.children[3].children[3]);
        }
      });
      //Sub total col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.Items > td.monetary"));
      }
      //Costo envio col derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tbody.totalizers-list > tr.srp-summary-result.hide > td.monetary"));
      }
      //Total columna derecha
      if ((document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary") != null) && document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary").innerText.includes(",")) {
        quitarDecimales(document.querySelector("body > div.container.container-main.container-order-form > div.checkout-container.row-fluid.orderform-active > div.row-fluid.orderform-template.span12.active > div.cart-template.mini-cart.span4 > div > div > div.summary-template-holder > div > div.span5.totalizers.summary-totalizers.cart-totalizers.pull-right > div:nth-child(2) > div > div.accordion-body.collapse.in > div > table > tfoot > tr > td.monetary"));
      }
      //Total que se muestra con los datos de envio
      if ((document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice") != null) && document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice").innerText.includes(",")) {
        quitarDecimales(document.querySelector(".shp-summary-group-price.vtex-omnishipping-1-x-SummaryItemPrice"));
      }
      //Precio Webpay
      if ((document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span") != null) && document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span").innerText.includes(",")) {
        quitarDecimales(document.querySelector("fieldset.webpayPaymentGroup .installments p.sight span"));
      }
      //Precio Transferencia
      if ((document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span") != null) && document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span").innerText.includes(",")) {
        quitarDecimales(document.querySelector("fieldset.promissoryPaymentGroup .installments p.sight span"));
      }
      if ($(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder") != "Código cupón de descuento") {
        $(".summary-template-holder .summary-coupon p.coupon-fields span input").attr("placeholder", "Código cupón de descuento");
      }
    }, 1000);
  }
}

function agregarCamposShipping() {
  if (location.hash == '#/shipping') {
    setTimeout(() => {
      if (document.querySelector(".vtex-omnishipping-1-x-address") != null) {
        //Agregar campo de texto
        if (document.querySelector(".input.ship-receiverDropPersonal") == null) {
          let selectPersonalDescarga = "<div class='input ship-receiverDropPersonal required text' ><label for='ship-receiverDropPersonal'>Otras condiciones de despacho (<a href='/institucional' class='link-despacho'>Ver condiciones despacho</a>)</label><input name='comentarios-despacho' id='campo-shipping' class='campo-shipping'></input></div>";
          $("p.input.ship-receiverName.required.text").prepend(selectPersonalDescarga);
        }
        //Select Tipo de estacionamiento
        if (document.querySelector(".input.ship-receiverParkingType") == null) {
          let selectTipoEstacionamiento = "<div class='input ship-receiverParkingType required text'><label for='ship-receiverParkingType'>Tipo de Estacionamiento</label><select class='select-addres' id='tipo-estacionamiento'><option value='0'>SUBTERRANEO/EXTERIOR</option><option value='Subterraneo'>SUBTERRANEO</option><option value='Exterior'>EXTERIOR</option></select><p class='warning-addres'>*El camino de acceso hacia el domicilio debe tener un minimo de 3mts. de ancho.</p><p class='error-address'>*Por favor elija una opción</p></div>";
          $("p.input.ship-receiverName.required.text").prepend(selectTipoEstacionamiento);
        }
        //Agregar input telefono quien recibe
        if (document.querySelector(".input.ship-receiverPhone") == null) {
          let inputTelefono = "<div class='input ship-receiverPhone required text'><label for='ship-receiverPhone'>Telefono de la persona que va a recibir</label><input autocomplete='on' placeholder='+56 222 22 222' id='ship-receiverPhone' type='text' name='receiver' maxlength='60' class='input-xlarge' data-hj-whitelist='true' value=''><p class='error-address'>*Por favor ingrese un numero de contacto</p></div>";
          $("p.input.ship-receiverName.required.text").append(inputTelefono);
        }

        //Comprobamos los estados de los select y el input
        $(".orderform-template-holder .step.shipping-data .vtex-omnishipping-1-x-address").change(function () {
          comprobarCamposEntrega();
        });

        //Funcion de validacion en campos y guardar en orderform
        $("button#btn-go-to-payment").on("click", (function () {
          comprobarCamposEntrega();
          var orderForm = window.dataLayer.filter(p => p.orderFormId != null);

          var address = {
            address: {
              comentarios: $("input#campo-shipping").val(),
              parkingType: $("select#tipo-estacionamiento").val(),
              reciverPhone: $("input#ship-receiverPhone").val()
            }
          };

          var urlSaveDadosUser = "/api/checkout/pub/orderForm/" + orderForm[0].orderFormId + "/attachments/invoiceData";

          $.ajax({
            headers: {
              Accept: "application/vnd.vtex.ds.v10+json",
              "Content-Type": "application/json",
            },
            data: JSON.stringify(address),
            type: "POST",
            url: urlSaveDadosUser,
            success: function (data) {
              console.log(data);
            },
            error: function (data) {
              console.log(data);
            },
          });
        }));
      }

    }, 1000);
  }
}

function comprobarCamposEntrega() {
  if ($("select#tipo-estacionamiento").val() == "0") {
    $(".input.ship-receiverParkingType .error-address").css("display", "block");
    $("button#btn-go-to-payment").prop('disabled', true);
  } else {
    $(".input.ship-receiverParkingType .error-address").css("display", "none");
    $("button#btn-go-to-payment").prop('disabled', false);
  }
  if ($("input#ship-receiverPhone").val() == "") {
    $(".input.ship-receiverPhone .error-address").css("display", "block");
    $("input#ship-receiverPhone").addClass("error");
    $("button#btn-go-to-payment").prop('disabled', true);
  } else {
    $(".input.ship-receiverPhone .error-address").css("display", "none");
    $("button#btn-go-to-payment").prop('disabled', false);
  }
}


/* NUEVO JS */
! function (e) {
  var o = {};

  function a(n) {
    if (o[n]) return o[n].exports;
    var r = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(r.exports, r, r.exports, a), r.l = !0, r.exports
  }
  a.m = e, a.c = o, a.d = function (e, o, n) {
    a.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    })
  }, a.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, a.t = function (e, o) {
    if (1 & o && (e = a(e)), 8 & o) return e;
    if (4 & o && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & o && "string" != typeof e)
      for (var r in e) a.d(n, r, function (o) {
        return e[o]
      }.bind(null, r));
    return n
  }, a.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return a.d(o, "a", o), o
  }, a.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o)
  }, a.p = "", a(a.s = 1)
}([function (e, o) {
  e.exports._locale = {
    BRA: {
      couponInactive: "Nenhum desconto aplicado. Confira as regras.",
      editLabel: "Editar",
      deliveryDateText: "Entrega até",
      PickupDateText: "Pronto até",
      eachLabel: "cada",
      tomorrowLabel: "Amanhã",
      checkoutStepsLabelCart: "Carrinho",
      checkoutStepsLabelIdentification: "Identificação",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pagamento",
      checkoutStepsLabelConfirmation: "Confirmação",
      city: "Cidade",
      state: "Estado",
      address1Placeholder: "Endereço",
      address2Placeholder: "Complemento",
      requiredField: "Este campo é obrigatório."
    },
    CAN: {
      couponInactive: "No discounts available. Check the conditions.",
      editLabel: "Edit",
      paypalImg: "",
      paypalPhone: "1 (888) 221-1161",
      cartSubmitButton: "Proceed to Payment",
      deliveryDateText: "Arrives by",
      PickupDateText: "Ready by",
      eachLabel: "each",
      tomorrowLabel: "Tomorrow",
      cartNoteLabel: "Gift Message or Comments",
      identifiedUserMessage: "Thanks for coming back!\nTo expedite your transaction, we have securely populated your information for you.",
      address1Placeholder: "Street address",
      address2Placeholder: "Apartment, suite, building, floor, etc (optional)",
      checkoutStepsLabelCart: "Cart",
      checkoutStepsLabelIdentification: "Identification",
      checkoutStepsLabelShipping: "Shipping",
      checkoutStepsLabelPayment: "Payment",
      checkoutStepsLabelConfirmation: "Confirmation",
      googleAddressLabel: "Street Address",
      requiredField: "This field is required."
    },
    USA: {
      couponInactive: "No discounts available. Check the conditions.",
      editLabel: "Edit",
      paypalImg: "",
      paypalPhone: "1 (888) 221-1161",
      cartSubmitButton: "Proceed to Payment",
      deliveryDateText: "Arrives by",
      PickupDateText: "Ready by",
      eachLabel: "each",
      tomorrowLabel: "Tomorrow",
      cartNoteLabel: "Gift Message or Comments",
      identifiedUserMessage: "Thanks for coming back!\nTo expedite your transaction, we have securely populated your information for you.",
      address1Placeholder: "Street address or P.O. Box",
      address2Placeholder: "Apartment, suite, building, floor, etc (optional)",
      checkoutStepsLabelCart: "Cart",
      checkoutStepsLabelIdentification: "Identification",
      checkoutStepsLabelShipping: "Shipping",
      checkoutStepsLabelPayment: "Payment",
      checkoutStepsLabelConfirmation: "Confirmation",
      googleAddressLabel: "Street Address",
      requiredField: "This field is required."
    },
    GBR: {
      couponInactive: "No discounts available. Check the conditions.",
      editLabel: "Edit",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Proceed to Payment",
      deliveryDateText: "Arrives by",
      PickupDateText: "Ready by",
      eachLabel: "each",
      tomorrowLabel: "Tomorrow",
      cartNoteLabel: "Gift Message or Comments",
      identifiedUserMessage: "Thanks for coming back!\nTo expedite your transaction, we have securely populated your information for you.",
      address1Placeholder: "Street address",
      address2Placeholder: "Apartment, suite, building, floor, etc (optional)",
      checkoutStepsLabelCart: "Cart",
      checkoutStepsLabelIdentification: "Identification",
      checkoutStepsLabelShipping: "Shipping",
      checkoutStepsLabelPayment: "Payment",
      checkoutStepsLabelConfirmation: "Confirmation",
      requiredField: "This field is required."
    },
    POR: {
      couponInactive: "Nenhum desconto aplicado. Confira as regras.",
      editLabel: "Editar",
      paypalImg: "",
      paypalPhone: "",
      deliveryDateText: "Entrega até",
      PickupDateText: "Pronto até",
      eachLabel: "cada",
      tomorrowLabel: "Amanhã",
      checkoutStepsLabelCart: "Carrinho",
      checkoutStepsLabelIdentification: "Identificação",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pagamento",
      checkoutStepsLabelConfirmation: "Confirmação",
      requiredField: "Este campo é obrigatório"
    },
    ESP: {
      couponInactive: "No hay descuentos disponibles. Consulta las condiciones.",
      editLabel: "Editar",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Proceder al pago",
      deliveryDateText: "Llega por",
      PickupDateText: "Disponible",
      eachLabel: "cada",
      tomorrowLabel: "Mañana",
      cartNoteLabel: "Mensaje de regalo o comentarios",
      address1Placeholder: "Dirección",
      address2Placeholder: "Dirección Complementaria",
      checkoutStepsLabelCart: "Carrito",
      checkoutStepsLabelIdentification: "Identificación",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pago",
      checkoutStepsLabelConfirmation: "Confirmación",
      requiredField: "Este campo es obligatorio."
    },
    COL: {
      couponInactive: "No hay descuentos disponibles. Consulta las condiciones.",
      editLabel: "Editar",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Proceder al pago",
      deliveryDateText: "Llega por",
      PickupDateText: "Disponible",
      eachLabel: "cada",
      tomorrowLabel: "Mañana",
      cartNoteLabel: "Mensaje de regalo o comentarios",
      address1Placeholder: "Dirección",
      address2Placeholder: "Dirección Complementaria",
      checkoutStepsLabelCart: "Carrito",
      checkoutStepsLabelIdentification: "Identificación",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pago",
      checkoutStepsLabelConfirmation: "Confirmación",
      requiredField: "Este campo es obligatorio."
    },
    PAN: {
      couponInactive: "No hay descuentos disponibles. Consulta las condiciones.",
      editLabel: "Editar",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Proceder al pago",
      deliveryDateText: "Llega por",
      PickupDateText: "Disponible",
      eachLabel: "cada",
      tomorrowLabel: "Mañana",
      cartNoteLabel: "Mensaje de regalo o comentarios",
      address1Placeholder: "Dirección",
      address2Placeholder: "Dirección Complementaria",
      checkoutStepsLabelCart: "Carrito",
      checkoutStepsLabelIdentification: "Identificación",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pago",
      checkoutStepsLabelConfirmation: "Confirmación",
      requiredField: "Este campo es obligatorio."
    },
    MEX: {
      couponInactive: "No hay descuentos disponibles. Consulta las condiciones.",
      editLabel: "Editar",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Proceder al pago",
      deliveryDateText: "Llega por",
      PickupDateText: "Disponible",
      eachLabel: "cada",
      tomorrowLabel: "Mañana",
      cartNoteLabel: "Mensaje de regalo o comentarios",
      address1Placeholder: "Dirección",
      address2Placeholder: "Dirección Complementaria",
      checkoutStepsLabelCart: "Carrito",
      checkoutStepsLabelIdentification: "Identificación",
      checkoutStepsLabelShipping: "Entrega",
      checkoutStepsLabelPayment: "Pago",
      checkoutStepsLabelConfirmation: "Confirmación",
      requiredField: "Este campo es obligatorio."
    },
    ITA: {
      couponInactive: "Nessuno sconto disponibile. Controlla le condizioni.",
      editLabel: "Modifica",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Procedi al pagamento",
      deliveryDateText: "In consegna entro",
      PickupDateText: "Pronto entro",
      eachLabel: "ciascuno",
      tomorrowLabel: "Domani",
      cartNoteLabel: "Messaggio d'auguri o note",
      address1Placeholder: "Indirizzo (Via e numero civico)",
      address2Placeholder: "Informazioni aggiuntive",
      checkoutStepsLabelCart: "Carrello",
      checkoutStepsLabelIdentification: "Identificazione",
      checkoutStepsLabelShipping: "Spedizione",
      checkoutStepsLabelPayment: "Pagamento",
      checkoutStepsLabelConfirmation: "Conferma",
      city: "Città",
      state: "Provincia",
      number: "Numero",
      requiredField: "Questo campo è obbligatorio."
    },
    FRA: {
      couponInactive: "Aucune réduction disponible. Vérifiez les conditions.",
      editLabel: "Modifier",
      paypalImg: "",
      paypalPhone: "+33 0186995653",
      cartSubmitButton: "Procéder au paiement",
      deliveryDateText: "Arrive le",
      PickupDateText: "Prêt le",
      eachLabel: "chaque",
      tomorrowLabel: "Demain",
      address1Placeholder: "Adresse ou Boîte postale",
      address2Placeholder: "Appartement, suite, bâtiment, étage, etc (facultatif)",
      checkoutStepsLabelCart: "Panier",
      checkoutStepsLabelIdentification: "Identification",
      checkoutStepsLabelShipping: "Expédition",
      checkoutStepsLabelPayment: "Paiement",
      checkoutStepsLabelConfirmation: "Confirmation",
      requiredField: "Ce champ est obligatoire."
    },
    FIN: {
      couponInactive: "Alennuksia ei saatavilla. Tarkasta ehdot.",
      editLabel: "Muokkaa",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Jatka maksuun",
      deliveryDateText: "Saapumisarvio",
      PickupDateText: "Valmiusarvio",
      eachLabel: "kappale",
      tomorrowLabel: "Huomenna",
      checkoutStepsLabelCart: "Ostoskori",
      checkoutStepsLabelIdentification: "Tunniste",
      checkoutStepsLabelShipping: "Toimitus",
      checkoutStepsLabelPayment: "Maksu",
      checkoutStepsLabelConfirmation: "Vahvistus"
    },
    SWE: {
      couponInactive: "Inga rabatter tillgängliga, kontrollera villkoren.",
      editLabel: "Redigera",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Fortsätt till betalning",
      deliveryDateText: "Ankommer den",
      PickupDateText: "Redo den",
      eachLabel: "var",
      tomorrowLabel: "Imorgon",
      checkoutStepsLabelCart: "Kundvagn",
      checkoutStepsLabelIdentification: "Identifikation",
      checkoutStepsLabelShipping: "Leverans",
      checkoutStepsLabelPayment: "Betalning",
      checkoutStepsLabelConfirmation: "Bekräftelse"
    },
    DEU: {
      couponInactive: "Kein Rabatt verfügbar. Überprüfen Sie die Bedingungen.",
      editLabel: "Anpassen",
      paypalImg: "",
      paypalPhone: "",
      cartSubmitButton: "Weiter zur Zahlung",
      DeliveryDateText: "Lieferung bis",
      PickupDateText: "Abholbereit bis",
      eachLabel: "jedes/jeder",
      tomorrowLabel: "Morgen",
      checkoutStepsLabelCart: "Warenkorb",
      checkoutStepsLabelIdentification: "Anmeldung",
      checkoutStepsLabelShipping: "Versand",
      checkoutStepsLabelPayment: "Zahlung",
      checkoutStepsLabelConfirmation: "Bestätigung",
      googleAddressLabel: "Adresse"
    }
  }
}, function (e, o, a) {
  a(2), e.exports = a(8)
}, function (e, o, a) {
  const n = a(3),
    r = a(4);
  window.vcustom = {
    checkout: new r({
      type: 'vertical',
      accordionPayments: true,
      deliveryDateFormat: true,
      quantityPriceCart: true,
      showNoteField: true,
      customAddressForm: false,
      hideEmailStep: false
    }),
    debug: new n({
      dbg: !1,
      logo: ""
    })
  }, vcustom.checkout.start()
}, function (e, o) {
  e.exports = class {
    constructor({
      dbg: e = !1,
      logo: o = '<img src="https://via.placeholder.com/160x60">'
    } = {}) {
      this.classOn = "debug-on", this.logo = o, this.headerHTML = `<header class="main-header debug-elem"> <div class="container"> <div class="header-link"> <a href="/" title="add more products" class="buy-more-link link">Continue shopping</a> <a href="/checkout/#/cart" title="back to cart" class="back-cart-link link">Back to Cart</a> </div><a href="/" title="Go to homepage" class="logo">${this.logo}</a> </div></header>`, this.footerHTML = '<footer class="main-footer debug-elem"> <div class="container"> <svg class="vtex-logo" height="40" viewBox="0 0 115 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.2904 13.4951H20.8256C18.6959 13.4951 17.3322 15.7303 18.3287 17.5885L21.076 22.7244H16.0956C15.7802 22.7245 15.4701 22.805 15.1955 22.9581C14.9209 23.1112 14.6909 23.3318 14.528 23.5984C14.3651 23.865 14.2746 24.1686 14.2654 24.4799C14.2562 24.7911 14.3286 25.0994 14.4756 25.375L23.3121 41.8868C23.4679 42.1772 23.7009 42.4202 23.986 42.5897C24.2712 42.7592 24.5977 42.8488 24.9306 42.8488C25.2635 42.8488 25.59 42.7592 25.8752 42.5897C26.1603 42.4202 26.3933 42.1772 26.5491 41.8868L28.949 37.4266L31.9598 43.0541C33.0195 45.0333 35.8901 45.037 36.9535 43.0599L50.7197 17.4848C51.6927 15.6759 50.365 13.4951 48.2904 13.4951ZM35.9533 24.4223L30.0175 35.4525C29.9137 35.6456 29.7587 35.8072 29.5689 35.9198C29.3792 36.0325 29.162 36.0921 28.9405 36.0921C28.7191 36.0921 28.5019 36.0325 28.3122 35.9198C28.1224 35.8072 27.9674 35.6456 27.8636 35.4525L21.9851 24.4687C21.8868 24.2856 21.8382 24.0805 21.8437 23.8734C21.8493 23.6662 21.909 23.464 22.017 23.2863C22.125 23.1085 22.2776 22.9614 22.4601 22.859C22.6426 22.7566 22.8488 22.7025 23.0587 22.7019H34.9061C35.1107 22.7019 35.3119 22.7542 35.49 22.8537C35.6682 22.9532 35.8172 23.0965 35.9226 23.2697C36.028 23.4429 36.0862 23.64 36.0916 23.842C36.097 24.044 36.0493 24.2439 35.9533 24.4223Z" fill="#F71963" style=" /* fill: #000; */"></path><path d="M77.5031 25.3597H74.4988V35.5249C74.4986 35.6176 74.4613 35.7063 74.3949 35.7718C74.3286 35.8373 74.2387 35.8742 74.1448 35.8744H71.8279C71.7341 35.8742 71.6442 35.8373 71.5779 35.7718C71.5115 35.7063 71.4742 35.6176 71.474 35.5249V25.3597H68.4521C68.4066 25.3616 68.3612 25.3544 68.3186 25.3385C68.2759 25.3227 68.2369 25.2986 68.2039 25.2677C68.1709 25.2367 68.1445 25.1995 68.1264 25.1583C68.1082 25.117 68.0986 25.0726 68.0981 25.0277V23.2297C68.0986 23.1847 68.1082 23.1403 68.1264 23.0991C68.1445 23.0578 68.1709 23.0206 68.2039 22.9897C68.2369 22.9587 68.2759 22.9346 68.3186 22.9188C68.3612 22.903 68.4066 22.8958 68.4521 22.8976H77.5023C77.5961 22.8933 77.6879 22.9257 77.7575 22.988C77.8271 23.0502 77.869 23.1371 77.8739 23.2297V25.0284C77.8688 25.1207 77.827 25.2073 77.7575 25.2693C77.6881 25.3314 77.5966 25.3639 77.5031 25.3597Z" fill="#F71963"></path><path d="M87.1474 35.8013C86.5284 35.8883 85.487 36.0283 83.577 36.0283C81.2953 36.0283 79.2795 35.4519 79.2795 32.2742V26.4742C79.2795 23.2965 81.3137 22.7375 83.5946 22.7375C85.5039 22.7375 86.5284 22.8775 87.1474 22.9645C87.3949 22.9993 87.5014 23.087 87.5014 23.3139V24.9401C87.5012 25.0327 87.4638 25.1215 87.3975 25.187C87.3312 25.2525 87.2412 25.2894 87.1474 25.2896H83.4184C82.5871 25.2896 82.2867 25.5687 82.2867 26.4771V28.0663H87.0064C87.1002 28.0665 87.1902 28.1034 87.2565 28.1689C87.3228 28.2344 87.3602 28.3231 87.3604 28.4158V30.0746C87.3602 30.1672 87.3228 30.2559 87.2565 30.3214C87.1902 30.3869 87.1002 30.4238 87.0064 30.424H82.2867V32.2749C82.2867 33.1826 82.5871 33.4625 83.4184 33.4625H87.1474C87.2412 33.4627 87.3312 33.4995 87.3975 33.565C87.4638 33.6305 87.5012 33.7193 87.5014 33.8119V35.4359C87.5014 35.6614 87.3949 35.7665 87.1474 35.8013Z" fill="#F71963"></path><path d="M100.491 35.8709H97.6795C97.4497 35.8709 97.3432 35.7984 97.2198 35.6091L94.7818 31.7877L92.5728 35.525C92.4487 35.7346 92.3253 35.8745 92.1322 35.8745H89.515C89.338 35.8745 89.2499 35.7694 89.2499 35.6476C89.2533 35.6048 89.2653 35.5632 89.2851 35.525L93.1162 29.2175L89.2455 23.2283C89.2258 23.1963 89.2138 23.1604 89.2102 23.1232C89.2165 23.059 89.2476 22.9997 89.2969 22.9575C89.3462 22.9153 89.4101 22.8933 89.4753 22.8963H92.3224C92.517 22.8963 92.6587 23.071 92.763 23.2283L95.0256 26.7554L97.2154 23.2283C97.3035 23.071 97.4629 22.8963 97.656 22.8963H100.273C100.338 22.8933 100.402 22.9153 100.452 22.9575C100.501 22.9997 100.532 23.059 100.538 23.1232C100.535 23.1604 100.523 23.1963 100.503 23.2283L96.6514 29.2545L100.668 35.525C100.7 35.5783 100.718 35.6382 100.721 35.6998C100.722 35.8013 100.633 35.8709 100.491 35.8709Z" fill="#F71963"></path><path d="M63.8595 22.9324C63.7964 22.9325 63.7352 22.9543 63.6865 22.9939C63.6377 23.0336 63.6044 23.0887 63.5922 23.1499L61.0249 32.5306C60.9896 32.7228 60.9368 32.7924 60.7774 32.7924C60.6181 32.7924 60.5652 32.7199 60.5299 32.5306L57.9597 23.1477C57.9475 23.0865 57.9142 23.0314 57.8654 22.9918C57.8167 22.9521 57.7555 22.9303 57.6924 22.9302H55.1655C55.1244 22.9302 55.0838 22.9394 55.0468 22.9571C55.0098 22.9747 54.9773 23.0004 54.9518 23.0322C54.9262 23.064 54.9083 23.101 54.8993 23.1406C54.8902 23.1802 54.8904 23.2213 54.8996 23.2608C54.8996 23.2608 58.0353 34.0191 58.0698 34.1249C58.4884 35.4067 59.504 36.0193 60.7965 36.0193C62.0273 36.0193 63.1017 35.3777 63.5217 34.1285C63.5716 33.9835 66.6376 23.2601 66.6376 23.2601C66.6467 23.2206 66.6468 23.1796 66.6377 23.1401C66.6286 23.1006 66.6106 23.0636 66.5851 23.032C66.5595 23.0003 66.5271 22.9747 66.4902 22.957C66.4532 22.9394 66.4128 22.9302 66.3717 22.9302L63.8595 22.9324Z" fill="#F71963"></path><path d="M48.2904 13.4951H20.8256C18.6959 13.4951 17.3322 15.7303 18.3287 17.5885L21.076 22.7244H16.0956C15.7802 22.7245 15.4701 22.805 15.1955 22.9581C14.9209 23.1112 14.6909 23.3318 14.528 23.5984C14.3651 23.865 14.2746 24.1686 14.2654 24.4799C14.2562 24.7911 14.3286 25.0994 14.4756 25.375L23.3121 41.8868C23.4679 42.1772 23.7009 42.4202 23.986 42.5897C24.2712 42.7592 24.5977 42.8488 24.9306 42.8488C25.2635 42.8488 25.59 42.7592 25.8752 42.5897C26.1603 42.4202 26.3933 42.1772 26.5491 41.8868L28.949 37.4266L31.9598 43.0541C33.0195 45.0333 35.8901 45.037 36.9535 43.0599L50.7197 17.4848C51.6927 15.6759 50.365 13.4951 48.2904 13.4951ZM35.9533 24.4223L30.0175 35.4525C29.9137 35.6456 29.7587 35.8072 29.5689 35.9198C29.3792 36.0325 29.162 36.0921 28.9405 36.0921C28.7191 36.0921 28.5019 36.0325 28.3122 35.9198C28.1224 35.8072 27.9674 35.6456 27.8636 35.4525L21.9851 24.4687C21.8868 24.2856 21.8382 24.0805 21.8437 23.8734C21.8493 23.6662 21.909 23.464 22.017 23.2863C22.125 23.1085 22.2776 22.9614 22.4601 22.859C22.6426 22.7566 22.8488 22.7025 23.0587 22.7019H34.9061C35.1107 22.7019 35.3119 22.7542 35.49 22.8537C35.6682 22.9532 35.8172 23.0965 35.9226 23.2697C36.028 23.4429 36.0862 23.64 36.0916 23.842C36.097 24.044 36.0493 24.2439 35.9533 24.4223Z" fill="#F71963"></path></svg> </div></footer>'
    }
    headernFooter() {
      $("body").prepend(this.headerHTML), $("body").append(this.footerHTML)
    }
    start() {
      $("body").addClass(this.classOn), this.headernFooter(), console.log("%c >>>>> YOU ARE CURRENTLY DEBUGING THE HEADER, IT'S A BETA! ISSUES CAN HAPPEN... Use `vcustom.debug.stop()` to stop! ", "background: #111; color: #bada55")
    }
    stop() {
      $("body").removeClass(this.classOn), $(".debug-elem").remove()
    }
  }
}, function (e, o, a) {
  const {
    _locale: n
  } = a(0), {
    debounce: r,
    formatCurrency: t
  } = a(5), s = a(6);
  e.exports = class {
    constructor({
      type: e = "vertical",
      accordionPayments: o = !0,
      deliveryDateFormat: a = !1,
      quantityPriceCart: n = !1,
      showNoteField: r = !1,
      customAddressForm: t = !1,
      hideEmailStep: s = !0
    } = {}) {
      this.type = e, this.orderForm = "", this.orderId = this.orderForm ? this.orderForm.orderFormId : "", this.lang = "", this.accordionPayments = o, this.deliveryDateFormat = a, this.quantityPriceCart = n, this.showNoteField = r, this.customAddressForm = t, this.hideEmailStep = s
    }
    general() {
      $(".custom-cart-template-wrap").length || $(".cart-template.mini-cart .cart-fixed > *").wrapAll('<div class="custom-cart-template-wrap">'), $(".table.cart-items tbody tr.product-item").each((function (e) {
        if ($(this).find(".v-custom-product-item-wrap").length > 0) return !1;
        $(this).find("> *").wrapAll('<div class="v-custom-product-item-wrap">')
      })), $("body").addClass("v-custom-loaded")
    }
    builder() {
      let e = this;
      "vertical" == this.type ? e.buildVertical() : "horizontal" == this.type ? e.buildHorizontal() : console.error("No `type` identified, check your code"), e.showNoteField && $("body").addClass("js-vcustom-showNoteField"), e.hideEmailStep && $("body").addClass("js-vcustom-hideEmailStep")
    }
    buildVertical() {
      $("body").addClass("body-cart-vertical"), $(".cart-template .cart-links-bottom:eq(0)").appendTo(".cart-template > .summary-template-holder"), $(".cart-template .cart-more-options:eq(0), .cart-template .extensions-checkout-buttons-container").appendTo(".cart-template-holder")
    }
    buildHorizontal() {}
    checkEmpty(e) {
      0 == e.length ? $("body").addClass("v-custom-cart-empty") : $("body").removeClass("v-custom-cart-empty")
    }
    addEditButtoninLogin() {
      $("#v-custom-edit-login-data").remove(), $(".client-pre-email h3.client-pre-email-h span").append(`\n      <a id="v-custom-edit-login-data" class="link-box-edit btn btn-small" style="" title="${!this.lang||this.lang.editLabel}">\n        <i class="icon-edit"></i>\n        <i class="icon-spinner icon-spin icon-3x"></i>\n      </a>\n    `)
    }
    addStepsHeader() {
      if ($(".checkout-steps").length > 0 || !this.lang) return !1;
      let e = `\n      <div class="checkout-steps">\n        <div class="checkout-steps-wrap">\n          <span class="checkout-steps_bar">\n            <span class="checkout-steps_bar_inner"></span>\n            <span class="checkout-steps_bar_inner-active"></span>\n          </span>\n          <div class="checkout-steps_items">\n            <span class="checkout-steps_item checkout-steps_item_cart js-checkout-steps-item" data-url="/checkout/#/cart">\n              <span class="text">${this.lang?this.lang.checkoutStepsLabelCart:"Cart"}</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_identification js-checkout-steps-item" data-url="/checkout/#/profile">\n              <span class="text">${this.lang?this.lang.checkoutStepsLabelIdentification:"Identification"}</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_shipping js-checkout-steps-item" data-url="/checkout/#/shipping">\n              <span class="text">${this.lang?this.lang.checkoutStepsLabelShipping:"Shipping"}</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_payment js-checkout-steps-item" data-url="/checkout/#/payment">\n              <span class="text">${this.lang?this.lang.checkoutStepsLabelPayment:"Payment"}</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_confirmation js-checkout-steps-item">\n              <span class="text">${this.lang?this.lang.checkoutStepsLabelConfirmation:"Confirmation"}</span>\n            </span>\n          </div>\n        </div>\n      </div>\n    `;
      $("header.main-header").length && $("header.main-header .container").append(e)
    }
    addAssemblies(e) {
      try {
        $.each(e.items, (function (e) {
          let o = this;
          if (o.assemblies.length > 0) {
            let a = '<div class="v-custom-assemblies">';
            $.each(o.assemblies, (function (e) {
              let o = this.inputValues;
              a += `<p>${this.id}</p>`, a += '<ul class="v-custom-assemblies__values">', Object.entries(o).forEach(([e, o]) => {
                a += `<li class="v-custom-assemblies__values__item assembly-${e.toLowerCase().replace(/ /g,"-")}">\n                                      <strong>${e}</strong>\n                                      <span>${o.trim()}</span>\n                                    </li>`
              }), a += "</ul>"
            })), a += "</div>", $(`.table.cart-items tbody tr.product-item:eq(${e}) .v-custom-assemblies`).remove(), $(`.table.cart-items tbody tr.product-item:eq(${e})`).addClass("v-custom-assemblies-in").find("td.product-name").append(a)
          }
        }))
      } catch (e) {}
    }
    bundleItems(e) {
      try {
        $.each(e.items, (function (e) {
          this.bundleItems.length > 0 ? $(`.table.cart-items tbody tr.product-item:eq(${e})`).addClass("v-custom-bundles-in").find("td.product-name") : $(`.table.cart-items tbody tr.product-item:eq(${e})`).removeClass("v-custom-bundles-in")
        })), $(".table.cart-items tbody tr.item-service").each((function (e) {
          if ($(this).find(".v-custom-trservice-wrap").length > 0) return !1;
          $(this).find("> *").wrapAll('<div class="v-custom-trservice-wrap">')
        }))
      } catch (e) {}
    }
    showCustomMsgCoupon(e) {
      let o = e.marketingData.coupon,
        a = e.items.reduce((function (e, a) {
          return e + (a.priceTags.length ? a.priceTags.filter(e => e.ratesAndBenefitsIdentifier ? e.ratesAndBenefitsIdentifier.matchedParameters["couponCode@Marketing"] == o : 0).length : 0)
        }), 0);
      if (!o || a > 0) return $("fieldset.coupon-fieldset").removeClass("js-vcustom-showCustomMsgCoupon"), $(".vcustom-showCustomMsgCoupon").remove(), !1;
      0 == $(".vcustom-showCustomMsgCoupon").length && $("fieldset.coupon-fieldset").addClass("js-vcustom-showCustomMsgCoupon").append(`<p class="vcustom-showCustomMsgCoupon">${this.lang.couponInactive}</div>`)
    }
    addLabels(e) {
      let o = e.marketingData.coupon,
        a = [];
      if (!o) return !1;
      try {
        $(".table.cart-items tbody tr.product-item, .mini-cart .cart-items li").removeClass("v-custom-addLabels-active js-vcustom-addLabels"), $(".v-custom-addLabels-active-flag").remove(), $.each(e.items, (function (e) {
          this.priceTags.length > 0 && this.priceTags.filter(e => !!e.ratesAndBenefitsIdentifier && e.ratesAndBenefitsIdentifier.matchedParameters["couponCode@Marketing"] == o).length > 0 && (a.push(this), $(`.table.cart-items tbody tr.product-item:eq(${e})`).addClass("v-custom-addLabels-active js-vcustom-addLabels").find(".product-name").append(`<span class="v-custom-addLabels-active-flag">${o}</span>`))
        }))
      } catch (e) {
        console.error(e)
      }
    }
    buildMiniCart(e) {
      if (0 == e.items.filter(e => null != e.parentItemIndex).length) return !1;
      "" != $(".mini-cart .cart-items").text().trim() && ($(".mini-cart .cart-items").html("" + $(".mini-cart .cart-items").html()), $.each(e.items, (function (e) {
        "available" == this.availability && $(`.mini-cart .cart-items li:eq(${e})`).find(".item-unavailable").remove()
      })))
    }
    setParentIndex(e) {
      $.each(e.items, (function (e) {
        null != this.parentItemIndex && $(`.table.cart-items tbody > tr.product-item:eq(${e})`).attr("data-parentItemIndex", this.parentItemIndex)
      }))
    }
    removeMCLoader() {
      $(".mini-cart .cart-items").addClass("v-loaded")
    }
    indexedInItems(e) {
      let o = this;
      try {
        if (0 == e.items.filter(e => null != e.parentItemIndex).length) return o.removeMCLoader(), !1;
        if (e.items) {
          let s = e.items.reduce((e, o) => (null != o.parentItemIndex && (e[o.parentItemIndex] = e[o.parentItemIndex] || [], e[o.parentItemIndex].push(o)), e), {});
          for (var a in s) {
            var n = s[a];
            if ($(`.table.cart-items tbody > tr.product-item:eq(${a})`).find(".v-custom-bundles").length <= 1 && ($(`.table.cart-items tbody > tr.product-item:eq(${a})`).append('<div class="v-custom-bundles"></div>').addClass("v-custom-indexedItems-in"), "" == $(`.table.cart-items tbody > tr.product-item:eq(${a})`).find(".v-custom-bundles").html()))
              for (var r in n) {
                if (!n.hasOwnProperty(r)) continue;
                let e = n[r];
                $(`.table.cart-items tbody > tr.product-item[data-sku='${e.id}'][data-parentitemindex='${e.parentItemIndex}']`).addClass("v-custom-indexed-item").clone().appendTo(`.table.cart-items tbody > tr.product-item:eq(${a}) > .v-custom-bundles`)
              }
            if ($(`.mini-cart .cart-items > li:eq(${a})`).find(".v-custom-bundles").remove(), $(`.mini-cart .cart-items > li:eq(${a})`).append('<div class="v-custom-bundles"></div>').addClass("v-custom-indexedItems-in"), "" == $(`.mini-cart .cart-items > li:eq(${a})`).find(" > .v-custom-bundles").html())
              for (var r in n) {
                if (!n.hasOwnProperty(r)) continue;
                let o = n[r];
                $(`.mini-cart .cart-items > li:eq(${a}) > .v-custom-bundles`).append(`\n                <div class="hproduct item v-custom-indexed-item" data-sku="${o.id}">\n                  <a href="${o.detailUrl}" class="url">\n                    <img height="45" width="45" class="photo" src="${o.imageUrl}" alt="${o.name}">\n                  </a>\n                  <span class="fn product-name" title="${o.name}" href="${o.detailUrl}">${o.name}</span>\n                  <span class="quantity badge">${o.quantity}</span>\t\t\t\t\n                  <div class="description">\n                    <strong class="price pull-right" data-bind="text: sellingPriceLabel">${e.storePreferencesData.currencySymbol} ${t(e.clientPreferencesData.local,e.storePreferencesData.currencyCode,o.sellingPrice).toFixed(2)}</strong>\n                  </div>\n                </div>\n              `), $(`.mini-cart .cart-items > li[data-sku='${o.id}']`).addClass("v-custom-indexed-item")
              }
          }
          o.removeMCLoader()
        }
      } catch (e) {
        o.removeMCLoader()
      }
    }
    addBusinessDays(e, o = i18n.options.lng) {
      let a = new Date;
      a = new Date(a.getTime());
      let n = a.getDay();
      a.setDate(a.getDate() + e + (6 === n ? 2 : +!n) + 2 * Math.floor((e - 1 + (n % 6 || 1)) / 5));
      let r = {
        weekday: "long",
        month: "short",
        day: "numeric"
      };
      return "pt" == o && (r = {
        weekday: "short",
        month: "short",
        day: "numeric"
      }), a.getDate() - (new Date).getDate() == 1 ? this.lang.tomorrowLabel || "Tomorrow" : (a = a.toLocaleDateString(o, r), a)
    }
    changeShippingTimeInfo() {
      let e = this;
      $("body").addClass("v-custom-changeShippingTimeInfo");
      let o = [".shp-summary-package-time > span", "p.vtex-omnishipping-1-x-sla.sla", ".vtex-omnishipping-1-x-leanShippingTextLabelSingle > span", "span.shipping-date", ".shp-option-text-time", ".pkpmodal-pickup-point-sla", ".shp-option-text-package", ".srp-delivery-current-many__sla", ".shipping-estimate-date:eq(0)", ".srp-shipping-current-single__sla"];
      try {
        $("\n        .vtex-omnishipping-1-x-summaryPackage.shp-summary-package:not(.v-changeShippingTimeInfo-active), \n        .vtex-omnishipping-1-x-leanShippingOption, \n        .vtex-omnishipping-1-x-packageItem:not(.v-changeShippingTimeInfo-active),\n        .orderform-template .cart-template.mini-cart .item,\n        .vtex-pickup-points-modal-3-x-pickupPointSlaAvailability,\n        .srp-delivery-current-many,\n        td.shipping-date,\n        .srp-shipping-current-single\n      ").each((function (a) {
          let n = $(this).find(o.map(e => e + ":not(.v-changeShippingTimeInfo-elem-active)").join(", ")).text();
          if ("" != n && n.match(/(day)|(dia)|(día)/gm)) {
            let a = parseInt(n.match(/\d+/));
            if (a) {
              let n = e.lang.deliveryDateText;
              $(this).find(o.join(", ")).text().toLowerCase().match(/(ready in up)|(pronto)|(a partir de)|(hasta)/gm) && (n = e.lang.PickupDateText), $(this).find(o.join(", ")).html(`${n} <strong>${e.addBusinessDays(a)}</strong>`).addClass("v-changeShippingTimeInfo-elem-active")
            }
          }
          $(this).addClass("v-changeShippingTimeInfo-active")
        }));
        let r = $(".srp-delivery-info .srp-packages:not(.v-changeShippingTimeInfo-elem-active)");
        if ($(".js-shippingPreviewPackges").remove(), r.length) {
          var a = r.text().split(":")[1].split(/,| and | e | y /),
            n = [];
          $.each(a, (function (o) {
            let r = a[o];
            if ("" != r && r.match(/(day)|(dia)|(día)/gm)) {
              let o = parseInt(r.match(/\d+/));
              if (o) {
                let a = e.lang.deliveryDateText;
                r.toLowerCase().match(/(ready in up)|(pronto)|(A partir de)|(hasta)/gm) && (a = e.lang.PickupDateText), n.push(`${a} <strong>${e.addBusinessDays(o)}</strong>`)
              }
            }
          })), r.hide().after(`<p class="black-50 mt3 mb0 js-shippingPreviewPackges">${r.text().split(":")[0]}: ${n.join("; ")}</p>`).addClass("v-changeShippingTimeInfo-active")
        }
      } catch (e) {}
    }
    changeShippingTimeInfoInit() {
      let e = this;
      e.lang && e.deliveryDateFormat && e.changeShippingTimeInfo()
    }
    /*enchancementTotalPrice(e) {
      if (this.quantityPriceCart) try {
        $.each(e.items, (function (o) {
          let a = $(`.table.cart-items tbody tr.product-item:eq(${o})`);
          if (1 == this.quantity || 0 == a.find("td.product-price").find(".best-price").length) return;
          let n = a.find(".total-selling-price").text(),
            r = `\n          <div class="v-custom-quantity-price vqc-ldelem">\n            <span class="v-custom-quantity-price__list">\n              ${this.listPrice>this.sellingPrice?`<span class="v-custom-quantity-price__list--list">${e.storePreferencesData.currencySymbol} ${(this.listPrice/100).toFixed(2)}</span>`:""}\n            </span>\n          </div>\n        `;
          a.find("td.product-price").find(".vqc-ldelem").remove(),console.log("Acaaa :",a.find("td.product-price").find(".best-price")), a.find("td.product-price").addClass("v-custom-quantity-price-active").prepend(r).append(`<div class="v-custom-quantity-price vqc-ldelem"><span class="v-custom-quantity-price__best">${n}</span></div>`), a.find("td.product-price").find("> .best-price").wrap('<div class="v-custom-quantity-price__list--selling"></div>'), a.find("td.product-price").find(".v-custom-quantity-price__list--selling").append(`<span class="vqc-ldelem"> ${this.lang?this.lang.eachLabel:"each"}</span>`)
        }))
      } catch (e) {}
    }*/
    condensedTaxes(e) {
      let o = e.totalizers.filter(e => "CustomTax" == e.id);
      if (o && o.length < 2) return !1;
      let a = `\n      <div class="vcustom-customTax-resume">\n       ${o.map(o=>`<p class="vcustom-customTax-resume__i"><span class="n">${o.name}</span><span class="v">${e.storePreferencesData.currencySymbol} ${(o.value/100).toFixed(2)}</span></p>`).join("")}\n      </div>\n    `,
        n = $("tr.CustomTax.CustomTax--total");
      n.length && (n.find(".vcustom-customTax-tot").remove(), n.find(".info").append(`<div class="vcustom-customTax-tot"><span>?</span> ${a}</div>`))
    }
    update(e) {
      let o = this;
      this.checkEmpty(e.items), this.addAssemblies(e), /*this.enchancementTotalPrice(e),*/ this.bundleItems(e), this.buildMiniCart(e), this.condensedTaxes(e), this.setParentIndex(e), this.indexedInItems(e), r((function () {
        e.marketingData && (o.addLabels(e), o.showCustomMsgCoupon(e))
      }), 250)()
    }
    updateStep() {
      let e = ["cart", "email", "profile", "shipping", "payment"];
      if ($("body").removeClass(e.map(e => "v-custom-step-" + e).join(" ")), window.location.hash) {
        let o = window.location.hash.split("/")[1];
        e.find(e => e == o), $("body").addClass("v-custom-step-" + o)
      }
    }
    updateLang(e) {
      if (this.lang = n[e.storePreferencesData.countryCode], !this.lang) return !1;
      const o = this.lang;
      if (o.editLabel && $(".link-box-edit").attr("title", o.editLabel), o.cartSubmitButton && $("#cart-to-orderform").text(o.cartSubmitButton), o.cartNoteLabel && $("p.note-label label").text(o.cartNoteLabel), o.identifiedUserMessage && $(".identified-user-modal-body p.identified-user-message").html(o.identifiedUserMessage), o.paypalPhone && $(".payment-paypal-help-number").text(o.paypalPhone), o.paypalImg ? $(".payment-paypal-title-short-logo").css("background-image", `url(${o.paypalImg})`) : "" == o.paypalImg && $(".payment-paypal-title-short-logo").hide(), o.googleAddressLabel) {
        let e = $(".vtex-omnishipping-1-x-geolocation");
        e.length && e.find(".ship-addressQuery > label").text(o.googleAddressLabel)
      }
      o.address1Placeholder && $(".vtex-omnishipping-1-x-address input#ship-street").attr("placeholder", o.address1Placeholder), o.address2Placeholder && $(".vtex-omnishipping-1-x-address input#ship-complement").attr("placeholder", o.address2Placeholder)
    }
    paymentBuilder(e) {
      let o = this;
      if (e && 0 == $(".payment-group-item-cards").length && e.paymentData) {
        let a = ["debitCardPaymentGroup", "creditCardPaymentGroup"],
          n = "";
        $.each(a, (function (r) {
          n = '<span class="payment-group-item-cards">', $.each(e.paymentData.paymentSystems.filter(e => e.groupName == a[r]), (function (e) {
            n += `<span class="card-flag ${this.name}">${this.name}</span>`
          })), n += "</span>", o.accordionPayments && $("#payment-group-" + a[r]).append(n)
        })), o.accordionPayments || $("#iframe-placeholder-creditCardPaymentGroup").prepend(n)
      }
      if (!this.accordionPayments || $(".payment-group-list-btn").find(".v-custom-payment-item-wrap").length > 0) return !1;
      $("body").addClass("v-custom-paymentBuilder-accordion"), $(".payment-group-item").each((function (e) {
        $(this).wrap(`<div class='v-custom-payment-item-wrap ${$(this).hasClass("active")?"active":""}'></div>`)
      })), $(".payment-group-item").each((function (e) {
        $("#payment-data .steps-view > div:eq(0)").appendTo($(this).closest(".v-custom-payment-item-wrap"))
      }))
    }
    customAddressFormLoader() {
      let e = this;
      if (!vtex.googleMapsApiKey) return console.log("You might need to add your Google Maps API Key in your admin"), !1;
      e.customAddressForm && (e.customAddressForm = new s({}))
    }
    customAddressFormInit(e) {
      this.customAddressForm && this.customAddressForm.init(e)
    }
    checkProfileFocus() {
      this.hideEmailStep && ~window.location.hash.indexOf("#/email") && "" == $("#client-email").val() && $("#client-email").focus()
    }
    bind() {
      let e = this;
      $("body").on("click", "#v-custom-edit-login-data", (function (o) {
        o.preventDefault(), $(this).addClass("active");
        var a = new XMLHttpRequest;
        a.addEventListener("readystatechange", (function () {
          this.readyState === this.DONE && (location.reload(), setTimeout((function () {
            $("#v-custom-edit-login-data").removeClass("active")
          }), 1e3))
        })), a.open("GET", "/checkout/changeToAnonymousUser/" + e.orderForm.orderFormId), a.setRequestHeader("content-type", "application/json"), a.setRequestHeader("accept", "application/json"), a.send(null)
      })), $("body").on("click", ".v-custom-payment-item-wrap", (function (e) {
        $(".v-custom-payment-item-wrap").removeClass("active"), $(this).addClass("active")
      })), $("body").on("click", ".vtex-pickup-points-modal-3-x-pickupDetailsHeaderButton, #map-canvas img, .vtex-omnishipping-1-x-pickupPointChange, .pkpmodal-pickup-point, .vtex-pickup-points-modal-3-x-modalDetailsBackLnk", (function (o) {
        setTimeout(() => {
          e.changeShippingTimeInfoInit()
        }, 100)
      })), $("body").on("click", ".js-checkout-steps-item .text", (function (e) {
        window.location = $(this).closest(".checkout-steps_item").attr("data-url")
      })), $("body").on("click", ".vtex-omnishipping-1-x-linkEdit.link-edit", (function (o) {
        setTimeout(() => {
          e.updateLang(e.orderForm)
        }, 50)
      })), $("body").on("click", "#btn-client-pre-email", (function (e) {
        setTimeout((function () {
          $("input#client-pre-email").hasClass("error") || $("input#client-email").focus()
        }), 1e3)
      }))
    }
    init() {
      let e = this;
      e.orderForm = !!vtexjs.checkout.orderForm && vtexjs.checkout.orderForm, e.general(), e.updateStep(), e.builder(), e.changeShippingTimeInfoInit(), e.orderForm && (e.updateLang(e.orderForm), e.update(e.orderForm), e.addStepsHeader(), e.paymentBuilder(e.orderForm)), e.addEditButtoninLogin()
    }
    start() {
      let e = this;
      try {
        $((function () {
          e.bind(), e.customAddressFormLoader()
        })), $(document).ajaxComplete((function () {
          e.init()
        })), $(window).on("hashchange", (function () {
          e.updateStep(), e.changeShippingTimeInfoInit(), e.checkProfileFocus(), e.orderForm && (e.buildMiniCart(e.orderForm), e.indexedInItems(e.orderForm), e.updateLang(e.orderForm), e.paymentBuilder(e.orderForm), e.customAddressFormInit(e.orderForm))
        })), $(window).on("orderFormUpdated.vtex", (function (o, a) {
          e.update(a)
        })), $(window).load((function () {
          e.builder(), e.checkProfileFocus(), e.customAddressFormInit(vtexjs.checkout.orderForm), e.changeShippingTimeInfoInit(), e.indexedInItems(vtexjs.checkout.orderForm), !window.google && e.customAddressForm && e.customAddressForm.loadScript(), e.customAddressForm && "undefined" != typeof store && store.dispatch({
            type: "DISABLE_CALCULATE_BUTTON",
            isCalculateBttnEnabled: !1
          })
        })), console.log("🎉 Yay! You are using the vtex.checkout.ui customization !!")
      } catch (o) {
        e.general()
      }
    }
  }
}, function (e, o) {
  e.exports.debounce = (e, o) => {
    let a;
    return function (...n) {
      clearTimeout(a), a = setTimeout(() => {
        clearTimeout(a), e(...n)
      }, o)
    }
  }, e.exports.formatCurrency = (e, o, a) => {
    let n = a / 100;
    return new Intl.NumberFormat(e, {
      style: "currency",
      currency: o
    }).format(n), n
  }
}, function (e, o, a) {
  const {
    _countries: n,
    _cities: r,
    _addressPlaceholder: t,
    _countriesrules: s
  } = a(7), {
    _locale: d
  } = a(0);
  e.exports = class {
    constructor({
      active: e = !1
    } = {}) {
      this.BodyFormClasses = ["v-custom-addressForm-on", "v-custom-googleForm-on"], this.active = e, this.googleMapsApiKey = vtex.googleMapsApiKey, this.orderForm = "", this.classOn = "v-custom-fnsCustomAddressForm", this.deliveryCountries = "", this.mainCountry = "", this.lang = "", this.locale = "", this.address = {
        country: "",
        postalCode: "",
        city: "",
        state: "",
        street: "",
        complement: "",
        addressQuery: "",
        addressId: ""
      }, this.validate = !0, this.gPlacesAutocomplete = ""
    }
    loadScript() {
      $("body").append(`<script src="https://maps.googleapis.com/maps/api/js?key=${this.googleMapsApiKey}&language=en-US&libraries=places"><\/script>`)
    }
    updateAddress(e = "", o = "", a = "", n = "", r = "", t = null, s = "", d = "", m = "", h = "") {
      this.address = {
        country: e,
        postalCode: o,
        addressId: m,
        city: a,
        state: n,
        geoCoordinates: [],
        street: r,
        number: t,
        complement: s,
        addressQuery: d
      }, "" == arguments[0] && this.setForm("")
    }
    setForm(e = "", o = "", a = "", n = "", r = "", t = "", s = "", d = "", m = "", h = "") {
      $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").val(this.addressrules.number ? o : a), $(".vcustom--vtex-omnishipping-1-x-address #ship-complement").val(d), $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val(n), $(".vcustom--vtex-omnishipping-1-x-address #ship-city").val(t), $(".vcustom--vtex-omnishipping-1-x-address #ship-state").val(s), $(".vcustom--vtex-omnishipping-1-x-address #ship-postalCode").val(r), $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").attr("data-street", "USA" == e ? a : o), $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").attr("data-number", n), $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").attr("data-neighborhood", m), $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").attr("data-geocoordinates", h)
    }
    updateGoogleForm(e = "us") {
      $("input#v-custom-ship-street").attr("placeholder", t[e.toUpperCase()] ? t[e.toUpperCase()] : ""), this.gPlacesAutocomplete.setComponentRestrictions({
        country: [e]
      })
    }
    returnAddressFRules(e, o, a) {
      return e.filter(e => e.types[0] == o).length ? e.filter(e => e.types[0] == o)[0][a] : ""
    }
    googleForm() {
      let e = this,
        o = document.getElementById("v-custom-ship-street");
      e.gPlacesAutocomplete = new google.maps.places.Autocomplete(o), e.gPlacesAutocomplete.addListener("place_changed", (function () {
        let o = e.gPlacesAutocomplete.getPlace(),
          a = n.find(e => e[0] == o.address_components.filter(e => "country" == e.types[0])[0].short_name)[1],
          r = o.address_components.find(e => "route" == e.types[0]).long_name,
          t = e.returnAddressFRules(o.address_components, e.addressrules.state, "short_name"),
          s = e.returnAddressFRules(o.address_components, "sublocality_level_1", "long_name"),
          d = e.addressrules.postalCode ? e.returnAddressFRules(o.address_components, "postal_code", "long_name") : "00000";
        e.addressrules.number && $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val(e.returnAddressFRules(o.address_components, "street_number", "long_name"));
        let m = e.addressrules.number ? $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val() : e.returnAddressFRules(o.address_components, "street_number", "long_name"),
          h = $(".vcustom--vtex-omnishipping-1-x-address #ship-complement").val(),
          C = [o.geometry.location.lat(), o.geometry.location.lng()],
          i = $("<div></div>");
        i.html(o.adr_address);
        let l = $(".street-address", i).text(),
          u = $(".locality", i).text() || o.address_components.filter(e => "administrative_area_level_2" == e.types[0])[0].long_name;
        e.setForm(a, r, l, m, d, u, t, h, s, C), e.validateAllFields(), e.updateAddress(a, d, u, t, r, m, h, o.formatted_address, e.address.addressId, C)
      })), $("body").on("keyup", "#v-custom-ship-street", (function (e) {
        $(this).attr("autocomplete", "none"), $(this).attr("data-number", ""), $(this).attr("data-street", $(this).context.value)
      })), $("body").on("focus", "#v-custom-ship-street", (function (e) {
        $(this).attr("autocomplete", "none")
      }))
    }
    triggerAddressValidation() {
      store.dispatch({
        type: "DISABLE_CALCULATE_BUTTON",
        isCalculateBttnEnabled: !1
      })
    }
    sendAddress(e, o, a, n, r, t, s, d, m, h, C) {
      let i = this;
      "USA" == e && (a = null), ~C.indexOf(",") ? (C = C.split(",")).forEach((function (e, o) {
        C[o] = parseFloat(e)
      })) : C = [], $("body").addClass("js-v-custom-is-loading"), fetch(`/api/checkout/pub/orderForm/${i.orderForm.orderFormId}/attachments/shippingData`, {
        credentials: "include",
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "cache-control": "no-cache",
          "content-type": "application/json; charset=UTF-8",
          pragma: "no-cache",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest"
        },
        referrerPolicy: "no-referrer-when-downgrade",
        body: JSON.stringify({
          selectedAddresses: [{
            addressType: "residential",
            receiverName: "",
            addressId: m,
            isDisposable: !0,
            postalCode: r,
            city: t,
            state: n,
            country: e,
            geoCoordinates: C,
            street: o,
            number: a,
            neighborhood: null,
            complement: s,
            reference: null,
            addressQuery: d
          }],
          clearAddressIfPostalCodeNotFound: !1
        }),
        method: "POST",
        mode: "cors"
      }).then(e => e.json()).then((function (h) {
        h.error ? ($("body").removeClass("js-v-custom-is-loading"), alert("Something went wrong: " + h.error.message)) : vtexjs.checkout.getOrderForm().done((function (h) {
          i.updateAddress(e, r, t, n, o, a, s, "", d || "", m || "", C || []), $("body").removeClass(i.BodyFormClasses.join(" ")), i.orderForm = vtexjs.checkout.orderForm, $("body").removeClass("js-v-custom-is-loading"), i.triggerAddressValidation()
        }))
      }))
    }
    getRegions(e) {
      return r.find(o => o.countryShortCode == e).regions.map(e => `<option value="${e.shortCode}">${e.name}</option>`)
    }
    getCountries() {
      let e = this;
      return e.deliveryCountries.map(o => {
        let a = vtex.i18n[e.lang] ? vtex.i18n[e.lang] : vtex.i18n[vtex.i18n.locale];
        if (a.countries[o]) return `<option value="${o}" ${o==e.mainCountry?"selected":""}>${a.countries[o]}</option>`
      })
    }
    updateFormFieldByCountry(e) {
      let o = $(".vcustom--vtex-omnishipping-1-x-address p.ship-number");
      e.number ? (o.show(), o.find("input").attr("required", "required")) : (o.hide(), o.find("input").removeAttr("required"))
    }
    form(e) {
      let o = this,
        a = e.shippingData,
        r = n.find(e => e[1] == o.mainCountry),
        t = `\n      <div class="vcustom--vtex-omnishipping-1-x-address step">\n        <div>\n        <form>\n            <p class="input v-custom-ship-street required text"><label for="v-custom-ship-street">${o.locale.address1Placeholder?o.locale.address1Placeholder:"Street address or P.O. Box"}</label><input required autocomplete="none" id="v-custom-ship-street" type="text" name="v-custom-street" class="input-xlarge" data-hj-whitelist="true" value="${a.address?a.address.street:""}" placeholder="Eg: 225 East 41st Street, New York"><span class="help error" style="">${o.locale.requiredField?o.locale.requiredField:"This field is required."}</span></p>\n            <div class="v-custom-ship-info">\n              <p class="input ship-number text ${o.addressrules.number?"":"hide"}"><label for="ship-complement">${o.locale.number?o.locale.number:"Number"}</label><input required autocomplete="on" id="ship-number" type="text" name="v-custom-number" maxlength="20" placeholder="${o.locale.number?o.locale.number:""}" class="input-xlarge" data-hj-whitelist="true" value="${a.address?null==a.address.number?"":a.address.number:""}"><span class="help error" style="">${o.locale.requiredField?o.locale.requiredField:"This field is required."}</span></p>\n              <p class="input ship-complement text"><label for="ship-complement">${o.locale.address2Placeholder?o.locale.address2Placeholder:"Apartment number, unit, floor, etc."}</label><input autocomplete="on" id="ship-complement" type="text" name="v-custom-complement" maxlength="750" placeholder="${o.locale.address2Placeholder?o.locale.address2Placeholder:""}" class="input-xlarge" data-hj-whitelist="true" value="${a.address?null==a.address.complement?"":a.address.complement:""}"></p>\n            </div>\n            <div class="vcustom--vtex-omnishipping-1-x-address__state">\n              <p class="input ship-country text ${o.deliveryCountries.length<=1?"hide":""} "><label for="ship-country">Country</label><select name="v-custom-country" id="ship-country" class="input-large">${o.getCountries().join("")}</select></p>\n              <p class="input ship-city required text"><label for="ship-city">${o.locale.city?o.locale.city:"City"}</label><input required autocomplete="on" id="ship-city" type="text" name="v-custom-city" maxlength="100" class="input-large" data-hj-whitelist="true" value="${a.address?a.address.city:""}"><span class="help error" style="">${o.locale.requiredField?o.locale.requiredField:"This field is required."}</span></p>\n              <p class="input ship-state required text"><label for="ship-state">${o.locale.state?o.locale.state:"State"}</label>\n                  <select name="v-custom-state" id="ship-state" class="input-large">\n                    <option value="" disabled selected>${o.locale.state?o.locale.state:"State"}</option>\n                    ${o.getRegions(r[0]).join("")}\n                  </select>\n              </p>\n              <p class="input ship-postalCode required text"><label for="ship-postalCode">${vtex.i18n[o.lang]?vtex.i18n[o.lang].cart.postalCode:"Zip Code"}</label><input required autocomplete="on" id="ship-postalCode" type="text" name="receiver" maxlength="20" class="input-xlarge" data-hj-whitelist="true" value="${a.address?a.address.postalCode:""}"><span class="help error" style="">${o.locale.requiredField?o.locale.requiredField:"This field is required."}</span></p>\n            </div>\n            <p class="vtex-omnishipping-1-x-submitShippingStepButton btn-submit-wrapper btn-go-to-shipping-wrapper"><button class="submit  btn-go-to-shippping-method btn btn-large btn-success" id="btn-go-to-shippping-method" type="submit">Continue to shipping</button></p>\n        </form>\n        </div>\n      </div>\n    `;
      a.address && $(".vcustom--vtex-omnishipping-1-x-address #ship-state").val(a.address.state), $(".orderform-template-holder #shipping-data").append(t), this.googleForm(), this.updateGoogleForm(r[1].toLowerCase());
      let s = $(".vcustom--vtex-omnishipping-1-x-address #ship-country"),
        d = s.val(),
        m = s.find("option");
      m.sort((function (e, o) {
        return $(e).text() > $(o).text() ? 1 : -1
      })), s.html("").append(m), s.val(d)
    }
    validateAllFields() {
      let e = this;
      e.validate = !0, $(".vcustom--vtex-omnishipping-1-x-address input:required").each((function (o) {
        "" == this.value ? ($(this).addClass("error"), e.validate = !1) : $(this).removeClass("error")
      }))
    }
    submitAddressForm(e) {
      if (this.validateAllFields(), !this.validate) return;
      let o = $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street"),
        a = $(".vcustom--vtex-omnishipping-1-x-address #ship-country").val(),
        n = o.attr("data-street") || o.val(),
        r = $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val() ? $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val() : o.attr("data-number") || null,
        t = o.attr("data-geocoordinates") || [],
        s = o.attr("data-neighborhood") || null,
        d = $(".vcustom--vtex-omnishipping-1-x-address #ship-complement").val(),
        m = $(".vcustom--vtex-omnishipping-1-x-address #ship-city").val(),
        h = $(".vcustom--vtex-omnishipping-1-x-address #ship-state").val(),
        C = $(".vcustom--vtex-omnishipping-1-x-address #ship-postalCode").val();
      this.sendAddress(a, n, r, h, C, m, d, this.address.addressQuery, this.address.addressId, s, t)
    }
    updateFormByCountry(e) {
      let o = n.find(o => o[1] == e);
      this.addressrules = this.getCountryRule(o[1]), this.updateFormFieldByCountry(this.addressrules), $("select[name='v-custom-state']").html("" + this.getRegions(o[0]).join("")), this.updateGoogleForm(e.toLowerCase())
    }
    bind() {
      let e = this;
      $("body").on("click", ".step.shipping-data #edit-address-button, .step.shipping-data .vtex-omnishipping-1-x-linkEdit", (function (o) {
        let a = $(".vtex-omnishipping-1-x-addressItemOption.vtex-omnishipping-1-x-active").index(),
          n = e.orderForm.shippingData;
        if (n = a < 0 ? n.selectedAddresses[0] : n.availableAddresses[a], n && n.street && !~n.street.indexOf("*")) try {
          (n.isDisposable || ~window.location.origin.indexOf("myvtex")) && setTimeout(() => {
            if (!$(".vtex-omnishipping-1-x-address").length) {
              $("body").addClass(e.BodyFormClasses.join(" ")), e.updateAddress(n.country, n.postalCode, n.city, n.state, n.number, n.street, n.complement, "", null), $(".vcustom--vtex-omnishipping-1-x-address #ship-country").val(n.country), e.updateFormByCountry(n.country), e.getCountryRule(n.country).number && $(".vcustom--vtex-omnishipping-1-x-address #ship-number").val(n.number), $(".vcustom--vtex-omnishipping-1-x-address #v-custom-ship-street").val(n.street).attr("data-street", ""), $(".vcustom--vtex-omnishipping-1-x-address #ship-state").val(n.state), $(".vcustom--vtex-omnishipping-1-x-address #ship-city").val(n.city)
            }
          }, 100)
        } catch (o) {
          $("body").removeClass(e.BodyFormClasses.join(" "))
        } else $("body").addClass(e.BodyFormClasses.join(" "))
      })), $("body").on("click", ".vtex-omnishipping-1-x-buttonCreateAddress, .vtex-omnishipping-1-x-disclaimer a#remove-unavailable-items", (function (o) {
        $("body").addClass(e.BodyFormClasses.join(" ")), e.address.addressId = "", e.updateAddress("")
      })), $("body").on("click", "#shipping-option-pickup-in-point", (function (o) {
        $("body").removeClass(e.BodyFormClasses.join(" "))
      })), $("body").on("click", ".vtex-omnishipping-1-x-backToAddressList", (function (o) {
        $("body").removeClass(e.BodyFormClasses.join(" ")), e.address.addressId = ""
      })), $("body").on("click", ".vtex-omnishipping-1-x-addressItemOption", (function (o) {
        e.address.addressId = e.orderForm.shippingData.availableAddresses[$(this).index()] ? e.orderForm.shippingData.availableAddresses[$(this).index()].addressId : ""
      })), $("body").on("change", "select[name='v-custom-country']", (function (o) {
        o.stopImmediatePropagation();
        try {
          e.updateFormByCountry(this.value), e.updateAddress("")
        } catch (o) {}
      })), $("body").on("click", "#btn-go-to-shippping-method", (function (o) {
        o.preventDefault(), o.stopImmediatePropagation(), e.submitAddressForm()
      })), $("body").on("keyup", ".vcustom--vtex-omnishipping-1-x-address input", (function (e) {
        "" != this.value && $(this).removeClass("error")
      }))
    }
    checkFirstLogin(e) {
      let o = this;
      e && e.shippingData && null == e.shippingData.address && $("body").addClass(o.BodyFormClasses[0])
    }
    getCountryRule(e) {
      return s[e] ? s[e] : s.WWD
    }
    events() {
      let e = this;
      $(window).on("orderFormUpdated.vtex", (function (o, a) {
        e.checkFirstLogin(a)
      }))
    }
    init(e) {
      let o = this;
      if (e && window.google && $(".vcustom--vtex-omnishipping-1-x-address").length < 1 && e.items.length) {
        if ($("body").addClass("" + this.classOn), o.orderForm = e, o.checkFirstLogin(e), o.bind(), o.events(), o.deliveryCountries = checkout.deliveryCountries(), o.mainCountry = checkout.countryCode(), o.lang = o.orderForm.clientPreferencesData.locale, o.locale = d[o.orderForm.storePreferencesData.countryCode], o.addressrules = o.getCountryRule(o.orderForm.storePreferencesData.countryCode), o.orderForm && o.orderForm.shippingData) {
          let e = o.orderForm.shippingData.address;
          e ? o.updateAddress(e.country, e.postalCode, e.city, e.state, e.street, e.number, e.complement, "", e.addressId) : o.updateAddress("")
        }
        o.form(e)
      }
    }
  }
}, function (e, o) {
  e.exports._countriesrules = {
    ITA: {
      state: "administrative_area_level_2",
      number: !0,
      postalCode: !0
    },
    SMR: {
      state: "administrative_area_level_1",
      number: !0,
      city: "locality",
      postalCode: !0
    },
    USA: {
      state: "administrative_area_level_1",
      number: !1,
      postalCode: !0
    },
    VAT: {
      state: "administrative_area_level_1",
      number: !0,
      postalCode: !0
    },
    BRA: {
      state: "administrative_area_level_1",
      number: !1,
      postalCode: !0
    },
    ARE: {
      state: "administrative_area_level_1",
      number: !0,
      postalCode: !1
    },
    WWD: {
      state: "administrative_area_level_1",
      number: !1,
      postalCode: !0
    }
  }, e.exports._countries = [
    ["AF", "AFG"],
    ["AX", "ALA"],
    ["AL", "ALB"],
    ["DZ", "DZA"],
    ["AS", "ASM"],
    ["AD", "AND"],
    ["AO", "AGO"],
    ["AI", "AIA"],
    ["AQ", "ATA"],
    ["AG", "ATG"],
    ["AR", "ARG"],
    ["AM", "ARM"],
    ["AW", "ABW"],
    ["AU", "AUS"],
    ["AT", "AUT"],
    ["AZ", "AZE"],
    ["BS", "BHS"],
    ["BH", "BHR"],
    ["BD", "BGD"],
    ["BB", "BRB"],
    ["BY", "BLR"],
    ["BE", "BEL"],
    ["BZ", "BLZ"],
    ["BJ", "BEN"],
    ["BM", "BMU"],
    ["BT", "BTN"],
    ["BO", "BOL"],
    ["BQ", "BES"],
    ["BA", "BIH"],
    ["BW", "BWA"],
    ["BV", "BVT"],
    ["BR", "BRA"],
    ["IO", "IOT"],
    ["BN", "BRN"],
    ["BG", "BGR"],
    ["BF", "BFA"],
    ["BI", "BDI"],
    ["KH", "KHM"],
    ["CM", "CMR"],
    ["CA", "CAN"],
    ["CV", "CPV"],
    ["KY", "CYM"],
    ["CF", "CAF"],
    ["TD", "TCD"],
    ["CL", "CHL"],
    ["CN", "CHN"],
    ["CX", "CXR"],
    ["CC", "CCK"],
    ["CO", "COL"],
    ["KM", "COM"],
    ["CG", "COG"],
    ["CD", "COD"],
    ["CK", "COK"],
    ["CR", "CRI"],
    ["CI", "CIV"],
    ["HR", "HRV"],
    ["CU", "CUB"],
    ["CW", "CUW"],
    ["CY", "CYP"],
    ["CZ", "CZE"],
    ["DK", "DNK"],
    ["DJ", "DJI"],
    ["DM", "DMA"],
    ["DO", "DOM"],
    ["EC", "ECU"],
    ["EG", "EGY"],
    ["SV", "SLV"],
    ["GQ", "GNQ"],
    ["ER", "ERI"],
    ["EE", "EST"],
    ["ET", "ETH"],
    ["FK", "FLK"],
    ["FO", "FRO"],
    ["FJ", "FJI"],
    ["FI", "FIN"],
    ["FR", "FRA"],
    ["GF", "GUF"],
    ["PF", "PYF"],
    ["TF", "ATF"],
    ["GA", "GAB"],
    ["GM", "GMB"],
    ["GE", "GEO"],
    ["DE", "DEU"],
    ["GH", "GHA"],
    ["GI", "GIB"],
    ["GR", "GRC"],
    ["GL", "GRL"],
    ["GD", "GRD"],
    ["GP", "GLP"],
    ["GU", "GUM"],
    ["GT", "GTM"],
    ["GG", "GGY"],
    ["GN", "GIN"],
    ["GW", "GNB"],
    ["GY", "GUY"],
    ["HT", "HTI"],
    ["HM", "HMD"],
    ["VA", "VAT"],
    ["HN", "HND"],
    ["HK", "HKG"],
    ["HU", "HUN"],
    ["IS", "ISL"],
    ["IN", "IND"],
    ["ID", "IDN"],
    ["IR", "IRN"],
    ["IQ", "IRQ"],
    ["IE", "IRL"],
    ["IM", "IMN"],
    ["IL", "ISR"],
    ["IT", "ITA"],
    ["JM", "JAM"],
    ["JP", "JPN"],
    ["JE", "JEY"],
    ["JO", "JOR"],
    ["KZ", "KAZ"],
    ["KE", "KEN"],
    ["KI", "KIR"],
    ["KP", "PRK"],
    ["KR", "KOR"],
    ["KW", "KWT"],
    ["KG", "KGZ"],
    ["LA", "LAO"],
    ["LV", "LVA"],
    ["LB", "LBN"],
    ["LS", "LSO"],
    ["LR", "LBR"],
    ["LY", "LBY"],
    ["LI", "LIE"],
    ["LT", "LTU"],
    ["LU", "LUX"],
    ["MO", "MAC"],
    ["MK", "MKD"],
    ["MG", "MDG"],
    ["MW", "MWI"],
    ["MY", "MYS"],
    ["MV", "MDV"],
    ["ML", "MLI"],
    ["MT", "MLT"],
    ["MH", "MHL"],
    ["MQ", "MTQ"],
    ["MR", "MRT"],
    ["MU", "MUS"],
    ["YT", "MYT"],
    ["MX", "MEX"],
    ["FM", "FSM"],
    ["MD", "MDA"],
    ["MC", "MCO"],
    ["MN", "MNG"],
    ["ME", "MNE"],
    ["MS", "MSR"],
    ["MA", "MAR"],
    ["MZ", "MOZ"],
    ["MM", "MMR"],
    ["NA", "NAM"],
    ["NR", "NRU"],
    ["NP", "NPL"],
    ["NL", "NLD"],
    ["NC", "NCL"],
    ["NZ", "NZL"],
    ["NI", "NIC"],
    ["NE", "NER"],
    ["NG", "NGA"],
    ["NU", "NIU"],
    ["NF", "NFK"],
    ["MP", "MNP"],
    ["NO", "NOR"],
    ["OM", "OMN"],
    ["PK", "PAK"],
    ["PW", "PLW"],
    ["PS", "PSE"],
    ["PA", "PAN"],
    ["PG", "PNG"],
    ["PY", "PRY"],
    ["PE", "PER"],
    ["PH", "PHL"],
    ["PN", "PCN"],
    ["PL", "POL"],
    ["PT", "PRT"],
    ["PR", "PRI"],
    ["QA", "QAT"],
    ["RE", "REU"],
    ["RO", "ROU"],
    ["RU", "RUS"],
    ["RW", "RWA"],
    ["BL", "BLM"],
    ["SH", "SHN"],
    ["KN", "KNA"],
    ["LC", "LCA"],
    ["MF", "MAF"],
    ["PM", "SPM"],
    ["VC", "VCT"],
    ["WS", "WSM"],
    ["SM", "SMR"],
    ["ST", "STP"],
    ["SA", "SAU"],
    ["SN", "SEN"],
    ["RS", "SRB"],
    ["SC", "SYC"],
    ["SL", "SLE"],
    ["SG", "SGP"],
    ["SX", "SXM"],
    ["SK", "SVK"],
    ["SI", "SVN"],
    ["SB", "SLB"],
    ["SO", "SOM"],
    ["ZA", "ZAF"],
    ["GS", "SGS"],
    ["SS", "SSD"],
    ["ES", "ESP"],
    ["LK", "LKA"],
    ["SD", "SDN"],
    ["SR", "SUR"],
    ["SJ", "SJM"],
    ["SZ", "SWZ"],
    ["SE", "SWE"],
    ["CH", "CHE"],
    ["SY", "SYR"],
    ["TW", "TWN"],
    ["TJ", "TJK"],
    ["TZ", "TZA"],
    ["TH", "THA"],
    ["TL", "TLS"],
    ["TG", "TGO"],
    ["TK", "TKL"],
    ["TO", "TON"],
    ["TT", "TTO"],
    ["TN", "TUN"],
    ["TR", "TUR"],
    ["TM", "TKM"],
    ["TC", "TCA"],
    ["TV", "TUV"],
    ["UG", "UGA"],
    ["UA", "UKR"],
    ["AE", "ARE"],
    ["GB", "GBR"],
    ["US", "USA"],
    ["UM", "UMI"],
    ["UY", "URY"],
    ["UZ", "UZB"],
    ["VU", "VUT"],
    ["VE", "VEN"],
    ["VN", "VNM"],
    ["VG", "VGB"],
    ["VI", "VIR"],
    ["WF", "WLF"],
    ["EH", "ESH"],
    ["YE", "YEM"],
    ["ZM", "ZMB"],
    ["ZW", "ZWE"],
    ["XK", "XKX"]
  ], e.exports._cities = [{
    countryName: "Afghanistan",
    countryShortCode: "AF",
    regions: [{
      name: "Badakhshan",
      shortCode: "BDS"
    }, {
      name: "Badghis",
      shortCode: "BDG"
    }, {
      name: "Baghlan",
      shortCode: "BGL"
    }, {
      name: "Balkh",
      shortCode: "BAL"
    }, {
      name: "Bamyan",
      shortCode: "BAM"
    }, {
      name: "Daykundi",
      shortCode: "DAY"
    }, {
      name: "Farah",
      shortCode: "FRA"
    }, {
      name: "Faryab",
      shortCode: "FYB"
    }, {
      name: "Ghazni",
      shortCode: "GHA"
    }, {
      name: "Ghor",
      shortCode: "GHO"
    }, {
      name: "Helmand",
      shortCode: "HEL"
    }, {
      name: "Herat",
      shortCode: "HER"
    }, {
      name: "Jowzjan",
      shortCode: "JOW"
    }, {
      name: "Kabul",
      shortCode: "KAB"
    }, {
      name: "Kandahar",
      shortCode: "KAN"
    }, {
      name: "Kapisa",
      shortCode: "KAP"
    }, {
      name: "Khost",
      shortCode: "KHO"
    }, {
      name: "Kunar",
      shortCode: "KNR"
    }, {
      name: "Kunduz",
      shortCode: "KDZ"
    }, {
      name: "Laghman",
      shortCode: "LAG"
    }, {
      name: "Logar",
      shortCode: "LOW"
    }, {
      name: "Maidan Wardak",
      shortCode: "WAR"
    }, {
      name: "Nangarhar",
      shortCode: "NAN"
    }, {
      name: "Nimruz",
      shortCode: "NIM"
    }, {
      name: "Nuristan",
      shortCode: "NUR"
    }, {
      name: "Paktia",
      shortCode: "PIA"
    }, {
      name: "Paktika",
      shortCode: "PKA"
    }, {
      name: "Panjshir",
      shortCode: "PAN"
    }, {
      name: "Parwan",
      shortCode: "PAR"
    }, {
      name: "Samangan",
      shortCode: "SAM"
    }, {
      name: "Sar-e Pol",
      shortCode: "SAR"
    }, {
      name: "Takhar",
      shortCode: "TAK"
    }, {
      name: "Urozgan",
      shortCode: "ORU"
    }, {
      name: "Zabul",
      shortCode: "ZAB"
    }]
  }, {
    countryName: "Åland Islands",
    countryShortCode: "AX",
    regions: [{
      name: "Brändö",
      shortCode: "BR"
    }, {
      name: "Eckerö",
      shortCode: "EC"
    }, {
      name: "Finström",
      shortCode: "FN"
    }, {
      name: "Föglö",
      shortCode: "FG"
    }, {
      name: "Geta",
      shortCode: "GT"
    }, {
      name: "Hammarland",
      shortCode: "HM"
    }, {
      name: "Jomala",
      shortCode: "JM"
    }, {
      name: "Kumlinge",
      shortCode: "KM"
    }, {
      name: "Kökar",
      shortCode: "KK"
    }, {
      name: "Lemland",
      shortCode: "LE"
    }, {
      name: "Lumparland",
      shortCode: "LU"
    }, {
      name: "Mariehamn",
      shortCode: "MH"
    }, {
      name: "Saltvik",
      shortCode: "SV"
    }, {
      name: "Sottunga",
      shortCode: "ST"
    }, {
      name: "Sund",
      shortCode: "SD"
    }, {
      name: "Vårdö",
      shortCode: "VR"
    }]
  }, {
    countryName: "Albania",
    countryShortCode: "AL",
    regions: [{
      name: "Berat",
      shortCode: "01"
    }, {
      name: "Dibër",
      shortCode: "09"
    }, {
      name: "Durrës",
      shortCode: "02"
    }, {
      name: "Elbasan",
      shortCode: "03"
    }, {
      name: "Fier",
      shortCode: "04"
    }, {
      name: "Gjirokastër",
      shortCode: "05"
    }, {
      name: "Korçë",
      shortCode: "06"
    }, {
      name: "Kukës",
      shortCode: "07"
    }, {
      name: "Lezhë",
      shortCode: "08"
    }, {
      name: "Shkodër",
      shortCode: "10"
    }, {
      name: "Tirana",
      shortCode: "11"
    }, {
      name: "Vlorë",
      shortCode: "12"
    }]
  }, {
    countryName: "Algeria",
    countryShortCode: "DZ",
    regions: [{
      name: "Adrar",
      shortCode: "01"
    }, {
      name: "Aïn Defla",
      shortCode: "44"
    }, {
      name: "Aïn Témouchent",
      shortCode: "46"
    }, {
      name: "Algiers",
      shortCode: "16"
    }, {
      name: "Annaba",
      shortCode: "23"
    }, {
      name: "Batna",
      shortCode: "05"
    }, {
      name: "Béchar",
      shortCode: "08"
    }, {
      name: "Béjaïa",
      shortCode: "06"
    }, {
      name: "Biskra",
      shortCode: "07"
    }, {
      name: "Blida",
      shortCode: "09"
    }, {
      name: "Bordj Bou Arréridj",
      shortCode: "34"
    }, {
      name: "Bouïra",
      shortCode: "10"
    }, {
      name: "Boumerdès",
      shortCode: "35"
    }, {
      name: "Chlef",
      shortCode: "02"
    }, {
      name: "Constantine",
      shortCode: "25"
    }, {
      name: "Djelfa",
      shortCode: "17"
    }, {
      name: "El Bayadh",
      shortCode: "32"
    }, {
      name: "El Oued",
      shortCode: "39"
    }, {
      name: "El Tarf",
      shortCode: "36"
    }, {
      name: "Ghardaïa",
      shortCode: "47"
    }, {
      name: "Guelma",
      shortCode: "24"
    }, {
      name: "Illizi",
      shortCode: "33"
    }, {
      name: "Jijel",
      shortCode: "18"
    }, {
      name: "Khenchela",
      shortCode: "40"
    }, {
      name: "Laghouat",
      shortCode: "03"
    }, {
      name: "Mascara",
      shortCode: "29"
    }, {
      name: "Médéa",
      shortCode: "26"
    }, {
      name: "Mila",
      shortCode: "43"
    }, {
      name: "Mostaganem",
      shortCode: "27"
    }, {
      name: "Msila",
      shortCode: "28"
    }, {
      name: "Naâma",
      shortCode: "45"
    }, {
      name: "Oran",
      shortCode: "31"
    }, {
      name: "Ouargla",
      shortCode: "30"
    }, {
      name: "Oum el Bouaghi",
      shortCode: "04"
    }, {
      name: "Relizane",
      shortCode: "48"
    }, {
      name: "Saïda",
      shortCode: "20"
    }, {
      name: "Sétif",
      shortCode: "19"
    }, {
      name: "Sidi Bel Abbès",
      shortCode: "22"
    }, {
      name: "Skikda",
      shortCode: "21"
    }, {
      name: "Souk Ahras",
      shortCode: "41"
    }, {
      name: "Tamanghasset",
      shortCode: "11"
    }, {
      name: "Tébessa",
      shortCode: "12"
    }, {
      name: "Tiaret",
      shortCode: "14"
    }, {
      name: "Tindouf",
      shortCode: "37"
    }, {
      name: "Tipaza",
      shortCode: "42"
    }, {
      name: "Tissemsilt",
      shortCode: "38"
    }, {
      name: "Tizi Ouzou",
      shortCode: "15"
    }, {
      name: "Tlemcen",
      shortCode: "13"
    }]
  }, {
    countryName: "American Samoa",
    countryShortCode: "AS",
    regions: [{
      name: "Tutuila",
      shortCode: "01"
    }, {
      name: "Aunu'u",
      shortCode: "02"
    }, {
      name: "Ta'ū",
      shortCode: "03"
    }, {
      name: "Ofu‑Olosega",
      shortCode: "04"
    }, {
      name: "Rose Atoll",
      shortCode: "21"
    }, {
      name: "Swains Island",
      shortCode: "22"
    }]
  }, {
    countryName: "Andorra",
    countryShortCode: "AD",
    regions: [{
      name: "Andorra la Vella",
      shortCode: "07"
    }, {
      name: "Canillo",
      shortCode: "02"
    }, {
      name: "Encamp",
      shortCode: "03"
    }, {
      name: "Escaldes-Engordany",
      shortCode: "08"
    }, {
      name: "La Massana",
      shortCode: "04"
    }, {
      name: "Ordino",
      shortCode: "05"
    }, {
      name: "Sant Julià de Lòria",
      shortCode: "06"
    }]
  }, {
    countryName: "Angola",
    countryShortCode: "AO",
    regions: [{
      name: "Bengo",
      shortCode: "BGO"
    }, {
      name: "Benguela",
      shortCode: "BGU"
    }, {
      name: "Bié",
      shortCode: "BIE"
    }, {
      name: "Cabinda",
      shortCode: "CAB"
    }, {
      name: "Cuando Cubango",
      shortCode: "CCU"
    }, {
      name: "Cuanza Norte",
      shortCode: "CNO"
    }, {
      name: "Cuanza Sul",
      shortCode: "CUS"
    }, {
      name: "Cunene",
      shortCode: "CNN"
    }, {
      name: "Huambo",
      shortCode: "HUA"
    }, {
      name: "Huíla",
      shortCode: "HUI"
    }, {
      name: "Luanda",
      shortCode: "LUA"
    }, {
      name: "Lunda Norte",
      shortCode: "LNO"
    }, {
      name: "Lunda Sul",
      shortCode: "LSU"
    }, {
      name: "Malanje",
      shortCode: "MAL"
    }, {
      name: "Moxico",
      shortCode: "MOX"
    }, {
      name: "Namibe",
      shortCode: "NAM"
    }, {
      name: "Uíge",
      shortCode: "UIG"
    }, {
      name: "Zaire",
      shortCode: "ZAI"
    }]
  }, {
    countryName: "Anguilla",
    countryShortCode: "AI",
    regions: [{
      name: "Anguilla",
      shortCode: "01"
    }, {
      name: "Anguillita Island",
      shortCode: "02"
    }, {
      name: "Blowing Rock",
      shortCode: "03"
    }, {
      name: "Cove Cay",
      shortCode: "04"
    }, {
      name: "Crocus Cay",
      shortCode: "05"
    }, {
      name: "Deadman's Cay",
      shortCode: "06"
    }, {
      name: "Dog Island",
      shortCode: "07"
    }, {
      name: "East Cay",
      shortCode: "08"
    }, {
      name: "Little Island",
      shortCode: "09"
    }, {
      name: "Little Scrub Island",
      shortCode: "10"
    }, {
      name: "Mid Cay",
      shortCode: "11"
    }, {
      name: "North Cay",
      shortCode: "12"
    }, {
      name: "Prickly Pear Cays",
      shortCode: "13"
    }, {
      name: "Rabbit Island",
      shortCode: "14"
    }, {
      name: "Sandy Island/Sand Island",
      shortCode: "15"
    }, {
      name: "Scilly Cay",
      shortCode: "16"
    }, {
      name: "Scrub Island",
      shortCode: "17"
    }, {
      name: "Seal Island",
      shortCode: "18"
    }, {
      name: "Sombrero/Hat Island",
      shortCode: "19"
    }, {
      name: "South Cay",
      shortCode: "20"
    }, {
      name: "South Wager Island",
      shortCode: "21"
    }, {
      name: "West Cay",
      shortCode: "22"
    }]
  }, {
    countryName: "Antarctica",
    countryShortCode: "AQ",
    regions: [{
      name: "Antarctica",
      shortCode: "AQ"
    }]
  }, {
    countryName: "Antigua and Barbuda",
    countryShortCode: "AG",
    regions: [{
      name: "Antigua Island",
      shortCode: "01"
    }, {
      name: "Barbuda Island",
      shortCode: "02"
    }, {
      name: "Bird Island",
      shortCode: "04"
    }, {
      name: "Bishop Island",
      shortCode: "05"
    }, {
      name: "Blake Island",
      shortCode: "06"
    }, {
      name: "Crump Island",
      shortCode: "09"
    }, {
      name: "Dulcina Island",
      shortCode: "10"
    }, {
      name: "Exchange Island",
      shortCode: "11"
    }, {
      name: "Five Islands",
      shortCode: "12"
    }, {
      name: "Great Bird Island",
      shortCode: "13"
    }, {
      name: "Green Island",
      shortCode: "14"
    }, {
      name: "Guiana Island",
      shortCode: "15"
    }, {
      name: "Hawes Island",
      shortCode: "17"
    }, {
      name: "Hells Gate Island",
      shortCode: "16"
    }, {
      name: "Henry Island",
      shortCode: "18"
    }, {
      name: "Johnson Island",
      shortCode: "19"
    }, {
      name: "Kid Island",
      shortCode: "20"
    }, {
      name: "Lobster Island",
      shortCode: "22"
    }, {
      name: "Maiden Island",
      shortCode: "24"
    }, {
      name: "Moor Island",
      shortCode: "25"
    }, {
      name: "Nanny Island",
      shortCode: "26"
    }, {
      name: "Pelican Island",
      shortCode: "27"
    }, {
      name: "Prickly Pear Island",
      shortCode: "28"
    }, {
      name: "Rabbit Island",
      shortCode: "29"
    }, {
      name: "Red Head Island",
      shortCode: "31"
    }, {
      name: "Redonda Island",
      shortCode: "03"
    }, {
      name: "Sandy Island",
      shortCode: "32"
    }, {
      name: "Smith Island",
      shortCode: "33"
    }, {
      name: "The Sisters",
      shortCode: "34"
    }, {
      name: "Vernon Island",
      shortCode: "35"
    }, {
      name: "Wicked Will Island",
      shortCode: "36"
    }, {
      name: "York Island",
      shortCode: "37"
    }]
  }, {
    countryName: "Argentina",
    countryShortCode: "AR",
    regions: [{
      name: "Buenos Aires",
      shortCode: "B"
    }, {
      name: "Capital Federal",
      shortCode: "C"
    }, {
      name: "Catamarca",
      shortCode: "K"
    }, {
      name: "Chaco",
      shortCode: "H"
    }, {
      name: "Chubut",
      shortCode: "U"
    }, {
      name: "Córdoba",
      shortCode: "X"
    }, {
      name: "Corrientes",
      shortCode: "W"
    }, {
      name: "Entre Ríos",
      shortCode: "E"
    }, {
      name: "Formosa",
      shortCode: "P"
    }, {
      name: "Jujuy",
      shortCode: "Y"
    }, {
      name: "La Pampa",
      shortCode: "L"
    }, {
      name: "La Rioja",
      shortCode: "F"
    }, {
      name: "Mendoza",
      shortCode: "M"
    }, {
      name: "Misiones",
      shortCode: "N"
    }, {
      name: "Neuquén",
      shortCode: "Q"
    }, {
      name: "Río Negro",
      shortCode: "R"
    }, {
      name: "Salta",
      shortCode: "A"
    }, {
      name: "San Juan",
      shortCode: "J"
    }, {
      name: "San Luis",
      shortCode: "D"
    }, {
      name: "Santa Cruz",
      shortCode: "Z"
    }, {
      name: "Santa Fe",
      shortCode: "S"
    }, {
      name: "Santiago del Estero",
      shortCode: "G"
    }, {
      name: "Tierra del Fuego",
      shortCode: "V"
    }, {
      name: "Tucumán",
      shortCode: "T"
    }]
  }, {
    countryName: "Armenia",
    countryShortCode: "AM",
    regions: [{
      name: "Aragatsotn",
      shortCode: "AG"
    }, {
      name: "Ararat",
      shortCode: "AR"
    }, {
      name: "Armavir",
      shortCode: "AV"
    }, {
      name: "Gegharkunik",
      shortCode: "GR"
    }, {
      name: "Kotayk",
      shortCode: "KT"
    }, {
      name: "Lori",
      shortCode: "LO"
    }, {
      name: "Shirak",
      shortCode: "SH"
    }, {
      name: "Syunik",
      shortCode: "SU"
    }, {
      name: "Tavush",
      shortCode: "TV"
    }, {
      name: "Vayots Dzor",
      shortCode: "VD"
    }, {
      name: "Yerevan",
      shortCode: "ER"
    }]
  }, {
    countryName: "Aruba",
    countryShortCode: "AW",
    regions: [{
      name: "Aruba",
      shortCode: "AW"
    }]
  }, {
    countryName: "Australia",
    countryShortCode: "AU",
    regions: [{
      name: "Australian Capital Territory",
      shortCode: "ACT"
    }, {
      name: "New South Wales",
      shortCode: "NSW"
    }, {
      name: "Northern Territory",
      shortCode: "NT"
    }, {
      name: "Queensland",
      shortCode: "QLD"
    }, {
      name: "South Australia",
      shortCode: "SA"
    }, {
      name: "Tasmania",
      shortCode: "TAS"
    }, {
      name: "Victoria",
      shortCode: "VIC"
    }, {
      name: "Western Australia",
      shortCode: "WA"
    }]
  }, {
    countryName: "Austria",
    countryShortCode: "AT",
    regions: [{
      name: "Burgenland",
      shortCode: "1"
    }, {
      name: "Kärnten",
      shortCode: "2"
    }, {
      name: "Niederösterreich",
      shortCode: "3"
    }, {
      name: "Oberösterreich",
      shortCode: "4"
    }, {
      name: "Salzburg",
      shortCode: "5"
    }, {
      name: "Steiermark",
      shortCode: "6"
    }, {
      name: "Tirol",
      shortCode: "7"
    }, {
      name: "Vorarlberg",
      shortCode: "8"
    }, {
      name: "Wien",
      shortCode: "9"
    }]
  }, {
    countryName: "Azerbaijan",
    countryShortCode: "AZ",
    regions: [{
      name: "Abşeron",
      shortCode: "ABS"
    }, {
      name: "Ağcabədi",
      shortCode: "AGC"
    }, {
      name: "Ağdam",
      shortCode: "AGM"
    }, {
      name: "Ağdaş",
      shortCode: "AGS"
    }, {
      name: "Ağstafa",
      shortCode: "AGA"
    }, {
      name: "Ağsu",
      shortCode: "AGU"
    }, {
      name: "Astara",
      shortCode: "AST"
    }, {
      name: "Bakı",
      shortCode: "BAK"
    }, {
      name: "Babək",
      shortCode: "BAB"
    }, {
      name: "Balakən",
      shortCode: "BAL"
    }, {
      name: "Bərdə",
      shortCode: "BAR"
    }, {
      name: "Beyləqan",
      shortCode: "BEY"
    }, {
      name: "Biləsuvar",
      shortCode: "BIL"
    }, {
      name: "Cəbrayıl",
      shortCode: "CAB"
    }, {
      name: "Cəlilabad",
      shortCode: "CAL"
    }, {
      name: "Culfa",
      shortCode: "CUL"
    }, {
      name: "Daşkəsən",
      shortCode: "DAS"
    }, {
      name: "Füzuli",
      shortCode: "FUZ"
    }, {
      name: "Gədəbəy",
      shortCode: "GAD"
    }, {
      name: "Goranboy",
      shortCode: "GOR"
    }, {
      name: "Göyçay",
      shortCode: "GOY"
    }, {
      name: "Göygöl",
      shortCode: "GYG"
    }, {
      name: "Hacıqabul",
      shortCode: "HAC"
    }, {
      name: "İmişli",
      shortCode: "IMI"
    }, {
      name: "İsmayıllı",
      shortCode: "ISM"
    }, {
      name: "Kəlbəcər",
      shortCode: "KAL"
    }, {
      name: "Kǝngǝrli",
      shortCode: "KAN"
    }, {
      name: "Kürdəmir",
      shortCode: "KUR"
    }, {
      name: "Laçın",
      shortCode: "LAC"
    }, {
      name: "Lənkəran",
      shortCode: "LAN"
    }, {
      name: "Lerik",
      shortCode: "LER"
    }, {
      name: "Masallı",
      shortCode: "MAS"
    }, {
      name: "Neftçala",
      shortCode: "NEF"
    }, {
      name: "Oğuz",
      shortCode: "OGU"
    }, {
      name: "Ordubad",
      shortCode: "ORD"
    }, {
      name: "Qəbələ",
      shortCode: "QAB"
    }, {
      name: "Qax",
      shortCode: "QAX"
    }, {
      name: "Qazax",
      shortCode: "QAZ"
    }, {
      name: "Qobustan",
      shortCode: "QOB"
    }, {
      name: "Quba",
      shortCode: "QBA"
    }, {
      name: "Qubadli",
      shortCode: "QBI"
    }, {
      name: "Qusar",
      shortCode: "QUS"
    }, {
      name: "Saatlı",
      shortCode: "SAT"
    }, {
      name: "Sabirabad",
      shortCode: "SAB"
    }, {
      name: "Şabran",
      shortCode: "SBN"
    }, {
      name: "Sədərək",
      shortCode: "SAD"
    }, {
      name: "Şahbuz",
      shortCode: "SAH"
    }, {
      name: "Şəki",
      shortCode: "SAK"
    }, {
      name: "Salyan",
      shortCode: "SAL"
    }, {
      name: "Şamaxı",
      shortCode: "SMI"
    }, {
      name: "Şəmkir",
      shortCode: "SKR"
    }, {
      name: "Samux",
      shortCode: "SMX"
    }, {
      name: "Şərur",
      shortCode: "SAR"
    }, {
      name: "Siyəzən",
      shortCode: "SIY"
    }, {
      name: "Şuşa",
      shortCode: "SUS"
    }, {
      name: "Tərtər",
      shortCode: "TAR"
    }, {
      name: "Tovuz",
      shortCode: "TOV"
    }, {
      name: "Ucar",
      shortCode: "UCA"
    }, {
      name: "Xaçmaz",
      shortCode: "XAC"
    }, {
      name: "Xızı",
      shortCode: "XIZ"
    }, {
      name: "Xocalı",
      shortCode: "XCI"
    }, {
      name: "Xocavənd",
      shortCode: "XVD"
    }, {
      name: "Yardımlı",
      shortCode: "YAR"
    }, {
      name: "Yevlax",
      shortCode: "YEV"
    }, {
      name: "Zəngilan",
      shortCode: "ZAN"
    }, {
      name: "Zaqatala",
      shortCode: "ZAQ"
    }, {
      name: "Zərdab",
      shortCode: "ZAR"
    }]
  }, {
    countryName: "Bahamas",
    countryShortCode: "BS",
    regions: [{
      name: "Acklins Island",
      shortCode: "01"
    }, {
      name: "Berry Islands",
      shortCode: "22"
    }, {
      name: "Bimini",
      shortCode: "02"
    }, {
      name: "Black Point",
      shortCode: "23"
    }, {
      name: "Cat Island",
      shortCode: "03"
    }, {
      name: "Central Abaco",
      shortCode: "24"
    }, {
      name: "Crooked Island and Long Cay",
      shortCode: "28"
    }, {
      name: "East Grand Bahama",
      shortCode: "29"
    }, {
      name: "Exuma",
      shortCode: "04"
    }, {
      name: "Freeport",
      shortCode: "05"
    }, {
      name: "Fresh Creek",
      shortCode: "06"
    }, {
      name: "Governor's Harbour",
      shortCode: "07"
    }, {
      name: "Green Turtle Cay",
      shortCode: "08"
    }, {
      name: "Harbour Island",
      shortCode: "09"
    }, {
      name: "High Rock",
      shortCode: "10"
    }, {
      name: "Inagua",
      shortCode: "11"
    }, {
      name: "Kemps Bay",
      shortCode: "12"
    }, {
      name: "Long Island",
      shortCode: "13"
    }, {
      name: "Marsh Harbour",
      shortCode: "14"
    }, {
      name: "Mayaguana",
      shortCode: "15"
    }, {
      name: "Moore’s Island",
      shortCode: "40"
    }, {
      name: "New Providence",
      shortCode: "16"
    }, {
      name: "Nichollstown and Berry Islands",
      shortCode: "17"
    }, {
      name: "North Abaco",
      shortCode: "42"
    }, {
      name: "North Andros",
      shortCode: "41"
    }, {
      name: "North Eleuthera",
      shortCode: "33"
    }, {
      name: "Ragged Island",
      shortCode: "18"
    }, {
      name: "Rock Sound",
      shortCode: "19"
    }, {
      name: "San Salvador and Rum Cay",
      shortCode: "20"
    }, {
      name: "Sandy Point",
      shortCode: "21"
    }, {
      name: "South Abaco",
      shortCode: "35"
    }, {
      name: "South Andros",
      shortCode: "36"
    }, {
      name: "South Eleuthera",
      shortCode: "37"
    }, {
      name: "West Grand Bahama",
      shortCode: "39"
    }]
  }, {
    countryName: "Bahrain",
    countryShortCode: "BH",
    regions: [{
      name: "Al Janūbīyah",
      shortCode: "14"
    }, {
      name: "Al Manāmah",
      shortCode: "13"
    }, {
      name: "Al Muḩarraq",
      shortCode: "15"
    }, {
      name: "Al Wusţá",
      shortCode: "16"
    }, {
      name: "Ash Shamālīyah",
      shortCode: "17"
    }]
  }, {
    countryName: "Bangladesh",
    countryShortCode: "BD",
    regions: [{
      name: "Barisal",
      shortCode: "A"
    }, {
      name: "Chittagong",
      shortCode: "B"
    }, {
      name: "Dhaka",
      shortCode: "C"
    }, {
      name: "Khulna",
      shortCode: "D"
    }, {
      name: "Mymensingh",
      shortCode: "M"
    }, {
      name: "Rajshahi",
      shortCode: "E"
    }, {
      name: "Rangpur",
      shortCode: "F"
    }, {
      name: "Sylhet",
      shortCode: "G"
    }]
  }, {
    countryName: "Barbados",
    countryShortCode: "BB",
    regions: [{
      name: "Christ Church",
      shortCode: "01"
    }, {
      name: "Saint Andrew",
      shortCode: "02"
    }, {
      name: "Saint George",
      shortCode: "03"
    }, {
      name: "Saint James",
      shortCode: "04"
    }, {
      name: "Saint John",
      shortCode: "05"
    }, {
      name: "Saint Joseph",
      shortCode: "06"
    }, {
      name: "Saint Lucy",
      shortCode: "07"
    }, {
      name: "Saint Michael",
      shortCode: "08"
    }, {
      name: "Saint Peter",
      shortCode: "09"
    }, {
      name: "Saint Philip",
      shortCode: "10"
    }, {
      name: "Saint Thomas",
      shortCode: "11"
    }]
  }, {
    countryName: "Belarus",
    countryShortCode: "BY",
    regions: [{
      name: "Brest voblast",
      shortCode: "BR"
    }, {
      name: "Gorod Minsk",
      shortCode: "HM"
    }, {
      name: "Homiel voblast",
      shortCode: "HO"
    }, {
      name: "Hrodna voblast",
      shortCode: "HR"
    }, {
      name: "Mahilyow voblast",
      shortCode: "MA"
    }, {
      name: "Minsk voblast",
      shortCode: "MI"
    }, {
      name: "Vitsebsk voblast",
      shortCode: "VI"
    }]
  }, {
    countryName: "Belgium",
    countryShortCode: "BE",
    regions: [{
      name: "Brussels",
      shortCode: "BRU"
    }, {
      name: "Flanders",
      shortCode: "VLG"
    }, {
      name: "Wallonia",
      shortCode: "WAL"
    }]
  }, {
    countryName: "Belize",
    countryShortCode: "BZ",
    regions: [{
      name: "Belize District",
      shortCode: "BZ"
    }, {
      name: "Cayo District",
      shortCode: "CY"
    }, {
      name: "Corozal District",
      shortCode: "CZL"
    }, {
      name: "Orange Walk District",
      shortCode: "OW"
    }, {
      name: "Stann Creek District",
      shortCode: "SC"
    }, {
      name: "Toledo District",
      shortCode: "TOL"
    }]
  }, {
    countryName: "Benin",
    countryShortCode: "BJ",
    regions: [{
      name: "Alibori",
      shortCode: "AL"
    }, {
      name: "Atakora",
      shortCode: "AK"
    }, {
      name: "Atlantique",
      shortCode: "AQ"
    }, {
      name: "Borgou",
      shortCode: "BO"
    }, {
      name: "Collines Department",
      shortCode: "CO"
    }, {
      name: "Donga",
      shortCode: "DO"
    }, {
      name: "Kouffo",
      shortCode: "KO"
    }, {
      name: "Littoral Department",
      shortCode: "LI"
    }, {
      name: "Mono Department",
      shortCode: "MO"
    }, {
      name: "Ouémé",
      shortCode: "OU"
    }, {
      name: "Plateau",
      shortCode: "PL"
    }, {
      name: "Zou",
      shortCode: "ZO"
    }]
  }, {
    countryName: "Bermuda",
    countryShortCode: "BM",
    regions: [{
      name: "City of Hamilton",
      shortCode: "03"
    }, {
      name: "Devonshire Parish",
      shortCode: "01"
    }, {
      name: "Hamilton Parish",
      shortCode: "02"
    }, {
      name: "Paget Parish",
      shortCode: "04"
    }, {
      name: "Pembroke Parish",
      shortCode: "05"
    }, {
      name: "Sandys Parish",
      shortCode: "08"
    }, {
      name: "Smith's Parish",
      shortCode: "09"
    }, {
      name: "Southampton Parish",
      shortCode: "10"
    }, {
      name: "St. George's Parish",
      shortCode: "07"
    }, {
      name: "Town of St. George",
      shortCode: "06"
    }, {
      name: "Warwick Parish",
      shortCode: "11"
    }]
  }, {
    countryName: "Bhutan",
    countryShortCode: "BT",
    regions: [{
      name: "Bumthang",
      shortCode: "33"
    }, {
      name: "Chhukha",
      shortCode: "12"
    }, {
      name: "Dagana",
      shortCode: "22"
    }, {
      name: "Gasa",
      shortCode: "GA"
    }, {
      name: "Haa",
      shortCode: "13"
    }, {
      name: "Lhuntse",
      shortCode: "44"
    }, {
      name: "Mongar",
      shortCode: "42"
    }, {
      name: "Paro",
      shortCode: "11"
    }, {
      name: "Pemagatshel",
      shortCode: "43"
    }, {
      name: "Punakha",
      shortCode: "23"
    }, {
      name: "Samdrup Jongkhar",
      shortCode: "45"
    }, {
      name: "Samtse",
      shortCode: "14"
    }, {
      name: "Sarpang",
      shortCode: "31"
    }, {
      name: "Thimphu",
      shortCode: "15"
    }, {
      name: "Trashigang",
      shortCode: "41"
    }, {
      name: "Trashiyangtse",
      shortCode: "TY"
    }, {
      name: "Trongsa",
      shortCode: "32"
    }, {
      name: "Tsirang",
      shortCode: "21"
    }, {
      name: "Wangdue Phodrang",
      shortCode: "24"
    }, {
      name: "Zhemgang",
      shortCode: "34"
    }]
  }, {
    countryName: "Bolivia",
    countryShortCode: "BO",
    regions: [{
      name: "Beni",
      shortCode: "B"
    }, {
      name: "Chuquisaca",
      shortCode: "H"
    }, {
      name: "Cochabamba",
      shortCode: "C"
    }, {
      name: "La Paz",
      shortCode: "L"
    }, {
      name: "Oruro",
      shortCode: "O"
    }, {
      name: "Pando",
      shortCode: "N"
    }, {
      name: "Potosí",
      shortCode: "P"
    }, {
      name: "Santa Cruz",
      shortCode: "S"
    }, {
      name: "Tarija",
      shortCode: "T"
    }]
  }, {
    countryName: "Bonaire, Sint Eustatius and Saba",
    countryShortCode: "BQ",
    regions: [{
      name: "Bonaire",
      shortCode: "BO"
    }, {
      name: "Saba Isand",
      shortCode: "SA"
    }, {
      name: "Sint Eustatius",
      shortCode: "SE"
    }]
  }, {
    countryName: "Bosnia and Herzegovina",
    countryShortCode: "BA",
    regions: [{
      name: "Brčko Distrikt",
      shortCode: "BRC"
    }, {
      name: "Federacija Bosne i Hercegovine",
      shortCode: "BIH"
    }, {
      name: "Republika Srpska",
      shortCode: "SRP"
    }]
  }, {
    countryName: "Botswana",
    countryShortCode: "BW",
    regions: [{
      name: "Central",
      shortCode: "CE"
    }, {
      name: "Ghanzi",
      shortCode: "GH"
    }, {
      name: "Kgalagadi",
      shortCode: "KG"
    }, {
      name: "Kgatleng",
      shortCode: "KL"
    }, {
      name: "Kweneng",
      shortCode: "KW"
    }, {
      name: "North West",
      shortCode: "NW"
    }, {
      name: "North-East",
      shortCode: "NE"
    }, {
      name: "South East",
      shortCode: "SE"
    }, {
      name: "Southern",
      shortCode: "SO"
    }]
  }, {
    countryName: "Bouvet Island",
    countryShortCode: "BV",
    regions: [{
      name: "Bouvet Island",
      shortCode: "BV"
    }]
  }, {
    countryName: "Brazil",
    countryShortCode: "BR",
    regions: [{
      name: "Acre",
      shortCode: "AC"
    }, {
      name: "Alagoas",
      shortCode: "AL"
    }, {
      name: "Amapá",
      shortCode: "AP"
    }, {
      name: "Amazonas",
      shortCode: "AM"
    }, {
      name: "Bahia",
      shortCode: "BA"
    }, {
      name: "Ceará",
      shortCode: "CE"
    }, {
      name: "Distrito Federal",
      shortCode: "DF"
    }, {
      name: "Espírito Santo",
      shortCode: "ES"
    }, {
      name: "Goiás",
      shortCode: "GO"
    }, {
      name: "Maranhão",
      shortCode: "MA"
    }, {
      name: "Mato Grosso",
      shortCode: "MT"
    }, {
      name: "Mato Grosso do Sul",
      shortCode: "MS"
    }, {
      name: "Minas Gerais",
      shortCode: "MG"
    }, {
      name: "Pará",
      shortCode: "PA"
    }, {
      name: "Paraíba",
      shortCode: "PB"
    }, {
      name: "Paraná",
      shortCode: "PR"
    }, {
      name: "Pernambuco",
      shortCode: "PE"
    }, {
      name: "Piauí",
      shortCode: "PI"
    }, {
      name: "Rio de Janeiro",
      shortCode: "RJ"
    }, {
      name: "Rio Grande do Norte",
      shortCode: "RN"
    }, {
      name: "Rio Grande do Sul",
      shortCode: "RS"
    }, {
      name: "Rondônia",
      shortCode: "RO"
    }, {
      name: "Roraima",
      shortCode: "RR"
    }, {
      name: "Santa Catarina",
      shortCode: "SC"
    }, {
      name: "São Paulo",
      shortCode: "SP"
    }, {
      name: "Sergipe",
      shortCode: "SE"
    }, {
      name: "Tocantins",
      shortCode: "TO"
    }]
  }, {
    countryName: "British Indian Ocean Territory",
    countryShortCode: "IO",
    regions: [{
      name: "British Indian Ocean Territory",
      shortCode: "IO"
    }]
  }, {
    countryName: "Brunei Darussalam",
    countryShortCode: "BN",
    regions: [{
      name: "Belait",
      shortCode: "BE"
    }, {
      name: "Brunei Muara",
      shortCode: "BM"
    }, {
      name: "Temburong",
      shortCode: "TE"
    }, {
      name: "Tutong",
      shortCode: "TU"
    }]
  }, {
    countryName: "Bulgaria",
    countryShortCode: "BG",
    regions: [{
      name: "Blagoevgrad",
      shortCode: "01"
    }, {
      name: "Burgas",
      shortCode: "02"
    }, {
      name: "Dobrich",
      shortCode: "08"
    }, {
      name: "Gabrovo",
      shortCode: "07"
    }, {
      name: "Jambol",
      shortCode: "28"
    }, {
      name: "Khaskovo",
      shortCode: "26"
    }, {
      name: "Kjustendil",
      shortCode: "10"
    }, {
      name: "Kurdzhali",
      shortCode: "09"
    }, {
      name: "Lovech",
      shortCode: "11"
    }, {
      name: "Montana",
      shortCode: "12"
    }, {
      name: "Pazardzhik",
      shortCode: "13"
    }, {
      name: "Pernik",
      shortCode: "14"
    }, {
      name: "Pleven",
      shortCode: "15"
    }, {
      name: "Plovdiv",
      shortCode: "16"
    }, {
      name: "Razgrad",
      shortCode: "17"
    }, {
      name: "Ruse",
      shortCode: "18"
    }, {
      name: "Shumen",
      shortCode: "27"
    }, {
      name: "Silistra",
      shortCode: "19"
    }, {
      name: "Sliven",
      shortCode: "20"
    }, {
      name: "Smoljan",
      shortCode: "21"
    }, {
      name: "Sofija",
      shortCode: "23"
    }, {
      name: "Sofija-Grad",
      shortCode: "22"
    }, {
      name: "Stara Zagora",
      shortCode: "24"
    }, {
      name: "Turgovishhe",
      shortCode: "25"
    }, {
      name: "Varna",
      shortCode: "03"
    }, {
      name: "Veliko Turnovo",
      shortCode: "04"
    }, {
      name: "Vidin",
      shortCode: "05"
    }, {
      name: "Vraca",
      shortCode: "06"
    }]
  }, {
    countryName: "Burkina Faso",
    countryShortCode: "BF",
    regions: [{
      name: "Balé",
      shortCode: "BAL"
    }, {
      name: "Bam/Lake Bam",
      shortCode: "BAM"
    }, {
      name: "Banwa Province",
      shortCode: "BAN"
    }, {
      name: "Bazèga",
      shortCode: "BAZ"
    }, {
      name: "Bougouriba",
      shortCode: "BGR"
    }, {
      name: "Boulgou Province",
      shortCode: "BLG"
    }, {
      name: "Boulkiemdé",
      shortCode: "BLK"
    }, {
      name: "Comoé/Komoe",
      shortCode: "COM"
    }, {
      name: "Ganzourgou Province",
      shortCode: "GAN"
    }, {
      name: "Gnagna",
      shortCode: "GNA"
    }, {
      name: "Gourma Province",
      shortCode: "GOU"
    }, {
      name: "Houet",
      shortCode: "HOU"
    }, {
      name: "Ioba",
      shortCode: "IOB"
    }, {
      name: "Kadiogo",
      shortCode: "KAD"
    }, {
      name: "Kénédougou",
      shortCode: "KEN"
    }, {
      name: "Komondjari",
      shortCode: "KMD"
    }, {
      name: "Kompienga",
      shortCode: "KMP"
    }, {
      name: "Kossi Province",
      shortCode: "KOS"
    }, {
      name: "Koulpélogo",
      shortCode: "KOP"
    }, {
      name: "Kouritenga",
      shortCode: "KOT"
    }, {
      name: "Kourwéogo",
      shortCode: "KOW"
    }, {
      name: "Léraba",
      shortCode: "LER"
    }, {
      name: "Loroum",
      shortCode: "LOR"
    }, {
      name: "Mouhoun",
      shortCode: "MOU"
    }, {
      name: "Namentenga",
      shortCode: "NAM"
    }, {
      name: "Naouri/Nahouri",
      shortCode: "NAO"
    }, {
      name: "Nayala",
      shortCode: "NAY"
    }, {
      name: "Noumbiel",
      shortCode: "NOU"
    }, {
      name: "Oubritenga",
      shortCode: "OUB"
    }, {
      name: "Oudalan",
      shortCode: "OUD"
    }, {
      name: "Passoré",
      shortCode: "PAS"
    }, {
      name: "Poni",
      shortCode: "PON"
    }, {
      name: "Sanguié",
      shortCode: "SNG"
    }, {
      name: "Sanmatenga",
      shortCode: "SMT"
    }, {
      name: "Séno",
      shortCode: "SEN"
    }, {
      name: "Sissili",
      shortCode: "SIS"
    }, {
      name: "Soum",
      shortCode: "SOM"
    }, {
      name: "Sourou",
      shortCode: "SOR"
    }, {
      name: "Tapoa",
      shortCode: "TAP"
    }, {
      name: "Tui/Tuy",
      shortCode: "TUI"
    }, {
      name: "Yagha",
      shortCode: "YAG"
    }, {
      name: "Yatenga",
      shortCode: "YAT"
    }, {
      name: "Ziro",
      shortCode: "ZIR"
    }, {
      name: "Zondoma",
      shortCode: "ZON"
    }, {
      name: "Zoundwéogo",
      shortCode: "ZOU"
    }]
  }, {
    countryName: "Burundi",
    countryShortCode: "BI",
    regions: [{
      name: "Bubanza",
      shortCode: "BB"
    }, {
      name: "Bujumbura Mairie",
      shortCode: "BM"
    }, {
      name: "Bujumbura Rural",
      shortCode: "BL"
    }, {
      name: "Bururi",
      shortCode: "BR"
    }, {
      name: "Cankuzo",
      shortCode: "CA"
    }, {
      name: "Cibitoke",
      shortCode: "CI"
    }, {
      name: "Gitega",
      shortCode: "GI"
    }, {
      name: "Karuzi",
      shortCode: "KR"
    }, {
      name: "Kayanza",
      shortCode: "KY"
    }, {
      name: "Kirundo",
      shortCode: "KI"
    }, {
      name: "Makamba",
      shortCode: "MA"
    }, {
      name: "Muramvya",
      shortCode: "MU"
    }, {
      name: "Muyinga",
      shortCode: "MY"
    }, {
      name: "Mwaro",
      shortCode: "MW"
    }, {
      name: "Ngozi",
      shortCode: "NG"
    }, {
      name: "Rutana",
      shortCode: "RT"
    }, {
      name: "Ruyigi",
      shortCode: "RY"
    }]
  }, {
    countryName: "Cambodia",
    countryShortCode: "KH",
    regions: [{
      name: "Baat Dambang",
      shortCode: "2"
    }, {
      name: "Banteay Mean Chey",
      shortCode: "1"
    }, {
      name: "Kampong Chaam",
      shortCode: "3"
    }, {
      name: "Kampong Chhnang",
      shortCode: "4"
    }, {
      name: "Kampong Spueu",
      shortCode: "5"
    }, {
      name: "Kampong Thum",
      shortCode: "6"
    }, {
      name: "Kampot",
      shortCode: "7"
    }, {
      name: "Kandaal",
      shortCode: "8"
    }, {
      name: "Kaoh Kong",
      shortCode: "9"
    }, {
      name: "Kracheh",
      shortCode: "10"
    }, {
      name: "Krong Kaeb",
      shortCode: "23"
    }, {
      name: "Krong Pailin",
      shortCode: "24"
    }, {
      name: "Krong Preah Sihanouk",
      shortCode: "18"
    }, {
      name: "Mondol Kiri",
      shortCode: "11"
    }, {
      name: "Otdar Mean Chey",
      shortCode: "22"
    }, {
      name: "Phnom Penh",
      shortCode: "12"
    }, {
      name: "Pousaat",
      shortCode: "15"
    }, {
      name: "Preah Vihear",
      shortCode: "13"
    }, {
      name: "Prey Veaeng",
      shortCode: "14"
    }, {
      name: "Rotanah Kiri",
      shortCode: "16"
    }, {
      name: "Siem Reab",
      shortCode: "17"
    }, {
      name: "Stueng Treng",
      shortCode: "19"
    }, {
      name: "Svaay Rieng",
      shortCode: "20"
    }, {
      name: "Taakaev",
      shortCode: "21"
    }, {
      name: "Tbong Khmum",
      shortCode: "25"
    }]
  }, {
    countryName: "Cameroon",
    countryShortCode: "CM",
    regions: [{
      name: "Adamaoua",
      shortCode: "AD"
    }, {
      name: "Centre",
      shortCode: "CE"
    }, {
      name: "Est",
      shortCode: "ES"
    }, {
      name: "Extrême-Nord",
      shortCode: "EN"
    }, {
      name: "Littoral",
      shortCode: "LT"
    }, {
      name: "Nord",
      shortCode: "NO"
    }, {
      name: "Nord-Ouest",
      shortCode: "NW"
    }, {
      name: "Ouest",
      shortCode: "OU"
    }, {
      name: "Sud",
      shortCode: "SU"
    }, {
      name: "Sud-Ouest",
      shortCode: "SW"
    }]
  }, {
    countryName: "Canada",
    countryShortCode: "CA",
    regions: [{
      name: "Alberta",
      shortCode: "AB"
    }, {
      name: "British Columbia",
      shortCode: "BC"
    }, {
      name: "Manitoba",
      shortCode: "MB"
    }, {
      name: "New Brunswick",
      shortCode: "NB"
    }, {
      name: "Newfoundland and Labrador",
      shortCode: "NL"
    }, {
      name: "Northwest Territories",
      shortCode: "NT"
    }, {
      name: "Nova Scotia",
      shortCode: "NS"
    }, {
      name: "Nunavut",
      shortCode: "NU"
    }, {
      name: "Ontario",
      shortCode: "ON"
    }, {
      name: "Prince Edward Island",
      shortCode: "PE"
    }, {
      name: "Quebec",
      shortCode: "QC"
    }, {
      name: "Saskatchewan",
      shortCode: "SK"
    }, {
      name: "Yukon",
      shortCode: "YT"
    }]
  }, {
    countryName: "Cape Verde",
    countryShortCode: "CV",
    regions: [{
      name: "Boa Vista",
      shortCode: "BV"
    }, {
      name: "Brava",
      shortCode: "BR"
    }, {
      name: "Calheta de São Miguel",
      shortCode: "CS"
    }, {
      name: "Maio",
      shortCode: "MA"
    }, {
      name: "Mosteiros",
      shortCode: "MO"
    }, {
      name: "Paúl",
      shortCode: "PA"
    }, {
      name: "Porto Novo",
      shortCode: "PN"
    }, {
      name: "Praia",
      shortCode: "PR"
    }, {
      name: "Ribeira Brava",
      shortCode: "RB"
    }, {
      name: "Ribeira Grande",
      shortCode: "RG"
    }, {
      name: "Sal",
      shortCode: "SL"
    }, {
      name: "Santa Catarina",
      shortCode: "CA"
    }, {
      name: "Santa Cruz",
      shortCode: "CR"
    }, {
      name: "São Domingos",
      shortCode: "SD"
    }, {
      name: "São Filipe",
      shortCode: "SF"
    }, {
      name: "São Nicolau",
      shortCode: "SN"
    }, {
      name: "São Vicente",
      shortCode: "SV"
    }, {
      name: "Tarrafal",
      shortCode: "TA"
    }, {
      name: "Tarrafal de São Nicolau",
      shortCode: "TS"
    }]
  }, {
    countryName: "Cayman Islands",
    countryShortCode: "KY",
    regions: [{
      name: "Creek"
    }, {
      name: "Eastern"
    }, {
      name: "Midland"
    }, {
      name: "South Town"
    }, {
      name: "Spot Bay"
    }, {
      name: "Stake Bay"
    }, {
      name: "West End"
    }, {
      name: "Western"
    }]
  }, {
    countryName: "Central African Republic",
    countryShortCode: "CF",
    regions: [{
      name: "Bamingui-Bangoran",
      shortCode: "BB"
    }, {
      name: "Bangui",
      shortCode: "BGF"
    }, {
      name: "Basse-Kotto",
      shortCode: "BK"
    }, {
      name: "Haute-Kotto",
      shortCode: "HK"
    }, {
      name: "Haut-Mbomou",
      shortCode: "HM"
    }, {
      name: "Kémo",
      shortCode: "KG"
    }, {
      name: "Lobaye",
      shortCode: "LB"
    }, {
      name: "Mambéré-Kadéï",
      shortCode: "HS"
    }, {
      name: "Mbomou",
      shortCode: "MB"
    }, {
      name: "Nana-Grebizi",
      shortCode: "10"
    }, {
      name: "Nana-Mambéré",
      shortCode: "NM"
    }, {
      name: "Ombella-M'Poko",
      shortCode: "MP"
    }, {
      name: "Ouaka",
      shortCode: "UK"
    }, {
      name: "Ouham",
      shortCode: "AC"
    }, {
      name: "Ouham Péndé",
      shortCode: "OP"
    }, {
      name: "Sangha-Mbaéré",
      shortCode: "SE"
    }, {
      name: "Vakaga",
      shortCode: "VK"
    }]
  }, {
    countryName: "Chad",
    countryShortCode: "TD",
    regions: [{
      name: "Bahr el Ghazal",
      shortCode: "BG"
    }, {
      name: "Batha",
      shortCode: "BA"
    }, {
      name: "Borkou",
      shortCode: "BO"
    }, {
      name: "Chari-Baguirmi",
      shortCode: "CB"
    }, {
      name: "Ennedi-Est",
      shortCode: "EE"
    }, {
      name: "Ennedi-Ouest",
      shortCode: "EO"
    }, {
      name: "Guéra",
      shortCode: "GR"
    }, {
      name: "Hadjer Lamis",
      shortCode: "HL"
    }, {
      name: "Kanem",
      shortCode: "KA"
    }, {
      name: "Lac",
      shortCode: "LC"
    }, {
      name: "Logone Occidental",
      shortCode: "LO"
    }, {
      name: "Logone Oriental",
      shortCode: "LR"
    }, {
      name: "Mondoul",
      shortCode: "MA"
    }, {
      name: "Mayo-Kébbi-Est",
      shortCode: "ME"
    }, {
      name: "Moyen-Chari",
      shortCode: "MC"
    }, {
      name: "Ouaddai",
      shortCode: "OD"
    }, {
      name: "Salamat",
      shortCode: "SA"
    }, {
      name: "Sila",
      shortCode: "SI"
    }, {
      name: "Tandjilé",
      shortCode: "TA"
    }, {
      name: "Tibesti",
      shortCode: "TI"
    }, {
      name: "Ville de Ndjamena",
      shortCode: "ND"
    }, {
      name: "Wadi Fira",
      shortCode: "WF"
    }]
  }, {
    countryName: "Chile",
    countryShortCode: "CL",
    regions: [{
      name: "Aisén del General Carlos Ibáñez del Campo",
      shortCode: "AI"
    }, {
      name: "Antofagasta",
      shortCode: "AN"
    }, {
      name: "Araucanía",
      shortCode: "AR"
    }, {
      name: "Arica y Parinacota",
      shortCode: "AP"
    }, {
      name: "Atacama",
      shortCode: "AT"
    }, {
      name: "Bío-Bío",
      shortCode: "BI"
    }, {
      name: "Coquimbo",
      shortCode: "CO"
    }, {
      name: "Libertador General Bernardo O'Higgins",
      shortCode: "LI"
    }, {
      name: "Los Lagos",
      shortCode: "LL"
    }, {
      name: "Los Ríos",
      shortCode: "LR"
    }, {
      name: "Magallanes y Antartica Chilena",
      shortCode: "MA"
    }, {
      name: "Marga-Marga",
      shortCode: ""
    }, {
      name: "Maule",
      shortCode: "ML"
    }, {
      name: "Ñuble",
      shortCode: "NB"
    }, {
      name: "Región Metropolitana de Santiago",
      shortCode: "RM"
    }, {
      name: "Tarapacá",
      shortCode: "TA"
    }, {
      name: "Valparaíso",
      shortCode: "VS"
    }]
  }, {
    countryName: "China",
    countryShortCode: "CN",
    regions: [{
      name: "Anhui",
      shortCode: "34"
    }, {
      name: "Beijing",
      shortCode: "11"
    }, {
      name: "Chongqing",
      shortCode: "50"
    }, {
      name: "Fujian",
      shortCode: "35"
    }, {
      name: "Gansu",
      shortCode: "62"
    }, {
      name: "Guangdong",
      shortCode: "44"
    }, {
      name: "Guangxi",
      shortCode: "45"
    }, {
      name: "Guizhou",
      shortCode: "52"
    }, {
      name: "Hainan",
      shortCode: "46"
    }, {
      name: "Hebei",
      shortCode: "13"
    }, {
      name: "Heilongjiang",
      shortCode: "23"
    }, {
      name: "Henan",
      shortCode: "41"
    }, {
      name: "Hong Kong",
      shortCode: "91"
    }, {
      name: "Hubei",
      shortCode: "42"
    }, {
      name: "Hunan",
      shortCode: "43"
    }, {
      name: "Inner Mongolia",
      shortCode: "15"
    }, {
      name: "Jiangsu",
      shortCode: "32"
    }, {
      name: "Jiangxi",
      shortCode: "36"
    }, {
      name: "Jilin",
      shortCode: "22"
    }, {
      name: "Liaoning",
      shortCode: "21"
    }, {
      name: "Macau",
      shortCode: "92"
    }, {
      name: "Ningxia",
      shortCode: "64"
    }, {
      name: "Qinghai",
      shortCode: "63"
    }, {
      name: "Shaanxi",
      shortCode: "61"
    }, {
      name: "Shandong",
      shortCode: "37"
    }, {
      name: "Shanghai",
      shortCode: "31"
    }, {
      name: "Shanxi",
      shortCode: "14"
    }, {
      name: "Sichuan",
      shortCode: "51"
    }, {
      name: "Tianjin",
      shortCode: "12"
    }, {
      name: "Tibet",
      shortCode: "54"
    }, {
      name: "Xinjiang",
      shortCode: "65"
    }, {
      name: "Yunnan",
      shortCode: "53"
    }, {
      name: "Zhejiang",
      shortCode: "33"
    }]
  }, {
    countryName: "Christmas Island",
    countryShortCode: "CX",
    regions: [{
      name: "Christmas Island",
      shortCode: "CX"
    }]
  }, {
    countryName: "Cocos (Keeling) Islands",
    countryShortCode: "CC",
    regions: [{
      name: "Direction Island",
      shortCode: "DI"
    }, {
      name: "Home Island",
      shortCode: "HM"
    }, {
      name: "Horsburgh Island",
      shortCode: "HR"
    }, {
      name: "North Keeling Island",
      shortCode: "NK"
    }, {
      name: "South Island",
      shortCode: "SI"
    }, {
      name: "West Island",
      shortCode: "WI"
    }]
  }, {
    countryName: "Colombia",
    countryShortCode: "CO",
    regions: [{
      name: "Amazonas",
      shortCode: "AMA"
    }, {
      name: "Antioquia",
      shortCode: "ANT"
    }, {
      name: "Arauca",
      shortCode: "ARA"
    }, {
      name: "Archipiélago de San Andrés",
      shortCode: "SAP"
    }, {
      name: "Atlántico",
      shortCode: "ATL"
    }, {
      name: "Bogotá D.C.",
      shortCode: "DC"
    }, {
      name: "Bolívar",
      shortCode: "BOL"
    }, {
      name: "Boyacá",
      shortCode: "BOY"
    }, {
      name: "Caldas",
      shortCode: "CAL"
    }, {
      name: "Caquetá",
      shortCode: "CAQ"
    }, {
      name: "Casanare",
      shortCode: "CAS"
    }, {
      name: "Cauca",
      shortCode: "CAU"
    }, {
      name: "Cesar",
      shortCode: "CES"
    }, {
      name: "Chocó",
      shortCode: "CHO"
    }, {
      name: "Córdoba",
      shortCode: "COR"
    }, {
      name: "Cundinamarca",
      shortCode: "CUN"
    }, {
      name: "Guainía",
      shortCode: "GUA"
    }, {
      name: "Guaviare",
      shortCode: "GUV"
    }, {
      name: "Huila",
      shortCode: "HUI"
    }, {
      name: "La Guajira",
      shortCode: "LAG"
    }, {
      name: "Magdalena",
      shortCode: "MAG"
    }, {
      name: "Meta",
      shortCode: "MET"
    }, {
      name: "Nariño",
      shortCode: "NAR"
    }, {
      name: "Norte de Santander",
      shortCode: "NSA"
    }, {
      name: "Putumayo",
      shortCode: "PUT"
    }, {
      name: "Quindío",
      shortCode: "QUI"
    }, {
      name: "Risaralda",
      shortCode: "RIS"
    }, {
      name: "Santander",
      shortCode: "SAN"
    }, {
      name: "Sucre",
      shortCode: "SUC"
    }, {
      name: "Tolima",
      shortCode: "TOL"
    }, {
      name: "Valle del Cauca",
      shortCode: "VAC"
    }, {
      name: "Vaupés",
      shortCode: "VAU"
    }, {
      name: "Vichada",
      shortCode: "VID"
    }]
  }, {
    countryName: "Comoros",
    countryShortCode: "KM",
    regions: [{
      name: "Andjazîdja",
      shortCode: "G"
    }, {
      name: "Andjouân",
      shortCode: "A"
    }, {
      name: "Moûhîlî",
      shortCode: "M"
    }]
  }, {
    countryName: "Congo, Republic of the (Brazzaville)",
    countryShortCode: "CG",
    regions: [{
      name: "Bouenza",
      shortCode: "11"
    }, {
      name: "Brazzaville",
      shortCode: "BZV"
    }, {
      name: "Cuvette",
      shortCode: "8"
    }, {
      name: "Cuvette-Ouest",
      shortCode: "15"
    }, {
      name: "Kouilou",
      shortCode: "5"
    }, {
      name: "Lékoumou",
      shortCode: "2"
    }, {
      name: "Likouala",
      shortCode: "7"
    }, {
      name: "Niari",
      shortCode: "9"
    }, {
      name: "Plateaux",
      shortCode: "14"
    }, {
      name: "Pointe-Noire",
      shortCode: "16"
    }, {
      name: "Pool",
      shortCode: "12"
    }, {
      name: "Sangha",
      shortCode: "13"
    }]
  }, {
    countryName: "Congo, the Democratic Republic of the (Kinshasa)",
    countryShortCode: "CD",
    regions: [{
      name: "Bandundu",
      shortCode: "BN"
    }, {
      name: "Bas-Congo",
      shortCode: "BC"
    }, {
      name: "Équateur",
      shortCode: "EQ"
    }, {
      name: "Kasaï-Occidental",
      shortCode: "KE"
    }, {
      name: "Kasaï-Oriental",
      shortCode: "KW"
    }, {
      name: "Katanga",
      shortCode: "KA"
    }, {
      name: "Kinshasa",
      shortCode: "KN"
    }, {
      name: "Maniema",
      shortCode: "MA"
    }, {
      name: "Nord-Kivu",
      shortCode: "NK"
    }, {
      name: "Orientale",
      shortCode: "OR"
    }, {
      name: "Sud-Kivu",
      shortCode: "SK"
    }]
  }, {
    countryName: "Cook Islands",
    countryShortCode: "CK",
    regions: [{
      name: "Aitutaki"
    }, {
      name: "Atiu"
    }, {
      name: "Avarua"
    }, {
      name: "Mangaia"
    }, {
      name: "Manihiki"
    }, {
      name: "Ma'uke"
    }, {
      name: "Mitiaro"
    }, {
      name: "Nassau"
    }, {
      name: "Palmerston"
    }, {
      name: "Penrhyn"
    }, {
      name: "Pukapuka"
    }, {
      name: "Rakahanga"
    }]
  }, {
    countryName: "Costa Rica",
    countryShortCode: "CR",
    regions: [{
      name: "Alajuela",
      shortCode: "2"
    }, {
      name: "Cartago",
      shortCode: "3"
    }, {
      name: "Guanacaste",
      shortCode: "5"
    }, {
      name: "Heredia",
      shortCode: "4"
    }, {
      name: "Limón",
      shortCode: "7"
    }, {
      name: "Puntarenas",
      shortCode: "6"
    }, {
      name: "San José",
      shortCode: "1"
    }]
  }, {
    countryName: "Côte d'Ivoire, Republic of",
    countryShortCode: "CI",
    regions: [{
      name: "Agnéby",
      shortCode: "16"
    }, {
      name: "Bafing",
      shortCode: "17"
    }, {
      name: "Bas-Sassandra",
      shortCode: "09"
    }, {
      name: "Denguélé",
      shortCode: "10"
    }, {
      name: "Dix-Huit Montagnes",
      shortCode: "06"
    }, {
      name: "Fromager",
      shortCode: "18"
    }, {
      name: "Haut-Sassandra",
      shortCode: "02"
    }, {
      name: "Lacs",
      shortCode: "07"
    }, {
      name: "Lagunes",
      shortCode: "01"
    }, {
      name: "Marahoué",
      shortCode: "12"
    }, {
      name: "Moyen-Cavally",
      shortCode: "19"
    }, {
      name: "Moyen-Comoé",
      shortCode: "05"
    }, {
      name: "N'zi-Comoé",
      shortCode: "11"
    }, {
      name: "Savanes",
      shortCode: "03"
    }, {
      name: "Sud-Bandama",
      shortCode: "15"
    }, {
      name: "Sud-Comoé",
      shortCode: "13"
    }, {
      name: "Vallée du Bandama",
      shortCode: "04"
    }, {
      name: "Worodougou",
      shortCode: "14"
    }, {
      name: "Zanzan",
      shortCode: "08"
    }]
  }, {
    countryName: "Croatia",
    countryShortCode: "HR",
    regions: [{
      name: "Bjelovarsko-bilogorska županija",
      shortCode: "07"
    }, {
      name: "Brodsko-posavska županija",
      shortCode: "12"
    }, {
      name: "Dubrovačko-neretvanska županija",
      shortCode: "19"
    }, {
      name: "Grad Zagreb",
      shortCode: "21"
    }, {
      name: "Istarska županija",
      shortCode: "18"
    }, {
      name: "Karlovačka županija",
      shortCode: "04"
    }, {
      name: "Koprivničko-križevačka županija",
      shortCode: "06"
    }, {
      name: "Krapinsko-zagorska županija",
      shortCode: "02"
    }, {
      name: "Ličko-senjska županija",
      shortCode: "09"
    }, {
      name: "Međimurska županija",
      shortCode: "20"
    }, {
      name: "Osječko-baranjska županija",
      shortCode: "14"
    }, {
      name: "Požeško-slavonska županija",
      shortCode: "11"
    }, {
      name: "Primorsko-goranska županija",
      shortCode: "08"
    }, {
      name: "Sisačko-moslavačka županija",
      shortCode: "03"
    }, {
      name: "Splitsko-dalmatinska županija",
      shortCode: "17"
    }, {
      name: "Šibensko-kninska županija",
      shortCode: "15"
    }, {
      name: "Varaždinska županija",
      shortCode: "05"
    }, {
      name: "Virovitičko-podravska županija",
      shortCode: "10"
    }, {
      name: "Vukovarsko-srijemska županija",
      shortCode: "16"
    }, {
      name: "Zadarska županija",
      shortCode: "13"
    }, {
      name: "Zagrebačka županija",
      shortCode: "01"
    }]
  }, {
    countryName: "Cuba",
    countryShortCode: "CU",
    regions: [{
      name: "Artemisa",
      shortCode: "15"
    }, {
      name: "Camagüey",
      shortCode: "09"
    }, {
      name: "Ciego de Ávila",
      shortCode: "08"
    }, {
      name: "Cienfuegos",
      shortCode: "06"
    }, {
      name: "Granma",
      shortCode: "12"
    }, {
      name: "Guantánamo",
      shortCode: "14"
    }, {
      name: "Holguín",
      shortCode: "11"
    }, {
      name: "Isla de la Juventud",
      shortCode: "99"
    }, {
      name: "La Habana",
      shortCode: "03"
    }, {
      name: "Las Tunas",
      shortCode: "10"
    }, {
      name: "Matanzas",
      shortCode: "04"
    }, {
      name: "Mayabeque",
      shortCode: "16"
    }, {
      name: "Pinar del Río",
      shortCode: "01"
    }, {
      name: "Sancti Spíritus",
      shortCode: "07"
    }, {
      name: "Santiago de Cuba",
      shortCode: "13"
    }, {
      name: "Villa Clara",
      shortCode: "05"
    }]
  }, {
    countryName: "Curaçao",
    countryShortCode: "CW",
    regions: [{
      name: "Curaçao",
      shortCode: "CW"
    }]
  }, {
    countryName: "Cyprus",
    countryShortCode: "CY",
    regions: [{
      name: "Ammochostos",
      shortCode: "04"
    }, {
      name: "Keryneia",
      shortCode: "05"
    }, {
      name: "Larnaka",
      shortCode: "03"
    }, {
      name: "Lefkosia",
      shortCode: "01"
    }, {
      name: "Lemesos",
      shortCode: "02"
    }, {
      name: "Pafos",
      shortCode: "05"
    }]
  }, {
    countryName: "Czech Republic",
    countryShortCode: "CZ",
    regions: [{
      name: "Hlavní město Praha",
      shortCode: "PR"
    }, {
      name: "Jihočeský kraj",
      shortCode: "JC"
    }, {
      name: "Jihomoravský kraj",
      shortCode: "JM"
    }, {
      name: "Karlovarský kraj",
      shortCode: "KA"
    }, {
      name: "Královéhradecký kraj",
      shortCode: "KR"
    }, {
      name: "Liberecký kraj",
      shortCode: "LI"
    }, {
      name: "Moravskoslezský kraj",
      shortCode: "MO"
    }, {
      name: "Olomoucký kraj",
      shortCode: "OL"
    }, {
      name: "Pardubický kraj",
      shortCode: "PA"
    }, {
      name: "Plzeňský kraj",
      shortCode: "PL"
    }, {
      name: "Středočeský kraj",
      shortCode: "ST"
    }, {
      name: "Ústecký kraj",
      shortCode: "US"
    }, {
      name: "Vysočina",
      shortCode: "VY"
    }, {
      name: "Zlínský kraj",
      shortCode: "ZL"
    }]
  }, {
    countryName: "Denmark",
    countryShortCode: "DK",
    regions: [{
      name: "Hovedstaden",
      shortCode: "84"
    }, {
      name: "Kujalleq",
      shortCode: "GL-KU"
    }, {
      name: "Midtjylland",
      shortCode: "82"
    }, {
      name: "Norderøerne",
      shortCode: "FO-01"
    }, {
      name: "Nordjylland",
      shortCode: "81"
    }, {
      name: "Østerø",
      shortCode: "FO-06"
    }, {
      name: "Qaasuitsup",
      shortCode: "GL-QA"
    }, {
      name: "Qeqqata",
      shortCode: "GL-QE"
    }, {
      name: "Sandø",
      shortCode: "FO-02"
    }, {
      name: "Sermersooq",
      shortCode: "GL-SM"
    }, {
      name: "Sjælland",
      shortCode: "85"
    }, {
      name: "Strømø",
      shortCode: "FO-03"
    }, {
      name: "Suderø",
      shortCode: "FO-04"
    }, {
      name: "Syddanmark",
      shortCode: "83"
    }, {
      name: "Vågø",
      shortCode: "FO-05"
    }]
  }, {
    countryName: "Djibouti",
    countryShortCode: "DJ",
    regions: [{
      name: "Ali Sabieh",
      shortCode: "AS"
    }, {
      name: "Arta",
      shortCode: "AR"
    }, {
      name: "Dikhil",
      shortCode: "DI"
    }, {
      name: "Obock",
      shortCode: "OB"
    }, {
      name: "Tadjourah",
      shortCode: "TA"
    }]
  }, {
    countryName: "Dominica",
    countryShortCode: "DM",
    regions: [{
      name: "Saint Andrew Parish",
      shortCode: "02"
    }, {
      name: "Saint David Parish",
      shortCode: "03"
    }, {
      name: "Saint George Parish",
      shortCode: "04"
    }, {
      name: "Saint John Parish",
      shortCode: "05"
    }, {
      name: "Saint Joseph Parish",
      shortCode: "06"
    }, {
      name: "Saint Luke Parish",
      shortCode: "07"
    }, {
      name: "Saint Mark Parish",
      shortCode: "08"
    }, {
      name: "Saint Patrick Parish",
      shortCode: "09"
    }, {
      name: "Saint Paul Parish",
      shortCode: "10"
    }, {
      name: "Saint Peter Parish",
      shortCode: "11"
    }]
  }, {
    countryName: "Dominican Republic",
    countryShortCode: "DO",
    regions: [{
      name: "Cibao Central",
      shortCode: "02"
    }, {
      name: "Del Valle",
      shortCode: "37"
    }, {
      name: "Distrito Nacional",
      shortCode: "01"
    }, {
      name: "Enriquillo",
      shortCode: "38"
    }, {
      name: "Norcentral",
      shortCode: "04"
    }, {
      name: "Nordeste",
      shortCode: "34"
    }, {
      name: "Noroeste",
      shortCode: "34"
    }, {
      name: "Norte",
      shortCode: "35"
    }, {
      name: "Valdesia",
      shortCode: "42"
    }]
  }, {
    countryName: "Ecuador",
    countryShortCode: "EC",
    regions: [{
      name: "Azuay",
      shortCode: "A"
    }, {
      name: "Bolívar",
      shortCode: "B"
    }, {
      name: "Cañar",
      shortCode: "F"
    }, {
      name: "Carchi",
      shortCode: "C"
    }, {
      name: "Chimborazo",
      shortCode: "H"
    }, {
      name: "Cotopaxi",
      shortCode: "X"
    }, {
      name: "El Oro",
      shortCode: "O"
    }, {
      name: "Esmeraldas",
      shortCode: "E"
    }, {
      name: "Galápagos",
      shortCode: "W"
    }, {
      name: "Guayas",
      shortCode: "G"
    }, {
      name: "Imbabura",
      shortCode: "I"
    }, {
      name: "Loja",
      shortCode: "L"
    }, {
      name: "Los Ríos",
      shortCode: "R"
    }, {
      name: "Manabí",
      shortCode: "M"
    }, {
      name: "Morona-Santiago",
      shortCode: "S"
    }, {
      name: "Napo",
      shortCode: "N"
    }, {
      name: "Orellana",
      shortCode: "D"
    }, {
      name: "Pastaza",
      shortCode: "Y"
    }, {
      name: "Pichincha",
      shortCode: "P"
    }, {
      name: "Santa Elena",
      shortCode: "SE"
    }, {
      name: "Santo Domingo de los Tsáchilas",
      shortCode: "SD"
    }, {
      name: "Sucumbíos",
      shortCode: "U"
    }, {
      name: "Tungurahua",
      shortCode: "T"
    }, {
      name: "Zamora-Chinchipe",
      shortCode: "Z"
    }]
  }, {
    countryName: "Egypt",
    countryShortCode: "EG",
    regions: [{
      name: "Alexandria",
      shortCode: "ALX"
    }, {
      name: "Aswan",
      shortCode: "ASN"
    }, {
      name: "Asyout",
      shortCode: "AST"
    }, {
      name: "Bani Sueif",
      shortCode: "BNS"
    }, {
      name: "Beheira",
      shortCode: "BH"
    }, {
      name: "Cairo",
      shortCode: "C"
    }, {
      name: "Daqahlia",
      shortCode: "DK"
    }, {
      name: "Dumiat",
      shortCode: "DT"
    }, {
      name: "El Bahr El Ahmar",
      shortCode: "BA"
    }, {
      name: "El Ismailia",
      shortCode: "IS"
    }, {
      name: "El Suez",
      shortCode: "SUZ"
    }, {
      name: "El Wadi El Gedeed",
      shortCode: "WAD"
    }, {
      name: "Fayoum",
      shortCode: "FYM"
    }, {
      name: "Gharbia",
      shortCode: "GH"
    }, {
      name: "Giza",
      shortCode: "SUZ"
    }, {
      name: "Helwan",
      shortCode: "HU"
    }, {
      name: "Kafr El Sheikh",
      shortCode: "KFS"
    }, {
      name: "Luxor",
      shortCode: "LX"
    }, {
      name: "Matrouh",
      shortCode: "MT"
    }, {
      name: "Menia",
      shortCode: "MN"
    }, {
      name: "Menofia",
      shortCode: "MNF"
    }, {
      name: "North Sinai",
      shortCode: "SIN"
    }, {
      name: "Port Said",
      shortCode: "PTS"
    }, {
      name: "Qalubia",
      shortCode: "KB"
    }, {
      name: "Qena",
      shortCode: "KN"
    }, {
      name: "Sharqia",
      shortCode: "SHR"
    }, {
      name: "Sixth of October",
      shortCode: "SU"
    }, {
      name: "Sohag",
      shortCode: "SHG"
    }, {
      name: "South Sinai",
      shortCode: "JS"
    }]
  }, {
    countryName: "El Salvador",
    countryShortCode: "SV",
    regions: [{
      name: "Ahuachapán",
      shortCode: "AH"
    }, {
      name: "Cabañas",
      shortCode: "CA"
    }, {
      name: "Cuscatlán",
      shortCode: "CU"
    }, {
      name: "Chalatenango",
      shortCode: "CH"
    }, {
      name: "La Libertad",
      shortCode: "LI"
    }, {
      name: "La Paz",
      shortCode: "PA"
    }, {
      name: "La Unión",
      shortCode: "UN"
    }, {
      name: "Morazán",
      shortCode: "MO"
    }, {
      name: "San Miguel",
      shortCode: "SM"
    }, {
      name: "San Salvador",
      shortCode: "SS"
    }, {
      name: "Santa Ana",
      shortCode: "SA"
    }, {
      name: "San Vicente",
      shortCode: "SV"
    }, {
      name: "Sonsonate",
      shortCode: "SO"
    }, {
      name: "Usulután",
      shortCode: "US"
    }]
  }, {
    countryName: "Equatorial Guinea",
    countryShortCode: "GQ",
    regions: [{
      name: "Annobón",
      shortCode: "AN"
    }, {
      name: "Bioko Norte",
      shortCode: "BN"
    }, {
      name: "Bioko Sur",
      shortCode: "BS"
    }, {
      name: "Centro Sur",
      shortCode: "CS"
    }, {
      name: "Kié-Ntem",
      shortCode: "KN"
    }, {
      name: "Litoral",
      shortCode: "LI"
    }, {
      name: "Wele-Nzas",
      shortCode: "WN"
    }]
  }, {
    countryName: "Eritrea",
    countryShortCode: "ER",
    regions: [{
      name: "Anseba",
      shortCode: "AN"
    }, {
      name: "Debub",
      shortCode: "DU"
    }, {
      name: "Debub-Keih-Bahri",
      shortCode: "DK"
    }, {
      name: "Gash-Barka",
      shortCode: "GB"
    }, {
      name: "Maekel",
      shortCode: "MA"
    }, {
      name: "Semien-Keih-Bahri",
      shortCode: "SK"
    }]
  }, {
    countryName: "Estonia",
    countryShortCode: "EE",
    regions: [{
      name: "Harjumaa (Tallinn)",
      shortCode: "37"
    }, {
      name: "Hiiumaa (Kardla)",
      shortCode: "39"
    }, {
      name: "Ida-Virumaa (Johvi)",
      shortCode: "44"
    }, {
      name: "Järvamaa (Paide)",
      shortCode: "41"
    }, {
      name: "Jõgevamaa (Jogeva)",
      shortCode: "49"
    }, {
      name: "Läänemaa",
      shortCode: "57"
    }, {
      name: "Lääne-Virumaa (Rakvere)",
      shortCode: "59"
    }, {
      name: "Pärnumaa (Parnu)",
      shortCode: "67"
    }, {
      name: "Põlvamaa (Polva)",
      shortCode: "65"
    }, {
      name: "Raplamaa (Rapla)",
      shortCode: "70"
    }, {
      name: "Saaremaa (Kuessaare)",
      shortCode: "74"
    }, {
      name: "Tartumaa (Tartu)",
      shortCode: "78"
    }, {
      name: "Valgamaa (Valga)",
      shortCode: "82"
    }, {
      name: "Viljandimaa (Viljandi)",
      shortCode: "84"
    }, {
      name: "Võrumaa (Voru)",
      shortCode: "86"
    }]
  }, {
    countryName: "Ethiopia",
    countryShortCode: "ET",
    regions: [{
      name: "Addis Ababa",
      shortCode: "AA"
    }, {
      name: "Afar",
      shortCode: "AF"
    }, {
      name: "Amhara",
      shortCode: "AM"
    }, {
      name: "Benshangul-Gumaz",
      shortCode: "BE"
    }, {
      name: "Dire Dawa",
      shortCode: "DD"
    }, {
      name: "Gambela",
      shortCode: "GA"
    }, {
      name: "Harari",
      shortCode: "HA"
    }, {
      name: "Oromia",
      shortCode: "OR"
    }, {
      name: "Somali",
      shortCode: "SO"
    }, {
      name: "Southern Nations Nationalities and People's Region",
      shortCode: "SN"
    }, {
      name: "Tigray",
      shortCode: "TI"
    }]
  }, {
    countryName: "Falkland Islands (Islas Malvinas)",
    countryShortCode: "FK",
    regions: [{
      name: "Falkland Islands (Islas Malvinas)"
    }]
  }, {
    countryName: "Faroe Islands",
    countryShortCode: "FO",
    regions: [{
      name: "Bordoy"
    }, {
      name: "Eysturoy"
    }, {
      name: "Mykines"
    }, {
      name: "Sandoy"
    }, {
      name: "Skuvoy"
    }, {
      name: "Streymoy"
    }, {
      name: "Suduroy"
    }, {
      name: "Tvoroyri"
    }, {
      name: "Vagar"
    }]
  }, {
    countryName: "Fiji",
    countryShortCode: "FJ",
    regions: [{
      name: "Ba",
      shortCode: "01"
    }, {
      name: "Bua",
      shortCode: "01"
    }, {
      name: "Cakaudrove",
      shortCode: "03"
    }, {
      name: "Kadavu",
      shortCode: "04"
    }, {
      name: "Lau",
      shortCode: "05"
    }, {
      name: "Lomaiviti",
      shortCode: "06"
    }, {
      name: "Macuata",
      shortCode: "07"
    }, {
      name: "Nadroga and Navosa",
      shortCode: "08"
    }, {
      name: "Naitasiri",
      shortCode: "09"
    }, {
      name: "Namosi",
      shortCode: "10"
    }, {
      name: "Ra",
      shortCode: "011"
    }, {
      name: "Rewa",
      shortCode: "12"
    }, {
      name: "Rotuma",
      shortCode: "R"
    }, {
      name: "Serua",
      shortCode: "12"
    }, {
      name: "Tailevu",
      shortCode: "14"
    }]
  }, {
    countryName: "Finland",
    countryShortCode: "FI",
    regions: [{
      name: "Ahvenanmaan maakunta",
      shortCode: "FI-01"
    }, {
      name: "Etelä-Karjala",
      shortCode: "FI-02"
    }, {
      name: "Etelä-Pohjanmaa",
      shortCode: "FI-03"
    }, {
      name: "Etelä-Savo",
      shortCode: "FI-04"
    }, {
      name: "Kainuu",
      shortCode: "FI-05"
    }, {
      name: "Kanta-Häme",
      shortCode: "FI-06"
    }, {
      name: "Keski-Pohjanmaa",
      shortCode: "FI-07"
    }, {
      name: "Keski-Suomi",
      shortCode: "FI-08"
    }, {
      name: "Kymenlaakso",
      shortCode: "FI-09"
    }, {
      name: "Lappi",
      shortCode: "FI-10"
    }, {
      name: "Pirkanmaa",
      shortCode: "FI-11"
    }, {
      name: "Pohjanmaa",
      shortCode: "FI-12"
    }, {
      name: "Pohjois-Karjala",
      shortCode: "FI-13"
    }, {
      name: "Pohjois-Pohjanmaa",
      shortCode: "FI-14"
    }, {
      name: "Pohjois-Savo",
      shortCode: "FI-15"
    }, {
      name: "Päijät-Häme",
      shortCode: "FI-16"
    }, {
      name: "Satakunta",
      shortCode: "FI-17"
    }, {
      name: "Uusimaa",
      shortCode: "FI-18"
    }, {
      name: "Varsinais-Suomi",
      shortCode: "FI-19"
    }]
  }, {
    countryName: "France",
    countryShortCode: "FR",
    regions: [{
      name: "Auvergne-Rhône-Alpes",
      shortCode: "ARA"
    }, {
      name: "Bourgogne-Franche-Comté",
      shortCode: "BFC"
    }, {
      name: "Bretagne",
      shortCode: "BRE"
    }, {
      name: "Centre-Val de Loire",
      shortCode: "CVL"
    }, {
      name: "Corse",
      shortCode: "COR"
    }, {
      name: "Grand Est",
      shortCode: "GES"
    }, {
      name: "Hauts-de-France",
      shortCode: "HDF"
    }, {
      name: "Île-de-France",
      shortCode: "IDF"
    }, {
      name: "Normandie",
      shortCode: "NOR"
    }, {
      name: "Nouvelle-Aquitaine",
      shortCode: "NAQ"
    }, {
      name: "Occitanie",
      shortCode: "OCC"
    }, {
      name: "Pays de la Loire",
      shortCode: "PDL"
    }, {
      name: "Provence-Alpes-Cote d'Azur",
      shortCode: "PAC"
    }, {
      name: "Clipperton",
      shortCode: "CP"
    }, {
      name: "Guadeloupe",
      shortCode: "GP"
    }, {
      name: "Guyane",
      shortCode: "GF"
    }, {
      name: "Martinique",
      shortCode: "MQ"
    }, {
      name: "Mayotte",
      shortCode: "YT"
    }, {
      name: "Novelle-Calédonie",
      shortCode: "NC"
    }, {
      name: "Polynésie",
      shortCode: "PF"
    }, {
      name: "Saint-Pierre-et-Miquelon",
      shortCode: "PM"
    }, {
      name: "Saint Barthélemy",
      shortCode: "BL"
    }, {
      name: "Saint Martin",
      shortCode: "MF"
    }, {
      name: "Réunion",
      shortCode: "RE"
    }, {
      name: "Terres Australes Françaises",
      shortCode: "TF"
    }, {
      name: "Wallis-et-Futuna",
      shortCode: "WF"
    }]
  }, {
    countryName: "French Guiana",
    countryShortCode: "GF",
    regions: [{
      name: "French Guiana"
    }]
  }, {
    countryName: "French Polynesia",
    countryShortCode: "PF",
    regions: [{
      name: "Archipel des Marquises"
    }, {
      name: "Archipel des Tuamotu"
    }, {
      name: "Archipel des Tubuai"
    }, {
      name: "Iles du Vent"
    }, {
      name: "Iles Sous-le-Vent"
    }]
  }, {
    countryName: "French Southern and Antarctic Lands",
    countryShortCode: "TF",
    regions: [{
      name: "Adelie Land"
    }, {
      name: "Ile Crozet"
    }, {
      name: "Iles Kerguelen"
    }, {
      name: "Iles Saint-Paul et Amsterdam"
    }]
  }, {
    countryName: "Gabon",
    countryShortCode: "GA",
    regions: [{
      name: "Estuaire",
      shortCode: "1"
    }, {
      name: "Haut-Ogooué",
      shortCode: "2"
    }, {
      name: "Moyen-Ogooué",
      shortCode: "3"
    }, {
      name: "Ngounié",
      shortCode: "4"
    }, {
      name: "Nyanga",
      shortCode: "5"
    }, {
      name: "Ogooué-Ivindo",
      shortCode: "6"
    }, {
      name: "Ogooué-Lolo",
      shortCode: "7"
    }, {
      name: "Ogooué-Maritime",
      shortCode: "8"
    }, {
      name: "Woleu-Ntem",
      shortCode: "9"
    }]
  }, {
    countryName: "Gambia, The",
    countryShortCode: "GM",
    regions: [{
      name: "Banjul",
      shortCode: "B"
    }, {
      name: "Central River",
      shortCode: "M"
    }, {
      name: "Lower River",
      shortCode: "L"
    }, {
      name: "North Bank",
      shortCode: "N"
    }, {
      name: "Upper River",
      shortCode: "U"
    }, {
      name: "Western",
      shortCode: "W"
    }]
  }, {
    countryName: "Georgia",
    countryShortCode: "GE",
    regions: [{
      name: "Abkhazia (Sokhumi)",
      shortCode: "AB"
    }, {
      name: "Ajaria (Bat'umi)",
      shortCode: "AJ"
    }, {
      name: "Guria",
      shortCode: "GU"
    }, {
      name: "Imereti",
      shortCode: "IM"
    }, {
      name: "K'akheti",
      shortCode: "KA"
    }, {
      name: "Kvemo Kartli",
      shortCode: "KK"
    }, {
      name: "Mtshkheta-Mtianeti",
      shortCode: "MM"
    }, {
      name: "Rach'a-Lexhkumi-KvemoSvaneti",
      shortCode: "RL"
    }, {
      name: "Samegrelo-Zemo Svaneti",
      shortCode: "SZ"
    }, {
      name: "Samtskhe-Javakheti",
      shortCode: "SJ"
    }, {
      name: "Shida Kartli",
      shortCode: "SK"
    }, {
      name: "Tbilisi",
      shortCode: "TB"
    }]
  }, {
    countryName: "Germany",
    countryShortCode: "DE",
    regions: [{
      name: "Baden-Württemberg",
      shortCode: "BW"
    }, {
      name: "Bayern",
      shortCode: "BY"
    }, {
      name: "Berlin",
      shortCode: "BE"
    }, {
      name: "Brandenburg",
      shortCode: "BB"
    }, {
      name: "Bremen",
      shortCode: "HB"
    }, {
      name: "Hamburg",
      shortCode: "HH"
    }, {
      name: "Hessen",
      shortCode: "HE"
    }, {
      name: "Mecklenburg-Vorpommern",
      shortCode: "MV"
    }, {
      name: "Niedersachsen",
      shortCode: "NI"
    }, {
      name: "Nordrhein-Westfalen",
      shortCode: "NW"
    }, {
      name: "Rheinland-Pfalz",
      shortCode: "RP"
    }, {
      name: "Saarland",
      shortCode: "SL"
    }, {
      name: "Sachsen",
      shortCode: "SN"
    }, {
      name: "Sachsen-Anhalt",
      shortCode: "ST"
    }, {
      name: "Schleswig-Holstein",
      shortCode: "SH"
    }, {
      name: "Thüringen",
      shortCode: "TH"
    }]
  }, {
    countryName: "Ghana",
    countryShortCode: "GH",
    regions: [{
      name: "Ahafo"
    }, {
      name: "Ashanti",
      shortCode: "AH"
    }, {
      name: "Bono"
    }, {
      name: "Bono East"
    }, {
      name: "Central",
      shortCode: "CP"
    }, {
      name: "Eastern",
      shortCode: "EP"
    }, {
      name: "Greater Accra",
      shortCode: "AA"
    }, {
      name: "Northern",
      shortCode: "NP"
    }, {
      name: "North East"
    }, {
      name: "Oti"
    }, {
      name: "Savannah"
    }, {
      name: "Upper East",
      shortCode: "UE"
    }, {
      name: "Upper West",
      shortCode: "UW"
    }, {
      name: "Volta",
      shortCode: "TV"
    }, {
      name: "Western",
      shortCode: "WP"
    }, {
      name: "Western North"
    }]
  }, {
    countryName: "Gibraltar",
    countryShortCode: "GI",
    regions: [{
      name: "Gibraltar"
    }]
  }, {
    countryName: "Greece",
    countryShortCode: "GR",
    regions: [{
      name: "Anatolikí Makedonía kai Thráki",
      shortCode: "A"
    }, {
      name: "Attikḯ",
      shortCode: "I"
    }, {
      name: "Dytikí Elláda",
      shortCode: "G"
    }, {
      name: "Dytikí Makedonía",
      shortCode: "C"
    }, {
      name: "Ionía Nísia",
      shortCode: "F"
    }, {
      name: "Kentrikí Makedonía",
      shortCode: "B"
    }, {
      name: "Krítí",
      shortCode: "M"
    }, {
      name: "Notío Aigaío",
      shortCode: "L"
    }, {
      name: "Peloponnísos",
      shortCode: "J"
    }, {
      name: "Stereá Elláda",
      shortCode: "H"
    }, {
      name: "Thessalía",
      shortCode: "E"
    }, {
      name: "Voreío Aigaío",
      shortCode: "K"
    }, {
      name: "Ípeiros",
      shortCode: "D"
    }, {
      name: "Ágion Óros",
      shortCode: "69"
    }]
  }, {
    countryName: "Greenland",
    countryShortCode: "GL",
    regions: [{
      name: "Kommune Kujalleq",
      shortCode: "KU"
    }, {
      name: "Kommuneqarfik Sermersooq",
      shortCode: "SM"
    }, {
      name: "Qaasuitsup Kommunia",
      shortCode: "QA"
    }, {
      name: "Qeqqata Kommunia",
      shortCode: "QE"
    }]
  }, {
    countryName: "Grenada",
    countryShortCode: "GD",
    regions: [{
      name: "Saint Andrew",
      shortCode: "01"
    }, {
      name: "Saint David",
      shortCode: "02"
    }, {
      name: "Saint George",
      shortCode: "03"
    }, {
      name: "Saint John",
      shortCode: "04"
    }, {
      name: "Saint Mark",
      shortCode: "05"
    }, {
      name: "Saint Patrick",
      shortCode: "06"
    }, {
      name: "Southern Grenadine Islands",
      shortCode: "10"
    }]
  }, {
    countryName: "Guadeloupe",
    countryShortCode: "GP",
    regions: [{
      name: "Guadeloupe"
    }]
  }, {
    countryName: "Guam",
    countryShortCode: "GU",
    regions: [{
      name: "Guam"
    }]
  }, {
    countryName: "Guatemala",
    countryShortCode: "GT",
    regions: [{
      name: "Alta Verapaz",
      shortCode: "AV"
    }, {
      name: "Baja Verapaz",
      shortCode: "BV"
    }, {
      name: "Chimaltenango",
      shortCode: "CM"
    }, {
      name: "Chiquimula",
      shortCode: "CQ"
    }, {
      name: "El Progreso",
      shortCode: "PR"
    }, {
      name: "Escuintla",
      shortCode: "ES"
    }, {
      name: "Guatemala",
      shortCode: "GU"
    }, {
      name: "Huehuetenango",
      shortCode: "HU"
    }, {
      name: "Izabal",
      shortCode: "IZ"
    }, {
      name: "Jalapa",
      shortCode: "JA"
    }, {
      name: "Jutiapa",
      shortCode: "JU"
    }, {
      name: "Petén",
      shortCode: "PE"
    }, {
      name: "Quetzaltenango",
      shortCode: "QZ"
    }, {
      name: "Quiché",
      shortCode: "QC"
    }, {
      name: "Retalhuleu",
      shortCode: "Re"
    }, {
      name: "Sacatepéquez",
      shortCode: "SA"
    }, {
      name: "San Marcos",
      shortCode: "SM"
    }, {
      name: "Santa Rosa",
      shortCode: "SR"
    }, {
      name: "Sololá",
      shortCode: "SO"
    }, {
      name: "Suchitepéquez",
      shortCode: "SU"
    }, {
      name: "Totonicapán",
      shortCode: "TO"
    }, {
      name: "Zacapa",
      shortCode: "ZA"
    }]
  }, {
    countryName: "Guernsey",
    countryShortCode: "GG",
    regions: [{
      name: "Castel"
    }, {
      name: "Forest"
    }, {
      name: "St. Andrew"
    }, {
      name: "St. Martin"
    }, {
      name: "St. Peter Port"
    }, {
      name: "St. Pierre du Bois"
    }, {
      name: "St. Sampson"
    }, {
      name: "St. Saviour"
    }, {
      name: "Torteval"
    }, {
      name: "Vale"
    }]
  }, {
    countryName: "Guinea",
    countryShortCode: "GN",
    regions: [{
      name: "Boké",
      shortCode: "B"
    }, {
      name: "Conakry",
      shortCode: "C"
    }, {
      name: "Faranah",
      shortCode: "F"
    }, {
      name: "Kankan",
      shortCode: "K"
    }, {
      name: "Kindia",
      shortCode: "D"
    }, {
      name: "Labé",
      shortCode: "L"
    }, {
      name: "Mamou",
      shortCode: "M"
    }, {
      name: "Nzérékoré",
      shortCode: "N"
    }]
  }, {
    countryName: "Guinea-Bissau",
    countryShortCode: "GW",
    regions: [{
      name: "Bafatá",
      shortCode: "BA"
    }, {
      name: "Biombo",
      shortCode: "BM"
    }, {
      name: "Bissau",
      shortCode: "BS"
    }, {
      name: "Bolama-Bijagos",
      shortCode: "BL"
    }, {
      name: "Cacheu",
      shortCode: "CA"
    }, {
      name: "Gabú",
      shortCode: "GA"
    }, {
      name: "Oio",
      shortCode: "OI"
    }, {
      name: "Quinara",
      shortCode: "QU"
    }, {
      name: "Tombali",
      shortCode: "TO"
    }]
  }, {
    countryName: "Guyana",
    countryShortCode: "GY",
    regions: [{
      name: "Barima-Waini",
      shortCode: "BA"
    }, {
      name: "Cuyuni-Mazaruni",
      shortCode: "CU"
    }, {
      name: "Demerara-Mahaica",
      shortCode: "DE"
    }, {
      name: "East Berbice-Corentyne",
      shortCode: "EB"
    }, {
      name: "Essequibo Islands-West Demerara",
      shortCode: "ES"
    }, {
      name: "Mahaica-Berbice",
      shortCode: "MA"
    }, {
      name: "Pomeroon-Supenaam",
      shortCode: "PM"
    }, {
      name: "Potaro-Siparuni",
      shortCode: "PT"
    }, {
      name: "Upper Demerara-Berbice",
      shortCode: "UD"
    }, {
      name: "Upper Takutu-Upper Essequibo",
      shortCode: "UT"
    }]
  }, {
    countryName: "Haiti",
    countryShortCode: "HT",
    regions: [{
      name: "Artibonite",
      shortCode: "AR"
    }, {
      name: "Centre",
      shortCode: "CE"
    }, {
      name: "Grand'Anse",
      shortCode: "GA"
    }, {
      name: "Nippes",
      shortCode: "NI"
    }, {
      name: "Nord",
      shortCode: "ND"
    }, {
      name: "Nord-Est",
      shortCode: "NE"
    }, {
      name: "Nord-Ouest",
      shortCode: "NO"
    }, {
      name: "Ouest",
      shortCode: "OU"
    }, {
      name: "Sud",
      shortCode: "SD"
    }, {
      name: "Sud-Est",
      shortCode: "SE"
    }]
  }, {
    countryName: "Heard Island and McDonald Islands",
    countryShortCode: "HM",
    regions: [{
      name: "Heard Island and McDonald Islands"
    }]
  }, {
    countryName: "Holy See (Vatican City)",
    countryShortCode: "VA",
    regions: [{
      name: "Holy See (Vatican City)",
      shortCode: "VA"
    }]
  }, {
    countryName: "Honduras",
    countryShortCode: "HN",
    regions: [{
      name: "Atlántida",
      shortCode: "AT"
    }, {
      name: "Choluteca",
      shortCode: "CH"
    }, {
      name: "Colón",
      shortCode: "CL"
    }, {
      name: "Comayagua",
      shortCode: "CM"
    }, {
      name: "Copán",
      shortCode: "CP"
    }, {
      name: "Cortés",
      shortCode: "CR"
    }, {
      name: "El Paraíso",
      shortCode: "EP"
    }, {
      name: "Francisco Morazan",
      shortCode: "FM"
    }, {
      name: "Gracias a Dios",
      shortCode: "GD"
    }, {
      name: "Intibucá",
      shortCode: "IN"
    }, {
      name: "Islas de la Bahía",
      shortCode: "IB"
    }, {
      name: "La Paz",
      shortCode: "LP"
    }, {
      name: "Lempira",
      shortCode: "LE"
    }, {
      name: "Ocotepeque",
      shortCode: "OC"
    }, {
      name: "Olancho",
      shortCode: "OL"
    }, {
      name: "Santa Bárbara",
      shortCode: "SB"
    }, {
      name: "Valle",
      shortCode: "VA"
    }, {
      name: "Yoro",
      shortCode: "YO"
    }]
  }, {
    countryName: "Hong Kong",
    countryShortCode: "HK",
    regions: [{
      name: "Hong Kong",
      shortCode: "HK"
    }]
  }, {
    countryName: "Hungary",
    countryShortCode: "HU",
    regions: [{
      name: "Bács-Kiskun",
      shortCode: "BK"
    }, {
      name: "Baranya",
      shortCode: "BA"
    }, {
      name: "Békés",
      shortCode: "BE"
    }, {
      name: "Békéscsaba",
      shortCode: "BC"
    }, {
      name: "Borsod-Abauj-Zemplen",
      shortCode: "BZ"
    }, {
      name: "Budapest",
      shortCode: "BU"
    }, {
      name: "Csongrád",
      shortCode: "CS"
    }, {
      name: "Debrecen",
      shortCode: "DE"
    }, {
      name: "Dunaújváros",
      shortCode: "DU"
    }, {
      name: "Eger",
      shortCode: "EG"
    }, {
      name: "Érd",
      shortCode: "ER"
    }, {
      name: "Fejér",
      shortCode: "FE"
    }, {
      name: "Győr",
      shortCode: "GY"
    }, {
      name: "Győr-Moson-Sopron",
      shortCode: "GS"
    }, {
      name: "Hajdú-Bihar",
      shortCode: "HB"
    }, {
      name: "Heves",
      shortCode: "HE"
    }, {
      name: "Hódmezővásárhely",
      shortCode: "HV"
    }, {
      name: "Jász-Nagykun-Szolnok",
      shortCode: "N"
    }, {
      name: "Kaposvár",
      shortCode: "KV"
    }, {
      name: "Kecskemét",
      shortCode: "KM"
    }, {
      name: "Komárom-Esztergom",
      shortCode: "KE"
    }, {
      name: "Miskolc",
      shortCode: "MI"
    }, {
      name: "Nagykanizsa",
      shortCode: "NK"
    }, {
      name: "Nógrád",
      shortCode: "NO"
    }, {
      name: "Nyíregyháza",
      shortCode: "NY"
    }, {
      name: "Pécs",
      shortCode: "PS"
    }, {
      name: "Pest",
      shortCode: "PE"
    }, {
      name: "Salgótarján",
      shortCode: "ST"
    }, {
      name: "Somogy",
      shortCode: "SO"
    }, {
      name: "Sopron",
      shortCode: "SN"
    }, {
      name: "Szabolcs-á-Bereg",
      shortCode: "SZ"
    }, {
      name: "Szeged",
      shortCode: "SD"
    }, {
      name: "Székesfehérvár",
      shortCode: "SF"
    }, {
      name: "Szekszárd",
      shortCode: "SS"
    }, {
      name: "Szolnok",
      shortCode: "SK"
    }, {
      name: "Szombathely",
      shortCode: "SH"
    }, {
      name: "Tatabánya",
      shortCode: "TB"
    }, {
      name: "Tolna",
      shortCode: "TO"
    }, {
      name: "Vas",
      shortCode: "VA"
    }, {
      name: "Veszprém",
      shortCode: "VE"
    }, {
      name: "Veszprém (City)",
      shortCode: "VM"
    }, {
      name: "Zala",
      shortCode: "ZA"
    }, {
      name: "Zalaegerszeg",
      shortCode: "ZE"
    }]
  }, {
    countryName: "Iceland",
    countryShortCode: "IS",
    regions: [{
      name: "Austurland",
      shortCode: "7"
    }, {
      name: "Höfuðborgarsvæði utan Reykjavíkur",
      shortCode: "1"
    }, {
      name: "Norðurland eystra",
      shortCode: "6"
    }, {
      name: "Norðurland vestra",
      shortCode: "5"
    }, {
      name: "Suðurland",
      shortCode: "8"
    }, {
      name: "Suðurnes",
      shortCode: "2"
    }, {
      name: "Vestfirðir",
      shortCode: "4"
    }, {
      name: "Vesturland",
      shortCode: "3"
    }]
  }, {
    countryName: "India",
    countryShortCode: "IN",
    regions: [{
      name: "Andaman and Nicobar Islands",
      shortCode: "AN"
    }, {
      name: "Andhra Pradesh",
      shortCode: "AP"
    }, {
      name: "Arunachal Pradesh",
      shortCode: "AR"
    }, {
      name: "Assam",
      shortCode: "AS"
    }, {
      name: "Bihar",
      shortCode: "BR"
    }, {
      name: "Chandigarh",
      shortCode: "CH"
    }, {
      name: "Chhattisgarh",
      shortCode: "CT"
    }, {
      name: "Dadra and Nagar Haveli",
      shortCode: "DN"
    }, {
      name: "Daman and Diu",
      shortCode: "DD"
    }, {
      name: "Delhi",
      shortCode: "DL"
    }, {
      name: "Goa",
      shortCode: "GA"
    }, {
      name: "Gujarat",
      shortCode: "GJ"
    }, {
      name: "Haryana",
      shortCode: "HR"
    }, {
      name: "Himachal Pradesh",
      shortCode: "HP"
    }, {
      name: "Jammu and Kashmir",
      shortCode: "JK"
    }, {
      name: "Jharkhand",
      shortCode: "JH"
    }, {
      name: "Karnataka",
      shortCode: "KA"
    }, {
      name: "Kerala",
      shortCode: "KL"
    }, {
      name: "Lakshadweep",
      shortCode: "LD"
    }, {
      name: "Madhya Pradesh",
      shortCode: "MP"
    }, {
      name: "Maharashtra",
      shortCode: "MH"
    }, {
      name: "Manipur",
      shortCode: "MN"
    }, {
      name: "Meghalaya",
      shortCode: "ML"
    }, {
      name: "Mizoram",
      shortCode: "MZ"
    }, {
      name: "Nagaland",
      shortCode: "NL"
    }, {
      name: "Odisha",
      shortCode: "OR"
    }, {
      name: "Puducherry",
      shortCode: "PY"
    }, {
      name: "Punjab",
      shortCode: "PB"
    }, {
      name: "Rajasthan",
      shortCode: "RJ"
    }, {
      name: "Sikkim",
      shortCode: "WK"
    }, {
      name: "Tamil Nadu",
      shortCode: "TN"
    }, {
      name: "Telangana",
      shortCode: "TG"
    }, {
      name: "Tripura",
      shortCode: "TR"
    }, {
      name: "Uttarakhand",
      shortCode: "UT"
    }, {
      name: "Uttar Pradesh",
      shortCode: "UP"
    }, {
      name: "West Bengal",
      shortCode: "WB"
    }]
  }, {
    countryName: "Indonesia",
    countryShortCode: "ID",
    regions: [{
      name: "Aceh",
      shortCode: "AC"
    }, {
      name: "Bali",
      shortCode: "BA"
    }, {
      name: "Bangka Belitung",
      shortCode: "BB"
    }, {
      name: "Banten",
      shortCode: "BT"
    }, {
      name: "Bengkulu",
      shortCode: "BE"
    }, {
      name: "Gorontalo",
      shortCode: "GO"
    }, {
      name: "Jakarta Raya",
      shortCode: "JK"
    }, {
      name: "Jambi",
      shortCode: "JA"
    }, {
      name: "Jawa Barat",
      shortCode: "JB"
    }, {
      name: "Jawa Tengah",
      shortCode: "JT"
    }, {
      name: "Jawa Timur",
      shortCode: "JI"
    }, {
      name: "Kalimantan Barat",
      shortCode: "KB"
    }, {
      name: "Kalimantan Selatan",
      shortCode: "KS"
    }, {
      name: "Kalimantan Tengah",
      shortCode: "KT"
    }, {
      name: "Kalimantan Timur",
      shortCode: "KI"
    }, {
      name: "Kalimantan Utara",
      shortCode: "KU"
    }, {
      name: "Kepulauan Riau",
      shortCode: "KR"
    }, {
      name: "Lampung",
      shortCode: "LA"
    }, {
      name: "Maluku",
      shortCode: "MA"
    }, {
      name: "Maluku Utara",
      shortCode: "MU"
    }, {
      name: "Nusa Tenggara Barat",
      shortCode: "NB"
    }, {
      name: "Nusa Tenggara Timur",
      shortCode: "NT"
    }, {
      name: "Papua",
      shortCode: "PA"
    }, {
      name: "Papua Barat",
      shortCode: "PB"
    }, {
      name: "Riau",
      shortCode: "RI"
    }, {
      name: "Sulawesi Selatan",
      shortCode: "SR"
    }, {
      name: "Sulawesi Tengah",
      shortCode: "ST"
    }, {
      name: "Sulawesi Tenggara",
      shortCode: "SG"
    }, {
      name: "Sulawesi Utara",
      shortCode: "SA"
    }, {
      name: "Sumatera Barat",
      shortCode: "SB"
    }, {
      name: "Sumatera Selatan",
      shortCode: "SS"
    }, {
      name: "Sumatera Utara",
      shortCode: "SU"
    }, {
      name: "Yogyakarta",
      shortCode: "YO"
    }]
  }, {
    countryName: "Iran, Islamic Republic of",
    countryShortCode: "IR",
    regions: [{
      name: "Alborz",
      shortCode: "32"
    }, {
      name: "Ardabīl",
      shortCode: "03"
    }, {
      name: "Āz̄arbāyjān-e Gharbī",
      shortCode: "02"
    }, {
      name: "Āz̄arbāyjān-e Sharqī",
      shortCode: "01"
    }, {
      name: "Būshehr",
      shortCode: "06"
    }, {
      name: "Chahār Maḩāl va Bakhtīārī",
      shortCode: "08"
    }, {
      name: "Eşfahān",
      shortCode: "04"
    }, {
      name: "Fārs",
      shortCode: "14"
    }, {
      name: "Gīlān",
      shortCode: "19"
    }, {
      name: "Golestān",
      shortCode: "27"
    }, {
      name: "Hamadān",
      shortCode: "24"
    }, {
      name: "Hormozgān",
      shortCode: "23"
    }, {
      name: "Īlām",
      shortCode: "05"
    }, {
      name: "Kermān",
      shortCode: "15"
    }, {
      name: "Kermānshāh",
      shortCode: "17"
    }, {
      name: "Khorāsān-e Jonūbī",
      shortCode: "29"
    }, {
      name: "Khorāsān-e Raẕavī",
      shortCode: "30"
    }, {
      name: "Khorāsān-e Shomālī",
      shortCode: "61"
    }, {
      name: "Khūzestān",
      shortCode: "10"
    }, {
      name: "Kohgīlūyeh va Bowyer Aḩmad",
      shortCode: "18"
    }, {
      name: "Kordestān",
      shortCode: "16"
    }, {
      name: "Lorestān",
      shortCode: "20"
    }, {
      name: "Markazi",
      shortCode: "22"
    }, {
      name: "Māzandarān",
      shortCode: "21"
    }, {
      name: "Qazvīn",
      shortCode: "28"
    }, {
      name: "Qom",
      shortCode: "26"
    }, {
      name: "Semnān",
      shortCode: "12"
    }, {
      name: "Sīstān va Balūchestān",
      shortCode: "13"
    }, {
      name: "Tehrān",
      shortCode: "07"
    }, {
      name: "Yazd",
      shortCode: "25"
    }, {
      name: "Zanjān",
      shortCode: "11"
    }]
  }, {
    countryName: "Iraq",
    countryShortCode: "IQ",
    regions: [{
      name: "Al Anbār",
      shortCode: "AN"
    }, {
      name: "Al Başrah",
      shortCode: "BA"
    }, {
      name: "Al Muthanná",
      shortCode: "MU"
    }, {
      name: "Al Qādisīyah",
      shortCode: "QA"
    }, {
      name: "An Najaf",
      shortCode: "NA"
    }, {
      name: "Arbīl",
      shortCode: "AR"
    }, {
      name: "As Sulaymānīyah",
      shortCode: "SU"
    }, {
      name: "Bābil",
      shortCode: "BB"
    }, {
      name: "Baghdād",
      shortCode: "BG"
    }, {
      name: "Dohuk",
      shortCode: "DA"
    }, {
      name: "Dhī Qār",
      shortCode: "DQ"
    }, {
      name: "Diyālá",
      shortCode: "DI"
    }, {
      name: "Karbalā'",
      shortCode: "KA"
    }, {
      name: "Kirkuk",
      shortCode: "KI"
    }, {
      name: "Maysān",
      shortCode: "MA"
    }, {
      name: "Nīnawá",
      shortCode: "NI"
    }, {
      name: "Şalāḩ ad Dīn",
      shortCode: "SD"
    }, {
      name: "Wāsiţ",
      shortCode: "WA"
    }]
  }, {
    countryName: "Ireland",
    countryShortCode: "IE",
    regions: [{
      name: "Carlow",
      shortCode: "CW"
    }, {
      name: "Cavan",
      shortCode: "CN"
    }, {
      name: "Clare",
      shortCode: "CE"
    }, {
      name: "Cork",
      shortCode: "CO"
    }, {
      name: "Donegal",
      shortCode: "DL"
    }, {
      name: "Dublin",
      shortCode: "D"
    }, {
      name: "Galway",
      shortCode: "G"
    }, {
      name: "Kerry",
      shortCode: "KY"
    }, {
      name: "Kildare",
      shortCode: "KE"
    }, {
      name: "Kilkenny",
      shortCode: "KK"
    }, {
      name: "Laois",
      shortCode: "LS"
    }, {
      name: "Leitrim",
      shortCode: "LM"
    }, {
      name: "Limerick",
      shortCode: "LK"
    }, {
      name: "Longford",
      shortCode: "LD"
    }, {
      name: "Louth",
      shortCode: "LH"
    }, {
      name: "Mayo",
      shortCode: "MO"
    }, {
      name: "Meath",
      shortCode: "MH"
    }, {
      name: "Monaghan",
      shortCode: "MN"
    }, {
      name: "Offaly",
      shortCode: "OY"
    }, {
      name: "Roscommon",
      shortCode: "RN"
    }, {
      name: "Sligo",
      shortCode: "SO"
    }, {
      name: "Tipperary",
      shortCode: "TA"
    }, {
      name: "Waterford",
      shortCode: "WD"
    }, {
      name: "Westmeath",
      shortCode: "WH"
    }, {
      name: "Wexford",
      shortCode: "WX"
    }, {
      name: "Wicklow",
      shortCode: "WW"
    }]
  }, {
    countryName: "Isle of Man",
    countryShortCode: "IM",
    regions: [{
      name: "Isle of Man"
    }]
  }, {
    countryName: "Israel",
    countryShortCode: "IL",
    regions: [{
      name: "HaDarom",
      shortCode: "D"
    }, {
      name: "HaMerkaz",
      shortCode: "M"
    }, {
      name: "HaTsafon",
      shortCode: "Z"
    }, {
      name: "H̱efa",
      shortCode: "HA"
    }, {
      name: "Tel-Aviv",
      shortCode: "TA"
    }, {
      name: "Yerushalayim",
      shortCode: "JM"
    }]
  }, {
    countryName: "Italy",
    countryShortCode: "IT",
    regions: [{
      name: "Agrigento",
      shortCode: "AG"
    }, {
      name: "Alessandria",
      shortCode: "AL"
    }, {
      name: "Ancona",
      shortCode: "AN"
    }, {
      name: "Aosta",
      shortCode: "AO"
    }, {
      name: "Arezzo",
      shortCode: "AR"
    }, {
      name: "Ascoli Piceno",
      shortCode: "AP"
    }, {
      name: "Asti",
      shortCode: "AT"
    }, {
      name: "Avellino",
      shortCode: "AV"
    }, {
      name: "Bari",
      shortCode: "BA"
    }, {
      name: "Barletta-Andria-Trani",
      shortCode: "BT"
    }, {
      name: "Belluno",
      shortCode: "BL"
    }, {
      name: "Benevento",
      shortCode: "BN"
    }, {
      name: "Bergamo",
      shortCode: "BG"
    }, {
      name: "Biella",
      shortCode: "BI"
    }, {
      name: "Bologna",
      shortCode: "BO"
    }, {
      name: "Bolzano",
      shortCode: "BZ"
    }, {
      name: "Brescia",
      shortCode: "BS"
    }, {
      name: "Brindisi",
      shortCode: "BR"
    }, {
      name: "Cagliari",
      shortCode: "CA"
    }, {
      name: "Caltanissetta",
      shortCode: "CL"
    }, {
      name: "Campobasso",
      shortCode: "CB"
    }, {
      name: "Carbonia-Iglesias",
      shortCode: "CI"
    }, {
      name: "Caserta",
      shortCode: "CE"
    }, {
      name: "Catania",
      shortCode: "CT"
    }, {
      name: "Catanzaro",
      shortCode: "CZ"
    }, {
      name: "Chieti",
      shortCode: "CH"
    }, {
      name: "Como",
      shortCode: "CO"
    }, {
      name: "Cosenza",
      shortCode: "CS"
    }, {
      name: "Cremona",
      shortCode: "CR"
    }, {
      name: "Crotone",
      shortCode: "KR"
    }, {
      name: "Cuneo",
      shortCode: "CN"
    }, {
      name: "Enna",
      shortCode: "EN"
    }, {
      name: "Fermo",
      shortCode: "FM"
    }, {
      name: "Ferrara",
      shortCode: "FE"
    }, {
      name: "Firenze",
      shortCode: "FI"
    }, {
      name: "Foggia",
      shortCode: "FG"
    }, {
      name: "Forlì-Cesena",
      shortCode: "FC"
    }, {
      name: "Frosinone",
      shortCode: "FR"
    }, {
      name: "Genova",
      shortCode: "GE"
    }, {
      name: "Gorizia",
      shortCode: "GO"
    }, {
      name: "Grosseto",
      shortCode: "GR"
    }, {
      name: "Imperia",
      shortCode: "IM"
    }, {
      name: "Isernia",
      shortCode: "IS"
    }, {
      name: "L'Aquila",
      shortCode: "AQ"
    }, {
      name: "La Spezia",
      shortCode: "SP"
    }, {
      name: "Latina",
      shortCode: "LT"
    }, {
      name: "Lecce",
      shortCode: "LE"
    }, {
      name: "Lecco",
      shortCode: "LC"
    }, {
      name: "Livorno",
      shortCode: "LI"
    }, {
      name: "Lodi",
      shortCode: "LO"
    }, {
      name: "Lucca",
      shortCode: "LU"
    }, {
      name: "Macerata",
      shortCode: "MC"
    }, {
      name: "Mantova",
      shortCode: "MN"
    }, {
      name: "Massa-Carrara",
      shortCode: "MS"
    }, {
      name: "Matera",
      shortCode: "MT"
    }, {
      name: "Medio Campidano",
      shortCode: "VS"
    }, {
      name: "Messina",
      shortCode: "ME"
    }, {
      name: "Milano",
      shortCode: "MI"
    }, {
      name: "Modena",
      shortCode: "MO"
    }, {
      name: "Monza e Brianza",
      shortCode: "MB"
    }, {
      name: "Napoli",
      shortCode: "NA"
    }, {
      name: "Novara",
      shortCode: "NO"
    }, {
      name: "Nuoro",
      shortCode: "NU"
    }, {
      name: "Ogliastra",
      shortCode: "OG"
    }, {
      name: "Olbia-Tempio",
      shortCode: "OT"
    }, {
      name: "Oristano",
      shortCode: "OR"
    }, {
      name: "Padova",
      shortCode: "PD"
    }, {
      name: "Palermo",
      shortCode: "PA"
    }, {
      name: "Parma",
      shortCode: "PR"
    }, {
      name: "Pavia",
      shortCode: "PV"
    }, {
      name: "Perugia",
      shortCode: "PG"
    }, {
      name: "Pesaro e Urbino",
      shortCode: "PU"
    }, {
      name: "Pescara",
      shortCode: "PE"
    }, {
      name: "Piacenza",
      shortCode: "PC"
    }, {
      name: "Pisa",
      shortCode: "PI"
    }, {
      name: "Pistoia",
      shortCode: "PT"
    }, {
      name: "Pordenone",
      shortCode: "PN"
    }, {
      name: "Potenza",
      shortCode: "PZ"
    }, {
      name: "Prato",
      shortCode: "PO"
    }, {
      name: "Ragusa",
      shortCode: "RG"
    }, {
      name: "Ravenna",
      shortCode: "RA"
    }, {
      name: "Reggio Calabria",
      shortCode: "RC"
    }, {
      name: "Reggio Emilia",
      shortCode: "RE"
    }, {
      name: "Rieti",
      shortCode: "RI"
    }, {
      name: "Rimini",
      shortCode: "RN"
    }, {
      name: "Roma",
      shortCode: "RM"
    }, {
      name: "Rovigo",
      shortCode: "RO"
    }, {
      name: "Salerno",
      shortCode: "SA"
    }, {
      name: "Sassari",
      shortCode: "SS"
    }, {
      name: "Savona",
      shortCode: "SV"
    }, {
      name: "Siena",
      shortCode: "SI"
    }, {
      name: "Siracusa",
      shortCode: "SR"
    }, {
      name: "Sondrio",
      shortCode: "SO"
    }, {
      name: "Taranto",
      shortCode: "TA"
    }, {
      name: "Teramo",
      shortCode: "TE"
    }, {
      name: "Terni",
      shortCode: "TR"
    }, {
      name: "Torino",
      shortCode: "TO"
    }, {
      name: "Trapani",
      shortCode: "TP"
    }, {
      name: "Trento",
      shortCode: "TN"
    }, {
      name: "Treviso",
      shortCode: "TV"
    }, {
      name: "Trieste",
      shortCode: "TS"
    }, {
      name: "Udine",
      shortCode: "UD"
    }, {
      name: "Varese",
      shortCode: "VA"
    }, {
      name: "Venezia",
      shortCode: "VE"
    }, {
      name: "Verbano-Cusio-Ossola",
      shortCode: "VB"
    }, {
      name: "Vercelli",
      shortCode: "VC"
    }, {
      name: "Verona",
      shortCode: "VR"
    }, {
      name: "Vibo Valentia",
      shortCode: "VV"
    }, {
      name: "Vicenza",
      shortCode: "VI"
    }, {
      name: "Viterbo",
      shortCode: "VT"
    }]
  }, {
    countryName: "Jamaica",
    countryShortCode: "JM",
    regions: [{
      name: "Clarendon",
      shortCode: "13"
    }, {
      name: "Hanover",
      shortCode: "09"
    }, {
      name: "Kingston",
      shortCode: "01"
    }, {
      name: "Manchester",
      shortCode: "12"
    }, {
      name: "Portland",
      shortCode: "04"
    }, {
      name: "Saint Andrew",
      shortCode: "02"
    }, {
      name: "Saint Ann",
      shortCode: "06"
    }, {
      name: "Saint Catherine",
      shortCode: "14"
    }, {
      name: "Saint Elizabeth",
      shortCode: "11"
    }, {
      name: "Saint James",
      shortCode: "08"
    }, {
      name: "Saint Mary",
      shortCode: "05"
    }, {
      name: "Saint Thomas",
      shortCode: "03"
    }, {
      name: "Trelawny",
      shortCode: "07"
    }, {
      name: "Westmoreland",
      shortCode: "10"
    }]
  }, {
    countryName: "Japan",
    countryShortCode: "JP",
    regions: [{
      name: "Aichi",
      shortCode: "23"
    }, {
      name: "Akita",
      shortCode: "05"
    }, {
      name: "Aomori",
      shortCode: "02"
    }, {
      name: "Chiba",
      shortCode: "12"
    }, {
      name: "Ehime",
      shortCode: "38"
    }, {
      name: "Fukui",
      shortCode: "18"
    }, {
      name: "Fukuoka",
      shortCode: "40"
    }, {
      name: "Fukushima",
      shortCode: "07"
    }, {
      name: "Gifu",
      shortCode: "21"
    }, {
      name: "Gunma",
      shortCode: "10"
    }, {
      name: "Hiroshima",
      shortCode: "34"
    }, {
      name: "Hokkaido",
      shortCode: "01"
    }, {
      name: "Hyogo",
      shortCode: "28"
    }, {
      name: "Ibaraki",
      shortCode: "08"
    }, {
      name: "Ishikawa",
      shortCode: "17"
    }, {
      name: "Iwate",
      shortCode: "03"
    }, {
      name: "Kagawa",
      shortCode: "37"
    }, {
      name: "Kagoshima",
      shortCode: "46"
    }, {
      name: "Kanagawa",
      shortCode: "14"
    }, {
      name: "Kochi",
      shortCode: "39"
    }, {
      name: "Kumamoto",
      shortCode: "43"
    }, {
      name: "Kyoto",
      shortCode: "26"
    }, {
      name: "Mie",
      shortCode: "24"
    }, {
      name: "Miyagi",
      shortCode: "04"
    }, {
      name: "Miyazaki",
      shortCode: "45"
    }, {
      name: "Nagano",
      shortCode: "20"
    }, {
      name: "Nagasaki",
      shortCode: "42"
    }, {
      name: "Nara",
      shortCode: "29"
    }, {
      name: "Niigata",
      shortCode: "15"
    }, {
      name: "Oita",
      shortCode: "44"
    }, {
      name: "Okayama",
      shortCode: "33"
    }, {
      name: "Okinawa",
      shortCode: "47"
    }, {
      name: "Osaka",
      shortCode: "27"
    }, {
      name: "Saga",
      shortCode: "41"
    }, {
      name: "Saitama",
      shortCode: "11"
    }, {
      name: "Shiga",
      shortCode: "25"
    }, {
      name: "Shimane",
      shortCode: "32"
    }, {
      name: "Shizuoka",
      shortCode: "22"
    }, {
      name: "Tochigi",
      shortCode: "09"
    }, {
      name: "Tokushima",
      shortCode: "36"
    }, {
      name: "Tokyo",
      shortCode: "13"
    }, {
      name: "Tottori",
      shortCode: "31"
    }, {
      name: "Toyama",
      shortCode: "16"
    }, {
      name: "Wakayama",
      shortCode: "30"
    }, {
      name: "Yamagata",
      shortCode: "06"
    }, {
      name: "Yamaguchi",
      shortCode: "35"
    }, {
      name: "Yamanashi",
      shortCode: "19"
    }]
  }, {
    countryName: "Jersey",
    countryShortCode: "JE",
    regions: [{
      name: "Jersey"
    }]
  }, {
    countryName: "Jordan",
    countryShortCode: "JO",
    regions: [{
      name: "‘Ajlūn",
      shortCode: "AJ"
    }, {
      name: "Al 'Aqabah",
      shortCode: "AQ"
    }, {
      name: "Al Balqā’",
      shortCode: "BA"
    }, {
      name: "Al Karak",
      shortCode: "KA"
    }, {
      name: "Al Mafraq",
      shortCode: "MA"
    }, {
      name: "Al ‘A̅şimah",
      shortCode: "AM"
    }, {
      name: "Aţ Ţafīlah",
      shortCode: "AT"
    }, {
      name: "Az Zarqā’",
      shortCode: "AZ"
    }, {
      name: "Irbid",
      shortCode: "IR"
    }, {
      name: "Jarash",
      shortCode: "JA"
    }, {
      name: "Ma‘ān",
      shortCode: "MN"
    }, {
      name: "Mādabā",
      shortCode: "MD"
    }]
  }, {
    countryName: "Kazakhstan",
    countryShortCode: "KZ",
    regions: [{
      name: "Almaty",
      shortCode: "ALA"
    }, {
      name: "Aqmola",
      shortCode: "AKM"
    }, {
      name: "Aqtobe",
      shortCode: "AKT"
    }, {
      name: "Astana",
      shortCode: "AST"
    }, {
      name: "Atyrau",
      shortCode: "ATY"
    }, {
      name: "Batys Qazaqstan",
      shortCode: "ZAP"
    }, {
      name: "Bayqongyr"
    }, {
      name: "Mangghystau",
      shortCode: "MAN"
    }, {
      name: "Ongtustik Qazaqstan",
      shortCode: "YUZ"
    }, {
      name: "Pavlodar",
      shortCode: "PAV"
    }, {
      name: "Qaraghandy",
      shortCode: "KAR"
    }, {
      name: "Qostanay",
      shortCode: "KUS"
    }, {
      name: "Qyzylorda",
      shortCode: "KZY"
    }, {
      name: "Shyghys Qazaqstan",
      shortCode: "VOS"
    }, {
      name: "Soltustik Qazaqstan",
      shortCode: "SEV"
    }, {
      name: "Zhambyl",
      shortCode: "ZHA"
    }]
  }, {
    countryName: "Kenya",
    countryShortCode: "KE",
    regions: [{
      name: "Baringo",
      shortCode: "01"
    }, {
      name: "Bomet",
      shortCode: "02"
    }, {
      name: "Bungoma",
      shortCode: "03"
    }, {
      name: "Busia",
      shortCode: "04"
    }, {
      name: "Eleyo/Marakwet",
      shortCode: "05"
    }, {
      name: "Embu",
      shortCode: "06"
    }, {
      name: "Garissa",
      shortCode: "07"
    }, {
      name: "Homa Bay",
      shortCode: "08"
    }, {
      name: "Isiolo",
      shortCode: "09"
    }, {
      name: "Kajiado",
      shortCode: "10"
    }, {
      name: "Kakamega",
      shortCode: "11"
    }, {
      name: "Kericho",
      shortCode: "12"
    }, {
      name: "Kiambu",
      shortCode: "13"
    }, {
      name: "Kilifi",
      shortCode: "14"
    }, {
      name: "Kirinyaga",
      shortCode: "15"
    }, {
      name: "Kisii",
      shortCode: "16"
    }, {
      name: "Kisumu",
      shortCode: "17"
    }, {
      name: "Kitui",
      shortCode: "18"
    }, {
      name: "Kwale",
      shortCode: "19"
    }, {
      name: "Laikipia",
      shortCode: "20"
    }, {
      name: "Lamu",
      shortCode: "21"
    }, {
      name: "Machakos",
      shortCode: "22"
    }, {
      name: "Makueni",
      shortCode: "23"
    }, {
      name: "Mandera",
      shortCode: "24"
    }, {
      name: "Marsabit",
      shortCode: "25"
    }, {
      name: "Meru",
      shortCode: "26"
    }, {
      name: "Migori",
      shortCode: "27"
    }, {
      name: "Mombasa",
      shortCode: "28"
    }, {
      name: "Murang'a",
      shortCode: "29"
    }, {
      name: "Nairobi City",
      shortCode: "30"
    }, {
      name: "Nakuru",
      shortCode: "31"
    }, {
      name: "Nandi",
      shortCode: "32"
    }, {
      name: "Narok",
      shortCode: "33"
    }, {
      name: "Nyamira",
      shortCode: "34"
    }, {
      name: "Nyandarua",
      shortCode: "35"
    }, {
      name: "Nyeri",
      shortCode: "36"
    }, {
      name: "Samburu",
      shortCode: "37"
    }, {
      name: "Siaya",
      shortCode: "38"
    }, {
      name: "Taita/Taveta",
      shortCode: "39"
    }, {
      name: "Tana River",
      shortCode: "40"
    }, {
      name: "Tharaka-Nithi",
      shortCode: "41"
    }, {
      name: "Trans Nzoia",
      shortCode: "42"
    }, {
      name: "Turkana",
      shortCode: "43"
    }, {
      name: "Uasin Gishu",
      shortCode: "44"
    }, {
      name: "Vihiga",
      shortCode: "45"
    }, {
      name: "Wajir",
      shortCode: "46"
    }, {
      name: "West Pokot",
      shortCode: "47"
    }]
  }, {
    countryName: "Kiribati",
    countryShortCode: "KI",
    regions: [{
      name: "Abaiang"
    }, {
      name: "Abemama"
    }, {
      name: "Aranuka"
    }, {
      name: "Arorae"
    }, {
      name: "Banaba"
    }, {
      name: "Beru"
    }, {
      name: "Butaritari"
    }, {
      name: "Central Gilberts"
    }, {
      name: "Gilbert Islands",
      shortCode: "G"
    }, {
      name: "Kanton"
    }, {
      name: "Kiritimati"
    }, {
      name: "Kuria"
    }, {
      name: "Line Islands",
      shortCode: "L"
    }, {
      name: "Maiana"
    }, {
      name: "Makin"
    }, {
      name: "Marakei"
    }, {
      name: "Nikunau"
    }, {
      name: "Nonouti"
    }, {
      name: "Northern Gilberts"
    }, {
      name: "Onotoa"
    }, {
      name: "Phoenix Islands",
      shortCode: "P"
    }, {
      name: "Southern Gilberts"
    }, {
      name: "Tabiteuea"
    }, {
      name: "Tabuaeran"
    }, {
      name: "Tamana"
    }, {
      name: "Tarawa"
    }, {
      name: "Teraina"
    }]
  }, {
    countryName: "Korea, Democratic People's Republic of",
    countryShortCode: "KP",
    regions: [{
      name: "Chagang-do (Chagang Province)",
      shortCode: "04"
    }, {
      name: "Hamgyong-bukto (North Hamgyong Province)",
      shortCode: "09"
    }, {
      name: "Hamgyong-namdo (South Hamgyong Province)",
      shortCode: "08"
    }, {
      name: "Hwanghae-bukto (North Hwanghae Province)",
      shortCode: "06"
    }, {
      name: "Hwanghae-namdo (South Hwanghae Province)",
      shortCode: "05"
    }, {
      name: "Kangwon-do (Kangwon Province)",
      shortCode: "07"
    }, {
      name: "Nasŏn (Najin-Sŏnbong)",
      shortCode: "13"
    }, {
      name: "P'yongan-bukto (North P'yongan Province)",
      shortCode: "03"
    }, {
      name: "P'yongan-namdo (South P'yongan Province)",
      shortCode: "02"
    }, {
      name: "P'yongyang-si (P'yongyang City)",
      shortCode: "01"
    }, {
      name: "Yanggang-do (Yanggang Province)",
      shortCode: "10"
    }]
  }, {
    countryName: "Korea, Republic of",
    countryShortCode: "KR",
    regions: [{
      name: "Ch'ungch'ongbuk-do",
      shortCode: "43"
    }, {
      name: "Ch'ungch'ongnam-do",
      shortCode: "44"
    }, {
      name: "Cheju-do",
      shortCode: "49"
    }, {
      name: "Chollabuk-do",
      shortCode: "45"
    }, {
      name: "Chollanam-do",
      shortCode: "46"
    }, {
      name: "Inch'on-Kwangyokhi",
      shortCode: "28"
    }, {
      name: "Kang-won-do",
      shortCode: "42"
    }, {
      name: "Kwangju-Kwangyokshi",
      shortCode: "28"
    }, {
      name: "Kyonggi-do",
      shortCode: "41"
    }, {
      name: "Kyongsangbuk-do",
      shortCode: "47"
    }, {
      name: "Kyongsangnam-do",
      shortCode: "48"
    }, {
      name: "Pusan-Kwangyokshi",
      shortCode: "26"
    }, {
      name: "Seoul-T'ukpyolshi",
      shortCode: "11"
    }, {
      name: "Sejong",
      shortCode: "50"
    }, {
      name: "Taegu-Kwangyokshi",
      shortCode: "27"
    }, {
      name: "Taejon-Kwangyokshi",
      shortCode: "30"
    }, {
      name: "Ulsan-Kwangyokshi",
      shortCode: "31"
    }]
  }, {
    countryName: "Kuwait",
    countryShortCode: "KW",
    regions: [{
      name: "Al Aḩmadi",
      shortCode: "AH"
    }, {
      name: "Al Farwānīyah",
      shortCode: "FA"
    }, {
      name: "Al Jahrā’",
      shortCode: "JA"
    }, {
      name: "Al ‘Āşimah",
      shortCode: "KU"
    }, {
      name: "Ḩawallī",
      shortCode: "HA"
    }, {
      name: "Mubārak al Kabir",
      shortCode: "MU"
    }]
  }, {
    countryName: "Kyrgyzstan",
    countryShortCode: "KG",
    regions: [{
      name: "Batken Oblasty",
      shortCode: "B"
    }, {
      name: "Bishkek Shaary",
      shortCode: "GB"
    }, {
      name: "Chuy Oblasty (Bishkek)",
      shortCode: "C"
    }, {
      name: "Jalal-Abad Oblasty",
      shortCode: "J"
    }, {
      name: "Naryn Oblasty",
      shortCode: "N"
    }, {
      name: "Osh Oblasty",
      shortCode: "O"
    }, {
      name: "Talas Oblasty",
      shortCode: "T"
    }, {
      name: "Ysyk-Kol Oblasty (Karakol)",
      shortCode: "Y"
    }]
  }, {
    countryName: "Laos",
    countryShortCode: "LA",
    regions: [{
      name: "Attapu",
      shortCode: "AT"
    }, {
      name: "Bokèo",
      shortCode: "BK"
    }, {
      name: "Bolikhamxai",
      shortCode: "BL"
    }, {
      name: "Champasak",
      shortCode: "CH"
    }, {
      name: "Houaphan",
      shortCode: "HO"
    }, {
      name: "Khammouan",
      shortCode: "KH"
    }, {
      name: "Louang Namtha",
      shortCode: "LM"
    }, {
      name: "Louangphabang",
      shortCode: "LP"
    }, {
      name: "Oudômxai",
      shortCode: "OU"
    }, {
      name: "Phôngsali",
      shortCode: "PH"
    }, {
      name: "Salavan",
      shortCode: "SL"
    }, {
      name: "Savannakhét",
      shortCode: "SV"
    }, {
      name: "Vientiane",
      shortCode: "VI"
    }, {
      name: "Xaignabouli",
      shortCode: "XA"
    }, {
      name: "Xékong",
      shortCode: "XE"
    }, {
      name: "Xaisomboun",
      shortCode: "XS"
    }, {
      name: "Xiangkhouang",
      shortCode: "XI"
    }]
  }, {
    countryName: "Latvia",
    countryShortCode: "LV",
    regions: [{
      name: "Aglona",
      shortCode: "001"
    }, {
      name: "Aizkraukle",
      shortCode: "002"
    }, {
      name: "Aizpute",
      shortCode: "003"
    }, {
      name: "Aknīste",
      shortCode: "004"
    }, {
      name: "Aloja",
      shortCode: "005"
    }, {
      name: "Alsunga",
      shortCode: "06"
    }, {
      name: "Alūksne",
      shortCode: "007"
    }, {
      name: "Amata",
      shortCode: "008"
    }, {
      name: "Ape",
      shortCode: "009"
    }, {
      name: "Auce",
      shortCode: "010"
    }, {
      name: "Ādaži",
      shortCode: "011"
    }, {
      name: "Babīte",
      shortCode: "012"
    }, {
      name: "Baldone",
      shortCode: "013"
    }, {
      name: "Baltinava",
      shortCode: "014"
    }, {
      name: "Balvi",
      shortCode: "015"
    }, {
      name: "Bauska",
      shortCode: "016"
    }, {
      name: "Beverīna",
      shortCode: "017"
    }, {
      name: "Brocēni",
      shortCode: "018"
    }, {
      name: "Burtnieki",
      shortCode: "019"
    }, {
      name: "Carnikava",
      shortCode: "020"
    }, {
      name: "Cesvaine",
      shortCode: "021"
    }, {
      name: "Cēsis",
      shortCode: "022"
    }, {
      name: "Cibla",
      shortCode: "023"
    }, {
      name: "Dagda",
      shortCode: "024"
    }, {
      name: "Daugavpils",
      shortCode: "025"
    }, {
      name: "Daugavpils (City)",
      shortCode: "DGV"
    }, {
      name: "Dobele",
      shortCode: "026"
    }, {
      name: "Dundaga",
      shortCode: "027"
    }, {
      name: "Durbe",
      shortCode: "028"
    }, {
      name: "Engure",
      shortCode: "029"
    }, {
      name: "Ērgļi",
      shortCode: "030"
    }, {
      name: "Garkalne",
      shortCode: "031"
    }, {
      name: "Grobiņa",
      shortCode: "032"
    }, {
      name: "Gulbene",
      shortCode: "033"
    }, {
      name: "Iecava",
      shortCode: "034"
    }, {
      name: "Ikšķile",
      shortCode: "035"
    }, {
      name: "Ilūkste",
      shortCode: "036"
    }, {
      name: "Inčukalns",
      shortCode: "037"
    }, {
      name: "Jaunjelgava",
      shortCode: "038"
    }, {
      name: "Jaunpiebalga",
      shortCode: "039"
    }, {
      name: "Jaunpils",
      shortCode: "040"
    }, {
      name: "Jelgava",
      shortCode: "041"
    }, {
      name: "Jelgava (City)",
      shortCode: "JEL"
    }, {
      name: "Jēkabpils",
      shortCode: "042"
    }, {
      name: "Jēkabpils (City)",
      shortCode: "JKB"
    }, {
      name: "Jūrmala (City)",
      shortCode: "JUR"
    }, {
      name: "Kandava",
      shortCode: "043"
    }, {
      name: "Kārsava",
      shortCode: "044"
    }, {
      name: "Kocēni",
      shortCode: "045"
    }, {
      name: "Koknese",
      shortCode: "046"
    }, {
      name: "Krāslava",
      shortCode: "047"
    }, {
      name: "Krimulda",
      shortCode: "048"
    }, {
      name: "Krustpils",
      shortCode: "049"
    }, {
      name: "Kuldīga",
      shortCode: "050"
    }, {
      name: "Ķegums",
      shortCode: "051"
    }, {
      name: "Ķekava",
      shortCode: "052"
    }, {
      name: "Lielvārde",
      shortCode: "053"
    }, {
      name: "Liepāja",
      shortCode: "LPX"
    }, {
      name: "Limbaži",
      shortCode: "054"
    }, {
      name: "Līgatne",
      shortCode: "055"
    }, {
      name: "Līvāni",
      shortCode: "056"
    }, {
      name: "Lubāna",
      shortCode: "057"
    }, {
      name: "Ludza",
      shortCode: "058"
    }, {
      name: "Madona",
      shortCode: "059"
    }, {
      name: "Mazsalaca",
      shortCode: "060"
    }, {
      name: "Mālpils",
      shortCode: "061"
    }, {
      name: "Mārupe",
      shortCode: "062"
    }, {
      name: "Mērsrags",
      shortCode: "063"
    }, {
      name: "Naukšēni",
      shortCode: "064"
    }, {
      name: "Nereta",
      shortCode: "065"
    }, {
      name: "Nīca",
      shortCode: "066"
    }, {
      name: "Ogre",
      shortCode: "067"
    }, {
      name: "Olaine",
      shortCode: "068"
    }, {
      name: "Ozolnieki",
      shortCode: "069"
    }, {
      name: "Pārgauja",
      shortCode: "070"
    }, {
      name: "Pāvilosta",
      shortCode: "071"
    }, {
      name: "Pļaviņas",
      shortCode: "072"
    }, {
      name: "Preiļi",
      shortCode: "073"
    }, {
      name: "Priekule",
      shortCode: "074"
    }, {
      name: "Priekuļi",
      shortCode: "075"
    }, {
      name: "Rauna",
      shortCode: "076"
    }, {
      name: "Rēzekne",
      shortCode: "077"
    }, {
      name: "Rēzekne (City)",
      shortCode: "REZ"
    }, {
      name: "Riebiņi",
      shortCode: "078"
    }, {
      name: "Rīga",
      shortCode: "RIX"
    }, {
      name: "Roja",
      shortCode: "079"
    }, {
      name: "Ropaži",
      shortCode: "080"
    }, {
      name: "Rucava",
      shortCode: "081"
    }, {
      name: "Rugāji",
      shortCode: "082"
    }, {
      name: "Rundāle",
      shortCode: "083"
    }, {
      name: "Rūjiena",
      shortCode: "084"
    }, {
      name: "Sala",
      shortCode: "085"
    }, {
      name: "Salacgrīva",
      shortCode: "086"
    }, {
      name: "Salaspils",
      shortCode: "087"
    }, {
      name: "Saldus",
      shortCode: "088"
    }, {
      name: "Saulkrasti",
      shortCode: "089"
    }, {
      name: "Sēja",
      shortCode: "090"
    }, {
      name: "Sigulda",
      shortCode: "091"
    }, {
      name: "Skrīveri",
      shortCode: "092"
    }, {
      name: "Skrunda",
      shortCode: "093"
    }, {
      name: "Smiltene",
      shortCode: "094"
    }, {
      name: "Stopiņi",
      shortCode: "095"
    }, {
      name: "Strenči",
      shortCode: "096"
    }, {
      name: "Talsi",
      shortCode: "097"
    }, {
      name: "Tērvete",
      shortCode: "098"
    }, {
      name: "Tukums",
      shortCode: "099"
    }, {
      name: "Vaiņode",
      shortCode: "100"
    }, {
      name: "Valka",
      shortCode: "101"
    }, {
      name: "Valmiera",
      shortCode: "VMR"
    }, {
      name: "Varakļāni",
      shortCode: "102"
    }, {
      name: "Vārkava",
      shortCode: "103"
    }, {
      name: "Vecpiebalga",
      shortCode: "104"
    }, {
      name: "Vecumnieki",
      shortCode: "105"
    }, {
      name: "Ventspils",
      shortCode: "106"
    }, {
      name: "Ventspils (City)",
      shortCode: "VEN"
    }, {
      name: "Viesīte",
      shortCode: "107"
    }, {
      name: "Viļaka",
      shortCode: "108"
    }, {
      name: "Viļāni",
      shortCode: "109"
    }, {
      name: "Zilupe",
      shortCode: "110"
    }]
  }, {
    countryName: "Lebanon",
    countryShortCode: "LB",
    regions: [{
      name: "Aakkâr",
      shortCode: "AK"
    }, {
      name: "Baalbelk-Hermel",
      shortCode: "BH"
    }, {
      name: "Béqaa",
      shortCode: "BI"
    }, {
      name: "Beyrouth",
      shortCode: "BA"
    }, {
      name: "Liban-Nord",
      shortCode: "AS"
    }, {
      name: "Liban-Sud",
      shortCode: "JA"
    }, {
      name: "Mont-Liban",
      shortCode: "JL"
    }, {
      name: "Nabatîyé",
      shortCode: "NA"
    }]
  }, {
    countryName: "Lesotho",
    countryShortCode: "LS",
    regions: [{
      name: "Berea",
      shortCode: "D"
    }, {
      name: "Butha-Buthe",
      shortCode: "B"
    }, {
      name: "Leribe",
      shortCode: "C"
    }, {
      name: "Mafeteng",
      shortCode: "E"
    }, {
      name: "Maseru",
      shortCode: "A"
    }, {
      name: "Mohales Hoek",
      shortCode: "F"
    }, {
      name: "Mokhotlong",
      shortCode: "J"
    }, {
      name: "Qacha's Nek",
      shortCode: "H"
    }, {
      name: "Quthing",
      shortCode: "G"
    }, {
      name: "Thaba-Tseka",
      shortCode: "K"
    }]
  }, {
    countryName: "Liberia",
    countryShortCode: "LR",
    regions: [{
      name: "Bomi",
      shortCode: "BM"
    }, {
      name: "Bong",
      shortCode: "BG"
    }, {
      name: "Gbarpolu",
      shortCode: "GP"
    }, {
      name: "Grand Bassa",
      shortCode: "GB"
    }, {
      name: "Grand Cape Mount",
      shortCode: "CM"
    }, {
      name: "Grand Gedeh",
      shortCode: "GG"
    }, {
      name: "Grand Kru",
      shortCode: "GK"
    }, {
      name: "Lofa",
      shortCode: "LO"
    }, {
      name: "Margibi",
      shortCode: "MG"
    }, {
      name: "Maryland",
      shortCode: "MY"
    }, {
      name: "Montserrado",
      shortCode: "MO"
    }, {
      name: "Nimba",
      shortCode: "NI"
    }, {
      name: "River Cess",
      shortCode: "RI"
    }, {
      name: "River Geee",
      shortCode: "RG"
    }, {
      name: "Sinoe",
      shortCode: "SI"
    }]
  }, {
    countryName: "Libya",
    countryShortCode: "LY",
    regions: [{
      name: "Al Buţnān",
      shortCode: "BU"
    }, {
      name: "Al Jabal al Akhḑar",
      shortCode: "JA"
    }, {
      name: "Al Jabal al Gharbī",
      shortCode: "JG"
    }, {
      name: "Al Jafārah",
      shortCode: "JA"
    }, {
      name: "Al Jufrah",
      shortCode: "JU"
    }, {
      name: "Al Kufrah",
      shortCode: "FK"
    }, {
      name: "Al Marj",
      shortCode: "MJ"
    }, {
      name: "Al Marquab",
      shortCode: "MB"
    }, {
      name: "Al Wāḩāt",
      shortCode: "WA"
    }, {
      name: "An Nuqaţ al Khams",
      shortCode: "NQ"
    }, {
      name: "Az Zāwiyah",
      shortCode: "ZA"
    }, {
      name: "Banghāzī",
      shortCode: "BA"
    }, {
      name: "Darnah",
      shortCode: "DR"
    }, {
      name: "Ghāt",
      shortCode: "GH"
    }, {
      name: "Mişrātah",
      shortCode: "MI"
    }, {
      name: "Murzuq",
      shortCode: "MQ"
    }, {
      name: "Nālūt",
      shortCode: "NL"
    }, {
      name: "Sabhā",
      shortCode: "SB"
    }, {
      name: "Surt",
      shortCode: "SR"
    }, {
      name: "Ţarābulus",
      shortCode: "TB"
    }, {
      name: "Yafran",
      shortCode: "WD"
    }, {
      name: "Wādī ash Shāţiʾ",
      shortCode: "WS"
    }]
  }, {
    countryName: "Liechtenstein",
    countryShortCode: "LI",
    regions: [{
      name: "Balzers",
      shortCode: "01"
    }, {
      name: "Eschen",
      shortCode: "02"
    }, {
      name: "Gamprin",
      shortCode: "03"
    }, {
      name: "Mauren",
      shortCode: "04"
    }, {
      name: "Planken",
      shortCode: "05"
    }, {
      name: "Ruggell",
      shortCode: "06"
    }, {
      name: "Schaan",
      shortCode: "07"
    }, {
      name: "Schellenberg",
      shortCode: "08"
    }, {
      name: "Triesen",
      shortCode: "09"
    }, {
      name: "Triesenberg",
      shortCode: "10"
    }, {
      name: "Vaduz",
      shortCode: "11"
    }]
  }, {
    countryName: "Lithuania",
    countryShortCode: "LT",
    regions: [{
      name: "Alytaus",
      shortCode: "AL"
    }, {
      name: "Kauno",
      shortCode: "KU"
    }, {
      name: "Klaipėdos",
      shortCode: "KL"
    }, {
      name: "Marijampolės",
      shortCode: "MR"
    }, {
      name: "Panevėžio",
      shortCode: "PN"
    }, {
      name: "Šiaulių",
      shortCode: "SA"
    }, {
      name: "Tauragės",
      shortCode: "TA"
    }, {
      name: "Telšių",
      shortCode: "TE"
    }, {
      name: "Utenos",
      shortCode: "UT"
    }, {
      name: "Vilniaus",
      shortCode: "VL"
    }]
  }, {
    countryName: "Luxembourg",
    countryShortCode: "LU",
    regions: [{
      name: "Capellen",
      shortCode: "CA"
    }, {
      name: "Clevaux",
      shortCode: "CL"
    }, {
      name: "Diekirch",
      shortCode: "DI"
    }, {
      name: "Echternach",
      shortCode: "EC"
    }, {
      name: "Esch-sur-Alzette",
      shortCode: "ES"
    }, {
      name: "Grevenmacher",
      shortCode: "GR"
    }, {
      name: "Luxembourg",
      shortCode: "LU"
    }, {
      name: "Mersch",
      shortCode: "ME"
    }, {
      name: "Redange",
      shortCode: "RD"
    }, {
      name: "Remich",
      shortCode: "RM"
    }, {
      name: "Vianden",
      shortCode: "VD"
    }, {
      name: "Wiltz",
      shortCode: "WI"
    }]
  }, {
    countryName: "Macao",
    countryShortCode: "MO",
    regions: [{
      name: "Macao"
    }]
  }, {
    countryName: "Macedonia, Republic of",
    countryShortCode: "MK",
    regions: [{
      name: "Aračinovo",
      shortCode: "02"
    }, {
      name: "Berovo",
      shortCode: "03"
    }, {
      name: "Bitola",
      shortCode: "04"
    }, {
      name: "Bogdanci",
      shortCode: "05"
    }, {
      name: "Bogovinje",
      shortCode: "06"
    }, {
      name: "Bosilovo",
      shortCode: "07"
    }, {
      name: "Brvenica",
      shortCode: "08"
    }, {
      name: "Centar Župa",
      shortCode: "78"
    }, {
      name: "Čaška",
      shortCode: "08"
    }, {
      name: "Češinovo-Obleševo",
      shortCode: "81"
    }, {
      name: "Čučer Sandevo",
      shortCode: "82"
    }, {
      name: "Debar",
      shortCode: "21"
    }, {
      name: "Debarca",
      shortCode: "22"
    }, {
      name: "Delčevo",
      shortCode: "23"
    }, {
      name: "Demir Hisar",
      shortCode: "25"
    }, {
      name: "Demir Kapija",
      shortCode: "24"
    }, {
      name: "Doran",
      shortCode: "26"
    }, {
      name: "Dolneni",
      shortCode: "27"
    }, {
      name: "Gevgelija",
      shortCode: "18"
    }, {
      name: "Gostivar",
      shortCode: "19"
    }, {
      name: "Gradsko",
      shortCode: "20"
    }, {
      name: "Ilinden",
      shortCode: "34"
    }, {
      name: "Jegunovce",
      shortCode: "35"
    }, {
      name: "Karbinci",
      shortCode: "37"
    }, {
      name: "Kavadarci",
      shortCode: "36"
    }, {
      name: "Kičevo",
      shortCode: "40"
    }, {
      name: "Kočani",
      shortCode: "42"
    }, {
      name: "Konče",
      shortCode: "41"
    }, {
      name: "Kratovo",
      shortCode: "43"
    }, {
      name: "Kriva Palanka",
      shortCode: "44"
    }, {
      name: "Krivogaštani",
      shortCode: "45"
    }, {
      name: "Kruševo",
      shortCode: "46"
    }, {
      name: "Kumanovo",
      shortCode: "47"
    }, {
      name: "Lipkovo",
      shortCode: "48"
    }, {
      name: "Lozovo",
      shortCode: "49"
    }, {
      name: "Makedonska Kamenica",
      shortCode: "51"
    }, {
      name: "Makedonski Brod",
      shortCode: "52"
    }, {
      name: "Mavrovo i Rostuša",
      shortCode: "50"
    }, {
      name: "Mogila",
      shortCode: "53"
    }, {
      name: "Negotino",
      shortCode: "54"
    }, {
      name: "Novaci",
      shortCode: "55"
    }, {
      name: "Novo Selo",
      shortCode: "56"
    }, {
      name: "Ohrid",
      shortCode: "58"
    }, {
      name: "Pehčevo",
      shortCode: "60"
    }, {
      name: "Petrovec",
      shortCode: "59"
    }, {
      name: "Plasnica",
      shortCode: "61"
    }, {
      name: "Prilep",
      shortCode: "62"
    }, {
      name: "Probištip",
      shortCode: "63"
    }, {
      name: "Radoviš",
      shortCode: ""
    }, {
      name: "Rankovce",
      shortCode: "65"
    }, {
      name: "Resen",
      shortCode: "66"
    }, {
      name: "Rosoman",
      shortCode: "67"
    }, {
      name: "Skopje",
      shortCode: "85"
    }, {
      name: "Sopište",
      shortCode: "70"
    }, {
      name: "Staro Nagoričane",
      shortCode: "71"
    }, {
      name: "Struga",
      shortCode: "72"
    }, {
      name: "Strumica",
      shortCode: "73"
    }, {
      name: "Studeničani",
      shortCode: "74"
    }, {
      name: "Sveti Nikole",
      shortCode: "69"
    }, {
      name: "Štip",
      shortCode: "83"
    }, {
      name: "Tearce",
      shortCode: "75"
    }, {
      name: "Tetovo",
      shortCode: "76"
    }, {
      name: "Valandovo",
      shortCode: "10"
    }, {
      name: "Vasilevo",
      shortCode: "11"
    }, {
      name: "Veles",
      shortCode: "13"
    }, {
      name: "Vevčani",
      shortCode: "12"
    }, {
      name: "Vinica",
      shortCode: "14"
    }, {
      name: "Vrapčište",
      shortCode: "16"
    }, {
      name: "Zelenikovo",
      shortCode: "32"
    }, {
      name: "Zrnovci",
      shortCode: "33"
    }, {
      name: "Želino",
      shortCode: "30"
    }]
  }, {
    countryName: "Madagascar",
    countryShortCode: "MG",
    regions: [{
      name: "Antananarivo",
      shortCode: "T"
    }, {
      name: "Antsiranana",
      shortCode: "D"
    }, {
      name: "Fianarantsoa",
      shortCode: "F"
    }, {
      name: "Mahajanga",
      shortCode: "M"
    }, {
      name: "Toamasina",
      shortCode: "A"
    }, {
      name: "Toliara",
      shortCode: "U"
    }]
  }, {
    countryName: "Malawi",
    countryShortCode: "MW",
    regions: [{
      name: "Balaka",
      shortCode: "BA"
    }, {
      name: "Blantyre",
      shortCode: "BL"
    }, {
      name: "Chikwawa",
      shortCode: "CK"
    }, {
      name: "Chiradzulu",
      shortCode: "CR"
    }, {
      name: "Chitipa",
      shortCode: "CT"
    }, {
      name: "Dedza",
      shortCode: "DE"
    }, {
      name: "Dowa",
      shortCode: "DO"
    }, {
      name: "Karonga",
      shortCode: "KR"
    }, {
      name: "Kasungu",
      shortCode: "KS"
    }, {
      name: "Likoma",
      shortCode: "LK"
    }, {
      name: "Lilongwe",
      shortCode: "LI"
    }, {
      name: "Machinga",
      shortCode: "MH"
    }, {
      name: "Mangochi",
      shortCode: "MG"
    }, {
      name: "Mchinji",
      shortCode: "MC"
    }, {
      name: "Mulanje",
      shortCode: "MU"
    }, {
      name: "Mwanza",
      shortCode: "MW"
    }, {
      name: "Mzimba",
      shortCode: "MZ"
    }, {
      name: "Nkhata Bay",
      shortCode: "NE"
    }, {
      name: "Nkhotakota",
      shortCode: "NB"
    }, {
      name: "Nsanje",
      shortCode: "NS"
    }, {
      name: "Ntcheu",
      shortCode: "NU"
    }, {
      name: "Ntchisi",
      shortCode: "NI"
    }, {
      name: "Phalombe",
      shortCode: "PH"
    }, {
      name: "Rumphi",
      shortCode: "RU"
    }, {
      name: "Salima",
      shortCode: "SA"
    }, {
      name: "Thyolo",
      shortCode: "TH"
    }, {
      name: "Zomba",
      shortCode: "ZO"
    }]
  }, {
    countryName: "Malaysia",
    countryShortCode: "MY",
    regions: [{
      name: "Johor",
      shortCode: "01"
    }, {
      name: "Kedah",
      shortCode: "02"
    }, {
      name: "Kelantan",
      shortCode: "03"
    }, {
      name: "Melaka",
      shortCode: "04"
    }, {
      name: "Negeri Sembilan",
      shortCode: "05"
    }, {
      name: "Pahang",
      shortCode: "06"
    }, {
      name: "Perak",
      shortCode: "08"
    }, {
      name: "Perlis",
      shortCode: "09"
    }, {
      name: "Pulau Pinang",
      shortCode: "07"
    }, {
      name: "Sabah",
      shortCode: "12"
    }, {
      name: "Sarawak",
      shortCode: "13"
    }, {
      name: "Selangor",
      shortCode: "10"
    }, {
      name: "Terengganu",
      shortCode: "11"
    }, {
      name: "Wilayah Persekutuan (Kuala Lumpur)",
      shortCode: "14"
    }, {
      name: "Wilayah Persekutuan (Labuan)",
      shortCode: "15"
    }, {
      name: "Wilayah Persekutuan (Putrajaya)",
      shortCode: "16"
    }]
  }, {
    countryName: "Maldives",
    countryShortCode: "MV",
    regions: [{
      name: "Alifu Alifu",
      shortCode: "02"
    }, {
      name: "Alifu Dhaalu",
      shortCode: "00"
    }, {
      name: "Baa",
      shortCode: "20"
    }, {
      name: "Dhaalu",
      shortCode: "17"
    }, {
      name: "Faafu",
      shortCode: "14"
    }, {
      name: "Gaafu Alifu",
      shortCode: "27"
    }, {
      name: "Gaafu Dhaalu",
      shortCode: "28"
    }, {
      name: "Gnaviyani",
      shortCode: "29"
    }, {
      name: "Haa Alifu",
      shortCode: "07"
    }, {
      name: "Haa Dhaalu",
      shortCode: "23"
    }, {
      name: "Kaafu",
      shortCode: "29"
    }, {
      name: "Laamu",
      shortCode: "05"
    }, {
      name: "Lhaviyani",
      shortCode: "03"
    }, {
      name: "Malé",
      shortCode: "MLE"
    }, {
      name: "Meemu",
      shortCode: "12"
    }, {
      name: "Noonu",
      shortCode: "25"
    }, {
      name: "Raa",
      shortCode: "13"
    }, {
      name: "Seenu",
      shortCode: "01"
    }, {
      name: "Shaviyani",
      shortCode: "24"
    }, {
      name: "Thaa",
      shortCode: "08"
    }, {
      name: "Vaavu",
      shortCode: "04"
    }]
  }, {
    countryName: "Mali",
    countryShortCode: "ML",
    regions: [{
      name: "Bamako",
      shortCode: "BKO"
    }, {
      name: "Gao",
      shortCode: "7"
    }, {
      name: "Kayes",
      shortCode: "1"
    }, {
      name: "Kidal",
      shortCode: "8"
    }, {
      name: "Koulikoro",
      shortCode: "2"
    }, {
      name: "Mopti",
      shortCode: "5"
    }, {
      name: "Segou",
      shortCode: "4"
    }, {
      name: "Sikasso",
      shortCode: "3"
    }, {
      name: "Tombouctou",
      shortCode: "6"
    }]
  }, {
    countryName: "Malta",
    countryShortCode: "MT",
    regions: [{
      name: "Attard",
      shortCode: "01"
    }, {
      name: "Balzan",
      shortCode: "02"
    }, {
      name: "Birgu",
      shortCode: "03"
    }, {
      name: "Birkirkara",
      shortCode: "04"
    }, {
      name: "Birżebbuġa",
      shortCode: "05"
    }, {
      name: "Bormla",
      shortCode: "06"
    }, {
      name: "Dingli",
      shortCode: "07"
    }, {
      name: "Fgura",
      shortCode: "08"
    }, {
      name: "Floriana",
      shortCode: "09"
    }, {
      name: "Fontana",
      shortCode: "10"
    }, {
      name: "Guda",
      shortCode: "11"
    }, {
      name: "Gżira",
      shortCode: "12"
    }, {
      name: "Għajnsielem",
      shortCode: "13"
    }, {
      name: "Għarb",
      shortCode: "14"
    }, {
      name: "Għargħur",
      shortCode: "15"
    }, {
      name: "Għasri",
      shortCode: "16"
    }, {
      name: "Għaxaq",
      shortCode: "17"
    }, {
      name: "Ħamrun",
      shortCode: "18"
    }, {
      name: "Iklin",
      shortCode: "19"
    }, {
      name: "Isla",
      shortCode: "20"
    }, {
      name: "Kalkara",
      shortCode: "21"
    }, {
      name: "Kerċem",
      shortCode: "22"
    }, {
      name: "Kirkop",
      shortCode: "23"
    }, {
      name: "Lija",
      shortCode: "24"
    }, {
      name: "Luqa",
      shortCode: "25"
    }, {
      name: "Marsa",
      shortCode: "26"
    }, {
      name: "Marsaskala",
      shortCode: "27"
    }, {
      name: "Marsaxlokk",
      shortCode: "28"
    }, {
      name: "Mdina",
      shortCode: "29"
    }, {
      name: "Mellieħa",
      shortCode: "30"
    }, {
      name: "Mġarr",
      shortCode: "31"
    }, {
      name: "Mosta",
      shortCode: "32"
    }, {
      name: "Mqabba",
      shortCode: "33"
    }, {
      name: "Msida",
      shortCode: "34"
    }, {
      name: "Mtarfa",
      shortCode: "35"
    }, {
      name: "Munxar",
      shortCode: "36"
    }, {
      name: "Nadur",
      shortCode: "37"
    }, {
      name: "Naxxar",
      shortCode: "38"
    }, {
      name: "Paola",
      shortCode: "39"
    }, {
      name: "Pembroke",
      shortCode: "40"
    }, {
      name: "Pietà",
      shortCode: "41"
    }, {
      name: "Qala",
      shortCode: "42"
    }, {
      name: "Qormi",
      shortCode: "43"
    }, {
      name: "Qrendi",
      shortCode: "44"
    }, {
      name: "Rabat Għawdex",
      shortCode: "45"
    }, {
      name: "Rabat Malta",
      shortCode: "46"
    }, {
      name: "Safi",
      shortCode: "47"
    }, {
      name: "San Ġiljan",
      shortCode: "48"
    }, {
      name: "San Ġwann",
      shortCode: "49"
    }, {
      name: "San Lawrenz",
      shortCode: "50"
    }, {
      name: "San Pawl il-Baħar",
      shortCode: "51"
    }, {
      name: "Sannat",
      shortCode: "52"
    }, {
      name: "Santa Luċija",
      shortCode: "53"
    }, {
      name: "Santa Venera",
      shortCode: "54"
    }, {
      name: "Siġġiewi",
      shortCode: "55"
    }, {
      name: "Sliema",
      shortCode: "56"
    }, {
      name: "Swieqi",
      shortCode: "57"
    }, {
      name: "Tai Xbiex",
      shortCode: "58"
    }, {
      name: "Tarzien",
      shortCode: "59"
    }, {
      name: "Valletta",
      shortCode: "60"
    }, {
      name: "Xagħra",
      shortCode: "61"
    }, {
      name: "Xewkija",
      shortCode: "62"
    }, {
      name: "Xgħajra",
      shortCode: "63"
    }, {
      name: "Żabbar",
      shortCode: "64"
    }, {
      name: "Żebbuġ Għawde",
      shortCode: "65"
    }, {
      name: "Żebbuġ Malta",
      shortCode: "66"
    }, {
      name: "Żejtun",
      shortCode: "67"
    }, {
      name: "Żurrieq",
      shortCode: "68"
    }]
  }, {
    countryName: "Marshall Islands",
    countryShortCode: "MH",
    regions: [{
      name: "Ailinglaplap",
      shortCode: "ALL"
    }, {
      name: "Ailuk",
      shortCode: "ALK"
    }, {
      name: "Arno",
      shortCode: "ARN"
    }, {
      name: "Aur",
      shortCode: "AUR"
    }, {
      name: "Bikini and Kili",
      shortCode: "KIL"
    }, {
      name: "Ebon",
      shortCode: "EBO"
    }, {
      name: "Jabat",
      shortCode: "JAB"
    }, {
      name: "Jaluit",
      shortCode: "JAL"
    }, {
      name: "Kwajalein",
      shortCode: "KWA"
    }, {
      name: "Lae",
      shortCode: "LAE"
    }, {
      name: "Lib",
      shortCode: "LIB"
    }, {
      name: "Likiep",
      shortCode: "LIK"
    }, {
      name: "Majuro",
      shortCode: "MAJ"
    }, {
      name: "Maloelap",
      shortCode: "MAL"
    }, {
      name: "Mejit",
      shortCode: "MEJ"
    }, {
      name: "Namdrik",
      shortCode: "NMK"
    }, {
      name: "Namu",
      shortCode: "NMU"
    }, {
      name: "Rongelap",
      shortCode: "RON"
    }, {
      name: "Ujae",
      shortCode: "UJA"
    }, {
      name: "Utrik",
      shortCode: "UTI"
    }, {
      name: "Wotho",
      shortCode: "WTH"
    }, {
      name: "Wotje",
      shortCode: "WTJ"
    }]
  }, {
    countryName: "Martinique",
    countryShortCode: "MQ",
    regions: [{
      name: "Martinique"
    }]
  }, {
    countryName: "Mauritania",
    countryShortCode: "MR",
    regions: [{
      name: "Adrar",
      shortCode: "07"
    }, {
      name: "Assaba",
      shortCode: "03"
    }, {
      name: "Brakna",
      shortCode: "05"
    }, {
      name: "Dakhlet Nouadhibou",
      shortCode: "08"
    }, {
      name: "Gorgol",
      shortCode: "04"
    }, {
      name: "Guidimaka",
      shortCode: "10"
    }, {
      name: "Hodh Ech Chargui",
      shortCode: "01"
    }, {
      name: "Hodh El Gharbi",
      shortCode: "02"
    }, {
      name: "Inchiri",
      shortCode: "12"
    }, {
      name: "Nouakchott Nord",
      shortCode: "14"
    }, {
      name: "Nouakchott Ouest",
      shortCode: "13"
    }, {
      name: "Nouakchott Sud",
      shortCode: "15"
    }, {
      name: "Tagant",
      shortCode: "09"
    }, {
      name: "Tiris Zemmour",
      shortCode: "11"
    }, {
      name: "Trarza",
      shortCode: "06"
    }]
  }, {
    countryName: "Mauritius",
    countryShortCode: "MU",
    regions: [{
      name: "Agalega Islands",
      shortCode: "AG"
    }, {
      name: "Beau Bassin-Rose Hill",
      shortCode: "BR"
    }, {
      name: "Black River",
      shortCode: "BL"
    }, {
      name: "Cargados Carajos Shoals",
      shortCode: "CC"
    }, {
      name: "Curepipe",
      shortCode: "CU"
    }, {
      name: "Flacq",
      shortCode: "FL"
    }, {
      name: "Grand Port",
      shortCode: "GP"
    }, {
      name: "Moka",
      shortCode: "MO"
    }, {
      name: "Pamplemousses",
      shortCode: "PA"
    }, {
      name: "Plaines Wilhems",
      shortCode: "PW"
    }, {
      name: "Port Louis (City)",
      shortCode: "PU"
    }, {
      name: "Port Louis",
      shortCode: "PL"
    }, {
      name: "Riviere du Rempart",
      shortCode: "RR"
    }, {
      name: "Rodrigues Island",
      shortCode: "RO"
    }, {
      name: "Savanne",
      shortCode: "SA"
    }, {
      name: "Vacoas-Phoenix",
      shortCode: "CP"
    }]
  }, {
    countryName: "Mayotte",
    countryShortCode: "YT",
    regions: [{
      name: "Dzaoudzi",
      shortCode: "01"
    }, {
      name: "Pamandzi",
      shortCode: "02"
    }, {
      name: "Mamoudzou",
      shortCode: "03"
    }, {
      name: "Dembeni",
      shortCode: "04"
    }, {
      name: "Bandrélé",
      shortCode: "05"
    }, {
      name: "Kani-Kéli",
      shortCode: "06"
    }, {
      name: "Bouéni",
      shortCode: "07"
    }, {
      name: "Chirongui",
      shortCode: "08"
    }, {
      name: "Sada",
      shortCode: "09"
    }, {
      name: "Ouangani",
      shortCode: "10"
    }, {
      name: "Chiconi",
      shortCode: "11"
    }, {
      name: "Tsingoni",
      shortCode: "12"
    }, {
      name: "M'Tsangamouji",
      shortCode: "13"
    }, {
      name: "Acoua",
      shortCode: "14"
    }, {
      name: "Mtsamboro",
      shortCode: "15"
    }, {
      name: "Bandraboua",
      shortCode: "16"
    }, {
      name: "Koungou",
      shortCode: "17"
    }]
  }, {
    countryName: "Mexico",
    countryShortCode: "MX",
    regions: [{
      name: "Aguascalientes",
      shortCode: "AGU"
    }, {
      name: "Baja California",
      shortCode: "BCN"
    }, {
      name: "Baja California Sur",
      shortCode: "BCS"
    }, {
      name: "Campeche",
      shortCode: "CAM"
    }, {
      name: "Ciudad de México",
      shortCode: "DIF"
    }, {
      name: "Chiapas",
      shortCode: "CHP"
    }, {
      name: "Chihuahua",
      shortCode: "CHH"
    }, {
      name: "Coahuila de Zaragoza",
      shortCode: "COA"
    }, {
      name: "Colima",
      shortCode: "COL"
    }, {
      name: "Durango",
      shortCode: "DUR"
    }, {
      name: "Estado de México",
      shortCode: "MEX"
    }, {
      name: "Guanajuato",
      shortCode: "GUA"
    }, {
      name: "Guerrero",
      shortCode: "GRO"
    }, {
      name: "Hidalgo",
      shortCode: "HID"
    }, {
      name: "Jalisco",
      shortCode: "JAL"
    }, {
      name: "Michoacán de Ocampo",
      shortCode: "MIC"
    }, {
      name: "Morelos",
      shortCode: "MOR"
    }, {
      name: "Nayarit",
      shortCode: "NAY"
    }, {
      name: "Nuevo León",
      shortCode: "NLE"
    }, {
      name: "Oaxaca",
      shortCode: "OAX"
    }, {
      name: "Puebla",
      shortCode: "PUE"
    }, {
      name: "Querétaro de Arteaga",
      shortCode: "QUE"
    }, {
      name: "Quintana Roo",
      shortCode: "ROO"
    }, {
      name: "San Luis Potosí",
      shortCode: "SLP"
    }, {
      name: "Sinaloa",
      shortCode: "SIN"
    }, {
      name: "Sonora",
      shortCode: "SON"
    }, {
      name: "Tabasco",
      shortCode: "TAB"
    }, {
      name: "Tamaulipas",
      shortCode: "TAM"
    }, {
      name: "Tlaxcala",
      shortCode: "TLA"
    }, {
      name: "Veracruz",
      shortCode: "VER"
    }, {
      name: "Yucatán",
      shortCode: "YUC"
    }, {
      name: "Zacatecas",
      shortCode: "ZAC"
    }]
  }, {
    countryName: "Micronesia, Federated States of",
    countryShortCode: "FM",
    regions: [{
      name: "Chuuk (Truk)",
      shortCode: "TRK"
    }, {
      name: "Kosrae",
      shortCode: "KSA"
    }, {
      name: "Pohnpei",
      shortCode: "PNI"
    }, {
      name: "Yap",
      shortCode: "YAP"
    }]
  }, {
    countryName: "Moldova",
    countryShortCode: "MD",
    regions: [{
      name: "Aenii Noi",
      shortCode: "AN"
    }, {
      name: "Basarabeasca",
      shortCode: "BS"
    }, {
      name: "Bălți",
      shortCode: "BA"
    }, {
      name: "Bender",
      shortCode: "BD"
    }, {
      name: "Briceni",
      shortCode: "BR"
    }, {
      name: "Cahul",
      shortCode: "CA"
    }, {
      name: "Cantemir",
      shortCode: "CT"
    }, {
      name: "Călărași",
      shortCode: "CL"
    }, {
      name: "Căușeni",
      shortCode: "CS"
    }, {
      name: "Chișinău",
      shortCode: "CU"
    }, {
      name: "Cimișlia",
      shortCode: "CM"
    }, {
      name: "Criuleni",
      shortCode: "CR"
    }, {
      name: "Dondușeni",
      shortCode: "DO"
    }, {
      name: "Drochia",
      shortCode: "DR"
    }, {
      name: "Dubăsari",
      shortCode: "DU"
    }, {
      name: "Edineț",
      shortCode: "ED"
    }, {
      name: "Fălești",
      shortCode: "FA"
    }, {
      name: "Florești",
      shortCode: "FL"
    }, {
      name: "Găgăuzia",
      shortCode: "GA"
    }, {
      name: "Glodeni",
      shortCode: "GL"
    }, {
      name: "Hîncești",
      shortCode: "HI"
    }, {
      name: "Ialoveni",
      shortCode: "IA"
    }, {
      name: "Leova",
      shortCode: "LE"
    }, {
      name: "Nisporeni",
      shortCode: "NI"
    }, {
      name: "Ocnița",
      shortCode: "OC"
    }, {
      name: "Orhei",
      shortCode: "OR"
    }, {
      name: "Rezina",
      shortCode: "RE"
    }, {
      name: "Rîșcani",
      shortCode: "RI"
    }, {
      name: "Sîngerei",
      shortCode: "SI"
    }, {
      name: "Soroca",
      shortCode: "SO"
    }, {
      name: "Stînga Nistrului",
      shortCode: "SN"
    }, {
      name: "Strășeni",
      shortCode: "ST"
    }, {
      name: "Șoldănești",
      shortCode: "SD"
    }, {
      name: "Ștefan Vodă",
      shortCode: "SV"
    }, {
      name: "Taraclia",
      shortCode: "TA"
    }, {
      name: "Telenești",
      shortCode: "TE"
    }, {
      name: "Ungheni",
      shortCode: "UN"
    }]
  }, {
    countryName: "Monaco",
    countryShortCode: "MC",
    regions: [{
      name: "Colle",
      shortCode: "CL"
    }, {
      name: "Condamine",
      shortCode: "CO"
    }, {
      name: "Fontvieille",
      shortCode: "FO"
    }, {
      name: "Gare",
      shortCode: "GA"
    }, {
      name: "Jardin Exotique",
      shortCode: "JE"
    }, {
      name: "Larvotto",
      shortCode: "LA"
    }, {
      name: "Malbousquet",
      shortCode: "MA"
    }, {
      name: "Monaco-Ville",
      shortCode: "MO"
    }, {
      name: "Moneghetti",
      shortCode: "MG"
    }, {
      name: "Monte-Carlo",
      shortCode: "MC"
    }, {
      name: "Moulins",
      shortCode: "MU"
    }, {
      name: "Port-Hercule",
      shortCode: "PH"
    }, {
      name: "Saint-Roman",
      shortCode: "SR"
    }, {
      name: "Sainte-Dévote",
      shortCode: "SD"
    }, {
      name: "Source",
      shortCode: "SO"
    }, {
      name: "Spélugues",
      shortCode: "SP"
    }, {
      name: "Vallon de la Rousse",
      shortCode: "VR"
    }]
  }, {
    countryName: "Mongolia",
    countryShortCode: "MN",
    regions: [{
      name: "Arhangay",
      shortCode: "073"
    }, {
      name: "Bayan-Olgiy",
      shortCode: "071"
    }, {
      name: "Bayanhongor",
      shortCode: "069"
    }, {
      name: "Bulgan",
      shortCode: "067"
    }, {
      name: "Darhan",
      shortCode: "037"
    }, {
      name: "Dornod",
      shortCode: "061"
    }, {
      name: "Dornogovi",
      shortCode: "063"
    }, {
      name: "Dundgovi",
      shortCode: "059"
    }, {
      name: "Dzavhan",
      shortCode: "065"
    }, {
      name: "Govi-Altay",
      shortCode: "065"
    }, {
      name: "Govi-Sumber",
      shortCode: "064"
    }, {
      name: "Hovd",
      shortCode: "043"
    }, {
      name: "Hovsgol",
      shortCode: "041"
    }, {
      name: "Omnogovi",
      shortCode: "053"
    }, {
      name: "Ovorhangay",
      shortCode: "055"
    }, {
      name: "Selenge",
      shortCode: "049"
    }, {
      name: "Suhbaatar",
      shortCode: "051"
    }, {
      name: "Tov",
      shortCode: "047"
    }, {
      name: "Ulaanbaatar",
      shortCode: "1"
    }, {
      name: "Uvs",
      shortCode: "046"
    }]
  }, {
    countryName: "Montenegro",
    countryShortCode: "ME",
    regions: [{
      name: "Andrijevica",
      shortCode: "01"
    }, {
      name: "Bar",
      shortCode: "02"
    }, {
      name: "Berane",
      shortCode: "03"
    }, {
      name: "Bijelo Polje",
      shortCode: "04"
    }, {
      name: "Budva",
      shortCode: "05"
    }, {
      name: "Cetinje",
      shortCode: "06"
    }, {
      name: "Danilovgrad",
      shortCode: "07"
    }, {
      name: "Gusinje",
      shortCode: "22"
    }, {
      name: "Herceg Novi",
      shortCode: "08"
    }, {
      name: "Kolašin",
      shortCode: "09"
    }, {
      name: "Kotor",
      shortCode: "10"
    }, {
      name: "Mojkovac",
      shortCode: "11"
    }, {
      name: "Nikšić",
      shortCode: "12"
    }, {
      name: "Petnica",
      shortCode: "23"
    }, {
      name: "Plav",
      shortCode: "13"
    }, {
      name: "Plužine",
      shortCode: "14"
    }, {
      name: "Pljevlja",
      shortCode: "15"
    }, {
      name: "Podgorica",
      shortCode: "16"
    }, {
      name: "Rožaje",
      shortCode: "17"
    }, {
      name: "Šavnik",
      shortCode: "18"
    }, {
      name: "Tivat",
      shortCode: "19"
    }, {
      name: "Ulcinj",
      shortCode: "20"
    }, {
      name: "Žabljak",
      shortCode: "21"
    }]
  }, {
    countryName: "Montserrat",
    countryShortCode: "MS",
    regions: [{
      name: "Saint Anthony"
    }, {
      name: "Saint Georges"
    }, {
      name: "Saint Peter's"
    }]
  }, {
    countryName: "Morocco",
    countryShortCode: "MA",
    regions: [{
      name: "Chaouia-Ouardigha",
      shortCode: "09"
    }, {
      name: "Doukhala-Abda",
      shortCode: "10"
    }, {
      name: "Fès-Boulemane",
      shortCode: "05"
    }, {
      name: "Gharb-Chrarda-Beni Hssen",
      shortCode: "02"
    }, {
      name: "Grand Casablanca",
      shortCode: "08"
    }, {
      name: "Guelmim-Es Semara",
      shortCode: "14"
    }, {
      name: "Laâyoune-Boujdour-Sakia el Hamra",
      shortCode: "15"
    }, {
      name: "Marrakech-Tensift-Al Haouz",
      shortCode: "11"
    }, {
      name: "Meknès-Tafilalet",
      shortCode: "06"
    }, {
      name: "Oriental",
      shortCode: "04"
    }, {
      name: "Oued ed Dahab-Lagouira",
      shortCode: "16"
    }, {
      name: "Souss-Massa-Drâa",
      shortCode: "13"
    }, {
      name: "Tadla-Azilal",
      shortCode: "12"
    }, {
      name: "Tanger-Tétouan",
      shortCode: "01"
    }, {
      name: "Taza-Al Hoceima-Taounate",
      shortCode: "03"
    }]
  }, {
    countryName: "Mozambique",
    countryShortCode: "MZ",
    regions: [{
      name: "Cabo Delgado",
      shortCode: "P"
    }, {
      name: "Gaza",
      shortCode: "G"
    }, {
      name: "Inhambane",
      shortCode: "I"
    }, {
      name: "Manica",
      shortCode: "B"
    }, {
      name: "Maputo",
      shortCode: "L"
    }, {
      name: "Maputo (City)",
      shortCode: "MPM"
    }, {
      name: "Nampula",
      shortCode: "N"
    }, {
      name: "Niassa",
      shortCode: "A"
    }, {
      name: "Sofala",
      shortCode: "S"
    }, {
      name: "Tete",
      shortCode: "T"
    }, {
      name: "Zambezia",
      shortCode: "Q"
    }]
  }, {
    countryName: "Myanmar",
    countryShortCode: "MM",
    regions: [{
      name: "Ayeyarwady",
      shortCode: "07"
    }, {
      name: "Bago",
      shortCode: "02"
    }, {
      name: "Chin",
      shortCode: "14"
    }, {
      name: "Kachin",
      shortCode: "11"
    }, {
      name: "Kayah",
      shortCode: "12"
    }, {
      name: "Kayin",
      shortCode: "13"
    }, {
      name: "Magway",
      shortCode: "03"
    }, {
      name: "Mandalay",
      shortCode: "04"
    }, {
      name: "Mon",
      shortCode: "15"
    }, {
      name: "Nay Pyi Taw",
      shortCode: "18"
    }, {
      name: "Rakhine",
      shortCode: "16"
    }, {
      name: "Sagaing",
      shortCode: "01"
    }, {
      name: "Shan",
      shortCode: "17"
    }, {
      name: "Tanintharyi",
      shortCode: "05"
    }, {
      name: "Yangon",
      shortCode: "06"
    }]
  }, {
    countryName: "Namibia",
    countryShortCode: "NA",
    regions: [{
      name: "Erongo",
      shortCode: "ER"
    }, {
      name: "Hardap",
      shortCode: "HA"
    }, {
      name: "Kavango East",
      shortCode: "KE"
    }, {
      name: "Kavango West",
      shortCode: "KW"
    }, {
      name: "Karas",
      shortCode: "KA"
    }, {
      name: "Khomas",
      shortCode: "KH"
    }, {
      name: "Kunene",
      shortCode: "KU"
    }, {
      name: "Ohangwena",
      shortCode: "OW"
    }, {
      name: "Omaheke",
      shortCode: "OH"
    }, {
      name: "Omusati",
      shortCode: "OS"
    }, {
      name: "Oshana",
      shortCode: "ON"
    }, {
      name: "Oshikoto",
      shortCode: "OT"
    }, {
      name: "Otjozondjupa",
      shortCode: "OD"
    }, {
      name: "Zambezi",
      shortCode: "CA"
    }]
  }, {
    countryName: "Nauru",
    countryShortCode: "NR",
    regions: [{
      name: "Aiwo",
      shortCode: "01"
    }, {
      name: "Anabar",
      shortCode: "02"
    }, {
      name: "Anetan",
      shortCode: "03"
    }, {
      name: "Anibare",
      shortCode: "04"
    }, {
      name: "Baiti",
      shortCode: "05"
    }, {
      name: "Boe",
      shortCode: "06"
    }, {
      name: "Buada",
      shortCode: "07"
    }, {
      name: "Denigomodu",
      shortCode: "08"
    }, {
      name: "Ewa",
      shortCode: "09"
    }, {
      name: "Ijuw",
      shortCode: "10"
    }, {
      name: "Meneng",
      shortCode: "11"
    }, {
      name: "Nibok",
      shortCode: "12"
    }, {
      name: "Uaboe",
      shortCode: "13"
    }, {
      name: "Yaren",
      shortCode: "14"
    }]
  }, {
    countryName: "Nepal",
    countryShortCode: "NP",
    regions: [{
      name: "Bagmati",
      shortCode: "BA"
    }, {
      name: "Bheri",
      shortCode: "BH"
    }, {
      name: "Dhawalagiri",
      shortCode: "DH"
    }, {
      name: "Gandaki",
      shortCode: "GA"
    }, {
      name: "Janakpur",
      shortCode: "JA"
    }, {
      name: "Karnali",
      shortCode: "KA"
    }, {
      name: "Kosi",
      shortCode: "KO"
    }, {
      name: "Lumbini",
      shortCode: "LU"
    }, {
      name: "Mahakali",
      shortCode: "MA"
    }, {
      name: "Mechi",
      shortCode: "ME"
    }, {
      name: "Narayani",
      shortCode: "NA"
    }, {
      name: "Rapti",
      shortCode: "RA"
    }, {
      name: "Sagarmatha",
      shortCode: "SA"
    }, {
      name: "Seti",
      shortCode: "SE"
    }]
  }, {
    countryName: "Netherlands",
    countryShortCode: "NL",
    regions: [{
      name: "Drenthe",
      shortCode: "DR"
    }, {
      name: "Flevoland",
      shortCode: "FL"
    }, {
      name: "Friesland",
      shortCode: "FR"
    }, {
      name: "Gelderland",
      shortCode: "GE"
    }, {
      name: "Groningen",
      shortCode: "GR"
    }, {
      name: "Limburg",
      shortCode: "LI"
    }, {
      name: "Noord-Brabant",
      shortCode: "NB"
    }, {
      name: "Noord-Holland",
      shortCode: "NH"
    }, {
      name: "Overijssel",
      shortCode: "OV"
    }, {
      name: "Utrecht",
      shortCode: "UT"
    }, {
      name: "Zeeland",
      shortCode: "ZE"
    }, {
      name: "Zuid-Holland",
      shortCode: "ZH"
    }]
  }, {
    countryName: "New Caledonia",
    countryShortCode: "NC",
    regions: [{
      name: "Iles Loyaute"
    }, {
      name: "Nord"
    }, {
      name: "Sud"
    }]
  }, {
    countryName: "New Zealand",
    countryShortCode: "NZ",
    regions: [{
      name: "Auckland",
      shortCode: "AUK"
    }, {
      name: "Bay of Plenty",
      shortCode: "BOP"
    }, {
      name: "Canterbury",
      shortCode: "CAN"
    }, {
      name: "Gisborne",
      shortCode: "GIS"
    }, {
      name: "Hawke's Bay",
      shortCode: "HKB"
    }, {
      name: "Marlborough",
      shortCode: "MBH"
    }, {
      name: "Manawatu-Wanganui",
      shortCode: "MWT"
    }, {
      name: "Northland",
      shortCode: "NTL"
    }, {
      name: "Nelson",
      shortCode: "NSN"
    }, {
      name: "Otago",
      shortCode: "OTA"
    }, {
      name: "Southland",
      shortCode: "STL"
    }, {
      name: "Taranaki",
      shortCode: "TKI"
    }, {
      name: "Tasman",
      shortCode: "TAS"
    }, {
      name: "Waikato",
      shortCode: "WKO"
    }, {
      name: "Wellington",
      shortCode: "WGN"
    }, {
      name: "West Coast",
      shortCode: "WTC"
    }, {
      name: "Chatham Islands Territory",
      shortCode: "CIT"
    }]
  }, {
    countryName: "Nicaragua",
    countryShortCode: "NI",
    regions: [{
      name: "Boaco",
      shortCode: "BO"
    }, {
      name: "Carazo",
      shortCode: "CA"
    }, {
      name: "Chinandega",
      shortCode: "CI"
    }, {
      name: "Chontales",
      shortCode: "CO"
    }, {
      name: "Estelí",
      shortCode: "ES"
    }, {
      name: "Granada",
      shortCode: "GR"
    }, {
      name: "Jinotega",
      shortCode: "JI"
    }, {
      name: "León",
      shortCode: "LE"
    }, {
      name: "Madriz",
      shortCode: "MD"
    }, {
      name: "Managua",
      shortCode: "MN"
    }, {
      name: "Masaya",
      shortCode: "MS"
    }, {
      name: "Matagalpa",
      shortCode: "MT"
    }, {
      name: "Nueva Segovia",
      shortCode: "NS"
    }, {
      name: "Río San Juan",
      shortCode: "SJ"
    }, {
      name: "Rivas",
      shortCode: "RI"
    }, {
      name: "Atlántico Norte",
      shortCode: "AN"
    }, {
      name: "Atlántico Sur",
      shortCode: "AS"
    }]
  }, {
    countryName: "Niger",
    countryShortCode: "NE",
    regions: [{
      name: "Agadez",
      shortCode: "1"
    }, {
      name: "Diffa",
      shortCode: "2"
    }, {
      name: "Dosso",
      shortCode: "3"
    }, {
      name: "Maradi",
      shortCode: "4"
    }, {
      name: "Niamey",
      shortCode: "8"
    }, {
      name: "Tahoua",
      shortCode: "5"
    }, {
      name: "Tillabéri",
      shortCode: "6"
    }, {
      name: "Zinder",
      shortCode: "7"
    }]
  }, {
    countryName: "Nigeria",
    countryShortCode: "NG",
    regions: [{
      name: "Abia",
      shortCode: "AB"
    }, {
      name: "Abuja Federal Capital Territory",
      shortCode: "FC"
    }, {
      name: "Adamawa",
      shortCode: "AD"
    }, {
      name: "Akwa Ibom",
      shortCode: "AK"
    }, {
      name: "Anambra",
      shortCode: "AN"
    }, {
      name: "Bauchi",
      shortCode: "BA"
    }, {
      name: "Bayelsa",
      shortCode: "BY"
    }, {
      name: "Benue",
      shortCode: "BE"
    }, {
      name: "Borno",
      shortCode: "BO"
    }, {
      name: "Cross River",
      shortCode: "CR"
    }, {
      name: "Delta",
      shortCode: "DE"
    }, {
      name: "Ebonyi",
      shortCode: "EB"
    }, {
      name: "Edo",
      shortCode: "ED"
    }, {
      name: "Ekiti",
      shortCode: "EK"
    }, {
      name: "Enugu",
      shortCode: "EN"
    }, {
      name: "Gombe",
      shortCode: "GO"
    }, {
      name: "Imo",
      shortCode: "IM"
    }, {
      name: "Jigawa",
      shortCode: "JI"
    }, {
      name: "Kaduna",
      shortCode: "KD"
    }, {
      name: "Kano",
      shortCode: "KN"
    }, {
      name: "Katsina",
      shortCode: "KT"
    }, {
      name: "Kebbi",
      shortCode: "KE"
    }, {
      name: "Kogi",
      shortCode: "KO"
    }, {
      name: "Kwara",
      shortCode: "KW"
    }, {
      name: "Lagos",
      shortCode: "LA"
    }, {
      name: "Nassarawa",
      shortCode: "NA"
    }, {
      name: "Niger",
      shortCode: "NI"
    }, {
      name: "Ogun",
      shortCode: "OG"
    }, {
      name: "Ondo",
      shortCode: "ON"
    }, {
      name: "Osun",
      shortCode: "OS"
    }, {
      name: "Oyo",
      shortCode: "OY"
    }, {
      name: "Plateau",
      shortCode: "PL"
    }, {
      name: "Rivers",
      shortCode: "RI"
    }, {
      name: "Sokoto",
      shortCode: "SO"
    }, {
      name: "Taraba",
      shortCode: "TA"
    }, {
      name: "Yobe",
      shortCode: "YO"
    }, {
      name: "Zamfara",
      shortCode: "ZA"
    }]
  }, {
    countryName: "Niue",
    countryShortCode: "NU",
    regions: [{
      name: "Niue"
    }]
  }, {
    countryName: "Norfolk Island",
    countryShortCode: "NF",
    regions: [{
      name: "Norfolk Island"
    }]
  }, {
    countryName: "Northern Mariana Islands",
    countryShortCode: "MP",
    regions: [{
      name: "Northern Islands"
    }, {
      name: "Rota"
    }, {
      name: "Saipan"
    }, {
      name: "Tinian"
    }]
  }, {
    countryName: "Norway",
    countryShortCode: "NO",
    regions: [{
      name: "Akershus",
      shortCode: "02"
    }, {
      name: "Aust-Agder",
      shortCode: "09"
    }, {
      name: "Buskerud",
      shortCode: "06"
    }, {
      name: "Finnmark",
      shortCode: "20"
    }, {
      name: "Hedmark",
      shortCode: "04"
    }, {
      name: "Hordaland",
      shortCode: "12"
    }, {
      name: "Møre og Romsdal",
      shortCode: "15"
    }, {
      name: "Nordland",
      shortCode: "18"
    }, {
      name: "Nord-Trøndelag",
      shortCode: "17"
    }, {
      name: "Oppland",
      shortCode: "05"
    }, {
      name: "Oslo",
      shortCode: "03"
    }, {
      name: "Rogaland",
      shortCode: "11"
    }, {
      name: "Sogn og Fjordane",
      shortCode: "14"
    }, {
      name: "Sør-Trøndelag",
      shortCode: "16"
    }, {
      name: "Telemark",
      shortCode: "08"
    }, {
      name: "Troms",
      shortCode: "19"
    }, {
      name: "Vest-Agder",
      shortCode: "10"
    }, {
      name: "Vestfold",
      shortCode: "07"
    }, {
      name: "Østfold",
      shortCode: "01"
    }, {
      name: "Jan Mayen",
      shortCode: "22"
    }, {
      name: "Svalbard",
      shortCode: "21"
    }]
  }, {
    countryName: "Oman",
    countryShortCode: "OM",
    regions: [{
      name: "Ad Dakhiliyah",
      shortCode: "DA"
    }, {
      name: "Al Buraymi",
      shortCode: "BU"
    }, {
      name: "Al Wusta",
      shortCode: "WU"
    }, {
      name: "Az Zahirah",
      shortCode: "ZA"
    }, {
      name: "Janub al Batinah",
      shortCode: "BS"
    }, {
      name: "Janub ash Sharqiyah",
      shortCode: "SS"
    }, {
      name: "Masqat",
      shortCode: "MA"
    }, {
      name: "Musandam",
      shortCode: "MU"
    }, {
      name: "Shamal al Batinah",
      shortCode: "BJ"
    }, {
      name: "Shamal ash Sharqiyah",
      shortCode: "SJ"
    }, {
      name: "Zufar",
      shortCode: "ZU"
    }]
  }, {
    countryName: "Pakistan",
    countryShortCode: "PK",
    regions: [{
      name: "Āzād Kashmīr",
      shortCode: "JK"
    }, {
      name: "Balōchistān",
      shortCode: "BA"
    }, {
      name: "Gilgit-Baltistān",
      shortCode: "GB"
    }, {
      name: "Islāmābād",
      shortCode: "IS"
    }, {
      name: "Khaībar Pakhtūnkhwās",
      shortCode: "KP"
    }, {
      name: "Punjāb",
      shortCode: "PB"
    }, {
      name: "Sindh",
      shortCode: "SD"
    }, {
      name: "Federally Administered Tribal Areas",
      shortCode: "TA"
    }]
  }, {
    countryName: "Palau",
    countryShortCode: "PW",
    regions: [{
      name: "Aimeliik",
      shortCode: "002"
    }, {
      name: "Airai",
      shortCode: "004"
    }, {
      name: "Angaur",
      shortCode: "010"
    }, {
      name: "Hatobohei",
      shortCode: "050"
    }, {
      name: "Kayangel",
      shortCode: "100"
    }, {
      name: "Koror",
      shortCode: "150"
    }, {
      name: "Melekeok",
      shortCode: "212"
    }, {
      name: "Ngaraard",
      shortCode: "214"
    }, {
      name: "Ngarchelong",
      shortCode: "218"
    }, {
      name: "Ngardmau",
      shortCode: "222"
    }, {
      name: "Ngatpang",
      shortCode: "224"
    }, {
      name: "Ngchesar",
      shortCode: "226"
    }, {
      name: "Ngeremlengui",
      shortCode: "227"
    }, {
      name: "Ngiwal",
      shortCode: "228"
    }, {
      name: "Peleliu",
      shortCode: "350"
    }, {
      name: "Sonsoral",
      shortCode: "350"
    }]
  }, {
    countryName: "Palestine, State of",
    countryShortCode: "PS",
    regions: [{
      name: "Ak Khalīl",
      shortCode: "HBN"
    }, {
      name: "Al Quds",
      shortCode: "JEM"
    }, {
      name: "Arīḩā wal Aghwār",
      shortCode: "JRH"
    }, {
      name: "Bayt Laḩm",
      shortCode: "BTH"
    }, {
      name: "Dayr al Balaḩ",
      shortCode: "DEB"
    }, {
      name: "Ghazzah",
      shortCode: "GZA"
    }, {
      name: "Janīn",
      shortCode: "JEN"
    }, {
      name: "Khān Yūnis",
      shortCode: "KYS"
    }, {
      name: "Nāblus",
      shortCode: "NBS"
    }, {
      name: "Qalqīyah",
      shortCode: "QQA"
    }, {
      name: "Rafaḩ",
      shortCode: "RFH"
    }, {
      name: "Rām Allāh wal Bīrah",
      shortCode: "RBH"
    }, {
      name: "Salfīt",
      shortCode: "SLT"
    }, {
      name: "Shamāl Ghazzah",
      shortCode: "NGZ"
    }, {
      name: "Ţūbās",
      shortCode: "TBS"
    }, {
      name: "Ţūlkarm",
      shortCode: "TKM"
    }]
  }, {
    countryName: "Panama",
    countryShortCode: "PA",
    regions: [{
      name: "Bocas del Toro",
      shortCode: "1"
    }, {
      name: "Chiriquí",
      shortCode: "4"
    }, {
      name: "Coclé",
      shortCode: "2"
    }, {
      name: "Colón",
      shortCode: "3"
    }, {
      name: "Darién",
      shortCode: "5"
    }, {
      name: "Emberá",
      shortCode: "EM"
    }, {
      name: "Herrera",
      shortCode: "6"
    }, {
      name: "Kuna Yala",
      shortCode: "KY"
    }, {
      name: "Los Santos",
      shortCode: "7"
    }, {
      name: "Ngäbe-Buglé",
      shortCode: "NB"
    }, {
      name: "Panamá",
      shortCode: "8"
    }, {
      name: "Panamá Oeste",
      shortCode: "10"
    }, {
      name: "Veraguas",
      shortCode: "9"
    }]
  }, {
    countryName: "Papua New Guinea",
    countryShortCode: "PG",
    regions: [{
      name: "Bougainville",
      shortCode: "NSB"
    }, {
      name: "Central",
      shortCode: "CPM"
    }, {
      name: "Chimbu",
      shortCode: "CPK"
    }, {
      name: "East New Britain",
      shortCode: "EBR"
    }, {
      name: "East Sepik",
      shortCode: "ESW"
    }, {
      name: "Eastern Highlands",
      shortCode: "EHG"
    }, {
      name: "Enga",
      shortCode: "EPW"
    }, {
      name: "Gulf",
      shortCode: "GPK"
    }, {
      name: "Hela",
      shortCode: "HLA"
    }, {
      name: "Jiwaka",
      shortCode: "JWK"
    }, {
      name: "Madang",
      shortCode: "MOM"
    }, {
      name: "Manus",
      shortCode: "MRL"
    }, {
      name: "Milne Bay",
      shortCode: "MBA"
    }, {
      name: "Morobe",
      shortCode: "MPL"
    }, {
      name: "Port Moresby",
      shortCode: "NCD"
    }, {
      name: "New Ireland",
      shortCode: "NIK"
    }, {
      name: "Northern",
      shortCode: "NPP"
    }, {
      name: "Southern Highlands",
      shortCode: "SHM"
    }, {
      name: "West New Britain",
      shortCode: "WBK"
    }, {
      name: "West Sepik",
      shortCode: "SAN"
    }, {
      name: "Western",
      shortCode: "WPD"
    }, {
      name: "Western Highlands",
      shortCode: "WHM"
    }]
  }, {
    countryName: "Paraguay",
    countryShortCode: "PY",
    regions: [{
      name: "Alto Paraguay",
      shortCode: "16"
    }, {
      name: "Alto Parana",
      shortCode: "10"
    }, {
      name: "Amambay",
      shortCode: "13"
    }, {
      name: "Asuncion",
      shortCode: "ASU"
    }, {
      name: "Caaguazu",
      shortCode: "5"
    }, {
      name: "Caazapa",
      shortCode: "6"
    }, {
      name: "Canindeyu",
      shortCode: "14"
    }, {
      name: "Central",
      shortCode: "11"
    }, {
      name: "Concepcion",
      shortCode: "1"
    }, {
      name: "Cordillera",
      shortCode: "3"
    }, {
      name: "Boqueron",
      shortCode: "17"
    }, {
      name: "Guaira",
      shortCode: "4"
    }, {
      name: "Itapua",
      shortCode: "7"
    }, {
      name: "Misiones",
      shortCode: "8"
    }, {
      name: "Neembucu",
      shortCode: "12"
    }, {
      name: "Paraguari",
      shortCode: "9"
    }, {
      name: "Presidente Hayes",
      shortCode: "15"
    }, {
      name: "San Pedro",
      shortCode: "2"
    }]
  }, {
    countryName: "Peru",
    countryShortCode: "PE",
    regions: [{
      name: "Amazonas",
      shortCode: "AMA"
    }, {
      name: "Ancash",
      shortCode: "ANC"
    }, {
      name: "Apurimac",
      shortCode: "APU"
    }, {
      name: "Arequipa",
      shortCode: "ARE"
    }, {
      name: "Ayacucho",
      shortCode: "AYA"
    }, {
      name: "Cajamarca",
      shortCode: "CAJ"
    }, {
      name: "Callao",
      shortCode: "CAL"
    }, {
      name: "Cusco",
      shortCode: "CUS"
    }, {
      name: "Huancavelica",
      shortCode: "HUV"
    }, {
      name: "Huanuco",
      shortCode: "HUC"
    }, {
      name: "Ica",
      shortCode: "ICA"
    }, {
      name: "Junin",
      shortCode: "JUN"
    }, {
      name: "La Libertad",
      shortCode: "LAL"
    }, {
      name: "Lambayeque",
      shortCode: "LAM"
    }, {
      name: "Lima",
      shortCode: "LIM"
    }, {
      name: "Loreto",
      shortCode: "LOR"
    }, {
      name: "Madre de Dios",
      shortCode: "MDD"
    }, {
      name: "Moquegua",
      shortCode: "MOQ"
    }, {
      name: "Municipalidad Metropolitana de Lima",
      shortCode: "LMA"
    }, {
      name: "Pasco",
      shortCode: "PAS"
    }, {
      name: "Piura",
      shortCode: "PIU"
    }, {
      name: "Puno",
      shortCode: "PUN"
    }, {
      name: "San Martin",
      shortCode: "SAM"
    }, {
      name: "Tacna",
      shortCode: "TAC"
    }, {
      name: "Tumbes",
      shortCode: "TUM"
    }, {
      name: "Ucayali",
      shortCode: "UCA"
    }]
  }, {
    countryName: "Philippines",
    countryShortCode: "PH",
    regions: [{
      name: "Abra",
      shortCode: "ABR"
    }, {
      name: "Agusan del Norte",
      shortCode: "AGN"
    }, {
      name: "Agusan del Sur",
      shortCode: "AGS"
    }, {
      name: "Aklan",
      shortCode: "AKL"
    }, {
      name: "Albay",
      shortCode: "ALB"
    }, {
      name: "Antique",
      shortCode: "ANT"
    }, {
      name: "Apayao",
      shortCode: "APA"
    }, {
      name: "Aurora",
      shortCode: "AUR"
    }, {
      name: "Basilan",
      shortCode: "BAS"
    }, {
      name: "Bataan",
      shortCode: "BAN"
    }, {
      name: "Batanes",
      shortCode: "BTN"
    }, {
      name: "Batangas",
      shortCode: "BTG"
    }, {
      name: "Benguet",
      shortCode: "BEN"
    }, {
      name: "Biliran",
      shortCode: "BIL"
    }, {
      name: "Bohol",
      shortCode: "BOH"
    }, {
      name: "Bukidnon",
      shortCode: "BUK"
    }, {
      name: "Bulacan",
      shortCode: "BUL"
    }, {
      name: "Cagayan",
      shortCode: "CAG"
    }, {
      name: "Camarines Norte",
      shortCode: "CAN"
    }, {
      name: "Camarines Sur",
      shortCode: "CAS"
    }, {
      name: "Camiguin",
      shortCode: "CAM"
    }, {
      name: "Capiz",
      shortCode: "CAP"
    }, {
      name: "Catanduanes",
      shortCode: "CAT"
    }, {
      name: "Cavite",
      shortCode: "CAV"
    }, {
      name: "Cebu",
      shortCode: "CEB"
    }, {
      name: "Compostela",
      shortCode: "COM"
    }, {
      name: "Cotabato",
      shortCode: "NCO"
    }, {
      name: "Davao del Norte",
      shortCode: "DAV"
    }, {
      name: "Davao del Sur",
      shortCode: "DAS"
    }, {
      name: "Davao Occidental",
      shortCode: "DVO"
    }, {
      name: "Davao Oriental",
      shortCode: "DAO"
    }, {
      name: "Dinagat Islands",
      shortCode: "DIN"
    }, {
      name: "Eastern Samar",
      shortCode: "EAS"
    }, {
      name: "Guimaras",
      shortCode: "GUI"
    }, {
      name: "Ifugao",
      shortCode: "IFU"
    }, {
      name: "Ilocos Norte",
      shortCode: "ILN"
    }, {
      name: "Ilocos Sur",
      shortCode: "ILS"
    }, {
      name: "Iloilo",
      shortCode: "ILI"
    }, {
      name: "Isabela",
      shortCode: "ISA"
    }, {
      name: "Kalinga",
      shortCode: "KAL"
    }, {
      name: "La Union",
      shortCode: "LUN"
    }, {
      name: "Laguna",
      shortCode: "LAG"
    }, {
      name: "Lanao del Norte",
      shortCode: "LAN"
    }, {
      name: "Lanao del Sur",
      shortCode: "LAS"
    }, {
      name: "Leyte",
      shortCode: "LEY"
    }, {
      name: "Maguindanao",
      shortCode: "MAG"
    }, {
      name: "Masbate",
      shortCode: "MAS"
    }, {
      name: "Metro Manila",
      shortCode: "00"
    }, {
      name: "Mindoro Occidental",
      shortCode: "MDC"
    }, {
      name: "Mindoro Oriental",
      shortCode: "MDR"
    }, {
      name: "Misamis Occidental",
      shortCode: "MSC"
    }, {
      name: "Misamis Oriental",
      shortCode: "MSR"
    }, {
      name: "Mountain Province",
      shortCode: "MOU"
    }, {
      name: "Negros Occidental",
      shortCode: "NEC"
    }, {
      name: "Negros Oriental",
      shortCode: "NER"
    }, {
      name: "Northern Samar",
      shortCode: "NSA"
    }, {
      name: "Nueva Ecija",
      shortCode: "NUE"
    }, {
      name: "Nueva Vizcaya",
      shortCode: "NUV"
    }, {
      name: "Palawan",
      shortCode: "PLW"
    }, {
      name: "Pampanga",
      shortCode: "PAM"
    }, {
      name: "Pangasinan",
      shortCode: "PAN"
    }, {
      name: "Quezon",
      shortCode: "QUE"
    }, {
      name: "Quirino",
      shortCode: "QUI"
    }, {
      name: "Rizal",
      shortCode: "RIZ"
    }, {
      name: "Romblon",
      shortCode: "ROM"
    }, {
      name: "Samar",
      shortCode: "WSA"
    }, {
      name: "Sarangani",
      shortCode: "SAR"
    }, {
      name: "Siquijor",
      shortCode: "SIG"
    }, {
      name: "Sorsogon",
      shortCode: "SOR"
    }, {
      name: "Southern Leyte",
      shortCode: "SLE"
    }, {
      name: "Sultan Kudarat",
      shortCode: "AUK"
    }, {
      name: "Sulu",
      shortCode: "SLU"
    }, {
      name: "Surigao del Norte",
      shortCode: "SUN"
    }, {
      name: "Surigao del Sur",
      shortCode: "SUR"
    }, {
      name: "Tarlac",
      shortCode: "TAR"
    }, {
      name: "Tawi-Tawi",
      shortCode: "TAW"
    }, {
      name: "Zambales",
      shortCode: "ZMB"
    }, {
      name: "Zamboanga del Norte",
      shortCode: "ZAN"
    }, {
      name: "Zamboanga del Sur",
      shortCode: "ZAS"
    }, {
      name: "Zamboanga Sibugay",
      shortCode: "ZSI"
    }]
  }, {
    countryName: "Pitcairn",
    countryShortCode: "PN",
    regions: [{
      name: "Pitcairn Islands"
    }]
  }, {
    countryName: "Poland",
    countryShortCode: "PL",
    regions: [{
      name: "Dolnośląskie",
      shortCode: "DS"
    }, {
      name: "Kujawsko-pomorskie",
      shortCode: "KP"
    }, {
      name: "Łódzkie",
      shortCode: "LD"
    }, {
      name: "Lubelskie",
      shortCode: "LU"
    }, {
      name: "Lubuskie",
      shortCode: "LB"
    }, {
      name: "Małopolskie",
      shortCode: "MA"
    }, {
      name: "Mazowieckie",
      shortCode: "MZ"
    }, {
      name: "Opolskie",
      shortCode: "OP"
    }, {
      name: "Podkarpackie",
      shortCode: "PK"
    }, {
      name: "Podlaskie",
      shortCode: "PD"
    }, {
      name: "Pomorskie",
      shortCode: "PM"
    }, {
      name: "Śląskie",
      shortCode: "SL"
    }, {
      name: "Świętokrzyskie",
      shortCode: "SK"
    }, {
      name: "Warmińsko-mazurskie",
      shortCode: "WN"
    }, {
      name: "Wielkopolskie",
      shortCode: "WP"
    }, {
      name: "Zachodniopomorskie",
      shortCode: "ZP"
    }]
  }, {
    countryName: "Portugal",
    countryShortCode: "PT",
    regions: [{
      name: "Açores",
      shortCode: "20"
    }, {
      name: "Aveiro",
      shortCode: "01"
    }, {
      name: "Beja",
      shortCode: "02"
    }, {
      name: "Braga",
      shortCode: "03"
    }, {
      name: "Bragança",
      shortCode: "04"
    }, {
      name: "Castelo Branco",
      shortCode: "05"
    }, {
      name: "Coimbra",
      shortCode: "06"
    }, {
      name: "Évora",
      shortCode: "07"
    }, {
      name: "Faro",
      shortCode: "08"
    }, {
      name: "Guarda",
      shortCode: "09"
    }, {
      name: "Leiria",
      shortCode: "10"
    }, {
      name: "Lisboa",
      shortCode: "11"
    }, {
      name: "Madeira",
      shortCode: "30"
    }, {
      name: "Portalegre",
      shortCode: "12"
    }, {
      name: "Porto",
      shortCode: "13"
    }, {
      name: "Santarém",
      shortCode: "14"
    }, {
      name: "Setúbal",
      shortCode: "15"
    }, {
      name: "Viana do Castelo",
      shortCode: "16"
    }, {
      name: "Vila Real",
      shortCode: "17"
    }, {
      name: "Viseu",
      shortCode: "18"
    }]
  }, {
    countryName: "Puerto Rico",
    countryShortCode: "PR",
    regions: [{
      name: "Adjuntas"
    }, {
      name: "Aguada"
    }, {
      name: "Aguadilla"
    }, {
      name: "Aguas Buenas"
    }, {
      name: "Aibonito"
    }, {
      name: "Anasco"
    }, {
      name: "Arecibo"
    }, {
      name: "Arroyo"
    }, {
      name: "Barceloneta"
    }, {
      name: "Barranquitas"
    }, {
      name: "Bayamon"
    }, {
      name: "Cabo Rojo"
    }, {
      name: "Caguas"
    }, {
      name: "Camuy"
    }, {
      name: "Canovanas"
    }, {
      name: "Carolina"
    }, {
      name: "Cat"
    }, {
      name: "Ceiba"
    }, {
      name: "Ciales"
    }, {
      name: "Cidra"
    }, {
      name: "Coamo"
    }, {
      name: "Comerio"
    }, {
      name: "Corozal"
    }, {
      name: "Culebra"
    }, {
      name: "Dorado"
    }, {
      name: "Fajardo"
    }, {
      name: "Florida"
    }, {
      name: "Guanica"
    }, {
      name: "Guayama"
    }, {
      name: "Guayanilla"
    }, {
      name: "Guaynabo"
    }, {
      name: "Gurabo"
    }, {
      name: "Hatillo"
    }, {
      name: "Hormigueros"
    }, {
      name: "Humacao"
    }, {
      name: "Isabe"
    }, {
      name: "Juana Diaz"
    }, {
      name: "Juncos"
    }, {
      name: "Lajas"
    }, {
      name: "Lares"
    }, {
      name: "Las Marias"
    }, {
      name: "Las oiza"
    }, {
      name: "Luquillo"
    }, {
      name: "Manati"
    }, {
      name: "Maricao"
    }, {
      name: "Maunabo"
    }, {
      name: "Mayaguez"
    }, {
      name: "Moca"
    }, {
      name: "Morovis"
    }, {
      name: "Naguabo"
    }, {
      name: "Naranjito"
    }, {
      name: "Orocovis"
    }, {
      name: "Patillas"
    }, {
      name: "Penuelas"
    }, {
      name: "Ponce"
    }, {
      name: "Quebradillas"
    }, {
      name: "Rincon"
    }, {
      name: "Rio Grande"
    }, {
      name: "Sabana linas"
    }, {
      name: "San German"
    }, {
      name: "San Juan"
    }, {
      name: "San Lorenzo"
    }, {
      name: "San Sebastian"
    }, {
      name: "Santa Isabel"
    }, {
      name: "Toa Alta"
    }, {
      name: "Toa Baja"
    }, {
      name: "Trujillo Alto"
    }, {
      name: "Utuado"
    }, {
      name: "Vega Alta"
    }, {
      name: "Vega ues"
    }, {
      name: "Villalba"
    }, {
      name: "Yabucoa"
    }, {
      name: "Yauco"
    }]
  }, {
    countryName: "Qatar",
    countryShortCode: "QA",
    regions: [{
      name: "Ad Dawḩah",
      shortCode: "DA"
    }, {
      name: "Al Khawr wa adh Dhakhīrah",
      shortCode: "KH"
    }, {
      name: "Al Wakrah",
      shortCode: "WA"
    }, {
      name: "Ar Rayyān",
      shortCode: "RA"
    }, {
      name: "Ash Shamāl",
      shortCode: "MS"
    }, {
      name: "Az̧ Za̧`āyin",
      shortCode: "ZA"
    }, {
      name: "Umm Şalāl",
      shortCode: "US"
    }]
  }, {
    countryName: "Réunion",
    countryShortCode: "RE",
    regions: [{
      name: "Réunion"
    }]
  }, {
    countryName: "Romania",
    countryShortCode: "RO",
    regions: [{
      name: "Alba",
      shortCode: "AB"
    }, {
      name: "Arad",
      shortCode: "AR"
    }, {
      name: "Arges",
      shortCode: "AG"
    }, {
      name: "Bacau",
      shortCode: "BC"
    }, {
      name: "Bihor",
      shortCode: "BH"
    }, {
      name: "Bistrita-Nasaud",
      shortCode: "BN"
    }, {
      name: "Botosani",
      shortCode: "BT"
    }, {
      name: "Braila",
      shortCode: "BR"
    }, {
      name: "Brasov",
      shortCode: "BV"
    }, {
      name: "Bucuresti",
      shortCode: "B"
    }, {
      name: "Buzau",
      shortCode: "BZ"
    }, {
      name: "Calarasi",
      shortCode: "CL"
    }, {
      name: "Caras-Severin",
      shortCode: "CS"
    }, {
      name: "Cluj",
      shortCode: "CJ"
    }, {
      name: "Constanta",
      shortCode: "CT"
    }, {
      name: "Covasna",
      shortCode: "CV"
    }, {
      name: "Dambovita",
      shortCode: "DB"
    }, {
      name: "Dolj",
      shortCode: "DJ"
    }, {
      name: "Galati",
      shortCode: "GL"
    }, {
      name: "Giurgiu",
      shortCode: "GR"
    }, {
      name: "Gorj",
      shortCode: "GJ"
    }, {
      name: "Harghita",
      shortCode: "HR"
    }, {
      name: "Hunedoara",
      shortCode: "HD"
    }, {
      name: "Ialomita",
      shortCode: "IL"
    }, {
      name: "Iasi",
      shortCode: "IS"
    }, {
      name: "Maramures",
      shortCode: "MM"
    }, {
      name: "Mehedinti",
      shortCode: "MH"
    }, {
      name: "Mures",
      shortCode: "MS"
    }, {
      name: "Neamt",
      shortCode: "NT"
    }, {
      name: "Olt",
      shortCode: "OT"
    }, {
      name: "Prahova",
      shortCode: "PH"
    }, {
      name: "Salaj",
      shortCode: "SJ"
    }, {
      name: "Satu Mare",
      shortCode: "SM"
    }, {
      name: "Sibiu",
      shortCode: "SB"
    }, {
      name: "Suceava",
      shortCode: "SV"
    }, {
      name: "Teleorman",
      shortCode: "TR"
    }, {
      name: "Timis",
      shortCode: "TM"
    }, {
      name: "Tulcea",
      shortCode: "TL"
    }, {
      name: "Valcea",
      shortCode: "VL"
    }, {
      name: "Vaslui",
      shortCode: "VS"
    }, {
      name: "Vrancea",
      shortCode: "VN"
    }]
  }, {
    countryName: "Russian Federation",
    countryShortCode: "RU",
    regions: [{
      name: "Republic of Adygea",
      shortCode: "AD"
    }, {
      name: "Republic of Altai (Gorno-Altaysk)",
      shortCode: "AL"
    }, {
      name: "Altai Krai",
      shortCode: "ALT"
    }, {
      name: "Amur Oblast",
      shortCode: "AMU"
    }, {
      name: "Arkhangelsk Oblast",
      shortCode: "ARK"
    }, {
      name: "Astrakhan Oblast",
      shortCode: "AST"
    }, {
      name: "Republic of Bashkortostan",
      shortCode: "BA"
    }, {
      name: "Belgorod Oblast",
      shortCode: "BEL"
    }, {
      name: "Bryansk Oblast",
      shortCode: "BRY"
    }, {
      name: "Republic of Buryatia",
      shortCode: "BU"
    }, {
      name: "Chechen Republic",
      shortCode: "CE"
    }, {
      name: "Chelyabinsk Oblast",
      shortCode: "CHE"
    }, {
      name: "Chukotka Autonomous Okrug",
      shortCode: "CHU"
    }, {
      name: "Chuvash Republic",
      shortCode: "CU"
    }, {
      name: "Republic of Dagestan",
      shortCode: "DA"
    }, {
      name: "Republic of Ingushetia",
      shortCode: "IN"
    }, {
      name: "Irkutsk Oblast",
      shortCode: "IRK"
    }, {
      name: "Ivanovo Oblast",
      shortCode: "IVA"
    }, {
      name: "Jewish Autonomous Oblast",
      shortCode: "JEW"
    }, {
      name: "Kabardino-Balkar Republic",
      shortCode: "KB"
    }, {
      name: "Kaliningrad Oblast",
      shortCode: "KLN"
    }, {
      name: "Republic of Kalmykia",
      shortCode: "KL"
    }, {
      name: "Kaluga Oblast",
      shortCode: "KLU"
    }, {
      name: "Kamchatka Krai",
      shortCode: "KAM"
    }, {
      name: "Karachay-Cherkess Republic",
      shortCode: "KC"
    }, {
      name: "Republic of Karelia",
      shortCode: "KR"
    }, {
      name: "Khabarovsk Krai",
      shortCode: "KHA"
    }, {
      name: "Republic of Khakassia",
      shortCode: "KK"
    }, {
      name: "Khanty-Mansi Autonomous Okrug - Yugra",
      shortCode: "KHM"
    }, {
      name: "Kemerovo Oblast",
      shortCode: "KEM"
    }, {
      name: "Kirov Oblast",
      shortCode: "KIR"
    }, {
      name: "Komi Republic",
      shortCode: "KO"
    }, {
      name: "Kostroma Oblast",
      shortCode: "KOS"
    }, {
      name: "Krasnodar Krai",
      shortCode: "KDA"
    }, {
      name: "Krasnoyarsk Krai",
      shortCode: "KYA"
    }, {
      name: "Kurgan Oblast",
      shortCode: "KGN"
    }, {
      name: "Kursk Oblast",
      shortCode: "KRS"
    }, {
      name: "Leningrad Oblast",
      shortCode: "LEN"
    }, {
      name: "Lipetsk Oblast",
      shortCode: "LIP"
    }, {
      name: "Magadan Oblast",
      shortCode: "MAG"
    }, {
      name: "Mari El Republic",
      shortCode: "ME"
    }, {
      name: "Republic of Mordovia",
      shortCode: "MO"
    }, {
      name: "Moscow Oblast",
      shortCode: "MOS"
    }, {
      name: "Moscow",
      shortCode: "MOW"
    }, {
      name: "Murmansk Oblast",
      shortCode: "MU"
    }, {
      name: "Nenets Autonomous Okrug",
      shortCode: "NEN"
    }, {
      name: "Nizhny Novgorod Oblast",
      shortCode: "NIZ"
    }, {
      name: "Novgorod Oblast",
      shortCode: "NGR"
    }, {
      name: "Novosibirsk Oblast",
      shortCode: "NVS"
    }, {
      name: "Omsk Oblast",
      shortCode: "OMS"
    }, {
      name: "Orenburg Oblast",
      shortCode: "ORE"
    }, {
      name: "Oryol Oblast",
      shortCode: "ORL"
    }, {
      name: "Penza Oblast",
      shortCode: "PNZ"
    }, {
      name: "Perm Krai",
      shortCode: "PER"
    }, {
      name: "Primorsky Krai",
      shortCode: "PRI"
    }, {
      name: "Pskov Oblast",
      shortCode: "PSK"
    }, {
      name: "Rostov Oblast",
      shortCode: "ROS"
    }, {
      name: "Ryazan Oblast",
      shortCode: "RYA"
    }, {
      name: "Saint Petersburg",
      shortCode: "SPE"
    }, {
      name: "Sakha (Yakutia) Republic",
      shortCode: "SA"
    }, {
      name: "Sakhalin Oblast",
      shortCode: "SAK"
    }, {
      name: "Samara Oblast",
      shortCode: "SAM"
    }, {
      name: "Saratov Oblast",
      shortCode: "SAR"
    }, {
      name: "Republic of North Ossetia-Alania",
      shortCode: "NOA"
    }, {
      name: "Smolensk Oblast",
      shortCode: "SMO"
    }, {
      name: "Stavropol Krai",
      shortCode: "STA"
    }, {
      name: "Sverdlovsk Oblast",
      shortCode: "SVE"
    }, {
      name: "Tambov Oblast",
      shortCode: "TAM"
    }, {
      name: "Republic of Tatarstan",
      shortCode: "TA"
    }, {
      name: "Tomsk Oblast",
      shortCode: "TOM"
    }, {
      name: "Tuva Republic",
      shortCode: "TU"
    }, {
      name: "Tula Oblast",
      shortCode: "TUL"
    }, {
      name: "Tver Oblast",
      shortCode: "TVE"
    }, {
      name: "Tyumen Oblast",
      shortCode: "TYU"
    }, {
      name: "Udmurt Republic",
      shortCode: "UD"
    }, {
      name: "Ulyanovsk Oblast",
      shortCode: "ULY"
    }, {
      name: "Vladimir Oblast",
      shortCode: "VLA"
    }, {
      name: "Volgograd Oblast",
      shortCode: "VGG"
    }, {
      name: "Vologda Oblast",
      shortCode: "VLG"
    }, {
      name: "Voronezh Oblast",
      shortCode: "VOR"
    }, {
      name: "Yamalo-Nenets Autonomous Okrug",
      shortCode: "YAN"
    }, {
      name: "Yaroslavl Oblast",
      shortCode: "YAR"
    }, {
      name: "Zabaykalsky Krai",
      shortCode: "ZAB"
    }]
  }, {
    countryName: "Rwanda",
    countryShortCode: "RW",
    regions: [{
      name: "Kigali",
      shortCode: "01"
    }, {
      name: "Eastern",
      shortCode: "02"
    }, {
      name: "Northern",
      shortCode: "03"
    }, {
      name: "Western",
      shortCode: "04"
    }, {
      name: "Southern",
      shortCode: "05"
    }]
  }, {
    countryName: "Saint Barthélemy",
    countryShortCode: "BL",
    regions: [{
      name: "Au Vent",
      shortCode: "02"
    }, {
      name: "Sous le Vent",
      shortCode: "01"
    }]
  }, {
    countryName: "Saint Helena, Ascension and Tristan da Cunha",
    countryShortCode: "SH",
    regions: [{
      name: "Ascension",
      shortCode: "AC"
    }, {
      name: "Saint Helena",
      shortCode: "HL"
    }, {
      name: "Tristan da Cunha",
      shortCode: "TA"
    }]
  }, {
    countryName: "Saint Kitts and Nevis",
    countryShortCode: "KN",
    regions: [{
      name: "Saint Kitts",
      shortCode: "K"
    }, {
      name: "Nevis",
      shortCode: "N"
    }]
  }, {
    countryName: "Saint Lucia",
    countryShortCode: "LC",
    regions: [{
      name: "Anse-la-Raye",
      shortCode: "01"
    }, {
      name: "Canaries",
      shortCode: "12"
    }, {
      name: "Castries",
      shortCode: "02"
    }, {
      name: "Choiseul",
      shortCode: "03"
    }, {
      name: "Dennery",
      shortCode: "05"
    }, {
      name: "Gros Islet",
      shortCode: "06"
    }, {
      name: "Laborie",
      shortCode: "07"
    }, {
      name: "Micoud",
      shortCode: "08"
    }, {
      name: "Soufriere",
      shortCode: "10"
    }, {
      name: "Vieux Fort",
      shortCode: "11"
    }]
  }, {
    countryName: "Saint Martin",
    countryShortCode: "MF",
    regions: [{
      name: "Saint Martin"
    }]
  }, {
    countryName: "Saint Pierre and Miquelon",
    countryShortCode: "PM",
    regions: [{
      name: "Miquelon"
    }, {
      name: "Saint Pierre"
    }]
  }, {
    countryName: "Saint Vincent and the Grenadines",
    countryShortCode: "VC",
    regions: [{
      name: "Charlotte",
      shortCode: "01"
    }, {
      name: "Grenadines",
      shortCode: "06"
    }, {
      name: "Saint Andrew",
      shortCode: "02"
    }, {
      name: "Saint David",
      shortCode: "03"
    }, {
      name: "Saint George",
      shortCode: "04"
    }, {
      name: "Saint Patrick",
      shortCode: "05"
    }]
  }, {
    countryName: "Samoa",
    countryShortCode: "WS",
    regions: [{
      name: "A'ana",
      shortCode: "AA"
    }, {
      name: "Aiga-i-le-Tai",
      shortCode: "AL"
    }, {
      name: "Atua",
      shortCode: "AT"
    }, {
      name: "Fa'asaleleaga",
      shortCode: "FA"
    }, {
      name: "Gaga'emauga",
      shortCode: "GE"
    }, {
      name: "Gagaifomauga",
      shortCode: "GI"
    }, {
      name: "Palauli",
      shortCode: "PA"
    }, {
      name: "Satupa'itea",
      shortCode: "SA"
    }, {
      name: "Tuamasaga",
      shortCode: "TU"
    }, {
      name: "Va'a-o-Fonoti",
      shortCode: "VF"
    }, {
      name: "Vaisigano",
      shortCode: "VS"
    }]
  }, {
    countryName: "San Marino",
    countryShortCode: "SM",
    regions: [{
      name: "San Marino",
      shortCode: "SM"
    }]
  }, {
    countryName: "Sao Tome and Principe",
    countryShortCode: "ST",
    regions: [{
      name: "Principe",
      shortCode: "P"
    }, {
      name: "Sao Tome",
      shortCode: "S"
    }]
  }, {
    countryName: "Saudi Arabia",
    countryShortCode: "SA",
    regions: [{
      name: "'Asir",
      shortCode: "14"
    }, {
      name: "Al Bahah",
      shortCode: "11"
    }, {
      name: "Al Hudud ash Shamaliyah",
      shortCode: "08"
    }, {
      name: "Al Jawf",
      shortCode: "12"
    }, {
      name: "Al Madinah al Munawwarah",
      shortCode: "03"
    }, {
      name: "Al Qasim",
      shortCode: "05"
    }, {
      name: "Ar Riyad",
      shortCode: "01"
    }, {
      name: "Ash Sharqiyah",
      shortCode: "04"
    }, {
      name: "Ha'il",
      shortCode: "06"
    }, {
      name: "Jazan",
      shortCode: "09"
    }, {
      name: "Makkah al Mukarramah",
      shortCode: "02"
    }, {
      name: "Najran",
      shortCode: "10"
    }, {
      name: "Tabuk",
      shortCode: "07"
    }]
  }, {
    countryName: "Senegal",
    countryShortCode: "SN",
    regions: [{
      name: "Dakar",
      shortCode: "DK"
    }, {
      name: "Diourbel",
      shortCode: "DB"
    }, {
      name: "Fatick",
      shortCode: "FK"
    }, {
      name: "Kaffrine",
      shortCode: "KA"
    }, {
      name: "Kaolack",
      shortCode: "KL"
    }, {
      name: "Kedougou",
      shortCode: "KE"
    }, {
      name: "Kolda",
      shortCode: "KD"
    }, {
      name: "Louga",
      shortCode: "LG"
    }, {
      name: "Matam",
      shortCode: "MT"
    }, {
      name: "Saint-Louis",
      shortCode: "SL"
    }, {
      name: "Sedhiou",
      shortCode: "SE"
    }, {
      name: "Tambacounda",
      shortCode: "TC"
    }, {
      name: "Thies",
      shortCode: "TH"
    }, {
      name: "Ziguinchor",
      shortCode: "ZG"
    }]
  }, {
    countryName: "Serbia",
    countryShortCode: "RS",
    regions: [{
      name: "Beograd (Belgrade)",
      shortCode: "00"
    }, {
      name: "Borski",
      shortCode: "14"
    }, {
      name: "Braničevski",
      shortCode: "11"
    }, {
      name: "Jablanički",
      shortCode: "23"
    }, {
      name: "Južnobački",
      shortCode: "06"
    }, {
      name: "Južnobanatski",
      shortCode: "04"
    }, {
      name: "Kolubarski",
      shortCode: "09"
    }, {
      name: "Kosovski",
      shortCode: "25"
    }, {
      name: "Kosovsko-Mitrovački",
      shortCode: "28"
    }, {
      name: "Kosovsko-Pomoravski",
      shortCode: "29"
    }, {
      name: "Mačvanski",
      shortCode: "08"
    }, {
      name: "Moravički",
      shortCode: "17"
    }, {
      name: "Nišavski",
      shortCode: "20"
    }, {
      name: "Pčinjski",
      shortCode: "24"
    }, {
      name: "Pećki",
      shortCode: "26"
    }, {
      name: "Pirotski",
      shortCode: "22"
    }, {
      name: "Podunavski",
      shortCode: "10"
    }, {
      name: "Pomoravski",
      shortCode: "13"
    }, {
      name: "Prizrenski",
      shortCode: "27"
    }, {
      name: "Rasinski",
      shortCode: "19"
    }, {
      name: "Raški",
      shortCode: "18"
    }, {
      name: "Severnobački",
      shortCode: "01"
    }, {
      name: "Severnobanatski",
      shortCode: "03"
    }, {
      name: "Srednjebanatski",
      shortCode: "02"
    }, {
      name: "Sremski",
      shortCode: "07"
    }, {
      name: "Šumadijski",
      shortCode: "12"
    }, {
      name: "Toplički",
      shortCode: "21"
    }, {
      name: "Zaječarski",
      shortCode: "15"
    }, {
      name: "Zapadnobački",
      shortCode: "05"
    }, {
      name: "Zlatiborski",
      shortCode: "16"
    }]
  }, {
    countryName: "Seychelles",
    countryShortCode: "SC",
    regions: [{
      name: "Anse aux Pins",
      shortCode: "01"
    }, {
      name: "Anse Boileau",
      shortCode: "02"
    }, {
      name: "Anse Etoile",
      shortCode: "03"
    }, {
      name: "Anse Royale",
      shortCode: "05"
    }, {
      name: "Anu Cap",
      shortCode: "04"
    }, {
      name: "Baie Lazare",
      shortCode: "06"
    }, {
      name: "Baie Sainte Anne",
      shortCode: "07"
    }, {
      name: "Beau Vallon",
      shortCode: "08"
    }, {
      name: "Bel Air",
      shortCode: "09"
    }, {
      name: "Bel Ombre",
      shortCode: "10"
    }, {
      name: "Cascade",
      shortCode: "11"
    }, {
      name: "Glacis",
      shortCode: "12"
    }, {
      name: "Grand'Anse Mahe",
      shortCode: "13"
    }, {
      name: "Grand'Anse Praslin",
      shortCode: "14"
    }, {
      name: "La Digue",
      shortCode: "15"
    }, {
      name: "La Riviere Anglaise",
      shortCode: "16"
    }, {
      name: "Les Mamelles",
      shortCode: "24"
    }, {
      name: "Mont Buxton",
      shortCode: "17"
    }, {
      name: "Mont Fleuri",
      shortCode: "18"
    }, {
      name: "Plaisance",
      shortCode: "19"
    }, {
      name: "Pointe La Rue",
      shortCode: "20"
    }, {
      name: "Port Glaud",
      shortCode: "21"
    }, {
      name: "Roche Caiman",
      shortCode: "25"
    }, {
      name: "Saint Louis",
      shortCode: "22"
    }, {
      name: "Takamaka",
      shortCode: "23"
    }]
  }, {
    countryName: "Sierra Leone",
    countryShortCode: "SL",
    regions: [{
      name: "Eastern",
      shortCode: "E"
    }, {
      name: "Northern",
      shortCode: "N"
    }, {
      name: "Southern",
      shortCode: "S"
    }, {
      name: "Western",
      shortCode: "W"
    }]
  }, {
    countryName: "Singapore",
    countryShortCode: "SG",
    regions: [{
      name: "Central Singapore",
      shortCode: "01"
    }, {
      name: "North East",
      shortCode: "02"
    }, {
      name: "North West",
      shortCode: "03"
    }, {
      name: "South East",
      shortCode: "04"
    }, {
      name: "South West",
      shortCode: "05"
    }]
  }, {
    countryName: "Sint Maarten (Dutch part)",
    countryShortCode: "SX",
    regions: [{
      name: "Sint Maarten"
    }]
  }, {
    countryName: "Slovakia",
    countryShortCode: "SK",
    regions: [{
      name: "Banskobystricky",
      shortCode: "BC"
    }, {
      name: "Bratislavsky",
      shortCode: "BL"
    }, {
      name: "Kosicky",
      shortCode: "KI"
    }, {
      name: "Nitriansky",
      shortCode: "NI"
    }, {
      name: "Presovsky",
      shortCode: "PV"
    }, {
      name: "Trenciansky",
      shortCode: "TC"
    }, {
      name: "Trnavsky",
      shortCode: "TA"
    }, {
      name: "Zilinsky",
      shortCode: "ZI"
    }]
  }, {
    countryName: "Slovenia",
    countryShortCode: "SI",
    regions: [{
      name: "Ajdovscina",
      shortCode: "001"
    }, {
      name: "Apace",
      shortCode: "195"
    }, {
      name: "Beltinci",
      shortCode: "002"
    }, {
      name: "Benedikt",
      shortCode: "148"
    }, {
      name: "Bistrica ob Sotli",
      shortCode: "149"
    }, {
      name: "Bled",
      shortCode: "003"
    }, {
      name: "Bloke",
      shortCode: "150"
    }, {
      name: "Bohinj",
      shortCode: "004"
    }, {
      name: "Borovnica",
      shortCode: "005"
    }, {
      name: "Bovec",
      shortCode: "006"
    }, {
      name: "Braslovce",
      shortCode: "151"
    }, {
      name: "Brda",
      shortCode: "007"
    }, {
      name: "Brezice",
      shortCode: "009"
    }, {
      name: "Brezovica",
      shortCode: "008"
    }, {
      name: "Cankova",
      shortCode: "152"
    }, {
      name: "Celje",
      shortCode: "011"
    }, {
      name: "Cerklje na Gorenjskem",
      shortCode: "012"
    }, {
      name: "Cerknica",
      shortCode: "013"
    }, {
      name: "Cerkno",
      shortCode: "014"
    }, {
      name: "Cerkvenjak",
      shortCode: "153"
    }, {
      name: "Cirkulane",
      shortCode: "196"
    }, {
      name: "Crensovci",
      shortCode: "015"
    }, {
      name: "Crna na Koroskem",
      shortCode: "016"
    }, {
      name: "Crnomelj",
      shortCode: "017"
    }, {
      name: "Destrnik",
      shortCode: "018"
    }, {
      name: "Divaca",
      shortCode: "019"
    }, {
      name: "Dobje",
      shortCode: "154"
    }, {
      name: "Dobrepolje",
      shortCode: "020"
    }, {
      name: "Dobrna",
      shortCode: "155"
    }, {
      name: "Dobrova-Polhov Gradec",
      shortCode: "021"
    }, {
      name: "Dobrovnik",
      shortCode: "156"
    }, {
      name: "Dol pri Ljubljani",
      shortCode: "022"
    }, {
      name: "Dolenjske Toplice",
      shortCode: "157"
    }, {
      name: "Domzale",
      shortCode: "023"
    }, {
      name: "Dornava",
      shortCode: "024"
    }, {
      name: "Dravograd",
      shortCode: "025"
    }, {
      name: "Duplek",
      shortCode: "026"
    }, {
      name: "Gorenja Vas-Poljane",
      shortCode: "027"
    }, {
      name: "Gorisnica",
      shortCode: "028"
    }, {
      name: "Gorje",
      shortCode: "207"
    }, {
      name: "Gornja Radgona",
      shortCode: "029"
    }, {
      name: "Gornji Grad",
      shortCode: "030"
    }, {
      name: "Gornji Petrovci",
      shortCode: "031"
    }, {
      name: "Grad",
      shortCode: "158"
    }, {
      name: "Grosuplje",
      shortCode: "032"
    }, {
      name: "Hajdina",
      shortCode: "159"
    }, {
      name: "Hoce-Slivnica",
      shortCode: "160"
    }, {
      name: "Hodos",
      shortCode: "161"
    }, {
      name: "Horjul",
      shortCode: "162"
    }, {
      name: "Hrastnik",
      shortCode: "034"
    }, {
      name: "Hrpelje-Kozina",
      shortCode: "035"
    }, {
      name: "Idrija",
      shortCode: "036"
    }, {
      name: "Ig",
      shortCode: "037"
    }, {
      name: "Ilirska Bistrica",
      shortCode: "038"
    }, {
      name: "Ivancna Gorica",
      shortCode: "039"
    }, {
      name: "Izola",
      shortCode: "040s"
    }, {
      name: "Jesenice",
      shortCode: "041"
    }, {
      name: "Jursinci",
      shortCode: "042"
    }, {
      name: "Kamnik",
      shortCode: "043"
    }, {
      name: "Kanal",
      shortCode: "044"
    }, {
      name: "Kidricevo",
      shortCode: "045"
    }, {
      name: "Kobarid",
      shortCode: "046"
    }, {
      name: "Kobilje",
      shortCode: "047"
    }, {
      name: "Kocevje",
      shortCode: "048"
    }, {
      name: "Komen",
      shortCode: "049"
    }, {
      name: "Komenda",
      shortCode: "164"
    }, {
      name: "Koper",
      shortCode: "050"
    }, {
      name: "Kodanjevica na Krki",
      shortCode: "197"
    }, {
      name: "Kostel",
      shortCode: "165"
    }, {
      name: "Kozje",
      shortCode: "051"
    }, {
      name: "Kranj",
      shortCode: "052"
    }, {
      name: "Kranjska Gora",
      shortCode: "053"
    }, {
      name: "Krizevci",
      shortCode: "166"
    }, {
      name: "Krsko",
      shortCode: "054"
    }, {
      name: "Kungota",
      shortCode: "055"
    }, {
      name: "Kuzma",
      shortCode: "056"
    }, {
      name: "Lasko",
      shortCode: "057"
    }, {
      name: "Lenart",
      shortCode: "058"
    }, {
      name: "Lendava",
      shortCode: "059"
    }, {
      name: "Litija",
      shortCode: "068"
    }, {
      name: "Ljubljana",
      shortCode: "061"
    }, {
      name: "Ljubno",
      shortCode: "062"
    }, {
      name: "Ljutomer",
      shortCode: "063"
    }, {
      name: "Log-Dragomer",
      shortCode: "208"
    }, {
      name: "Logatec",
      shortCode: "064"
    }, {
      name: "Loska Dolina",
      shortCode: "065"
    }, {
      name: "Loski Potok",
      shortCode: "066"
    }, {
      name: "Lovrenc na Pohorju",
      shortCode: "167"
    }, {
      name: "Lukovica",
      shortCode: "068"
    }, {
      name: "Luce",
      shortCode: "067"
    }, {
      name: "Majsperk",
      shortCode: "069"
    }, {
      name: "Makole",
      shortCode: "198"
    }, {
      name: "Maribor",
      shortCode: "070"
    }, {
      name: "Markovci",
      shortCode: "168"
    }, {
      name: "Medvode",
      shortCode: "071"
    }, {
      name: "Menges",
      shortCode: "072"
    }, {
      name: "Metlika",
      shortCode: "073"
    }, {
      name: "Mezica",
      shortCode: "074"
    }, {
      name: "Miklavz na Dravskem Polju",
      shortCode: "169"
    }, {
      name: "Miren-Kostanjevica",
      shortCode: "075"
    }, {
      name: "Mirna",
      shortCode: "212"
    }, {
      name: "Mirna Pec",
      shortCode: "170"
    }, {
      name: "Mislinja",
      shortCode: "076"
    }, {
      name: "Mokronog-Trebelno",
      shortCode: "199"
    }, {
      name: "Moravce",
      shortCode: "077"
    }, {
      name: "Moravske Toplice",
      shortCode: "078"
    }, {
      name: "Mozirje",
      shortCode: "079"
    }, {
      name: "Murska Sobota",
      shortCode: "080"
    }, {
      name: "Naklo",
      shortCode: "082"
    }, {
      name: "Nazarje",
      shortCode: "083"
    }, {
      name: "Nova Gorica",
      shortCode: "084"
    }, {
      name: "Novo Mesto",
      shortCode: "085"
    }, {
      name: "Odranci",
      shortCode: "086"
    }, {
      name: "Ormoz",
      shortCode: "087"
    }, {
      name: "Osilnica",
      shortCode: "088"
    }, {
      name: "Pesnica",
      shortCode: "089"
    }, {
      name: "Piran",
      shortCode: "090"
    }, {
      name: "Pivka",
      shortCode: "091"
    }, {
      name: "Podcetrtek",
      shortCode: "092"
    }, {
      name: "Podlehnik",
      shortCode: "172"
    }, {
      name: "Podvelka",
      shortCode: "093"
    }, {
      name: "Poljcane",
      shortCode: "200"
    }, {
      name: "Postojna",
      shortCode: "094"
    }, {
      name: "Prebold",
      shortCode: "174"
    }, {
      name: "Preddvor",
      shortCode: "095"
    }, {
      name: "Prevalje",
      shortCode: "175"
    }, {
      name: "Ptuj",
      shortCode: "096"
    }, {
      name: "Race-Fram",
      shortCode: "098"
    }, {
      name: "Radece",
      shortCode: "099"
    }, {
      name: "Radenci",
      shortCode: "100"
    }, {
      name: "Radlje ob Dravi",
      shortCode: "101"
    }, {
      name: "Radovljica",
      shortCode: "102"
    }, {
      name: "Ravne na Koroskem",
      shortCode: "103"
    }, {
      name: "Razkrizje",
      shortCode: "176"
    }, {
      name: "Recica ob Savinji",
      shortCode: "209"
    }, {
      name: "Rence-Vogrsko",
      shortCode: "201"
    }, {
      name: "Ribnica",
      shortCode: "104"
    }, {
      name: "Ribnica na Poboriu",
      shortCode: "177"
    }, {
      name: "Rogaska Slatina",
      shortCode: "106"
    }, {
      name: "Rogasovci",
      shortCode: "105"
    }, {
      name: "Rogatec",
      shortCode: "107"
    }, {
      name: "Ruse",
      shortCode: "108"
    }, {
      name: "Salovci",
      shortCode: "033"
    }, {
      name: "Selnica ob Dravi",
      shortCode: "178"
    }, {
      name: "Semic",
      shortCode: "109"
    }, {
      name: "Sempeter-Vrtojba",
      shortCode: "183"
    }, {
      name: "Sencur",
      shortCode: "117"
    }, {
      name: "Sentilj",
      shortCode: "118"
    }, {
      name: "Sentjernej",
      shortCode: "119"
    }, {
      name: "Sentjur",
      shortCode: "120"
    }, {
      name: "Sentrupert",
      shortCode: "211"
    }, {
      name: "Sevnica",
      shortCode: "110"
    }, {
      name: "Sezana",
      shortCode: "111"
    }, {
      name: "Skocjan",
      shortCode: "121"
    }, {
      name: "Skofja Loka",
      shortCode: "122"
    }, {
      name: "Skofljica",
      shortCode: "123"
    }, {
      name: "Slovenj Gradec",
      shortCode: "112"
    }, {
      name: "Slovenska Bistrica",
      shortCode: "113"
    }, {
      name: "Slovenske Konjice",
      shortCode: "114"
    }, {
      name: "Smarje pri elsah",
      shortCode: "124"
    }, {
      name: "Smarjeske Toplice",
      shortCode: "206"
    }, {
      name: "Smartno ob Paki",
      shortCode: "125"
    }, {
      name: "Smartno pri Litiji",
      shortCode: "194"
    }, {
      name: "Sodrazica",
      shortCode: "179"
    }, {
      name: "Solcava",
      shortCode: "180"
    }, {
      name: "Sostanj",
      shortCode: "126"
    }, {
      name: "Sredisce ob Dravi",
      shortCode: "202"
    }, {
      name: "Starse",
      shortCode: "115"
    }, {
      name: "Store",
      shortCode: "127"
    }, {
      name: "Straza",
      shortCode: "203"
    }, {
      name: "Sveta Ana",
      shortCode: "181"
    }, {
      name: "Sveta Trojica v Slovenskih Goricah",
      shortCode: "204"
    }, {
      name: "Sveta Andraz v Slovenskih Goricah",
      shortCode: "182"
    }, {
      name: "Sveti Jurij",
      shortCode: "116"
    }, {
      name: "Sveti Jurij v Slovenskih Goricah",
      shortCode: "210"
    }, {
      name: "Sveti Tomaz",
      shortCode: "205"
    }, {
      name: "Tabor",
      shortCode: "184"
    }, {
      name: "Tisina",
      shortCode: "128"
    }, {
      name: "Tolmin",
      shortCode: "128"
    }, {
      name: "Trbovlje",
      shortCode: "129"
    }, {
      name: "Trebnje",
      shortCode: "130"
    }, {
      name: "Trnovska Vas",
      shortCode: "185"
    }, {
      name: "Trzin",
      shortCode: "186"
    }, {
      name: "Trzic",
      shortCode: "131"
    }, {
      name: "Turnisce",
      shortCode: "132"
    }, {
      name: "Velenje",
      shortCode: "133"
    }, {
      name: "Velika Polana",
      shortCode: "187"
    }, {
      name: "Velike Lasce",
      shortCode: "134"
    }, {
      name: "Verzej",
      shortCode: "188"
    }, {
      name: "Videm",
      shortCode: "135"
    }, {
      name: "Vipava",
      shortCode: "136"
    }, {
      name: "Vitanje",
      shortCode: "137"
    }, {
      name: "Vodice",
      shortCode: "138"
    }, {
      name: "Vojnik",
      shortCode: "139"
    }, {
      name: "Vransko",
      shortCode: "189"
    }, {
      name: "Vrhnika",
      shortCode: "140"
    }, {
      name: "Vuzenica",
      shortCode: "141"
    }, {
      name: "Zagorje ob Savi",
      shortCode: "142"
    }, {
      name: "Zavrc",
      shortCode: "143"
    }, {
      name: "Zrece",
      shortCode: "144"
    }, {
      name: "Zalec",
      shortCode: "190"
    }, {
      name: "Zelezniki",
      shortCode: "146"
    }, {
      name: "Zetale",
      shortCode: "191"
    }, {
      name: "Ziri",
      shortCode: "147"
    }, {
      name: "Zirovnica",
      shortCode: "192"
    }, {
      name: "Zuzemberk",
      shortCode: "193"
    }]
  }, {
    countryName: "Solomon Islands",
    countryShortCode: "SB",
    regions: [{
      name: "Central",
      shortCode: "CE"
    }, {
      name: "Choiseul",
      shortCode: "CH"
    }, {
      name: "Guadalcanal",
      shortCode: "GU"
    }, {
      name: "Honiara",
      shortCode: "CT"
    }, {
      name: "Isabel",
      shortCode: "IS"
    }, {
      name: "Makira-Ulawa",
      shortCode: "MK"
    }, {
      name: "Malaita",
      shortCode: "ML"
    }, {
      name: "Rennell and Bellona",
      shortCode: "RB"
    }, {
      name: "Temotu",
      shortCode: "TE"
    }, {
      name: "Western",
      shortCode: "WE"
    }]
  }, {
    countryName: "Somalia",
    countryShortCode: "SO",
    regions: [{
      name: "Awdal",
      shortCode: "AW"
    }, {
      name: "Bakool",
      shortCode: "BK"
    }, {
      name: "Banaadir",
      shortCode: "BN"
    }, {
      name: "Bari",
      shortCode: "BR"
    }, {
      name: "Bay",
      shortCode: "BY"
    }, {
      name: "Galguduud",
      shortCode: "GA"
    }, {
      name: "Gedo",
      shortCode: "GE"
    }, {
      name: "Hiiraan",
      shortCode: "HI"
    }, {
      name: "Jubbada Dhexe",
      shortCode: "JD"
    }, {
      name: "Jubbada Hoose",
      shortCode: "JH"
    }, {
      name: "Mudug",
      shortCode: "MU"
    }, {
      name: "Nugaal",
      shortCode: "NU"
    }, {
      name: "Sanaag",
      shortCode: "SA"
    }, {
      name: "Shabeellaha Dhexe",
      shortCode: "SD"
    }, {
      name: "Shabeellaha Hoose",
      shortCode: "SH"
    }, {
      name: "Sool",
      shortCode: "SO"
    }, {
      name: "Togdheer",
      shortCode: "TO"
    }, {
      name: "Woqooyi Galbeed",
      shortCode: "WO"
    }]
  }, {
    countryName: "South Africa",
    countryShortCode: "ZA",
    regions: [{
      name: "Eastern Cape",
      shortCode: "EC"
    }, {
      name: "Free State",
      shortCode: "FS"
    }, {
      name: "Gauteng",
      shortCode: "GT"
    }, {
      name: "KwaZulu-Natal",
      shortCode: "NL"
    }, {
      name: "Limpopo",
      shortCode: "LP"
    }, {
      name: "Mpumalanga",
      shortCode: "MP"
    }, {
      name: "Northern Cape",
      shortCode: "NC"
    }, {
      name: "North West",
      shortCode: "NW"
    }, {
      name: "Western Cape",
      shortCode: "WC"
    }]
  }, {
    countryName: "South Georgia and South Sandwich Islands",
    countryShortCode: "GS",
    regions: [{
      name: "Bird Island"
    }, {
      name: "Bristol Island"
    }, {
      name: "Clerke Rocks"
    }, {
      name: "Montagu Island"
    }, {
      name: "Saunders Island"
    }, {
      name: "South Georgia"
    }, {
      name: "Southern Thule"
    }, {
      name: "Traversay Islands"
    }]
  }, {
    countryName: "South Sudan",
    countryShortCode: "SS",
    regions: [{
      name: "Central Equatoria",
      shortCode: "CE"
    }, {
      name: "Eastern Equatoria",
      shortCode: "EE"
    }, {
      name: "Jonglei",
      shortCode: "JG"
    }, {
      name: "Lakes",
      shortCode: "LK"
    }, {
      name: "Northern Bahr el Ghazal",
      shortCode: "BN"
    }, {
      name: "Unity",
      shortCode: "UY"
    }, {
      name: "Upper Nile",
      shortCode: "NU"
    }, {
      name: "Warrap",
      shortCode: "WR"
    }, {
      name: "Western Bahr el Ghazal",
      shortCode: "BW"
    }, {
      name: "Western Equatoria",
      shortCode: "EW"
    }]
  }, {
    countryName: "Spain",
    countryShortCode: "ES",
    regions: [{
      name: "Albacete",
      shortCode: "AB"
    }, {
      name: "Alicante",
      shortCode: "A"
    }, {
      name: "Almería",
      shortCode: "AN"
    }, {
      name: "Araba/Álava",
      shortCode: "VI"
    }, {
      name: "Asturias",
      shortCode: "O"
    }, {
      name: "Ávila",
      shortCode: "AV"
    }, {
      name: "Badajoz",
      shortCode: "BA"
    }, {
      name: "Barcelona",
      shortCode: "B"
    }, {
      name: "Bizkaia",
      shortCode: "BI"
    }, {
      name: "Burgos",
      shortCode: "BU"
    }, {
      name: "Cáceres",
      shortCode: "CC"
    }, {
      name: "Cádiz",
      shortCode: "CA"
    }, {
      name: "Cantabria",
      shortCode: "S"
    }, {
      name: "Castellón/Castelló",
      shortCode: "CS"
    }, {
      name: "Ceuta",
      shortCode: "CE"
    }, {
      name: "Ciudad Real",
      shortCode: "CR"
    }, {
      name: "Córdoba",
      shortCode: "CO"
    }, {
      name: "A Coruña",
      shortCode: "C"
    }, {
      name: "Cuenca",
      shortCode: "CU"
    }, {
      name: "Gipuzkoa",
      shortCode: "SS"
    }, {
      name: "Girona",
      shortCode: "GI"
    }, {
      name: "Granada",
      shortCode: "GR"
    }, {
      name: "Guadalajara",
      shortCode: "GU"
    }, {
      name: "Huelva",
      shortCode: "H"
    }, {
      name: "Huesca",
      shortCode: "HU"
    }, {
      name: "Illes Balears",
      shortCode: "PM"
    }, {
      name: "Jaén",
      shortCode: "J"
    }, {
      name: "León",
      shortCode: "LE"
    }, {
      name: "Lleida",
      shortCode: "L"
    }, {
      name: "Lugo",
      shortCode: "LU"
    }, {
      name: "Madrid",
      shortCode: "M"
    }, {
      name: "Málaga",
      shortCode: "MA"
    }, {
      name: "Melilla",
      shortCode: "ML"
    }, {
      name: "Murcia",
      shortCode: "MU"
    }, {
      name: "Navarra/Nafarroa",
      shortCode: "NA"
    }, {
      name: "Ourense",
      shortCode: "OR"
    }, {
      name: "Palencia",
      shortCode: "P"
    }, {
      name: "Las Palmas",
      shortCode: "GC"
    }, {
      name: "Pontevedra",
      shortCode: "PO"
    }, {
      name: "La Rioja",
      shortCode: "LO"
    }, {
      name: "Salamanca",
      shortCode: "SA"
    }, {
      name: "Santa Cruz de Tenerife",
      shortCode: "TF"
    }, {
      name: "Segovia",
      shortCode: "SG"
    }, {
      name: "Sevilla",
      shortCode: "SE"
    }, {
      name: "Soria",
      shortCode: "SO"
    }, {
      name: "Tarragona",
      shortCode: "T"
    }, {
      name: "Teruel",
      shortCode: "TE"
    }, {
      name: "Toledo",
      shortCode: "TO"
    }, {
      name: "Valencia/València",
      shortCode: "V"
    }, {
      name: "Valladolid",
      shortCode: "VA"
    }, {
      name: "Zamora",
      shortCode: "ZA"
    }, {
      name: "Zaragoza",
      shortCode: "Z"
    }]
  }, {
    countryName: "Sri Lanka",
    countryShortCode: "LK",
    regions: [{
      name: "Basnahira",
      shortCode: "1"
    }, {
      name: "Dakunu",
      shortCode: "3"
    }, {
      name: "Madhyama",
      shortCode: "2"
    }, {
      name: "Naegenahira",
      shortCode: "5"
    }, {
      name: "Sabaragamuwa",
      shortCode: "9"
    }, {
      name: "Uturu",
      shortCode: "4"
    }, {
      name: "Uturumaeda",
      shortCode: "7"
    }, {
      name: "Vayamba",
      shortCode: "6"
    }, {
      name: "Uva",
      shortCode: "8"
    }]
  }, {
    countryName: "Sudan",
    countryShortCode: "SD",
    regions: [{
      name: "Al Bahr al Ahmar",
      shortCode: "RS"
    }, {
      name: "Al Jazirah",
      shortCode: "GZ"
    }, {
      name: "Al Khartum",
      shortCode: "KH"
    }, {
      name: "Al Qadarif",
      shortCode: "GD"
    }, {
      name: "An Nil al Abyad",
      shortCode: "NW"
    }, {
      name: "An Nil al Azraq",
      shortCode: "NB"
    }, {
      name: "Ash Shamaliyah",
      shortCode: "NO"
    }, {
      name: "Gharb Darfur",
      shortCode: "DW"
    }, {
      name: "Gharb Kurdufan",
      shortCode: "GK"
    }, {
      name: "Janub Darfur",
      shortCode: "DS"
    }, {
      name: "Janub Kurdufan",
      shortCode: "KS"
    }, {
      name: "Kassala",
      shortCode: "KA"
    }, {
      name: "Nahr an Nil",
      shortCode: "NR"
    }, {
      name: "Shamal Darfur",
      shortCode: "DN"
    }, {
      name: "Sharq Darfur",
      shortCode: "DE"
    }, {
      name: "Shiamal Kurdufan",
      shortCode: "KN"
    }, {
      name: "Sinnar",
      shortCode: "SI"
    }, {
      name: "Wasat Darfur Zalinjay",
      shortCode: "DC"
    }]
  }, {
    countryName: "Suriname",
    countryShortCode: "SR",
    regions: [{
      name: "Brokopondo",
      shortCode: "BR"
    }, {
      name: "Commewijne",
      shortCode: "CM"
    }, {
      name: "Coronie",
      shortCode: "CR"
    }, {
      name: "Marowijne",
      shortCode: "MA"
    }, {
      name: "Nickerie",
      shortCode: "NI"
    }, {
      name: "Para",
      shortCode: "PR"
    }, {
      name: "Paramaribo",
      shortCode: "PM"
    }, {
      name: "Saramacca",
      shortCode: "SA"
    }, {
      name: "Sipaliwini",
      shortCode: "SI"
    }, {
      name: "Wanica",
      shortCode: "WA"
    }]
  }, {
    countryName: "Swaziland",
    countryShortCode: "SZ",
    regions: [{
      name: "Hhohho",
      shortCode: "HH"
    }, {
      name: "Lubombo",
      shortCode: "LU"
    }, {
      name: "Manzini",
      shortCode: "MA"
    }, {
      name: "Shiselweni",
      shortCode: "SH"
    }]
  }, {
    countryName: "Sweden",
    countryShortCode: "SE",
    regions: [{
      name: "Blekinge",
      shortCode: "K"
    }, {
      name: "Dalarna",
      shortCode: "W"
    }, {
      name: "Gävleborg",
      shortCode: "X"
    }, {
      name: "Gotland",
      shortCode: "I"
    }, {
      name: "Halland",
      shortCode: "N"
    }, {
      name: "Jämtland",
      shortCode: "Z"
    }, {
      name: "Jönköping",
      shortCode: "F"
    }, {
      name: "Kalmar",
      shortCode: "H"
    }, {
      name: "Kronoberg",
      shortCode: "G"
    }, {
      name: "Norrbotten",
      shortCode: "BD"
    }, {
      name: "Örebro",
      shortCode: "T"
    }, {
      name: "Östergötland",
      shortCode: "E"
    }, {
      name: "Skåne",
      shortCode: "M"
    }, {
      name: "Södermanland",
      shortCode: "D"
    }, {
      name: "Stockholm",
      shortCode: "AB"
    }, {
      name: "Uppsala",
      shortCode: "C"
    }, {
      name: "Värmland",
      shortCode: "S"
    }, {
      name: "Västerbotten",
      shortCode: "AC"
    }, {
      name: "Västernorrland",
      shortCode: "Y"
    }, {
      name: "Västmanland",
      shortCode: "U"
    }, {
      name: "Västra Götaland",
      shortCode: "O"
    }]
  }, {
    countryName: "Switzerland",
    countryShortCode: "CH",
    regions: [{
      name: "Aargau",
      shortCode: "AG"
    }, {
      name: "Appenzell Ausserrhoden",
      shortCode: "AR"
    }, {
      name: "Appenzell Innerhoden",
      shortCode: "AI"
    }, {
      name: "Basel-Landschaft",
      shortCode: "BL"
    }, {
      name: "Basel-Stadt",
      shortCode: "BS"
    }, {
      name: "Bern",
      shortCode: "BE"
    }, {
      name: "Fribourg",
      shortCode: "FR"
    }, {
      name: "Genève",
      shortCode: "GE"
    }, {
      name: "Glarus",
      shortCode: "GL"
    }, {
      name: "Graubünden",
      shortCode: "GR"
    }, {
      name: "Jura",
      shortCode: "JU"
    }, {
      name: "Luzern",
      shortCode: "LU"
    }, {
      name: "Neuchâtel",
      shortCode: "NE"
    }, {
      name: "Nidwalden",
      shortCode: "NW"
    }, {
      name: "Obwalden",
      shortCode: "OW"
    }, {
      name: "Sankt Gallen",
      shortCode: "SG"
    }, {
      name: "Schaffhausen",
      shortCode: "SH"
    }, {
      name: "Schwyz",
      shortCode: "SZ"
    }, {
      name: "Solothurn",
      shortCode: "SO"
    }, {
      name: "Thurgau",
      shortCode: "TG"
    }, {
      name: "Ticino",
      shortCode: "TI"
    }, {
      name: "Uri",
      shortCode: "UR"
    }, {
      name: "Valais",
      shortCode: "VS"
    }, {
      name: "Vaud",
      shortCode: "VD"
    }, {
      name: "Zug",
      shortCode: "ZG"
    }, {
      name: "Zürich",
      shortCode: "ZH"
    }]
  }, {
    countryName: "Syrian Arab Republic",
    countryShortCode: "SY",
    regions: [{
      name: "Al Hasakah",
      shortCode: "HA"
    }, {
      name: "Al Ladhiqiyah",
      shortCode: "LA"
    }, {
      name: "Al Qunaytirah",
      shortCode: "QU"
    }, {
      name: "Ar Raqqah",
      shortCode: "RA"
    }, {
      name: "As Suwayda'",
      shortCode: "SU"
    }, {
      name: "Dar'a",
      shortCode: "DR"
    }, {
      name: "Dayr az Zawr",
      shortCode: "DY"
    }, {
      name: "Dimashq",
      shortCode: "DI"
    }, {
      name: "Halab",
      shortCode: "HL"
    }, {
      name: "Hamah",
      shortCode: "HM"
    }, {
      name: "Hims",
      shortCode: "HI"
    }, {
      name: "Idlib",
      shortCode: "ID"
    }, {
      name: "Rif Dimashq",
      shortCode: "RD"
    }, {
      name: "Tartus",
      shortCode: "TA"
    }]
  }, {
    countryName: "Taiwan",
    countryShortCode: "TW",
    regions: [{
      name: "Chang-hua",
      shortCode: "CHA"
    }, {
      name: "Chia-i",
      shortCode: "CYQ"
    }, {
      name: "Hsin-chu",
      shortCode: "HSQ"
    }, {
      name: "Hua-lien",
      shortCode: "HUA"
    }, {
      name: "Kao-hsiung",
      shortCode: "KHH"
    }, {
      name: "Keelung",
      shortCode: "KEE"
    }, {
      name: "Kinmen",
      shortCode: "KIN"
    }, {
      name: "Lienchiang",
      shortCode: "LIE"
    }, {
      name: "Miao-li",
      shortCode: "MIA"
    }, {
      name: "Nan-t'ou",
      shortCode: "NAN"
    }, {
      name: "P'eng-hu",
      shortCode: "PEN"
    }, {
      name: "New Taipei",
      shortCode: "NWT"
    }, {
      name: "P'ing-tung",
      shortCode: "PING"
    }, {
      name: "T'ai-chung",
      shortCode: "TXG"
    }, {
      name: "T'ai-nan",
      shortCode: "TNN"
    }, {
      name: "T'ai-pei",
      shortCode: "TPE"
    }, {
      name: "T'ai-tung",
      shortCode: "TTT"
    }, {
      name: "T'ao-yuan",
      shortCode: "TAO"
    }, {
      name: "Yi-lan",
      shortCode: "ILA"
    }, {
      name: "Yun-lin",
      shortCode: "YUN"
    }]
  }, {
    countryName: "Tajikistan",
    countryShortCode: "TJ",
    regions: [{
      name: "Dushanbe",
      shortCode: "DU"
    }, {
      name: "Kŭhistoni Badakhshon",
      shortCode: "GB"
    }, {
      name: "Khatlon",
      shortCode: "KT"
    }, {
      name: "Sughd",
      shortCode: "SU"
    }]
  }, {
    countryName: "Tanzania, United Republic of",
    countryShortCode: "TZ",
    regions: [{
      name: "Arusha",
      shortCode: "01"
    }, {
      name: "Coast",
      shortCode: "19"
    }, {
      name: "Dar es Salaam",
      shortCode: "02"
    }, {
      name: "Dodoma",
      shortCode: "03"
    }, {
      name: "Iringa",
      shortCode: "04"
    }, {
      name: "Kagera",
      shortCode: "05"
    }, {
      name: "Kigoma",
      shortCode: "08"
    }, {
      name: "Kilimanjaro",
      shortCode: "09"
    }, {
      name: "Lindi",
      shortCode: "12"
    }, {
      name: "Manyara",
      shortCode: "26"
    }, {
      name: "Mara",
      shortCode: "13"
    }, {
      name: "Mbeya",
      shortCode: "14"
    }, {
      name: "Morogoro",
      shortCode: "16"
    }, {
      name: "Mtwara",
      shortCode: "17"
    }, {
      name: "Mwanza",
      shortCode: "18"
    }, {
      name: "Pemba North",
      shortCode: "06"
    }, {
      name: "Pemba South",
      shortCode: "10"
    }, {
      name: "Rukwa",
      shortCode: "20"
    }, {
      name: "Ruvuma",
      shortCode: "21"
    }, {
      name: "Shinyanga",
      shortCode: "22"
    }, {
      name: "Singida",
      shortCode: "23"
    }, {
      name: "Tabora",
      shortCode: "24"
    }, {
      name: "Tanga",
      shortCode: "25"
    }, {
      name: "Zanzibar North",
      shortCode: "07"
    }, {
      name: "Zanzibar Central/South",
      shortCode: "11"
    }, {
      name: "Zanzibar Urban/West",
      shortCode: "15"
    }]
  }, {
    countryName: "Thailand",
    countryShortCode: "TH",
    regions: [{
      name: "Amnat Charoen",
      shortCode: "37"
    }, {
      name: "Ang Thong",
      shortCode: "15"
    }, {
      name: "Bueng Kan",
      shortCode: "38"
    }, {
      name: "Buri Ram",
      shortCode: "31"
    }, {
      name: "Chachoengsao",
      shortCode: "24"
    }, {
      name: "Chai Nat",
      shortCode: "18"
    }, {
      name: "Chaiyaphum",
      shortCode: "36"
    }, {
      name: "Chanthaburi",
      shortCode: "22"
    }, {
      name: "Chiang Mai",
      shortCode: "50"
    }, {
      name: "Chiang Rai",
      shortCode: "57"
    }, {
      name: "Chon Buri",
      shortCode: "20"
    }, {
      name: "Chumphon",
      shortCode: "86"
    }, {
      name: "Kalasin",
      shortCode: "46"
    }, {
      name: "Kamphaeng Phet",
      shortCode: "62"
    }, {
      name: "Kanchanaburi",
      shortCode: "71"
    }, {
      name: "Khon Kaen",
      shortCode: "40"
    }, {
      name: "Krabi",
      shortCode: "81"
    }, {
      name: "Krung Thep Mahanakhon (Bangkok)",
      shortCode: "10"
    }, {
      name: "Lampang",
      shortCode: "52"
    }, {
      name: "Lamphun",
      shortCode: "51"
    }, {
      name: "Loei",
      shortCode: "42"
    }, {
      name: "Lop Buri",
      shortCode: "16"
    }, {
      name: "Mae Hong Son",
      shortCode: "58"
    }, {
      name: "Maha Sarakham",
      shortCode: "44"
    }, {
      name: "Mukdahan",
      shortCode: "49"
    }, {
      name: "Nakhon Nayok",
      shortCode: "26"
    }, {
      name: "Nakhon Phathom",
      shortCode: "73"
    }, {
      name: "Nakhon Phanom",
      shortCode: "48"
    }, {
      name: "Nakhon Ratchasima",
      shortCode: "30"
    }, {
      name: "Nakhon Sawan",
      shortCode: "60"
    }, {
      name: "Nakhon Si Thammarat",
      shortCode: "80"
    }, {
      name: "Nan",
      shortCode: "55"
    }, {
      name: "Narathiwat",
      shortCode: "96"
    }, {
      name: "Nong Bua Lam Phu",
      shortCode: "39"
    }, {
      name: "Nong Khai",
      shortCode: "43"
    }, {
      name: "Nonthaburi",
      shortCode: "12"
    }, {
      name: "Pathum Thani",
      shortCode: "13"
    }, {
      name: "Pattani",
      shortCode: "94"
    }, {
      name: "Phangnga",
      shortCode: "82"
    }, {
      name: "Phatthalung",
      shortCode: "93"
    }, {
      name: "Phayao",
      shortCode: "56"
    }, {
      name: "Phetchabun",
      shortCode: "76"
    }, {
      name: "Phetchaburi",
      shortCode: "76"
    }, {
      name: "Phichit",
      shortCode: "66"
    }, {
      name: "Phitsanulok",
      shortCode: "65"
    }, {
      name: "Phra Nakhon Si Ayutthaya",
      shortCode: "14"
    }, {
      name: "Phrae",
      shortCode: "54"
    }, {
      name: "Phuket",
      shortCode: "83"
    }, {
      name: "Prachin Buri",
      shortCode: "25"
    }, {
      name: "Prachuap Khiri Khan",
      shortCode: "77"
    }, {
      name: "Ranong",
      shortCode: "85"
    }, {
      name: "Ratchaburi",
      shortCode: "70"
    }, {
      name: "Rayong",
      shortCode: "21"
    }, {
      name: "Roi Et",
      shortCode: "45"
    }, {
      name: "Sa Kaeo",
      shortCode: "27"
    }, {
      name: "Sakon Nakhon",
      shortCode: "47"
    }, {
      name: "Samut Prakan",
      shortCode: "11"
    }, {
      name: "Samut Sakhon",
      shortCode: "74"
    }, {
      name: "Samut Songkhram",
      shortCode: "75"
    }, {
      name: "Saraburi",
      shortCode: "19"
    }, {
      name: "Satun",
      shortCode: "91"
    }, {
      name: "Sing Buri",
      shortCode: "17"
    }, {
      name: "Si Sa ket",
      shortCode: "33"
    }, {
      name: "Songkhla",
      shortCode: "90"
    }, {
      name: "Sukhothai",
      shortCode: "64"
    }, {
      name: "Suphan Buri",
      shortCode: "72"
    }, {
      name: "Surat Thani",
      shortCode: "84"
    }, {
      name: "Surin",
      shortCode: "32"
    }, {
      name: "Tak",
      shortCode: "63"
    }, {
      name: "Trang",
      shortCode: "92"
    }, {
      name: "Trat",
      shortCode: "23"
    }, {
      name: "Ubon Ratchathani",
      shortCode: "34"
    }, {
      name: "Udon Thani",
      shortCode: "41"
    }, {
      name: "Uthai Thani",
      shortCode: "61"
    }, {
      name: "Uttaradit",
      shortCode: "53"
    }, {
      name: "Yala",
      shortCode: "95"
    }, {
      name: "Yasothon",
      shortCode: "35"
    }]
  }, {
    countryName: "Timor-Leste",
    countryShortCode: "TL",
    regions: [{
      name: "Aileu",
      shortCode: "AL"
    }, {
      name: "Ainaro",
      shortCode: "AN"
    }, {
      name: "Baucau",
      shortCode: "BA"
    }, {
      name: "Bobonaro",
      shortCode: "BO"
    }, {
      name: "Cova Lima",
      shortCode: "CO"
    }, {
      name: "Dili",
      shortCode: "DI"
    }, {
      name: "Ermera",
      shortCode: "ER"
    }, {
      name: "Lautem",
      shortCode: "LA"
    }, {
      name: "Liquica",
      shortCode: "LI"
    }, {
      name: "Manatuto",
      shortCode: "MT"
    }, {
      name: "Manufahi",
      shortCode: "MF"
    }, {
      name: "Oecussi",
      shortCode: "OE"
    }, {
      name: "Viqueque",
      shortCode: "VI"
    }]
  }, {
    countryName: "Togo",
    countryShortCode: "TG",
    regions: [{
      name: "Centre",
      shortCode: "C"
    }, {
      name: "Kara",
      shortCode: "K"
    }, {
      name: "Maritime",
      shortCode: "M"
    }, {
      name: "Plateaux",
      shortCode: "P"
    }, {
      name: "Savannes",
      shortCode: "S"
    }]
  }, {
    countryName: "Tokelau",
    countryShortCode: "TK",
    regions: [{
      name: "Atafu"
    }, {
      name: "Fakaofo"
    }, {
      name: "Nukunonu"
    }]
  }, {
    countryName: "Tonga",
    countryShortCode: "TO",
    regions: [{
      name: "'Eua",
      shortCode: "01"
    }, {
      name: "Ha'apai",
      shortCode: "02"
    }, {
      name: "Niuas",
      shortCode: "03"
    }, {
      name: "Tongatapu",
      shortCode: "04"
    }, {
      name: "Vava'u",
      shortCode: "05"
    }]
  }, {
    countryName: "Trinidad and Tobago",
    countryShortCode: "TT",
    regions: [{
      name: "Arima",
      shortCode: "ARI"
    }, {
      name: "Chaguanas",
      shortCode: "CHA"
    }, {
      name: "Couva-Tabaquite-Talparo",
      shortCode: "CTT"
    }, {
      name: "Diefo Martin",
      shortCode: "DMN"
    }, {
      name: "Mayaro-Rio Claro",
      shortCode: "MRC"
    }, {
      name: "Penal-Debe",
      shortCode: "PED"
    }, {
      name: "Point Fortin",
      shortCode: "PTF"
    }, {
      name: "Port-of-Spain",
      shortCode: "POS"
    }, {
      name: "Princes Town",
      shortCode: "PRT"
    }, {
      name: "San Fernando",
      shortCode: "SFO"
    }, {
      name: "San Juan-Laventille",
      shortCode: "SJL"
    }, {
      name: "Sangre Grande",
      shortCode: "SGE"
    }, {
      name: "Siparia",
      shortCode: "SIP"
    }, {
      name: "Tobago",
      shortCode: "TOB"
    }, {
      name: "Tunapuna-Piarco",
      shortCode: "TUP"
    }]
  }, {
    countryName: "Tunisia",
    countryShortCode: "TN",
    regions: [{
      name: "Ariana",
      shortCode: "12"
    }, {
      name: "Beja",
      shortCode: "31"
    }, {
      name: "Ben Arous",
      shortCode: "13"
    }, {
      name: "Bizerte",
      shortCode: "23"
    }, {
      name: "Gabes",
      shortCode: "81"
    }, {
      name: "Gafsa",
      shortCode: "71"
    }, {
      name: "Jendouba",
      shortCode: "32"
    }, {
      name: "Kairouan",
      shortCode: "41"
    }, {
      name: "Kasserine",
      shortCode: "42"
    }, {
      name: "Kebili",
      shortCode: "73"
    }, {
      name: "Kef",
      shortCode: "33"
    }, {
      name: "Mahdia",
      shortCode: "53"
    }, {
      name: "Medenine",
      shortCode: "82"
    }, {
      name: "Monastir",
      shortCode: "52"
    }, {
      name: "Nabeul",
      shortCode: "21"
    }, {
      name: "Sfax",
      shortCode: "61"
    }, {
      name: "Sidi Bouzid",
      shortCode: "43"
    }, {
      name: "Siliana",
      shortCode: "34"
    }, {
      name: "Sousse",
      shortCode: "51"
    }, {
      name: "Tataouine",
      shortCode: "83"
    }, {
      name: "Tozeur",
      shortCode: "72"
    }, {
      name: "Tunis",
      shortCode: "11"
    }, {
      name: "Zaghouan",
      shortCode: "22"
    }]
  }, {
    countryName: "Turkey",
    countryShortCode: "TR",
    regions: [{
      name: "Adana",
      shortCode: "01"
    }, {
      name: "Adiyaman",
      shortCode: "02"
    }, {
      name: "Afyonkarahisar",
      shortCode: "03"
    }, {
      name: "Agri",
      shortCode: "04"
    }, {
      name: "Aksaray",
      shortCode: "68"
    }, {
      name: "Amasya",
      shortCode: "05"
    }, {
      name: "Ankara",
      shortCode: "06"
    }, {
      name: "Antalya",
      shortCode: "07"
    }, {
      name: "Ardahan",
      shortCode: "75"
    }, {
      name: "Artvin",
      shortCode: "08"
    }, {
      name: "Aydin",
      shortCode: "09"
    }, {
      name: "Balikesir",
      shortCode: "10"
    }, {
      name: "Bartin",
      shortCode: "74"
    }, {
      name: "Batman",
      shortCode: "72"
    }, {
      name: "Bayburt",
      shortCode: "69"
    }, {
      name: "Bilecik",
      shortCode: "11"
    }, {
      name: "Bingol",
      shortCode: "12"
    }, {
      name: "Bitlis",
      shortCode: "13"
    }, {
      name: "Bolu",
      shortCode: "14"
    }, {
      name: "Burdur",
      shortCode: "15"
    }, {
      name: "Bursa",
      shortCode: "16"
    }, {
      name: "Canakkale",
      shortCode: "17"
    }, {
      name: "Cankiri",
      shortCode: "18"
    }, {
      name: "Corum",
      shortCode: "19"
    }, {
      name: "Denizli",
      shortCode: "20"
    }, {
      name: "Diyarbakir",
      shortCode: "21"
    }, {
      name: "Duzce",
      shortCode: "81"
    }, {
      name: "Edirne",
      shortCode: "22"
    }, {
      name: "Elazig",
      shortCode: "23"
    }, {
      name: "Erzincan",
      shortCode: "24"
    }, {
      name: "Erzurum",
      shortCode: "25"
    }, {
      name: "Eskisehir",
      shortCode: "26"
    }, {
      name: "Gaziantep",
      shortCode: "27"
    }, {
      name: "Giresun",
      shortCode: "28"
    }, {
      name: "Gumushane",
      shortCode: "29"
    }, {
      name: "Hakkari",
      shortCode: "30"
    }, {
      name: "Hatay",
      shortCode: "31"
    }, {
      name: "Igdir",
      shortCode: "76"
    }, {
      name: "Isparta",
      shortCode: "32"
    }, {
      name: "Istanbul",
      shortCode: "34"
    }, {
      name: "Izmir",
      shortCode: "35"
    }, {
      name: "Kahramanmaras",
      shortCode: "46"
    }, {
      name: "Karabuk",
      shortCode: "78"
    }, {
      name: "Karaman",
      shortCode: "70"
    }, {
      name: "Kars",
      shortCode: "36"
    }, {
      name: "Kastamonu",
      shortCode: "37"
    }, {
      name: "Kayseri",
      shortCode: "38"
    }, {
      name: "Kilis",
      shortCode: "79"
    }, {
      name: "Kirikkale",
      shortCode: "71"
    }, {
      name: "Kirklareli",
      shortCode: "39"
    }, {
      name: "Kirsehir",
      shortCode: "40"
    }, {
      name: "Kocaeli",
      shortCode: "41"
    }, {
      name: "Konya",
      shortCode: "42"
    }, {
      name: "Kutahya",
      shortCode: "43"
    }, {
      name: "Malatya",
      shortCode: "44"
    }, {
      name: "Manisa",
      shortCode: "45"
    }, {
      name: "Mardin",
      shortCode: "47"
    }, {
      name: "Mersin",
      shortCode: "33"
    }, {
      name: "Mugla",
      shortCode: "48"
    }, {
      name: "Mus",
      shortCode: "49"
    }, {
      name: "Nevsehir",
      shortCode: "50"
    }, {
      name: "Nigde",
      shortCode: "51"
    }, {
      name: "Ordu",
      shortCode: "52"
    }, {
      name: "Osmaniye",
      shortCode: "80"
    }, {
      name: "Rize",
      shortCode: "53"
    }, {
      name: "Sakarya",
      shortCode: "54"
    }, {
      name: "Samsun",
      shortCode: "55"
    }, {
      name: "Sanliurfa",
      shortCode: "63"
    }, {
      name: "Siirt",
      shortCode: "56"
    }, {
      name: "Sinop",
      shortCode: "57"
    }, {
      name: "Sirnak",
      shortCode: "73"
    }, {
      name: "Sivas",
      shortCode: "58"
    }, {
      name: "Tekirdag",
      shortCode: "59"
    }, {
      name: "Tokat",
      shortCode: "60"
    }, {
      name: "Trabzon",
      shortCode: "61"
    }, {
      name: "Tunceli",
      shortCode: "62"
    }, {
      name: "Usak",
      shortCode: "64"
    }, {
      name: "Van",
      shortCode: "65"
    }, {
      name: "Yalova",
      shortCode: "77"
    }, {
      name: "Yozgat",
      shortCode: "66"
    }, {
      name: "Zonguldak",
      shortCode: "67"
    }]
  }, {
    countryName: "Turkmenistan",
    countryShortCode: "TM",
    regions: [{
      name: "Ahal",
      shortCode: "A"
    }, {
      name: "Asgabat",
      shortCode: "S"
    }, {
      name: "Balkan",
      shortCode: "B"
    }, {
      name: "Dashoguz",
      shortCode: "D"
    }, {
      name: "Lebap",
      shortCode: "L"
    }, {
      name: "Mary",
      shortCode: "M"
    }]
  }, {
    countryName: "Turks and Caicos Islands",
    countryShortCode: "TC",
    regions: [{
      name: "Turks and Caicos Islands"
    }]
  }, {
    countryName: "Tuvalu",
    countryShortCode: "TV",
    regions: [{
      name: "Funafuti",
      shortCode: "FUN"
    }, {
      name: "Nanumanga",
      shortCode: "NMG"
    }, {
      name: "Nanumea",
      shortCode: "NMA"
    }, {
      name: "Niutao",
      shortCode: "NIT"
    }, {
      name: "Nui",
      shortCode: "NUI"
    }, {
      name: "Nukufetau",
      shortCode: "NKF"
    }, {
      name: "Nukulaelae",
      shortCode: "NKL"
    }, {
      name: "Vaitupu",
      shortCode: "VAU"
    }]
  }, {
    countryName: "Uganda",
    countryShortCode: "UG",
    regions: [{
      name: "Abim",
      shortCode: "317"
    }, {
      name: "Adjumani",
      shortCode: "301"
    }, {
      name: "Amolatar",
      shortCode: "314"
    }, {
      name: "Amuria",
      shortCode: "216"
    }, {
      name: "Amuru",
      shortCode: "319"
    }, {
      name: "Apac",
      shortCode: "302"
    }, {
      name: "Arua",
      shortCode: "303"
    }, {
      name: "Budaka",
      shortCode: "217"
    }, {
      name: "Bududa",
      shortCode: "223"
    }, {
      name: "Bugiri",
      shortCode: "201"
    }, {
      name: "Bukedea",
      shortCode: "224"
    }, {
      name: "Bukwa",
      shortCode: "218"
    }, {
      name: "Buliisa",
      shortCode: "419"
    }, {
      name: "Bundibugyo",
      shortCode: "401"
    }, {
      name: "Bushenyi",
      shortCode: "402"
    }, {
      name: "Busia",
      shortCode: "202"
    }, {
      name: "Butaleja",
      shortCode: "219"
    }, {
      name: "Dokolo",
      shortCode: "318"
    }, {
      name: "Gulu",
      shortCode: "304"
    }, {
      name: "Hoima",
      shortCode: "403"
    }, {
      name: "Ibanda",
      shortCode: "416"
    }, {
      name: "Iganga",
      shortCode: "203"
    }, {
      name: "Isingiro",
      shortCode: "417"
    }, {
      name: "Jinja",
      shortCode: "204"
    }, {
      name: "Kaabong",
      shortCode: "315"
    }, {
      name: "Kabale",
      shortCode: "404"
    }, {
      name: "Kabarole",
      shortCode: "405"
    }, {
      name: "Kaberamaido",
      shortCode: "213"
    }, {
      name: "Kalangala",
      shortCode: "101"
    }, {
      name: "Kaliro",
      shortCode: "220"
    }, {
      name: "Kampala",
      shortCode: "102"
    }, {
      name: "Kamuli",
      shortCode: "205"
    }, {
      name: "Kamwenge",
      shortCode: "413"
    }, {
      name: "Kanungu",
      shortCode: "414"
    }, {
      name: "Kapchorwa",
      shortCode: "206"
    }, {
      name: "Kasese",
      shortCode: "406"
    }, {
      name: "Katakwi",
      shortCode: "207"
    }, {
      name: "Kayunga",
      shortCode: "112"
    }, {
      name: "Kibaale",
      shortCode: "407"
    }, {
      name: "Kiboga",
      shortCode: "103"
    }, {
      name: "Kiruhura",
      shortCode: "418"
    }, {
      name: "Kisoro",
      shortCode: "408"
    }, {
      name: "Kitgum",
      shortCode: "305"
    }, {
      name: "Koboko",
      shortCode: "316"
    }, {
      name: "Kotido",
      shortCode: "306"
    }, {
      name: "Kumi",
      shortCode: "208"
    }, {
      name: "Kyenjojo",
      shortCode: "415"
    }, {
      name: "Lira",
      shortCode: "307"
    }, {
      name: "Luwero",
      shortCode: "104"
    }, {
      name: "Lyantonde",
      shortCode: "116"
    }, {
      name: "Manafwa",
      shortCode: "221"
    }, {
      name: "Maracha",
      shortCode: "320"
    }, {
      name: "Masaka",
      shortCode: "105"
    }, {
      name: "Masindi",
      shortCode: "409"
    }, {
      name: "Mayuge",
      shortCode: "214"
    }, {
      name: "Mbale",
      shortCode: "209"
    }, {
      name: "Mbarara",
      shortCode: "410"
    }, {
      name: "Mityana",
      shortCode: "114"
    }, {
      name: "Moroto",
      shortCode: "308"
    }, {
      name: "Moyo",
      shortCode: "309"
    }, {
      name: "Mpigi",
      shortCode: "106"
    }, {
      name: "Mubende",
      shortCode: "107"
    }, {
      name: "Mukono",
      shortCode: "108"
    }, {
      name: "Nakapiripirit",
      shortCode: "311"
    }, {
      name: "Nakaseke",
      shortCode: "115"
    }, {
      name: "Nakasongola",
      shortCode: "109"
    }, {
      name: "Namutumba",
      shortCode: "222"
    }, {
      name: "Nebbi",
      shortCode: "310"
    }, {
      name: "Ntungamo",
      shortCode: "411"
    }, {
      name: "Oyam",
      shortCode: "321"
    }, {
      name: "Pader",
      shortCode: "312"
    }, {
      name: "Pallisa",
      shortCode: "210"
    }, {
      name: "Rakai",
      shortCode: "110"
    }, {
      name: "Rukungiri",
      shortCode: "412"
    }, {
      name: "Sembabule",
      shortCode: "111"
    }, {
      name: "Sironko",
      shortCode: "215"
    }, {
      name: "Soroti",
      shortCode: "211"
    }, {
      name: "Tororo",
      shortCode: "212"
    }, {
      name: "Wakiso",
      shortCode: "113"
    }, {
      name: "Yumbe",
      shortCode: "313"
    }]
  }, {
    countryName: "Ukraine",
    countryShortCode: "UA",
    regions: [{
      name: "Cherkasy",
      shortCode: "71"
    }, {
      name: "Chernihiv",
      shortCode: "74"
    }, {
      name: "Chernivtsi",
      shortCode: "77"
    }, {
      name: "Dnipropetrovsk",
      shortCode: "12"
    }, {
      name: "Donetsk",
      shortCode: "14"
    }, {
      name: "Ivano-Frankivsk",
      shortCode: "26"
    }, {
      name: "Kharkiv",
      shortCode: "63"
    }, {
      name: "Kherson",
      shortCode: "65"
    }, {
      name: "Khmelnytskyi",
      shortCode: "68"
    }, {
      name: "Kiev",
      shortCode: "32"
    }, {
      name: "Kirovohrad",
      shortCode: "35"
    }, {
      name: "Luhansk",
      shortCode: "09"
    }, {
      name: "Lviv",
      shortCode: "46"
    }, {
      name: "Mykolaiv",
      shortCode: "48"
    }, {
      name: "Odessa",
      shortCode: "51"
    }, {
      name: "Poltava",
      shortCode: "53"
    }, {
      name: "Rivne",
      shortCode: "56"
    }, {
      name: "Sumy",
      shortCode: "59"
    }, {
      name: "Ternopil",
      shortCode: "61"
    }, {
      name: "Vinnytsia",
      shortCode: "05"
    }, {
      name: "Volyn",
      shortCode: "07"
    }, {
      name: "Zakarpattia",
      shortCode: "21"
    }, {
      name: "Zaporizhia",
      shortCode: "23"
    }, {
      name: "Zhytomyr",
      shortCode: "18"
    }, {
      name: "Avtonomna Respublika Krym",
      shortCode: "43"
    }, {
      name: "Kyïv",
      shortCode: "30"
    }, {
      name: "Sevastopol",
      shortCode: "40"
    }]
  }, {
    countryName: "United Arab Emirates",
    countryShortCode: "AE",
    regions: [{
      name: "Abu Dhabi",
      shortCode: "AZ"
    }, {
      name: "Ajman",
      shortCode: "AJ"
    }, {
      name: "Dubai",
      shortCode: "DU"
    }, {
      name: "Fujairah",
      shortCode: "FU"
    }, {
      name: "Ras al Khaimah",
      shortCode: "RK"
    }, {
      name: "Sharjah",
      shortCode: "SH"
    }, {
      name: "Umm Al Quwain",
      shortCode: "UQ"
    }]
  }, {
    countryName: "United Kingdom",
    countryShortCode: "GB",
    regions: [{
      name: "Aberdeen City",
      shortCode: "ABE"
    }, {
      name: "Aberdeenshire",
      shortCode: "ABD"
    }, {
      name: "Angus",
      shortCode: "ANS"
    }, {
      name: "Antrim and Newtownabbey",
      shortCode: "ANN"
    }, {
      name: "Ards and North Down",
      shortCode: "AND"
    }, {
      name: "Argyll and Bute",
      shortCode: "AGB"
    }, {
      name: "Armagh, Banbridge and Craigavon",
      shortCode: "ABC"
    }, {
      name: "Barking and Dagenham",
      shortCode: "BDG"
    }, {
      name: "Barnet",
      shortCode: "BNE"
    }, {
      name: "Barnsley",
      shortCode: "BNS"
    }, {
      name: "Bath and North East Somerset",
      shortCode: "BAS"
    }, {
      name: "Bedford",
      shortCode: "BDF"
    }, {
      name: "Belfast",
      shortCode: "BFS"
    }, {
      name: "Bexley",
      shortCode: "BEX"
    }, {
      name: "Birmingham",
      shortCode: "BIR"
    }, {
      name: "Blackburn with Darwen",
      shortCode: "BBD"
    }, {
      name: "Blackpool",
      shortCode: "BPL"
    }, {
      name: "Blaenau Gwent",
      shortCode: "BGW"
    }, {
      name: "Bolton",
      shortCode: "BOL"
    }, {
      name: "Bournemouth",
      shortCode: "BMH"
    }, {
      name: "Bracknell Forest",
      shortCode: "BRC"
    }, {
      name: "Bradford",
      shortCode: "BRD"
    }, {
      name: "Brent",
      shortCode: "BEN"
    }, {
      name: "Bridgend",
      shortCode: "BGE"
    }, {
      name: "Brighton and Hove",
      shortCode: "BNH"
    }, {
      name: "Bristol, City of",
      shortCode: "BST"
    }, {
      name: "Bromley",
      shortCode: "BRY"
    }, {
      name: "Buckinghamshire",
      shortCode: "BKM"
    }, {
      name: "Bury",
      shortCode: "BUR"
    }, {
      name: "Caerphilly",
      shortCode: "CAY"
    }, {
      name: "Calderdale",
      shortCode: "CLD"
    }, {
      name: "Cambridgeshire",
      shortCode: "CAM"
    }, {
      name: "Camden",
      shortCode: "CMD"
    }, {
      name: "Cardiff",
      shortCode: "CRF"
    }, {
      name: "Carmarthenshire",
      shortCode: "CMN"
    }, {
      name: "Causeway Coast and Glens",
      shortCode: "CCG"
    }, {
      name: "Central Bedfordshire",
      shortCode: "CBF"
    }, {
      name: "Ceredigion",
      shortCode: "CGN"
    }, {
      name: "Cheshire East",
      shortCode: "CHE"
    }, {
      name: "Cheshire West and Chester",
      shortCode: "CHW"
    }, {
      name: "Clackmannanshire",
      shortCode: "CLK"
    }, {
      name: "Conwy",
      shortCode: "CWY"
    }, {
      name: "Cornwall",
      shortCode: "CON"
    }, {
      name: "Coventry",
      shortCode: "COV"
    }, {
      name: "Croydon",
      shortCode: "CRY"
    }, {
      name: "Cumbria",
      shortCode: "CMA"
    }, {
      name: "Darlington",
      shortCode: "DAL"
    }, {
      name: "Denbighshire",
      shortCode: "DEN"
    }, {
      name: "Derby",
      shortCode: "DER"
    }, {
      name: "Derbyshire",
      shortCode: "DBY"
    }, {
      name: "Derry and Strabane",
      shortCode: "DRS"
    }, {
      name: "Devon",
      shortCode: "DEV"
    }, {
      name: "Doncaster",
      shortCode: "DNC"
    }, {
      name: "Dorset",
      shortCode: "DOR"
    }, {
      name: "Dudley",
      shortCode: "DUD"
    }, {
      name: "Dumfries and Galloway",
      shortCode: "DGY"
    }, {
      name: "Dundee City",
      shortCode: "DND"
    }, {
      name: "Durham County",
      shortCode: "DUR"
    }, {
      name: "Ealing",
      shortCode: "EAL"
    }, {
      name: "East Ayrshire",
      shortCode: "EAY"
    }, {
      name: "East Dunbartonshire",
      shortCode: "EDU"
    }, {
      name: "East Lothian",
      shortCode: "ELN"
    }, {
      name: "East Renfrewshire",
      shortCode: "ERW"
    }, {
      name: "East Riding of Yorkshire",
      shortCode: "ERY"
    }, {
      name: "East Sussex",
      shortCode: "ESX"
    }, {
      name: "Edinburgh, City of",
      shortCode: "EDH"
    }, {
      name: "Eilean Siar",
      shortCode: "ELS"
    }, {
      name: "Enfield",
      shortCode: "ENF"
    }, {
      name: "Essex",
      shortCode: "ESS"
    }, {
      name: "Falkirk",
      shortCode: "FAL"
    }, {
      name: "Fermanagh and Omagh",
      shortCode: "FMO"
    }, {
      name: "Fife",
      shortCode: "FIF"
    }, {
      name: "Flintshire",
      shortCode: "FLN"
    }, {
      name: "Gateshead",
      shortCode: "GAT"
    }, {
      name: "Glasgow City",
      shortCode: "GLG"
    }, {
      name: "Gloucestershire",
      shortCode: "GLS"
    }, {
      name: "Greenwich",
      shortCode: "GRE"
    }, {
      name: "Gwynedd",
      shortCode: "GWN"
    }, {
      name: "Hackney",
      shortCode: "HCK"
    }, {
      name: "Halton",
      shortCode: "HAL"
    }, {
      name: "Hammersmith and Fulham",
      shortCode: "HMF"
    }, {
      name: "Hampshire",
      shortCode: "HAM"
    }, {
      name: "Haringey",
      shortCode: "HRY"
    }, {
      name: "Harrow",
      shortCode: "HRW"
    }, {
      name: "Hartlepool",
      shortCode: "HPL"
    }, {
      name: "Havering",
      shortCode: "HAV"
    }, {
      name: "Herefordshire",
      shortCode: "HEF"
    }, {
      name: "Hertfordshire",
      shortCode: "HRT"
    }, {
      name: "Highland",
      shortCode: "HLD"
    }, {
      name: "Hillingdon",
      shortCode: "HIL"
    }, {
      name: "Hounslow",
      shortCode: "HNS"
    }, {
      name: "Inverclyde",
      shortCode: "IVC"
    }, {
      name: "Isle of Anglesey",
      shortCode: "AGY"
    }, {
      name: "Isle of Wight",
      shortCode: "IOW"
    }, {
      name: "Isles of Scilly",
      shortCode: "IOS"
    }, {
      name: "Islington",
      shortCode: "ISL"
    }, {
      name: "Kensington and Chelsea",
      shortCode: "KEC"
    }, {
      name: "Kent",
      shortCode: "KEN"
    }, {
      name: "Kingston upon Hull",
      shortCode: "KHL"
    }, {
      name: "Kingston upon Thames",
      shortCode: "KTT"
    }, {
      name: "Kirklees",
      shortCode: "KIR"
    }, {
      name: "Knowsley",
      shortCode: "KWL"
    }, {
      name: "Lambeth",
      shortCode: "LBH"
    }, {
      name: "Lancashire",
      shortCode: "LAN"
    }, {
      name: "Leeds",
      shortCode: "LDS"
    }, {
      name: "Leicester",
      shortCode: "LCE"
    }, {
      name: "Leicestershire",
      shortCode: "LEC"
    }, {
      name: "Lewisham",
      shortCode: "LEW"
    }, {
      name: "Lincolnshire",
      shortCode: "LIN"
    }, {
      name: "Lisburn and Castlereagh",
      shortCode: "LBC"
    }, {
      name: "Liverpool",
      shortCode: "LIV"
    }, {
      name: "London, City of",
      shortCode: "LND"
    }, {
      name: "Luton",
      shortCode: "LUT"
    }, {
      name: "Manchester",
      shortCode: "MAN"
    }, {
      name: "Medway",
      shortCode: "MDW"
    }, {
      name: "Merthyr Tydfil",
      shortCode: "MTY"
    }, {
      name: "Merton",
      shortCode: "MRT"
    }, {
      name: "Mid and East Antrim",
      shortCode: "MEA"
    }, {
      name: "Mid Ulster",
      shortCode: "MUL"
    }, {
      name: "Middlesbrough",
      shortCode: "MDB"
    }, {
      name: "Midlothian",
      shortCode: "MLN"
    }, {
      name: "Milton Keynes",
      shortCode: "MIK"
    }, {
      name: "Monmouthshire",
      shortCode: "MON"
    }, {
      name: "Moray",
      shortCode: "MRY"
    }, {
      name: "Neath Port Talbot",
      shortCode: "NTL"
    }, {
      name: "Newcastle upon Tyne",
      shortCode: "NET"
    }, {
      name: "Newham",
      shortCode: "NWM"
    }, {
      name: "Newport",
      shortCode: "NWP"
    }, {
      name: "Newry, Mourne and Down",
      shortCode: "NMD"
    }, {
      name: "Norfolk",
      shortCode: "NFK"
    }, {
      name: "North Ayrshire",
      shortCode: "NAY"
    }, {
      name: "North East Lincolnshire",
      shortCode: "NEL"
    }, {
      name: "North Lanarkshire",
      shortCode: "NLK"
    }, {
      name: "North Lincolnshire",
      shortCode: "NLN"
    }, {
      name: "North Somerset",
      shortCode: "NSM"
    }, {
      name: "North Tyneside",
      shortCode: "NTY"
    }, {
      name: "North Yorkshire",
      shortCode: "NYK"
    }, {
      name: "Northamptonshire",
      shortCode: "NTH"
    }, {
      name: "Northumberland",
      shortCode: "NBL"
    }, {
      name: "Nottingham",
      shortCode: "NGM"
    }, {
      name: "Nottinghamshire",
      shortCode: "NTT"
    }, {
      name: "Oldham",
      shortCode: "OLD"
    }, {
      name: "Orkney Islands",
      shortCode: "ORK"
    }, {
      name: "Oxfordshire",
      shortCode: "OXF"
    }, {
      name: "Pembrokeshire",
      shortCode: "PEM"
    }, {
      name: "Perth and Kinross",
      shortCode: "PKN"
    }, {
      name: "Peterborough",
      shortCode: "PTE"
    }, {
      name: "Plymouth",
      shortCode: "PLY"
    }, {
      name: "Poole",
      shortCode: "POL"
    }, {
      name: "Portsmouth",
      shortCode: "POR"
    }, {
      name: "Powys",
      shortCode: "POW"
    }, {
      name: "Reading",
      shortCode: "RDG"
    }, {
      name: "Redbridge",
      shortCode: "RDB"
    }, {
      name: "Redcar and Cleveland",
      shortCode: "RCC"
    }, {
      name: "Renfrewshire",
      shortCode: "RFW"
    }, {
      name: "Rhondda, Cynon, Taff",
      shortCode: "RCT"
    }, {
      name: "Richmond upon Thames",
      shortCode: "RIC"
    }, {
      name: "Rochdale",
      shortCode: "RCH"
    }, {
      name: "Rotherham",
      shortCode: "ROT"
    }, {
      name: "Rutland",
      shortCode: "RUT"
    }, {
      name: "St. Helens",
      shortCode: "SHN"
    }, {
      name: "Salford",
      shortCode: "SLF"
    }, {
      name: "Sandwell",
      shortCode: "SAW"
    }, {
      name: "Scottish Borders, The",
      shortCode: "SCB"
    }, {
      name: "Sefton",
      shortCode: "SFT"
    }, {
      name: "Sheffield",
      shortCode: "SHF"
    }, {
      name: "Shetland Islands",
      shortCode: "ZET"
    }, {
      name: "Shropshire",
      shortCode: "SHR"
    }, {
      name: "Slough",
      shortCode: "SLG"
    }, {
      name: "Solihull",
      shortCode: "SOL"
    }, {
      name: "Somerset",
      shortCode: "SOM"
    }, {
      name: "South Ayrshire",
      shortCode: "SAY"
    }, {
      name: "South Gloucestershire",
      shortCode: "SGC"
    }, {
      name: "South Lanarkshire",
      shortCode: "SLK"
    }, {
      name: "South Tyneside",
      shortCode: "STY"
    }, {
      name: "Southampton",
      shortCode: "STH"
    }, {
      name: "Southend-on-Sea",
      shortCode: "SOS"
    }, {
      name: "Southwark",
      shortCode: "SWK"
    }, {
      name: "Staffordshire",
      shortCode: "STS"
    }, {
      name: "Stirling",
      shortCode: "STG"
    }, {
      name: "Stockport",
      shortCode: "SKP"
    }, {
      name: "Stockton-on-Tees",
      shortCode: "STT"
    }, {
      name: "Stoke-on-Trent",
      shortCode: "STE"
    }, {
      name: "Suffolk",
      shortCode: "SFK"
    }, {
      name: "Sunderland",
      shortCode: "SND"
    }, {
      name: "Surrey",
      shortCode: "SRY"
    }, {
      name: "Sutton",
      shortCode: "STN"
    }, {
      name: "Swansea",
      shortCode: "SWA"
    }, {
      name: "Swindon",
      shortCode: "SWD"
    }, {
      name: "Tameside",
      shortCode: "TAM"
    }, {
      name: "Telford and Wrekin",
      shortCode: "TFW"
    }, {
      name: "Thurrock",
      shortCode: "THR"
    }, {
      name: "Torbay",
      shortCode: "TOB"
    }, {
      name: "Torfaen",
      shortCode: "TOF"
    }, {
      name: "Tower Hamlets",
      shortCode: "TWH"
    }, {
      name: "Trafford",
      shortCode: "TRF"
    }, {
      name: "Vale of Glamorgan, The",
      shortCode: "VGL"
    }, {
      name: "Wakefield",
      shortCode: "WKF"
    }, {
      name: "Walsall",
      shortCode: "WLL"
    }, {
      name: "Waltham Forest",
      shortCode: "WFT"
    }, {
      name: "Wandsworth",
      shortCode: "WND"
    }, {
      name: "Warrington",
      shortCode: "WRT"
    }, {
      name: "Warwickshire",
      shortCode: "WAR"
    }, {
      name: "West Berkshire",
      shortCode: "WBK"
    }, {
      name: "West Dunbartonshire",
      shortCode: "WDU"
    }, {
      name: "West Lothian",
      shortCode: "WLN"
    }, {
      name: "West Sussex",
      shortCode: "WSX"
    }, {
      name: "Westminster",
      shortCode: "WSM"
    }, {
      name: "Wigan",
      shortCode: "WGN"
    }, {
      name: "Wiltshire",
      shortCode: "WIL"
    }, {
      name: "Windsor and Maidenhead",
      shortCode: "WNM"
    }, {
      name: "Wirral",
      shortCode: "WRL"
    }, {
      name: "Wokingham",
      shortCode: "WOK"
    }, {
      name: "Wolverhampton",
      shortCode: "WLV"
    }, {
      name: "Worcestershire",
      shortCode: "WOR"
    }, {
      name: "Wrexham",
      shortCode: "WRX"
    }, {
      name: "York",
      shortCode: "YOR"
    }]
  }, {
    countryName: "United States",
    countryShortCode: "US",
    regions: [{
      name: "Alabama",
      shortCode: "AL"
    }, {
      name: "Alaska",
      shortCode: "AK"
    }, {
      name: "American Samoa",
      shortCode: "AS"
    }, {
      name: "Arizona",
      shortCode: "AZ"
    }, {
      name: "Arkansas",
      shortCode: "AR"
    }, {
      name: "California",
      shortCode: "CA"
    }, {
      name: "Colorado",
      shortCode: "CO"
    }, {
      name: "Connecticut",
      shortCode: "CT"
    }, {
      name: "Delaware",
      shortCode: "DE"
    }, {
      name: "District of Columbia",
      shortCode: "DC"
    }, {
      name: "Micronesia",
      shortCode: "FM"
    }, {
      name: "Florida",
      shortCode: "FL"
    }, {
      name: "Georgia",
      shortCode: "GA"
    }, {
      name: "Guam",
      shortCode: "GU"
    }, {
      name: "Hawaii",
      shortCode: "HI"
    }, {
      name: "Idaho",
      shortCode: "ID"
    }, {
      name: "Illinois",
      shortCode: "IL"
    }, {
      name: "Indiana",
      shortCode: "IN"
    }, {
      name: "Iowa",
      shortCode: "IA"
    }, {
      name: "Kansas",
      shortCode: "KS"
    }, {
      name: "Kentucky",
      shortCode: "KY"
    }, {
      name: "Louisiana",
      shortCode: "LA"
    }, {
      name: "Maine",
      shortCode: "ME"
    }, {
      name: "Marshall Islands",
      shortCode: "MH"
    }, {
      name: "Maryland",
      shortCode: "MD"
    }, {
      name: "Massachusetts",
      shortCode: "MA"
    }, {
      name: "Michigan",
      shortCode: "MI"
    }, {
      name: "Minnesota",
      shortCode: "MN"
    }, {
      name: "Mississippi",
      shortCode: "MS"
    }, {
      name: "Missouri",
      shortCode: "MO"
    }, {
      name: "Montana",
      shortCode: "MT"
    }, {
      name: "Nebraska",
      shortCode: "NE"
    }, {
      name: "Nevada",
      shortCode: "NV"
    }, {
      name: "New Hampshire",
      shortCode: "NH"
    }, {
      name: "New Jersey",
      shortCode: "NJ"
    }, {
      name: "New Mexico",
      shortCode: "NM"
    }, {
      name: "New York",
      shortCode: "NY"
    }, {
      name: "North Carolina",
      shortCode: "NC"
    }, {
      name: "North Dakota",
      shortCode: "ND"
    }, {
      name: "Northern Mariana Islands",
      shortCode: "MP"
    }, {
      name: "Ohio",
      shortCode: "OH"
    }, {
      name: "Oklahoma",
      shortCode: "OK"
    }, {
      name: "Oregon",
      shortCode: "OR"
    }, {
      name: "Palau",
      shortCode: "PW"
    }, {
      name: "Pennsylvania",
      shortCode: "PA"
    }, {
      name: "Puerto Rico",
      shortCode: "PR"
    }, {
      name: "Rhode Island",
      shortCode: "RI"
    }, {
      name: "South Carolina",
      shortCode: "SC"
    }, {
      name: "South Dakota",
      shortCode: "SD"
    }, {
      name: "Tennessee",
      shortCode: "TN"
    }, {
      name: "Texas",
      shortCode: "TX"
    }, {
      name: "Utah",
      shortCode: "UT"
    }, {
      name: "Vermont",
      shortCode: "VT"
    }, {
      name: "Virgin Islands",
      shortCode: "VI"
    }, {
      name: "Virginia",
      shortCode: "VA"
    }, {
      name: "Washington",
      shortCode: "WA"
    }, {
      name: "West Virginia",
      shortCode: "WV"
    }, {
      name: "Wisconsin",
      shortCode: "WI"
    }, {
      name: "Wyoming",
      shortCode: "WY"
    }, {
      name: "Armed Forces Americas",
      shortCode: "AA"
    }, {
      name: "Armed Forces Europe, Canada, Africa and Middle East",
      shortCode: "AE"
    }, {
      name: "Armed Forces Pacific",
      shortCode: "AP"
    }]
  }, {
    countryName: "United States Minor Outlying Islands",
    countryShortCode: "UM",
    regions: [{
      name: "Baker Island",
      shortCode: "81"
    }, {
      name: "Howland Island",
      shortCode: "84"
    }, {
      name: "Jarvis Island",
      shortCode: "86"
    }, {
      name: "Johnston Atoll",
      shortCode: "67"
    }, {
      name: "Kingman Reef",
      shortCode: "89"
    }, {
      name: "Midway Islands",
      shortCode: "71"
    }, {
      name: "Navassa Island",
      shortCode: "76"
    }, {
      name: "Palmyra Atoll",
      shortCode: "95"
    }, {
      name: "Wake Island",
      shortCode: "79"
    }, {
      name: "Bajo Nuevo Bank",
      shortCode: "BN"
    }, {
      name: "Serranilla Bank",
      shortCode: "SB"
    }]
  }, {
    countryName: "Uruguay",
    countryShortCode: "UY",
    regions: [{
      name: "Artigas",
      shortCode: "AR"
    }, {
      name: "Canelones",
      shortCode: "CA"
    }, {
      name: "Cerro Largo",
      shortCode: "CL"
    }, {
      name: "Colonia",
      shortCode: "CO"
    }, {
      name: "Durazno",
      shortCode: "DU"
    }, {
      name: "Flores",
      shortCode: "FS"
    }, {
      name: "Florida",
      shortCode: "FD"
    }, {
      name: "Lavalleja",
      shortCode: "LA"
    }, {
      name: "Maldonado",
      shortCode: "MA"
    }, {
      name: "Montevideo",
      shortCode: "MO"
    }, {
      name: "Paysandú",
      shortCode: "PA"
    }, {
      name: "Río Negro",
      shortCode: "RN"
    }, {
      name: "Rivera",
      shortCode: "RV"
    }, {
      name: "Rocha",
      shortCode: "RO"
    }, {
      name: "Salto",
      shortCode: "SA"
    }, {
      name: "San José",
      shortCode: "SJ"
    }, {
      name: "Soriano",
      shortCode: "SO"
    }, {
      name: "Tacuarembó",
      shortCode: "TA"
    }, {
      name: "Treinta y Tres",
      shortCode: "TT"
    }]
  }, {
    countryName: "Uzbekistan",
    countryShortCode: "UZ",
    regions: [{
      name: "Toshkent shahri",
      shortCode: "TK"
    }, {
      name: "Andijon",
      shortCode: "AN"
    }, {
      name: "Buxoro",
      shortCode: "BU"
    }, {
      name: "Farg‘ona",
      shortCode: "FA"
    }, {
      name: "Jizzax",
      shortCode: "JI"
    }, {
      name: "Namangan",
      shortCode: "NG"
    }, {
      name: "Navoiy",
      shortCode: "NW"
    }, {
      name: "Qashqadaryo (Qarshi)",
      shortCode: "QA"
    }, {
      name: "Samarqand",
      shortCode: "SA"
    }, {
      name: "Sirdaryo (Guliston)",
      shortCode: "SI"
    }, {
      name: "Surxondaryo (Termiz)",
      shortCode: "SU"
    }, {
      name: "Toshkent wiloyati",
      shortCode: "TO"
    }, {
      name: "Xorazm (Urganch)",
      shortCode: "XO"
    }, {
      name: "Qoraqalpog‘iston Respublikasi (Nukus)",
      shortCode: "QR"
    }]
  }, {
    countryName: "Vanuatu",
    countryShortCode: "VU",
    regions: [{
      name: "Malampa",
      shortCode: "MAP"
    }, {
      name: "Pénama",
      shortCode: "PAM"
    }, {
      name: "Sanma",
      shortCode: "SAM"
    }, {
      name: "Shéfa",
      shortCode: "SEE"
    }, {
      name: "Taféa",
      shortCode: "TAE"
    }, {
      name: "Torba",
      shortCode: "TOB"
    }]
  }, {
    countryName: "Venezuela, Bolivarian Republic of",
    countryShortCode: "VE",
    regions: [{
      name: "Dependencias Federales",
      shortCode: "W"
    }, {
      name: "Distrito Federal",
      shortCode: "A"
    }, {
      name: "Amazonas",
      shortCode: "Z"
    }, {
      name: "Anzoátegui",
      shortCode: "B"
    }, {
      name: "Apure",
      shortCode: "C"
    }, {
      name: "Aragua",
      shortCode: "D"
    }, {
      name: "Barinas",
      shortCode: "E"
    }, {
      name: "Bolívar",
      shortCode: "F"
    }, {
      name: "Carabobo",
      shortCode: "G"
    }, {
      name: "Cojedes",
      shortCode: "H"
    }, {
      name: "Delta Amacuro",
      shortCode: "Y"
    }, {
      name: "Falcón",
      shortCode: "I"
    }, {
      name: "Guárico",
      shortCode: "J"
    }, {
      name: "Lara",
      shortCode: "K"
    }, {
      name: "Mérida",
      shortCode: "L"
    }, {
      name: "Miranda",
      shortCode: "M"
    }, {
      name: "Monagas",
      shortCode: "N"
    }, {
      name: "Nueva Esparta",
      shortCode: "O"
    }, {
      name: "Portuguesa",
      shortCode: "P"
    }, {
      name: "Sucre",
      shortCode: "R"
    }, {
      name: "Táchira",
      shortCode: "S"
    }, {
      name: "Trujillo",
      shortCode: "T"
    }, {
      name: "Vargas",
      shortCode: "X"
    }, {
      name: "Yaracuy",
      shortCode: "U"
    }, {
      name: "Zulia",
      shortCode: "V"
    }]
  }, {
    countryName: "Vietnam",
    countryShortCode: "VN",
    regions: [{
      name: "Đồng Nai",
      shortCode: "39"
    }, {
      name: "Đồng Tháp",
      shortCode: "45"
    }, {
      name: "Gia Lai",
      shortCode: "30"
    }, {
      name: "Hà Giang",
      shortCode: "03"
    }, {
      name: "Hà Nam",
      shortCode: "63"
    }, {
      name: "Hà Tây",
      shortCode: "15"
    }, {
      name: "Hà Tĩnh",
      shortCode: "23"
    }, {
      name: "Hải Dương",
      shortCode: "61"
    }, {
      name: "Hậu Giang",
      shortCode: "73"
    }, {
      name: "Hòa Bình",
      shortCode: "14"
    }, {
      name: "Hưng Yên",
      shortCode: "66"
    }, {
      name: "Khánh Hòa",
      shortCode: "34"
    }, {
      name: "Kiên Giang",
      shortCode: "47"
    }, {
      name: "Kon Tum",
      shortCode: "28"
    }, {
      name: "Lai Châu",
      shortCode: "01"
    }, {
      name: "Lâm Đồng",
      shortCode: "35"
    }, {
      name: "Lạng Sơn",
      shortCode: "09"
    }, {
      name: "Lào Cai",
      shortCode: "02"
    }, {
      name: "Long An",
      shortCode: "41"
    }, {
      name: "Nam Định",
      shortCode: "67"
    }, {
      name: "Nghệ An",
      shortCode: "22"
    }, {
      name: "Ninh Bình",
      shortCode: "18"
    }, {
      name: "Ninh Thuận",
      shortCode: "36"
    }, {
      name: "Phú Thọ",
      shortCode: "68"
    }, {
      name: "Phú Yên",
      shortCode: "32"
    }, {
      name: "Quảng Bình",
      shortCode: "24"
    }, {
      name: "Quảng Nam",
      shortCode: "27"
    }, {
      name: "Quảng Ngãi",
      shortCode: "29"
    }, {
      name: "Quảng Ninh",
      shortCode: "13"
    }, {
      name: "Quảng Trị",
      shortCode: "25"
    }, {
      name: "Sóc Trăng",
      shortCode: "52"
    }, {
      name: "Sơn La",
      shortCode: "05"
    }, {
      name: "Tây Ninh",
      shortCode: "37"
    }, {
      name: "Thái Bình",
      shortCode: "20"
    }, {
      name: "Thái Nguyên",
      shortCode: "69"
    }, {
      name: "Thanh Hóa",
      shortCode: "21"
    }, {
      name: "Thừa Thiên–Huế",
      shortCode: "26"
    }, {
      name: "Tiền Giang",
      shortCode: "46"
    }, {
      name: "Trà Vinh",
      shortCode: "51"
    }, {
      name: "Tuyên Quang",
      shortCode: "07"
    }, {
      name: "Vĩnh Long",
      shortCode: "49"
    }, {
      name: "Vĩnh Phúc",
      shortCode: "70"
    }, {
      name: "Yên Bái",
      shortCode: "06"
    }, {
      name: "Cần Thơ",
      shortCode: "CT"
    }, {
      name: "Đà Nẵng",
      shortCode: "DN"
    }, {
      name: "Hà Nội",
      shortCode: "HN"
    }, {
      name: "Hải Phòng",
      shortCode: "HP"
    }, {
      name: "Hồ Chí Minh (Sài Gòn)",
      shortCode: "SG"
    }]
  }, {
    countryName: "Virgin Islands, British",
    countryShortCode: "VG",
    regions: [{
      name: "Anegada",
      shortCode: "ANG"
    }, {
      name: "Jost Van Dyke",
      shortCode: "JVD"
    }, {
      name: "Tortola",
      shortCode: "TTA"
    }, {
      name: "Virgin Gorda",
      shortCode: "VGD"
    }]
  }, {
    countryName: "Virgin Islands, U.S.",
    countryShortCode: "VI",
    regions: [{
      name: "St. Thomas",
      shortCode: "STH"
    }, {
      name: "St. John",
      shortCode: "SJO"
    }, {
      name: "St. Croix",
      shortCode: "SCR"
    }]
  }, {
    countryName: "Wallis and Futuna",
    countryShortCode: "WF",
    regions: [{
      name: "Alo",
      shortCode: "ALO"
    }, {
      name: "Sigave",
      shortCode: "SIG"
    }, {
      name: "Wallis",
      shortCode: "WAL"
    }]
  }, {
    countryName: "Western Sahara",
    countryShortCode: "EH",
    regions: [{
      name: "Es Smara",
      shortCode: "ESM"
    }, {
      name: "Boujdour",
      shortCode: "BOD"
    }, {
      name: "Laâyoune",
      shortCode: "LAA"
    }, {
      name: "Aousserd",
      shortCode: "AOU"
    }, {
      name: "Oued ed Dahab",
      shortCode: "OUD"
    }]
  }, {
    countryName: "Yemen",
    countryShortCode: "YE",
    regions: [{
      name: "Abyān",
      shortCode: "AB"
    }, {
      name: "'Adan",
      shortCode: "AD"
    }, {
      name: "Aḑ Ḑāli'",
      shortCode: "DA"
    }, {
      name: "Al Bayḑā'",
      shortCode: "BA"
    }, {
      name: "Al Ḩudaydah",
      shortCode: "HU"
    }, {
      name: "Al Jawf",
      shortCode: "JA"
    }, {
      name: "Al Mahrah",
      shortCode: "MR"
    }, {
      name: "Al Maḩwīt",
      shortCode: "MW"
    }, {
      name: "'Amrān",
      shortCode: "AM"
    }, {
      name: "Dhamār",
      shortCode: "DH"
    }, {
      name: "Ḩaḑramawt",
      shortCode: "HD"
    }, {
      name: "Ḩajjah",
      shortCode: "HJ"
    }, {
      name: "Ibb",
      shortCode: "IB"
    }, {
      name: "Laḩij",
      shortCode: "LA"
    }, {
      name: "Ma'rib",
      shortCode: "MA"
    }, {
      name: "Raymah",
      shortCode: "RA"
    }, {
      name: "Şā‘dah",
      shortCode: "SD"
    }, {
      name: "Şan‘ā'",
      shortCode: "SN"
    }, {
      name: "Shabwah",
      shortCode: "SH"
    }, {
      name: "Tā‘izz",
      shortCode: "TA"
    }]
  }, {
    countryName: "Zambia",
    countryShortCode: "ZM",
    regions: [{
      name: "Central",
      shortCode: "02"
    }, {
      name: "Copperbelt",
      shortCode: "08"
    }, {
      name: "Eastern",
      shortCode: "03"
    }, {
      name: "Luapula",
      shortCode: "04"
    }, {
      name: "Lusaka",
      shortCode: "09"
    }, {
      name: "Northern",
      shortCode: "05"
    }, {
      name: "North-Western",
      shortCode: "06"
    }, {
      name: "Southern",
      shortCode: "07"
    }, {
      name: "Western",
      shortCode: "01"
    }]
  }, {
    countryName: "Zimbabwe",
    countryShortCode: "ZW",
    regions: [{
      name: "Bulawayo",
      shortCode: "BU"
    }, {
      name: "Harare",
      shortCode: "HA"
    }, {
      name: "Manicaland",
      shortCode: "MA"
    }, {
      name: "Mashonaland Central",
      shortCode: "MC"
    }, {
      name: "Mashonaland East",
      shortCode: "ME"
    }, {
      name: "Mashonaland West",
      shortCode: "MW"
    }, {
      name: "Masvingo",
      shortCode: "MV"
    }, {
      name: "Matabeleland North",
      shortCode: "MN"
    }, {
      name: "Matabeleland South",
      shortCode: "MS"
    }, {
      name: "Midlands",
      shortCode: "MI"
    }]
  }], e.exports._addressPlaceholder = {
    ARG: "Eg: Av. del Libertador 1473, Buenos Aires",
    BOL: "Eg: Av Arce, 2556, La Paz",
    BRA: "Ex: Av Paulista, 1578, São Paulo",
    CAN: "Eg: 450 Wilbrod St, Ottawa",
    CHL: "Eg: Los Militares, 6191, Santiago",
    COL: "Eg: Calle 93 # 14-20, Bogotá",
    ECU: "Eg: Av Rio Amazonas, N 37-61, Quito",
    ESP: "Eg: Calle Fernando el Santo, 6, Madrid",
    GTM: "Eg: 6A Calle 6, Guatemala",
    MEX: "Eg: Calle de Tacuba 8, Ciudad de México",
    PER: "Eg: Av. José Pardo, 850, Miraflores, Lima",
    PRT: "Eg: Av. da França 20, Porto",
    PRY: "Eg: Avenida Eusebio Ayala, 100, Assunção",
    UNI: "Eg: 225 East 41st Street, New York",
    URY: "Eg: Bulevar Artigas, 1394, Montevidéu",
    USA: "Eg: 225 East 41st Street, New York",
    VEN: "Eg: Avenida Mohedano, Caracas",
    ROU: "Eg: Bulevardul Ion Mihalache, București 011192, Romania",
    BGR: "Eg: улица Елин Пелин 13, София",
    DEU: "Eg: Rheinalleee 95, Düsseldorf",
    FRA: "Eg: 7 Rue Hautefeuille, Paris",
    GBR: "Eg: 29 High Street Poole BH15 1AB",
    ITA: "Eg: Corso Vittorio Emanuele 69, Milano",
    NLD: "Eg: Surinamestraat 27, Amsterdam",
    POL: "Eg: Ulica Twarda 3, Szczecin"
  }
}, function (e, o, a) {
  e.exports = a.p + "checkout6-custom.css"
}]); //Start Nosto
var nostoId = "gu6exv54";

window.onload = function () {
  botonCotizacion();
  shippingDay();
  lenghtInput();
  changePlaceholdersTexts();
  quitarDecimalesCart();
  agregarCamposShipping();

  async function setCart(itemsCart) {

    const items = await itemsCart.map(item => {
      return {
        ...item,
        price_currency_code: "CLP",
        product_id: item.productRefId || item.productId,
        unit_price: item.price || item.sellingPrice
      }
    })

    const nostojs = window.nostojs || null

    if (nostojs) {
      nostojs(api => {
        api.defaultSession().setCart({
          items
        })
      });
    }
  }

  setCart(vtexjs.checkout.orderForm.items)
}

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "//connect.nosto.com/include/" + nostoId;
$("head").append(s);

(function () {
  var name = "nostojs";
  window[name] = window[name] || function (cb) {
    (window[name].q = window[name].q || []).push(cb);
  };
})();

window.onhashchange = function () {
  botonCotizacion();
  validateInputsProfile();
  validateInputsShipping();
  changePlaceholdersTexts();
  barProgress();
  shippingDay();
  img();
  totalCard();
  state_giftcard();
  quitarDecimalesCart();
  agregarCamposShipping();
};

$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
  const {
    clientProfileData,
    userProfileId,
    items,
    storePreferencesData
  } = orderForm

  if (clientProfileData && clientProfileData.email &&
    clientProfileData.firstName &&
    clientProfileData.lastName && userProfileId) {

    $(".nosto_customer").remove()

    $("head").append(`
		<div class="nosto_customer" style="display: 'none'">
                <span class="email">${clientProfileData.email}</span>
                <span class="first_name">${clientProfileData.firstName}</span>
                <span class="last_name">${clientProfileData.lastName}</span>
                <span class="customer_reference">${userProfileId}</span>
                <span class="marketing_permission">false</span>
            </div>
	`)
  }

  $(".nosto_cart").remove()

  $("head").append(`
		<div class="nosto_cart" style="display: 'none'">
                ${items.map(item => {
        return `<div class="line_item">
                        <span class="product_id">${item.productId}</span>
                        <span class="sku_id">${item.id}</span>
              			<span class="quantity">${item.quantity}</span>
                        <span class="name">${item.name}</span>
                        <span class="unit_price">${item.price / 100}</span>
              <span class="nosto_page_type">Checkout</span>
              			<span class="price_currency_code">${storePreferencesData.currencyCode}</span>
                        </div>`
    })
        }
            </div>
    `)
  var addNosto = setInterval(() => {
    if ($(".cart-more-options").length > 0) {
      $(".cart-more-options").append('<div class="nosto_element" id="cartpage-nosto-1"></div>');
      $(".summary-template-holder .row-fluid.summary").css("height", "155px");
      clearInterval(addNosto);
    }
  }, 100);

  //End Nosto

  barProgress();
  img();
  cupom();
  totalCard();

  if (document.getElementById("cart-title") && document.getElementById("cart-title").children[0] && document.getElementById("cart-title").children[0].children[0]) {
    let text = " item en el carro"
    let textContentNumber = document.getElementById("cart-title").children[0].children[0].textContent.split(" ")[0]
    textContentNumber = parseInt(textContentNumber)
    if (textContentNumber > 1) {
      text = " items en el carro"
    }
    document.getElementById("cart-title").children[0].children[0].textContent = textContentNumber + text
  }
});

$(window).on('checkoutRequestBegin.vtex', function (evt, orderForm) {
  barProgress();
  shippingDay();
  lenghtInput();
  img();
  totalCard();
  quitarDecimalesCart();
  agregarCamposShipping();
})

$(window).on('checkoutRequestEnd.vtex', function (evt, orderForm) {
  barProgress();
  shippingDay();
  lenghtInput();
  img();
  totalCard();
  quitarDecimalesCart();
  agregarCamposShipping();
})

$(window).on('componentValidated.vtex', function (event, orderForm) {
  validateInputsShipping();
  changePlaceholdersTexts();
  shippingDay();
  lenghtInput();
  state_giftcard();
  descuentoGiftcard();
  quitarDecimalesCart();
  agregarCamposShipping();
})

$(document).ready(function () {
  $("#barProgress").insertBefore($("#order-by"))
})

function img() {
  if (location.hash == '#/cart') {
    setTimeout(function () {
      $(".product-item img").each(function () {
        $(this).attr("src", $(this).attr("src").replace("-75-56/", "-120-120/"))
      })
    }, 400);
  }
}

function cupom() {
  if ($(".cart-template").hasClass("active")) {
    var force = setInterval(function () {
      $(".coupon-fieldset .link-coupon-add").trigger("click")
      clearInterval(force)
    }, 500);
  }
}

function botonCotizacion() {
  setTimeout(() => {
    if (document.querySelector("body > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div.clearfix.pull-right.cart-links.cart-links-bottom.hide > span.btn-place-order-wrapper") != null && document.querySelector("a#cotizacion") == null) {
      let botonCotizacion = "<a href='javascript:agregarCotizacion()' target='_self' id='cotizacion' class='btn btn-large btn-success pull-left-margin btn-place-order'>Agregar cotización</a>";
      $("body > div.container.container-main.container-cart > div.checkout-container.row-fluid.cart-active > div.cart-template.full-cart.span12.active > div.summary-template-holder > div.clearfix.pull-right.cart-links.cart-links-bottom.hide > span.btn-place-order-wrapper").append(botonCotizacion);
    }
  }, 1000);
}

function barProgress() {
  $("#barProgress li").each(function () {
    $(this).removeClass("active")
    if (location.hash == '#/payment') {
      if ($(this).hasClass("item-payment")) {
        $(this).addClass("active")
      }
    }
    if (location.hash == '#/profile') {
      if ($(this).hasClass("item-shipping")) {
        $(this).addClass("active")
      }
    }
    if (location.hash == '#/shipping') {
      if ($(this).hasClass("item-shipping")) {
        $(this).addClass("active")
      }
    }
    if (location.hash == '#/cart') {
      if ($(this).hasClass("item-cart")) {
        $(this).addClass("active")
      }
    }
  })
}

function totalCard() {
  var qtd = 0;

  for (var i = 0; i < window.vtexjs.checkout.orderForm.items.length; i++) {
    qtd += parseFloat(window.vtexjs.checkout.orderForm.items[i].quantity)
  }

  if ($("#cart-title small").length < 1) {
    $("#cart-title").append("<small>" + qtd + " items in your cart</small>")
  } else {
    $("#cart-title small").html("<small>" + qtd + " items in your cart</small>")
  }
}


function shippingDay() {

  if ($(".shp-summary-package-time span").length) {
    const text1 = $(".shp-summary-package-time span").text().replace("En", "Desde 4")

    $(".shp-summary-package-time span").text(text1)
  }

  if ($(".vtex-omnishipping-1-x-leanShippingTextLabelSingle span").length) {
    const text2 = $(".vtex-omnishipping-1-x-leanShippingTextLabelSingle span").text().replace("En", "Desde 4")

    $(".vtex-omnishipping-1-x-leanShippingTextLabelSingle span").text(text2)
  }

  if ($("#show-gift-card-group").length) {
    const text2 = $("#show-gift-card-group").text().replace("un cupón de regalo", "Giftcard")

    $("#show-gift-card-group").text(text2)
  }

}

function lenghtInput() {
  $('#ship-street').attr('maxlength', 60);
  $('#ship-receiverName').attr('maxlength', 60);
  $('#ship-number').attr('maxlength', 60);
  $('#ship-complement').attr('maxlength', 60);
}

// Hotjar
/*(function (h, o, t, j, a, r) {
    var siteId = '1054449';
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: siteId, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');*/

function state_giftcard() {
  const list = document.querySelectorAll(".payment-discounts-list td.code")[0];
  const dom = document.querySelectorAll(".gift-card-provider-default")[0];
  if (list && dom) {
    dom.style.display = "none";
  }
}

////////////////////////////////////////////////////////////////////

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",");
}

const descuentoGiftcard = () => {
  const giftcardVal = document.querySelector(".gift-card-section .payment-discounts-list .number[data-bind]");
  if (giftcardVal) {
    // Si ya existe fila descuento, no la vuelve a crear
    if (!document.getElementById('giftcardId')) {
      // Crear nueva row con descuento giftcard
      const totalizersTable = document.querySelector(".cart-template.mini-cart .summary-totalizers .totalizers-list");
      const giftcardRow = document.createElement("tr");
      const giftcardText = document.createElement("td");
      const giftcardDiscount = document.createElement("td");

      giftcardText.innerText = "Descuento Giftcard";
      giftcardDiscount.innerText = `- ${giftcardVal.innerText}`;
      giftcardRow.id = "giftcardId";
      giftcardRow.appendChild(giftcardText);
      giftcardRow.appendChild(giftcardDiscount);
      totalizersTable.appendChild(giftcardRow);
    } else {
      // Si existe la actualiza en caso de cambios
      document.getElementById('giftcardId').children[1].innerText = `- ${giftcardVal.innerText}`;
    }

    // Modificar el total
    const totalVal = document.querySelector(".cart-template.mini-cart .summary-totalizers tfoot .monetary");
    const formattedGiftcardVal = parseInt(giftcardVal.innerText.split("$ ").join("").split(".").join(""));
    const formattedTotalVal = parseInt(totalVal.innerText.split("$ ").join("").split(".").join(""));

    const totalizersList = document.querySelectorAll('.totalizers-list')[1];
    let childrenList = [];

    for (i = 0; i < (totalizersList.childElementCount - 2); i++) {
      childrenList[i] = totalizersList.children[i].querySelector('.monetary').innerText;
      if (childrenList[i] === "Gratis") childrenList[i] = "$ 0";
      childrenList[i] = parseInt(childrenList[i].split("$ ").join("").split(".").join(""));
    }

    childrenList.push(-formattedGiftcardVal);
    const reducer = (previousAmount, currentAmount) => previousAmount + currentAmount;
    const newTotalVal = childrenList.reduce(reducer);

    setTimeout(() => {
      if (formattedTotalVal !== newTotalVal) {
        totalVal.innerText = `$ ${numberWithCommas(newTotalVal)}`;
      }

      if (document.querySelector(".cart-template.mini-cart .summary-totalizers tfoot .monetary").innerText === "$ 0") {
        changeBuyBtnInnerText("Comprar con Giftcard");
      } else {
        changeBuyBtnInnerText("Comprar ahora");
      }
    });

  }
}

function changeBuyBtnInnerText(text) {
  if (document.querySelectorAll('#payment-data-submit span')[1].innerText) {
    document.querySelectorAll('#payment-data-submit span')[1].innerText = text;
  }
}

//cambia texto placeholder cupon de descuento
const changePlaceholdersTexts = () => {
  let inputsGiftcard = document.querySelectorAll("#cart-coupon");
  inputsGiftcard.forEach(input => {
    input.placeholder = "Código de descuento";
  });
}

/* INICIO VALIDAR INPUTS */
// Se remueve la clase para evitar inconsistencia
const removeClassInput = (input) => {
  input.classList.remove('success');
};

// Valida el input según la expresión regular
const checkValidInput = (input, hasNumbers = false) => {
  if (input.value.length === 0) {
    return;
  }

  // Remuevo las clases para evitar conflicto con función de vtex
  input.classList.remove('success');
  input.classList.remove('error');

  let regex;

  if (hasNumbers) {
    regex = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9]+[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\s]*$/g); // Permite letras, tildes, ñ, dígitos y espacios.
  } else {
    regex = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ]+[A-Za-zÁÉÍÓÚáéíóúñÑ\s]*$/g); // Permite letras, tildes, ñ y espacios.
  }

  if (regex.test(input.value)) { // Válido
    if (input.nextElementSibling) input.nextElementSibling.remove();
    input.classList.add('success');
  } else {
    input.classList.add('error');

    // Se elimina el span de vtex si existe
    if (input.nextElementSibling) input.nextElementSibling.remove();

    // Se crea el mensaje de error
    const span = document.createElement('span');
    const content = document.createTextNode('Caracteres no válidos');
    span.appendChild(content);
    span.classList.add('help', 'error');

    const parent = input.parentElement;
    parent.append(span);
  }
};

// Validar inputs Profile
const validateInputsProfile = () => {
  if (window.location.hash === "#/profile") {
    const firstName = document.getElementById('client-first-name');
    const lastName = document.getElementById('client-last-name');
    const goToShippingBtn = document.getElementById('go-to-shipping');
    const goToPaymentBtn = document.getElementById('go-to-payment');

    firstName.addEventListener('keyup', (e) => removeClassInput(e.target));
    firstName.addEventListener('blur', (e) => checkValidInput(e.target));

    lastName.addEventListener('keyup', (e) => removeClassInput(e.target));
    lastName.addEventListener('blur', (e) => checkValidInput(e.target));

    if (goToShippingBtn.style.display === 'none') { // Está activo el botón de ir al pago
      goToPaymentBtn.addEventListener('click', (e) => {
        // Si algún input tiene error
        if (firstName.classList.contains('error') || lastName.classList.contains('error')) {
          e.preventDefault();
        }
      });
    } else {
      goToShippingBtn.addEventListener('click', (e) => {
        // Si algún input tiene error
        if (firstName.classList.contains('error') || lastName.classList.contains('error')) {
          e.preventDefault();
        }
      });
    }
  }
};

// Validar inputs Shipping
const validateInputsShipping = () => {
  if (window.location.hash === "#/shipping") {
    const shipStreet = document.getElementById('ship-street');
    const shipNumber = document.getElementById('ship-number');
    const shipComplement = document.getElementById('ship-complement');
    const shipReceiverName = document.getElementById('ship-receiverName');
    const goToPaymentBtn = document.getElementById('btn-go-to-payment');

    if (shipStreet) {
      shipStreet.addEventListener('keyup', (e) => removeClassInput(e.target));
      shipStreet.addEventListener('blur', (e) => checkValidInput(e.target, true));
    }

    if (shipNumber) {
      shipNumber.addEventListener('keyup', (e) => removeClassInput(e.target));
      shipNumber.addEventListener('blur', (e) => checkValidInput(e.target, true));
    }

    if (shipComplement) {
      shipComplement.addEventListener('keyup', (e) => removeClassInput(e.target));
      shipComplement.addEventListener('blur', (e) => checkValidInput(e.target, true));
    }

    if (shipReceiverName) {
      shipReceiverName.addEventListener('keyup', (e) => removeClassInput(e.target));
      shipReceiverName.addEventListener('blur', (e) => checkValidInput(e.target));
    }

    if (goToPaymentBtn) {
      goToPaymentBtn.addEventListener('click', (e) => {
        // Si algún input tiene error
        if (shipNumber.classList.contains('error') || shipComplement.classList.contains('error') || shipReceiverName.classList.contains('error')) {
          e.stopPropagation();
        } else if (shipStreet && shipStreet.classList.contains('error')) {
          e.stopPropagation();
        }
      });
    }
  }
};
/* FIN VALIDAR INPUTS */

function validarForm() {
  var validation = true;
  var nombre = $("#firstName").val();
  var email = $("#email").val();
  var localidad = $("#localidad").val();
  var rut = $("#rut").val();

  var alfabetico = /[A-Za-z\s]+$/g;
  var especial = /([0-9]+)+\.+([0-9]+)+\.+([0-9]+)+.[A-Z]+/g;
  var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!alfabetico.test(nombre)) {
    $("#firstName").addClass("red");
    $("#firstName").focus();
    validation = false;
  } else {
    $("#firstName").removeClass("red");
  }

  if (!mail.test(email)) {
    $("#email").addClass("red");
    $("#email").focus();
    validation = false;
  } else {
    $("#email").removeClass("red");
  }

  if (localidad == "") {
    $("#localidad").addClass("red");
    $("#localidad").focus();
    validation = false;
  } else {
    $("#localidad").removeClass("red");
  }

  if (rut == "") {
    $("#rut").addClass("red");
    $("#rut").focus();
    validation = false;
  } else {
    // Despejar Puntos
    var valor = rut.replace('.', '');
    // Despejar Guión
    valor = valor.replace('-', '');

    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut = cuerpo + '-' + dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
      $("#rut").addClass("red");
      $("#rut").focus();
      validation = false;
    }

    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;

    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {

      // Obtener su Producto con el Múltiplo Correspondiente
      index = multiplo * valor.charAt(cuerpo.length - i);

      // Sumar al Contador General
      suma = suma + index;

      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo = multiplo + 1;
      } else {
        multiplo = 2;
      }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
      $("#rut").addClass("red");
      $("#rut").focus();
      validation = false;
    }

    if (validation) {
      $("#rut").removeClass("red");
    }
  }

  return validation;
}


function guardarPedido(jsonx) {
  $.ajax({
    contentType: "application/json; charset=utf-8",
    headers: {
      Accept: "application/vnd.vtex.ds.v10+json",
      "Content-Type": "application/json",
    },
    type: "PATCH",
    url: "/api/dataentities/PC/documents",
    data: jsonx,
    success: function (result) {
      resetearFormulario();
      cerrarCotizacion();
      alert("Pedido enviado con exito.");
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log(xhr, textStatus, errorThrown)
      alert("No hemos podido procesar su solicitud. Intente nuevamente más tarde.");
    }
  });
}

function setOptions(data, method) {
  let options = {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.vtex.ds.v10+json'
    }),
    method: method,
  }
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options
}

function enviarDatos() {
  vtexjs.checkout
    .getOrderForm(orderForm => orderForm)
    .then(orderForm => {
      if (orderForm.items) {
        if (validarForm()) {
          var pedidoList = "";
          $.each(orderForm.items, function (index, value) {
            pedidoList = pedidoList + "[" + value.name + " - " + value.id + " - " + value.quantity + value.measurementUnit + " - $" + value.sellingPrice / 100 * value.quantity + "]";
          });
          var data = {
            firstName: $("#firstName").val(),
            razonSocial: $("#razonSocial").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            localidad: $("#localidad").val(),
            rut: $("#rut").val(),
            giro: $("#giro").val(),
            pedido: pedidoList,
          }

          guardarPedido(JSON.stringify(data));
        } else {
          $(".validation-alert").show();
        }
      } else {
        const form = document.querySelector(".form-cotizacion .form");
        const message = document.createElement('p');
        message.className = 'form-error-message';
        message.innerText = 'Debe incluir al carrito los productos que desea cotizar';
        form.insertAdjacentElement("beforebegin", message);
      }
    });
}

function resetearFormulario() {
  $("#firstName").val("");
  $("#razonSocial").val("");
  $("#email").val("");
  $("#phone").val("");
  $("#localidad").val("");
  $("#rut").val("");
  $("#giro").val("");
}

function cerrarCotizacion() {
  $(".form-cotizacion").css("display", "none");
}

function agregarCotizacion() {
  $(".form-cotizacion").css("display", "block");
}
