interface HorrorMovie{
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_avergae: number;
}

const fetchHorrorMovies = async (): Promise<HorrorMovie[]> => {
    const response = await fetch('YOUR_API_URL_HERE');
    const data = await response.json();
    return data.resultes
}