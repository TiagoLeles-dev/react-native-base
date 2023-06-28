export default async function fetchPopularMovies() {
  const url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWEyM2I1ZTc2ZmUyNTRkZTVmOGZhMDg1YzIyMDdiNCIsInN1YiI6IjY0NmIzZGVkZDE4NTcyMDE0MDMyMDgzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vXc5Qra4jBhOhFu8mvZ-pKfcj3LgUMnzd0t8mvk7dYw';

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    console.log('fetchPopularMovies request success!');
    const data = await response.json();
    // ... do something with the data ...

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
