/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service564Service } from '../../services/service-564.service';

@Component({
  selector: 'app-comp-564',
  templateUrl: './comp-564.component.html',
  styleUrls: ['./comp-564.component.css']
})
export class Comp564Component implements OnInit {

  constructor(private _service: Service564Service) { }

  ngOnInit() {
  }

}
