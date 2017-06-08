/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service592Service } from '../../services/service-592.service';

@Component({
  selector: 'app-comp-592',
  templateUrl: './comp-592.component.html',
  styleUrls: ['./comp-592.component.css']
})
export class Comp592Component implements OnInit {

  constructor(private _service: Service592Service) { }

  ngOnInit() {
  }

}
