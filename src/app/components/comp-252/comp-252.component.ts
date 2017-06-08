/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service252Service } from '../../services/service-252.service';

@Component({
  selector: 'app-comp-252',
  templateUrl: './comp-252.component.html',
  styleUrls: ['./comp-252.component.css']
})
export class Comp252Component implements OnInit {

  constructor(private _service: Service252Service) { }

  ngOnInit() {
  }

}
