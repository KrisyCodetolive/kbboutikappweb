  export const getGreeting = () => {
    const hour = new Date().getHours()
    return hour < 18 ? "Bonjour" : "Bonsoir"
  }