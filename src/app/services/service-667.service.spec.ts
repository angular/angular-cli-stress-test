/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service667Service } from './service-667.service';

describe('Service667Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service667Service]
    });
  });

  it('should ...', inject([Service667Service], (service: Service667Service) => {
    expect(service).toBeTruthy();
  }));
});
