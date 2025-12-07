const CoverSection = () => {
    return (
      <section id="cover" className="bg-white py-20 px-4 lg:px-8">
        <div className="container mx-auto">
  
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              What’s Included in Your 
              <span className="accent-gradient bg-clip-text text-transparent"> Cover?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Property Owners Insurance can include a range of protections depending 
              on the insurer and your specific needs. Here’s a clear breakdown of 
              what is typically covered and what may be excluded.
            </p>
          </div>
  
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
  
            {/* LEFT COLUMN — What Is Covered */}
            <div className="rounded-2xl p-8 lg:p-10 shadow-md animate-fade-in"
                 style={{ backgroundColor: "#001d3d" }}>
              
              <h3 className="text-white text-2xl font-bold mb-6">
                What Is Covered?
              </h3>
  
              <ul className="space-y-5 text-white/90 text-base leading-relaxed">
  
                <li>
                  <span className="font-semibold text-white">✔ Buildings Insurance:</span><br />
                  Covers structural elements such as walls, roofing and fixtures 
                  against insured events like fire, flood, storm damage and 
                  escape of water.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✔ Landlord’s Contents:</span><br />
                  Protects furnishings and appliances you provide for tenants. 
                  (Does not cover tenant belongings.)
                </li>
  
                <li>
                  <span className="font-semibold text-white">✔ Loss of Rent / Alternative Accommodation:</span><br />
                  May cover lost rental income or tenant rehousing if the property 
                  becomes uninhabitable due to an insured event.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✔ Property Owners’ Liability:</span><br />
                  Covers legal liability if someone is injured on the property or 
                  their belongings are damaged due to your ownership.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✔ Accidental Damage (If Selected):</span><br />
                  Protection against accidental physical damage, when included.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✔ Multi-Property Options:</span><br />
                  Some insurers offer portfolio policies for multiple properties 
                  under one arrangement.
                </li>
  
              </ul>
            </div>
  
            {/* RIGHT COLUMN — What Is Not Covered */}
            <div className="rounded-2xl p-8 lg:p-10 shadow-md animate-fade-in"
                 style={{ backgroundColor: "#f41c44" }}>
              
              <h3 className="text-white text-2xl font-bold mb-6">
                What Is Not Covered?
              </h3>
  
              <ul className="space-y-5 text-white/90 text-base leading-relaxed">
  
                <li>
                  <span className="font-semibold text-white">✘ Wear and Tear:</span><br />
                  Gradual deterioration, maintenance issues or ageing of the property.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✘ Malicious Damage by Tenants (Unless Added):</span><br />
                  Deliberate tenant damage is usually excluded unless optional cover 
                  is purchased.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✘ Unoccupied Property Periods:</span><br />
                  Claims occurring if the property is unoccupied beyond the policy’s 
                  permitted time limits.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✘ Vermin, Pests or Insects:</span><br />
                  Damage caused by infestations such as rodents or insects.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✘ Mechanical or Electrical Breakdown:</span><br />
                  Breakdowns of boilers, appliances or systems, unless consequential 
                  damage is caused by an insured peril.
                </li>
  
                <li>
                  <span className="font-semibold text-white">✘ Undisclosed Occupancy or Usage:</span><br />
                  Claims may be declined if tenant type or property use was not 
                  declared.
                </li>
  
              </ul>
            </div>
          </div>
  
          {/* FCA Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
            Cover varies by insurer and is subject to underwriting, policy terms, 
            conditions and exclusions. Full documentation will be provided before 
            you decide whether the policy is suitable for your needs.
          </p>
  
        </div>
      </section>
    );
  };
  
  export default CoverSection;
  