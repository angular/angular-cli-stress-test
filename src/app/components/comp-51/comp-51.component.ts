/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service51Service } from '../../services/service-51.service';

@Component({
  selector: 'app-comp-51',
  templateUrl: './comp-51.component.html',
  styleUrls: ['./comp-51.component.css']
})
export class Comp51Component implements OnInit {

  constructor(private _service: Service51Service) { }

  ngOnInit() {
  }

}
