/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service492Service } from './service-492.service';

describe('Service492Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service492Service]
    });
  });

  it('should ...', inject([Service492Service], (service: Service492Service) => {
    expect(service).toBeTruthy();
  }));
});
