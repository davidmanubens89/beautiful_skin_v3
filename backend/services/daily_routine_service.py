def get_daily_routine():
    # Fetch and return the user's daily routine
    # This would typically be based on the user's skin assessment and stored in a database
    return {
        "morning": [
            {"step": "Cleanse", "product": "Gentle Foaming Cleanser"},
            {"step": "Tone", "product": "Hydrating Toner"},
            {"step": "Serum", "product": "Vitamin C Serum"},
            {"step": "Moisturize", "product": "Lightweight Day Cream"},
            {"step": "Sunscreen", "product": "Broad Spectrum SPF 50"}
        ],
        "evening": [
            {"step": "Cleanse", "product": "Oil-based Cleanser"},
            {"step": "Exfoliate", "product": "Gentle AHA/BHA Exfoliant"},
            {"step": "Tone", "product": "Hydrating Toner"},
            {"step": "Treat", "product": "Retinol Serum"},
            {"step": "Moisturize", "product": "Rich Night Cream"}
        ]
    }