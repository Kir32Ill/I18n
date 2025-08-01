/* eslint-disable formatjs/enforce-default-message */
import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { Layout } from "@/components";
import {
    ClockIcon,
    GamepadIcon,
    MagnifierIcon,
    MessageIcon,
    PaperNoteIcon,
    WindowIcon,
} from "@/icons";

import styles from "./styles.module.css";

export const ArticleRtlIcons: FC = () => (
    <Layout>
        <main className={styles.article}>
            <h1>
                <FormattedMessage id="articleRtlIcons.title" values={{ br: <br key="br" /> }} />
            </h1>

            <p>
                <FormattedMessage
                    id="articleRtlIcons.intro"
                    defaultMessage="When adapting interfaces for right-to-left (RTL) languages, it's important to consider not only layout and text but also visual elements. Many icons require mirroring, while others should remain in their original form. Incorrect display can make the interface less intuitive and confuse users."
                />
            </p>

            <section className={styles.section}>
                <h2>
                    <FormattedMessage
                        id="articleRtlIcons.whyImportant.title"
                        defaultMessage="Why is it important to flip icons in RTL?"
                    />
                </h2>

                <p>
                    <FormattedMessage
                        id="articleRtlIcons.whyImportant.text"
                        defaultMessage="In RTL interfaces, not only the text direction changes, but also the interaction logic. Icons with clear directionality should reflect this change to maintain a natural perception flow and meet user expectations."
                    />
                </p>
            </section>

            <section className={styles.section}>
                <h2>
                    <FormattedMessage
                        id="articleRtlIcons.flipIcons.title"
                        defaultMessage="Icons that should be flipped"
                    />
                </h2>

                <p>
                    <FormattedMessage
                        id="articleRtlIcons.flipIcons.text"
                        defaultMessage="Flip icons that have a clear direction or asymmetric shape (except for examples we'll discuss later in the article). For example, a notes icon with clear text direction, an asymmetric application window UI icon, or a message icon. Examples of such icons:"
                    />
                </p>

                <div className={(styles.icons)} data-testid="rtl-icons">
                    <PaperNoteIcon />
                    <MessageIcon />
                    <WindowIcon />
                </div>
            </section>

            <section className={styles.section}>
                <h2>
                    <FormattedMessage
                        id="articleRtlIcons.dontFlipIcons.title"
                        defaultMessage="Icons that should not be flipped"
                    />
                </h2>

                <p>
                    <FormattedMessage
                        id="articleRtlIcons.dontFlipIcons.text"
                        defaultMessage="You don't need to flip symmetrical icons. Icons that are logos or represent a brand should also not be mirrored — they should remain recognizable. Pay special attention to elements that follow the 'right-hand rule' — if an icon is intuitively associated with a right-hand action (like holding an object), its orientation should be preserved regardless of writing direction. Examples of such icons:"
                    />
                </p>

                <div className={styles.icons} data-testid="not-rtl-icons">
                    <GamepadIcon />
                    <MagnifierIcon />
                    <ClockIcon />
                </div>
            </section>

            <section className={styles.section}>
                <h2>
                    <FormattedMessage
                        id="articleRtlIcons.conclusion.title"
                        defaultMessage="Conclusion"
                    />
                </h2>

                <p>
                    <FormattedMessage
                        id="articleRtlIcons.conclusion.text1"
                        defaultMessage="Proper handling of icons in RTL interfaces is an important part of localization. This is not just a technical detail, but a way to make the interface truly convenient for users with different cultural characteristics."
                    />
                </p>

                <p>
                        <FormattedMessage
                            id="articleRtlIcons.conclusion.text2"
                            defaultMessage="<strong>Recommendation:</strong> Develop internal standards for designers and developers to ensure a consistent approach to working with icons in all product localizations."
                            values={{
            strong: (chunks) => <strong>{chunks}</strong>
        }}
                        />
                    
                </p>
            </section>
        </main>
    </Layout>
);