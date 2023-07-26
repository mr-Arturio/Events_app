//used to handle file paths.
import path from 'path';
//used to read and write files.
import fs from 'fs';

function buildPath() {
  //combines the current working directory with 'data' and 'data.json'
  return path.join(process.cwd(), 'data', 'data.json');
}

//takes the file path as an argument and reads the contents of data.json
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

// default export of the API file
export default function handler(req, res) {
  const { method } = req;

  //The file path to data.json is obtained by calling the buildPath function.
  const filePath = buildPath();
  // data from data.json is extracted by calling the extractData function. 
  //The events_categories and allEvents properties are destructured from the returned data.
  const { events_categories, allEvents } = extractData(filePath);

  //if fail
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  //when form submitted
  if (method === 'POST') {
    //data extracted from the request body.
    const { email, eventId } = req.body;

    //if empty or no @
    if (!email | !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    //mapped over to find the event with the matching eventId
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({ message: 'This email has already been registered' });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    //The allEvents array is updated to include the newly registered email, and the data is written back to the data.json file.
    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }));

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}