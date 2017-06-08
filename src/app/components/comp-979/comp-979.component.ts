/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service979Service } from '../../services/service-979.service';

@Component({
  selector: 'app-comp-979',
  templateUrl: './comp-979.component.html',
  styleUrls: ['./comp-979.component.css']
})
export class Comp979Component implements OnInit {

  constructor(private _service: Service979Service) { }

  ngOnInit() {
  }

}
