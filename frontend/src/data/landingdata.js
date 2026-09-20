export const features = [
  {
    no:1,
    title: "AI-Powered Product Detection",
    description:
      "Computer vision automatically detects products placed under the camera using YOLO-based object detection.",
  },
  {no:2,
    title: "Automated Checkout",
    description:
      "Detected products are added to the cart automatically, reducing manual billing and checkout time.",
  },
  {no:3,
    title: "Real-Time Inventory",
    description:
      "Inventory quantities are updated automatically after successful transactions.",
  },
  {no:4,
    title: "Smart Product Tracking",
    description:
      "Object tracking maintains product identity across video frames and helps prevent duplicate counting.",
  },
  {no:5,
    title: "Centralized Dashboard",
    description:
      "Monitor products, inventory, orders, transactions, and detection activity from one dashboard.",
  },
  {no:6,
    title: "Secure Access",
    description:
      "Authentication and role-based access provide controlled access to retail operations.",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Place Products",
    description:
      "Products are placed in the checkout area under the overhead camera.",
  },
  {
    number: "02",
    title: "Detect Products",
    description:
      "The computer vision pipeline detects products from the camera feed.",
  },
  {
    number: "03",
    title: "Track & Identify",
    description:
      "Object tracking maintains product identities and helps avoid duplicate counting.",
  },
  {
    number: "04",
    title: "Generate Bill",
    description:
      "The backend processes detected products, retrieves their details, and calculates the total.",
  },
  {
    number: "05",
    title: "Update Inventory",
    description:
      "After checkout, inventory quantities are automatically updated in the database.",
  },
];

export const aboutStats = [
  {
    value: "AI",
    label: "Computer Vision",
  },
  {
    value: "Real-Time",
    label: "Inventory Updates",
  },
  {
    value: "Smart",
    label: "Checkout",
  },
  {
    value: "Centralized",
    label: "Management",
  },
];

 export const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Products', path: '/products' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Orders', path: '/orders' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Detection Logs', path: '/detect-logs' },
    { name: 'Users', path: '/users' },
    { name: 'Live Checkout', path: '/live-checkout' },
  //   { name: 'Final Checkout', path: '/final-checkout' },
  ];

export const products = [
    {
      id: "P001",
      name: "Coca Cola",
      category: "Beverages",
      price: 40,
      stock: 24,
      status: "In Stock",
    },
    {
      id: "P002",
      name: "Lays Classic",
      category: "Snacks",
      price: 20,
      stock: 8,
      status: "Low Stock",
    },
    {
      id: "P003",
      name: "Dairy Milk",
      category: "Chocolates",
      price: 50,
      stock: 15,
      status: "In Stock",
    },
    {
      id: "P004",
      name: "Amul Milk",
      category: "Dairy",
      price: 32,
      stock: 4,
      status: "Low Stock",
    },
    {
      id: "P005",
      name: "Maggi",
      category: "Instant Food",
      price: 14,
      stock: 0,
      status: "Out of Stock",
    }
  ];

  export const inventory = [
  {
    id: 1,
    product: "Coca Cola",
    sku: "CC-001",
    category: "Beverages",
    stock: 42,
    threshold: 10,
    location: "Shelf A1",
    status: "In Stock",
  },
  {
    id: 2,
    product: "Lays Classic",
    sku: "LC-002",
    category: "Snacks",
    stock: 8,
    threshold: 10,
    location: "Shelf B2",
    status: "Low Stock",
  },
  {
    id: 3,
    product: "Dairy Milk",
    sku: "DM-003",
    category: "Chocolates",
    stock: 0,
    threshold: 5,
    location: "Shelf C1",
    status: "Out of Stock",
  },
  {
    id: 4,
    product: "Amul Milk",
    sku: "AM-004",
    category: "Dairy",
    stock: 25,
    threshold: 8,
    location: "Refrigerator 1",
    status: "In Stock",
  },
  {
    id: 5,
    product: "Maggi",
    sku: "MG-005",
    category: "Instant Food",
    stock: 12,
    threshold: 10,
    location: "Shelf B1",
    status: "In Stock",
  },
];

export const orders = [
  {
    id: "#ORD-1001",
    customer: "Walk-in Customer",
    items: 3,
    total: 245,
    date: "09 Sep 2026, 10:32 AM",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Walk-in Customer",
    items: 5,
    total: 480,
    date: "09 Sep 2026, 10:45 AM",
    status: "Completed",
  },
  {
    id: "#ORD-1003",
    customer: "Walk-in Customer",
    items: 2,
    total: 120,
    date: "09 Sep 2026, 11:10 AM",
    status: "Pending",
  },
  {
    id: "#ORD-1004",
    customer: "Walk-in Customer",
    items: 4,
    total: 365,
    date: "09 Sep 2026, 11:28 AM",
    status: "Completed",
  },
];

export const transactions = [
  {
    id: "#TXN-5001",
    orderId: "#ORD-1001",
    amount: 245,
    method: "UPI",
    date: "09 Sep 2026, 10:32 AM",
    status: "Success",
  },
  {
    id: "#TXN-5002",
    orderId: "#ORD-1002",
    amount: 480,
    method: "Card",
    date: "09 Sep 2026, 10:45 AM",
    status: "Success",
  },
  {
    id: "#TXN-5003",
    orderId: "#ORD-1003",
    amount: 120,
    method: "Cash",
    date: "09 Sep 2026, 11:10 AM",
    status: "Pending",
  },
  {
    id: "#TXN-5004",
    orderId: "#ORD-1004",
    amount: 365,
    method: "UPI",
    date: "09 Sep 2026, 11:28 AM",
    status: "Success",
  },
];

export const detectionLogs = [
  {
    id: "DET-001",
    product: "Coca Cola",
    confidence: "97.8%",
    quantity: 1,
    camera: "Camera 01",
    timestamp: "09 Sep 2026, 10:31 AM",
    status: "Detected",
  },
  {
    id: "DET-002",
    product: "Lays Classic",
    confidence: "95.4%",
    quantity: 2,
    camera: "Camera 01",
    timestamp: "09 Sep 2026, 10:32 AM",
    status: "Detected",
  },
  {
    id: "DET-003",
    product: "Dairy Milk",
    confidence: "92.1%",
    quantity: 1,
    camera: "Camera 02",
    timestamp: "09 Sep 2026, 10:34 AM",
    status: "Detected",
  },
  {
    id: "DET-004",
    product: "Maggi",
    confidence: "89.7%",
    quantity: 1,
    camera: "Camera 01",
    timestamp: "09 Sep 2026, 10:38 AM",
    status: "Detected",
  },
];


export const users = [
  {
    id: 1,
    name: "Arpit Verma",
    email: "arpit@visioncart.com",
    role: "Admin",
    status: "Active",
    joined: "01 Sep 2026",
  },
  {
    id: 2,
    name: "Arsalan Ahmad",
    email: "ahmad@visioncart.com",
    role: "Admin",
    status: "Active",
    joined: "03 Sep 2026",
  },
  {
    id: 3,
    name: "Ananya Singh",
    email: "ananya@visioncart.com",
    role: "Counter Handler",
    status: "Active",
    joined: "04 Sep 2026",
  },
  {
    id: 4,
    name: "Rohit Kumar",
    email: "rohit@visioncart.com",
    role: "Counter Handler",
    status: "Inactive",
    joined: "05 Sep 2026",
  },
];

export const detectedProducts = [
  {
    id: 1,
    name: "Coca Cola",
    sku: "CC-001",
    price: 40,
    confidence: 97.8,
    quantity: 1,
  },
  {
    id: 2,
    name: "Lays Classic",
    sku: "LC-002",
    price: 20,
    confidence: 95.4,
    quantity: 2,
  },
  {
    id: 3,
    name: "Maggi",
    sku: "MG-005",
    price: 30,
    confidence: 89.7,
    quantity: 1,
  },
];