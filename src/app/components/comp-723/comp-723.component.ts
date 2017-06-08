/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service723Service } from '../../services/service-723.service';

@Component({
  selector: 'app-comp-723',
  templateUrl: './comp-723.component.html',
  styleUrls: ['./comp-723.component.css']
})
export class Comp723Component implements OnInit {

  constructor(private _service: Service723Service) { }

  ngOnInit() {
  }

}
