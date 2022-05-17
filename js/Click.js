var element = "";
var showMenu = (id) => {
  id.onmouseup = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (element == "") {
      id.querySelector(".menu_list2").style.display = "block";
      element = id;
    } else if (element == id) {
      element.querySelector(".menu_list2").style.display = "none";
      element = "";
    } else {
      element.querySelector(".menu_list2").style.display = "none";
      id.querySelector(".menu_list2").style.display = "block";
      element = id;
    }
  };
};
var showMenu2 = (id) => {
  id.querySelector(".menu_list3").style.display = "block";
};
var closeMenu2 = (id) => {
  id.querySelector(".menu_list3").style.display = "none";
};
