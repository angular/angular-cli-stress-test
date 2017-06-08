/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service855Service } from '../../services/service-855.service';

@Component({
  selector: 'app-comp-855',
  templateUrl: './comp-855.component.html',
  styleUrls: ['./comp-855.component.css']
})
export class Comp855Component implements OnInit {

  constructor(private _service: Service855Service) { }

  ngOnInit() {
  }

}
