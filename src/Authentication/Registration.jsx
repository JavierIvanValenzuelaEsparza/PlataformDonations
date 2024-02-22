import React, { useState } from 'react';
import '../Assets/modal.css'
const RegistrationForm = () => {
  const [stage, setStage] = useState(1);
  const [userType, setUserType] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    organizationName: '',
    organizationType: '',
  });

  const handleUserTypeSelect = (selectedType) => {
    setUserType(selectedType);
    setStage(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la información enviándola a un servidor, almacenándola en el estado global, etc.
    console.log(userData);
    // Reiniciar el formulario después de enviar la información si es necesario
    setStage(1);
    setUserType('');
    setUserData({
      username: '',
      email: '',
      organizationName: '',
      organizationType: '',
    });
  };

  return (
    <div>
      {stage === 1 ? (
        // Etapa 1: Selección de tipo de usuario
        <div>
          <h2>Selecciona tu tipo de usuario:</h2>
          <button onClick={() => handleUserTypeSelect('user')}>Usuario</button>
          <button onClick={() => handleUserTypeSelect('organization')}>Organización</button>
        </div>
      ) : (
        // Etapa 2: Ingreso de información según el tipo de usuario
        <form onSubmit={handleSubmit}>
          <h2>{userType === 'user' ? 'Registro de Usuario' : 'Registro de Organización'}</h2>
          <label>
            Username:
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
          </label>
          {userType === 'organization' && (
            <div>
              <label>
                Nombre de la Organización:
                <input type="text" name="organizationName" value={userData.organizationName} onChange={handleInputChange} />
              </label>
              <label>
                Tipo de Organización:
                <input type="text" name="organizationType" value={userData.organizationType} onChange={handleInputChange} />
              </label>
            </div>
          )}
          <button type="submit">Registrarse</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
