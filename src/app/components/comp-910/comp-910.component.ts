/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service910Service } from '../../services/service-910.service';

@Component({
  selector: 'app-comp-910',
  templateUrl: './comp-910.component.html',
  styleUrls: ['./comp-910.component.css']
})
export class Comp910Component implements OnInit {

  constructor(private _service: Service910Service) { }

  ngOnInit() {
  }

}
