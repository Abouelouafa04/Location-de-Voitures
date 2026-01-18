import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="contact-card">
      <h3>Détails de Contact</h3>

      <ul>
        <li>
          <Phone size={20} />
          <div>
            <strong>Numéro de contact</strong>
            <p>+212 (05) 22 63 44</p>
          </div>
        </li>

        <li>
          <MapPin size={20} />
          <div>
            <strong>Adresse</strong>
            <p>Siège : Internationale nationale n°4207 / 20</p>
          </div>
        </li>

        <li>
          <Mail size={20} />
          <div>
            <strong>Courriel</strong>
            <a href="mailto:contact@ofppt.ma">contact@ofppt.ma</a>
          </div>
        </li>
      </ul>
    </div>
  );
}
