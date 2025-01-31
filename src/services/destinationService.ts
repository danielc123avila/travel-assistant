export const getDestinationDetails = async (): Promise<string> => {
    // Aquí puedes agregar destinos predefinidos o integrarte con una API futura.
    const destinations = [
      { name: 'París', location: 'Francia', description: 'La ciudad del amor.' },
      { name: 'Tokio', location: 'Japón', description: 'Una metrópolis vibrante.' },
      { name: 'Nueva York', location: 'EE.UU.', description: 'La Gran Manzana.' },
    ];
  
    return destinations.map(d => `${d.name} (${d.location}): ${d.description}`).join('\n');
  };
  