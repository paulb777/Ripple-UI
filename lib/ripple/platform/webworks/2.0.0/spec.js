/*
 *  Copyright 2011 Research In Motion Limited.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {

    id: "webworks",
    version: "2.0.0",
    name: "WebWorks",

    persistencePrefix: "rim-",

    ui: require('ripple/platform/webworks/2.0.0/spec/ui'),
    device: require('ripple/platform/webworks/2.0.0/spec/device'),
    config: require('ripple/platform/webworks/2.0.0/spec/config'),
    events: require('ripple/platform/webworks/2.0.0/spec/events'),

    objects: {
        XMLHttpRequest: {
            path: "webworks/2.0.0/XMLHttpRequest"
        },
        Coordinates: {
            path: "w3c/1.0/Coordinates"
        },
        Position: {
            path: "w3c/1.0/Position"
        },
        PositionError: {
            path: "w3c/1.0/PositionError"
        },
        navigator: {
            path: "w3c/1.0/navigator",
            children: {
                geolocation: {
                    path: "w3c/1.0/geolocation"
                }
            }
        },
        blackberry: {
            path: "webworks/2.0.0/client/blackberry",
            children: {
                pim: {
                    path: "webworks/2.0.0/client/pim",
                    feature: "blackberry.pim.Task|blackberry.pim.Recurrence|blackberry.pim.Reminder|blackberry.pim.Appointment|blackberry.pim.Address|blackberry.pim.Attendee|blackberry.pim.Memo|blackberry.pim.Contact",
                    children: {
                        Task: {
                            path: "webworks/2.0.0/client/Task",
                            feature: "blackberry.pim.Task"
                        },
                        Recurrence: {
                            path: "webworks/2.0.0/client/Recurrence",
                            feature: "blackberry.pim.Recurrence"
                        },
                        Reminder: {
                            path: "webworks/2.0.0/client/Reminder",
                            feature: "blackberry.pim.Reminder"
                        },
                        Appointment: {
                            path: "webworks/2.0.0/client/Appointment",
                            feature: "blackberry.pim.Appointment"
                        },
                        Address: {
                            path: "webworks/2.0.0/client/Address",
                            feature: "blackberry.pim.Address"
                        },
                        Attendee: {
                            path: "webworks/2.0.0/client/Attendee",
                            feature: "blackberry.pim.Attendee"
                        },
                        Memo: {
                            path: "webworks/2.0.0/client/Memo",
                            feature: "blackberry.pim.Memo"
                        },
                        Contact: {
                            path: "webworks/2.0.0/client/Contact",
                            feature: "blackberry.pim.Contact"
                        }
                    }
                },
                phone: {
                    children: {
                        Phone: {
                            path: "webworks/2.0.0/client/Phone",
                            feature: "blackberry.phone.Phone"
                        },
                        PhoneLogs: {
                            path: "webworks/2.0.0/client/PhoneLogs",
                            feature: "blackberry.phone.PhoneLogs|blackberry.phone.Find"
                        },
                        Find: {
                            children: {
                                FilterExpression: {
                                    path: "webworks/2.0.0/client/FilterExpression",
                                    feature: "blackberry.phone.Find"
                                }
                            }
                        }
                    }
                },
                message: {
                    path: "webworks/2.0.0/client/messaging",
                    feature: "blackberry.message.sms|blackberry.message",
                    children: {
                        sms: {
                            path: "webworks/2.0.0/client/sms",
                            feature: "blackberry.message.sms"
                        },
                        Message: {
                            path: "webworks/2.0.0/client/Message",
                            feature: "blackberry.message"
                        }
                    }
                },
                transport: {
                    path: "webworks/2.0.0/client/transport"
                },
                events: {
                    path: "webworks/2.0.0/client/events"
                },
                app: {
                    path: "webworks/2.0.0/client/app",
                    feature: "blackberry.app",
                    children: {
                        event: {
                            path: "webworks/2.0.0/client/appEvent",
                            feature: "blackberry.app.event"
                        }
                    }
                },
                invoke: {
                    path: "webworks/2.0.0/client/invoke",
                    feature: "blackberry.invoke",
                    children: {
                        AddressBookArguments: {
                            path: "webworks/2.0.0/client/AddressBookArguments",
                            feature: "blackberry.invoke.AddressBookArguments"
                        },
                        BrowserArguments: {
                            path: "webworks/2.0.0/client/BrowserArguments",
                            feature: "blackberry.invoke.BrowserArguments"
                        },
                        CameraArguments: {
                            path: "webworks/2.0.0/client/CameraArguments",
                            feature: "blackberry.invoke.CameraArguments"
                        },
                        CalendarArguments: {
                            path: "webworks/2.0.0/client/CalendarArguments",
                            feature: "blackberry.invoke.CalendarArguments"
                        },
                        JavaArguments: {
                            path: "webworks/2.0.0/client/JavaArguments",
                            feature: "blackberry.invoke.JavaArguments"
                        },
                        MapsArguments: {
                            path: "webworks/2.0.0/client/MapsArguments",
                            feature: "blackberry.invoke.MapsArguments"
                        },
                        MemoArguments: {
                            path: "webworks/2.0.0/client/MemoArguments",
                            feature: "blackberry.invoke.MemoArguments"
                        },
                        MessageArguments: {
                            path: "webworks/2.0.0/client/MessageArguments",
                            feature: "blackberry.invoke.MessageArguments"
                        },
                        PhoneArguments: {
                            path: "webworks/2.0.0/client/PhoneArguments",
                            feature: "blackberry.invoke.PhoneArguments"
                        },
                        SearchArguments: {
                            path: "webworks/2.0.0/client/SearchArguments",
                            feature: "blackberry.invoke.SearchArguments"
                        },
                        TaskArguments: {
                            path: "webworks/2.0.0/client/TaskArguments",
                            feature: "blackberry.invoke.TaskArguments"
                        }
                    }
                },
                identity: {
                    path: "webworks/2.0.0/client/identity",
                    feature: "blackberry.identity",
                    children: {
                        Transport: {
                            path: "webworks/2.0.0/client/identity/Transport",
                            feature: "blackberry.identity"
                        },
                        Service: {
                            path: "webworks/2.0.0/client/identity/Service",
                            feature: "blackberry.identity"
                        },
                        phone: {
                            path: "webworks/2.0.0/client/identity/phone",
                            feature: "blackberry.identity.phone"
                        }
                    }
                },
                system: {
                    path: "webworks/2.0.0/client/system",
                    feature: "blackberry.system",
                    children: {
                        event: {
                            path: "webworks/2.0.0/client/systemEvent",
                            feature: "blackberry.system.event"
                        }
                    }
                },
                ui: {
                    children: {
                        dialog: {
                            path: "webworks/2.0.0/client/dialog",
                            feature: "blackberry.ui.dialog"
                        },
                        menu: {
                            path: "webworks/2.0.0/client/menu",
                            children: {
                                MenuItem: {
                                    path: "webworks/2.0.0/client/MenuItem"
                                }
                            }
                        }
                    }
                },
                utils: {
                    path: "webworks/2.0.0/client/utils",
                    feature: "blackberry.utils"
                },
                find: {
                    feature: "blackberry.find",
                    children: {
                        FilterExpression: {
                            path: "webworks/2.0.0/client/FilterExpression",
                            feature: "blackberry.find"
                        }
                    }
                },
                push: {
                    path: "webworks/2.0.0/client/push",
                    feature: "blackberry.push"
                },
                audio: {
                    path: "webworks/2.0.0/client/audio",
                    feature: "blackberry.audio",
                    children: {
                        Player: {
                            path: "webworks/2.0.0/client/AudioPlayer",
                            feature: "blackberry.audio.Player"
                        }
                    }
                }
            }
        }
    }
};