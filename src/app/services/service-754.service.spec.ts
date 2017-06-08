/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service754Service } from './service-754.service';

describe('Service754Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service754Service]
    });
  });

  it('should ...', inject([Service754Service], (service: Service754Service) => {
    expect(service).toBeTruthy();
  }));
});
