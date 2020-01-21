self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // agar ketika penguna menekan manakan notifikasi akan hilang
  if (!event.action) {
    // Penguna menyentuh area notifikasi diluar action
    console.log("Notifikasi Click");
    return;
  }

  switch (event.action) {
    case 'yes-action':
      console.log("Penguna mengeklik action yes");
      //buka tab baru
      clients.openWindow('https://google.com');
      break;
    case 'no.action':
      console.log('Penguna menekan action no');
      break;
    default:
      console.log(`Action yang ditekan tidak dikenali ${event.action}`);
      break;
  }
});