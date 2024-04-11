import { useState } from 'react';

export const PrakrutiAnalyzerPage = () => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: '9999',
                    }}
                >
                    <p>Loading...</p>
                </div>
            )}
            <iframe
                src="https://tripetto.app/run/TIOR5D98J8"
                width="100%"
                height="100%"
                style={{ height: '100%', border: 'none', display: loading ? 'none' : 'block' }}
                onLoad={handleLoad}
            ></iframe>
        </div>
    );
};

export default PrakrutiAnalyzerPage;
