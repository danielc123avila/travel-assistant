export const getPackingSuggestions = (weatherDescription: string, days: number): string[] => {
    const suggestions = ['Ropa cómoda', 'Zapatos adecuados', 'Artículos de aseo'];
  
    if (weatherDescription.includes('rain')) {
      suggestions.push('Un paraguas o impermeable');
    }
    if (weatherDescription.includes('clear')) {
      suggestions.push('Protector solar');
    }
    if (weatherDescription.includes('snow')) {
      suggestions.push('Ropa térmica y botas para nieve');
    }
    if (days > 7) {
      suggestions.push('Ropa adicional para estadías largas');
    }
  
    return suggestions;
  };
  