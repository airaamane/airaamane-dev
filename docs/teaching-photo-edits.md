# Speaking and classroom photo edits

Mode: built-in imagegen, identity-preserving photo edits. The conference image received one additional crop refinement.

## Inputs

- Conference: user-supplied `C:/Users/airaa/Desktop/download (1).png`.
- Classroom: user-supplied `C:/Users/airaa/Desktop/download (2).png`.

## Selected outputs

- `docs/images/speaking-dublin-2023.png` — full-size selected imagegen output.
- `docs/images/classroom-teaching.png` — full-size selected imagegen output.
- `static/speaking-dublin-2023.jpg` — 720 × 540 web copy, JPEG quality 88.
- `static/classroom-teaching.jpg` — 720 × 540 web copy, JPEG quality 88.

The web copies are resized/encoded versions of the selected outputs, with no further creative edits. Both are lazy-loaded in a compact photo strip in the homepage teaching section. Desktop display width is capped at 340 px.

These are AI-edited derivatives of the supplied photographs, not camera originals. The classroom edit uses the visible photographic area inside the supplied promotional graphic; an unbranded original was not obtained. The original user files remain unchanged.

## Conference prompt

Use case: identity-preserve. Asset type: small editorial photo in a trainer website's speaking-and-teaching strip. Input image 1 is the sole edit target: a real phone photograph of Abdellah Iraamane speaking at a podium at the European Power Platform Conference in Dublin in 2023. Make a conservative photographic crop and cleanup, not a reimagining of the event. Crop toward the RIGHT TWO-THIRDS of the original photo, removing the excessive ceiling and most of the left slide, so the real speaker in the red polo and the real podium dominate the composition. Produce a compact landscape 4:3 crop. Keep his entire head, upper body, microphone, laptop, and the identifying face of the podium visible. Keep both the existing podium event branding (European Power Platform Conference, DUBLIN, '23) and the existing DUBLIN2023 mark at the lower-right corner of the projection screen visible exactly as photographed. Do not retype, redesign, enhance into invented letters, or alter those graphics. Crop out as much as possible of the foreground attendee's head; if a distracting small remnant remains at the left edge, remove only that obstruction by continuing the already visible dark stage background. Make only a restrained low-light exposure/noise correction. Keep the identity, facial features, glasses, beard, hair, expression, pose, clothing, room, screen, equipment, and lighting character unchanged. Preserve the authenticity and modest resolution of a phone photo; do not invent facial detail, new slide text, extra people or any objects. No captions, no new logos, no new graphic overlays, no border. Return one edited photograph, suitable for display at about 400 pixels wide, not a large hero.

## Conference final crop refinement prompt

Use case: identity-preserve. Edit target: the attached conference photograph. Make ONLY a tighter CROP, with every retained photographic detail unchanged. The last crop was too wide. Take the RIGHTMOST TWO-THIRDS: crop away roughly the LEFT 33% of this image, then crop the top/bottom to form a landscape 4:3 image. Approximate crop rectangle on this 1448x1086 image: x=485 to1448, y=165 to887. The instructor's head and red polo, microphone, laptop and podium should be much larger and dominate. Keep the screen's existing DUBLIN2023 logo at left and the podium's existing European Power Platform Conference / DUBLIN / '23 signage entirely visible. Lower podium and feet may fall outside the crop. Leave modest breathing room above his head. Do not keep the entire slide or its heading. Do not rearrange or recreate content to fit more in. Do not change the face, expression, body, hands, clothes, lighting, any lettering, stage or objects. No new cleanup, no upscaling aesthetic, no overlays. Return the tighter cropped photograph only.

## Classroom prompt

Use case: identity-preserve. Asset type: small editorial photo in a trainer website's speaking-and-teaching strip. Input image 1 is the sole edit target: a real classroom photograph inside a branded promotional graphic. Make a conservative CROP of the underlying visible photograph around Abdellah Iraamane (the standing instructor at left, glasses, full beard, red-and-black checked overshirt over a white T-shirt), his teaching hand gesture, and the whiteboard beside him. Produce a compact landscape 4:3 composition by taking the useful lower-left classroom region, approximately the source area x=20 to 800, y=810 to 1395. Exclude the huge ceiling area and ALL added graphic overlays by cropping them outside the frame: the Tech Talks title, A2S logo, top blue banner/gradient, bottom social-media icons and A2S JUNIOR ENTREPRISE footer. This should look like the actual candid teaching photo, not a promotional repost. Keep the real instructor's full head, glasses, facial identity, expression, beard, hair, original clothes, hand gesture and stance unchanged. Keep recognizable original whiteboard context, desk and classroom; a little of the real seated audience at the right/lower edge is welcome. Correct only residual blue promotional tint and lightly balance exposure; preserve natural classroom light and original photo texture. Do not invent a new scene, sharpen into fabricated detail, alter the instructor's face or body, create new writing on the board, or add/remove classroom props. No text overlays, logos, icons, borders, or new watermarks. Return one edited photograph intended to display at about 360 pixels wide.
