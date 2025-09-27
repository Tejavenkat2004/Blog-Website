import  { useState } from 'react';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            setError('All fields are required');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });
    
            const data = await response.json();
            if (response.ok) {
                setSuccess('User created successfully!');
                alert('Successfully created')
                window.location.reload()
            } else {
                setError(data.message || 'An error occurred.');
            }
        } catch (err) {
            console.error('Fetch error:', err); // Log the error
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
                Sign Up
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
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
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
                <div>
                    <label style={{
                        marginBottom: '5px',
                        fontWeight: 'bold',
                        color: '#555',
                    }}>
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
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
                    Sign Up
                </button>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h1>Already have an account? <a style={{color:'red'}} href="/sign_in">Sign In</a></h1>
                </div>
            </form>
        </div>
    );
};

export default SignUp;