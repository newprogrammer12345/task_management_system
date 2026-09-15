import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function DashBorad() {
    const params = useParams();
    const location = useLocation();

    let user = location.state.user;
    return (
        <>
            <div className="container p-5">
                <h1>Dashboard for {params.fullname}</h1>

                {user ? (
                    <div className="card p-4 mt-3" style={{ maxWidth: '400px' }}>
                        {/* Display Base64 Profile Image */}
                        {user.profile_pic && (
                            <img
                                src={user.profile_pic}
                                alt="Profile"
                                className="rounded-circle mb-3 mx-auto d-block"
                                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                            />
                        )}

                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Contact:</strong> {user.contact_number}</p>
                    </div>
                ) : (
                    <p className="text-muted mt-3">
                        No extra state data found (e.g. page was refreshed).
                    </p>
                )}
            </div>
        </>
    )
}