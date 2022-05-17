window.onload = function () {
  window.scrollY = 0;
  let inputHeaderSearch = document.querySelector(".search__bar");
  let modal = document.querySelector(".modal");
  let searchBoard = document.querySelector(".search__board");
  let iconCloseFormRegister = document.querySelector(".form-icon");
  let formRegister = document.querySelector(".register");
  let formLogin = document.querySelector(".login");
  let userLog = document.querySelector(".user__content");
  let loginByGmail = document.querySelector(".login__gmail");
  let iconBackRegister = document.querySelector(".icon-backRegister");
  let iconBackLogin = document.querySelector(".icon-backLogin");
  let rememberCreateAcc = document.querySelector(".link-register");
  function handleFocusedSearch() {
    modal.classList.remove("hide");
    searchBoard.classList.remove("hide");
  }
  function close() {
    if (!searchBoard.classList.contains("hide"))
      searchBoard.classList.add("hide");
    modal.classList.add("hide");
    if (!formRegister.classList.contains("hide"))
      formRegister.classList.add("hide");
    if (!formLogin.classList.contains("hide")) formLogin.classList.add("hide");
  }
  inputHeaderSearch.onfocus = function () {
    handleFocusedSearch();
  };

  modal.onclick = function (e) {
    if (e.target == this) {
      close();
    }
  };

  iconCloseFormRegister.onclick = function () {
    close();
  };

  userLog.onclick = function () {
    modal.classList.remove("hide");
    formRegister.classList.remove("hide");
  };

  loginByGmail.onclick = function () {
    if (modal.classList.contains("hide")) {
      modal.classList.remove("hide");
    }
    if (!formRegister.classList.contains("hide"))
      formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
  };

  iconBackRegister.onclick = function () {
    if (modal.classList.contains("hide")) {
      modal.classList.remove("hide");
    }
    if (!formLogin.classList.contains("hide")) formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
  };
  iconBackLogin.onclick = function () {
    if (modal.classList.contains("hide")) {
      modal.classList.remove("hide");
    }
    if (!formRegister.classList.contains("hide"))
      formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
  };
  rememberCreateAcc.onclick = function () {
    if (modal.classList.contains("hide")) {
      modal.classList.remove("hide");
    }
    if (!formLogin.classList.contains("hide")) formLogin.classList.add("hide");

    let registerTitle = formRegister.querySelector(".register__title");
    registerTitle.innerText = `Tạo tài khoản`;
    let registerDes = formRegister.querySelector(".register__des");
    registerDes.innerText = `Vui lòng nhập số điện thoại`;
    loginByGmail.style.display = "none";
    let iconBack = formRegister.querySelector(".icon-back");
    iconBackLogin.innerHTML = ` <i class="fas fa-chevron-left"></i>`;
    formRegister.classList.remove("hide");
  };

  let listCategory = [
    "Thịt, Rau Củ",
    "Bách Hóa",
    "Nhà cửa",
    "Điện tử",
    "Thiết bị số",
    "Điện thoại",
    "Mẹ và bé",
    "Làm đẹp",
    "Gia Dụng",
    "Thời trang nữ",
    "Thời trang nam",
    "Giay Nữ",
    "Túi Nữ",
    "Giay Nam",
    "Túi Nam",
    "Balo & Vali",
    "Phu Kien",
    "Đồng Hồ",
    "Laptop",
    "Quốc tế",
    "Vourcher",
    "Xe",
    "Sách",
    "Thể Thao",
    "Máy ảnh",
  ];

  let bodyCategoryList = document.querySelector(".body__category-list");

  let html = listCategory.map(function (category) {
    return `
      <li class="body__category-item">
        <a href="" class="body__category-link">
          ${category}
        </a>
      </li>
    `;
  });

  bodyCategoryList.innerHTML = html.join("");

  let iconNextCategory = document.querySelector(".icon-arrowNext");
  let iconRevCategory = document.querySelector(".icon-arrowRev");

  function handleClickIconNext() {
    bodyCategoryList.scrollLeft += 50;
    if (bodyCategoryList.scrollLeft >= 940) {
      return;
    }
    setTimeout(handleClickIconNext, 10);
  }
  function handleClickIconRev() {
    bodyCategoryList.scrollLeft -= 50;
    if (bodyCategoryList.scrollLeft <= 0) {
      return;
    }
    setTimeout(handleClickIconRev, 10);
  }
  iconNextCategory.onclick = function (e) {
    iconRevCategory.innerHTML = `<i class="fas fa-chevron-left"></i>`;
    iconNextCategory.innerHTML = ``;
    handleClickIconNext(bodyCategoryList);
  };

  iconRevCategory.onclick = function (e) {
    iconNextCategory.innerHTML = `<i class="fas fa-chevron-right"></i>`;
    iconRevCategory.innerHTML = ``;
    handleClickIconRev(bodyCategoryList);
  };

  let htmlAdvertisement = [];
  let htmlDotAdvertisement = [];

  for (let i = 0; i < 10; ++i) {
    htmlDotAdvertisement.push(
      `
      <li class="body__advertisement-dot ${
        i == 0 ? "active" : ""
      }" data-idx = ${i} ></li>
      `
    );
    htmlAdvertisement.push(
      `
      <a class="body__advertisement-item">
        <img src="./asset/images/qc${
          i + 1
        }.webp" alt="" class="body__advertisement-img">
      </a>
      `
    );
  }

  let listAdvertisement = document.querySelector(".body__advertisement-list");
  listAdvertisement.innerHTML = htmlAdvertisement.join("");
  let listDotsAdvertisement = document.querySelector(
    ".body__advertisement-dots"
  );
  listDotsAdvertisement.innerHTML = htmlDotAdvertisement.join("");

  let dotsAdvertisement = document.querySelectorAll(".body__advertisement-dot");

  let iconNextAdvertisement = document.querySelector(".advertisement-iconNext");
  let iconRevAdvertisement = document.querySelector(".advertisement-iconRev");

  let listAdvertisementWidth = listAdvertisement.getBoundingClientRect().width;
  iconNextAdvertisement.style.left = `${listAdvertisementWidth}px`;
  let leftMax = listAdvertisementWidth * 9;
  let cnt = 0;

  function convertToNumber(value) {
    let number = 0,
      i = 0,
      len = value.length;
    while (i < len && value[i] != " " && value[i] != "p") {
      if (value[i] == "-") {
        ++i;
        continue;
      }
      number = number * 10 + Number(value[i]);
      ++i;
    }
    return number;
  }

  function changeActiveDot(element) {
    let dotActive = document.querySelector(".body__advertisement-dot.active")
    dotActive.classList.remove('active');
    element.classList.add('active');
  }

  dotsAdvertisement.forEach(function (d) {
    d.onclick = function (e) {
      let idx = Number(e.target.getAttribute("data-idx"));
      let left = idx * listAdvertisementWidth;
      listAdvertisement.style.left = `${-1 * left}px`;
      changeActiveDot(e.target)
    };
  });
  let cntNext = 0;

  function nextAdvertisement() {
    let left =
      convertToNumber(listAdvertisement.style.left) + listAdvertisementWidth;
    if (left >= leftMax) {
      ++cntNext;
      if (cntNext == 2) {
        left = 0;
        cntNext = 0;
      }
    }
    listAdvertisement.style.left = `${-1 * left}px`;
    var dataIdx =  left / listAdvertisementWidth ;
    
    dotsAdvertisement.forEach(function(d) {
      if(Number(d.getAttribute('data-idx')) == dataIdx) {
        changeActiveDot(d);
        return; 
      }
    })
    
  }

  iconNextAdvertisement.onclick = nextAdvertisement;

  function autoNextAdvertisement() {
    nextAdvertisement();
    setTimeout(autoNextAdvertisement, 10000);
  }
  setTimeout(autoNextAdvertisement, 10000);
  let cntRev = 0,
    isClick = false;

  iconRevAdvertisement.onclick = function () {
    let left =
      convertToNumber(listAdvertisement.style.left) - listAdvertisementWidth;
    if (left <= 0) {
      if (!isClick) {
        left = leftMax;
        isClick = true;
      } else {
        ++cntRev;
        if (cntRev == 2) {
          cntRev = 0;
          left = leftMax;
        }
      }
    }
    listAdvertisement.style.left = `${-1 * left}px`;
    var dataIdx =  left / listAdvertisementWidth ;

    dotsAdvertisement.forEach(function(d) {
      if(Number(d.getAttribute('data-idx')) == dataIdx) {
        changeActiveDot(d);
        return; 
      }
    })
  };
 

  // set date

  let saleTimeDay = document.querySelector(".sales-day__time");

  let saleTimeHours = saleTimeDay.querySelector(".sales-day__hours");
  let saleTimeMinutes = saleTimeDay.querySelector(".sales-day__minutes");
  let saleTimeSeconds = saleTimeDay.querySelector(".sales-day__seconds");

  let currentTime = new Date();

  let hours = 6,
    minutes = 0,
    seconds = 0;

  function updateTimeSale() {
    saleTimeHours.innerText = `${hours >= 10 ? hours : "0" + hours}`;
    saleTimeMinutes.innerText = `${minutes >= 10 ? minutes : "0" + minutes}`;
    saleTimeSeconds.innerText = `${seconds >= 10 ? seconds : "0" + seconds}`;
    --seconds;
    if (seconds <= 0) {
      seconds = 59;
      --minutes;
      if (minutes <= 0) {
        minutes = 59;
        --hours;
        if (hours <= 0) {
          return;
        }
      }
    }

    setTimeout(updateTimeSale, 1000);
  }

  updateTimeSale();

  let saleDayList = document.querySelector(".sales-day__list");

  let htmlSaleDay = [];

  let numberProductSale = 12;

  function convertPrice(price) {
    let res = "",
      i = 0,
      len = price.length;
    if (len <= 3) return price;
    while (i < len) {
      res += price[i];
      if ((i % 3 == 0 && i != 0) || i == 0) {
        res += ".";
      }
      ++i;
    }
    return res;
  }
  for (let i = 0; i < numberProductSale; ++i) {
    let price = convertPrice(Math.floor(Math.random() * 9000).toString());
    let priceSale = Math.floor(Math.random() * 90 + 1);
    let srcImg = priceSale >= 50 ? "./asset/images/mark.svg" : "";
    let mes = priceSale >= 50 ? "Sắp bán hết" : "Vừa mới bán";
    htmlSaleDay.push(
      `
       <a class="sales-day__item">
          <img src="./asset/images/sale${
            i + 1
          }.webp" alt="" class="sales-day__img">
          <p class="sales-day__content">
              <span class="sales-day__price">${price + "000"} đ</span>
              <span class="sales-day__sale">-${priceSale}%</span>
          </p>
          <div class="sales-day__status">
            <img src="${srcImg}" alt="" class = "sales-day__mark">
              <span class="sales-day__notify">${mes}</span>
            <div class="sales-day__range" style = "width:${priceSale}%"></div>
          </div>
      </a>
       `
    );
  }

  saleDayList.innerHTML = htmlSaleDay.join("");

  let salesDayContainer = document.querySelector(".sales-day__product");
  let iconNextSale = document.querySelector(".sales-day__iconNext");
  let iconRevSale = document.querySelector(".sales-day__iconRev");
  let salesDayContainerMaxScroll = 1315;
  function nextProductSale() {
    salesDayContainer.scrollLeft += 50;
    if (salesDayContainer.scrollLeft >= salesDayContainerMaxScroll) {
      return;
    }
    setTimeout(nextProductSale, 10);
  }
  function revProductSale() {
    salesDayContainer.scrollLeft -= 50;
    if (salesDayContainer.scrollLeft <= 0) {
      return;
    }
    setTimeout(revProductSale, 10);
  }
  iconNextSale.onclick = function () {
    nextProductSale();
    iconNextSale.classList.toggle("hideop");
    iconRevSale.classList.toggle("hideop");
  };

  iconRevSale.onclick = function () {
    revProductSale();
    iconNextSale.classList.toggle("hideop");
    iconRevSale.classList.toggle("hideop");
  };

  let remember = [
    "Săn thưởng mỗi ngày",
    "Siêu sale sinh nhật",
    "Đi chợ online",
    "Mã giảm giá",
    "Bảo hiện tiki360",
    "Dịch vụ và tiện ích",
    "Gói hội viên",
    "Giam đến 50%",
    "Hoàn tiền 15%",
    "Uư đãi thanh toán",
  ];

  let bodyRememberList = document.querySelector(".body__remember-list");

  let htmlRememberList = [];

  for (let i = 0; i < 10; ++i) {
    htmlRememberList.push(
      `
  
      <a href="" class="body__remember-item">
         <img src="./asset/images/remember${i + 1}.webp" alt="" class="">
         <span>${remember[i]}</span>
      </a>
      `
    );
  }

  bodyRememberList.innerHTML = htmlRememberList.join("");

  var bodyBrandList = document.querySelector(".body__brand-list");

  let htmlBrand = [];

  for (let i = 0; i < 6; ++i) {
    htmlBrand.push(
      `
      <a href="" class="body__brand-item">
        <div class="body__brand-item-left">
          <img src="./asset/images/brand${i + 1}.webp" alt="">
        </div>
        <div class="body__brand-item-right">
          <img src="./asset/images/brand${i + 2}.webp" alt="">
        </div>
     </a>
      `
    );
  }
  bodyBrandList.innerHTML = htmlBrand.join("");

  let iconNextBrand = document.querySelector(".brand-iconNext");
  let iconRevBrand = document.querySelector(".brand-iconRev");

  let listBrandWidth = bodyBrandList.getBoundingClientRect().width;
  let leftBrandMax = listBrandWidth * 5;

  let countNext = 0;

  function nextBrand() {
    let left = convertToNumber(bodyBrandList.style.left) + listBrandWidth;
    if (left >= leftBrandMax) {
      ++countNext;
      if (countNext == 2) {
        left = 0;
        countNext = 0;
      }
    }
    bodyBrandList.style.left = `${-1 * left}px`;
  }

  iconNextBrand.onclick = nextBrand;

  function autoNextBrand() {
    nextBrand();
    setTimeout(autoNextBrand, 10000);
  }
  setTimeout(autoNextBrand, 10000);
  let countRev = 0,
    isClickIconNextBrand = false;

  iconRevBrand.onclick = function () {
    let left = convertToNumber(bodyBrandList.style.left) - listBrandWidth;
    if (left <= 0) {
      if (!isClickIconNextBrand) {
        left = leftBrandMax;
        isClickIconNextBrand = true;
      } else {
        ++countRev;
        if (countRev == 2) {
          countRev = 0;
          left = leftBrandMax;
        }
      }
    }
    bodyBrandList.style.left = `${-1 * left}px`;
  };

  let listProductBrand = document.querySelector(".body__brand-product-list");

  let listDesBrand = [
    "Mua 1 tậng 1",
    "Giam 50% Vourcher 120k",
    "Coupon Giam 100k",
    "Voucher Giam 110k",
    "Coupon Giam 50k",
    "Deal Gốc 0đ",
    "Mã Giam Giá 100k",
  ];

  let htmlProductBrand = [];

  for (let i = 0; i < 12; ++i) {
    htmlProductBrand.push(
      `
      <a class="body__brand-product-item">
        <img src="./asset/images/imgbrand${
          i + 1
        }.webp" alt="" class = "img-product">
        <p class = "body__brand-product-des">${
          listDesBrand[Math.floor(Math.random() * listDesBrand.length)]
        }</p>
      </a>
      `
    );
  }

  listProductBrand.innerHTML = htmlProductBrand.join("");

  let iconNextProductBrand = document.querySelector(".body__brand-iconNext");
  let iconRevProductBrand = document.querySelector(".body__brand-iconRev");

  let productBrandContainer = document.querySelector(".body__brand-product");
  let itemProductBrand = document.querySelector(
    ".body__brand-product-list a:last-child"
  );

  let posX = 0;
  function handleClickIconNextProductBrand() {
    let maxWidth =
      itemProductBrand.offsetWidth * 12 +
      (htmlProductBrand.length - 1) * 15 -
      productBrandContainer.offsetWidth;

    posX += 700;
    if (posX >= maxWidth) {
      posX = maxWidth;
      iconNextProductBrand.classList.add("hideop");
    }

    listProductBrand.style.left = `${-1 * posX}px`;
  }

  function handleClickIconRevProductBrand() {
    let maxWidth =
      itemProductBrand.offsetWidth * 12 +
      (htmlProductBrand.length - 1) * 15 -
      productBrandContainer.offsetWidth;

    posX -= 700;
    if (posX <= 0) {
      posX = 0;
      iconRevProductBrand.classList.add("hideop");
    }

    listProductBrand.style.left = `${-1 * posX}px`;
  }

  iconNextProductBrand.onclick = function () {
    iconRevProductBrand.classList.remove("hideop");
    handleClickIconNextProductBrand();
  };
  iconRevProductBrand.onclick = function () {
    iconNextProductBrand.classList.remove("hideop");
    handleClickIconRevProductBrand();
  };

  let listFeaturedCategory = document.querySelector(".featured-category__list");

  var featuredCategoryNameProduct = [
    "TiKINGON",
    "Giay thể thao",
    "Sách Tử duy",
    "Điện thoại smartphone",
    "Tiểu thuyết",
    "Truyện ngắn",
    "Nồi chiên",
    "Truyện tranh",
    "Bánh nước ngọt",
    "Bánh",
  ];

  let htmlfeaturedCategory = [];

  for (let i = 0; i < 20; ++i) {
    htmlfeaturedCategory.push(
      `
      <a href="" class="featured-category__item">
        <img src="./asset/images/Featured Category${
          i + 1
        }.webp" alt="" class = "featured-category__img">
        <span class="featured-category__name">
         ${
           featuredCategoryNameProduct[
             Math.floor(Math.random() * featuredCategoryNameProduct.length)
           ]
         }
        </span>
      </a>
      `
    );
  }

  listFeaturedCategory.innerHTML = htmlfeaturedCategory.join("");

  let shopTrendList = document.querySelector(".shopping-trends__list");

  let htmlshopTrend = [];

  for (let i = 0; i < 7; ++i) {
    htmlshopTrend.push(
      `<a href="" class="shopping-trends__item">
          <p class="shopping-trends__item-name">
          ${
            featuredCategoryNameProduct[
              Math.floor(Math.random() * featuredCategoryNameProduct.length)
            ]
          }
          </p>
          <p class="shopping-trends__item-sale">Giam den ${
            Math.floor(Math.random() * 90) + 1
          }%</p>
          <div class="shopping-trends__item-content">
            <img src="./asset/images/shopping-trends${
              2 * i
            }.webp" alt="" class="shopping-trends__item-img">
            <img src="./asset/images/shopping-trends${
              2 * i + 1
            }.webp" alt="" class="shopping-trends__item-img">
          </div>
       </a>
      `
    );
  }

  shopTrendList.innerHTML = htmlshopTrend.join("");

  let iconNextShopTrend = document.querySelector(".shopping-trends-iconNext");
  let iconRevShopTrend = document.querySelector(".shopping-trends-iconRev");

  let shopTrendContainer = document.querySelector(".shopping-trends__product");
  let itemShopTrends = document.querySelectorAll(".shopping-trends__list a");

  itemShopTrends = Array.from(itemShopTrends);
  let positionX = 0;
  function handleClickIconNextShopTrend() {
    let maxWidth =
      itemShopTrends[0].offsetWidth * itemShopTrends.length +
      (itemShopTrends.length - 1) * 15 -
      shopTrendContainer.offsetWidth;

    positionX += 700;
    if (positionX >= maxWidth) {
      positionX = maxWidth;
      iconNextShopTrend.classList.add("hideop");
    }

    shopTrendList.style.left = `${-1 * positionX}px`;
  }

  function handleClickIconRevShopTrend() {
    let maxWidth =
      itemShopTrends[0].offsetWidth * itemShopTrends.length +
      (itemShopTrends.length - 1) * 15 -
      shopTrendContainer.offsetWidth;

    positionX -= 700;
    if (positionX <= 0) {
      positionX = 0;
      iconRevShopTrend.classList.add("hideop");
    }

    shopTrendList.style.left = `${-1 * positionX}px`;
  }

  iconNextShopTrend.onclick = function () {
    iconRevShopTrend.classList.remove("hideop");
    handleClickIconNextShopTrend();
  };
  iconRevShopTrend.onclick = function () {
    iconNextShopTrend.classList.remove("hideop");
    handleClickIconRevShopTrend();
  };

  let listTodaySuggestions = document.querySelector(".today-suggestions__list");

  let listTodaySuggestionsDes = [
    "Dành cho bạn",
    "Chính Hãng -50%",
    "Deal giảm 500k",
    "Deal siêu hot",
    "Rẻ vô đối",
    "Đi chợ siêu Sale",
    "Hàng mới",
    "Xu hướng thời trang",
  ];

  var htmltTodaySuggestions = [];

  for (let i = 0; i < 8; ++i) {
    htmltTodaySuggestions.push(
      `<li class="today-suggestions__item ${i == 0 ? "focus" : ""}">
        <img src="./asset/images/Today's Suggestion${
          i + 1
        }.webp" alt="" class = "today-suggestions__img">
        <p class = "today-suggestions__des">${listTodaySuggestionsDes[i]}</p>
      </li>
      `
    );
  }

  listTodaySuggestions.innerHTML = htmltTodaySuggestions.join("");

  let listProductTodaySuggestions = document.querySelector(
    ".today-suggestions__list-product"
  );

  let htmlProductTodaySuggestions = [],
    idx = 0;
  for (; idx < 12; ++idx) {
    let price = convertPrice(Math.floor(Math.random() * 9000).toString());
    htmlProductTodaySuggestions.push(
      `
      <li class="today-suggestions__product-contain">
        <a href="" class="today-suggestions__product">
          <img src="./asset/images/today-suggestionsimg${
            idx + 1
          }.webp" alt="" class="today-suggestions__product-img">
          <p class="today-suggestions__product-des">
          ${
            featuredCategoryNameProduct[
              Math.floor(Math.random() * featuredCategoryNameProduct.length)
            ]
          }
          </p>
          <span class="today-suggestions__product-price">${
            price + "000"
          } đ</span>
        </a>
      </li>
      `
    );
  }

  listProductTodaySuggestions.innerHTML = htmlProductTodaySuggestions.join("");

  let btnViewMore = document.querySelector(".viewmore-product button");

  let maxProductAdd = 24;

  function addProduct() {
    btnViewMore.innerText = "Xem thêm";
    let numberProductAdd = idx + 6;
    if (numberProductAdd > maxProductAdd) {
      return;
    }
    for (; idx < numberProductAdd; ++idx) {
      let price = convertPrice(Math.floor(Math.random() * 9000).toString());
      htmlProductTodaySuggestions.push(
        `
        <li class="today-suggestions__product-contain">
          <a href="" class="today-suggestions__product">
            <img src="./asset/images/today-suggestionsimg${
              idx + 1
            }.webp" alt="" class="today-suggestions__product-img">
            <p class="today-suggestions__product-des">
            ${
              featuredCategoryNameProduct[
                Math.floor(Math.random() * featuredCategoryNameProduct.length)
              ]
            }
            </p>
            <span class="today-suggestions__product-price">${
              price + "000"
            } đ</span>
          </a>
        </li>
        `
      );
    }
    listProductTodaySuggestions.innerHTML =
      htmlProductTodaySuggestions.join("");
  }

  btnViewMore.onclick = function () {
    btnViewMore.innerText = "Đang tải...";
    setTimeout(addProduct, 1000);
  };

  let todaySuggestionsTop = document.querySelector(".today-suggestions__top");
  let distance,
    isFirst = false;
  document.onscroll = function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (todaySuggestionsTop.getBoundingClientRect().top <= 0 && !isFirst) {
      distance = scrollTop + todaySuggestionsTop.getBoundingClientRect().top;
      isFirst = true;
    }
    if (distance) {
      if (distance > scrollTop) {
        todaySuggestionsTop.classList.remove("posFix");
        todaySuggestionsTop.style.left = ``;
      } else {
        todaySuggestionsTop.classList.add("posFix");
        todaySuggestionsTop.style.left = `${
          (document.body.clientWidth - 1270) / 2
        }px`;
      }
    }
  };
};
