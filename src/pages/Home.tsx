import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import GoogleIconImg from '../assets/images/google-icon.svg';
import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
    }

    return (
        <div id='page-auth'>
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={LogoImg} alt="Letmeask" />
                    <button className='create-room' onClick={handleCreateRoom}>
                        <img src={GoogleIconImg} alt="Logo da Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala" 
                        />
                        <Button type='submit'>Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}