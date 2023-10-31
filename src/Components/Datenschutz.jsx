import React from 'react';
import bg1 from '../Assets/vector-17.png';
import bg2 from '../Assets/vector15.png';
import bg3 from '../Assets/vector-16.png';
import bg4 from '../Assets/vector12.png';
import bg5 from '../Assets/vector13.png';
import bg6 from '../Assets/vector14.png';

function DatenschutzData() {
	const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

	const datenschutzData = [
		{
			title: 'Datenschutzerklärung',
			content: [
				{
					type: 'paragraph',
					text: `Wir freuen uns über Ihren Besuch auf unserer Webseite. KIJUFI ist sich der Bedeutung von Datenschutz und -sicherheit bewusst. Im Folgenden informieren wir deshalb über die Erhebung personenbezogener Daten bei Nutzung unserer Webseite:`,
				},
			],
		},
		{
			title: '1. Verantwortliche Stelle und Datenschutzbeauftragte',
			content: [
				{
					type: 'paragraph',
					text: `Landesverband Kinder- und Jugendfilm Berlin e.V. (kijufi)
          Am Sudhaus 21
          2053 Berlin
          Telefon: 030 60 98 86 55
          E-Mail: info@kijufi.de
          Unseren Datenschutzbeauftragten erreichen Sie unter datenschutz@kijufi.de  oder unter unserer Postadresse mit dem Zusatz „Datenschutzbeauftragter“.`,
				},
			],
		},
		{
			title: '2. Allgemeine Datenverarbeitung beim Aufruf unserer Webseite',
			content: [
				{
					type: 'paragraph',
					text: 'Die Website www.kijufi.de  wird gehostet von jugendnetz-berlin.de. Um den Schutz Ihrer Daten zu gewährleisten, haben wir mit jugendnetz-berlin.de einen Vertrag zur Auftragsverarbeitung nach §28 DSGVO abgeschlossen. Ihre Daten, gegebenenfalls auch personenbezogene Daten, können auf den Servern von jugendnetz-berlin.de gespeichert werden.',
				},
				{
					type: 'paragraph',
					text: 'Sofern Sie unsere Webseite lediglich aufrufen, uns aber keinerlei Informationen zukommen lassen (beispielsweise über ein Anmelde- oder Kontaktformular), sammelt der Webserver beim Aufruf unserer Webseite nur diejenigen Daten, die das von Ihnen benutzte Webbrowserprogramm automatisch übermittelt und speichert diese. Dazu gehören die folgenden Informationen:',
				},
				{
					type: 'unorderedList',
					items: ['Informationen über den Browsertyp und die verwendete Version', 'Das Betriebssystem des Nutzers/der Nutzerin', 'Den Internet-Service-Provider des Nutzers/der Nutzerin', 'Die IP-Adresse des Nutzers/der Nutzerin', 'Zugriffsstatus/HTTP-Statuscode', 'Datum und Uhrzeit des Zugriffs', 'Webseiten, von denen das System des Nutzers/der Nutzerin auf unsere Internetseite gelangt', 'Webseiten, die vom System des Nutzers über unsere Webseite aufgerufen werden'],
				},
				{
					type: 'paragraph',
					text: 'Durch die Nutzung dieser Website erklären Sie sich mit der Speicherung, Aufbewahrung und Verwendung dieser Daten durch jugendnetz-berlin.de entsprechend der Datenschutzerklärung von jugendnetz-berlin.de einverstanden. Die Datenschutzerklärung von jugendnetz-berlin.de finden Sie hier http://www.jugendnetz-berlin.de/de/datenschutzerklaerung/.',
				},
				{
					type: 'paragraph',
					text: 'Als Content-Management-System, über das wir die Website www.kijufi.de  verwalten, nutzen wir das Open-Source-Programm WordPress. Auf den Servern von WordPress werden keine Daten gespeichert, da die Website www.kijufi.de  von jugendnetz-berlin.de gehostet wird.',
				},
			],
		},
		{
			title: '3. Kontaktaufnahme / Anmeldung zur Teilnahme an Projekten und Angeboten',
			content: [
				{
					type: 'paragraph',
					text:
						'Wenn Sie das auf der Webseite angebotene Kontakt- bzw. Anmeldeformular benutzen möchten, um mit uns in Kontakt zu treten, benötigen wir die im Formular abgefragten Daten zur Beantwortung Ihrer Anfrage. Einige Daten werden dabei nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für die Bearbeitung Ihrer Anfrage und geben diese nicht an Dritte weiter. Dies gilt auch, wenn Sie per E-Mail mit uns Kontakt aufnehmen. Die Verarbeitung der in das Kontaktformular eingegebenen oder per E-Mail gesendeten Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
				},
				{
					type: 'paragraph',
					text: 'Die erteilte Einwilligung zur Speicherung der Daten können Sie jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke der Kontaktaufnahme bei uns hinterlegten Daten werden von uns solange gespeichert, bis Sie uns zur Löschung auffordern oder gesetzliche Fristen die Löschung von uns erlauben oder verlangen.',
				},
				{
					type: 'paragraph',
					text: 'Diese Website nutzt die CRM-Software CentralStationCRM für die Speicherung und Verarbeitung Ihrer Kontaktaufnahme. Anbieter ist die 42he GmbH, Marktstraße 10 – Gebäude E8, 50968 Köln, Deutschland. CentralStationCRM ist ein Dienst, mit dem u.a. Kunden organisiert und betreut werden können. Die von Ihnen zum Zwecke der Kontaktaufnahme eingegeben Daten werden auf den Servern von CentralStationCRM in Deutschland gespeichert.',
				},
				{
					type: 'paragraph',
					text: 'Wenn Sie keine weitere Verarbeitung durch CentralStationCRM wollen, müssen Sie den Betreiber dieser Webseite nach Ihrer Kontaktaufnahme darüber informieren.',
				},
				{
					type: 'paragraph',
					text:
						'Datenanalyse durch CentralStationCRM – Mit Hilfe von CentralStationCRM ist es uns möglich die Anfragen über unsere Webseite besser zu organisieren und schneller beantworten zu können. CentralStationCRM ermöglicht es uns auch, unsere Kunden und Kontakte besser gruppieren zu können. Dadurch können wir zielgerichteter in Vertrieb und Marketing arbeiten. Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt. Die von Ihnen zum Zwecke der Kontaktaufnahme bei uns hinterlegten Daten werden von uns so lange gespeichert, bis diese von uns gelöscht werden.',
				},
				{
					type: 'paragraph',
					text: 'Näheres entnehmen Sie den Datenschutzbestimmungen von CentralStationCRM unter: https://centralstationcrm.net/www/privacy . Wir haben mit CentralStationCRM einen Vertrag abgeschlossen, in dem wir CentralStationCRM verpflichten, die Daten unserer Kunden zu schützen und sie nicht an Dritte weiterzugeben. Dieser Vertrag kann unter folgendem Link eingesehen werden: https://centralstationcrm.de/avv .',
				},
			],
		},
		{
			title: '4. Google reCAPTCHA',
			content: [
				{
					type: 'paragraph',
					text: 'Wir nutzen “Google reCAPTCHA” (im Folgenden “reCAPTCHA”) auf unseren Websites. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”). Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unseren Websites (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt.',
				},
				{
					type: 'paragraph',
					text:
						'Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet. Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.',
				},
				{
					type: 'paragraph',
					text: 'Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.',
				},
				{
					type: 'paragraph',
					text: 'Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung von Google entnehmen Sie folgenden Links: https://www.google.com/intl/de/policies/privacy/  und https://www.google.com/recaptcha/intro/android.html.',
				},
			],
		},
		{
			title: '5. Erweiterte Datenverwendung',
			content: [
				{
					type: 'paragraph',
					text: 'Im Rahmen unserer Programme KIJUFI ist nach freiwilliger, gesondert zu erklärender und protokollierter Einwilligung in die „erweiterte Datenverwendung“ durch den/die Nutzer*in berechtigt, personenbezogene Daten sowie Profildaten und demografische Daten für folgende Zwecke zu verarbeiten:',
				},
				{
					type: 'unorderedList',
					items: ['der Aufnahme in ein Teilnehmerverzeichnis', 'der Zusendung von Informationen über unsere Angebote'],
				},
				{
					type: 'paragraph',
					text: 'Rechtsgrundlage ist Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen entnehmen Sie bitte den projektspezifischen Einverständniserklärungen und Teilnahmebedingungen, die wir Ihnen vor Projektbeginn auch noch einmal gesondert zusenden.',
				},
			],
		},
		{
			title: '6. Weitergabe Ihrer personenbezogenen Daten an Dritte',
			content: [
				{
					type: 'paragraph',
					text: 'KIJUFI gibt Ihre personenbezogenen Daten grundsätzlich nicht an Dritte weiter, es sei denn, Sie haben vorher Ihre ausdrückliche Einwilligung erklärt oder es besteht eine gesetzliche Verpflichtung zur Datenweitergabe. Soweit Sie Ihre Einwilligung erteilt haben, können Sie sie jederzeit mit Wirkung für die Zukunft durch einfache Mitteilung per E-Mail an die Adresse datenschutz@kijufi.de  widerrufen.',
				},
				{
					type: 'paragraph',
					text: 'Zur Datenverarbeitung und -sicherung personenbezogener Daten nutzen wir das Customer-Relation-Management-System von CRM CentralStation. Sofern externe Dienstleister mit Ihren personenbezogenen Daten in Berührung kommen, stellen wir durch technische und organisatorische Maßnahmen sowie Verträge nach Art. 28 DSGVO den Schutz Ihrer personenbezogenen Daten sicher.',
				},
			],
		},
		{
			title: '7. Google Maps',
			content: [
				{
					type: 'paragraph',
					text: 'Diese Webseite benutzt zur Darstellung einer interaktiven Karte Google Places API, einen Kartendienst von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“). Bei der Nutzung von Google Maps auf unserer Webseite wird eine Verbindung mit dem Server von Google erforderlich sein. Dadurch können von Google auch Daten über die Nutzung der Maps-Funktionen (einschließlich Ihrer IP-Adresse) durch Besucher*innen der Webseite verarbeitet werden.',
				},
				{
					type: 'paragraph',
					text: 'Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von Google unter http://www.google.de/intl/de/policies/privacy/.',
				},
				{
					type: 'paragraph',
					text: 'Rechtsgrundlage für die Nutzung der Maps-Funktion ist unser berechtigtes Interesse unseren Nutzer*innen die Anfahrtsmöglichkeiten aufzuzeigen und dadurch unseren Service angenehmer zu gestalten, Art. 6 Abs. 1 S. 1 lit. f DSGVO.',
				},
			],
		},
		{
			title: '8. Social Bookmarks',
			content: [
				{
					type: 'paragraph',
					text:
						'Auf unseren Webseiten bieten wir Ihnen die Möglichkeit, die jeweilige aktuelle Seite in sogenannten Sozialen Netzwerken (Facebook, Instagram, YouTube) aufzurufen. Diese sind auf unserer Webseite lediglich als externer Link zu den entsprechenden Diensten eingebunden. Nach dem Anklicken der eingebundenen Grafik werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet, d.h. erst dann werden Nutzerinformationen an den jeweiligen Anbieter übertragen. Sofern Sie nicht möchten, dass die genannten Sozialen Netzwerke Daten erhalten, klicken Sie die Grafiken bitte nicht an.',
				},
				{
					type: 'paragraph',
					text: 'Rechtsgrundlage für die Nutzung ist unser berechtigtes Interesse daran, unser Angebot zu optimieren und zu fördern, Art. 6 Abs. 1 lit. f DSGVO. Informationen zum Umgang mit Ihren personenbezogenen Daten durch die Sozialen Netzwerke entnehmen Sie bitte den jeweiligen Datenschutzbestimmungen der Anbieter:',
				},
				{
					type: 'list',
					style: 'unordered',
					items: ['Facebook: https://de-de.facebook.com/policy.php', 'Instagram: https://help.instagram.com/519522125107875', 'YouTube: https://policies.google.com/privacy?hl=de&gl=de'],
				},
			],
		},
		{
			title: '9. Ihre Rechte',
			content: [
				{
					type: 'paragraph',
					text: 'Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
				},
				{
					type: 'paragraph',
					text: 'Allgemeine Rechte',
				},
				{
					type: 'paragraph',
					text: 'Sie haben ein Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und auf Datenübertragbarkeit. Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, haben Sie das Recht, diese uns gegenüber mit Wirkung für die Zukunft zu widerrufen.',
				},
				{
					type: 'paragraph',
					text: 'Rechte bei der Datenverarbeitung nach dem berechtigten Interesse',
				},
				{
					type: 'paragraph',
					text:
						'Sie haben gem. Art. 21 Abs.1 DSGVO das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs.1 e DSGVO (Datenverarbeitung im öffentlichen Interesse) oder aufgrund Artikel 6 Abs.1 f DSGVO (Datenverarbeitung zur Wahrung eines berechtigten Interesses) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Vorschrift gestütztes Profiling. Im Falle Ihres Widerspruchs verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.',
				},
				{
					type: 'paragraph',
					text: 'Rechte bei Direktwerbung',
				},
				{
					type: 'paragraph',
					text:
						'Sofern wir Ihre personenbezogenen Daten verarbeiten, um Direktwerbung zu betreiben, so haben Sie gem. Art. 21 Abs. 2 DSGVO das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen, dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Im Falle Ihres Widerspruchs gegen die Verarbeitung zum Zwecke der Direktwerbung werden wir Ihre personenbezogenen Daten nicht mehr für diese Zwecke verarbeiten.',
				},
				{
					type: 'paragraph',
					text: 'Recht auf Beschwerde bei einer Aufsichtsbehörde',
				},
				{
					type: 'paragraph',
					text: 'Sie haben zudem das Recht, sich bei einer zuständigen Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Bei Fragen rund um das Thema Datenschutz und die Verarbeitung Ihrer personenbezogenen Daten, wenden Sie sich an unsere Datenschutzbeauftragte (Kontakt siehe oben). Diese steht Ihnen auch gerne bei Anträgen, Auskunftsersuchen, Anregungen oder Beschwerden zur Verfügung.',
				},
				{
					type: 'paragraph',
					text: 'Stand Januar 2019',
				},
			],
		},
	];
	return (
		<div className="pt-[150px] md:pt-50px md:px-[50px] ">
			{datenschutzData.map((section, index) => (
				<div
					key={index}
					style={{
						backgroundImage: `url(${backgrounds[index % 6]})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% auto',
						backgroundPosition: 'center top',
					}}
					className="">
					<h2 className={index === 0 ? 'text-[25px] font-bold text-left p-4' : 'text-[25px] font-bold text-left p-4'}>{section.title}</h2>
					<div className="p-2">
						{section.content.map((item, itemIndex) => (
							<div key={itemIndex}>
								{item.type === 'paragraph' && (
									<p className=" text-[12px] md:text-[25px] p-2">
										{item.text.split(' ').map((word, wordIndex) => {
											if (word.startsWith('http') || word.startsWith('www.') || word.includes('@')) {
												if (word.startsWith('www.')) {
													return (
														<a key={wordIndex} href={`http://${word}`} target="_blank" rel="noopener noreferrer" className="underline text-[#EA5B35] hover:text-[#EA5B35]">
															{word}
														</a>
													);
												} else {
													return (
														<a key={wordIndex} href={word} target="_blank" rel="noopener noreferrer" className="underline text-[#EA5B35] hover:text-[#EA5B35]">
															{word}
														</a>
													);
												}
											} else {
												return word + ' ';
											}
										})}
									</p>
								)}
								{item.type === 'unorderedList' && (
									<ul className="list-disc">
										{item.items?.map((listItem, listItemIndex) => (
											<li key={listItemIndex} className="text-[12px] md:text-[25px]">
												{listItem}
											</li>
										))}
									</ul>
								)}
								{item.type === 'list' && (
									<ul className="p-2">
										{item.items &&
											item.items.map((listItem, listItemIndex) => (
												<li key={listItemIndex} className="text-[12px] md:text-[25px]">
													{typeof listItem === 'string'
														? listItem.split(' ').map((word, wordIndex) => {
																if (word.startsWith('http') || word.startsWith('www.') || word.includes('@')) {
																	if (word.startsWith('www.')) {
																		return (
																			<a key={wordIndex} href={`http://${word}`} target="_blank" rel="noopener noreferrer" className="underline text-[#EA5B35] hover:text-[#EA5B35]">
																				{word}
																			</a>
																		);
																	} else {
																		return (
																			<a key={wordIndex} href={word} target="_blank" rel="noopener noreferrer" className="underline text-[#EA5B35] hover:text-[#EA5B35]">
																				{word}
																			</a>
																		);
																	}
																} else {
																	return word + ' ';
																}
														  })
														: listItem}
												</li>
											))}
									</ul>
								)}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default DatenschutzData;
