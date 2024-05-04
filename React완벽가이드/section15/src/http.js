export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error('failed to fetch places');
    throw error;
  }

  return resData.places;
}
export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();

  if (!response.ok) {
    const error = new Error('failed to fetch user places');
    throw error;
  }

  return resData.places;
}
export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }), //자바스크립트 배열은 첨부할 수 없기에  JSON형식으로 바꾸어야함
    header: {
      'Content-Type': 'application/json',
    },
  });

  const resData = await response.json();
  if (!response.ok) {
    throw new Error('failed to update user data.');
  }
  return resData.message;
}
//utility function
