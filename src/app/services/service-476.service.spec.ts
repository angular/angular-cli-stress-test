/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service476Service } from './service-476.service';

describe('Service476Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service476Service]
    });
  });

  it('should ...', inject([Service476Service], (service: Service476Service) => {
    expect(service).toBeTruthy();
  }));
});
