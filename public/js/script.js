const infiniteLoad = ({
  parentCont,
  container,
  navbar,
  responsive,
  length,
  data,
  api,
  templateId,
}) => {
  //* PAGE COUNTER
  var pageCounter = 0;

  //* FIXED navbar IF AVAILABLE
  var fixednavbarHeight;
  navbar ? (fixednavbarHeight = navbar) : (fixednavbarHeight = 0);

  //* CONTENT CONTAINER OFFSET TOP
  var offsetTop;

  responsive
    ? responsive.forEach((item) => {
        if (item.symbol === ">") {
          if (window.innerWidth > item.breakPoint) {
            offsetTop = item.offsetTop;
          }
        } else if (item.symbol === "<=") {
          if (window.innerWidth <= item.breakPoint) {
            offsetTop = item.offsetTop;
          }
        } else if (item.symbol === ">=") {
          if (window.innerWidth <= item.breakPoint) {
            offsetTop = item.offsetTop;
          }
        }
      })
    : (offsetTop = 0);

  //* SCROLL VARIABLE
  var scrolled = false;

  //* SCROLL EVENT
  const scrollFunc = async () => {
    var scrollTop = window.scrollY + window.innerHeight + offsetTop + fixednavbarHeight;
    if (!scrolled) {
      if (scrollTop > document.querySelector(parentCont).clientHeight) {
        console.log(true);
        scrolled = true;
      }
    }

    if (scrolled) {
      scrolled = false;
      pageCounter++;

      if (data) {
        var finalData = {
          ...data,
          start: pageCounter * length,
          end: pageCounter * length + length,
        };
      } else {
        var finalData = {
          start: pageCounter * length,
          end: pageCounter * length + length,
        };
      }

      //* CALLBACK FUNCTION
      await fetchInfiniteItems(parentCont, container, api, finalData, scrollFunc, templateId);
    }
  };
  window.addEventListener("scroll", scrollFunc);
};

const fetchInfiniteItems = async (parentCont, container, api, data, scrollFunc, templateId) => {
  const template = document.getElementById(templateId).innerHTML;
  try {
    const axiosRequest = await axios.post(api, data);
    const res = await axiosRequest.data;
    console.log(res.length);

    if (res.length <= 0) {
      document
        .querySelector(container)
        .insertAdjacentHTML("beforeend", "<p>No more items to load</p>");
      window.removeEventListener("scroll", scrollFunc);
      return;
    }

    if (res.length < 8) {
      document
        .querySelector(container)
        .insertAdjacentHTML("beforeend", "<p>you have reached the end</p>");
      window.removeEventListener("scroll", scrollFunc);
      return;
    }

    const target = document.querySelector(parentCont);
    res.forEach((item) => {
      mustache(template, item, target);
    });
  } catch (error) {
    console.log(error);
  }
};

const mustache = (template, item, target) => {
  var rendered = Mustache.render(template, {
    image: "placeholder.jpg",
    title: item.title,
    body: item.body,
  });
  target.insertAdjacentHTML("beforeend", rendered);
};
