/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service482Service } from '../../services/service-482.service';

@Component({
  selector: 'app-comp-482',
  templateUrl: './comp-482.component.html',
  styleUrls: ['./comp-482.component.css']
})
export class Comp482Component implements OnInit {

  constructor(private _service: Service482Service) { }

  ngOnInit() {
  }

}
