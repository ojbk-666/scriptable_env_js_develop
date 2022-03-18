class Alert {
    title: string;
    message: string;

    addAction(title: string);

    addDestructiveAction(title: string);

    addCancelAction(title: string);

    addTextField(placeholder: string, text: string): TextField;

    addSecureTextField(placeholder: string, text: string): TextField;

    textFieldValue(index: number): string;

    present(): Promise<number>;

    presentAlert(): Promise<number>;

    presentSheet(): Promise<number>;
}

class args {
    length: number;
    all: [any];
    plainTexts: [string];
    urls: [string];
    fileURLs: [string];
    images: [Image];
    queryParameters: { string: string };
    siriShortcutArguments: { string: string };
    shortcutParameter: any;
    widgetParameter: any;
    notification: Notification;
}

class Calendar {
    identifier: string;
    title: string;
    isSubscribed: boolean
    allowsContentModifications: boolean
    color: Color

    supportsAvailability(availability: string): boolean;

    save();

    remove();

    static forReminders(): Promise<[Calendar]>;

    static forEvents(): Promise<[Calendar]>;

    static forRemindersByTitle(title: string): Promise<Calendar>;

    static forEventsByTitle(title: string): Promise<Calendar>;

    static createForReminders(title: string): Promise<Calendar>;

    static findOrCreateForReminders(title: string): Promise<Calendar>;

    static defaultForReminders(): Promise<Calendar>;

    static defaultForEvents(): Promise<Calendar>;

    static presentPicker(allowMultiple: bool): Promise<[Calendar]>;
}

class CalendarEvent {
    identifier: string;
    title: string;
    location: string;
    notes: string;
    startDate: Date;
    endDate: Date
    isAllDay: boolean;
    // {
    //   "isCurrentUser": false,
    //   "name": "John Appleseed",
    //   "status": "accepted",
    //   "type": "person",
    //   "role": "required"
    // }
    attendees: [any]
    availability: string;
    timeZone: string;
    calendar: Calendar;

    constructor(): CalendarEvent;

    addRecurrenceRule(recurrenceRule: RecurrenceRule);

    removeAllRecurrenceRules();

    save();

    remove();

    presentEdit(): Promise<CalendarEvent>;

    static presentCreate(): Promise<CalendarEvent>;

    static today(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static tomorrow(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static yesterday(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static thisWeek(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static nextWeek(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static lastWeek(calendars: [Calendar]): Promise<[CalendarEvent]>;

    static between(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[CalendarEvent]>;
}

class CallbackURL {
    constructor(baseURL: string): CallbackURL;

    addParameter(name: string, value: string);

    open(): Promise<{ string: string }>;

    getURL(): string;
}

class Color {
    constructor(hex: string, alpha: number): Color;

    constructor(hex: string): Color;

    static black(): Color;

    static darkGray(): Color;

    static lightGray(): Color;

    static white(): Color;

    static gray(): Color;

    static red(): Color;

    static green(): Color;

    static blue(): Color;

    static cyan(): Color;

    static yellow(): Color;

    static magenta(): Color;

    static orange(): Color;

    static purple(): Color;

    static brown(): Color;

    static clear(): Color;

    static dynamic(lightColor: Color, darkColor: Color): Color;
}

class config {
    runsInApp: boolean;
    runsInActionExtension: boolean;
    runsWithSiri: boolean;
    runsInWidget: boolean;
    runsInNotification: boolean;
    runsFromHomeScreen: boolean;
    widgetFamily: string;
}

class console {
    static log(message: any);

    static warn(message: any);

    static error(message: any);

    static logError(message: any);
}

class Contact {
    identifier: string;
    namePrefix: string;
    givenName: string;
    middleName: string;
    familyName: string;
    nickname: string;
    birthday: Date;
    image: Image;
    emailAddresses: [{ string: string }];
    phoneNumbers: [{ string: string }];
    postalAddresses: [{ string: string }];
    socialProfiles: [{ string: string }];
    note: string;
    urlAddresses: [{ string: string }];
    dates: [{ string: any }];
    organizationName: string;
    departmentName: string;
    jobTitle: string;
    isNamePrefixAvailable: bool;
    isGiveNameAvailable: bool;
    isMiddleNameAvailable: bool;
    isFamilyNameAvailable: bool;
    isNicknameAvailable: bool;
    isBirthdayAvailable: bool;
    isEmailAddressesAvailable: bool;
    isPhoneNumbersAvailable: bool;
    isPostalAddressesAvailable: bool;
    isSocialProfilesAvailable: bool;
    isImageAvailable: bool;
    isNoteAvailable: bool;
    isURLAddressesAvailable: bool;
    isOrganizationNameAvailable: bool;
    isDepartmentNameAvailable: bool;
    isJobTitleAvailable: bool;
    isDatesAvailable: bool;

    constructor(): Contact;

    static all(containers: [ContactsContainer]): Promise<[Contact]>;

    static inGroups(groups: [ContactsGroup]): Promise<[Contact]>;

    static add(contact: Contact, containerIdentifier: string);

    static update(contact: Contact);

    static delete(contact: Contact);

    static persistChanges(): Promise;
}

class ContactsContainer {
    identifier: string;
    name: string;

    static default(): Promise<ContactsContainer>;

    static all(): Promise<[ContactsContainer]>;

    static withIdentifier(identifier: string): Promise<ContactsContainer>;
}

class ContactsGroup {
    identifier: string;
    name: string;

    constructor(): ContactsGroup;

    static all(containers: [ContactsContainer]): Promise<[ContactsGroup]>;

    addMember(contact: Contact);

    removeMember(contact: Contact);

    static add(group: ContactsGroup, containerIdentifier: string);

    static update(group: ContactsGroup);

    static delete(group: ContactsGroup);
}

class Data {
    static fromString(string: string): Data;

    static fromFile(filePath: string): Data;

    static fromBase64String(base64String: string): Data;

    static fromJPEG(image: Image): Data;

    static fromPNG(image: Image): Data;

    toRawString(): string;

    toBase64String(): string;

    getBytes(): [number];
}

class DateFormatter {
    dateFormat: string;
    locale: string;

    constructor(): DateFormatter;

    string(date: Date): string;

    date(str: string): Date;

    useNoDateStyle();

    useShortDateStyle();

    useMediumDateStyle();

    useLongDateStyle();

    useFullDateStyle();

    useNoTimeStyle();

    useShortTimeStyle();

    useMediumTimeStyle();

    useLongTimeStyle();

    useFullTimeStyle();
}

class DatePicker {
    minimumDate: Date;
    maximumDate: Date;
    countdownDuration: number;
    minuteInterval: number;
    initialDate: Date;

    constructor(): DatePicker;

    pickTime(): Promise<Date>;

    pickDate(): Promise<Date>;

    pickDateAndTime(): Promise<Date>;

    pickCountdownDuration(): Promise<number>;
}

class Device {
    static name(): string;

    static systemName(): string;

    static systemVersion(): string;

    static model(): string;

    static isPhone(): boolean;

    static isPad(): boolean;

    static screenSize(): Size;

    static screenResolution(): Size;

    static screenScale(): number;

    static screenBrightness(): number;

    static isInPortrait(): boolean;

    static isInPortraitUpsideDown(): boolean;

    static isInLandscapeLeft(): boolean;

    static isInLandscapeRight(): boolean;

    static isFaceUp(): boolean;

    static isFaceDown(): boolean;

    static batteryLevel(): number;

    static isDischarging(): boolean;

    static isFullyCharged(): boolean;

    static preferredLanguages(): [string];

    static locale(): string;

    static isUsingDarkAppearance(): boolean;

    static volume(): number;

    static setScreenBrightness(percentage: number);
}

class Dictation {
    static start(locale: string): Promise<string>;
}

class DocumentPicker {
    static open(types: [string]): Promise<[string]>;

    static openFile(): Promise<string>;

    static openFolder(): Promise<string>;

    static export(path: string): Promise<[string]>;

    static exportString(content: string, name: string): Promise<[string]>;

    static exportImage(image: Image, name: string): Promise<[string]>;

    static exportData(data: Data, name: string): Promise<[string]>;
}

/**
 * 绘制图像的上下文。DrawContext 的一个实例是一个画布，您可以在其上使用形状、文本和其他图像绘制图像。您必须通过设置 size 属性来指定画布的大小。在开始绘图之后和结束绘图之前的任何时候，您都可以调用 getImage() 来获取绘图的图像对象。
 */
class DrawContext {
    // 画布大小
    size: Size;
    respectScreenScale: boolean;
    // 确定上下文是否不透明 启用后，您的图像将呈现不透明。默认为真
    opaque: boolean;

    constructor(): DrawContext;

    getImage(): Image;

    // 在指定的矩形中绘制图像 在矩形中绘制图像。图像将被缩放以适应矩形
    drawImageInRect(image: Image, rect: Rect);

    // 在指定点绘制图像
    drawImageAtPoint(image: Image, point: Point);

    // 设置填充颜色 设置执行填充操作时要使用的填充颜色。之后执行的任何填充操作都将填充指定的颜色，直到再次调用 setFillColor
    setFillColor(color: Color);

    // 设置描边颜色 设置执行笔划操作时要使用的笔划颜色。之后执行的任何笔划操作都将使用指定的颜色进行笔划，直到再次调用 setStrokeColor
    setStrokeColor(color: Color);

    // 设置描边的线宽
    setLineWidth(width: number);

    // 填充一个矩形 调用 setFillColor 时用设置的颜色填充矩形
    fill(rect: Rect);

    // 填充一个矩形
    fillRect(rect: Rect);

    // 填充椭圆
    fillEllipse(rect: Rect);

    // 描边一个矩形
    stroke(rect: Rect);

    // 描边一个矩形
    strokeRect(rect: Rect);

    // 画一个椭圆
    strokeEllipse(rect: Rect);

    // 向上下文添加路径
    addPath(path: Path);

    // 描边最新添加的路径
    strokePath();

    // 填充最新添加的路径
    fillPath();

    // 在某个位置绘制文本
    drawText(text: string, pos: Point);

    // 在矩形中绘制文本
    drawTextInRect(text: string, rect: Rect);

    // 设置绘制文本时使用的字体大小
    setFontSize(size: number);

    setFont(font: Font);

    setTextColor(color: Color);

    // 指定文本应左对齐
    setTextAlignedLeft();

    setTextAlignedCenter();

    setTextAlignedRight();
}

class FileManager {
    static local(): FileManager;

    static iCloud(): FileManager;

    read(filePath: string): Data;

    readString(filePath: string): string;

    readImage(filePath: string): Image;

    write(filePath: string, content: Data);

    writeString(filePath: string, content: string);

    writeImage(filePath: string, image: Image);

    remove(filePath: string);

    move(sourceFilePath: string, destinationFilePath: string);

    copy(sourceFilePath: string, destinationFilePath: string);

    fileExists(filePath: string): boolean;

    isDirectory(path: string): boolean;

    createDirectory(path: string, intermediateDirectories: boolean);

    temporaryDirectory(): string;

    cacheDirectory(): string;

    documentsDirectory(): string;

    libraryDirectory(): string;

    joinPath(lhsPath: string, rhsPath: string): string;

    allTags(filePath: string): [string];

    addTag(filePath: string, tag: string);

    removeTag(filePath: string, tag: string);

    readExtendedAttribute(filePath: string, name: string): string;

    writeExtendedAttribute(filePath: string, value: string, name: string);

    removeExtendedAttribute(filePath: string, name: string);

    allExtendedAttributes(filePath: string): [string];

    getUTI(filePath: string): string;

    listContents(directoryPath: string): [string];

    fileName(filePath: string, includeFileExtension: bool): string;

    fileExtension(filePath: string): string;

    bookmarkedPath(name: string): string;

    bookmarkExists(name: string): boolean;

    downloadFileFromiCloud(filePath: string): Promise;

    isFileStoredIniCloud(filePath: string): boolean;

    isFileDownloaded(filePath: string): boolean;

    creationDate(filePath: string): Date;

    modificationDate(filePath: string): Date;

    fileSize(filePath: string): number;

    allFileBookmarks(): [{ string: string }];
}

class Font {
    constructor(name: string, size: number): Font;

    static largeTitle(): Font;

    static title1(): Font;

    static title2(): Font;

    static title3(): Font;

    static headline(): Font;

    static subheadline(): Font;

    static body(): Font;

    static callout(): Font;

    static footnote(): Font;

    static caption1(): Font;

    static caption2(): Font;

    // 创建系统字体
    static systemFont(size: number): Font;

    // 创建超轻系统字体
    static ultraLightSystemFont(size: number): Font;

    //创建细系统字体
    static thinSystemFont(size: number): Font;

    // 创建灯光系统字体
    static lightSystemFont(size: number): Font;

    // 创建常规系统字体
    static regularSystemFont(size: number): Font;

    // 创建中等系统字体
    static mediumSystemFont(size: number): Font;

    // 创建半粗体系统字体
    static semiboldSystemFont(size: number): Font;

    // 创建粗体系统字体
    static boldSystemFont(size: number): Font;

    // 创建一个沉重的系统字体
    static heavySystemFont(size: number): Font;

    // 使用黑色粗细创建具有系统外观的字体
    static blackSystemFont(size: number): Font;

    // 创建斜体系统字体
    static italicSystemFont(size: number): Font;

    // 创建超轻等宽系统字体
    static ultraLightMonospacedSystemFont(size: number): Font;

    // 创建细等宽系统字体
    static thinMonospacedSystemFont(size: number): Font;

    // 创建浅色等宽系统字体
    static lightMonospacedSystemFont(size: number): Font;

    // 创建常规等宽系统字体
    static regularMonospacedSystemFont(size: number): Font;

    // 创建中等等宽系统字体
    static mediumMonospacedSystemFont(size: number): Font;

    // 创建半粗体等宽系统字体
    static semiboldMonospacedSystemFont(size: number): Font;

    // 创建一个粗体等宽系统字体
    static boldMonospacedSystemFont(size: number): Font;

    // 创建重等宽系统字体
    static heavyMonospacedSystemFont(size: number): Font;

    // 创建具有黑色粗细的等宽系统字体
    static blackMonospacedSystemFont(size: number): Font;

    // 创建超轻且圆润的系统字体
    static ultraLightRoundedSystemFont(size: number): Font;

    // 创建细而圆的系统字体
    static thinRoundedSystemFont(size: number): Font;

    // 创建一种轻巧圆润的系统字体
    static lightRoundedSystemFont(size: number): Font;

    // 创建规则和圆角系统字体
    static regularRoundedSystemFont(size: number): Font;

    // 创建中等圆角系统字体
    static mediumRoundedSystemFont(size: number): Font;

    // 创建半粗体和圆角系统字体
    static semiboldRoundedSystemFont(size: number): Font;

    // 创建粗体和圆角系统字体
    static boldRoundedSystemFont(size: number): Font;

    // 创建一个沉重而圆润的系统字体
    static heavyRoundedSystemFont(size: number): Font;

    // 创建带有黑色粗细的圆形系统字体
    static blackRoundedSystemFont(size: number): Font;
}

class Image {
    size: Size;

    // 从指定的文件路径加载图像。如果无法读取图像，该函数将返回 null
    static fromFile(filePath: string): Image;

    // 从原始数据创建图像
    static fromData(data: Data): Image;
}

function importModule(name: string) {
}

class Keychain {
    static contains(key: string): boolean;

    static set(key: string, value: string);

    static get(key: string): string;

    static remove(key: string);
}

class LinearGradient {
    constructor(): LinearGradient;

    colors: [Color];
    locations: [number];
    startPoint: Point;
    endPoint: Point;
}

/**
 * 显示元素列表的小部件。
 显示元素列表的小部件。将小部件传递给 Script.setWidget() 将其显示在您的主屏幕上。
 请注意，小部件会定期刷新，并且小部件刷新的速率很大程度上取决于操作系统。
 另请注意，在小部件中运行脚本时存在内存限制。当使用太多内存时，小部件将崩溃并且无法正确呈现。
 */
class ListWidget {
    backgroundColor: Color;
    backgroundImage: Image;
    // 背景渐变
    backgroundGradient: LinearGradient;
    spacing: number;
    // 点击小部件时将打开 URL。这将覆盖小部件配置中定义的任何行为。例如，如果小部件配置为在与小部件交互时运行脚本但设置了 URL，则 URL 将优先。
    url: string;
    // 刷新小部件的最早日期。该属性指示何时可以再次刷新小部件。在到达日期之前不会刷新小部件。不能保证小部件会在指定的日期刷新。小部件的刷新率部分取决于 iOS/iPadOS。例如，如果设备电量不足或用户很少查看小部件，小部件可能不会刷新。
    refreshAfterDate: Date;

    constructor(): ListWidget;

    addText(text: string): WidgetText;

    addDate(date: Date): WidgetDate;

    addImage(image: Image): WidgetImage;

    addSpacer(length: number): WidgetSpacer;

    // 添加堆栈
    addStack(): WidgetStack;

    // 设置小组件每一侧的填充
    setPadding(top: number, leading: number, bottom: number, trailing: number);

    useDefaultPadding();

    // 预览小组件
    presentSmall(): Promise;

    // 预览中组件
    presentMedium(): Promise;

    // 预览大组件
    presentLarge(): Promise;

    // 预览超大组件
    presentExtraLarge(): Promise;
}

class Location {
    static current(): Promise<{ string: number }>;

    static setAccuracyToBest();

    static setAccuracyToTenMeters();

    static setAccuracyToHundredMeters();

    static setAccuracyToKilometer();

    static setAccuracyToThreeKilometers();

    static reverseGeocode(latitude: number, longitude: number, locale: string): [{ string: any }];
}

class Mail {
    toRecipients: [string];
    ccRecipients: [string];
    bccRecipients: [string];
    subject: string;
    body: string;
    isBodyHTML: boolean;
    preferredSendingEmailAddress: string;

    constructor(): Mail;

    send(): Promise;

    addImageAttachment(image: Image);

    addFileAttachment(filePath: string);

    addDataAttachment(data: Data, mimeType: string, filename: string);
}

class Message {
    recipients: [string];
    body: string;

    constructor(): Message;

    send(): Promise;

    addImageAttachment(image: Image);

    addFileAttachment(filePath: string);

    addDataAttachment(data: Data, uti: string, filename: string);

}

class Notification {
    identifier: string;
    title: string;
    subtitle: string;
    body: string;
    preferredContentHeight: number;
    badge: number;
    threadIdentifier: string;
    userInfo: { string: any };
    sound: string;
    openURL: string;
    deliveryDate: Date
    nextTriggerDate: Date;
    scriptName: string;
    actions: { string: string };

    static current(): Notification;

    constructor(): Notification;

    schedule(): Promise;

    remove(): Promise;

    setTriggerDate(date: Date);

    setDailyTrigger(hour: number, minute: number, repeats: boolean);

    setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats: boolean);

    addAction(title: string, url: string, destructive: boolean);

    static allPending(): Promise<[Notification]>;

    static allDelivered(): Promise<[Notification]>;

    static removeAllPending(): Promise;

    static removeAllDelivered(): Promise;

    static removePending(identifiers: [string]): Promise;

    static removeDelivered(identifiers: [string]): Promise;

    static resetCurrent();

}

class Pasteboard {
    static copy(string: string);

    static paste(): string;

    static copyString(string: string);

    static pasteString(): string;

    static copyImage(image: Image);

    static pasteImage(): Image;
}

class Path {
    constructor(props): Path;

    move(point: Point);

    addLine(point: Point);

    addRect(rect: Rect);

    addEllipse(rect: Rect);

    addRoundedRect(rect: Rect, cornerWidth: number, cornerHeight: number);

    addCurve(point: Point, control1: Point, control2: Point);

    addQuadCurve(point: Point, control: Point);

    addLines(points: [Point]);

    addRects(rects: [Rect]);

    closeSubpath();
}

class Photos {
    static fromLibrary(): Promise<Image>;

    static fromCamera(): Promise<Image>;

    static latestPhoto(): Promise<Image>;

    static latestPhotos(count: number): Promise<[Image]>;

    static latestScreenshot(): Promise<Image>;

    static latestScreenshots(count: number): Promise<[Image]>;

    static removeLatestPhoto();

    static removeLatestPhotos(count: number);

    static removeLatestScreenshot();

    static removeLatestScreenshots(count: number);

    static save(image: Image);
}

class Point {
    x: number;
    y: number;

    constructor(x: number, y: number): Point;
}

class QuickLook {
    static present(item: any, fullscreen: boolean): Promise;
}

class Rect {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    x: number;
    y: number;
    width: number;
    height: number;
    origin: Point;
    size: Size;

    constructor(x: number, y: number, width: number, height: number): Rect;

}

class RecurrenceRule {
    static daily(interval: number): RecurrenceRule;

    static dailyEndDate(interval: number, endDate: Date): RecurrenceRule;

    static dailyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    static weekly(interval: number): RecurrenceRule;

    static weeklyEndDate(interval: number, endDate: Date): RecurrenceRule;

    static weeklyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    static monthly(interval: number): RecurrenceRule;

    static monthlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    static monthlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    static yearly(interval: number): RecurrenceRule;

    static yearlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    static yearlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    static complexWeekly(interval: number, daysOfTheWeek: [number], setPositions: [number]): RecurrenceRule;

    static complexWeeklyEndDate(interval: number, daysOfTheWeek: [number], setPositions: [number], endDate: Date): RecurrenceRule;

    static complexWeeklyOccurrenceCount(interval: number, daysOfTheWeek: [number], setPositions: [number], occurrenceCount: number): RecurrenceRule;

    static complexMonthly(interval: number, daysOfTheWeek: [number], daysOfTheMonth: [number], setPositions: [number]): RecurrenceRule;

    static complexMonthlyEndDate(interval: number, daysOfTheWeek: [number], daysOfTheMonth: [number], setPositions: [number], endDate: Date): RecurrenceRule;

    static complexMonthlyOccurrenceCount(interval: number, daysOfTheWeek: [number], daysOfTheMonth: [number], setPositions: [number], occurrenceCount: number): RecurrenceRule;

    static complexYearly(interval: number, daysOfTheWeek: [number], monthsOfTheYear: [number], weeksOfTheYear: [number], daysOfTheYear: [number], setPositions: [number]): RecurrenceRule;

    static complexYearlyEndDate(interval: number, daysOfTheWeek: [number], monthsOfTheYear: [number], weeksOfTheYear: [number], daysOfTheYear: [number], setPositions: [number], endDate: Date): RecurrenceRule;

    static complexYearlyOccurrenceCount(interval: number, daysOfTheWeek: [number], monthsOfTheYear: [number], weeksOfTheYear: [number], daysOfTheYear: [number], setPositions: [number], occurrenceCount: number): RecurrenceRule;

}

class RelativeDateTimeFormatter {
    locale: string;

    constructor(): RelativeDateTimeFormatter;

    string(date: Date, referenceDate: Date): string;

    useNamedDateTimeStyle();

    useNumericDateTimeStyle();
}

class Reminder {
    identifier: string;
    title: string;
    notes: string;
    isCompleted: boolean;
    isOverdue: boolean;
    priority: number;
    dueDate: Date;
    dueDateIncludesTime: boolean;
    completionDate: Date;
    creationDate: Date;
    calendar: Calendar;

    constructor(): Reminder;

    addRecurrenceRule(recurrenceRule: RecurrenceRule);

    removeAllRecurrenceRules();

    save();

    remove();

    static scheduled(calendars: [Calendar]): Promise<[Reminder]>;

    static all(calendars: [Calendar]): Promise<[Reminder]>;

    static allCompleted(calendars: [Calendar]): Promise<[Reminder]>;

    static allIncomplete(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueToday(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueToday(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueToday(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueTomorrow(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueTomorrow(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueTomorrow(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueYesterday(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueYesterday(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueYesterday(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueThisWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueThisWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueThisWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueNextWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueNextWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueNextWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueLastWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueLastWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueLastWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static completedToday(calendars: [Calendar]): Promise<[Reminder]>;

    static completedThisWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static completedLastWeek(calendars: [Calendar]): Promise<[Reminder]>;

    static allDueBetween(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[Reminder]>;

    static completedDueBetween(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[Reminder]>;

    static incompleteDueBetween(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[Reminder]>;

    static completedBetween(startDate: Date, endDate: Date, calendars: [Calendar]): Promise<[Reminder]>;
}

class Request {
    url: string;
    method: string;
    headers: { string: string };
    body: any;
    timeoutInterval: number;
    // onRedirect: fn(Request) -> Request;
    response: { string: any };
    allowInsecureRequest: boolean;

    constructor(url: string): Request;

    load(): Promise<Data>;

    loadString(): Promise<string>;

    loadJSON(): Promise<any>;

    loadImage(): Promise<Image>;

    addParameterToMultipart(name: string, value: string);

    addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string);

    addFileToMultipart(filePath: string, name: string, filename: string);

    addImageToMultipart(image: Image, name: string, filename: string);
}

class Safari {
    static openInApp(url: string, fullscreen: boolean): Promise;

    static open(url: string);
}

class Script {
    static name(): string;

    static complete();

    static setShortcutOutput(value: any);

    static setWidget(widget: any);
}

class SFSymbol {
    image: Image;

    static named(symbolName: string): SFSymbol;

    applyFont(font: Font);

    applyUltraLightWeight();

    applyThinWeight();

    applyLightWeight();

    applyRegularWeight();

    applyMediumWeight();

    applySemiboldWeight();

    applyBoldWeight();

    applyHeavyWeight();

    applyBlackWeight();
}

class ShareSheet {
    static present(activityItems: [any]): Promise<{ string: any }>;
}

class Size {
    width: number;
    height: number;

    constructor(width: number, height: number): Size;
}

class Speech {
    static speak(text: string);
}

class TextField {
    text: string;
    placeholder: string;
    isSecure: boolean;
    textColor: Color;
    font: Font;

    setDefaultKeyboard();

    setNumberPadKeyboard();

    setDecimalPadKeyboard();

    setNumbersAndPunctuationKeyboard();

    setPhonePadKeyboard();

    setWebSearchKeyboard();

    setEmailAddressKeyboard();

    setURLKeyboard();

    setTwitterKeyboard();

    leftAlignText();

    centerAlignText();

    rightAlignText();
}

class URLScheme {
    static allParameters(): { string: string };

    static parameter(name: string): string;

    static forOpeningScript(): string;

    static forOpeningScriptSettings(): string;

    static forRunningScript(): string;
}

class Timer {
    timeInterval: number;
    repeats: boolean;

    constructor(): Timer;

    schedule(callback: Function);

    invalidate();

    static schedule(timeInterval: number, repeats: boolean, callback: Function): Timer;
}

/**
 * 呈现一个表。表格以结构化的方式呈现数据。表格包含行，而行又包含单元格。
 */
class UITable {
    // 是否在行之间显示分隔符。默认为假。
    showSeparators: boolean;

    constructor(): UITable;

    // 向表中添加一行。行在表格视图中垂直显示，即从上到下。行按照添加的顺序呈现。
    addRow(row: UITableRow);

    // 从表中删除一行。
    removeRow(row: UITableRow);

    // 删除所有行。
    removeAllRows();

    reload();

    present(fullscreen: boolean): Promise;
}

/**
 * 单元格在 UITableRow 中水平显示，而 UITableRow 又在 UITable 中垂直显示。单元格具有内容，例如文本或图像
 */
class UITableCell {
    widthWeight: number;
    // 点击按钮时调用
    onTap: Function;
    // 点击按钮时是否关闭表格。默认为假。
    dismissOnTap: boolean;
    // 标题的颜色。这仅对带有标题的单元格有效。默认情况下，颜色为空，在这种情况下，会根据应用程序的主题和脚本运行的上下文自动选择合适的颜色。
    titleColor: Color;
    subtitleColor: Color;
    titleFont: Font;
    subtitleFont: Font;

    // 构造一个包含文本的新单元格
    static text(title: string, subtitle: string): UITableCell;

    // 构造一个包含图像的新单元格。
    static image(image: Image): UITableCell;

    // 构造一个在指定 URL 处加载图像的新单元格
    static imageAtURL(url: string): UITableCell;

    // 构造一个包含按钮的新单元格。设置onTap属性以指定在点击按钮时要执行的操作。
    static button(title: string): UITableCell;

    // 指定单元格中的内容应左对齐
    leftAligned();

    // 指定单元格中的内容应该居中对齐。
    centerAligned();

    // 指定单元格中的内容应右对齐。
    rightAligned();
}

/**
 * UITable 中的行。

 可以将行添加到 UITable 的实例中。一行在 UITable 中按照添加到表中的顺序垂直显示。行包含按添加到行的顺序水平显示的单元格。
 */
class UITableRow {
    // 指定行中单元格之间的水平间距。
    cellSpacing: number;
    // 行的高度默认为 44。
    height: number;
    // 标题是突出显示的单元格，可帮助用户理解上下文。默认为假。
    isHeader: boolean;
    // 选择行时是否关闭表格。onSelect只有当行是可选择的，即有一个值时，这个属性才会起作用。否则将被忽略。
    dismissOnSelect: boolean;
    // 在显示表格时选择行时调用。如果这没有值，则无法选择该行。默认为空。
    onSelect: Function;
    backgroundColor: Color;

    constructor(): UITableRow;

    // 在行中添加一个单元格。请注意，单元格按照它们添加到行的顺序显示。
    addCell(cell: UITableCell);

    // 构造一个包含指定字符串的新单元格并将其添加到行中。
    addText(title: string, subtitle: string): UITableCell;

    // 构造一个包含指定图像的新单元格并将其添加到行中。
    addImage(image: Image): UITableCell;

    // 构造一个新单元格，该单元格在指定的 url 处加载图像并将该单元格添加到行中
    addImageAtURL(url: string): UITableCell;

    // 构造一个包含按钮的新单元格。设置onTap属性以指定在点击按钮时要执行的操作。
    addButton(title: string): UITableCell;

}

class UUID {
    static string(): string;
}

class WebView {
    shouldAllowRequest: Function;

    constructor(): WebView;

    static loadHTML(html: string, baseURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    static loadFile(fileURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    static loadURL(url: string, preferredSize: Size, fullscreen: boolean): Promise;

    loadURL(url: string): Promise;

    loadRequest(request: Request): Promise;

    loadHTML(html: string, baseURL: string): Promise;

    loadFile(fileURL: string): Promise;

    evaluateJavaScript(javaScript: string, useCallback: boolean): Promise<any>;

    getHTML(): Promise<any>;

    present(fullscreen: boolean): Promise;

    waitForLoad(): Promise<any>;
}

class WidgetDate {
    date: Date;
    textColor: Color;
    font: Font;
    textOpacity: number;
    lineLimit: number;
    minimumScaleFactor: number;
    shadowColor: Color;
    shadowRadius: number;
    shadowOffset: Point;
    url: string;

    leftAlignText();

    centerAlignText();

    rightAlignText();

    applyTimeStyle();

    applyDateStyle();

    applyRelativeStyle();

    applyOffsetStyle();

    applyTimerStyle();
}

class WidgetImage {
    image: Image;
    resizable: boolean;
    imageSize: Size;
    imageOpacity: number;
    cornerRadius: number;
    borderWidth: number;
    borderColor: Color;
    containerRelativeShape: boolean;
    tintColor: Color;
    url: string;

    leftAlignImage();

    centerAlignImage();

    rightAlignImage();

    applyFittingContentMode();

    applyFillingContentMode();
}

class WidgetSpacer {
    length: number;
}

class WidgetStack {
    backgroundColor: Color;
    backgroundImage: Image;
    backgroundGradient: LinearGradient;
    spacing: number;
    size: Size;
    cornerRadius: number;
    borderWidth: number;
    borderColor: Color;
    url: string;

    addText(text: string): WidgetText;

    addDate(date: Date): WidgetDate;

    addImage(image: Image): WidgetImage;

    addSpacer(length: number): WidgetSpacer;

    addStack(): WidgetStack;

    setPadding(top: number, leading: number, bottom: number, trailing: number);

    useDefaultPadding();

    topAlignContent();

    centerAlignContent();

    bottomAlignContent();

    layoutHorizontally();

    layoutVertically();
}

class WidgetText {
    text: string;
    textColor: Color;
    font: Font;
    textOpacity: number;
    lineLimit: number;
    minimumScaleFactor: number;
    shadowColor: Color;
    shadowRadius: number;
    shadowOffset: Point;
    url: string;

    leftAlignText();

    centerAlignText();

    rightAlignText();
}

class XMLParser {
    didStartDocument: Function;
    didEndDocument: Function;
    didStartElement: Function;
    didEndElement: Function;
    foundCharacters: Function;
    parseErrorOccurred: Function;
    string: string;

    constructor(string: string): XMLParser;

    parse(): boolean;
}
