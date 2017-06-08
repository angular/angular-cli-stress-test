/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service156Service } from '../../services/service-156.service';

@Component({
  selector: 'app-comp-156',
  templateUrl: './comp-156.component.html',
  styleUrls: ['./comp-156.component.css']
})
export class Comp156Component implements OnInit {

  constructor(private _service: Service156Service) { }

  ngOnInit() {
  }

}
