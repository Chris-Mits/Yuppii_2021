const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const userName = document.querySelector('.username');

const testimonials = [
	{
    name: 'Elena M',
    photo: 'images/content/testimonial_users/elena_m.png',
    text: "Είναι υπέροχος χώρος, εκπληκτική εξυπηρέτηση με ευγενεστατο προσωπικό, οι κοπέλες στον παιδότοπο απίστευτες με όλα τα παιδιά η μικρή μου τις αγαπά πολύ. Xάρηκα πολύ γιατί έχει ως γνώμονα να περνούν καλά τα παιδιά και οι γονείς. Ώρα για παιχνίδι!",
  },
	{
    name: 'Όλγα Πολίτη',
    photo: 'images/content/testimonial_users/olga_politi.png',
    text: "Πάρα πολύ καλό Λούνα Παρκ όπου μπορείς να βρείς τα πάντα! Μέχρι και θάλαμο με εικονική πραγματικότητα με καρέκλες που 'φοβούνται' και στρίβουν αναλόγως το θέμα που βλέπεις με τα γυαλιά 3D! Αλογάκια, καρουζέλ, συγκρουόμενα, βαρκούλες, ηλεκτρονικά και ό,τι χρειαστείς θα το βρεις εκεί! Οι τιμές είναι φυσιολογικές.",
  },
  {
    name: 'Petros Kilamenakis',
    photo: 'images/content/testimonial_users/petros_kilamenakis.png',
    text: "Ωραία σχεδιασμένος και φιλικός προς τα παιδιά χώρος! Υπάρχουν δραστηριότητες που σπανίζουν ακόμα και στα μεγάλα αστικά κέντρα! Καταφύγιο για την εκτόνωση των παιδιών! Φιλικό και εξυπηρετικό προσωπικό με προτεραιότητα στην ασφάλεια κατά την διασκέδαση!",
  },
  {
    name: 'Zoe Bah',
    photo: 'images/content/testimonial_users/zoe_bah.png',
    text: "Μεγάλος χώρος με αρκετά παιχνίδια για τα παιδιά,ανάλογα με την ηλικία τους. Έχει μεγάλα φουσκωτά για τα μικρότερα. Οι τιμές φυσιολογικές για Λούνα Παρκ.",
  },
  {
    name: 'Iosif Darousis',
    photo: 'images/content/testimonial_users/iosif_darousis.png',
    text: "Προσιτές τιμές, πολύ εξυπηρετικό προσωπικό και ευχάριστο! Μεγάλη ποικιλία δραστηριοτήτων, το συνιστώ ανεπιφύλακτα!",
  },
  {
    name: 'Stella Daviti',
    photo: 'images/content/testimonial_users/stella_daviti.png',
    text: "Ωραίο πάρκο, για παιδιά κάτω των 10 ετών. Πολύ μεγάλος αριθμός προσωπικού για να είστε ήσυχοι με τα παιδιά σας.",
  },
  {
    name: 'Μ. Παπαγεωργίου',
    photo: 'images/content/testimonial_users/mpampis_papagewrgiou.png',
    text: "Ένα πολύ καλό μέρος για να χαλαρώσεις όσο τα παιδιά σου θα εξαντλούνται..!! Μην σου πω ότι θα μπεις στον πειρασμό να γίνεις και συ παιδί..!!",
  },
  {
    name: 'Kyriakos Xatz',
    photo: 'images/content/testimonial_users/kiriakos_xatz.png',
    text: "Χαρά καί διασκέδαση, πολύ καλό μέρος γιά ξεφάντωμα! Ένας υπέροχος παιδότοπος στην καρδιά της πόλης δίπλα στην θάλασσα!",
  }
]

let idx = 1;

function updateTestimonial() {
  const { name, photo, text } = testimonials[idx];
	userName.innerHTML = name;
	userImage.src = photo;
	testimonial.innerHTML = text;
	
	idx++;
	
	if(idx > testimonials.length - 1) {
		idx = 0;
	}
}

function move() {
  var progressBar = document.querySelector(".custom-progress-bar");
  var width = 0;
  var loadingInterval = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(loadingInterval);
    } 
    else {
      width++;
      progressBar.style.width = width + '%';
    }
  }
}

function progressBarTestimonialsUpdate() {
  move();
  updateTestimonial();
}

window.onload = move();
setInterval(progressBarTestimonialsUpdate, 10000);