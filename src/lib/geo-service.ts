const DEV_OVERRIDE_REGION_QUERY_PARAM_NAME = "devOverrideRegion";

interface IGeoService {
  getCurrentRegion(queryString: string, locationPath?: string): string;
}

class GeoService implements IGeoService {
  getCurrentRegion(queryString: string, locationPath: string = ""): string {
    const params = new URLSearchParams(queryString);
    const overrideRegion = params.get(DEV_OVERRIDE_REGION_QUERY_PARAM_NAME);

    if (overrideRegion && overrideRegion.trim() !== "") {
      return overrideRegion.toUpperCase();
    }

    const pathLocale = locationPath.split("/")[1] || "";
    const regionFromUrl = pathLocale.split("-")[1];

    if (regionFromUrl) {
      return regionFromUrl;
    }

    const host = window.location.host;
    if (host.includes("by")) return "BY";
    if (host.includes("kz")) return "KZ";

    return "RU";
  }
}

export const geoService = new GeoService();