# 关于DEMO中扫码工具配置

## react-native-camera 需要手动安装

* iOS

        npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
        In XCode, in the project navigator, right click Libraries ➜ Add Files to [your project's name]
        Go to node_modules ➜ react-native-camera and add RCTCamera.xcodeproj
        In XCode, in the project navigator, select your project. Add libRCTCamera.a to your project's Build Phases ➜ Link Binary With Libraries
        Click RCTCamera.xcodeproj in the project navigator and go the Build Settings tab. Make sure 'All' is toggled on (instead of 'Basic'). In the Search Paths section, look for Header Search Paths and make sure it contains both $(SRCROOT)/../../react-native/React and $(SRCROOT)/../../../React - mark both as recursive.
        Run your project (Cmd+R)

* Android

        npm install react-native-camera@https://github.com/lwansbrough/react-native-camera.git --save
        Open up `android/app/src/main/java/[...]/MainActivity.java

        Add import com.lwansbrough.RCTCamera.*; to the imports at the top of the file
        Add new RCTCameraPackage() to the list returned by the getPackages() method
        Append the following lines to android/settings.gradle:

        include ':react-native-camera'
        project(':react-native-camera').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-camera/android')
        Insert the following lines inside the dependencies block in android/app/build.gradle:

        compile project(':react-native-camera')

## react-native-barcodescanner 需要手动安装

* Android

        npm install react-native-camera@https://github.com/ideacreation/react-native-barcodescanner.git --save

        In android/settings.gradle
        ...
        include ':ReactNativeBarcodescanner', ':app'
        project(':ReactNativeBarcodescanner').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-barcodescanner/android')

        In android/app/build.gradle
        ...
        dependencies {
            ...
            compile project(':ReactNativeBarcodescanner')
        }


        register module (in MainActivity.java)
        Add the following import statement:

        import com.eguma.barcodescanner.BarcodeScanner;
        ...and then add BarcodeScanner to exported package list (MainActivity.java#getPackages):

        public class MainActivity extends ReactActivity {
            // (...)

            @Override
            protected List<ReactPackage> getPackages() {
              return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new BarcodeScanner()
              );
            }
        }
