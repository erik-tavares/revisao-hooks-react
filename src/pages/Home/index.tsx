import Cinema from '../../components/Cinema';
import UseStateHook from '../../components/UseStateHook';
import UseEffectHook from '../../components/UseEffectHook';

export default function Home() {
    const movies = [
        {
            title: 'Thor',
            year: 2022
        },
        {
            title: 'Top Gun',
            year: 2022
        }
    ];
    return (
        <>
            <h1>Home</h1>
            <Cinema movies={movies} />
        </>
    );
};