import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Segment } from 'ionic-angular';
import { GitHubServiceProvider } from '../../providers/git-hub-service/git-hub.service';
import {User} from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:username'
  }
)
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username:  string;
  user: User;
  repositories: Repository[];
  constructor(private github: GitHubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    //this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    //this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data)
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }


  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    
    if(this.username){
      this.getUserInformation();
    }
  }

}
