/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service735Service } from '../../services/service-735.service';

@Component({
  selector: 'app-comp-735',
  templateUrl: './comp-735.component.html',
  styleUrls: ['./comp-735.component.css']
})
export class Comp735Component implements OnInit {

  constructor(private _service: Service735Service) { }

  ngOnInit() {
  }

}
