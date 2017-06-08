/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service295Service } from './service-295.service';

describe('Service295Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service295Service]
    });
  });

  it('should ...', inject([Service295Service], (service: Service295Service) => {
    expect(service).toBeTruthy();
  }));
});
