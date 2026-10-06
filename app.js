/**
 * OWL CAFÉ LUCKNOW - JAVASCRIPT APPLICATION LOGIC
 * Gomti Nagar, Lucknow | Open 24/7 Till 5 AM
 */

// --- 1. MENU DATA STORE ---
const MENU_ITEMS = [
  // Pastas & Italian
  {
    id: 'pasta-white',
    name: 'White Sauce Penne Pasta',
    category: 'pasta',
    price: 280,
    diet: 'veg',
    tag: 'Bestseller ⭐',
    spice: 'Mild Creamy',
    img: 'assets/food.jpg',
    desc: 'Al dente penne bathed in rich velvety white cream, sautéed sweet bell peppers, corn, fresh herbs, and aged parmesan.'
  },
  {
    id: 'pasta-creamy-chilli',
    name: 'Creamy Penne with Chillies',
    category: 'pasta',
    price: 310,
    diet: 'veg',
    tag: "Guest Favorite 🔥",
    spice: 'Medium Spicy',
    img: 'assets/food.jpg',
    desc: 'Signature fusion pasta tossed in spicy garlic butter, bird-eye chili flakes, roasted peppers, and rich creamy cheese sauce.'
  },
  {
    id: 'pasta-bolognese',
    name: 'Spaghetti Bolognese Pasta',
    category: 'pasta',
    price: 360,
    diet: 'nonveg',
    tag: "Chef's Special",
    spice: 'Savory Herb',
    img: 'assets/food.jpg',
    desc: 'Classic Italian slow-cooked minced chicken & herb ragù spooned over steaming delicate strands of spaghetti.'
  },

  // Sizzling Starters
  {
    id: 'starter-lollipop',
    name: 'Crispy Chicken Lollipop',
    category: 'starters',
    price: 340,
    diet: 'nonveg',
    tag: 'Must Try 🔥',
    spice: 'Crispy & Spicy',
    img: 'assets/food.jpg',
    desc: 'Frenched chicken drumettes coated in a spiced batter, fried till golden crunch, served with spicy Schezwan dip.'
  },
  {
    id: 'starter-kabab',
    name: 'Hara Bhara Kabab',
    category: 'starters',
    price: 240,
    diet: 'veg',
    tag: 'Healthy Delight',
    spice: 'Mild Aromatic',
    img: 'assets/food.jpg',
    desc: 'Nutritious pan-seared patties of fresh spinach, green peas, mashed potatoes, and Indian spices, topped with roasted cashew.'
  },
  {
    id: 'starter-french-toast',
    name: 'Classic French Toast',
    category: 'starters',
    price: 210,
    diet: 'veg',
    tag: 'All-Day Breakfast',
    spice: 'Sweet & Cinnamon',
    img: 'assets/coffee.jpg',
    desc: 'Fluffy golden brioche bread dipped in rich vanilla custard, pan-toasted with cinnamon butter, drizzled with maple syrup.'
  },

  // Chinese & Platters
  {
    id: 'chinese-platter',
    name: 'Grand Chinese Platter',
    category: 'chinese',
    price: 490,
    diet: 'veg',
    tag: 'Ultimate Value ⭐',
    spice: 'Medium Spicy',
    img: 'assets/food.jpg',
    desc: 'A loaded platter featuring Veg Manchurian gravy, Hakka Noodles, Fried Rice, Crispy Spring Rolls, and Kimchi salad.'
  },
  {
    id: 'chinese-noodles',
    name: 'Vegetable Hakka Noodles',
    category: 'chinese',
    price: 220,
    diet: 'veg',
    tag: 'Popular',
    spice: 'Mild Wok Tossed',
    img: 'assets/food.jpg',
    desc: 'Wok-tossed noodles with crunchy shredded cabbage, capsicum, carrots, scallions, and light soya sauce.'
  },
  {
    id: 'chinese-masala-noodles',
    name: 'Midnight Masala Noodles',
    category: 'chinese',
    price: 240,
    diet: 'veg',
    tag: 'Late-Night Crave',
    spice: 'Spicy Tangy',
    img: 'assets/food.jpg',
    desc: 'Street-style spicy masala noodles with green chilies, coriander, onion, and signature desi street spices.'
  },
  {
    id: 'chinese-manchurian-rice',
    name: 'Veg Manchurian & Fried Rice Combo',
    category: 'chinese',
    price: 320,
    diet: 'veg',
    tag: 'Combo Special',
    spice: 'Savory & Tangy',
    img: 'assets/food.jpg',
    desc: 'Juicy vegetable dumpling balls in thick savory garlic-ginger soya gravy alongside aromatic basmati fried rice.'
  },
  {
    id: 'soup-thukpa',
    name: 'Steaming Himalayan Thukpa',
    category: 'chinese',
    price: 260,
    diet: 'veg',
    tag: 'Winter & Night Special',
    spice: 'Warm Broth',
    img: 'assets/food.jpg',
    desc: 'Hearty Tibetan style noodle soup loaded with seasonal vegetables, ginger, garlic, cilantro, and healing aromatic broth.'
  },
  {
    id: 'soup-hot-sour',
    name: 'Hot & Sour Soup',
    category: 'chinese',
    price: 180,
    diet: 'veg',
    tag: 'Comfort Bowl',
    spice: 'Spicy & Sour',
    img: 'assets/food.jpg',
    desc: 'Traditional spicy and tangy vegetable broth with shredded mushrooms, bamboo shoots, and crunchy veggies.'
  },

  // Coffees & Shakes
  {
    id: 'coffee-artisan-latte',
    name: 'Artisan Owl Foam Latte',
    category: 'coffee',
    price: 220,
    diet: 'veg',
    tag: 'Signature Art 🦉',
    spice: 'Rich & Velvety',
    img: 'assets/coffee.jpg',
    desc: 'Expertly pulled espresso shot with steamed micro-foam milk featuring our signature handcrafted Owl latte art.'
  },
  {
    id: 'shake-oreo',
    name: 'Thick Midnight Oreo Shake',
    category: 'coffee',
    price: 240,
    diet: 'veg',
    tag: 'Sweet Bestseller ⭐',
    spice: 'Decadent Cold',
    img: 'assets/coffee.jpg',
    desc: 'Crushed crunchy Oreo biscuits blended with rich Belgian chocolate ice cream, whole milk, and topped with chocolate drizzle.'
  },
  {
    id: 'coffee-cold-brew',
    name: 'Nitro Cold Brew Coffee',
    category: 'coffee',
    price: 210,
    diet: 'veg',
    tag: 'Caffeine Kick',
    spice: 'Smooth & Bold',
    img: 'assets/coffee.jpg',
    desc: 'Single-origin Arabica beans steeped cold for 18 hours for an ultra-smooth, naturally sweet, low-acidity coffee punch.'
  },
  {
    id: 'coffee-hazelnut-frappe',
    name: 'Hazelnut Iced Frappe',
    category: 'coffee',
    price: 250,
    diet: 'veg',
    tag: 'Chilled Delight',
    spice: 'Nutty & Creamy',
    img: 'assets/coffee.jpg',
    desc: 'Double espresso blended with roasted hazelnut syrup, cream, crushed ice, and whipped cream topping.'
  },

  // Indian Mains
  {
    id: 'main-paneer-tikka-masala',
    name: 'Hara Bhara Paneer Tikka Masala',
    category: 'mains',
    price: 360,
    diet: 'veg',
    tag: 'Royal Dinner',
    spice: 'Rich Gravy',
    img: 'assets/food.jpg',
    desc: 'Char-grilled cottage cheese cubes simmered in a luscious tomato-cashew and spinach green herb gravy.'
  },
  {
    id: 'main-butter-chicken',
    name: 'Delhi Style Butter Chicken',
    category: 'mains',
    price: 420,
    diet: 'nonveg',
    tag: 'Crowd Pleaser',
    spice: 'Velvety Mild',
    img: 'assets/food.jpg',
    desc: 'Tandoori roasted chicken pieces slow-cooked in velvety makhani gravy infused with fenugreek and pure butter.'
  },
  {
    id: 'main-burger-monster',
    name: 'The Owl Monster Burger',
    category: 'mains',
    price: 290,
    diet: 'veg',
    tag: 'Giant Bite',
    spice: 'Cheesy & Crispy',
    img: 'assets/food.jpg',
    desc: 'Double-decker crisp patty layered with melted cheddar cheese, caramelised onions, fresh jalapeños, and house spicy mayo.'
  }
];

// --- 2. APPLICATION STATE ---
let tray = []; // Array of { item, qty }

// --- 3. DOM ELEMENTS ---
const menuGrid = document.getElementById('menu-grid');
const menuTabs = document.querySelectorAll('.menu-tab');
const trayDrawer = document.getElementById('tray-drawer');
const trayBackdrop = document.getElementById('tray-backdrop');
const openTrayBtn = document.getElementById('open-tray-btn');
const closeTrayBtn = document.getElementById('close-tray-btn');
const viewOrderTrayBtn = document.getElementById('view-order-tray-btn');
const trayItemsContainer = document.getElementById('tray-items-container');
const trayCountEl = document.getElementById('tray-count');
const trayCountInlineEl = document.querySelector('.tray-count-inline');
const traySubtotalEl = document.getElementById('tray-subtotal');
const trayTotalEl = document.getElementById('tray-total');
const trayWhatsappBtn = document.getElementById('tray-whatsapp-btn');
const trayBookBtn = document.getElementById('tray-book-btn');

const bookingForm = document.getElementById('booking-form');
const confirmationModal = document.getElementById('confirmation-modal');
const modalSummary = document.getElementById('modal-summary');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalWhatsappLink = document.getElementById('modal-whatsapp-link');

const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// --- 4. RENDER MENU ITEMS ---
function renderMenu(category = 'all') {
  if (!menuGrid) return;
  menuGrid.innerHTML = '';

  const filteredItems = category === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-item-card';

    const isInTray = tray.some(t => t.item.id === item.id);

    card.innerHTML = `
      <div class="menu-item-img-wrap">
        <img src="${item.img}" alt="${item.name}" class="menu-item-img" loading="lazy">
        <span class="menu-diet-badge ${item.diet === 'veg' ? 'diet-veg' : 'diet-nonveg'}">
          <i class="fa-solid fa-circle"></i> ${item.diet}
        </span>
        ${item.tag ? `<span class="menu-tag-badge">${item.tag}</span>` : ''}
      </div>
      <div class="menu-item-content">
        <div class="menu-header-row">
          <h3 class="menu-item-title">${item.name}</h3>
          <span class="menu-item-price">₹${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-footer-row">
          <span class="spice-rating"><i class="fa-solid fa-pepper-hot"></i> ${item.spice}</span>
          <button class="btn-add-tray ${isInTray ? 'added' : ''}" data-id="${item.id}">
            <i class="fa-solid ${isInTray ? 'fa-check' : 'fa-plus'}"></i>
            <span>${isInTray ? 'In Tray' : 'Add to Tray'}</span>
          </button>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });

  // Attach Add-to-Tray listeners
  document.querySelectorAll('.btn-add-tray').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = e.currentTarget.getAttribute('data-id');
      addToTray(itemId);
    });
  });
}

// --- 5. TRAY LOGIC ---
function addToTray(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = tray.find(t => t.item.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    tray.push({ item, qty: 1 });
  }

  updateTrayUI();
  toggleTrayDrawer(true);
}

function removeFromTray(itemId) {
  tray = tray.filter(t => t.item.id !== itemId);
  updateTrayUI();
}

function updateItemQty(itemId, delta) {
  const existing = tray.find(t => t.item.id === itemId);
  if (!existing) return;

  existing.qty += delta;
  if (existing.qty <= 0) {
    removeFromTray(itemId);
  } else {
    updateTrayUI();
  }
}

function updateTrayUI() {
  // Calculate counts & total
  const totalCount = tray.reduce((acc, curr) => acc + curr.qty, 0);
  const totalPrice = tray.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0);

  if (trayCountEl) trayCountEl.textContent = totalCount;
  if (trayCountInlineEl) trayCountInlineEl.textContent = totalCount;
  if (traySubtotalEl) traySubtotalEl.textContent = `₹${totalPrice}`;
  if (trayTotalEl) trayTotalEl.textContent = `₹${totalPrice}`;

  // Re-render tray body
  if (!trayItemsContainer) return;

  if (tray.length === 0) {
    trayItemsContainer.innerHTML = `
      <div class="empty-tray">
        <div class="empty-tray-icon">🦉</div>
        <h4>Your tray is empty</h4>
        <p>Explore the menu and add items to customize your order or calculate your bill.</p>
      </div>
    `;
  } else {
    trayItemsContainer.innerHTML = '';
    tray.forEach(({ item, qty }) => {
      const row = document.createElement('div');
      row.className = 'tray-item';
      row.innerHTML = `
        <div class="tray-item-info">
          <h4>${item.name}</h4>
          <span>₹${item.price} × ${qty} = ₹${item.price * qty}</span>
        </div>
        <div class="tray-item-qty">
          <button class="qty-btn" data-action="minus" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" data-action="plus" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
        </div>
      `;
      trayItemsContainer.appendChild(row);
    });

    // Attach qty listeners
    trayItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const action = e.currentTarget.getAttribute('data-action');
        updateItemQty(id, action === 'plus' ? 1 : -1);
      });
    });
  }

  // Update button states on menu cards
  document.querySelectorAll('.btn-add-tray').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const isInTray = tray.some(t => t.item.id === id);
    if (isInTray) {
      btn.classList.add('added');
      btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>In Tray</span>`;
    } else {
      btn.classList.remove('added');
      btn.innerHTML = `<i class="fa-solid fa-plus"></i> <span>Add to Tray</span>`;
    }
  });
}

function toggleTrayDrawer(isOpen) {
  if (!trayDrawer || !trayBackdrop) return;
  if (isOpen) {
    trayDrawer.classList.add('active');
    trayBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    trayDrawer.classList.remove('active');
    trayBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// WhatsApp Order Composer
function buildWhatsAppOrderLink() {
  if (tray.length === 0) {
    return `https://wa.me/918400000042?text=Hello%20Owl%20Cafe,%20I%20would%20like%20to%20place%20an%20order%20or%20reserve%20a%20table`;
  }

  let text = `*🌟 New Order Request - Owl Café Lucknow*\n\n`;
  tray.forEach(({ item, qty }) => {
    text += `• ${item.name} (${item.diet.toUpperCase()}) x ${qty} = ₹${item.price * qty}\n`;
  });

  const total = tray.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0);
  text += `\n*Estimated Total:* ₹${total}\n`;
  text += `📍 *Location:* Owl Cafe, Vikaskhand 5, Gomti Nagar, Lucknow\n`;
  text += `Please confirm my order availability & prep time!`;

  return `https://wa.me/918400000042?text=${encodeURIComponent(text)}`;
}

// --- 6. EVENT LISTENERS SETUP ---
document.addEventListener('DOMContentLoaded', () => {
  // Set default date picker to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    dateInput.min = today;
  }

  // Initial menu render
  renderMenu('all');

  // Filter Tabs
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      renderMenu(category);
    });
  });

  // Tray Drawer Open/Close
  if (openTrayBtn) openTrayBtn.addEventListener('click', () => toggleTrayDrawer(true));
  if (closeTrayBtn) closeTrayBtn.addEventListener('click', () => toggleTrayDrawer(false));
  if (trayBackdrop) trayBackdrop.addEventListener('click', () => toggleTrayDrawer(false));
  if (viewOrderTrayBtn) viewOrderTrayBtn.addEventListener('click', () => toggleTrayDrawer(true));

  // Tray WhatsApp Button
  if (trayWhatsappBtn) {
    trayWhatsappBtn.addEventListener('click', () => {
      const link = buildWhatsAppOrderLink();
      window.open(link, '_blank');
    });
  }

  // Tray "Book Table with Menu"
  if (trayBookBtn) {
    trayBookBtn.addEventListener('click', () => {
      toggleTrayDrawer(false);
      const resSection = document.getElementById('reservation');
      if (resSection) {
        resSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Active Navbar on Scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (header) {
      if (window.scrollY > 40) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  });

  // Booking Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('res-name').value;
      const phone = document.getElementById('res-phone').value;
      const date = document.getElementById('res-date').value;
      const time = document.getElementById('res-time').value;
      const guests = document.getElementById('res-guests').value;
      const seating = document.getElementById('res-seating').value;
      const notes = document.getElementById('res-notes').value || 'None';

      // Build summary for modal
      modalSummary.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time Slot:</strong> ${time}</p>
          <p><strong>Guests:</strong> ${guests}</p>
          <p><strong>Seating:</strong> ${seating}</p>
        </div>
        ${notes !== 'None' ? `<p style="margin-top:8px;"><strong>Notes:</strong> ${notes}</p>` : ''}
        ${tray.length > 0 ? `<p style="margin-top:8px; color:#fbbf24;"><strong>Pre-selected Food Items:</strong> ${tray.length} items (Total: ₹${tray.reduce((a,c)=>a+c.item.price*c.qty, 0)})</p>` : ''}
      `;

      // Build WhatsApp confirmation message
      let waText = `*🦉 New Table Reservation - Owl Café Lucknow*\n\n`;
      waText += `• *Guest Name:* ${name}\n`;
      waText += `• *Phone:* ${phone}\n`;
      waText += `• *Date:* ${date}\n`;
      waText += `• *Time Slot:* ${time}\n`;
      waText += `• *Party Size:* ${guests}\n`;
      waText += `• *Seating Preference:* ${seating}\n`;
      if (notes !== 'None') waText += `• *Special Notes:* ${notes}\n`;

      if (tray.length > 0) {
        waText += `\n*Pre-Selected Menu Items:*\n`;
        tray.forEach(({ item, qty }) => {
          waText += `  - ${item.name} x ${qty}\n`;
        });
      }

      modalWhatsappLink.href = `https://wa.me/918400000042?text=${encodeURIComponent(waText)}`;

      // Show Modal
      confirmationModal.classList.add('active');
    });
  }

  // Modal Close
  if (modalCloseBtn && confirmationModal) {
    modalCloseBtn.addEventListener('click', () => {
      confirmationModal.classList.remove('active');
      bookingForm.reset();
    });
  }
});
