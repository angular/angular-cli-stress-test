/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service578Service } from '../../services/service-578.service';

@Component({
  selector: 'app-comp-578',
  templateUrl: './comp-578.component.html',
  styleUrls: ['./comp-578.component.css']
})
export class Comp578Component implements OnInit {

  constructor(private _service: Service578Service) { }

  ngOnInit() {
  }

}
