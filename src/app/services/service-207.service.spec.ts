/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service207Service } from './service-207.service';

describe('Service207Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service207Service]
    });
  });

  it('should ...', inject([Service207Service], (service: Service207Service) => {
    expect(service).toBeTruthy();
  }));
});
