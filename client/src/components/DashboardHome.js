import React from "react";
import "./DashboardHome.css";

const DashboardHome = ({ username, account, totalFiles, blockNumber, setActiveTab }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-card">
        <div className="hero-left">
          <span className="status-badge">ACTIVE HUB: SEPOLIA</span>
          <h1 className="hero-title">KOSMOS Dashboard</h1>
          <p className="hero-desc">
            Securely anchoring your enterprise assets to the immutable Sepolia ledger. 
            You are operating as <strong>{username}</strong> within this protocol.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setActiveTab("drive")}>SECURE NEW ASSET</button>
            <button className="btn-secondary" onClick={() => setActiveTab("drive")}>OPEN DRIVE</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="invite-box">
            <span className="box-label">YOUR PROTOCOL ADDRESS</span>
            <div className="address-code">{account.slice(0, 10)}...</div>
            <p className="box-sub">Share this cryptographic token with authorized personnel to onboard them.</p>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon">🔗</div>
          <div className="metric-value">01</div>
          <div className="metric-label">ACTIVE NETWORK</div>
          <div className="metric-sub">SEPOLIA TESTNET</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">📦</div>
          <div className="metric-value">{totalFiles}</div>
          <div className="metric-label">SECURED ASSETS</div>
          <div className="metric-sub">PINNED TO IPFS</div>
        </div>
        <div className="metric-card">
          <div className="metric-icon">🧬</div>
          <div className="metric-value" style={{fontSize: '1.5rem'}}>{blockNumber}</div>
          <div className="metric-label">LEDGER STATUS</div>
          <div className="metric-sub">CURRENT BLOCK HEIGHT</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
