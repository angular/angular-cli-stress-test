/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service898Service } from '../../services/service-898.service';

@Component({
  selector: 'app-comp-898',
  templateUrl: './comp-898.component.html',
  styleUrls: ['./comp-898.component.css']
})
export class Comp898Component implements OnInit {

  constructor(private _service: Service898Service) { }

  ngOnInit() {
  }

}
