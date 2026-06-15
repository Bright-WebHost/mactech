'use client'

import { assetPrefix } from '@/lib/assetPrefix'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagramSquare, FaExternalLinkAlt } from 'react-icons/fa'

const BASE = assetPrefix

export default function NFHAboutSection() {
  return (
    <section id="our-network" className="network-section">
      <div className="container">
        <div className="network-header">
          <div className="header-badge">OUR BRANDS</div>
          <h2 className="header-title">Expanding across hospitality and food services</h2>
          <p className="header-desc">We operate through specialized brands, each delivering quality in their domain.</p>
        </div>

        <div className="subsidiaries-grid">
          <article className="brand-card nfh-card">
            <div className="card-visual">
              <img src={`${BASE}/images/nfh.jpeg`} alt="New Food House logo" className="brand-image" />
              <div className="card-accent"></div>
            </div>
            <div className="card-content">
              <h3 className="brand-name">New Food House</h3>
              <p className="brand-category">Food Services &amp; Catering</p>
              <p className="brand-description">Professional catering and food services supporting businesses and events across Oman.</p>
              <div className="brand-meta">
                <span className="location-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  Barka, Oman
                </span>
                <div className="link-group">
                  <a
                    href="https://maps.app.goo.gl/R11aUQ6vPHU18vby6?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                    aria-label="View location on map"
                  >
                    <FaExternalLinkAlt className="link-icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/newfoodhousebarka/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                    aria-label="Visit Facebook page"
                  >
                    <FaFacebookSquare className="link-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/newfoodhousebarka?igsh=M2V1anlwYnpoN2V2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-item"
                    aria-label="Visit Instagram profile"
                  >
                    <FaInstagramSquare className="link-icon" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="brand-card cilantro-card">
            <div className="card-visual">
              <img src={`${BASE}/images/cilantro.png`} alt="Cilantro restaurant logo" className="brand-image" />
              <div className="card-accent"></div>
            </div>
            <div className="card-content">
              <h3 className="brand-name">Cilantro</h3>
              <p className="brand-category">Hospitality &amp; Dining</p>
              <p className="brand-description">A hospitality-focused dining brand delivering authentic flavors and premium customer experiences.</p>
              <div className="brand-meta">
                <span className="location-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  Muscat, Oman
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .network-section {
          padding: 80px 20px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .network-section::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(135deg, #0f3a5c 0%, #0f3a5c 70%, transparent 100%);
          opacity: 0.08;
          clip-path: polygon(0 100%, 100% 50%, 100% 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .network-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .header-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #e67e22;
          margin-bottom: 20px;
        }

        .header-title {
          font-size: clamp(1.75rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #0f3a5c;
          margin: 0 0 20px 0;
          line-height: 1.2;
        }

        .header-desc {
          font-size: 1.1rem;
          color: #555555;
          margin: 0;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .subsidiaries-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: stretch;
        }

        .brand-card {
          background: white;
          border-radius: 0;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 0;
          box-shadow: 0 4px 20px rgba(15, 58, 92, 0.08);
          transition: all 0.4s ease;
          border-left: 5px solid #e67e22;
        }

        .brand-card:hover {
          box-shadow: 0 8px 40px rgba(15, 58, 92, 0.15);
          transform: translateY(-6px);
        }

        .card-visual {
          position: relative;
          background: linear-gradient(135deg, #0f3a5c 0%, #1a5578 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 280px;
          overflow: hidden;
        }

        .brand-image {
          width: 85%;
          height: 85%;
          object-fit: contain;
          display: block;
          filter: brightness(0.95);
        }

        .card-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: #e67e22;
          opacity: 0.12;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }

        .card-content {
          padding: 48px 45px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
        }

        .brand-name {
          margin: 0 0 10px 0;
          font-size: 2rem;
          font-weight: 700;
          color: #0f3a5c;
        }

        .brand-category {
          margin: 0 0 20px 0;
          font-size: 0.85rem;
          font-weight: 700;
          color: #e67e22;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .brand-description {
          margin: 0 0 32px 0;
          font-size: 1.05rem;
          color: #555555;
          line-height: 1.75;
        }

        .brand-meta {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .location-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.05rem;
          color: #0f3a5c;
          font-weight: 500;
        }

        .meta-icon {
          color: #e67e22;
          font-size: 1.2rem;
        }

        .link-group {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .link-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 4px;
          background: #f0f0f0;
          color: #0f3a5c;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
          border: 1.5px solid transparent;
        }

        .link-item:hover {
          background: #e67e22;
          color: white;
          transform: translateY(-3px);
          border-color: #d56f1d;
        }

        .link-item:focus-visible {
          outline: 2px solid #e67e22;
          outline-offset: 3px;
        }

        .link-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 900px) {
          .brand-card {
            grid-template-columns: 1fr;
          }

          .card-visual {
            min-height: 240px;
          }

          .card-content {
            padding: 40px 36px;
          }
        }

        @media (max-width: 768px) {
          .network-section {
            padding: 60px 16px;
          }

          .network-header {
            margin-bottom: 50px;
          }

          .header-title {
            font-size: 2rem;
          }

          .brand-name {
            font-size: 1.6rem;
          }

          .card-content {
            padding: 32px;
          }

          .subsidiaries-grid {
            gap: 32px;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 1.5rem;
          }

          .header-desc {
            font-size: 1rem;
          }

          .card-content {
            padding: 24px;
          }

          .brand-name {
            font-size: 1.4rem;
          }

          .brand-description {
            font-size: 1rem;
          }

          .link-item {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
