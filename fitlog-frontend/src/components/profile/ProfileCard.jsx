import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User, Mail, Calendar, Activity, Camera, PenLine } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { updateUserProfile } from '../../store/authSlice';

const ProfileCard = ({ user }) => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birth_date: '',
        current_weight: '',
        avatar: null
    });

    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
                birth_date: user.birth_date || '',
                current_weight: user.current_weight || '',
                avatar: null
            });
            // Construct full URL if avatar_url is present
            // Assuming backend returns local path e.g. /storage/avatars/xxx.jpg
            if (user.avatar_url) {
                setPreviewUrl(`http://localhost:8000${user.avatar_url}`);
            } else {
                setPreviewUrl("https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1767&q=80");
            }
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Optimistic update
            setFormData(prev => ({ ...prev, avatar: file }));
            setPreviewUrl(URL.createObjectURL(file));

            // Instant upload
            const data = new FormData();
            data.append('name', formData.name); // Name is required by backend validation
            data.append('avatar', file);

            // If other fields are filled, we might want to send them too to avoid overwriting with nulls if backend handles that, 
            // but ProfileController::update uses $request->validate which requires 'name'. 
            // It treats others as nullable/optional. So sending name + avatar is safe.
            if (formData.birth_date) data.append('birth_date', formData.birth_date);
            if (formData.current_weight) data.append('current_weight', formData.current_weight);

            try {
                await dispatch(updateUserProfile(data)).unwrap();
            } catch (error) {
                console.error("Failed to upload avatar:", error);
                // Optionally revert preview here if needed
            }
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        // data.append('email', formData.email); // Usually email update requires more check, let's keep it read-only or allow it? Backend validated only name, birth_date, current_weight. AuthController didn't validate email update. Let's send it but backend might ignore it or we should add it if we want email update. 
        // For now, let's skip email update to avoid conflicts or Require password confirmation.
        // Actually ProfileController.php validates name, birth_date, current_weight. It does NOT validate email. So email update won't work unless we add it to validation.
        // Let's stick to name, birth_date, weight, avatar.

        if (formData.birth_date) data.append('birth_date', formData.birth_date);
        if (formData.current_weight) data.append('current_weight', formData.current_weight);
        if (formData.avatar) data.append('avatar', formData.avatar);

        await dispatch(updateUserProfile(data)).unwrap();
        setIsEditing(false);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center h-full">
            <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                        src={previewUrl}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <button
                    type="button"
                    onClick={triggerFileInput}
                    className="absolute bottom-2 right-2 bg-[#10b981] text-white p-2 rounded-full hover:bg-[#059669] transition-colors shadow-md"
                >
                    <Camera size={16} />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>

            <h2 className="text-2xl font-bold text-[#1e293b]">{formData.name}</h2>
            <p className="text-gray-500 mb-8">{formData.email}</p>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <Input
                        label="Nom complet"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        icon={User}
                    />
                    <Input
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        icon={Mail}
                        type="email"
                        disabled // Disable email editing for now
                        className="bg-gray-100 cursor-not-allowed"
                    />
                    <Input
                        label="Date de naissance"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleChange}
                        icon={Calendar}
                        type="date"
                    />
                    <Input
                        label="Poids actuel (kg)"
                        name="current_weight"
                        value={formData.current_weight}
                        onChange={handleChange}
                        icon={Activity}
                        type="number"
                        step="0.1"
                    />
                    <div className="flex gap-3 pt-2">
                        <Button type="button" variant="secondary" onClick={() => setIsEditing(false)} className="w-full">
                            Annuler
                        </Button>
                        <Button type="submit" className="w-full">
                            Enregistrer
                        </Button>
                    </div>
                </form>
            ) : (
                <div className="w-full space-y-4">
                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg text-[#1e293b] shadow-sm">
                                <User size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium">Nom complet</p>
                                <p className="text-[#1e293b] font-medium">{formData.name}</p>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-1.5 rounded-md text-emerald-500">
                            <PenLine size={16} />
                        </div>
                    </div>

                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg text-[#1e293b] shadow-sm">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium">Email</p>
                                <p className="text-[#1e293b] font-medium">{formData.email}</p>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-1.5 rounded-md text-emerald-500">
                            <PenLine size={16} />
                        </div>
                    </div>

                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg text-[#1e293b] shadow-sm">
                                <Calendar size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium">Date de naissance</p>
                                <p className="text-[#1e293b] font-medium">{formData.birth_date || 'Non renseigné'}</p>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-1.5 rounded-md text-emerald-500">
                            <PenLine size={16} />
                        </div>
                    </div>

                    <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setIsEditing(true)}>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white rounded-lg text-[#1e293b] shadow-sm">
                                <Activity size={18} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-medium">Poids actuel</p>
                                <p className="text-[#1e293b] font-medium">{formData.current_weight ? formData.current_weight + ' kg' : 'Non renseigné'}</p>
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-1.5 rounded-md text-emerald-500">
                            <PenLine size={16} />
                        </div>
                    </div>

                    <Button
                        className="w-full mt-6 bg-[#10b981] hover:bg-[#059669]"
                        onClick={() => setIsEditing(true)}
                    >
                        <PenLine size={18} className="mr-2" />
                        Modifier le profil
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProfileCard;
