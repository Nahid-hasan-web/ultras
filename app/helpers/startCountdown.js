 const startCountdown = (days)=> {
  // Convert days to milliseconds
  let totalTime = days * 24 * 60 * 60 * 1000;

  const interval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(interval);
      console.log("Countdown finished!");
      return;
    }

    // Calculate time parts
    const daysLeft = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((totalTime % (1000 * 60)) / 1000);

    console.log(`${daysLeft}D : ${hoursLeft}H : ${minutesLeft}M : ${secondsLeft}S`);

    // Decrease total time by 1 second
    totalTime -= 1000;
  }, 1000);
}


export default  startCountdown