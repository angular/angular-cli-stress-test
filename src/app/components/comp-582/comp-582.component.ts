/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service582Service } from '../../services/service-582.service';

@Component({
  selector: 'app-comp-582',
  templateUrl: './comp-582.component.html',
  styleUrls: ['./comp-582.component.css']
})
export class Comp582Component implements OnInit {

  constructor(private _service: Service582Service) { }

  ngOnInit() {
  }

}
