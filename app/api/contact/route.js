import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('Sending to Google Apps Script:', body);
    
    // Validate the data before sending
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { status: 'error', message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Forward the request to Google Apps Script
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyWiHSw9ctg2MRwO2g4Pjo6EMOUy3_t_tW_vDOKD213lhzxSu50eiery8tV36UAgxgoyA/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    console.log('Google Apps Script response status:', response.status);
    
    const data = await response.json();
    console.log('Google Apps Script response data:', data);
    
    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: data.message || 'Failed to send message' },
        { status: response.status }
      );
    }
    
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { status: 'error', message: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}