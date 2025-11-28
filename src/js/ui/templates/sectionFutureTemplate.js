export const sectionFutureTemplate = (data) => {
    return `
        <section class="section-future">
            <div class="container">
                <div class="section-future-content">
                    <h2 class="section-future-title">${data.title}</h2>
                    <a href="#!" class="section-future-button">${data.buttonText}</a>
                    <div class="information-future">
                        <div class="footer-column">
                            <img src="${data.companyInfo.logo}" alt="GPT-4 Logo" class="future-img">
                            <p class="light-text">${data.companyInfo.address}<br><br>${data.companyInfo.copyright}</p>
                        </div>
                        <div class="straight-columns">
                            ${data.columns.map(column => `
                                <div class="footer-column-link">
                                    <h3>${column.title}</h3>
                                    ${column.type === 'contacts' 
                                        ? `
                                            <a>${column.items[0]}</a>
                                            <a href="tel:+73422198520">${column.items[1]}</a>
                                            <a href="mailto:info@pstu.ru">${column.items[2]}</a>
                                        `
                                        : column.items.map(item => `<a href="#!">${item}</a>`).join('')
                                    }
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    `;
};