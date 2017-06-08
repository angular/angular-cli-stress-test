/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service929Service } from '../../services/service-929.service';

@Component({
  selector: 'app-comp-929',
  templateUrl: './comp-929.component.html',
  styleUrls: ['./comp-929.component.css']
})
export class Comp929Component implements OnInit {

  constructor(private _service: Service929Service) { }

  ngOnInit() {
  }

}
