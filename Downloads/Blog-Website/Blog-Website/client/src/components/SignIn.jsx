import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (email === '' || password === '') {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess('Sign in successful!');
                const { email } = data;
                localStorage.setItem('user', JSON.stringify({ email}));
                navigate('/admin_home');
            
               
            } else {
                setError(data.message || 'An error occurred.');
            }
        } catch (err) {
            console.error('Fetch error:', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div style={{
            backgroundColor: '#fff',
            padding: '80px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 1.6)',
            maxWidth: '400px',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '120px',
        }}>
            <h2 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#333',
            }}>
                Sign In
            </h2>
            <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div>
                    <label style={{
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#555',
                    }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{
                            padding: '12px',
                            marginBottom: '15px',
                            border: '1px solid #060505',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                    />
                </div>
                <div>
                    <label style={{
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#555',
                    }}>
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        style={{
                            padding: '12px',
                            marginBottom: '15px',
                            border: '1px solid #060505',
                            borderRadius: '4px',
                            fontSize: '16px',
                        }}
                    />
                </div>
                {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
                {success && <p style={{ color: 'green', marginBottom: '15px' }}>{success}</p>}
                <button type="submit" style={{
                    padding: '8px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>
                    Sign In
                </button>
                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    {/* <h1>If You dont  have an account? <a style={{color:'red'}} href="/sign_up">SignUp</a></h1> */}
                </div>
            </form>
        </div>
    );
};

export default SignIn;