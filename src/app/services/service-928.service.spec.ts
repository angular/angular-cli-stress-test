/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service928Service } from './service-928.service';

describe('Service928Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service928Service]
    });
  });

  it('should ...', inject([Service928Service], (service: Service928Service) => {
    expect(service).toBeTruthy();
  }));
});
