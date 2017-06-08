/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service593Service } from '../../services/service-593.service';

@Component({
  selector: 'app-comp-593',
  templateUrl: './comp-593.component.html',
  styleUrls: ['./comp-593.component.css']
})
export class Comp593Component implements OnInit {

  constructor(private _service: Service593Service) { }

  ngOnInit() {
  }

}
