/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service264Service } from './service-264.service';

describe('Service264Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service264Service]
    });
  });

  it('should ...', inject([Service264Service], (service: Service264Service) => {
    expect(service).toBeTruthy();
  }));
});
