
            export const queries = {
              // Add queries for each schema type
            
              getSitesettingss: `*[_type == "siteSettings"]`,
              getSitesettingsById: (id) => `*[_type == "siteSettings" && _id == "${id}"][0]`,
                
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getBlogposts: `*[_type == "blogPost"]`,
              getBlogpostById: (id) => `*[_type == "blogPost" && _id == "${id}"][0]`,
                
              getAuthors: `*[_type == "author"]`,
              getAuthorById: (id) => `*[_type == "author" && _id == "${id}"][0]`,
                
              getCategorys: `*[_type == "category"]`,
              getCategoryById: (id) => `*[_type == "category" && _id == "${id}"][0]`,
                
              getNavigations: `*[_type == "navigation"]`,
              getNavigationById: (id) => `*[_type == "navigation" && _id == "${id}"][0]`,
                
              getNavigationitems: `*[_type == "navigationItem"]`,
              getNavigationitemById: (id) => `*[_type == "navigationItem" && _id == "${id}"][0]`,
                
              getFooters: `*[_type == "footer"]`,
              getFooterById: (id) => `*[_type == "footer" && _id == "${id}"][0]`,
                
              getFootersections: `*[_type == "footerSection"]`,
              getFootersectionById: (id) => `*[_type == "footerSection" && _id == "${id}"][0]`,
                
              getSociallinks: `*[_type == "socialLink"]`,
              getSociallinkById: (id) => `*[_type == "socialLink" && _id == "${id}"][0]`,
                
              getSeos: `*[_type == "seo"]`,
              getSeoById: (id) => `*[_type == "seo" && _id == "${id}"][0]`,
                
              getTextimages: `*[_type == "textImage"]`,
              getTextimageById: (id) => `*[_type == "textImage" && _id == "${id}"][0]`,
                
              getFeaturecardss: `*[_type == "featureCards"]`,
              getFeaturecardsById: (id) => `*[_type == "featureCards" && _id == "${id}"][0]`,
                
              getFeaturecards: `*[_type == "featureCard"]`,
              getFeaturecardById: (id) => `*[_type == "featureCard" && _id == "${id}"][0]`,
                
              getFeaturelists: `*[_type == "featureList"]`,
              getFeaturelistById: (id) => `*[_type == "featureList" && _id == "${id}"][0]`,
                
              getFeatureitems: `*[_type == "featureItem"]`,
              getFeatureitemById: (id) => `*[_type == "featureItem" && _id == "${id}"][0]`,
                
              getFeaturestickys: `*[_type == "featureSticky"]`,
              getFeaturestickyById: (id) => `*[_type == "featureSticky" && _id == "${id}"][0]`,
                
              getBasicforms: `*[_type == "basicForm"]`,
              getBasicformById: (id) => `*[_type == "basicForm" && _id == "${id}"][0]`,
                
              getFormfields: `*[_type == "formField"]`,
              getFormfieldById: (id) => `*[_type == "formField" && _id == "${id}"][0]`,
                
              getContactcardss: `*[_type == "contactCards"]`,
              getContactcardsById: (id) => `*[_type == "contactCards" && _id == "${id}"][0]`,
                
              getContactcards: `*[_type == "contactCard"]`,
              getContactcardById: (id) => `*[_type == "contactCard" && _id == "${id}"][0]`,
                
              getHomectas: `*[_type == "homeCTA"]`,
              getHomectaById: (id) => `*[_type == "homeCTA" && _id == "${id}"][0]`,
                
              getHighlightrowss: `*[_type == "highlightRows"]`,
              getHighlightrowsById: (id) => `*[_type == "highlightRows" && _id == "${id}"][0]`,
                
              getHighlightrows: `*[_type == "highlightRow"]`,
              getHighlightrowById: (id) => `*[_type == "highlightRow" && _id == "${id}"][0]`,
                
              getSignups: `*[_type == "signUp"]`,
              getSignupById: (id) => `*[_type == "signUp" && _id == "${id}"][0]`,
                
              getPricingcolumnss: `*[_type == "pricingColumns"]`,
              getPricingcolumnsById: (id) => `*[_type == "pricingColumns" && _id == "${id}"][0]`,
                
              getPricingplans: `*[_type == "pricingPlan"]`,
              getPricingplanById: (id) => `*[_type == "pricingPlan" && _id == "${id}"][0]`,
                
              getFaqstickys: `*[_type == "faqSticky"]`,
              getFaqstickyById: (id) => `*[_type == "faqSticky" && _id == "${id}"][0]`,
                
              getFaqitems: `*[_type == "faqItem"]`,
              getFaqitemById: (id) => `*[_type == "faqItem" && _id == "${id}"][0]`,
                
              getBasicfeeds: `*[_type == "basicFeed"]`,
              getBasicfeedById: (id) => `*[_type == "basicFeed" && _id == "${id}"][0]`,
                
              getFeeditems: `*[_type == "feedItem"]`,
              getFeeditemById: (id) => `*[_type == "feedItem" && _id == "${id}"][0]`,
                }
