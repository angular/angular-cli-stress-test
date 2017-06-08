/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service71Service } from '../../services/service-71.service';

@Component({
  selector: 'app-comp-71',
  templateUrl: './comp-71.component.html',
  styleUrls: ['./comp-71.component.css']
})
export class Comp71Component implements OnInit {

  constructor(private _service: Service71Service) { }

  ngOnInit() {
  }

}
