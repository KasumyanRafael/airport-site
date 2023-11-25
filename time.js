    // Set interval to update date and time every second
    setInterval(() => {
        // Get current date and time
        const date = new Date();
        
        // Update date and time spans
        document.getElementById('date').innerHTML = date.toLocaleDateString();
        document.getElementById('time').innerHTML = date.toLocaleTimeString();
      }, 1000);