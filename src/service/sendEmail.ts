export async function sendEmail() {
    const response = await fetch('/api/sendEmail', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
    if (response.ok) {
      console.log('Email sent:', data);
    } else {
      console.error('Error sending email:', data.error);
    }
  }
  