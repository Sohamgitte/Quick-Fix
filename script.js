const app = document.getElementById("app");

let currentState = "home";
let customerData = null;
let workerData = null;

function render() {
  if (!app) return;

  switch (currentState) {
    case "customer-form":
      app.innerHTML = `
        <h2>Customer Booking</h2>
        <input id="custName" placeholder="Your Name" /><br/><br/>
        <input id="custService" placeholder="Service Needed" /><br/><br/>
        <button onclick="submitCustomer()">Submit</button>
        <button onclick="goHome()">Back</button>
      `;
      break;

    case "worker-form":
      app.innerHTML = `
        <h2>Worker Registration</h2>
        <input id="workerName" placeholder="Your Name" /><br/><br/>
        <input id="workerSkill" placeholder="Your Skill" /><br/><br/>
        <button onclick="submitWorker()">Submit</button>
        <button onclick="goHome()">Back</button>
      `;
      break;

    case "customer-dashboard":
      app.innerHTML = `
        <h2>Hello, ${customerData.name}</h2>
        <p>You booked: ${customerData.service}</p>
        <button onclick="goHome()">Back to Home</button>
      `;
      break;

    case "worker-dashboard":
      app.innerHTML = `
        <h2>Welcome, ${workerData.name}</h2>
        <p>Skill: ${workerData.skill}</p>
        <button onclick="goHome()">Back to Home</button>
      `;
      break;

    default:
      app.innerHTML = `
        <h1>Service Booking App</h1>
        <p>Select your role:</p>
        <button onclick="setRole('customer')">Customer</button>
        <button onclick="setRole('worker')">Worker</button>
      `;
  }
}

function setRole(role) {
  currentState = role === "customer" ? "customer-form" : "worker-form";
  render();
}

function submitCustomer() {
  const name = document.getElementById("custName").value;
  const service = document.getElementById("custService").value;

  if (name && service) {
    customerData = { name, service };
    currentState = "customer-dashboard";
    render();
  } else {
    alert("Please fill all fields");
  }
}

function submitWorker() {
  const name = document.getElementById("workerName").value;
  const skill = document.getElementById("workerSkill").value;

  if (name && skill) {
    workerData = { name, skill };
    currentState = "worker-dashboard";
    render();
  } else {
    alert("Please fill all fields");
  }
}

function goHome() {
  currentState = "home";
  customerData = null;
  workerData = null;
  render();
}

// Initial render
render();
