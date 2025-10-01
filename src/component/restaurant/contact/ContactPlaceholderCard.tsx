import React from "react";

const ContactPlaceholderCard = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps?output=embed&hl=vi&z=16&ll=10.780236,106.699173&t=m";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=10.780236%2C106.699173&travelmode=driving";

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-900">Bản đồ & Hình ảnh</h2>
      </header>
      <div className="rounded-xl overflow-hidden min-h-[420px] shadow-sm">
        <iframe
          title="Bản đồ khu vực trung tâm Quận 1, TP. Hồ Chí Minh"
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[420px] border-0"
          aria-label="Bản đồ khu vực trung tâm Quận 1"
          allowFullScreen
        />
      </div>
      <footer className="flex justify-end">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
        >
          Xem chỉ đường
          <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </section>
  );
};

export default ContactPlaceholderCard;
