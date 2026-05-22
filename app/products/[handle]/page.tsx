import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ingredients as ingredientLibrary, trustMarquee } from "@/lib/content";
import { getAllProducts, getProduct } from "@/lib/products";
import { siteConfig } from "@/lib/site";
import { StarRating } from "@/components/ui/star-rating";

export const revalidate = 900;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: product.title,
    description: `${product.subtitle} ${product.description}`.slice(0, 158),
    alternates: { canonical: `/products/${product.handle}` },
    openGraph: {
      title: `${product.title} · ${siteConfig.name}`,
      description: product.subtitle,
      type: "website",
      url: `${siteConfig.url}/products/${product.handle}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) notFound();

  const allProducts = await getAllProducts();
  const related = allProducts
    .filter((p) => p.handle !== product.handle)
    .slice(0, 3);

  const price = product.priceRange.min;

  // Match each key active to its detailed copy from the ingredient library.
  const activeDetails = product.keyIngredients.map((name) => {
    const match = ingredientLibrary.find((i) => i.name === name);
    return {
      name,
      role: match?.role ?? "Naturally-derived active",
      copy:
        match?.copy ??
        "A considered, naturally-derived active chosen for delicate skin.",
    };
  });

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    ...(product.featuredImage ? { image: product.featuredImage.url } : {}),
    offers: {
      "@type": "Offer",
      price: price.amount,
      priceCurrency: price.currencyCode,
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${siteConfig.url}/products/${product.handle}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Product hero */}
      <section className="bg-cream pt-8 pb-16 md:pb-20">
        <div className="container-x">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-mauve">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>·</span>
            <Link href="/shop" className="transition-colors hover:text-ink">
              Shop
            </Link>
            <span aria-hidden>·</span>
            <span className="text-ink">{product.title}</span>
          </nav>

          <div className="mt-7 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProductGallery product={product} />
            </div>

            <div>
              {product.badge && (
                <span className="inline-block rounded-full bg-ink/90 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.12em] text-cream uppercase">
                  {product.badge}
                </span>
              )}
              <h1 className="mt-3 font-display text-[clamp(2.1rem,1.5rem+2.4vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-ink">
                {product.title}
              </h1>
              <p className="mt-2 text-[1.1rem] text-plum">
                {product.subtitle}
              </p>

              <div className="mt-4 flex items-center gap-2.5">
                <StarRating rating={product.rating} size={17} />
                <span className="text-sm text-mauve">
                  {product.rating.toFixed(1)}
                  {product.reviewCount > 0
                    ? ` · ${product.reviewCount} reviews`
                    : " · New"}
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-mauve">
                {product.description}
              </p>

              {/* Key actives chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.keyIngredients.map((active) => (
                  <span
                    key={active}
                    className="rounded-full border border-line bg-linen px-3 py-1 text-xs font-medium text-ink"
                  >
                    {active}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <ProductPurchase product={product} />
              </div>

              {/* The ritual */}
              <div className="mt-9 border-t border-line pt-7">
                <p className="eyebrow text-plum">The ritual</p>
                <ol className="mt-4 flex flex-col gap-3.5">
                  {product.howToUse.map((step, index) => (
                    <li key={index} className="flex gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-plum/12 font-display text-sm text-plum">
                        {index + 1}
                      </span>
                      <span className="pt-0.5 text-[0.95rem] leading-relaxed text-mauve">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-wine py-3.5">
        <Marquee items={trustMarquee} tone="cream" />
      </div>

      {/* What's inside */}
      <section className="bg-cream py-18 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What's inside"
            title={
              <>
                The actives behind your <em>ritual</em>
              </>
            }
            intro="Each ingredient in this formula is naturally-derived and chosen for the way it cares for delicate skin."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {activeDetails.map((active, index) => (
              <Reveal key={active.name} delay={(index % 2) * 90}>
                <div className="h-full rounded-[1.75rem] border border-line bg-linen p-7">
                  <p className="eyebrow text-plum">{active.role}</p>
                  <h3 className="mt-1.5 font-display text-2xl text-ink">
                    {active.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mauve">
                    {active.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-linen py-18 md:py-24">
          <div className="container-x">
            <SectionHeading
              eyebrow="Complete the ritual"
              title={
                <>
                  You may also <em>love</em>
                </>
              }
            />
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedProduct, index) => (
                <Reveal key={relatedProduct.id} delay={index * 100}>
                  <ProductCard product={relatedProduct} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
