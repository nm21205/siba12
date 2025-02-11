fetch('http://kefship.com/ajax/ajax_index.php', {
    method: 'POST',
    headers: {
      'Accept': 'text/plain, */*; q=0.01',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'Origin': 'http://kefship.com',
      'Referer': 'http://kefship.com/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
    },
    body: 'boardType=%EB%B0%B1%EB%A0%B9%EB%8F%84',
    credentials: 'include'
  })
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.text();
  })
  .then(data => {
    console.log('Response Data:', data);
  })
  .catch(error => {
    console.error('Request Failed:', error);
  });
  
