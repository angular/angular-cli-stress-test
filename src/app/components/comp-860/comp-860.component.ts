/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service860Service } from '../../services/service-860.service';

@Component({
  selector: 'app-comp-860',
  templateUrl: './comp-860.component.html',
  styleUrls: ['./comp-860.component.css']
})
export class Comp860Component implements OnInit {

  constructor(private _service: Service860Service) { }

  ngOnInit() {
  }

}
