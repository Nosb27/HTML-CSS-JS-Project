const cars = [
  {
    brand: "Toyota",
    price: 25000,
    year: 2020,
    model: "Camry",
    enginePower: 203,
    mileage: 15000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Honda",
    price: 22000,
    year: 2019,
    model: "Accord",
    enginePower: 192,
    mileage: 18000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Ford",
    price: 27000,
    year: 2021,
    model: "Mustang",
    enginePower: 450,
    mileage: 5000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Chevrolet",
    price: 20000,
    year: 2018,
    model: "Malibu",
    enginePower: 160,
    mileage: 30000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Nissan",
    price: 23000,
    year: 2020,
    model: "Altima",
    enginePower: 188,
    mileage: 12000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "BMW",
    price: 40000,
    year: 2021,
    model: "3 Series",
    enginePower: 255,
    mileage: 8000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Mercedes-Benz",
    price: 45000,
    year: 2022,
    model: "C-Class",
    enginePower: 255,
    mileage: 4000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Audi",
    price: 38000,
    year: 2021,
    model: "A4",
    enginePower: 261,
    mileage: 7000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Volkswagen",
    price: 28000,
    year: 2019,
    model: "Passat",
    enginePower: 174,
    mileage: 25000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Hyundai",
    price: 21000,
    year: 2018,
    model: "Sonata",
    enginePower: 185,
    mileage: 35000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Kia",
    price: 22000,
    year: 2019,
    model: "Optima",
    enginePower: 185,
    mileage: 20000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Mazda",
    price: 24000,
    year: 2020,
    model: "Mazda6",
    enginePower: 187,
    mileage: 15000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Subaru",
    price: 26000,
    year: 2021,
    model: "Legacy",
    enginePower: 182,
    mileage: 10000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Tesla",
    price: 50000,
    year: 2022,
    model: "Model 3",
    enginePower: 283,
    mileage: 3000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Volvo",
    price: 35000,
    year: 2020,
    model: "S60",
    enginePower: 250,
    mileage: 12000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Jaguar",
    price: 45000,
    year: 2021,
    model: "XE",
    enginePower: 296,
    mileage: 6000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Lexus",
    price: 42000,
    year: 2019,
    model: "IS",
    enginePower: 241,
    mileage: 18000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Infiniti",
    price: 43000,
    year: 2020,
    model: "Q50",
    enginePower: 300,
    mileage: 12000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Acura",
    price: 35000,
    year: 2019,
    model: "TLX",
    enginePower: 206,
    mileage: 20000,
    photo: "https://picsum.photos/250/100",
  },
  {
    brand: "Cadillac",
    price: 48000,
    year: 2021,
    model: "CT5",
    enginePower: 237,
    mileage: 8000,
    photo: "https://picsum.photos/250/100",
  },
];

function createCarCard(car) {
  const carWindow = document.createElement("div");
  carWindow.classList.add("carWindow");

  const carWinImg = document.createElement("div");
  carWinImg.classList.add("carWinImg");

  const carImage = document.createElement("img");
  carImage.src = car.photo;
  carImage.alt = `${car.brand} $`;

  const carWinDes = document.createElement("div");
  carWinDes.classList.add("carWinDes");

  const brandInfo = document.createElement("div");
  brandInfo.classList.add("CarWinDesInf");
  brandInfo.textContent = `Brand: ${car.brand}`;

  const priceInfo = document.createElement("div");
  priceInfo.classList.add("CarWinDesInf");
  priceInfo.textContent = `Price: ${Number(car.price)}`;

  const yearInfo = document.createElement("div");
  yearInfo.classList.add("CarWinDesInf");
  yearInfo.textContent = `Year: ${car.year}`;

  const modelInfo = document.createElement("div");
  modelInfo.classList.add("CarWinDesInf");
  modelInfo.textContent = `Model: ${car.model}`;

  const enginePowerInfo = document.createElement("div");
  enginePowerInfo.classList.add("CarWinDesInf");
  enginePowerInfo.textContent = `Engine Power: ${car.enginePower} HP`;

  const mileageInfo = document.createElement("div");
  mileageInfo.classList.add("CarWinDesInf");
  mileageInfo.textContent = `Mileage: ${car.mileage} miles`;

  carWinDes.appendChild(brandInfo);
  carWinDes.appendChild(priceInfo);
  carWinDes.appendChild(yearInfo);
  carWinDes.appendChild(modelInfo);
  carWinDes.appendChild(enginePowerInfo);
  carWinDes.appendChild(mileageInfo);

  carWindow.appendChild(carImage);
  carWindow.appendChild(carWinImg);
  carWindow.appendChild(carWinDes);

  return carWindow;
}

document.addEventListener("DOMContentLoaded", () => {
  const enlargedObject = document.querySelector(".carWindowBig");
  const carInfoContainer = document.querySelector(".carWinBigConSumCar");
  let accessoryCheckboxes;

  function closeEnlargedObject() {
    enlargedObject.style.display = "none";
  }

  const closeButton = document.getElementById("closeBtn");
  closeButton.addEventListener("click", closeEnlargedObject);

  const shopScreen = document.querySelector(".shopScreen");

  cars.forEach((car) => {
    const carWindow = createCarCard(car);
    shopScreen.appendChild(carWindow);
  });

  const carWindows = document.querySelectorAll(".carWindow");
  carWindows.forEach((carWindow) => {
    carWindow.addEventListener("click", () => {
      enlargedObject.style.display = "block";
      const carInfo = carWindow.querySelector(".carWinDes").innerHTML;
      carInfoContainer.innerHTML = carInfo;

      accessoryCheckboxes = document.querySelectorAll(".checkboxOption");
      accessoryCheckboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    });
  });

  const submitButton = document.querySelector(".submitButton");
  submitButton.addEventListener("click", () => {
    const totalCostElement = document.querySelector(".totalCost");
    const totalCost = parseFloat(totalCostElement.textContent.split(": ")[1]);

    const radioButtonsDiv = document.querySelector(".radioButtonsDiv");
    const radioButtons = document.querySelectorAll("input[name='info3']");
    let chosenOption;

    radioButtons.forEach((radio) => {
      if (radio.checked) {
        chosenOption = radio.value;
      }
    });

    const nameInput = document.getElementById("info1");
    const surnameInput = document.getElementById("info2");
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const dateInput = document.querySelector(".dateInput");
    const chosenDate = dateInput.value.trim();

    let isValid = true;
    if (!chosenOption) {
      highlightError(radioButtonsDiv);
      isValid = false;
    }
    if (!name.match(/^[a-zA-Z]+$/)) {
      highlightError(nameInput);
      isValid = false;
    }
    if (!surname.match(/^[a-zA-Z]+$/)) {
      highlightError(surnameInput);
      isValid = false;
    }

    if (!chosenDate) {
      highlightError(dateContainer);
      isValid = false;
    }

    if (isValid) {
      const chosenAccessories = [];
      accessoryCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          chosenAccessories.push(checkbox.value);
        }
      });

      const formData = {
        chosenOption,
        name,
        surname,
        chosenDate,
        chosenAccessories,
      };
      localStorage.setItem("formData", JSON.stringify(formData));

      document
        .querySelectorAll('input[type="text"]')
        .forEach((input) => (input.value = ""));
      document
        .querySelectorAll('input[type="radio"]')
        .forEach((input) => (input.checked = false));
      document
        .querySelectorAll(".selected-date")
        .forEach((selectedDate) =>
          selectedDate.classList.remove("selected-date")
        );
      accessoryCheckboxes.forEach((checkbox) => (checkbox.checked = false));

      closeEnlargedObject();

      window.location.href = "confirmation.html";
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));

    if (savedFormData) {
      const nameInput = document.getElementById("info1");
      const surnameInput = document.getElementById("info2");
      const dateInput = document.querySelector(".dateInput");

      nameInput.value = savedFormData.name || "";
      surnameInput.value = savedFormData.surname || "";
      dateInput.value = savedFormData.chosenDate || "";

      const radioButtons = document.querySelectorAll("input[name='info3']");
      radioButtons.forEach((radio) => {
        if (radio.value === savedFormData.chosenOption) {
          radio.checked = true;
        }
      });

      const accessoryCheckboxes = document.querySelectorAll(".checkboxOption");
      accessoryCheckboxes.forEach((checkbox) => {
        if (savedFormData.chosenAccessories.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });
    }
  });
  const formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    const nameInput = document.getElementById("info1");
    const surnameInput = document.getElementById("info2");
    const dateInput = document.querySelector(".dateInput");
    const radioButtons = document.querySelectorAll("input[name='info3']");
    const accessoryCheckboxes = document.querySelectorAll(".checkboxOption");

    if (formData.name) nameInput.value = formData.name;
    if (formData.surname) surnameInput.value = formData.surname;
    if (formData.chosenDate) dateInput.value = formData.chosenDate;
    if (formData.chosenOption) {
      radioButtons.forEach((radio) => {
        if (radio.value === formData.chosenOption) radio.checked = true;
      });
    }
    if (formData.chosenAccessories) {
      accessoryCheckboxes.forEach((checkbox) => {
        if (formData.chosenAccessories.includes(checkbox.value))
          checkbox.checked = true;
      });
    }
  }
  function initializeGifPlayer() {
    const gifs = [
      "../Media/VideoHedearNumer1.gif",
      "../Media/VideoHedearNumer2.gif",
      "../Media/VideoHedearNumer3.gif",
      "../Media/VideoHedearNumer4.gif",
    ];

    const gifDurations = [2000, 2300, 1200, 1900];

    let currentGifIndex = 0;
    const gifElement = document.getElementById("gifPlayer");

    const playNextGif = () => {
      setTimeout(() => {
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
        gifElement.src = gifs[currentGifIndex];
      }, gifDurations[currentGifIndex]);
    };

    gifElement.addEventListener("load", playNextGif);

    gifElement.src = gifs[currentGifIndex];
  }

  initializeGifPlayer();

  const scrollToTopBtn = document.querySelector(".btn");

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

function highlightError(inputElement) {
  inputElement.classList.add("input-error");
  setTimeout(() => {
    inputElement.classList.remove("input-error");
  }, 5000);
}

function setDateAttributes() {
  const today = new Date();
  const forteenDaysFromToday = new Date();
  forteenDaysFromToday.setDate(today.getDate() + 14);

  const todayStr = today.toISOString().split("T")[0];
  const twoWeeksStr = forteenDaysFromToday.toISOString().split("T")[0];

  const dateInput = document.querySelector(".dateInput");
  dateInput.min = todayStr;
  dateInput.value = twoWeeksStr;
}

window.onload = setDateAttributes;

function updateTotalCost() {
  const carInfoContainer = document.querySelector(".carWinBigConSumCar");
  const accessoryCheckboxes = document.querySelectorAll(".checkboxOption");

  const carInfoElement = carInfoContainer.querySelector(
    ".CarWinDesInf:nth-child(2)"
  );
  const carPriceText = carInfoElement
    ? carInfoElement.textContent.split(": ")[1]
    : null;
  const carPrice = carPriceText ? parseFloat(carPriceText) : NaN;

  let totalAccessoryCost = isNaN(carPrice) ? "Pick an accessory" : carPrice;

  accessoryCheckboxes.forEach((cb) => {
    if (cb.checked && !isNaN(carPrice)) {
      totalAccessoryCost += carPrice * (parseInt(cb.dataset.percent) / 100);
    }
  });

  const totalCostElement = document.querySelector(".totalCost");
  totalCostElement.textContent = isNaN(totalAccessoryCost)
    ? "Pick an accessory"
    : `Total Cost: ${totalAccessoryCost}`;
}

const accessoryCheckboxes = document.querySelectorAll(".checkboxOption");
accessoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalCost);
});

document.addEventListener("DOMContentLoaded", updateTotalCost);
