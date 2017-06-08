/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service788Service } from '../../services/service-788.service';

@Component({
  selector: 'app-comp-788',
  templateUrl: './comp-788.component.html',
  styleUrls: ['./comp-788.component.css']
})
export class Comp788Component implements OnInit {

  constructor(private _service: Service788Service) { }

  ngOnInit() {
  }

}
