/*
import {useState, useEffect} from 'react';
import API from '../API';

export const useActorFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async() => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorId);
/*        const credits = await API.fetchCredits(actorId);
        // Get only directors
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );
*/
/*
        setState({
          ...actor, 
          actors: credits.cast
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchActor();
  }, [actorId]);
  return { state, loading, error };
};
*/