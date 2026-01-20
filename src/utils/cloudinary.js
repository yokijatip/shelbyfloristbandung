/**
 * Mengoptimalkan URL Cloudinary dengan transformasi
 * @param {string} url - URL Cloudinary original
 * @param {object} options - Opsi transformasi
 * @returns {string} URL yang sudah dioptimasi
 */
export function optimizeCloudinaryUrl(url, options = {}) {
  const {
    width = 800,
    quality = "auto",
    format = "auto",
    crop = "limit",
  } = options;

  // Cari posisi /upload/ di URL
  const uploadIndex = url.indexOf("/upload/");
  if (uploadIndex === -1) return url;

  // Buat parameter transformasi
  const transforms = `f_${format},q_${quality},w_${width},c_${crop}`;

  // Insert transformasi setelah /upload/
  return (
    url.slice(0, uploadIndex + 8) +
    transforms +
    "/" +
    url.slice(uploadIndex + 8)
  );
}

/**
 * Generate srcset untuk responsive images
 * @param {string} url - URL Cloudinary original
 * @param {array} widths - Array lebar gambar [400, 800, 1200]
 * @returns {string} srcset string
 */
export function generateSrcSet(url, widths = [400, 800, 1200]) {
  return widths
    .map((width) => {
      const optimizedUrl = optimizeCloudinaryUrl(url, { width });
      return `${optimizedUrl} ${width}w`;
    })
    .join(", ");
}
