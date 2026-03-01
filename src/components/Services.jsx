import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    
    const services = [
        // Wedding Category
        {
            id: 1,
            icon: 'fas fa-ring',
            title: 'Wedding Planning',
            description: 'Complete wedding planning from venue selection to vendor coordination, ensuring your special day is perfect.',
            image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
            category: 'wedding'
        },
        {
            id: 2,
            icon: 'fas fa-heart',
            title: 'Engagement Ceremony',
            description: 'Beautiful engagement celebrations with personalized themes, photography, and catering arrangements.',
            image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop',
            category: 'wedding'
        },
        {
            id: 3,
            icon: 'fas fa-hand-holding-heart',
            title: 'Haldi & Mehendi',
            description: 'Traditional pre-wedding ceremonies with vibrant decor, professional mehendi artists, and cultural touches.',
            image: 'https://images.unsplash.com/photo-1583939411023-1478317e950c?w=400&h=300&fit=crop',
            category: 'wedding'
        },
        {
            id: 4,
            icon: 'fas fa-glass-cheers',
            title: 'Sangeet Night',
            description: 'High-energy sangeet ceremonies with choreographed performances, DJ, and entertainment.',
            image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
            category: 'wedding'
        },
        
        // Corporate Category
        {
            id: 5,
            icon: 'fas fa-briefcase',
            title: 'Corporate Events',
            description: 'Professional conferences, product launches, and corporate galas that impress stakeholders.',
            image: 'https://images.unsplash.com/photo-1559635582-2b01c6f5ccbc?w=400&h=300&fit=crop',
            category: 'corporate'
        },
        {
            id: 6,
            icon: 'fas fa-chalkboard-teacher',
            title: 'Conferences & Seminars',
            description: 'Well-organized conferences with audio-visual setup, stage design, and seamless execution.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
            category: 'corporate'
        },
        {
            id: 7,
            icon: 'fas fa-users',
            title: 'Team Building',
            description: 'Engaging team building activities and retreats to boost employee morale and collaboration.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
            category: 'corporate'
        },
        {
            id: 8,
            icon: 'fas fa-gift',
            title: 'Product Launch',
            description: 'Impactful product launch events with media coverage, celebrity appearances, and brand experiences.',
            image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
            category: 'corporate'
        },
        {
            id: 9,
            icon: 'fas fa-award',
            title: 'Award Ceremonies',
            description: 'Glamorous award nights with red carpet, trophies, entertainment, and professional hosting.',
            image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=400&h=300&fit=crop',
            category: 'corporate'
        },
        
        // Birthday Category
        {
            id: 10,
            icon: 'fas fa-birthday-cake',
            title: 'Birthday Parties',
            description: 'Themed birthday celebrations for all ages with customized decor, entertainment, and catering.',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
            category: 'birthday'
        },
        {
            id: 11,
            icon: 'fas fa-crown',
            title: 'Sweet 16 / 18th Birthday',
            description: 'Milestone birthday celebrations with glamorous themes, photo booths, and special effects.',
            image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=300&fit=crop',
            category: 'birthday'
        },
        {
            id: 12,
            icon: 'fas fa-star',
            title: 'First Birthday',
            description: 'Adorable first birthday celebrations with cake smash sessions, kiddie entertainment, and family fun.',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
            category: 'birthday'
        },
        {
            id: 13,
            icon: 'fas fa-mask',
            title: 'Surprise Parties',
            description: 'Secret surprise parties with careful planning, hidden arrangements, and emotional moments.',
            image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
            category: 'birthday'
        },
        
        // Baby Shower Category
        {
            id: 14,
            icon: 'fas fa-child',
            title: 'Baby Showers',
            description: 'Welcome your little one with beautiful decor, games, and sweet memories.',
            image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=300&fit=crop',
            category: 'baby'
        },
        {
            id: 15,
            icon: 'fas fa-baby',
            title: 'Gender Reveal',
            description: 'Creative gender reveal parties with confetti cannons, cakes, and memorable moments.',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop',
            category: 'baby'
        },
        {
            id: 16,
            icon: 'fas fa-baby-carriage',
            title: 'Naming Ceremony',
            description: 'Traditional naming ceremonies with priest arrangements, catering, and family gatherings.',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
            category: 'baby'
        },
        
        // Anniversary Category
        {
            id: 17,
            icon: 'fas fa-heart',
            title: 'Anniversary Celebrations',
            description: 'Romantic anniversary parties with vow renewals, photo slideshows, and intimate dinners.',
            image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop',
            category: 'anniversary'
        },
        {
            id: 18,
            icon: 'fas fa-gem',
            title: 'Silver & Golden Jubilee',
            description: 'Grand 25th and 50th anniversary celebrations with family reunions and elegant decor.',
            image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=400&h=300&fit=crop',
            category: 'anniversary'
        },
        
        // Festival & Cultural Events
        {
            id: 19,
            icon: 'fas fa-festival',
            title: 'Diwali Celebrations',
            description: 'Grand Diwali parties with lighting, rangoli, firecrackers, and traditional sweets.',
            image: 'https://images.unsplash.com/photo-1576486555345-e3d9c4cec8a1?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 20,
            icon: 'fas fa-festival',
            title: 'Ganesh Chaturthi',
            description: 'Eco-friendly Ganesh festival celebrations with pandal decoration and cultural programs.',
            image: 'https://images.unsplash.com/photo-1625059262557-1915ec5106b3?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 21,
            icon: 'fas fa-holi',
            title: 'Holi Parties',
            description: 'Colorful Holi celebrations with organic colors, music, DJ, and traditional snacks.',
            image: 'https://images.unsplash.com/photo-1615130690375-18bd343c5c6d?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 22,
            icon: 'fas fa-festival',
            title: 'Navratri Garba',
            description: 'Traditional Navratri nights with Garba, Dandiya, live music, and authentic Gujarati food.',
            image: 'https://images.unsplash.com/photo-1625059262557-1915ec5106b3?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 23,
            icon: 'fas fa-festival',
            title: 'Christmas Party',
            description: 'Magical Christmas celebrations with Santa, tree decoration, carols, and festive feast.',
            image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 24,
            icon: 'fas fa-festival',
            title: 'New Year Eve',
            description: 'Glamorous New Year parties with countdown, fireworks, DJ, and premium catering.',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
            category: 'festival'
        },
        {
            id: 25,
            icon: 'fas fa-festival',
            title: 'Eid Celebrations',
            description: 'Elegant Eid parties with traditional decor, feast, and cultural entertainment.',
            image: 'https://images.unsplash.com/photo-1584636779676-32e9d9b4f8d9?w=400&h=300&fit=crop',
            category: 'festival'
        },
        
        // Additional Services
        {
            id: 26,
            icon: 'fas fa-camera',
            title: 'Photography & Videography',
            description: 'Professional photography and cinematography to capture every precious moment.',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop',
            category: 'additional'
        },
        {
            id: 27,
            icon: 'fas fa-utensils',
            title: 'Catering Services',
            description: 'Exquisite culinary experiences with multi-cuisine buffets, live counters, and custom menus.',
            image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop',
            category: 'additional'
        },
        {
            id: 28,
            icon: 'fas fa-music',
            title: 'DJ & Entertainment',
            description: 'High-energy DJs, live bands, and entertainment acts to keep your guests engaged.',
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop',
            category: 'additional'
        },
        {
            id: 29,
            icon: 'fas fa-palette',
            title: 'Decor & Design',
            description: 'Customized decor, floral arrangements, lighting, and stage design for any theme.',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
            category: 'additional'
        },
        {
            id: 30,
            icon: 'fas fa-car',
            title: 'Luxury Transportation',
            description: 'Premium car rentals, wedding convoys, and guest transportation services.',
            image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
            category: 'additional'
        },
        {
            id: 31,
            icon: 'fas fa-hotel',
            title: 'Venue Selection',
            description: 'Curated venue options including palaces, resorts, banquets, and unique locations.',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop',
            category: 'additional'
        }
    ];

    // Group services by category
    const categories = [
        { id: 'wedding', name: 'Wedding & Pre-Wedding', icon: 'fas fa-heart', color: '#FF6B6B', description: 'Make your dream wedding a reality with our comprehensive planning services' },
        { id: 'corporate', name: 'Corporate Events', icon: 'fas fa-briefcase', color: '#4A90E2', description: 'Professional events that leave lasting impressions on your stakeholders' },
        { id: 'birthday', name: 'Birthday Celebrations', icon: 'fas fa-birthday-cake', color: '#FFB347', description: 'Fun-filled birthday parties for all ages with creative themes' },
        { id: 'baby', name: 'Baby Showers & Kids', icon: 'fas fa-child', color: '#A8E6CF', description: 'Celebrate the arrival of your little one with joy and style' },
        { id: 'anniversary', name: 'Anniversary Events', icon: 'fas fa-heart', color: '#FF8E53', description: 'Honor your love story with elegant anniversary celebrations' },
        { id: 'festival', name: 'Festival Celebrations', icon: 'fas fa-festival', color: '#C5A059', description: 'Vibrant festival parties that capture the spirit of celebration' },
        { id: 'additional', name: 'Additional Services', icon: 'fas fa-cog', color: '#6C5CE7', description: 'Complete your event with our premium add-on services' }
    ];

    const getServicesByCategory = (categoryId) => {
        return services.filter(service => service.category === categoryId);
    };

    // Filter services based on active category
    const filteredServices = activeCategory === 'all' 
        ? services 
        : services.filter(service => service.category === activeCategory);

    return (
        <section className="services-section">
            {/* Decorative Background Elements */}
            <div className="services-bg-decoration">
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                <div className="bg-circle circle-3"></div>
            </div>

            <div className="container">
                {/* Header Section */}
                <div className="section-header">
                    <div className="section-subtitle">
                        <span className="subtitle-line"></span>
                        What We Offer
                        <span className="subtitle-line"></span>
                    </div>
                    <h2 className="section-title">
                        <span className="title-word">Our</span>
                        <span className="title-word accent">Services</span>
                    </h2>
                    <div className="title-decoration">
                        <i className="fas fa-star"></i>
                        <span className="decoration-line"></span>
                        <i className="fas fa-heart"></i>
                        <span className="decoration-line"></span>
                        <i className="fas fa-gem"></i>
                    </div>
                    <p className="services-description">
                        From intimate gatherings to grand celebrations, we offer comprehensive event planning services 
                        tailored to your unique vision. Explore our range of professional services below.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="category-filter-tabs">
                    <button 
                        className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveCategory('all')}
                        style={{ '--tab-color': '#C5A059' }}
                    >
                        <i className="fas fa-th-large"></i>
                        <span>All Services</span>
                        <span className="tab-count">{services.length}</span>
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                            style={{ '--tab-color': category.color }}
                        >
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                            <span className="tab-count">{getServicesByCategory(category.id).length}</span>
                        </button>
                    ))}
                </div>

                {/* Category Overview Cards */}
                {activeCategory === 'all' && (
                    <div className="category-overview-grid">
                        {categories.map(category => {
                            const categoryServices = getServicesByCategory(category.id);
                            return (
                                <div 
                                    key={category.id} 
                                    className="category-overview-card"
                                    style={{ '--card-color': category.color }}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    <div className="overview-icon">
                                        <i className={category.icon}></i>
                                    </div>
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <div className="overview-footer">
                                        <span className="service-count">{categoryServices.length} Services</span>
                                        <span className="view-link">
                                            View Services <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Services Grid */}
                <div className="services-grid-container">
                    <div className="services-grid">
                        {filteredServices.map(service => {
                            const category = categories.find(c => c.id === service.category);
                            return (
                                <div className="service-card-modern" key={service.id}>
                                    <div className="service-card-inner">
                                        <div className="service-front">
                                            <div className="service-image-wrapper">
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title} 
                                                    className="service-img"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop';
                                                    }}
                                                />
                                                <div className="service-category-badge" style={{ backgroundColor: category?.color }}>
                                                    <i className={category?.icon}></i>
                                                </div>
                                            </div>
                                            <div className="service-content-modern">
                                                <div className="service-icon-wrapper" style={{ backgroundColor: category?.color }}>
                                                    <i className={service.icon}></i>
                                                </div>
                                                <h3>{service.title}</h3>
                                                <p className="service-description">{service.description}</p>
                                                <div className="service-features">
                                                    <span className="feature-tag">
                                                        <i className="fas fa-check-circle"></i> Professional Team
                                                    </span>
                                                    <span className="feature-tag">
                                                        <i className="fas fa-clock"></i> Flexible Timing
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-back" style={{ backgroundColor: category?.color }}>
                                            <div className="back-content">
                                                <h4>Why Choose This Service?</h4>
                                                <ul className="back-features">
                                                    <li><i className="fas fa-check"></i> Expert planning team</li>
                                                    <li><i className="fas fa-check"></i> Customized packages</li>
                                                    <li><i className="fas fa-check"></i> Premium vendors</li>
                                                    <li><i className="fas fa-check"></i> 24/7 support</li>
                                                </ul>
                                                <div className="back-buttons">
                                                    <Link to="/pricing" className="back-btn pricing-btn">
                                                        <i className="fas fa-tag"></i> Pricing
                                                    </Link>
                                                    <Link to="/contact" className="back-btn inquire-btn">
                                                        <i className="fas fa-envelope"></i> Inquire
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Featured Services Section */}
                {/* {activeCategory === 'all' && (
                    <div className="featured-services">
                        <div className="featured-header">
                            <h3>Most Popular Services</h3>
                            <div className="featured-line"></div>
                        </div>
                        <div className="featured-grid">
                            {services.filter(s => s.id <= 4).map(service => {
                                const category = categories.find(c => c.id === service.category);
                                return (
                                    <div className="featured-card" key={service.id}>
                                        <div className="featured-image">
                                            <img src={service.image} alt={service.title} />
                                            <div className="featured-overlay">
                                                <span className="featured-badge" style={{ backgroundColor: category?.color }}>
                                                    <i className={category?.icon}></i> {category?.name.split(' ')[0]}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <h4>{service.title}</h4>
                                            <p>{service.description.substring(0, 60)}...</p>
                                            <div className="featured-actions">
                                                <Link to="/pricing" className="featured-btn pricing-btn">
                                                    <i className="fas fa-tag"></i> Pricing
                                                </Link>
                                                <Link to="/contact" className="featured-btn inquire-btn">
                                                    <i className="fas fa-envelope"></i> Inquire
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )} */}

                {/* Custom Packages Section */}
                <div className="custom-packages">
                    <div className="custom-packages-content">
                        <div className="custom-icon">
                            <i className="fas fa-magic"></i>
                        </div>
                        <h3>Looking for Something Custom?</h3>
                        <p>We specialize in creating bespoke events tailored to your specific needs. Tell us your vision, and we'll bring it to life with our expert team.</p>
                        <div className="custom-buttons">
                            <Link to="/pricing" className="btn-secondary">
                                <i className="fas fa-tag"></i> 
                                View Packages
                            </Link>
                            <Link to="/contact" className="btn-primary">
                                <i className="fas fa-comment-dots"></i> 
                                Discuss Your Event
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;