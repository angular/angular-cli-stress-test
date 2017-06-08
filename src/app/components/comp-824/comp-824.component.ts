/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service824Service } from '../../services/service-824.service';

@Component({
  selector: 'app-comp-824',
  templateUrl: './comp-824.component.html',
  styleUrls: ['./comp-824.component.css']
})
export class Comp824Component implements OnInit {

  constructor(private _service: Service824Service) { }

  ngOnInit() {
  }

}
