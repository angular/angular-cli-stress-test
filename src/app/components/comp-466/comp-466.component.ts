/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service466Service } from '../../services/service-466.service';

@Component({
  selector: 'app-comp-466',
  templateUrl: './comp-466.component.html',
  styleUrls: ['./comp-466.component.css']
})
export class Comp466Component implements OnInit {

  constructor(private _service: Service466Service) { }

  ngOnInit() {
  }

}
