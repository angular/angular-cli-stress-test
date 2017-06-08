/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service290Service } from './service-290.service';

describe('Service290Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service290Service]
    });
  });

  it('should ...', inject([Service290Service], (service: Service290Service) => {
    expect(service).toBeTruthy();
  }));
});
