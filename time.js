function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const year = now.getFullYear()
    
    // Format time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}`;
    const formattedYear = ` ${year}`
    
    // Display time
    document.getElementById("time").textContent = formattedTime;
    document.getElementById("year").textContent = formattedYear;
  }
  
  // Call `updateTime` every second
  setInterval(updateTime, 1000);
  
  // Initialize time immediately
  updateTime();
  