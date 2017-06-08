/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service630Service } from '../../services/service-630.service';

@Component({
  selector: 'app-comp-630',
  templateUrl: './comp-630.component.html',
  styleUrls: ['./comp-630.component.css']
})
export class Comp630Component implements OnInit {

  constructor(private _service: Service630Service) { }

  ngOnInit() {
  }

}
