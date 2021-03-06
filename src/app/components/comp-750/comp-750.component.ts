/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service750Service } from '../../services/service-750.service';

@Component({
  selector: 'app-comp-750',
  templateUrl: './comp-750.component.html',
  styleUrls: ['./comp-750.component.css']
})
export class Comp750Component implements OnInit {

  constructor(private _service: Service750Service) { }

  ngOnInit() {
  }

}
