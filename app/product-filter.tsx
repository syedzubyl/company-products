"use client"

import { useEffect } from "react"

export default function ProductFilter() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const productCards = document.querySelectorAll(".product-card")

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button styling
        filterButtons.forEach((btn) => {
          btn.classList.remove("bg-blue-600", "text-white")
          btn.classList.add("bg-gray-200", "text-gray-800")
        })
        button.classList.add("bg-blue-600", "text-white")
        button.classList.remove("bg-gray-200", "text-gray-800")

        // Filter products
        const filter = button.getAttribute("data-filter")
        productCards.forEach((card) => {
          if (filter === "all" || card.classList.contains(filter)) {
            card.classList.remove("hidden")
          } else {
            card.classList.add("hidden")
          }
        })
      })
    })
  }, [])

  return null
}

